"use client";

import ReactMarkdown from "react-markdown";

type BlogPostContentProps = {
  content: string;
};

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

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className={proseClass}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
