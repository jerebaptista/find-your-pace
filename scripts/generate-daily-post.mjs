#!/usr/bin/env node
/**
 * Gera um post diário em inglês e traduz para os 9 outros idiomas.
 * Uso: OPENAI_API_KEY=xxx [UNSPLASH_ACCESS_KEY=xxx] node scripts/generate-daily-post.mjs
 * Estrutura: content/blog/{locale}/{slug}.mdx — slug em inglês, sem data.
 * Imagem: se UNSPLASH_ACCESS_KEY estiver definida, busca uma foto horizontal no Unsplash (query: Running).
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const CONTENT_DIR = join(process.cwd(), "content", "blog");
const DOCS_DIR = join(process.cwd(), "docs");
const SEO_RULES_PATH = join(DOCS_DIR, "blog-seo-rules.md");
const GENERATE_PROMPT_PATH = join(DOCS_DIR, "blog-generate-prompt.md");

const LOCALES = ["en", "es", "fr", "it", "pt", "ja", "de", "nl", "pl", "sv"];
const TRANSLATE_LOCALES = LOCALES.filter((l) => l !== "en");

if (!OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is required");
  process.exit(1);
}

const TODAY = new Date();
const DATE_STR = TODAY.toISOString().slice(0, 10);

const FALLBACK_TOPICS = [
  "how to improve pace in 5k and 10k races",
  "recovery and rest for runners",
  "nutrition and hydration on race day",
  "speedwork and interval training",
  "12-week half marathon training",
  "avoiding running injuries: stretching and strength",
  "pace per km vs per mile",
  "how to calculate finish time from pace",
];

function getGeneratePrompt() {
  try {
    if (existsSync(GENERATE_PROMPT_PATH)) {
      return readFileSync(GENERATE_PROMPT_PATH, "utf8").trim();
    }
  } catch (_) {}
  return null;
}

function pickTopicOfDay() {
  const start = new Date("2025-01-01");
  const diff = Math.floor((TODAY - start) / (1000 * 60 * 60 * 24));
  return FALLBACK_TOPICS[diff % FALLBACK_TOPICS.length];
}

async function fetchRedditHot() {
  try {
    const res = await fetch(
      "https://www.reddit.com/r/running/hot.json?limit=8",
      { headers: { "User-Agent": "FindYourPace-Blog/1.0" } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const titles = (data?.data?.children || [])
      .map((c) => c?.data?.title)
      .filter(Boolean);
    return titles;
  } catch (e) {
    console.warn("Reddit fetch failed:", e.message);
    return [];
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

/**
 * Busca uma imagem horizontal no Unsplash (query: Running, fotos).
 * Requer UNSPLASH_ACCESS_KEY. Retorna URL ou null.
 */
async function fetchUnsplashImage() {
  if (!UNSPLASH_ACCESS_KEY) return null;
  try {
    const url = new URL("https://api.unsplash.com/search/photos");
    url.searchParams.set("query", "Running");
    url.searchParams.set("orientation", "landscape");
    url.searchParams.set("per_page", "10");
    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        "Accept-Version": "v1",
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const results = data?.results || [];
    if (results.length === 0) return null;
    const pick = results[Math.floor(Math.random() * results.length)];
    return pick?.urls?.regular || pick?.urls?.full || null;
  } catch (e) {
    console.warn("Unsplash fetch failed:", e.message);
    return null;
  }
}

async function openai(messages, options = {}) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages,
      max_tokens: options.max_tokens ?? 1200,
      temperature: options.temperature ?? 0.7,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI API error: ${res.status} ${err}`);
  }
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error("Empty response from OpenAI");
  return content;
}

function alreadyPostedToday() {
  const enDir = join(CONTENT_DIR, "en");
  if (!existsSync(enDir)) return false;
  const files = readdirSync(enDir).filter(
    (f) => f.endsWith(".mdx") || f.endsWith(".md")
  );
  for (const file of files) {
    const raw = readFileSync(join(enDir, file), "utf8");
    const { data } = matter(raw);
    if (data.date === DATE_STR) return true;
  }
  return false;
}

async function generatePostEn(context) {
  const promptTemplate = getGeneratePrompt();
  const systemPrompt = promptTemplate
    ? promptTemplate.replace(/\{\{THEME\}\}/g, context)
    : `You are a writer for FindYourPace, a running pace and time calculator blog.
