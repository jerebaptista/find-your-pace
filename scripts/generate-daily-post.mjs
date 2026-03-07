#!/usr/bin/env node
/**
 * Gera um post diário para o blog usando IA.
 * Uso: OPENAI_API_KEY=xxx node scripts/generate-daily-post.mjs
 * Inspiração: Reddit r/running (hot) ou lista fixa de temas.
 * Escreve em content/blog/YYYY-MM-DD-slug.mdx
 */

import { writeFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const CONTENT_DIR = join(process.cwd(), "content", "blog");

if (!OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is required");
  process.exit(1);
}

const TODAY = new Date();
const DATE_STR = TODAY.toISOString().slice(0, 10); // YYYY-MM-DD

// Temas de fallback quando Reddit falhar ou retornar pouco
const FALLBACK_TOPICS = [
  "como melhorar o pace em provas de 5k e 10k",
  "recuperação pós-treino e descanso para corredores",
  "nutrição e hidratação no dia da corrida",
  "treino de tiros para ganhar velocidade",
  "preparação para meia maratona em 12 semanas",
  "evitar lesões na corrida: alongamento e fortalecimento",
  "diferença entre ritmo por km e por milha",
  "como calcular tempo final usando pace",
];

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
    .replace(/^-|-$/g, "");
}

function buildSlug(title) {
  const base = slugify(title).slice(0, 40);
  return `${DATE_STR}-${base}`;
}

async function generatePostWithOpenAI(context) {
  const systemPrompt = `Você é um redator do blog FindYourPace, um site sobre calculadora de pace e tempo de corrida.
Escreva um post em português do Brasil, útil para corredores iniciantes e intermediários.
O post deve ter entre 300 e 500 palavras, tom amigável e informativo.
Use apenas Markdown: título (#), subtítulos (##), parágrafos, listas e **negrito** quando fizer sentido.
Não invente links externos. Não use imagens.`;

  const userPrompt = `Com base no seguinte contexto do que está em discussão entre corredores (Reddit r/running ou tema do dia), escreva um post único e relevante para o blog.

Contexto/temas:
${context}

Gere apenas o corpo do post em Markdown, sem título no início (o título será usado no frontmatter). No primeiro parágrafo já entre no assunto.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 1200,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI API error: ${res.status} ${err}`);
  }

  const data = await res.json();
  const body = data?.choices?.[0]?.message?.content?.trim();
  if (!body) throw new Error("Empty response from OpenAI");

  // Extrair primeiro parágrafo ou linha como sugestão de título (até 60 chars)
  const firstLine = body.split("\n").find((l) => l.trim().length > 0) || "";
  const titleSuggestion = firstLine.replace(/^#+\s*/, "").trim().slice(0, 60);

  return { body, titleSuggestion };
}

async function main() {
  const redditTitles = await fetchRedditHot();
  const context =
    redditTitles.length > 0
      ? redditTitles.join("\n- ")
      : `Tema do dia: ${pickTopicOfDay()}`;

  const { body, titleSuggestion } = await generatePostWithOpenAI(context);

  // Título para frontmatter: usar sugestão ou genérico
  const title =
    titleSuggestion.length > 10 ? titleSuggestion : `Corrida e pace – ${DATE_STR}`;
  const slug = buildSlug(title);

  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "Post gerado com base em tendências e temas do dia para corredores."
date: "${DATE_STR}"
slug: "${slug}"
---

`;

  const filePath = join(CONTENT_DIR, `${slug}.mdx`);
  const content = frontmatter + body;

  // Evitar duplicata no mesmo dia
  if (existsSync(filePath)) {
    console.log("Post for today already exists, skipping:", filePath);
    process.exit(0);
  }

  const existing = readdirSync(CONTENT_DIR).filter((f) => f.startsWith(DATE_STR));
  if (existing.length > 0) {
    console.log("Post for today already exists, skipping.");
    process.exit(0);
  }

  writeFileSync(filePath, content, "utf8");
  console.log("Created:", filePath);
  // Workflow usa esse path para git add
  console.log("FILE_PATH=" + filePath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
