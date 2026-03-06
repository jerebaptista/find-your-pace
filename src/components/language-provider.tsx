"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  defaultLocale,
  detectLocale,
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
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }

    const savedLocale = window.localStorage.getItem(
      LOCALE_STORAGE_KEY
    ) as Locale | null;

    if (savedLocale && translations[savedLocale]) {
      return savedLocale;
    }

    return detectLocale(window.navigator.language);
  });

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
    [locale]
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
