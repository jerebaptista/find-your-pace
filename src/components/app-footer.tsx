"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { pathLocales, translations } from "@/lib/i18n";
import type { PathLocale } from "@/lib/i18n";

export function AppFooter() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const pathLocale = pathname?.split("/").filter(Boolean)[0];
  const basePath = pathLocales.includes(pathLocale as PathLocale)
    ? pathLocale
    : "en";
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <footer
      className="mt-auto shrink-0 border-t border-border bg-background py-6 text-center text-sm text-muted-foreground"
      role="contentinfo"
    >
      Copyright © {year} Find your pace. Win your race ·{" "}
      <Link
        href={`/${basePath}/privacy`}
        className="no-underline hover:text-foreground"
      >
        {t.menuPrivacyPolicy}
      </Link>
    </footer>
  );
}
