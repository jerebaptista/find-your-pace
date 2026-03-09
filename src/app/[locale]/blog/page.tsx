import Link from "next/link";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { AppHeader } from "@/components/app-header";
import {
  type Locale,
  pathLocaleToLocale,
  pathLocales,
  siteBaseUrl,
  translations,
  type PathLocale,
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
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: "FindYourPace",
      title,
      description,
      locale: localeKey,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "FindYourPace – Blog" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
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
  return (
    <Link
      href={`/${pathLocale}/blog/${post.slug}`}
      className="block overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:bg-muted/50"
    >
      {/* Imagem 16:9, largura total do card */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt=""
            width={640}
            height={360}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-muted" />
        )}
      </div>

      {/* Conteúdo: título, descrição, data */}
      <div className="p-4">
        <h2 className="line-clamp-2 text-lg font-semibold leading-tight tracking-tight">
          {post.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {post.description}
        </p>
        <time
          className="mt-2 block text-xs text-muted-foreground"
          dateTime={post.date}
        >
          {formatBlogDate(post.date, locale)}
        </time>
      </div>
    </Link>
  );
}

export default async function BlogPage({ params }: Props) {
  const { locale: pathLocale } = await params;
  const locale = pathLocaleToLocale(pathLocale);
  const t = translations[locale];
  const safeLocale = pathLocales.includes(pathLocale as PathLocale)
    ? (pathLocale as PathLocale)
    : "en";
  const posts = getPosts(safeLocale);

  return (
    <main className="flex min-h-screen flex-col bg-background py-5 lg:px-0">
      <AppHeader />
      <div className="w-full flex flex-col min-w-0 px-6 xl:pl-[216px] xl:pr-[216px] 3xl:pl-[356px] 3xl:pr-[356px]">
        <div className="w-full max-w-[3840px] px-0 py-6">
          <h1 className="mb-10 text-5xl font-semibold tracking-tight">
            {t.menuBlog}
          </h1>
          {/* Grid: 4 colunas em 1920px, até 12 colunas; gap reduzido entre cards */}
          <div
            className="grid w-full gap-2 md:gap-3"
            style={{
              gridTemplateColumns:
                "repeat(auto-fill, minmax(max(320px, 100%/12), 1fr))",
            }}
          >
            {posts.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground">
                Nenhum post ainda.
              </div>
            ) : (
              (() => {
                type GridItem =
                  | { type: "post"; post: BlogPostMeta }
                  | { type: "ad"; key: string };
                const items: GridItem[] = [];
                posts.forEach((post, i) => {
                  items.push({ type: "post", post });
                  if ((i + 1) % 4 === 0 && i < posts.length - 1) {
                    items.push({ type: "ad", key: `ad-after-${i}` });
                  }
                });
                return items.map((item) => {
                  if (item.type === "post") {
                    return (
                      <BlogCard
                        key={item.post.slug}
                        post={item.post}
                        locale={locale}
                        pathLocale={pathLocale}
                      />
                    );
                  }
                  return (
                    <div key={item.key} className="col-span-full xl:hidden">
                      <AdPlaceholder
                        variant="inline"
                        supportText={t.adSupportRun}
                        enableText={t.adEnableAds}
                      />
                    </div>
                  );
                });
              })()
            )}
          </div>
        </div>
      </div>
      <AdPlaceholder
        variant="sidebar"
        side="left"
        supportText={t.adSupportRun}
        enableText={t.adEnableAds}
      />
      <AdPlaceholder
        variant="sidebar"
        side="right"
        supportText={t.adSupportRun}
        enableText={t.adEnableAds}
      />
    </main>
  );
}
