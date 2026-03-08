"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

import { useLanguage } from "@/components/language-provider";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type Locale,
  translations,
  faqByLocale,
} from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TimeInput,
  DistanceInput,
  PaceVelocityInput,
} from "@/components/calculator";
import {
  type DistanceUnit,
  parseTime,
  formatTime,
  formatDistanceDisplay,
} from "@/lib/calculator-utils";

/** Unidades de pace (tempo por distância). */
const paceOnlyOptions = ["Per Mile", "Per Kilometer"] as const;
/** Unidades de velocity. */
const velocityOnlyOptions = [
  "Miles per Hour",
  "Kilometers per Hour",
  "Meters per Minute",
  "Meters per Second",
] as const;

type PaceOnlyUnit = (typeof paceOnlyOptions)[number];
type VelocityUnit = (typeof velocityOnlyOptions)[number];

/** Short labels para exibição no select: Pace = "label (mi/km)", Velocity = "mph/kph/mpm/mps" */
const paceOptionShort: Record<PaceOnlyUnit, string> = {
  "Per Mile": "mi",
  "Per Kilometer": "km",
};
const velocityOptionShort: Record<VelocityUnit, string> = {
  "Miles per Hour": "mph",
  "Kilometers per Hour": "kph",
  "Meters per Minute": "mpm",
  "Meters per Second": "mps",
};
const paceUnitOptions = [...paceOnlyOptions, ...velocityOnlyOptions] as const;
type PaceUnit = (typeof paceUnitOptions)[number];

function defaultUnitForLocale(locale: Locale): DistanceUnit {
  return locale === "en" ? "miles" : "kilometers";
}

function defaultPaceUnitForLocale(locale: Locale): PaceOnlyUnit {
  return locale === "en" ? "Per Mile" : "Per Kilometer";
}

function defaultVelocityUnitForLocale(locale: Locale): VelocityUnit {
  return locale === "en" ? "Miles per Hour" : "Kilometers per Hour";
}

function isPaceUnit(value: string): value is PaceUnit {
  return paceUnitOptions.includes(value as PaceUnit);
}

function getTabFromPathname(pathname: string): "pace" | "time" | "distance" {
  const segments = pathname.split("/").filter(Boolean);
  const second = segments[1];
  if (second === "time") return "time";
  if (second === "distance") return "distance";
  return "pace";
}

/** 1 milha em km (para converter distâncias da tabela). */
const MILES_TO_KM = 1.609344;
/** Distâncias da tabela tempo por pace: 5K, 5mi, 10K, 15K, 10mi, 20K, half, marathon (em km). */
const PACE_TABLE_DISTANCES_KM = [
  5,
  5 * MILES_TO_KM,
  10,
  15,
  10 * MILES_TO_KM,
  20,
  21.0975,
  42.195,
] as const;
/** Paces em min/km para a tabela. */
const PACE_TABLE_PACES = [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7] as const;

