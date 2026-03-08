import { existsSync, readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { pathLocales, type PathLocale } from "./i18n";
import type { Locale } from "./i18n";

export type BlogPostMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
  author?: string;
};

export type BlogPost = BlogPostMeta & { content: string };

const CONTENT_DIR = join(process.cwd(), "content", "blog");

function getLocaleDir(locale: PathLocale): string {
  return join(CONTENT_DIR, locale);
}

function findFileForSlug(locale: PathLocale, slug: string): string | null {
  const dir = getLocaleDir(locale);
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir).filter(
    (f) =>
      (f.endsWith(".mdx") || f.endsWith(".md")) &&
      f.replace(/\.(mdx|md)$/, "") === slug
  );
  if (files.length === 0) return null;
  return join(dir, files[0]);
}

/**
 * Returns all slugs that exist in at least one locale folder.
 */
export function getAllSlugs(): string[] {
  const slugs = new Set<string>();
  for (const locale of pathLocales) {
    const dir = getLocaleDir(locale);
    if (!existsSync(dir)) continue;
    const files = readdirSync(dir).filter(
      (f) => f.endsWith(".mdx") || f.endsWith(".md")
    );
    for (const file of files) {
      slugs.add(file.replace(/\.(mdx|md)$/, ""));
    }
  }
  return Array.from(slugs);
}

function getLocalesToTry(pathLocale: PathLocale): PathLocale[] {
  if (pathLocale === "en") return ["en"];
  const rest = pathLocales.filter((l) => l !== "en" && l !== pathLocale);
  return [pathLocale, "en", ...rest];
}

/**
 * Gets post meta for a slug in the given locale. Falls back to EN, then any other locale.
 */
function getPostMeta(slug: string, pathLocale: PathLocale): BlogPostMeta | null {
  const localeToTry = getLocalesToTry(pathLocale);
  for (const loc of localeToTry) {
    const filePath = findFileForSlug(loc, slug);
    if (!filePath) continue;
    try {
      const raw = readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      const resolvedSlug = (data.slug as string) || slug;
      return {
        title: (data.title as string) || resolvedSlug,
        description: (data.description as string) || "",
        date: (data.date as string) || "",
        slug: resolvedSlug,
        image: data.image as string | undefined,
        author: (data.author as string) || "FindYourPace",
      };
    } catch {
      continue;
    }
  }
  return null;
}

/**
 * Lists posts for a locale. Uses fallback to EN when the locale file is missing.
 * Sorted by date descending.
 */
export function getPosts(pathLocale: PathLocale): BlogPostMeta[] {
  const slugs = getAllSlugs();
  const posts: BlogPostMeta[] = [];
  for (const slug of slugs) {
    const meta = getPostMeta(slug, pathLocale);
    if (meta) posts.push(meta);
  }
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Gets full post by slug and locale. Falls back to EN, then any other locale.
 */
export function getPostBySlug(
  slug: string,
  pathLocale: PathLocale
): BlogPost | null {
  const localeToTry = getLocalesToTry(pathLocale);
  for (const loc of localeToTry) {
    const filePath = findFileForSlug(loc, slug);
    if (!filePath) continue;
    try {
      const raw = readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      const resolvedSlug = (data.slug as string) || slug;
      return {
        title: (data.title as string) || resolvedSlug,
        description: (data.description as string) || "",
        date: (data.date as string) || "",
        slug: resolvedSlug,
        image: data.image as string | undefined,
        author: (data.author as string) || "FindYourPace",
        content: content.trim(),
      };
    } catch {
      continue;
    }
  }
  return null;
}

/**
 * Formata a data do post conforme o locale:
 * - en (USA/Canada): "Mar 3, 2026"
 * - ja: "2026年3月3日" (year month day)
 * - outros: "3 de mar. de 2026" / "3 mar 2026" (day month year)
 */
export function formatBlogDate(dateStr: string, locale: Locale): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  if (locale === "en") {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  if (locale === "ja") {
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  return date.toLocaleDateString(locale === "pt-BR" ? "pt-BR" : locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
