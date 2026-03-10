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
    /* Banner horizontal 320x100: estrutura própria, sem <p> para evitar margens de prose. */
    if (inlineSize === "320x100") {
      return (
        <aside
          className="mx-auto flex w-full items-center justify-center pt-4 pb-4 xl:hidden"
          style={{ minHeight: 112 }}
        >
          <div className="flex w-full max-w-3xl flex-row items-center justify-center gap-3 rounded-xl border border-dashed border-border p-4">
            <Frown className="h-6 w-6 shrink-0 text-foreground" aria-hidden />
            <div className="flex flex-col items-start justify-center gap-0.5 text-left">
              <span className="text-sm font-medium leading-tight text-foreground">
                {supportText}
              </span>
              <span className="text-xs leading-tight text-muted-foreground">
                {enableText}
              </span>
            </div>
          </div>
        </aside>
      );
    }
    /* Banner retangular 300x600: estrutura própria. */
    return (
      <aside
        className="mx-auto flex w-full items-center justify-center pt-4 pb-4 xl:hidden"
        style={{ minHeight: 282 }}
      >
        <div
          className="flex w-full max-w-3xl flex-row items-center justify-center gap-3 rounded-xl border border-dashed border-border p-4"
          style={{ minHeight: 250 }}
        >
          <Frown className="h-6 w-6 shrink-0 text-foreground" aria-hidden />
          <div className="flex flex-col gap-0 leading-tight text-left">
            <p className="m-0 text-sm font-medium text-foreground">{supportText}</p>
            <p className="m-0 mt-0.5 text-xs text-muted-foreground">{enableText}</p>
          </div>
        </div>
      </aside>
    );
  }

  /* Desktop: vertical, centralizado ao meio da viewport durante o scroll. */
  const sideClass = side === "left" ? "left-4" : "right-4";
  return (
    <aside
      className={`hidden xl:block fixed ${sideClass} top-1/2 z-10 w-[160px] -translate-y-1/2 3xl:w-[300px]`}
    >
      <div
        className="flex min-h-[600px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border p-6 text-center"
        style={{ minHeight: 600 }}
      >
        <Frown className="h-6 w-6 shrink-0 text-foreground" aria-hidden />
        <p className="m-0 text-sm font-medium text-foreground">{supportText}</p>
        <p className="m-0 text-xs text-muted-foreground">{enableText}</p>
      </div>
    </aside>
  );
}
