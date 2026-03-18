import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/blog-post-content";
import { AppHeader } from "@/components/app-header";
import {
  pathLocaleToLocale,
  pathLocales,
  siteBaseUrl,
  translations,
  type PathLocale,
} from "@/lib/i18n";
import { getPostBySlug, getPosts, getAllSlugs, formatBlogDate } from "@/lib/blog";
import type { Metadata } from "next";

function shuffleWithSeed<T>(array: T[], seed: string): T[] {
  const a = [...array];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h << 5) - h + seed.charCodeAt(i);
  for (let i = a.length - 1; i > 0; i--) {
    h = (h << 5) - h + i;
    const j = Math.abs(h) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
  const imageUrl = post.image || "/og.png";
  const pageUrl = `${siteBaseUrl}/${safeLocale}/blog/${slug}`;
  const languages: Record<string, string> = {};
  for (const loc of pathLocales) {
    if (getPostBySlug(slug, loc as PathLocale))
      languages[loc === "pt" ? "pt" : loc] = `${siteBaseUrl}/${loc}/blog/${slug}`;
  }
  languages["x-default"] = `${siteBaseUrl}/en/blog/${slug}`;
  return {
    title: `${post.title} – ${t.menuBlog}`,
    description: post.description,
    alternates: { canonical: pageUrl, languages },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: post.title,
      description: post.description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [imageUrl] },
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
      <div className="w-full flex flex-col min-w-0 px-6 xl:px-[208px] 3xl:px-[348px] text-center">
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
                width={640}
                height={360}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          {/* Conteúdo em markdown: gaps entre parágrafos; no mobile, 1 ad após 4º parágrafo */}
          <BlogPostContent content={post.content} />

          {/* Secção: 3 outras postagens (aleatórias determinísticas) */}
          {(() => {
            const all = getPosts(safeLocale).filter((p) => p.slug !== slug);
            const more = shuffleWithSeed(all, slug).slice(0, 3);
            if (more.length === 0) return null;
            return (
              <section className="mt-12 w-full text-left">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                  {t.blogMorePosts}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {more.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${pathLocale}/blog/${p.slug}`}
                      className="block overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:bg-muted/50"
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        {p.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={p.image}
                            alt=""
                            width={640}
                            height={360}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full bg-muted" />
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="line-clamp-2 text-lg font-semibold leading-tight tracking-tight">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {p.description}
                        </p>
                        <time
                          className="mt-2 block text-xs text-muted-foreground"
                          dateTime={p.date}
                        >
                          {formatBlogDate(p.date, locale)}
                        </time>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })()}

        </div>
      </div>
    </main>
  );
}
