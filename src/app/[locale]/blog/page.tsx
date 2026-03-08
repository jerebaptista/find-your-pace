import Link from "next/link";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { AppHeader } from "@/components/app-header";
import {
  type Locale,
  pathLocaleToLocale,
  pathLocales,
  siteBaseUrl,
  translations,
} from "@/lib/i18n";
import { getPosts, formatBlogDate, type BlogPostMeta } from "@/lib/blog";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const pathLocale = pathLocales.includes(locale as (typeof pathLocales)[number])
    ? (locale as (typeof pathLocales)[number])
    : "en";
  const localeKey = pathLocaleToLocale(pathLocale);
  const t = translations[localeKey];
  const pageUrl = `${siteBaseUrl}/${pathLocale}/blog`;
  const title = `${t.menuBlog} – FindYourPace`;
  const description = "Dicas, tendências e conteúdo sobre corrida e pace.";
  const languages: Record<string, string> = {};
  for (const loc of pathLocales) {
    languages[loc === "pt" ? "pt" : loc] = `${siteBaseUrl}/${loc}/blog`;
  }
  return {
    title,
    description,
    alternates: { canonical: pageUrl, languages },
  };
}

function BlogCard({
  post,
  locale,
  pathLocale,
}: {
  post: BlogPostMeta;
  locale: Locale;
  pathLocale: string;
}) {
  const name = post.author ?? "FindYourPace";
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link
      href={`/${pathLocale}/blog/${post.slug}`}
      className="block overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:bg-muted/50"
    >
      {/* Header do card: padding só aqui */}
      <div className="flex items-center justify-between gap-2 p-3 pr-4">
        <div className="flex items-center gap-2">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground"
            aria-hidden
          >
            {initials}
          </div>
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <time
          className="shrink-0 text-xs text-muted-foreground"
          dateTime={post.date}
        >
          {formatBlogDate(post.date, locale)}
        </time>
      </div>

      {/* Imagem 16:9, largura total do card (sem padding) */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-muted" />
        )}
      </div>

      {/* Footer do card: padding só aqui */}
      <div className="p-4">
        <h2 className="line-clamp-2 text-lg font-semibold leading-tight tracking-tight">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {post.description}
        </p>
      </div>
    </Link>
  );
}

export default async function BlogPage({ params }: Props) {
  const { locale: pathLocale } = await params;
  const locale = pathLocaleToLocale(pathLocale);
  const t = translations[locale];
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col bg-background py-5 lg:px-0">
      <AppHeader />
      <div className="w-full flex flex-col min-w-0 px-6 xl:pr-[176px] 3xl:pr-[316px] lg:pl-16">
        <div className="w-full px-0 py-6">
          <h1 className="mb-10 text-5xl font-semibold tracking-tight">
            {t.menuBlog}
          </h1>
          {/* Grid responsivo: mais cards por linha conforme a largura (min 280px por card) */}
          <div
            className="grid w-full gap-4 md:gap-6"
            style={{
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            }}
          >
            {posts.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground">
                Nenhum post ainda.
              </div>
            ) : (
              posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  locale={locale}
                  pathLocale={pathLocale}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <AdPlaceholder
        variant="sidebar"
        side="right"
        supportText={t.adSupportRun}
        enableText={t.adEnableAds}
      />
    </main>
  );
}
