import {
  pathLocaleToLocale,
  pathLocales,
  siteBaseUrl,
  translations,
} from "@/lib/i18n";
import type { Metadata } from "next";
import { CalculatorView } from "../CalculatorView";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const pathLocale = pathLocales.includes(locale as (typeof pathLocales)[number])
    ? (locale as (typeof pathLocales)[number])
    : "en";
  const localeKey = pathLocaleToLocale(pathLocale);
  const pageUrl = `${siteBaseUrl}/${pathLocale}/time`;
  const title = `${translations[localeKey].appTitleTime} | FindYourPace`;
  const description = translations[localeKey].appDescriptionTime;
  const languages: Record<string, string> = {};
  for (const loc of pathLocales) {
    languages[loc === "pt" ? "pt" : loc] = `${siteBaseUrl}/${loc}/time`;
  }
  languages["x-default"] = `${siteBaseUrl}/en/time`;
  return {
    title,
    description,
    alternates: { canonical: pageUrl, languages },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: "FindYourPace",
      title,
      description,
      locale: localeKey,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "FindYourPace – Running pace calculator" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default function TimePage() {
  return <CalculatorView />;
}
