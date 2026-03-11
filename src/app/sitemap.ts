import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { pathLocales, siteBaseUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteBaseUrl.replace(/\/$/, "");
  const now = new Date().toISOString();

  const staticPaths = ["", "/time", "/distance", "/blog", "/privacy"] as const;

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of pathLocales) {
    for (const path of staticPaths) {
      const pathname = path ? `/${locale}${path}` : `/${locale}`;
      entries.push({
        url: `${base}${pathname}`,
        lastModified: now,
        changeFrequency: path === "/blog" ? "daily" : "weekly",
        priority: path === "" ? 1 : path === "/privacy" ? 0.5 : 0.8,
      });
    }
  }

  const slugs = getAllSlugs();
  for (const locale of pathLocales) {
    for (const slug of slugs) {
      entries.push({
        url: `${base}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
