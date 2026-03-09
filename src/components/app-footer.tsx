export function AppFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-auto shrink-0 border-t border-border bg-background py-6 text-center text-sm text-muted-foreground"
      role="contentinfo"
    >
      Copyright © {year} Find your pace. Win your race.
    </footer>
  );
}
