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
  const pageUrl = `${siteBaseUrl}/${pathLocale}/distance`;
  const title = `${translations[localeKey].appTitleDistance} | FindYourPace`;
  const description = translations[localeKey].appDescriptionDistance;
  const languages: Record<string, string> = {};
  for (const loc of pathLocales) {
    languages[loc === "pt" ? "pt" : loc] = `${siteBaseUrl}/${loc}/distance`;
  }
  languages["x-default"] = `${siteBaseUrl}/en/distance`;
  return {
    title,
    description,
    alternates: { canonical: pageUrl, languages },
    openGraph: { type: "website", url: pageUrl, siteName: "FindYourPace", title, description, locale: localeKey },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function DistancePage() {
  return <CalculatorView />;
}
