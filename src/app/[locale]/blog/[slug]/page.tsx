import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { BlogPostContent } from "@/components/blog-post-content";
import { AppHeader } from "@/components/app-header";
import {
  pathLocaleToLocale,
  pathLocales,
  translations,
  type PathLocale,
} from "@/lib/i18n";
import { getPostBySlug, getAllSlugs, formatBlogDate } from "@/lib/blog";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of pathLocales) {
    for (const slug of slugs) {
      if (getPostBySlug(slug, locale)) params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: pathLocale, slug } = await params;
  const safeLocale = pathLocales.includes(pathLocale as PathLocale)
    ? (pathLocale as PathLocale)
    : "en";
  const post = getPostBySlug(slug, safeLocale);
  if (!post) return { title: "Not found" };
  const locale = pathLocaleToLocale(pathLocale);
  const t = translations[locale];
  return {
    title: `${post.title} – ${t.menuBlog}`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: pathLocale, slug } = await params;
  const safeLocale = pathLocales.includes(pathLocale as PathLocale)
    ? (pathLocale as PathLocale)
    : "en";
  const post = getPostBySlug(slug, safeLocale);
  if (!post) notFound();
  const locale = pathLocaleToLocale(pathLocale);
  const t = translations[locale];
  const name = post.author ?? "FindYourPace";
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="flex min-h-screen flex-col bg-background py-5 lg:px-0">
      <AppHeader />
      <div className="w-full flex flex-col min-w-0 px-6 xl:pl-[216px] xl:pr-[216px] 3xl:pl-[356px] 3xl:pr-[356px] text-center">
        <div className="mx-auto max-w-4xl px-4 py-8 flex flex-col items-center">

          {/* Título e descrição */}
          <header className="mt-6 w-full">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              {post.title}
            </h1>
            <p className="text-lg animate-text-in-delay mt-6 text-muted-foreground">
              {post.description}
            </p>
          </header>

          {/* Avatar + Escrito por "name" + data */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground"
              aria-hidden
            >
              {initials}
            </div>
            <span className="text-sm text-muted-foreground">
              {t.blogWrittenBy} <strong className="font-medium text-foreground">{name}</strong>
              {" · "}
              <time dateTime={post.date}>
                {formatBlogDate(post.date, locale)}
              </time>
            </span>
          </div>

          {/* Área da imagem 16:9 (após autor e data) */}
          <div className="relative mt-8 w-full aspect-video overflow-hidden rounded-lg bg-muted">
            {post.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          {/* Conteúdo em markdown: gaps entre parágrafos; no mobile, 1 ad após 4º parágrafo e 1 no final */}
          <BlogPostContent
            content={post.content}
            adSupportText={t.adSupportRun}
            adEnableText={t.adEnableAds}
          />
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
