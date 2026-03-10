"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  type Locale,
  translations,
  pathLocalesAsLocales,
  pathLocales,
} from "@/lib/i18n";

const localeOptions: { value: Locale; shortLabel: string; nativeLabel: string }[] = [
  { value: "en", shortLabel: "EN", nativeLabel: "English" },
  { value: "es", shortLabel: "ES", nativeLabel: "Español" },
  { value: "fr", shortLabel: "FR", nativeLabel: "Français" },
  { value: "de", shortLabel: "DE", nativeLabel: "Deutsch" },
  { value: "pt-BR", shortLabel: "PT", nativeLabel: "Português (Brasil)" },
  { value: "it", shortLabel: "IT", nativeLabel: "Italiano" },
  { value: "ja", shortLabel: "日", nativeLabel: "日本語" },
  { value: "nl", shortLabel: "NL", nativeLabel: "Nederlands" },
  { value: "pl", shortLabel: "PL", nativeLabel: "Polski" },
  { value: "sv", shortLabel: "SV", nativeLabel: "Svenska" },
];

export function AppHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const pathLocale = pathname.split("/").filter(Boolean)[0] ?? "en";
  const [menuSheetOpen, setMenuSheetOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkTheme(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  const t = translations[locale];
  const selectedLocale = localeOptions.find((o) => o.value === locale) ?? localeOptions[0];

  const basePath = pathLocales.includes(pathLocale as (typeof pathLocales)[number]) ? pathLocale : "en";

  /** Só a Calculadora de Pace tem página (início). Índices com página: 0 = Pace. */
  const calculatorHasPage = [true, false, false, false, false, false];
  const tableHasPage = [false, false, false, false];

  return (
    <header
      className={`sticky top-0 z-50 w-full shrink-0 transition-all duration-300 ease-out ${headerScrolled ? "" : "-mt-4"}`}
      role="banner"
    >
      {/* Controle de largura interno: barra full width no topo, cápsula centralizada com scroll */}
      <div
        className={`min-h-14 transition-all duration-300 ease-out ${headerScrolled ? "py-3 px-4 xl:px-[176px] 3xl:px-[316px]" : "pb-2 pt-0 xl:px-[176px] 3xl:px-[316px]"}`}
      >
        <div
          className={`flex min-h-14 items-center bg-background/70 backdrop-blur-md transition-all duration-300 ease-out ${headerScrolled ? "mx-auto h-14 max-w-6xl rounded-xl border border-border shadow-md" : "w-full border-b border-transparent"}`}
        >
          <div
            className={`grid w-full min-w-0 grid-cols-[1fr_auto_1fr] items-center gap-4 ${headerScrolled ? "px-4 lg:px-4" : "px-4 lg:px-10"}`}
          >
            <div className="flex items-center gap-2">
              <Sheet open={menuSheetOpen} onOpenChange={setMenuSheetOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:max-w-[280px]">
                  <SheetHeader>
                    <SheetTitle className="text-left">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-6 px-2 pt-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">
                        {t.menuCalculators}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {t.navCalculatorLabels.map((label, i) => (
                          <li key={label}>
                            {calculatorHasPage[i] ? (
                              <Link
                                href={`/${basePath}`}
                                className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                onClick={() => setMenuSheetOpen(false)}
                              >
                                {label}
                              </Link>
                            ) : (
                              <span className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground">
                                {label}
                                <Badge variant="secondary">{t.comingSoonBadge}</Badge>
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">
                        {t.menuTables}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {t.navTableLabels.map((label, i) => (
                          <li key={label}>
                            {tableHasPage[i] ? (
                              <Link
                                href={`/${basePath}`}
                                className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                onClick={() => setMenuSheetOpen(false)}
                              >
                                {label}
                              </Link>
                            ) : (
                              <span className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground">
                                {label}
                                <Badge variant="secondary">{t.comingSoonBadge}</Badge>
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Link
                        href={`/${basePath}/blog`}
                        className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        onClick={() => setMenuSheetOpen(false)}
                      >
                        {t.menuBlog}
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
              <Link
                href={`/${basePath}`}
                className="text-lg font-bold tracking-tight ml-1"
              >
                FindYourPace
              </Link>
            </div>

            <div className="flex justify-self-center items-center">
              <NavigationMenu viewport={false} className="hidden md:flex">
                <NavigationMenuList className="gap-3">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">{t.menuCalculators}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid min-w-[280px] gap-1 p-2">
                        {t.navCalculatorLabels.map((label, i) => (
                          <li key={label}>
                            {calculatorHasPage[i] ? (
                              <NavigationMenuLink asChild>
                                <Link
                                  href={`/${basePath}`}
                                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-muted"
                                >
                                  {label}
                                </Link>
                              </NavigationMenuLink>
                            ) : (
                              <span className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground">
                                {label}
                                <Badge variant="secondary">{t.comingSoonBadge}</Badge>
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">{t.menuTables}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid min-w-[280px] gap-1 p-2">
                        {t.navTableLabels.map((label, i) => (
                          <li key={label}>
                            {tableHasPage[i] ? (
                              <NavigationMenuLink asChild>
                                <Link
                                  href={`/${basePath}`}
                                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-muted"
                                >
                                  {label}
                                </Link>
                              </NavigationMenuLink>
                            ) : (
                              <span className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground">
                                {label}
                                <Badge variant="secondary">{t.comingSoonBadge}</Badge>
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/${basePath}/blog`}
                        className="inline-flex h-9 items-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
                      >
                        {t.menuBlog}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex min-w-0 shrink-0 items-center justify-self-end gap-2">
              <Select
                value={locale}
                onValueChange={(value) => setLocale(value as Locale)}
              >
                <SelectTrigger className="w-[64px] text-base">
                  <SelectValue>{selectedLocale.shortLabel}</SelectValue>
                </SelectTrigger>
                <SelectContent position="popper" side="bottom" align="end" sideOffset={6}>
                  {localeOptions
                    .filter((option) => pathLocalesAsLocales.includes(option.value))
                    .sort((a, b) => a.nativeLabel.localeCompare(b.nativeLabel))
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.nativeLabel}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <Toggle
                variant="outline"
                aria-label="Toggle theme"
                pressed={isDarkTheme}
                onPressedChange={(pressed: boolean) => {
                  setIsDarkTheme(pressed);
                  setTheme(pressed ? "dark" : "light");
                }}
              >
                <span className="relative size-4">
                  <Sun
                    className={`absolute inset-0 size-4 transition-all duration-300 ease-in-out ${isDarkTheme ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                  />
                  <Moon
                    className={`absolute inset-0 size-4 transition-all duration-300 ease-in-out ${isDarkTheme ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
                  />
                </span>
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
