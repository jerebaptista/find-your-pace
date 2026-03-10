"use client";

import ReactMarkdown from "react-markdown";
import { useMemo } from "react";
import { AdPlaceholder } from "@/components/ad-placeholder";

type BlogPostContentProps = {
  content: string;
  adSupportText: string;
  adEnableText: string;
};

/** Divide o conteúdo em "antes do 2.º H2" e "do 2.º H2 em diante" para inserir o ad de forma determinística (evita hydration mismatch). */
function splitBeforeSecondH2(markdown: string): { before: string; fromSecond: string } | null {
  const lines = markdown.split("\n");
  let h2Count = 0;
  let splitIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s/.test(lines[i])) {
      h2Count += 1;
      if (h2Count === 2) {
        splitIndex = i;
        break;
      }
    }
  }
  if (splitIndex < 0) return null;
  const before = lines.slice(0, splitIndex).join("\n");
  const fromSecond = lines.slice(splitIndex).join("\n");
  return { before, fromSecond };
}

const proseClass = [
  "mt-8 w-full max-w-3xl text-left prose text-lg prose-neutral dark:prose-invert",
  "prose-p:text-foreground/80 [&_p]:mb-5 [&_p]:last:mb-0",
  "prose-headings:font-semibold prose-headings:text-foreground",
  "[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:scroll-mt-20",
  "[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:scroll-mt-20",
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-1",
  "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-1",
  "[&_li]:text-foreground [&_li]:leading-relaxed",
].join(" ");

export function BlogPostContent({
  content,
  adSupportText,
  adEnableText,
}: BlogPostContentProps) {
  const parts = useMemo(() => splitBeforeSecondH2(content), [content]);

  if (!parts) {
    return (
      <div className={proseClass}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }

  return (
    <div className={proseClass}>
      <ReactMarkdown>{parts.before}</ReactMarkdown>
      <div className="not-prose xl:hidden my-6">
        <AdPlaceholder
          variant="inline"
          supportText={adSupportText}
          enableText={adEnableText}
          inlineSize="320x100"
        />
      </div>
      <ReactMarkdown>{parts.fromSecond}</ReactMarkdown>
    </div>
  );
}
