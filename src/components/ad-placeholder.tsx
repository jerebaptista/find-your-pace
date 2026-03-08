type AdPlaceholderProps = {
  supportText: string;
  enableText: string;
  variant: "inline" | "sidebar";
  side?: "left" | "right";
  /** Apenas para variant="inline" em sm/md: "horizontal" (primeiro) ou "rectangle" (segundo). Desktop = vertical (sidebar). */
  inlineSize?: "320x100" | "300x600";
};

export function AdPlaceholder({
  supportText,
  enableText,
  variant,
  side = "right",
  inlineSize = "320x100",
}: AdPlaceholderProps) {
  if (variant === "inline") {
    const isRectangle = inlineSize === "300x600";
    /* sm, md: área full width. Primeiro = horizontal (100px), segundo = rectangle (250px). */
    return (
      <aside className="mx-auto w-full px-4 pt-8 pb-5 xl:hidden">
        <div
          className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-border p-4 text-center"
          style={{ minHeight: isRectangle ? 250 : 100 }}
        >
          <p className="text-sm font-medium text-foreground">{supportText}</p>
          <p className="mt-1 text-xs text-muted-foreground">{enableText}</p>
        </div>
      </aside>
    );
  }

  /* Desktop: vertical. xl, 2xl: 160×600 | 3xl: 300×600 */
  const sideClass = side === "left" ? "left-4" : "right-4";
  return (
    <aside
      className={`hidden xl:block fixed ${sideClass} top-24 z-10 w-[160px] 3xl:w-[300px]`}
    >
      <div
        className="flex min-h-[600px] flex-col items-center justify-center rounded-xl border border-dashed border-border p-4 text-center"
        style={{ minHeight: 600 }}
      >
        <p className="text-sm font-medium text-foreground">{supportText}</p>
        <p className="mt-1 text-xs text-muted-foreground">{enableText}</p>
      </div>
    </aside>
  );
}