Write a post in English for beginner and intermediate runners.
Output valid JSON only with keys: "title", "description", "body", "slug", "mainKeyword", "secondaryKeywords" (array of 5), "tags" (array of 5).
Theme/context: ${context}`;

  const userPrompt = promptTemplate
    ? `Use the theme above and return only the JSON object (no markdown, no code block).`
    : `Return only the JSON object.`;

  const raw = await openai(
    [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    { max_tokens: 4500 }
  );
  const cleaned = raw.replace(/^```\w*\n?|\n?```$/g, "").trim();
  return JSON.parse(cleaned);
}

async function translatePost(enFrontmatter, enBody, targetLocale) {
  const localeNames = {
    es: "Spanish",
    fr: "French",
    it: "Italian",
    pt: "Portuguese (Brazil)",
    ja: "Japanese",
    de: "German",
    nl: "Dutch",
    pl: "Polish",
    sv: "Swedish",
  };
  const lang = localeNames[targetLocale] || targetLocale;
  const systemPrompt = `You are a translator. Translate the following blog post from English to ${lang}.
Keep the same structure: Markdown with ## headings, paragraphs, lists, **bold**.
Do not invent or add links. Output valid JSON only with keys: "title", "description", "body".`;

  const userPrompt = `Translate to ${lang}:

Title: ${enFrontmatter.title}
Description: ${enFrontmatter.description}

Body (markdown):
${enBody}

Return only the JSON object.`;

  const raw = await openai(
    [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    { max_tokens: 4500, temperature: 0.3 }
  );
  const cleaned = raw.replace(/^```\w*\n?|\n?```$/g, "").trim();
  return JSON.parse(cleaned);
}

function escapeYamlString(s) {
  if (s == null || s === "") return "";
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writePost(locale, slug, meta, body, extra = {}) {
  const dir = join(CONTENT_DIR, locale);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  let front = `---
title: "${escapeYamlString(meta.title)}"
description: "${escapeYamlString(meta.description)}"
date: "${meta.date || DATE_STR}"
slug: "${slug}"
`;
  if (meta.image) front += `image: "${escapeYamlString(meta.image)}"\n`;
  if (extra.mainKeyword) front += `mainKeyword: "${escapeYamlString(extra.mainKeyword)}"\n`;
  if (Array.isArray(extra.secondaryKeywords) && extra.secondaryKeywords.length)
    front += `secondaryKeywords: ${JSON.stringify(extra.secondaryKeywords)}\n`;
  if (Array.isArray(extra.tags) && extra.tags.length)
    front += `tags: ${JSON.stringify(extra.tags)}\n`;
  front += `---

`;
  const path = join(dir, `${slug}.mdx`);
  writeFileSync(path, front + (body || "").trim(), "utf8");
  return path;
}

async function main() {
  const forceGenerate = /^(1|true|yes)$/i.test(String(process.env.FORCE_GENERATE || ""));
  if (!forceGenerate && alreadyPostedToday()) {
    console.log("Post for today already exists, skipping. (Use FORCE_GENERATE=1 to generate anyway.)");
    process.exit(0);
  }
  if (forceGenerate) console.log("FORCE_GENERATE: ignoring 'post exists today' check.");

  const redditTitles = await fetchRedditHot();
  const context =
    redditTitles.length > 0
      ? redditTitles.join("\n- ")
      : `Topic of the day: ${pickTopicOfDay()}`;

  console.log("Generating post in English...");
  const en = await generatePostEn(context);
  const title = en.title && en.title.length > 10 ? en.title : `Running and pace – ${DATE_STR}`;
  const slug = (en.slug && slugify(en.slug)) || slugify(title);
  if (!slug) {
    console.error("Could not derive slug from title");
    process.exit(1);
  }

  let imageUrl = null;
  if (UNSPLASH_ACCESS_KEY) {
    console.log("Fetching image from Unsplash (Running, landscape)...");
    imageUrl = await fetchUnsplashImage();
    if (imageUrl) console.log("Image found:", imageUrl.slice(0, 50) + "...");
  }

  const enMeta = {
    title,
    description: en.description || "Post about running and pace for FindYourPace.",
    date: DATE_STR,
    slug,
    image: imageUrl || undefined,
  };
  const extra = {
    mainKeyword: en.mainKeyword || null,
    secondaryKeywords: Array.isArray(en.secondaryKeywords) ? en.secondaryKeywords : null,
    tags: Array.isArray(en.tags) ? en.tags : null,
  };
  const enPath = writePost("en", slug, enMeta, en.body, extra);
  console.log("Created:", enPath);

  for (const locale of TRANSLATE_LOCALES) {
    console.log("Translating to", locale, "...");
    const translated = await translatePost(
      { title: enMeta.title, description: enMeta.description },
      en.body,
      locale
    );
    const meta = {
      title: translated.title || enMeta.title,
      description: translated.description || enMeta.description,
      date: DATE_STR,
      slug,
      image: enMeta.image,
    };
    const path = writePost(locale, slug, meta, translated.body, extra);
    console.log("Created:", path);
  }

  console.log("Done. Slug:", slug);
  console.log("FILE_PATH=" + enPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
