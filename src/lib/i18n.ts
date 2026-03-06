export type Locale =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "pt-BR"
  | "it"
  | "ja"
  | "nl"
  | "pl"
  | "sv";

type Translation = {
  appTitle: string;
  appDescription: string;
  language: string;
  theme: string;
  darkMode: string;
  calculatorTitle: string;
  distanceLabel: string;
  hoursLabel: string;
  minutesLabel: string;
  secondsLabel: string;
  emptyState: string;
  resultTitle: string;
  averagePace: string;
  averageSpeed: string;
  racePredictions: string;
  hourShort: string;
  minuteShort: string;
  secondShort: string;
};

export const localeOptions: { value: Locale; label: string }[] = [
  { value: "en", label: "English 🇺🇸" },
  { value: "es", label: "Spanish 🇪🇸" },
  { value: "fr", label: "French 🇫🇷" },
  { value: "de", label: "German 🇩🇪" },
  { value: "pt-BR", label: "Portuguese 🇧🇷" },
  { value: "it", label: "Italian 🇮🇹" },
  { value: "ja", label: "Japanese 🇯🇵" },
  { value: "nl", label: "Dutch 🇳🇱" },
  { value: "pl", label: "Polish 🇵🇱" },
  { value: "sv", label: "Swedish 🇸🇪" },
];

export const defaultLocale: Locale = "en";

