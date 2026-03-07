"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxCollection,
} from "@/components/ui/combobox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toggle } from "@/components/ui/toggle";
import {
  type Locale,
  translations,
  pathLocalesAsLocales,
  faqByLocale,
} from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const localeOptions: { value: Locale; shortLabel: string; nativeLabel: string }[] = [
  { value: "en", shortLabel: "EN", nativeLabel: "English" },
  { value: "es", shortLabel: "ES", nativeLabel: "Español" },
  { value: "fr", shortLabel: "FR", nativeLabel: "Français" },
  { value: "de", shortLabel: "DE", nativeLabel: "Deutsch" },
  { value: "pt-BR", shortLabel: "PT", nativeLabel: "Português (Brasil)" },
  { value: "it", shortLabel: "IT", nativeLabel: "Italiano" },
  { value: "ja", shortLabel: "JA", nativeLabel: "日本語" },
  { value: "nl", shortLabel: "NL", nativeLabel: "Nederlands" },
  { value: "pl", shortLabel: "PL", nativeLabel: "Polski" },
  { value: "sv", shortLabel: "SV", nativeLabel: "Svenska" },
];

type DistanceUnit = "miles" | "kilometers" | "meters";

/** Unidades de pace (tempo por distância). */
const paceOnlyOptions = ["Per Mile", "Per Kilometer"] as const;
/** Unidades de velocity. */
const velocityOnlyOptions = [
  "Miles Per Hour",
  "Kilometers Per Hour",
  "Meters Per Minute",
  "Meters Per Second",
] as const;

const paceUnitShort: Record<string, string> = {
  "Per Mile": "/mi",
  "Per Kilometer": "/km",
  "Miles Per Hour": "mph",
  "Kilometers Per Hour": "kph",
  "Meters Per Minute": "mpm",
  "Meters Per Second": "mps",
};

type PaceOnlyUnit = (typeof paceOnlyOptions)[number];
type VelocityUnit = (typeof velocityOnlyOptions)[number];
const paceUnitOptions = [...paceOnlyOptions, ...velocityOnlyOptions] as const;
type PaceUnit = (typeof paceUnitOptions)[number];

function defaultUnitForLocale(locale: Locale): DistanceUnit {
  return locale === "en" ? "miles" : "kilometers";
}

function defaultPaceUnitForLocale(locale: Locale): PaceOnlyUnit {
  return locale === "en" ? "Per Mile" : "Per Kilometer";
}

function defaultVelocityUnitForLocale(locale: Locale): VelocityUnit {
  return locale === "en" ? "Miles Per Hour" : "Kilometers Per Hour";
}

function isPaceUnit(value: string): value is PaceUnit {
  return paceUnitOptions.includes(value as PaceUnit);
}

const distanceUnitOptions: { value: DistanceUnit; label: string; short: string }[] = [
  { value: "miles", label: "Miles", short: "mi" },
  { value: "kilometers", label: "Kilometers", short: "km" },
  { value: "meters", label: "Meters", short: "m" },
];

const distanceBadges: Record<
  DistanceUnit,
  Array<{ label: string; value: string }>
> = {
  kilometers: [
    { label: "1km", value: "1" },
    { label: "5km", value: "5" },
    { label: "10km", value: "10" },
    { label: "Half-Marthon", value: "21.0975" },
    { label: "Marathon", value: "42.195" },
  ],
  meters: [
    { label: "100m", value: "100" },
    { label: "200m", value: "200" },
    { label: "400m", value: "400" },
    { label: "500m", value: "500" },
    { label: "600m", value: "600" },
    { label: "800m", value: "800" },
    { label: "1km", value: "1000" },
  ],
  miles: [
    { label: "1 mile", value: "1" },
    { label: "3 mile", value: "3" },
    { label: "5 mile", value: "5" },
    { label: "10 mile", value: "10" },
    { label: "Half-Marthon", value: "13.1" },
    { label: "Marathon", value: "26.2" },
  ],
};

/** Opções de horas: 00 a 10. */
const TIME_HOUR_OPTIONS = Array.from({ length: 11 }, (_, i) =>
  i.toString().padStart(2, "0")
);
/** Opções de minutos/segundos: 00 a 55 de 5 em 5. */
const TIME_MINUTE_SECOND_OPTIONS = Array.from({ length: 12 }, (_, i) =>
  (i * 5).toString().padStart(2, "0")
);

function parseTime(value: string): { h: string; m: string; s: string } {
  if (!value) return { h: "", m: "", s: "" };
  const parts = value.split(":");
  return {
    h: parts[0]?.replace(/\D/g, "").slice(0, 2) ?? "",
    m: parts[1]?.replace(/\D/g, "").slice(0, 2) ?? "",
    s: parts[2]?.replace(/\D/g, "").slice(0, 2) ?? "",
  };
}
function formatTime(h: string, m: string, s: string): string {
  const H = (h || "00").padStart(2, "0");
  const M = (m || "00").padStart(2, "0");
  const S = (s || "00").padStart(2, "0");
  return `${H}:${M}:${S}`;
}

/** Horas: 0-9 em cada dígito (00-99). Retorna no máximo 2 dígitos. */
function clampHours(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(-2);
  return digits;
}

/** Minutos/segundos: só permite 00–59 (primeiro dígito 0–5, segundo 0–9). */
function clampMinutesOrSeconds(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(-2);
  if (digits.length === 0) return "";
  if (digits.length === 1) return digits[0] <= "5" ? digits : "5";
  const first = digits[0] > "5" ? "5" : digits[0];
  const value = first + digits[1];
  const num = parseInt(value, 10);
  return num <= 59 ? value : "59";
}

/** Máximo: 6 dígitos na parte inteira, 3 na decimal. Aceita vírgula ou ponto digitado pelo usuário. Guarda com ponto. */
const DISTANCE_INT_MAX = 6;
const DISTANCE_DEC_MAX = 3;

function parseDistanceInput(raw: string): string {
  const normalized = raw.replace(/\s/g, "").replace(/,/g, ".").replace(/[^\d.]/g, "");
  const firstDot = normalized.indexOf(".");

  if (firstDot === -1) {
    const intDigits = normalized.replace(/\./g, "").slice(0, DISTANCE_INT_MAX);
    return intDigits || "";
  }

  const int = normalized.slice(0, firstDot).replace(/\./g, "").slice(0, DISTANCE_INT_MAX);
  const afterDot = normalized.slice(firstDot + 1).replace(/\./g, "").slice(0, DISTANCE_DEC_MAX);
  return `${int || "0"}.${afterDot}`;
}

