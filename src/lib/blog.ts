import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
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

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getPosts();
  const meta = posts.find((p) => p.slug === slug);
  if (!meta) return null;
  try {
    const file = readdirSync(CONTENT_DIR).find(
      (f) =>
        (f.endsWith(".mdx") || f.endsWith(".md")) &&
        f.replace(/\.(mdx|md)$/, "") === slug
    );
    if (!file) return null;
    const raw = readFileSync(join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const resolvedSlug = (data.slug as string) || file.replace(/\.(mdx|md)$/, "");
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
    return { ...meta, content: "" };
  }
}

export function getPosts(): BlogPostMeta[] {
  const dir = CONTENT_DIR;
  try {
    const files = readdirSync(dir).filter(
      (f) => f.endsWith(".mdx") || f.endsWith(".md")
    );
    const posts: BlogPostMeta[] = files.map((file) => {
      const fullPath = join(dir, file);
      const raw = readFileSync(fullPath, "utf8");
      const { data } = matter(raw);
      const slug = (data.slug as string) || file.replace(/\.(mdx|md)$/, "");
      return {
        title: (data.title as string) || slug,
        description: (data.description as string) || "",
        date: (data.date as string) || "",
        slug,
        image: data.image as string | undefined,
        author: (data.author as string) || "FindYourPace",
      };
    });
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
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
