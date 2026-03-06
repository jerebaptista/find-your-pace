"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
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
import { Toggle } from "@/components/ui/toggle";
import { type Locale } from "@/lib/i18n";

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

const paceUnitOptions = [
  "Per Mile",
  "Per Kilometer",
  "Miles Per Hour",
  "Kilometers Per Hour",
  "Meters Per Minute",
  "Meters Per Second",
  "Yards Per Minute",
  "Yards Per Second",
] as const;

type PaceUnit = (typeof paceUnitOptions)[number];

function defaultUnitForLocale(locale: Locale): DistanceUnit {
  return locale === "en" ? "miles" : "kilometers";
}

function isPaceUnit(value: string): value is PaceUnit {
  return paceUnitOptions.includes(value as PaceUnit);
}

const calculatorsLinks = [
  "Pace Calculator",
  "5K Pace Calculator",
  "Half Marathon Pace Calculator",
  "Marathon Pace Calculator",
];

const chartLinks = [
  "Custom",
  "5K Pace",
  "10K Pace",
  "Half Marathon",
  "Marathon",
];

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

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, setLocale } = useLanguage();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [paceDistance, setPaceDistance] = useState("");
  const [paceTime, setPaceTime] = useState("");
  const [timeDistance, setTimeDistance] = useState("");
  const [timePace, setTimePace] = useState("");
  const [timePaceUnit, setTimePaceUnit] = useState<PaceUnit>("Per Mile");
  const [distanceTime, setDistanceTime] = useState("");
  const [distancePace, setDistancePace] = useState("");
  const [distancePaceUnit, setDistancePaceUnit] = useState<PaceUnit>("Per Mile");
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
  }, [locale]);

  return (
    <main className="flex min-h-screen flex-col bg-background px-6 py-5 md:px-10">
      <header className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4">
        <p className="text-lg font-bold tracking-tight">FindYourPace</p>

        <NavigationMenu viewport={false} className="justify-self-center">
          <NavigationMenuList className="gap-3">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Calculators</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid min-w-[260px] gap-1">
                  {calculatorsLinks.map((label) => (
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
              <NavigationMenuTrigger>Charts</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid min-w-[220px] gap-1">
                  {chartLinks.map((label) => (
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
                  Blog
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-self-end gap-2">
          <Select
            value={locale}
            onValueChange={(value) => setLocale(value as Locale)}
          >
            <SelectTrigger className="w-[64px]">
              <SelectValue>{selectedLocale.shortLabel}</SelectValue>
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              align="end"
              sideOffset={6}
            >
              {localeOptions.map((option) => (
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

      <section className="mx-auto w-full max-w-3xl pt-14 pb-10 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Find Your Running Pace
          </h1>
          <p className="text-base text-muted-foreground md:text-md">
            Find your running pace instantly with our free pace calculator. Enter
            distance and time to calculate pace per km or mile for 5K, 10K, half
            marathon, and marathon training.
          </p>
        </div>

        <Tabs defaultValue="pace" className="mx-auto mt-8 w-full max-w-[400px] text-left">
          <TabsList className="mx-4 grid w-auto grid-cols-1 sm:mx-5 sm:grid-cols-3">
            <TabsTrigger value="pace">Pace</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
            <TabsTrigger value="distance">Distance</TabsTrigger>
          </TabsList>

          <TabsContent value="pace" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card px-4 pt-6 pb-4 sm:grid-cols-3 sm:px-5 sm:pt-6 sm:pb-5">
              <Field className="p-0 sm:col-span-3">
                <Label htmlFor="pace-distance">Distance</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
                  <InputGroup className="h-11">
                    <InputGroupInput
                      className="h-11"
                      id="pace-distance"
                      type="number"
                      min="0"
                      step="any"
                      placeholder="0"
                      value={paceDistance}
                      onChange={(event) => setPaceDistance(event.target.value)}
                    />
                  </InputGroup>

                  <div className="w-fit">
                    <Select
                      value={paceDistanceUnit}
                      onValueChange={(value) =>
                        setPaceDistanceUnit(value as DistanceUnit)
                      }
                    >
                      <SelectTrigger className="h-11 w-fit min-w-[92px] data-[size=default]:h-11">
                        <SelectValue>{selectedPaceDistanceUnit.short}</SelectValue>
                      </SelectTrigger>
                      <SelectContent position="popper" side="bottom" sideOffset={6}>
                        {distanceUnitOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {distanceBadges[paceDistanceUnit].map((badge) => (
                    <Badge key={badge.label} asChild variant="secondary">
                      <button
                        type="button"
                        onClick={() => setPaceDistance(badge.value)}
                      >
                        {badge.label}
                      </button>
                    </Badge>
                  ))}
                </div>
              </Field>

              <Field className="p-0 sm:col-span-3">
                <Label htmlFor="pace-time">Time</Label>
                <InputGroup className="h-11">
                  <InputGroupInput
                    className="h-11"
                    id="pace-time"
                    placeholder="hh:mm:ss"
                    value={paceTime}
                    onChange={(event) => setPaceTime(event.target.value)}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>hh:mm:ss</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <Button type="button" size="lg" className="w-full sm:col-span-3">
                Calculate
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="time" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card px-4 pt-6 pb-4 sm:grid-cols-3 sm:px-5 sm:pt-6 sm:pb-5">
              <Field className="p-0 sm:col-span-3">
                <Label htmlFor="time-distance">Distance</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
                  <InputGroup className="h-11">
                    <InputGroupInput
                      className="h-11"
                      id="time-distance"
                      type="number"
                      min="0"
                      step="any"
                      placeholder="0"
                      value={timeDistance}
                      onChange={(event) => setTimeDistance(event.target.value)}
                    />
                  </InputGroup>

                  <div className="w-fit">
                    <Select
                      value={timeDistanceUnit}
                      onValueChange={(value) =>
                        setTimeDistanceUnit(value as DistanceUnit)
                      }
                    >
                      <SelectTrigger className="h-11 w-fit min-w-[92px] data-[size=default]:h-11">
                        <SelectValue>{selectedTimeDistanceUnit.short}</SelectValue>
                      </SelectTrigger>
                      <SelectContent position="popper" side="bottom" sideOffset={6}>
                        {distanceUnitOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {distanceBadges[timeDistanceUnit].map((badge) => (
                    <Badge key={badge.label} asChild variant="outline">
                      <button
                        type="button"
                        onClick={() => setTimeDistance(badge.value)}
                      >
                        {badge.label}
                      </button>
                    </Badge>
                  ))}
                </div>
              </Field>

              <Field className="p-0 sm:col-span-3">
                <Label htmlFor="time-pace">Pace</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <InputGroup className="h-11 sm:col-span-2">
                    <InputGroupInput
                      className="h-11"
                      id="time-pace"
                      placeholder="hh:mm:ss"
                      value={timePace}
                      onChange={(event) => setTimePace(event.target.value)}
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>hh:mm:ss</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  <div className="w-full sm:col-span-1">
                    <Select
                      value={timePaceUnit}
                      onValueChange={(value) => {
                        if (isPaceUnit(value)) {
                          setTimePaceUnit(value);
                        }
                      }}
                    >
                      <SelectTrigger className="h-11 w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent position="popper" side="bottom" sideOffset={6}>
                        {paceUnitOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Field>

              <Button type="button" size="lg" className="w-full sm:col-span-3">
                Calculate
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="distance" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card px-4 pt-6 pb-4 sm:grid-cols-3 sm:px-5 sm:pt-6 sm:pb-5">
              <Field className="p-0 sm:col-span-3">
                <Label htmlFor="distance-time">Time</Label>
                <InputGroup className="h-11">
                  <InputGroupInput
                    className="h-11"
                    id="distance-time"
                    placeholder="hh:mm:ss"
                    value={distanceTime}
                    onChange={(event) => setDistanceTime(event.target.value)}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>hh:mm:ss</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <Field className="p-0 sm:col-span-3">
                <Label htmlFor="distance-pace">Pace</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <InputGroup className="h-11 sm:col-span-2">
                    <InputGroupInput
                      className="h-11"
                      id="distance-pace"
                      placeholder="hh:mm:ss"
                      value={distancePace}
                      onChange={(event) => setDistancePace(event.target.value)}
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>hh:mm:ss</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  <div className="w-full sm:col-span-1">
                    <Select
                      value={distancePaceUnit}
                      onValueChange={(value) => {
                        if (isPaceUnit(value)) {
                          setDistancePaceUnit(value);
                        }
                      }}
                    >
                      <SelectTrigger className="h-11 w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent position="popper" side="bottom" sideOffset={6}>
                        {paceUnitOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Field>

              <Button type="button" size="lg" className="w-full sm:col-span-3">
                Calculate
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mx-auto mt-auto w-full max-w-5xl pt-8 pb-5">
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-4 text-center md:p-6">
          <p className="text-sm font-medium text-foreground">Advertisement</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Reserved space for Google AdSense.
          </p>
          <div className="mt-4 min-h-[90px] w-full rounded-md border border-border/60 bg-background/80 md:min-h-[100px]" />
        </div>
      </section>
    </main>
  );
}
