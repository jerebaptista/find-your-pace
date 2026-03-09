import { AppHeader } from "@/components/app-header";
import {
  pathLocaleToLocale,
  pathLocales,
  siteBaseUrl,
  translations,
} from "@/lib/i18n";
import type { PathLocale } from "@/lib/i18n";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return pathLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const pathLocale = pathLocales.includes(locale as (typeof pathLocales)[number])
    ? (locale as PathLocale)
    : "en";
  const localeKey = pathLocaleToLocale(pathLocale);
  const t = translations[localeKey];
  const pageUrl = `${siteBaseUrl}/${pathLocale}/privacy`;
  const title = `${t.privacyPageTitle} – FindYourPace`;
  const languages: Record<string, string> = {};
  for (const loc of pathLocales) {
    languages[loc === "pt" ? "pt" : loc] = `${siteBaseUrl}/${loc}/privacy`;
  }
  return {
    title,
    alternates: { canonical: pageUrl, languages },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: "FindYourPace",
      title,
      locale: localeKey,
    },
    twitter: { card: "summary", title },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const pathLocale = pathLocales.includes(locale as (typeof pathLocales)[number])
    ? (locale as PathLocale)
    : "en";
  const localeKey = pathLocaleToLocale(pathLocale);
  const t = translations[localeKey];

  return (
    <main className="flex min-h-screen flex-col bg-background py-5 lg:px-0">
      <AppHeader />
      <div className="w-full flex flex-col min-w-0 px-6 xl:px-[208px] 3xl:px-[348px]">
        <div className="mx-auto w-full max-w-3xl py-10 text-left">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t.privacyPageTitle}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.privacyLastUpdate}
          </p>
          <div className="mt-8 space-y-8">
            {t.privacySections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <div className="mt-2 space-y-2 text-muted-foreground">
                  {section.body.split(/\n\n+/).map((paragraph, j) => (
                    <p key={j} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
