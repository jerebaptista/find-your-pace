import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/i18n";

export default function robots(): MetadataRoute.Robots {
  const base = siteBaseUrl.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
