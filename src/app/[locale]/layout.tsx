import { redirect } from "next/navigation";

import {
  faqByLocale,
  pageTitleByPathLocale,
  pathLocaleToLocale,
  pathLocales,
  siteBaseUrl,
  translations,
} from "@/lib/i18n";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const pathLocale = pathLocales.includes(locale as (typeof pathLocales)[number])
    ? (locale as (typeof pathLocales)[number])
    : "en";

  const languages: Record<string, string> = {};
  for (const loc of pathLocales) {
    languages[loc === "pt" ? "pt" : loc] = `${siteBaseUrl}/${loc}`;
  }
  languages["x-default"] = `${siteBaseUrl}/`;

  const localeKey = pathLocaleToLocale(pathLocale);
  const pageUrl = `${siteBaseUrl}/${pathLocale}`;
  const title = pageTitleByPathLocale[pathLocale];
  const description = translations[localeKey].appDescription;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: "FindYourPace",
      title,
      description,
      locale: localeKey,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "FindYourPace",
  url: siteBaseUrl,
  applicationCategory: "SportsApplication",
  operatingSystem: "Any",
  description:
    "Free running pace calculator to estimate pace, distance, time and race splits.",
};

function buildFaqSchema(locale: string) {
  const loc = pathLocaleToLocale(locale);
  const faq = faqByLocale[loc];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!pathLocales.includes(locale as (typeof pathLocales)[number])) {
    redirect("/en");
  }

  const faqSchema = buildFaqSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