/** Formata distância: 000 000 (até 6 dígitos) ou 000 000.000 (se usuário digitou ponto/vírgula). Só exibe ponto. */
function formatDistanceDisplay(value: string): string {
  if (!value) return "";
  const parts = value.split(".");
  const intPart = (parts[0] ?? "0").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const hasDecimalSep = parts.length > 1;
  const decPart = (parts[1] ?? "").slice(0, DISTANCE_DEC_MAX);
  if (!hasDecimalSep) return intPart;
  return decPart.length ? `${intPart}.${decPart}` : `${intPart}.`;
}

/** Conta dígitos e separador decimal (vírgula ou ponto) antes de uma posição (para preservar cursor). */
function countLogicalBefore(str: string, position: number): number {
  let count = 0;
  for (let i = 0; i < position && i < str.length; i++) {
    if (/[\d.,]/.test(str[i])) count++;
  }
  return count;
}

/** Posição no texto formatado que corresponde ao índice lógico (dígitos + separador decimal). */
function positionForLogicalIndex(formattedStr: string, logicalIndex: number): number {
  if (logicalIndex <= 0) return 0;
  let count = 0;
  for (let i = 0; i < formattedStr.length; i++) {
    if (/\d|[,.]/.test(formattedStr[i])) count++;
    if (count === logicalIndex) return i + 1;
  }
  return formattedStr.length;
}

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, setLocale } = useLanguage();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [paceDistance, setPaceDistance] = useState("");
  const [paceTimeH, setPaceTimeH] = useState("");
  const [paceTimeM, setPaceTimeM] = useState("");
  const [paceTimeS, setPaceTimeS] = useState("");
  const [pacePaceVelocityMode, setPacePaceVelocityMode] = useState<"pace" | "velocity">("pace");
  const [pacePaceUnit, setPacePaceUnit] = useState<PaceOnlyUnit>("Per Mile");
  const [paceVelocityUnit, setPaceVelocityUnit] = useState<VelocityUnit>("Miles Per Hour");
  const [paceVelocityValue, setPaceVelocityValue] = useState("");
  const [paceTimeHOpen, setPaceTimeHOpen] = useState(false);
  const [paceTimeMOpen, setPaceTimeMOpen] = useState(false);
  const [paceTimeSOpen, setPaceTimeSOpen] = useState(false);
  const paceTimeHInputRef = useRef("");
  const paceTimeMInputRef = useRef("");
  const paceTimeSInputRef = useRef("");
  const [timeDistance, setTimeDistance] = useState("");
  const [timePaceVelocityMode, setTimePaceVelocityMode] = useState<"pace" | "velocity">("pace");
  const [timePaceH, setTimePaceH] = useState("");
  const [timePaceM, setTimePaceM] = useState("");
  const [timePaceS, setTimePaceS] = useState("");
  const [timePaceUnit, setTimePaceUnit] = useState<PaceOnlyUnit>(() => defaultPaceUnitForLocale(locale));
  const [timeVelocityValue, setTimeVelocityValue] = useState("");
  const [timeVelocityUnit, setTimeVelocityUnit] = useState<VelocityUnit>(() =>
    defaultVelocityUnitForLocale(locale ?? "en")
  );
  const [timePaceHOpen, setTimePaceHOpen] = useState(false);
  const [timePaceMOpen, setTimePaceMOpen] = useState(false);
  const [timePaceSOpen, setTimePaceSOpen] = useState(false);
  const timePaceHInputRef = useRef("");
  const timePaceMInputRef = useRef("");
  const timePaceSInputRef = useRef("");
  const [distanceTime, setDistanceTime] = useState("00:00:00");
  const [distanceTimeHOpen, setDistanceTimeHOpen] = useState(false);
  const [distanceTimeMOpen, setDistanceTimeMOpen] = useState(false);
  const [distanceTimeSOpen, setDistanceTimeSOpen] = useState(false);
  const distanceTimeHInputRef = useRef("");
  const distanceTimeMInputRef = useRef("");
  const distanceTimeSInputRef = useRef("");
  const [distancePaceVelocityMode, setDistancePaceVelocityMode] = useState<"pace" | "velocity">("pace");
  const [distancePaceH, setDistancePaceH] = useState("");
  const [distancePaceM, setDistancePaceM] = useState("");
  const [distancePaceS, setDistancePaceS] = useState("");
  const [distancePaceUnit, setDistancePaceUnit] = useState<PaceOnlyUnit>(() => defaultPaceUnitForLocale(locale));
  const [distanceVelocityValue, setDistanceVelocityValue] = useState("");
  const [distanceVelocityUnit, setDistanceVelocityUnit] = useState<VelocityUnit>(() =>
    defaultVelocityUnitForLocale(locale ?? "en")
  );
  const [distancePaceHOpen, setDistancePaceHOpen] = useState(false);
  const [distancePaceMOpen, setDistancePaceMOpen] = useState(false);
  const [distancePaceSOpen, setDistancePaceSOpen] = useState(false);
  const distancePaceHInputRef = useRef("");
  const distancePaceMInputRef = useRef("");
  const distancePaceSInputRef = useRef("");
  const [paceDistancePopoverOpen, setPaceDistancePopoverOpen] = useState(false);
  const [menuSheetOpen, setMenuSheetOpen] = useState(false);
  const [timeDistancePopoverOpen, setTimeDistancePopoverOpen] = useState(false);
  const paceDistanceInputRef = useRef<HTMLInputElement>(null);
  const timeDistanceInputRef = useRef<HTMLInputElement>(null);
  const nextPaceDistanceCursorRef = useRef<number | null>(null);
  const nextTimeDistanceCursorRef = useRef<number | null>(null);
  const [paceDistanceUnit, setPaceDistanceUnit] = useState<DistanceUnit>(
    defaultUnitForLocale(locale)
  );
  const [timeDistanceUnit, setTimeDistanceUnit] = useState<DistanceUnit>(
    defaultUnitForLocale(locale)
  );
  const selectedLocale =
    localeOptions.find((option) => option.value === locale) ?? localeOptions[0];
  const selectedPaceDistanceUnit =
    distanceUnitOptions.find((option) => option.value === paceDistanceUnit) ??
    distanceUnitOptions[0];
  const selectedTimeDistanceUnit =
    distanceUnitOptions.find((option) => option.value === timeDistanceUnit) ??
    distanceUnitOptions[0];

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkTheme(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const defaultUnit = defaultUnitForLocale(locale);
    setPaceDistanceUnit(defaultUnit);
    setTimeDistanceUnit(defaultUnit);
    setTimePaceUnit(defaultPaceUnitForLocale(locale));
    setTimeVelocityUnit(defaultVelocityUnitForLocale(locale));
    setDistancePaceUnit(defaultPaceUnitForLocale(locale));
    setDistanceVelocityUnit(defaultVelocityUnitForLocale(locale));
  }, [locale]);

  // Garantir medida padrão selecionada em Velocity quando o modo está ativo
  useEffect(() => {
    if (timePaceVelocityMode === "velocity" && !velocityOnlyOptions.includes(timeVelocityUnit as (typeof velocityOnlyOptions)[number])) {
      setTimeVelocityUnit(defaultVelocityUnitForLocale(locale));
    }
  }, [timePaceVelocityMode, locale]);
  useEffect(() => {
    if (distancePaceVelocityMode === "velocity" && !velocityOnlyOptions.includes(distanceVelocityUnit as (typeof velocityOnlyOptions)[number])) {
      setDistanceVelocityUnit(defaultVelocityUnitForLocale(locale));
    }
  }, [distancePaceVelocityMode, locale]);

  useEffect(() => {
    const pos = nextPaceDistanceCursorRef.current;
    if (paceDistanceInputRef.current != null && pos !== null) {
      nextPaceDistanceCursorRef.current = null;
      paceDistanceInputRef.current.setSelectionRange(pos, pos);
    }
  }, [paceDistance]);

  useEffect(() => {
    const pos = nextTimeDistanceCursorRef.current;
    if (timeDistanceInputRef.current != null && pos !== null) {
      nextTimeDistanceCursorRef.current = null;
      timeDistanceInputRef.current.setSelectionRange(pos, pos);
    }
  }, [timeDistance]);

  const t = translations[locale];
  const distanceUnitLabel: Record<DistanceUnit, string> = {
    miles: t.distanceUnitMiles,
    kilometers: t.distanceUnitKilometers,
    meters: t.distanceUnitMeters,
  };
  const paceOptionLabel: Record<PaceOnlyUnit, string> = {
    "Per Mile": t.pacePerMile,
    "Per Kilometer": t.pacePerKm,
  };
  const velocityOptionLabel: Record<VelocityUnit, string> = {
    "Miles Per Hour": t.velMph,
    "Kilometers Per Hour": t.velKph,
    "Meters Per Minute": t.velMpm,
    "Meters Per Second": t.velMps,
  };

  return (
    <main className="flex min-h-screen flex-col bg-background py-5 px-6 md:px-0">
      {/* Wrapper com padding lateral no desktop para não sobrepor os ads fixos */}
      <div className="w-full flex flex-col min-w-0 md:pl-[176px] md:pr-[176px] lg:pl-[216px] lg:pr-[216px]">
      <header className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 md:px-10">
        <div className="flex items-center gap-2">
          {/* Mobile: botão de menu antes da logo */}
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
                    {t.calculatorsLinks.map((label) => (
                      <li key={label}>
                        <a
                          href="#"
                          className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                          onClick={() => setMenuSheetOpen(false)}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    {t.menuCharts}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {t.chartLinks.map((label) => (
                      <li key={label}>
                        <a
                          href="#"
                          className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                          onClick={() => setMenuSheetOpen(false)}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a
                    href="#"
                    className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    onClick={() => setMenuSheetOpen(false)}
                  >
                    {t.menuBlog}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <p className="text-lg font-bold tracking-tight">KnowYourPace</p>
        </div>

        <div className="flex justify-self-center items-center">
          {/* Desktop: navigation menu */}
          <NavigationMenu
            viewport={false}
            className="hidden md:flex"
          >
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t.menuCalculators}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid min-w-[260px] gap-1">
                    {t.calculatorsLinks.map((label) => (
                      <li key={label}>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block">
                            {label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{t.menuCharts}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid min-w-[220px] gap-1">
                    {t.chartLinks.map((label) => (
                      <li key={label}>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block">
                            {label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="inline-flex h-9 items-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {t.menuBlog}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-self-end gap-2">
          <Select
            value={locale}
            onValueChange={(value) => setLocale(value as Locale)}
          >
            <SelectTrigger className="w-[64px] text-base">
              <SelectValue>{selectedLocale.shortLabel}</SelectValue>
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              align="end"
              sideOffset={6}
            >
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
            onPressedChange={(pressed) => {
              setIsDarkTheme(pressed);
              setTheme(pressed ? "dark" : "light");
            }}
          >
            <span className="relative size-4">
              <Sun
                className={`absolute inset-0 size-4 transition-all duration-300 ease-in-out ${
                  isDarkTheme
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <Moon
                className={`absolute inset-0 size-4 transition-all duration-300 ease-in-out ${
                  isDarkTheme
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </span>
          </Toggle>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 pt-14 pb-10 md:px-10">
      <section className="w-full max-w-3xl mx-auto text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {t.appTitle}
          </h1>
          <p className="text-base text-muted-foreground md:text-md">
            {t.appDescription}
          </p>
        </div>

        <Field className="mx-auto mt-8 w-full max-w-none rounded-lg border border-input bg-card p-6 shadow-sm md:max-w-[350px]">
          <Tabs defaultValue="pace" className="w-full text-left">
            <div className="flex flex-col gap-6">
              <TabsList className="grid w-auto grid-cols-3">
                <TabsTrigger value="pace">{t.tabPace}</TabsTrigger>
                <TabsTrigger value="time">{t.tabTime}</TabsTrigger>
                <TabsTrigger value="distance">{t.tabDistance}</TabsTrigger>
              </TabsList>

              <TabsContent value="pace" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card sm:grid-cols-3">
              <Field className="p-0 sm:col-span-3">
                <Label htmlFor="pace-distance">{t.labelDistance}</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
                  <div className="relative">
                    <div
                      className="flex h-11 items-center gap-0 rounded-lg border border-input bg-transparent transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 [&:has(input:focus)]:border-ring [&:has(input:focus)]:ring-3 [&:has(input:focus)]:ring-ring/50"
                      onFocus={() => setPaceDistancePopoverOpen(true)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                          setTimeout(() => setPaceDistancePopoverOpen(false), 180);
                        }
                      }}
                    >
                      <input
                        ref={paceDistanceInputRef}
                        id="pace-distance"
                        type="text"
                        inputMode="decimal"
                        placeholder={t.placeholderDistance}
                        maxLength={12}
                        className="h-11 w-full rounded-lg border-0 bg-transparent px-2.5 text-lg outline-none [appearance:textfield]"
                        value={formatDistanceDisplay(paceDistance)}
                        onChange={(e) => {
                          const raw = e.target.value;
                          const cursor = e.target.selectionStart ?? 0;
                          const parsed = parseDistanceInput(raw);
                          const logicalIndex = countLogicalBefore(raw, cursor);
                          const formatted = formatDistanceDisplay(parsed);
                          nextPaceDistanceCursorRef.current = positionForLogicalIndex(
                            formatted,
                            logicalIndex
                          );
                          setPaceDistance(parsed);
                        }}
                      />
                    </div>
                    {paceDistancePopoverOpen && (
                      <div className="absolute top-full left-0 z-10 mt-1.5 flex flex-wrap gap-2 rounded-lg border border-border bg-popover p-2 shadow-md ring-1 ring-foreground/10">
                        {distanceBadges[paceDistanceUnit].map((badge) => (
                          <Badge
                            key={badge.label}
                            asChild
                            variant="secondary"
                            className="text-sm"
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setPaceDistance(parseDistanceInput(badge.value));
                                setPaceDistancePopoverOpen(false);
                              }}
                            >
                              {badge.label}
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="w-fit">
                    <Select
                      value={paceDistanceUnit}
                      onValueChange={(value) =>
                        setPaceDistanceUnit(value as DistanceUnit)
                      }
                    >
                      <SelectTrigger className="h-11 w-fit min-w-[92px] text-base data-[size=default]:h-11">
                        <SelectValue>{selectedPaceDistanceUnit.short}</SelectValue>
                      </SelectTrigger>
                      <SelectContent position="popper" side="bottom" sideOffset={6}>
                        {distanceUnitOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {distanceUnitLabel[option.value]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Field>

              <Field className="p-0 sm:col-span-3">
                <Label>{t.labelTime}</Label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Combobox
                      value={paceTimeH || undefined}
                      inputValue={paceTimeHOpen ? undefined : paceTimeH}
                      open={paceTimeHOpen}
                      onOpenChange={(open) => {
                        setPaceTimeHOpen(open);
                        if (open) {
                          paceTimeHInputRef.current = paceTimeH;
                        } else {
                          const raw = paceTimeHInputRef.current ?? paceTimeH;
                          const clamped = clampHours(raw);
                          const newH = clamped ? clamped.padStart(2, "0") : "00";
                          setPaceTimeH(newH);
                        }
                      }}
                      onValueChange={(v) => setPaceTimeH(v ?? "")}
                      onInputValueChange={(inputValue) => {
                        paceTimeHInputRef.current = clampHours(inputValue);
                      }}
                      items={TIME_HOUR_OPTIONS}
                      filteredItems={TIME_HOUR_OPTIONS}
                    >
                    <ComboboxInput
                      placeholder={t.placeholderTime}
                      className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
                      showTrigger={false}
                      showClear={false}
                      maxLength={2}
                    >
                      <InputGroupAddon align="inline-end" className="pr-3">
                        <InputGroupText className="text-muted-foreground">{t.hourShort}</InputGroupText>
                      </InputGroupAddon>
                    </ComboboxInput>
                    <ComboboxContent>
                      <ComboboxList>
                        <ComboboxCollection>
                          {(item: string) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxCollection>
                      </ComboboxList>
                      <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                    </ComboboxContent>
                  </Combobox>
                  </div>
                  <div className="flex-1">
                    <Combobox
                      value={paceTimeM || undefined}
                      inputValue={paceTimeMOpen ? undefined : paceTimeM}
                      open={paceTimeMOpen}
                      onOpenChange={(open) => {
                        setPaceTimeMOpen(open);
                        if (open) {
                          paceTimeMInputRef.current = paceTimeM;
                        } else {
                          const raw = paceTimeMInputRef.current ?? paceTimeM;
                          const clamped = clampMinutesOrSeconds(raw);
                          const newM = clamped ? clamped.padStart(2, "0") : "00";
                          setPaceTimeM(newM);
                        }
                      }}
                      onValueChange={(v) => setPaceTimeM(v ?? "")}
                      onInputValueChange={(inputValue) => {
                        paceTimeMInputRef.current = clampMinutesOrSeconds(inputValue);
                      }}
                      items={TIME_MINUTE_SECOND_OPTIONS}
                      filteredItems={TIME_MINUTE_SECOND_OPTIONS}
                    >
                    <ComboboxInput
                      placeholder={t.placeholderTime}
                      className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
                      showTrigger={false}
                      showClear={false}
                      maxLength={2}
                    >
                      <InputGroupAddon align="inline-end" className="pr-3">
                        <InputGroupText className="text-muted-foreground">{t.minuteShort}</InputGroupText>
                      </InputGroupAddon>
                    </ComboboxInput>
                    <ComboboxContent>
                      <ComboboxList>
                        <ComboboxCollection>
                          {(item: string) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxCollection>
                      </ComboboxList>
                      <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                    </ComboboxContent>
                  </Combobox>
                  </div>
                  <div className="flex-1">
                    <Combobox
                      value={paceTimeS || undefined}
                      inputValue={paceTimeSOpen ? undefined : paceTimeS}
                      open={paceTimeSOpen}
                      onOpenChange={(open) => {
                        setPaceTimeSOpen(open);
                        if (open) {
                          paceTimeSInputRef.current = paceTimeS;
                        } else {
                          const raw = paceTimeSInputRef.current ?? paceTimeS;
                          const clamped = clampMinutesOrSeconds(raw);
                          const newS = clamped ? clamped.padStart(2, "0") : "00";
                          setPaceTimeS(newS);
                        }
                      }}
                      onValueChange={(v) => setPaceTimeS(v ?? "")}
                      onInputValueChange={(inputValue) => {
                        paceTimeSInputRef.current = clampMinutesOrSeconds(inputValue);
                      }}
                      items={TIME_MINUTE_SECOND_OPTIONS}
                      filteredItems={TIME_MINUTE_SECOND_OPTIONS}
                    >
                    <ComboboxInput
                      placeholder={t.placeholderTime}
                      className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
                      showTrigger={false}
                      showClear={false}
                      maxLength={2}
                    >
                      <InputGroupAddon align="inline-end" className="pr-3">
                        <InputGroupText className="text-muted-foreground">{t.secondShort}</InputGroupText>
                      </InputGroupAddon>
                    </ComboboxInput>
                    <ComboboxContent>
                      <ComboboxList>
                        <ComboboxCollection>
                          {(item: string) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxCollection>
                      </ComboboxList>
                      <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                    </ComboboxContent>
                  </Combobox>
                  </div>
                </div>
              </Field>

              <Button
                type="button"
                size="lg"
                className="h-14 w-full sm:col-span-3 text-base"
              >
                {t.btnCalculate}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="time" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card sm:grid-cols-3">
              <Field className="p-0 sm:col-span-3">
                <Label htmlFor="time-distance">{t.labelDistance}</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
                  <div className="relative">
                    <div
                      className="flex h-11 items-center gap-0 rounded-lg border border-input bg-transparent transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 [&:has(input:focus)]:border-ring [&:has(input:focus)]:ring-3 [&:has(input:focus)]:ring-ring/50"
                      onFocus={() => setTimeDistancePopoverOpen(true)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                          setTimeout(() => setTimeDistancePopoverOpen(false), 180);
                        }
                      }}
                    >
                      <input
                        ref={timeDistanceInputRef}
                        id="time-distance"
                        type="text"
                        inputMode="decimal"
                        placeholder={t.placeholderDistance}
                        maxLength={12}
                        className="h-11 w-full rounded-lg border-0 bg-transparent px-2.5 text-lg outline-none [appearance:textfield]"
                        value={formatDistanceDisplay(timeDistance)}
                        onChange={(e) => {
                          const raw = e.target.value;
                          const cursor = e.target.selectionStart ?? 0;
                          const parsed = parseDistanceInput(raw);
                          const logicalIndex = countLogicalBefore(raw, cursor);
                          const formatted = formatDistanceDisplay(parsed);
                          nextTimeDistanceCursorRef.current = positionForLogicalIndex(
                            formatted,
                            logicalIndex
                          );
                          setTimeDistance(parsed);
                        }}
                      />
                    </div>
                    {timeDistancePopoverOpen && (
                      <div className="absolute top-full left-0 z-10 mt-1.5 flex flex-wrap gap-2 rounded-lg border border-border bg-popover p-2 shadow-md ring-1 ring-foreground/10">
                        {distanceBadges[timeDistanceUnit].map((badge) => (
                          <Badge
                            key={badge.label}
                            asChild
                            variant="outline"
                            className="text-sm"
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setTimeDistance(parseDistanceInput(badge.value));
                                setTimeDistancePopoverOpen(false);
                              }}
                            >
                              {badge.label}
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="w-fit">
                    <Select
                      value={timeDistanceUnit}
                      onValueChange={(value) => {
                        const unit = value as DistanceUnit;
                        setTimeDistanceUnit(unit);
                        if (unit === "miles") {
                          setTimePaceUnit("Per Mile");
                          setTimeVelocityUnit("Miles Per Hour");
                        } else if (unit === "kilometers") {
                          setTimePaceUnit("Per Kilometer");
                          setTimeVelocityUnit("Kilometers Per Hour");
                        } else {
                          setTimePaceUnit("Per Kilometer");
                          setTimeVelocityUnit("Meters Per Second");
                        }
                      }}
                    >
                      <SelectTrigger className="h-11 w-fit min-w-[92px] text-base data-[size=default]:h-11">
                        <SelectValue>{selectedTimeDistanceUnit.short}</SelectValue>
                      </SelectTrigger>
                      <SelectContent position="popper" side="bottom" sideOffset={6}>
                        {distanceUnitOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {distanceUnitLabel[option.value]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Field>

              <Field className="p-0 sm:col-span-3">
                <div className="flex items-center gap-1.5">
                  <Toggle
                    type="button"
                    size="sm"
                    variant="outline"
                    pressed={timePaceVelocityMode === "pace"}
                    onPressedChange={(pressed) => pressed && setTimePaceVelocityMode("pace")}
                    className="border-0 data-[state=off]:bg-transparent data-[state=off]:hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:ring-1 data-[state=on]:ring-inset data-[state=on]:ring-input"
                  >
                    {t.togglePace}
                  </Toggle>
                  <Toggle
                    type="button"
                    size="sm"
                    variant="outline"
                    pressed={timePaceVelocityMode === "velocity"}
                    onPressedChange={(pressed) => pressed && setTimePaceVelocityMode("velocity")}
                    className="border-0 data-[state=off]:bg-transparent data-[state=off]:hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:ring-1 data-[state=on]:ring-inset data-[state=on]:ring-input"
                  >
                    {t.toggleVelocity}
                  </Toggle>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  {timePaceVelocityMode === "pace" ? (
                    <Fragment key="time-pace">
                      <div className="flex gap-2 flex-1 min-w-0">
                        <div className="flex-1 min-w-0">
                          <Combobox
                            value={timePaceH || undefined}
                            inputValue={timePaceHOpen ? undefined : timePaceH}
                            open={timePaceHOpen}
                            onOpenChange={(open) => {
                              setTimePaceHOpen(open);
                              if (open) timePaceHInputRef.current = timePaceH;
                              else {
                                const raw = timePaceHInputRef.current ?? timePaceH;
                                const clamped = clampHours(raw);
                                setTimePaceH(clamped ? clamped.padStart(2, "0") : "00");
                              }
                            }}
                            onValueChange={(v) => setTimePaceH(v ?? "")}
                            onInputValueChange={(v) => { timePaceHInputRef.current = clampHours(v); }}
                            items={TIME_HOUR_OPTIONS}
                            filteredItems={TIME_HOUR_OPTIONS}
                          >
                            <ComboboxInput placeholder={t.placeholderTime} className="h-11 [&_input]:text-lg [&_input]:md:text-lg" showTrigger={false} showClear={false} maxLength={2}>
                              <InputGroupAddon align="inline-end" className="pr-3">
                                <InputGroupText className="text-muted-foreground">{t.hourShort}</InputGroupText>
                              </InputGroupAddon>
                            </ComboboxInput>
                            <ComboboxContent>
                              <ComboboxList>
                                <ComboboxCollection>
                                  {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
                                </ComboboxCollection>
                              </ComboboxList>
                              <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                            </ComboboxContent>
                          </Combobox>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Combobox
                            value={timePaceM || undefined}
                            inputValue={timePaceMOpen ? undefined : timePaceM}
                            open={timePaceMOpen}
                            onOpenChange={(open) => {
                              setTimePaceMOpen(open);
                              if (open) timePaceMInputRef.current = timePaceM;
                              else {
                                const raw = timePaceMInputRef.current ?? timePaceM;
                                const clamped = clampMinutesOrSeconds(raw);
                                setTimePaceM(clamped ? clamped.padStart(2, "0") : "00");
                              }
                            }}
                            onValueChange={(v) => setTimePaceM(v ?? "")}
                            onInputValueChange={(v) => { timePaceMInputRef.current = clampMinutesOrSeconds(v); }}
                            items={TIME_MINUTE_SECOND_OPTIONS}
                            filteredItems={TIME_MINUTE_SECOND_OPTIONS}
                          >
                            <ComboboxInput placeholder={t.placeholderTime} className="h-11 [&_input]:text-lg [&_input]:md:text-lg" showTrigger={false} showClear={false} maxLength={2}>
                              <InputGroupAddon align="inline-end" className="pr-3">
                                <InputGroupText className="text-muted-foreground">{t.minuteShort}</InputGroupText>
                              </InputGroupAddon>
                            </ComboboxInput>
                            <ComboboxContent>
                              <ComboboxList>
                                <ComboboxCollection>
                                  {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
                                </ComboboxCollection>
                              </ComboboxList>
                              <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                            </ComboboxContent>
                          </Combobox>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Combobox
                            value={timePaceS || undefined}
                            inputValue={timePaceSOpen ? undefined : timePaceS}
                            open={timePaceSOpen}
                            onOpenChange={(open) => {
                              setTimePaceSOpen(open);
                              if (open) timePaceSInputRef.current = timePaceS;
                              else {
                                const raw = timePaceSInputRef.current ?? timePaceS;
                                const clamped = clampMinutesOrSeconds(raw);
                                setTimePaceS(clamped ? clamped.padStart(2, "0") : "00");
                              }
                            }}
                            onValueChange={(v) => setTimePaceS(v ?? "")}
                            onInputValueChange={(v) => { timePaceSInputRef.current = clampMinutesOrSeconds(v); }}
                            items={TIME_MINUTE_SECOND_OPTIONS}
                            filteredItems={TIME_MINUTE_SECOND_OPTIONS}
                          >
                            <ComboboxInput placeholder={t.placeholderTime} className="h-11 [&_input]:text-lg [&_input]:md:text-lg" showTrigger={false} showClear={false} maxLength={2}>
                              <InputGroupAddon align="inline-end" className="pr-3">
                                <InputGroupText className="text-muted-foreground">{t.secondShort}</InputGroupText>
                              </InputGroupAddon>
                            </ComboboxInput>
                            <ComboboxContent>
                              <ComboboxList>
                                <ComboboxCollection>
                                  {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
                                </ComboboxCollection>
                              </ComboboxList>
                              <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                            </ComboboxContent>
                          </Combobox>
                        </div>
                      </div>
                      <Select value={timePaceUnit} onValueChange={(v) => setTimePaceUnit(v as PaceOnlyUnit)}>
                        <SelectTrigger className="h-11 w-fit min-w-[92px] text-base data-[size=default]:h-11">
                          <SelectValue>{paceOptionLabel[timePaceUnit]}</SelectValue>
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom" sideOffset={6}>
                          {paceOnlyOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>{paceOptionLabel[opt]}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Fragment>
                  ) : (
                    <Fragment key="time-velocity">
                      <div className="flex h-11 flex-1 min-w-0 items-center rounded-lg border border-input bg-transparent transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
                        <input
                          type="text"
                          inputMode="decimal"
                          placeholder={t.placeholderDistance}
                          maxLength={4}
                          className="h-11 w-full min-w-0 rounded-lg border-0 bg-transparent px-2.5 text-lg outline-none [appearance:textfield]"
                          value={timeVelocityValue}
                          onChange={(e) => {
                            const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                            setTimeVelocityValue(v);
                          }}
                        />
                      </div>
                      <Select
                        value={timeVelocityUnit || defaultVelocityUnitForLocale(locale)}
                        onValueChange={(v) => setTimeVelocityUnit(v as VelocityUnit)}
                      >
                        <SelectTrigger className="h-11 w-fit min-w-[92px] text-base data-[size=default]:h-11">
                          <SelectValue>
                            {velocityOptionLabel[timeVelocityUnit || defaultVelocityUnitForLocale(locale)]}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom" sideOffset={6}>
                          {velocityOnlyOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>{velocityOptionLabel[opt]}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Fragment>
                  )}
                </div>
              </Field>

              <Button
                type="button"
                size="lg"
                className="h-14 w-full sm:col-span-3"
              >
                {t.btnCalculate}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="distance" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card sm:grid-cols-3">
              <Field className="p-0 sm:col-span-3">
                <Label>{t.labelTime}</Label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Combobox
                      value={parseTime(distanceTime).h === "00" ? undefined : parseTime(distanceTime).h}
                      inputValue={distanceTimeHOpen ? undefined : (parseTime(distanceTime).h === "00" ? "" : parseTime(distanceTime).h)}
                      open={distanceTimeHOpen}
                      onOpenChange={(open) => {
                        setDistanceTimeHOpen(open);
                        if (open) distanceTimeHInputRef.current = parseTime(distanceTime).h;
                        else {
                          const raw = distanceTimeHInputRef.current ?? parseTime(distanceTime).h;
                          const clamped = clampHours(raw);
                          const { m, s } = parseTime(distanceTime);
                          setDistanceTime(formatTime(clamped ? clamped.padStart(2, "0") : "00", m, s));
                        }
                      }}
                      onValueChange={(v) => {
                        const { m, s } = parseTime(distanceTime);
                        setDistanceTime(formatTime(v ?? "00", m, s));
                      }}
                      onInputValueChange={(inputValue) => {
                        distanceTimeHInputRef.current = clampHours(inputValue);
                      }}
                      items={TIME_HOUR_OPTIONS}
                      filteredItems={TIME_HOUR_OPTIONS}
                    >
                      <ComboboxInput
                        placeholder={t.placeholderTime}
                        className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
                        showTrigger={false}
                        showClear={false}
                        maxLength={2}
                      >
                        <InputGroupAddon align="inline-end" className="pr-3">
                          <InputGroupText className="text-muted-foreground">{t.hourShort}</InputGroupText>
                        </InputGroupAddon>
                      </ComboboxInput>
                      <ComboboxContent>
                        <ComboboxList>
                          <ComboboxCollection>
                            {(item: string) => (
                              <ComboboxItem key={item} value={item}>
                                {item}
                              </ComboboxItem>
                            )}
                          </ComboboxCollection>
                        </ComboboxList>
                        <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                      </ComboboxContent>
                    </Combobox>
                  </div>
                  <div className="flex-1">
                    <Combobox
                      value={parseTime(distanceTime).m === "00" ? undefined : parseTime(distanceTime).m}
                      inputValue={distanceTimeMOpen ? undefined : (parseTime(distanceTime).m === "00" ? "" : parseTime(distanceTime).m)}
                      open={distanceTimeMOpen}
                      onOpenChange={(open) => {
                        setDistanceTimeMOpen(open);
                        if (open) distanceTimeMInputRef.current = parseTime(distanceTime).m;
                        else {
                          const raw = distanceTimeMInputRef.current ?? parseTime(distanceTime).m;
                          const clamped = clampMinutesOrSeconds(raw);
                          const { h, s } = parseTime(distanceTime);
                          setDistanceTime(formatTime(h, clamped ? clamped.padStart(2, "0") : "00", s));
                        }
                      }}
                      onValueChange={(v) => {
                        const { h, s } = parseTime(distanceTime);
                        setDistanceTime(formatTime(h, v ?? "00", s));
                      }}
                      onInputValueChange={(inputValue) => {
                        distanceTimeMInputRef.current = clampMinutesOrSeconds(inputValue);
                      }}
                      items={TIME_MINUTE_SECOND_OPTIONS}
                      filteredItems={TIME_MINUTE_SECOND_OPTIONS}
                    >
                      <ComboboxInput
                        placeholder={t.placeholderTime}
                        className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
                        showTrigger={false}
                        showClear={false}
                        maxLength={2}
                      >
                        <InputGroupAddon align="inline-end" className="pr-3">
                          <InputGroupText className="text-muted-foreground">{t.minuteShort}</InputGroupText>
                        </InputGroupAddon>
                      </ComboboxInput>
                      <ComboboxContent>
                        <ComboboxList>
                          <ComboboxCollection>
                            {(item: string) => (
                              <ComboboxItem key={item} value={item}>
                                {item}
                              </ComboboxItem>
                            )}
                          </ComboboxCollection>
                        </ComboboxList>
                        <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                      </ComboboxContent>
                    </Combobox>
                  </div>
                  <div className="flex-1">
                    <Combobox
                      value={parseTime(distanceTime).s === "00" ? undefined : parseTime(distanceTime).s}
                      inputValue={distanceTimeSOpen ? undefined : (parseTime(distanceTime).s === "00" ? "" : parseTime(distanceTime).s)}
                      open={distanceTimeSOpen}
                      onOpenChange={(open) => {
                        setDistanceTimeSOpen(open);
                        if (open) distanceTimeSInputRef.current = parseTime(distanceTime).s;
                        else {
                          const raw = distanceTimeSInputRef.current ?? parseTime(distanceTime).s;
                          const clamped = clampMinutesOrSeconds(raw);
                          const { h, m } = parseTime(distanceTime);
                          setDistanceTime(formatTime(h, m, clamped ? clamped.padStart(2, "0") : "00"));
                        }
                      }}
                      onValueChange={(v) => {
                        const { h, m } = parseTime(distanceTime);
                        setDistanceTime(formatTime(h, m, v ?? "00"));
                      }}
                      onInputValueChange={(inputValue) => {
                        distanceTimeSInputRef.current = clampMinutesOrSeconds(inputValue);
                      }}
                      items={TIME_MINUTE_SECOND_OPTIONS}
                      filteredItems={TIME_MINUTE_SECOND_OPTIONS}
                    >
                      <ComboboxInput
                        placeholder={t.placeholderTime}
                        className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
                        showTrigger={false}
                        showClear={false}
                        maxLength={2}
                      >
                        <InputGroupAddon align="inline-end" className="pr-3">
                          <InputGroupText className="text-muted-foreground">{t.secondShort}</InputGroupText>
                        </InputGroupAddon>
                      </ComboboxInput>
                      <ComboboxContent>
                        <ComboboxList>
                          <ComboboxCollection>
                            {(item: string) => (
                              <ComboboxItem key={item} value={item}>
                                {item}
                              </ComboboxItem>
                            )}
                          </ComboboxCollection>
                        </ComboboxList>
                        <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                      </ComboboxContent>
                    </Combobox>
                  </div>
                </div>
              </Field>

              <Field className="p-0 sm:col-span-3">
                <div className="flex items-center gap-1.5">
                  <Toggle
                    type="button"
                    size="sm"
                    variant="outline"
                    pressed={distancePaceVelocityMode === "pace"}
                    onPressedChange={(pressed) => pressed && setDistancePaceVelocityMode("pace")}
                    className="border-0 data-[state=off]:bg-transparent data-[state=off]:hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:ring-1 data-[state=on]:ring-inset data-[state=on]:ring-input"
                  >
                    {t.togglePace}
                  </Toggle>
                  <Toggle
                    type="button"
                    size="sm"
                    variant="outline"
                    pressed={distancePaceVelocityMode === "velocity"}
                    onPressedChange={(pressed) => pressed && setDistancePaceVelocityMode("velocity")}
                    className="border-0 data-[state=off]:bg-transparent data-[state=off]:hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:ring-1 data-[state=on]:ring-inset data-[state=on]:ring-input"
                  >
                    {t.toggleVelocity}
                  </Toggle>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  {distancePaceVelocityMode === "pace" ? (
                    <Fragment key="distance-pace">
                      <div className="flex gap-2 flex-1 min-w-0">
                        <div className="flex-1 min-w-0">
                          <Combobox
                            value={distancePaceH || undefined}
                            inputValue={distancePaceHOpen ? undefined : distancePaceH}
                            open={distancePaceHOpen}
                            onOpenChange={(open) => {
                              setDistancePaceHOpen(open);
                              if (open) distancePaceHInputRef.current = distancePaceH;
                              else {
                                const raw = distancePaceHInputRef.current ?? distancePaceH;
                                const clamped = clampHours(raw);
                                setDistancePaceH(clamped ? clamped.padStart(2, "0") : "00");
                              }
                            }}
                            onValueChange={(v) => setDistancePaceH(v ?? "")}
                            onInputValueChange={(v) => { distancePaceHInputRef.current = clampHours(v); }}
                            items={TIME_HOUR_OPTIONS}
                            filteredItems={TIME_HOUR_OPTIONS}
                          >
                            <ComboboxInput placeholder={t.placeholderTime} className="h-11 [&_input]:text-lg [&_input]:md:text-lg" showTrigger={false} showClear={false} maxLength={2}>
                              <InputGroupAddon align="inline-end" className="pr-3">
                                <InputGroupText className="text-muted-foreground">{t.hourShort}</InputGroupText>
                              </InputGroupAddon>
                            </ComboboxInput>
                            <ComboboxContent>
                              <ComboboxList>
                                <ComboboxCollection>
                                  {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
                                </ComboboxCollection>
                              </ComboboxList>
                              <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                            </ComboboxContent>
                          </Combobox>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Combobox
                            value={distancePaceM || undefined}
                            inputValue={distancePaceMOpen ? undefined : distancePaceM}
                            open={distancePaceMOpen}
                            onOpenChange={(open) => {
                              setDistancePaceMOpen(open);
                              if (open) distancePaceMInputRef.current = distancePaceM;
                              else {
                                const raw = distancePaceMInputRef.current ?? distancePaceM;
                                const clamped = clampMinutesOrSeconds(raw);
                                setDistancePaceM(clamped ? clamped.padStart(2, "0") : "00");
                              }
                            }}
                            onValueChange={(v) => setDistancePaceM(v ?? "")}
                            onInputValueChange={(v) => { distancePaceMInputRef.current = clampMinutesOrSeconds(v); }}
                            items={TIME_MINUTE_SECOND_OPTIONS}
                            filteredItems={TIME_MINUTE_SECOND_OPTIONS}
                          >
                            <ComboboxInput placeholder={t.placeholderTime} className="h-11 [&_input]:text-lg [&_input]:md:text-lg" showTrigger={false} showClear={false} maxLength={2}>
                              <InputGroupAddon align="inline-end" className="pr-3">
                                <InputGroupText className="text-muted-foreground">{t.minuteShort}</InputGroupText>
                              </InputGroupAddon>
                            </ComboboxInput>
                            <ComboboxContent>
                              <ComboboxList>
                                <ComboboxCollection>
                                  {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
                                </ComboboxCollection>
                              </ComboboxList>
                              <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                            </ComboboxContent>
                          </Combobox>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Combobox
                            value={distancePaceS || undefined}
                            inputValue={distancePaceSOpen ? undefined : distancePaceS}
                            open={distancePaceSOpen}
                            onOpenChange={(open) => {
                              setDistancePaceSOpen(open);
                              if (open) distancePaceSInputRef.current = distancePaceS;
                              else {
                                const raw = distancePaceSInputRef.current ?? distancePaceS;
                                const clamped = clampMinutesOrSeconds(raw);
                                setDistancePaceS(clamped ? clamped.padStart(2, "0") : "00");
                              }
                            }}
                            onValueChange={(v) => setDistancePaceS(v ?? "")}
                            onInputValueChange={(v) => { distancePaceSInputRef.current = clampMinutesOrSeconds(v); }}
                            items={TIME_MINUTE_SECOND_OPTIONS}
                            filteredItems={TIME_MINUTE_SECOND_OPTIONS}
                          >
                            <ComboboxInput placeholder={t.placeholderTime} className="h-11 [&_input]:text-lg [&_input]:md:text-lg" showTrigger={false} showClear={false} maxLength={2}>
                              <InputGroupAddon align="inline-end" className="pr-3">
                                <InputGroupText className="text-muted-foreground">{t.secondShort}</InputGroupText>
                              </InputGroupAddon>
                            </ComboboxInput>
                            <ComboboxContent>
                              <ComboboxList>
                                <ComboboxCollection>
                                  {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
                                </ComboboxCollection>
                              </ComboboxList>
                              <ComboboxEmpty>{t.comboboxEmpty}</ComboboxEmpty>
                            </ComboboxContent>
                          </Combobox>
                        </div>
                      </div>
                      <Select value={distancePaceUnit} onValueChange={(v) => setDistancePaceUnit(v as PaceOnlyUnit)}>
                        <SelectTrigger className="h-11 w-fit min-w-[92px] text-base data-[size=default]:h-11">
                          <SelectValue>{paceOptionLabel[distancePaceUnit]}</SelectValue>
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom" sideOffset={6}>
                          {paceOnlyOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>{paceOptionLabel[opt]}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Fragment>
                  ) : (
                    <Fragment key="distance-velocity">
                      <div className="flex h-11 flex-1 min-w-0 items-center rounded-lg border border-input bg-transparent transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
                        <input
                          type="text"
                          inputMode="decimal"
                          placeholder={t.placeholderDistance}
                          maxLength={4}
                          className="h-11 w-full min-w-0 rounded-lg border-0 bg-transparent px-2.5 text-lg outline-none [appearance:textfield]"
                          value={distanceVelocityValue}
                          onChange={(e) => {
                            const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                            setDistanceVelocityValue(v);
                          }}
                        />
                      </div>
                      <Select
                        value={distanceVelocityUnit || defaultVelocityUnitForLocale(locale)}
                        onValueChange={(v) => setDistanceVelocityUnit(v as VelocityUnit)}
                      >
                        <SelectTrigger className="h-11 w-fit min-w-[92px] text-base data-[size=default]:h-11">
                          <SelectValue>
                            {velocityOptionLabel[distanceVelocityUnit || defaultVelocityUnitForLocale(locale)]}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom" sideOffset={6}>
                          {velocityOnlyOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>{velocityOptionLabel[opt]}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Fragment>
                  )}
                </div>
              </Field>

              <Button
                type="button"
                size="lg"
                className="h-14 w-full sm:col-span-3"
              >
                {t.btnCalculate}
              </Button>
            </form>
          </TabsContent>
            </div>
          </Tabs>
        </Field>
      </section>
      </div>

      {/* Mobile: ad “esquerdo” abaixo da calculadora */}
      <aside className="mx-auto w-full max-w-5xl px-4 pt-8 pb-5 md:hidden">
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-4 text-center">
          <p className="text-sm font-medium text-foreground">Advertisement</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Reserved space for Google AdSense.
          </p>
          <div className="mt-4 min-h-[90px] w-full rounded-md border border-border/60 bg-background/80" />
        </div>
      </aside>

      <section className="mx-auto w-full max-w-3xl px-4 pb-12 pt-6 md:px-10">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          {faqByLocale[locale].title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqByLocale[locale].items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Mobile: ad “direito” abaixo do FAQ */}
      <aside className="mx-auto w-full max-w-5xl px-4 pt-8 pb-5 md:hidden">
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-4 text-center">
          <p className="text-sm font-medium text-foreground">Advertisement</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Reserved space for Google AdSense.
          </p>
          <div className="mt-4 min-h-[90px] w-full rounded-md border border-border/60 bg-background/80" />
        </div>
      </aside>
      </div>

      {/* Desktop: propaganda fixa no canto esquerdo */}
      <aside className="hidden md:block fixed left-4 top-24 w-[160px] lg:w-[200px] z-10">
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-4 text-center">
          <p className="text-sm font-medium text-foreground">Advertisement</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Reserved space for Google AdSense.
          </p>
          <div className="mt-4 min-h-[500px] rounded-md border border-border/60 bg-background/80 lg:min-h-[600px]" />
        </div>
      </aside>

      {/* Desktop: propaganda fixa no canto direito */}
      <aside className="hidden md:block fixed right-4 top-24 w-[160px] lg:w-[200px] z-10">
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-4 text-center">
          <p className="text-sm font-medium text-foreground">Advertisement</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Reserved space for Google AdSense.
          </p>
          <div className="mt-4 min-h-[500px] rounded-md border border-border/60 bg-background/80 lg:min-h-[600px]" />
        </div>
      </aside>
    </main>
  );
}