function formatPaceCell(minPerKm: number): string {
  const m = Math.floor(minPerKm);
  const s = Math.round((minPerKm - m) * 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatDurationFromMinutes(totalMinutes: number): string {
  const totalSec = Math.round(totalMinutes * 60);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type PaceTimeTableTranslations = {
  paceTimeTableColHalf: string;
  paceTimeTableColMarathon: string;
  paceTimeTableDistancesNote: string;
};

const PACE_TABLE_COL_LABELS = [
  "5K",
  "5 mi",
  "10K",
  "15K",
  "10 mi",
  "20K",
] as const;

function PaceTimeTable({ t }: { t: PaceTimeTableTranslations }) {
  const colLabels = [
    ...PACE_TABLE_COL_LABELS,
    t.paceTimeTableColHalf,
    t.paceTimeTableColMarathon,
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pl-4 font-medium">Pace</TableHead>
          {colLabels.map((label) => (
            <TableHead key={label} className="text-center font-medium">
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {PACE_TABLE_PACES.map((paceMin) => (
          <TableRow key={paceMin}>
            <TableCell className="pl-4 font-medium">
              {formatPaceCell(paceMin)}
            </TableCell>
            {PACE_TABLE_DISTANCES_KM.map((distKm) => (
              <TableCell key={distKm} className="text-center">
                {formatDurationFromMinutes(distKm * paceMin)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function CalculatorView() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const pathLocale = pathname.split("/").filter(Boolean)[0] ?? "en";
  const activeTab = getTabFromPathname(pathname);
  const [paceDistance, setPaceDistance] = useState("");
  const [paceTimeH, setPaceTimeH] = useState("");
  const [paceTimeM, setPaceTimeM] = useState("");
  const [paceTimeS, setPaceTimeS] = useState("");
  const [pacePaceVelocityMode, setPacePaceVelocityMode] = useState<"pace" | "velocity">("pace");
  const [pacePaceUnit, setPacePaceUnit] = useState<PaceOnlyUnit>("Per Mile");
  const [paceVelocityUnit, setPaceVelocityUnit] = useState<VelocityUnit>("Miles per Hour");
  const [paceVelocityValue, setPaceVelocityValue] = useState("");
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
  const [distanceTime, setDistanceTime] = useState("00:00:00");
  const [distancePaceVelocityMode, setDistancePaceVelocityMode] = useState<"pace" | "velocity">("pace");
  const [distancePaceH, setDistancePaceH] = useState("");
  const [distancePaceM, setDistancePaceM] = useState("");
  const [distancePaceS, setDistancePaceS] = useState("");
  const [distancePaceUnit, setDistancePaceUnit] = useState<PaceOnlyUnit>(() => defaultPaceUnitForLocale(locale));
  const [distanceVelocityValue, setDistanceVelocityValue] = useState("");
  const [distanceVelocityUnit, setDistanceVelocityUnit] = useState<VelocityUnit>(() =>
    defaultVelocityUnitForLocale(locale ?? "en")
  );
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [paceDistanceUnit, setPaceDistanceUnit] = useState<DistanceUnit>(
    defaultUnitForLocale(locale)
  );
  const [timeDistanceUnit, setTimeDistanceUnit] = useState<DistanceUnit>(
    defaultUnitForLocale(locale)
  );

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

  const t = translations[locale];
  const pageTitle = activeTab === "pace" ? t.appTitle : activeTab === "time" ? t.appTitleTime : t.appTitleDistance;
  const pageDescription = activeTab === "pace" ? t.appDescription : activeTab === "time" ? t.appDescriptionTime : t.appDescriptionDistance;

  useEffect(() => {
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pageDescription);
  }, [pageTitle, pageDescription]);

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
    "Miles per Hour": t.velMph,
    "Kilometers per Hour": t.velKph,
    "Meters per Minute": t.velMpm,
    "Meters per Second": t.velMps,
  };

  function handleCalculate(e: React.MouseEvent) {
    e.preventDefault();

    const distNum = (s: string) => (s ? parseFloat(s.replace(/\s/g, "").replace(/,/g, ".")) : 0);
    const timeToSec = (h: string, m: string, s: string) =>
      parseInt(h || "0", 10) * 3600 + parseInt(m || "0", 10) * 60 + parseInt(s || "0", 10);

    const missing: string[] = [];

    if (activeTab === "pace") {
      const dist = distNum(paceDistance);
      const sec = timeToSec(paceTimeH, paceTimeM, paceTimeS);
      if (!dist || dist <= 0) missing.push(t.validationMissingDistance);
      if (sec <= 0) missing.push(t.validationMissingTime);
    } else if (activeTab === "time") {
      const dist = distNum(timeDistance);
      if (!dist || dist <= 0) missing.push(t.validationMissingDistance);
      if (timePaceVelocityMode === "pace") {
        const paceSec =
          parseInt(timePaceH || "0", 10) * 3600 +
          parseInt(timePaceM || "0", 10) * 60 +
          parseInt(timePaceS || "0", 10);
        if (paceSec <= 0) missing.push(t.validationMissingPace);
      } else {
        const speed = parseFloat(timeVelocityValue) || 0;
        if (!speed || speed <= 0) missing.push(t.validationMissingVelocity);
      }
    } else {
      const { h, m, s } = parseTime(distanceTime);
      const totalSec = timeToSec(h, m, s);
      if (totalSec <= 0) missing.push(t.validationMissingTime);
      if (distancePaceVelocityMode === "pace") {
        const paceSec =
          parseInt(distancePaceH || "0", 10) * 3600 +
          parseInt(distancePaceM || "0", 10) * 60 +
          parseInt(distancePaceS || "0", 10);
        if (paceSec <= 0) missing.push(t.validationMissingPace);
      } else {
        const speed = parseFloat(distanceVelocityValue) || 0;
        if (!speed || speed <= 0) missing.push(t.validationMissingVelocity);
      }
    }

    if (missing.length > 0) {
      toast.error(t.validationMissingTitle, {
        description: missing.join(", "),
      });
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 1000);
  }

  function handleNewCalculation() {
    setShowResult(false);
  }

  function getResultSummary(): { tableRows: { label: string; value: string }[]; mainResult: string } {
    const distNum = (s: string) => (s ? parseFloat(s.replace(/\s/g, "").replace(/,/g, ".")) : 0);
    const timeToSec = (h: string, m: string, s: string) =>
      parseInt(h || "0", 10) * 3600 + parseInt(m || "0", 10) * 60 + parseInt(s || "0", 10);
    const secToPace = (sec: number) => {
      const m = Math.floor(sec / 60);
      const s = Math.round(sec % 60);
      return `${m}:${s.toString().padStart(2, "0")}`;
    };

    if (activeTab === "pace") {
      const dist = distNum(paceDistance);
      const sec = timeToSec(paceTimeH, paceTimeM, paceTimeS);
      const unitLabel = distanceUnitLabel[paceDistanceUnit];
      const rows: { label: string; value: string }[] = [
        { label: t.labelDistance, value: `${formatDistanceDisplay(paceDistance)} ${unitLabel}` },
        { label: t.labelTime, value: `${paceTimeH.padStart(2, "0")}:${paceTimeM.padStart(2, "0")}:${paceTimeS.padStart(2, "0")}` },
      ];
      const paceSecPerUnit = dist > 0 ? sec / dist : 0;
      const mainResult = dist > 0 && sec > 0
        ? `${secToPace(paceSecPerUnit)} / ${paceDistanceUnit === "kilometers" ? "km" : paceDistanceUnit === "miles" ? "mi" : "m"}`
        : "—";
      return { tableRows: rows, mainResult };
    }
    if (activeTab === "time") {
      const dist = distNum(timeDistance);
      const unitLabel = distanceUnitLabel[timeDistanceUnit];
      const rows: { label: string; value: string }[] = [
        { label: t.labelDistance, value: `${formatDistanceDisplay(timeDistance)} ${unitLabel}` },
      ];
      if (timePaceVelocityMode === "pace") {
        const paceSecPerUnit =
          parseInt(timePaceH || "0", 10) * 3600 +
          parseInt(timePaceM || "0", 10) * 60 +
          parseInt(timePaceS || "0", 10);
        const totalSec = dist > 0 ? dist * paceSecPerUnit : 0;
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = Math.round(totalSec % 60);
        rows.push({ label: t.averagePace, value: `${timePaceH.padStart(2, "0")}:${timePaceM.padStart(2, "0")}:${timePaceS.padStart(2, "0")} /${timePaceUnit === "Per Kilometer" ? "km" : "mi"}` });
        const mainResult = dist > 0 && paceSecPerUnit > 0
          ? `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
          : "—";
        return { tableRows: rows, mainResult };
      }
      const speed = parseFloat(timeVelocityValue) || 0;
      rows.push({ label: t.averageSpeed, value: `${timeVelocityValue || "0"} ${timeVelocityUnit}` });
      const totalHours = dist > 0 && speed > 0 ? dist / speed : 0;
      const totalSec2 = Math.round(totalHours * 3600);
      const h2 = Math.floor(totalSec2 / 3600);
      const m2 = Math.floor((totalSec2 % 3600) / 60);
      const s2 = totalSec2 % 60;
      const mainResult = dist > 0 && speed > 0
        ? `${h2.toString().padStart(2, "0")}:${m2.toString().padStart(2, "0")}:${s2.toString().padStart(2, "0")}`
        : "—";
      return { tableRows: rows, mainResult };
    }
    // distance
    const { h, m, s } = parseTime(distanceTime);
    const totalSec = timeToSec(h, m, s);
    const rows: { label: string; value: string }[] = [
      { label: t.labelTime, value: distanceTime },
    ];
    if (distancePaceVelocityMode === "pace") {
      const paceSecPerUnit =
        parseInt(distancePaceH || "0", 10) * 3600 +
        parseInt(distancePaceM || "0", 10) * 60 +
        parseInt(distancePaceS || "0", 10);
      const dist = paceSecPerUnit > 0 ? totalSec / paceSecPerUnit : 0;
      rows.push({
        label: t.averagePace,
        value: `${distancePaceH.padStart(2, "0")}:${distancePaceM.padStart(2, "0")}:${distancePaceS.padStart(2, "0")} /${distancePaceUnit === "Per Kilometer" ? "km" : "mi"}`,
      });
      const unitShort = distancePaceUnit === "Per Kilometer" ? "km" : "mi";
      const mainResult = totalSec > 0 && paceSecPerUnit > 0 ? `${dist.toFixed(2)} ${unitShort}` : "—";
      return { tableRows: rows, mainResult };
    }
    rows.push({ label: t.averageSpeed, value: distanceVelocityUnit });
    const mainResult = totalSec > 0 ? "—" : "—";
    return { tableRows: rows, mainResult };
  }

  const resultSummary = showResult ? getResultSummary() : null;

  return (
    <main className="flex min-h-screen flex-col bg-background py-5 lg:px-0">
      <AppHeader />
      {/* Conteúdo: px-6 para todo (título, calculadora, ads, tabela, faq); desktop com área dos ads */}
      <div className="w-full flex flex-col min-w-0 px-6 xl:pl-[176px] xl:pr-[176px] 3xl:pl-[316px] 3xl:pr-[316px]">
      <div className="mx-auto w-full max-w-6xl pt-14 pb-10 lg:px-10">
      <section className="w-full max-w-3xl mx-auto text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {pageTitle}
          </h1>
          <p className="text-base text-muted-foreground md:text-md">
            {pageDescription}
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-none [perspective:1000px] md:max-w-[388px]">
          <div
            className="relative w-full rounded-lg border border-input bg-card shadow-sm transition-transform duration-500 [transform-style:preserve-3d]"
            style={{ transform: showResult ? "rotateY(180deg)" : "none" }}
          >
            {/* Frente: formulário (no fluxo para definir altura do card) */}
            <div className="rounded-lg p-6 [backface-visibility:hidden]">
          <Tabs
            value={activeTab}
            onValueChange={(v) => {
              const next = v as "pace" | "time" | "distance";
              if (next === "pace") router.push(pathLocale ? `/${pathLocale}` : "/");
              else if (next === "time") router.push(`/${pathLocale}/time`);
              else router.push(`/${pathLocale}/distance`);
            }}
            className="w-full text-left"
          >
            <div className="flex flex-col gap-6">
              <TabsList className="grid w-auto grid-cols-3">
                <TabsTrigger value="pace">{t.tabPace}</TabsTrigger>
                <TabsTrigger value="time">{t.tabTime}</TabsTrigger>
                <TabsTrigger value="distance">{t.tabDistance}</TabsTrigger>
              </TabsList>

              <TabsContent value="pace" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card sm:grid-cols-3">
              <DistanceInput
                value={paceDistance}
                unit={paceDistanceUnit}
                onValueChange={setPaceDistance}
                onUnitChange={setPaceDistanceUnit}
                label={t.labelDistance}
                id="pace-distance"
                placeholderDistance={t.placeholderDistance}
                unitLabel={distanceUnitLabel}
                distanceBadges={t.distanceBadges}
              />
              <TimeInput
                value={formatTime(paceTimeH, paceTimeM, paceTimeS)}
                onChange={(v) => {
                  const { h, m, s } = parseTime(v);
                  setPaceTimeH(h);
                  setPaceTimeM(m);
                  setPaceTimeS(s);
                }}
                label={t.labelTime}
                placeholderTime={t.placeholderTime}
                hourShort={t.hourShort}
                minuteShort={t.minuteShort}
                secondShort={t.secondShort}
                comboboxEmpty={t.comboboxEmpty}
              />

              <Button
                type="button"
                size="lg"
                className="h-14 w-full sm:col-span-3 text-base"
                onClick={handleCalculate}
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 size-5 animate-spin" />
                    {t.btnCalculating}
                  </>
                ) : (
                  t.btnCalculate
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="time" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card sm:grid-cols-3">
              <DistanceInput
                value={timeDistance}
                unit={timeDistanceUnit}
                onValueChange={setTimeDistance}
                onUnitChange={(unit) => {
                  setTimeDistanceUnit(unit);
                  if (unit === "miles") {
                    setTimePaceUnit("Per Mile");
                    setTimeVelocityUnit("Miles per Hour");
                  } else if (unit === "kilometers") {
                    setTimePaceUnit("Per Kilometer");
                    setTimeVelocityUnit("Kilometers per Hour");
                  } else {
                    setTimePaceUnit("Per Kilometer");
                    setTimeVelocityUnit("Meters per Second");
                  }
                }}
                label={t.labelDistance}
                id="time-distance"
                placeholderDistance={t.placeholderDistance}
                unitLabel={distanceUnitLabel}
                distanceBadges={t.distanceBadges}
              />
              <PaceVelocityInput
                instanceId="time"
                mode={timePaceVelocityMode}
                onModeChange={setTimePaceVelocityMode}
                paceH={timePaceH}
                paceM={timePaceM}
                paceS={timePaceS}
                paceUnit={timePaceUnit}
                onPaceHChange={setTimePaceH}
                onPaceMChange={setTimePaceM}
                onPaceSChange={setTimePaceS}
                onPaceUnitChange={(v) => setTimePaceUnit(v)}
                velocityValue={timeVelocityValue}
                velocityUnit={timeVelocityUnit || defaultVelocityUnitForLocale(locale)}
                onVelocityValueChange={setTimeVelocityValue}
                onVelocityUnitChange={(v) => setTimeVelocityUnit(v)}
                togglePaceLabel={t.togglePace}
                toggleVelocityLabel={t.toggleVelocity}
                placeholderTime={t.placeholderTime}
                placeholderDistance={t.placeholderDistance}
                hourShort={t.hourShort}
                minuteShort={t.minuteShort}
                secondShort={t.secondShort}
                comboboxEmpty={t.comboboxEmpty}
                paceOptionLabel={paceOptionLabel}
                paceOptionShort={paceOptionShort}
                velocityOptionLabel={velocityOptionLabel}
                velocityOptionShort={velocityOptionShort}
                paceOnlyOptions={paceOnlyOptions}
                velocityOnlyOptions={velocityOnlyOptions}
              />

              <Button
                type="button"
                size="lg"
                className="h-14 w-full sm:col-span-3"
                onClick={handleCalculate}
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 size-5 animate-spin" />
                    {t.btnCalculating}
                  </>
                ) : (
                  t.btnCalculate
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="distance" className="mt-0">
            <form className="grid w-full grid-cols-1 gap-6 bg-card sm:grid-cols-3">
              <TimeInput
                value={distanceTime}
                onChange={setDistanceTime}
                label={t.labelTime}
                placeholderTime={t.placeholderTime}
                hourShort={t.hourShort}
                minuteShort={t.minuteShort}
                secondShort={t.secondShort}
                comboboxEmpty={t.comboboxEmpty}
              />
              <PaceVelocityInput
                instanceId="distance"
                mode={distancePaceVelocityMode}
                onModeChange={setDistancePaceVelocityMode}
                paceH={distancePaceH}
                paceM={distancePaceM}
                paceS={distancePaceS}
                paceUnit={distancePaceUnit}
                onPaceHChange={setDistancePaceH}
                onPaceMChange={setDistancePaceM}
                onPaceSChange={setDistancePaceS}
                onPaceUnitChange={(v) => setDistancePaceUnit(v)}
                velocityValue={distanceVelocityValue}
                velocityUnit={distanceVelocityUnit || defaultVelocityUnitForLocale(locale)}
                onVelocityValueChange={setDistanceVelocityValue}
                onVelocityUnitChange={(v) => setDistanceVelocityUnit(v)}
                togglePaceLabel={t.togglePace}
                toggleVelocityLabel={t.toggleVelocity}
                placeholderTime={t.placeholderTime}
                placeholderDistance={t.placeholderDistance}
                hourShort={t.hourShort}
                minuteShort={t.minuteShort}
                secondShort={t.secondShort}
                comboboxEmpty={t.comboboxEmpty}
                paceOptionLabel={paceOptionLabel}
                paceOptionShort={paceOptionShort}
                velocityOptionLabel={velocityOptionLabel}
                velocityOptionShort={velocityOptionShort}
                paceOnlyOptions={paceOnlyOptions}
                velocityOnlyOptions={velocityOnlyOptions}
              />

              <Button
                type="button"
                size="lg"
                className="h-14 w-full sm:col-span-3"
                onClick={handleCalculate}
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 size-5 animate-spin" />
                    {t.btnCalculating}
                  </>
                ) : (
                  t.btnCalculate
                )}
              </Button>
            </form>
          </TabsContent>
            </div>
          </Tabs>
            </div>

            {/* Verso: resultado */}
            <div
              className="absolute inset-0 flex flex-col gap-6 rounded-lg p-6 [backface-visibility:hidden]"
              style={{ transform: "rotateY(180deg)" }}
            >
              {resultSummary && (
                <>
                  <h3 className="text-lg font-semibold">
                    {activeTab === "pace"
                      ? t.resultTitlePace
                      : activeTab === "time"
                        ? t.resultTitleTime
                        : t.resultTitleDistance}
                  </h3>
                  <Table>
                    <TableBody>
                      {resultSummary.tableRows.map((row, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium text-muted-foreground">{row.label}</TableCell>
                          <TableCell className="text-right">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="text-3xl font-bold tracking-tight md:text-4xl">
                    {resultSummary.mainResult}
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="mt-auto h-14 w-full text-base"
                    onClick={handleNewCalculation}
                  >
                    {t.btnNewCalculation}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Mobile: ad “esquerdo” abaixo da calculadora */}
      <AdPlaceholder
        variant="inline"
        supportText={t.adSupportRun}
        enableText={t.adEnableAds}
      />

      {/* Tabela tempo por pace */}
      <section className="mx-auto w-full max-w-5xl py-8 xl:mt-16">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          {t.paceTimeTableTitle}
        </h2>
        <p className="mb-6 text-muted-foreground">
          {t.paceTimeTableDescription}
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <PaceTimeTable t={t} />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {t.paceTimeTableDistancesNote}
        </p>
      </section>

      {/* Mobile: segundo banner acima do FAQ */}
      <AdPlaceholder
        variant="inline"
        inlineSize="300x600"
        supportText={t.adSupportRun}
        enableText={t.adEnableAds}
      />

      <section className="mx-auto w-full max-w-3xl pb-12 pt-6">
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
      </div>

      <AdPlaceholder
        variant="sidebar"
        side="left"
        supportText={t.adSupportRun}
        enableText={t.adEnableAds}
      />
      <AdPlaceholder
        variant="sidebar"
        side="right"
        supportText={t.adSupportRun}
        enableText={t.adEnableAds}
      />
    </main>
  );
}
