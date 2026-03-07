"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  defaultLocale,
  localeToPathLocale,
  pathLocaleToLocale,
  pathLocales,
  type Locale,
  translations,
} from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "find-your-pace-locale";

type Translation = (typeof translations)[Locale];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <K extends keyof Translation>(key: K) => Translation[K];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (segment && pathLocales.includes(segment as (typeof pathLocales)[number])) {
    return pathLocaleToLocale(segment);
  }
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [locale, setLocaleState] = useState<Locale>(() =>
    getLocaleFromPathname(pathname)
  );

  useEffect(() => {
    const fromUrl = getLocaleFromPathname(pathname);
    setLocaleState(fromUrl);
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
