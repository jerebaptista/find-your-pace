import { Frown } from "lucide-react";

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
    /* sm, md: área full width. Ícone à esquerda, textos alinhados à esquerda. */
    return (
      <aside className="mx-auto w-full pt-8 pb-5 xl:hidden">
        <div
          className="flex w-full flex-row items-center justify-center gap-3 rounded-xl border border-dashed border-border p-4"
          style={{ minHeight: isRectangle ? 250 : 100 }}
        >
          <Frown className="h-6 w-6 shrink-0 text-foreground" aria-hidden />
          <div className="flex flex-col gap-0 leading-tight text-left">
            <p className="text-sm font-medium text-foreground">{supportText}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{enableText}</p>
          </div>
        </div>
      </aside>
    );
  }

  /* Desktop: vertical. Ícone acima do título. xl, 2xl: 160×600 | 3xl: 300×600 */
  const sideClass = side === "left" ? "left-4" : "right-4";
  return (
    <aside
      className={`hidden xl:block fixed ${sideClass} top-24 z-10 w-[160px] 3xl:w-[300px]`}
    >
      <div
        className="flex min-h-[600px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border p-4 text-center"
        style={{ minHeight: 600 }}
      >
        <Frown className="h-6 w-6 shrink-0 text-foreground" aria-hidden />
        <p className="text-sm font-medium text-foreground">{supportText}</p>
        <p className="mt-1 text-xs text-muted-foreground">{enableText}</p>
      </div>
    </aside>
  );
}
