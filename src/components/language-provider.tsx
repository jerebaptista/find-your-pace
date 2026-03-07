"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  defaultLocale,
  detectLocale,
  localeToPathLocale,
  pathLocaleToLocale,
  pathLocales,
  type Locale,
  translations,
} from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "find-your-pace-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof (typeof translations)[Locale]) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return defaultLocale;
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (saved && translations[saved]) return saved;
    return detectLocale(window.navigator.language);
  });

  useEffect(() => {
    const segment = pathname.split("/")[1];
    if (segment && pathLocales.includes(segment as (typeof pathLocales)[number])) {
      const fromUrl = pathLocaleToLocale(segment);
      setLocaleState(fromUrl);
    }
  }, [pathname]);

  const setLocale = useMemo(() => {
    return (newLocale: Locale) => {
      setLocaleState(newLocale);
      const pathSegment = localeToPathLocale(newLocale);
      const newPath = pathname.replace(/^\/[^/]+/, `/${pathSegment}`);
      if (newPath !== pathname) router.push(newPath);
    };
  }, [pathname, router]);

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => translations[locale][key],
    }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