export const translations: Record<Locale, Translation> = {
  en: {
    appTitle: "Find Your Pace",
    appDescription: "Calculate your running pace based on distance and time.",
    language: "Language",
    theme: "Theme",
    darkMode: "Dark mode",
    calculatorTitle: "Pace Calculator",
    distanceLabel: "Distance (km)",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
    emptyState: "Fill distance and time to calculate your pace.",
    resultTitle: "Result",
    averagePace: "Average pace",
    averageSpeed: "Average speed",
    racePredictions: "Race predictions",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  es: {
    appTitle: "Find Your Pace",
    appDescription: "Calcula tu ritmo de carrera segun distancia y tiempo.",
    language: "Idioma",
    theme: "Tema",
    darkMode: "Modo oscuro",
    calculatorTitle: "Calculadora de ritmo",
    distanceLabel: "Distancia (km)",
    hoursLabel: "Horas",
    minutesLabel: "Minutos",
    secondsLabel: "Segundos",
    emptyState: "Completa distancia y tiempo para calcular tu ritmo.",
    resultTitle: "Resultado",
    averagePace: "Ritmo medio",
    averageSpeed: "Velocidad media",
    racePredictions: "Proyecciones de carrera",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  fr: {
    appTitle: "Find Your Pace",
    appDescription: "Calculez votre allure de course selon distance et temps.",
    language: "Langue",
    theme: "Theme",
    darkMode: "Mode sombre",
    calculatorTitle: "Calculateur d'allure",
    distanceLabel: "Distance (km)",
    hoursLabel: "Heures",
    minutesLabel: "Minutes",
    secondsLabel: "Secondes",
    emptyState: "Saisissez distance et temps pour calculer votre allure.",
    resultTitle: "Resultat",
    averagePace: "Allure moyenne",
    averageSpeed: "Vitesse moyenne",
    racePredictions: "Projections de course",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  de: {
    appTitle: "Find Your Pace",
    appDescription: "Berechne dein Lauftempo aus Distanz und Zeit.",
    language: "Sprache",
    theme: "Thema",
    darkMode: "Dunkelmodus",
    calculatorTitle: "Pace-Rechner",
    distanceLabel: "Distanz (km)",
    hoursLabel: "Stunden",
    minutesLabel: "Minuten",
    secondsLabel: "Sekunden",
    emptyState: "Distanz und Zeit eingeben, um Pace zu berechnen.",
    resultTitle: "Ergebnis",
    averagePace: "Durchschnittspace",
    averageSpeed: "Durchschnittsgeschwindigkeit",
    racePredictions: "Wettkampf-Prognosen",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  "pt-BR": {
    appTitle: "Find Your Pace",
    appDescription: "Calcule seu pace de corrida com base na distancia e no tempo.",
    language: "Idioma",
    theme: "Tema",
    darkMode: "Modo escuro",
    calculatorTitle: "Calculadora de pace",
    distanceLabel: "Distancia (km)",
    hoursLabel: "Horas",
    minutesLabel: "Minutos",
    secondsLabel: "Segundos",
    emptyState: "Preencha distancia e tempo para calcular seu pace.",
    resultTitle: "Resultado",
    averagePace: "Pace medio",
    averageSpeed: "Velocidade media",
    racePredictions: "Projecoes de prova",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  it: {
    appTitle: "Find Your Pace",
    appDescription: "Calcola il tuo passo di corsa da distanza e tempo.",
    language: "Lingua",
    theme: "Tema",
    darkMode: "Modalita scura",
    calculatorTitle: "Calcolatore passo",
    distanceLabel: "Distanza (km)",
    hoursLabel: "Ore",
    minutesLabel: "Minuti",
    secondsLabel: "Secondi",
    emptyState: "Inserisci distanza e tempo per calcolare il passo.",
    resultTitle: "Risultato",
    averagePace: "Passo medio",
    averageSpeed: "Velocita media",
    racePredictions: "Proiezioni gara",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  ja: {
    appTitle: "Find Your Pace",
    appDescription: "距離と時間からランニングペースを計算します。",
    language: "言語",
    theme: "テーマ",
    darkMode: "ダークモード",
    calculatorTitle: "ペース計算",
    distanceLabel: "距離 (km)",
    hoursLabel: "時間",
    minutesLabel: "分",
    secondsLabel: "秒",
    emptyState: "距離と時間を入力するとペースを計算できます。",
    resultTitle: "結果",
    averagePace: "平均ペース",
    averageSpeed: "平均速度",
    racePredictions: "レース予測",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  nl: {
    appTitle: "Find Your Pace",
    appDescription: "Bereken je hardlooptempo op basis van afstand en tijd.",
    language: "Taal",
    theme: "Thema",
    darkMode: "Donkere modus",
    calculatorTitle: "Tempo calculator",
    distanceLabel: "Afstand (km)",
    hoursLabel: "Uren",
    minutesLabel: "Minuten",
    secondsLabel: "Seconden",
    emptyState: "Vul afstand en tijd in om je tempo te berekenen.",
    resultTitle: "Resultaat",
    averagePace: "Gemiddeld tempo",
    averageSpeed: "Gemiddelde snelheid",
    racePredictions: "Wedstrijdvoorspellingen",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  pl: {
    appTitle: "Find Your Pace",
    appDescription: "Oblicz tempo biegu na podstawie dystansu i czasu.",
    language: "Jezyk",
    theme: "Motyw",
    darkMode: "Tryb ciemny",
    calculatorTitle: "Kalkulator tempa",
    distanceLabel: "Dystans (km)",
    hoursLabel: "Godziny",
    minutesLabel: "Minuty",
    secondsLabel: "Sekundy",
    emptyState: "Wpisz dystans i czas, aby obliczyc tempo.",
    resultTitle: "Wynik",
    averagePace: "Srednie tempo",
    averageSpeed: "Srednia predkosc",
    racePredictions: "Prognozy biegu",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
  sv: {
    appTitle: "Find Your Pace",
    appDescription: "Berakna ditt loptempo baserat pa distans och tid.",
    language: "Sprak",
    theme: "Tema",
    darkMode: "Morkt lage",
    calculatorTitle: "Tempokalkylator",
    distanceLabel: "Distans (km)",
    hoursLabel: "Timmar",
    minutesLabel: "Minuter",
    secondsLabel: "Sekunder",
    emptyState: "Fyll i distans och tid for att berakna ditt tempo.",
    resultTitle: "Resultat",
    averagePace: "Genomsnittligt tempo",
    averageSpeed: "Genomsnittlig hastighet",
    racePredictions: "Lopprognoser",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
  },
};

const normalizeLanguage = (value: string) => value.toLowerCase();

export const detectLocale = (browserLocale: string): Locale => {
  const normalized = normalizeLanguage(browserLocale);

  if (normalized.startsWith("es")) return "es";
  if (normalized.startsWith("fr")) return "fr";
  if (normalized.startsWith("de")) return "de";
  if (normalized.startsWith("pt")) return "pt-BR";
  if (normalized.startsWith("it")) return "it";
  if (normalized.startsWith("ja")) return "ja";
  if (normalized.startsWith("nl")) return "nl";
  if (normalized.startsWith("pl")) return "pl";
  if (normalized.startsWith("sv")) return "sv";

  return "en";
};
