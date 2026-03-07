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
  menuCalculators: string;
  menuCharts: string;
  menuBlog: string;
  calculatorsLinks: readonly [string, string, string, string];
  chartLinks: readonly [string, string, string, string, string];
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
  tabPace: string;
  tabTime: string;
  tabDistance: string;
  btnCalculate: string;
  labelDistance: string;
  labelTime: string;
  togglePace: string;
  toggleVelocity: string;
  distanceUnitMiles: string;
  distanceUnitKilometers: string;
  distanceUnitMeters: string;
  pacePerMile: string;
  pacePerKm: string;
  velMph: string;
  velKph: string;
  velMpm: string;
  velMps: string;
  placeholderDistance: string;
  placeholderTime: string;
  comboboxEmpty: string;
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
    appTitle: "Find Your Running Pace",
    appDescription:
      "Find your running pace instantly with our free pace calculator. Enter distance and time to calculate pace per km or mile for 5K, 10K, half marathon, and marathon training.",
    menuCalculators: "Calculators",
    menuCharts: "Charts",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Pace Calculator",
      "5K Pace Calculator",
      "Half Marathon Pace Calculator",
      "Marathon Pace Calculator",
    ],
    chartLinks: ["Custom", "5K Pace", "10K Pace", "Half Marathon", "Marathon"],
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
    tabPace: "Pace",
    tabTime: "Time",
    tabDistance: "Distance",
    btnCalculate: "Calculate",
    labelDistance: "Distance",
    labelTime: "Time",
    togglePace: "Pace",
    toggleVelocity: "Velocity",
    distanceUnitMiles: "Miles",
    distanceUnitKilometers: "Kilometers",
    distanceUnitMeters: "Meters",
    pacePerMile: "Per Mile",
    pacePerKm: "Per Kilometer",
    velMph: "Miles Per Hour",
    velKph: "Kilometers Per Hour",
    velMpm: "Meters Per Minute",
    velMps: "Meters Per Second",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "None",
  },
  es: {
    appTitle: "Calcula tu Ritmo de Carrera",
    appDescription:
      "Calcula tu ritmo de carrera al instante con nuestra calculadora gratuita. Introduce distancia y tiempo para obtener el ritmo por km o por milla para 5K, 10K, media maratón o maratón.",
    menuCalculators: "Calculadoras",
    menuCharts: "Tablas",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Calculadora de Ritmo",
      "Ritmo 5K",
      "Ritmo Media Maratón",
      "Ritmo Maratón",
    ],
    chartLinks: [
      "Tabla de Ritmo Personalizada",
      "Tabla de Ritmo 5K",
      "Tabla de Ritmo 10K",
      "Tabla Media Maratón",
      "Tabla Maratón",
    ],
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
    tabPace: "Ritmo",
    tabTime: "Tiempo",
    tabDistance: "Distancia",
    btnCalculate: "Calcular",
    labelDistance: "Distancia",
    labelTime: "Tiempo",
    togglePace: "Ritmo",
    toggleVelocity: "Velocidad",
    distanceUnitMiles: "Millas",
    distanceUnitKilometers: "Kilómetros",
    distanceUnitMeters: "Metros",
    pacePerMile: "Por milla",
    pacePerKm: "Por kilómetro",
    velMph: "Millas por hora",
    velKph: "Kilómetros por hora",
    velMpm: "Metros por minuto",
    velMps: "Metros por segundo",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "Ninguno",
  },
  fr: {
    appTitle: "Calculez Votre Allure de Course",
    appDescription:
      "Calculez votre allure de course instantanément avec notre calculateur gratuit. Entrez la distance et le temps pour obtenir l'allure par km ou par mile pour 5K, 10K, semi-marathon ou marathon.",
    menuCalculators: "Calculateurs",
    menuCharts: "Tableaux",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Calculateur d'Allure",
      "Allure 5K",
      "Allure Semi-Marathon",
      "Allure Marathon",
    ],
    chartLinks: [
      "Tableau d'Allure Personnalisé",
      "Tableau d'Allure 5K",
      "Tableau d'Allure 10K",
      "Tableau Semi-Marathon",
      "Tableau Marathon",
    ],
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
    tabPace: "Allure",
    tabTime: "Temps",
    tabDistance: "Distance",
    btnCalculate: "Calculer",
    labelDistance: "Distance",
    labelTime: "Temps",
    togglePace: "Allure",
    toggleVelocity: "Vitesse",
    distanceUnitMiles: "Miles",
    distanceUnitKilometers: "Kilomètres",
    distanceUnitMeters: "Mètres",
    pacePerMile: "Par mile",
    pacePerKm: "Par kilomètre",
    velMph: "Miles par heure",
    velKph: "Kilomètres par heure",
    velMpm: "Mètres par minute",
    velMps: "Mètres par seconde",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "Aucun",
  },
  de: {
    appTitle: "Lauf Pace Rechner",
    appDescription:
      "Berechne deine Lauf-Pace, Zeit, Distanz und Geschwindigkeit mit unserem kostenlosen Lauf-Pace Rechner. Ideal für 5 km, 10 km, Halbmarathon und Marathon Training.",
    menuCalculators: "Rechner",
    menuCharts: "Pace Tabellen",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Pace Rechner",
      "5 km Pace Rechner",
      "Halbmarathon Pace Rechner",
      "Marathon Pace Rechner",
    ],
    chartLinks: [
      "Eigene Pace Tabelle erstellen",
      "5 km Pace Tabelle",
      "10 km Pace Tabelle",
      "Halbmarathon Pace Tabelle",
      "Marathon Pace Tabelle",
    ],
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
    tabPace: "Pace",
    tabTime: "Zeit",
    tabDistance: "Distanz",
    btnCalculate: "Berechnen",
    labelDistance: "Distanz",
    labelTime: "Zeit",
    togglePace: "Pace",
    toggleVelocity: "Geschwindigkeit",
    distanceUnitMiles: "Meilen",
    distanceUnitKilometers: "Kilometer",
    distanceUnitMeters: "Meter",
    pacePerMile: "Pro Meile",
    pacePerKm: "Pro Kilometer",
    velMph: "Meilen pro Stunde",
    velKph: "Kilometer pro Stunde",
    velMpm: "Meter pro Minute",
    velMps: "Meter pro Sekunde",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "Keine",
  },
  "pt-BR": {
    appTitle: "Calcule Seu Pace de Corrida",
    appDescription:
      "Descubra seu pace de corrida em segundos com nossa calculadora gratuita. Insira distância e tempo para calcular o ritmo por km ou por milha para 5K, 10K, meia maratona ou maratona.",
    menuCalculators: "Calculadoras",
    menuCharts: "Tabelas",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Calculadora de Pace",
      "Pace 5K",
      "Pace Meia Maratona",
      "Pace Maratona",
    ],
    chartLinks: [
      "Tabela de Pace Personalizada",
      "Tabela de Pace 5K",
      "Tabela de Pace 10K",
      "Tabela Meia Maratona",
      "Tabela Maratona",
    ],
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
    tabPace: "Pace",
    tabTime: "Tempo",
    tabDistance: "Distância",
    btnCalculate: "Calcular",
    labelDistance: "Distância",
    labelTime: "Tempo",
    togglePace: "Pace",
    toggleVelocity: "Velocidade",
    distanceUnitMiles: "Milhas",
    distanceUnitKilometers: "Quilômetros",
    distanceUnitMeters: "Metros",
    pacePerMile: "Por milha",
    pacePerKm: "Por quilômetro",
    velMph: "Milhas por hora",
    velKph: "Quilômetros por hora",
    velMpm: "Metros por minuto",
    velMps: "Metros por segundo",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "Nenhum",
  },
  it: {
    appTitle: "Calcola il Tuo Ritmo di Corsa",
    appDescription:
      "Calcola il tuo ritmo di corsa in pochi secondi con il nostro calcolatore gratuito. Inserisci distanza e tempo per ottenere il passo per km o miglio per 5K, 10K, mezza maratona o maratona.",
    menuCalculators: "Calcolatori",
    menuCharts: "Tabelle",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Calcolatore di Ritmo",
      "Ritmo 5K",
      "Ritmo Mezza Maratona",
      "Ritmo Maratona",
    ],
    chartLinks: [
      "Tabella Ritmo Personalizzata",
      "Tabella Ritmo 5K",
      "Tabella Ritmo 10K",
      "Tabella Mezza Maratona",
      "Tabella Maratona",
    ],
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
    tabPace: "Passo",
    tabTime: "Tempo",
    tabDistance: "Distanza",
    btnCalculate: "Calcola",
    labelDistance: "Distanza",
    labelTime: "Tempo",
    togglePace: "Passo",
    toggleVelocity: "Velocità",
    distanceUnitMiles: "Miglia",
    distanceUnitKilometers: "Chilometri",
    distanceUnitMeters: "Metri",
    pacePerMile: "Per miglio",
    pacePerKm: "Per chilometro",
    velMph: "Miglia orarie",
    velKph: "Chilometri orari",
    velMpm: "Metri al minuto",
    velMps: "Metri al secondo",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "Nessuno",
  },
  ja: {
    appTitle: "ランニングペース計算機",
    appDescription:
      "無料のランニングペース計算機で、距離と時間からペースをすぐに計算できます。5K、10K、ハーフマラソン、フルマラソンのトレーニングに最適です。",
    menuCalculators: "計算ツール",
    menuCharts: "ペース表",
    menuBlog: "ブログ",
    calculatorsLinks: [
      "ペース計算機",
      "5Kペース",
      "ハーフマラソンペース",
      "マラソンペース",
    ],
    chartLinks: [
      "カスタムペース表",
      "5Kペース表",
      "10Kペース表",
      "ハーフマラソンペース表",
      "マラソンペース表",
    ],
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
    tabPace: "ペース",
    tabTime: "時間",
    tabDistance: "距離",
    btnCalculate: "計算",
    labelDistance: "距離",
    labelTime: "時間",
    togglePace: "ペース",
    toggleVelocity: "速度",
    distanceUnitMiles: "マイル",
    distanceUnitKilometers: "キロメートル",
    distanceUnitMeters: "メートル",
    pacePerMile: "マイルあたり",
    pacePerKm: "キロあたり",
    velMph: "マイル/時",
    velKph: "キロ/時",
    velMpm: "メートル/分",
    velMps: "メートル/秒",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "なし",
  },
  nl: {
    appTitle: "Find Your Pace",
    appDescription: "Bereken je hardlooptempo op basis van afstand en tijd.",
    menuCalculators: "Calculators",
    menuCharts: "Charts",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Pace Calculator",
      "5K Pace Calculator",
      "Half Marathon Pace Calculator",
      "Marathon Pace Calculator",
    ],
    chartLinks: ["Custom", "5K Pace", "10K Pace", "Half Marathon", "Marathon"],
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
    tabPace: "Tempo",
    tabTime: "Tijd",
    tabDistance: "Afstand",
    btnCalculate: "Berekenen",
    labelDistance: "Afstand",
    labelTime: "Tijd",
    togglePace: "Tempo",
    toggleVelocity: "Snelheid",
    distanceUnitMiles: "Mijlen",
    distanceUnitKilometers: "Kilometers",
    distanceUnitMeters: "Meters",
    pacePerMile: "Per mijl",
    pacePerKm: "Per kilometer",
    velMph: "Mijlen per uur",
    velKph: "Kilometers per uur",
    velMpm: "Meters per minuut",
    velMps: "Meters per seconde",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "Geen",
  },
  pl: {
    appTitle: "Find Your Pace",
    appDescription: "Oblicz tempo biegu na podstawie dystansu i czasu.",
    menuCalculators: "Calculators",
    menuCharts: "Charts",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Pace Calculator",
      "5K Pace Calculator",
      "Half Marathon Pace Calculator",
      "Marathon Pace Calculator",
    ],
    chartLinks: ["Custom", "5K Pace", "10K Pace", "Half Marathon", "Marathon"],
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
    tabPace: "Tempo",
    tabTime: "Czas",
    tabDistance: "Dystans",
    btnCalculate: "Oblicz",
    labelDistance: "Dystans",
    labelTime: "Czas",
    togglePace: "Tempo",
    toggleVelocity: "Prędkość",
    distanceUnitMiles: "Mile",
    distanceUnitKilometers: "Kilometry",
    distanceUnitMeters: "Metry",
    pacePerMile: "Na milę",
    pacePerKm: "Na kilometr",
    velMph: "Mil na godzinę",
    velKph: "Km na godzinę",
    velMpm: "Metrów na minutę",
    velMps: "Metrów na sekundę",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "Brak",
  },
  sv: {
    appTitle: "Find Your Pace",
    appDescription: "Berakna ditt loptempo baserat pa distans och tid.",
    menuCalculators: "Calculators",
    menuCharts: "Charts",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Pace Calculator",
      "5K Pace Calculator",
      "Half Marathon Pace Calculator",
      "Marathon Pace Calculator",
    ],
    chartLinks: ["Custom", "5K Pace", "10K Pace", "Half Marathon", "Marathon"],
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
    tabPace: "Tempo",
    tabTime: "Tid",
    tabDistance: "Distans",
    btnCalculate: "Beräkna",
    labelDistance: "Distans",
    labelTime: "Tid",
    togglePace: "Tempo",
    toggleVelocity: "Hastighet",
    distanceUnitMiles: "Miles",
    distanceUnitKilometers: "Kilometer",
    distanceUnitMeters: "Meter",
    pacePerMile: "Per mile",
    pacePerKm: "Per kilometer",
    velMph: "Miles per timme",
    velKph: "Kilometer per timme",
    velMpm: "Meter per minut",
    velMps: "Meter per sekund",
    placeholderDistance: "0",
    placeholderTime: "00",
    comboboxEmpty: "Ingen",
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

/** Segmentos de URL por idioma: /en/, /es/, /fr/, /it/, /pt/, /ja/, /de/ */
export const pathLocales = ["en", "es", "fr", "it", "pt", "ja", "de"] as const;
export type PathLocale = (typeof pathLocales)[number];

const pathLocaleToLocaleMap: Record<PathLocale, Locale> = {
  en: "en",
  es: "es",
  fr: "fr",
  it: "it",
  pt: "pt-BR",
  ja: "ja",
  de: "de",
};

export function pathLocaleToLocale(path: string): Locale {
  if (pathLocales.includes(path as PathLocale)) {
    return pathLocaleToLocaleMap[path as PathLocale];
  }
  return defaultLocale;
}

export function localeToPathLocale(locale: Locale): PathLocale {
  const entry = Object.entries(pathLocaleToLocaleMap).find(
    ([, loc]) => loc === locale
  );
  return (entry?.[0] ?? "en") as PathLocale;
}

/** Locales que possuem segmento de URL (para exibir no seletor de idioma). */
export const pathLocalesAsLocales: Locale[] = Object.values(pathLocaleToLocaleMap);

/** Base URL do site para SEO (canonical, hreflang, JSON-LD). Sem barra final. */
export const siteBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://knowyourpace.app";

/** Título da página por path locale (SEO). */
export const pageTitleByPathLocale: Record<PathLocale, string> = {
  en: "Running Pace Calculator | KnowYourPace",
  es: "Calculadora de Ritmo de Carrera | KnowYourPace",
  fr: "Calculateur d'Allure Running | KnowYourPace",
  it: "Calcolatore Ritmo Corsa | KnowYourPace",
  pt: "Calculadora de Pace de Corrida | KnowYourPace",
  ja: "ランニングペース計算機 | KnowYourPace",
  de: "Lauf Pace Rechner | KnowYourPace",
};

export type FaqItem = { question: string; answer: string };

export const faqByLocale: Record<Locale, { title: string; items: FaqItem[] }> = {
  en: {
    title: "Running Pace Calculator FAQ",
    items: [
      {
        question: "What is running pace?",
        answer:
          "Running pace is the time it takes to run a specific distance, usually expressed as minutes per kilometer or minutes per mile.",
      },
      {
        question: "How do I calculate my running pace?",
        answer:
          "To calculate your running pace, divide the total time of your run by the distance. This running pace calculator does it instantly for you.",
      },
      {
        question: "What is a good running pace?",
        answer:
          "A good running pace depends on your fitness level and experience. Beginners often run between 7:00 and 9:00 minutes per kilometer.",
      },
      {
        question: "How do I convert pace to speed?",
        answer:
          "You can convert pace to speed by calculating how many kilometers or miles you run per hour. Our calculator shows both pace and speed.",
      },
    ],
  },
  es: {
    title: "FAQ Calculadora de Ritmo de Carrera",
    items: [
      {
        question: "¿Qué es el ritmo de carrera?",
        answer:
          "El ritmo de carrera es el tiempo que se tarda en recorrer una distancia determinada, normalmente expresado en minutos por kilómetro o minutos por milla.",
      },
      {
        question: "¿Cómo calculo mi ritmo de carrera?",
        answer:
          "Para calcular tu ritmo de carrera, divide el tiempo total de tu carrera por la distancia. Esta calculadora de ritmo lo hace al instante.",
      },
      {
        question: "¿Cuál es un buen ritmo de carrera?",
        answer:
          "Un buen ritmo depende de tu nivel de forma física y experiencia. Los principiantes suelen correr entre 7:00 y 9:00 minutos por kilómetro.",
      },
      {
        question: "¿Cómo convierto el ritmo en velocidad?",
        answer:
          "Puedes convertir el ritmo en velocidad calculando cuántos kilómetros o millas corres por hora. Nuestra calculadora muestra ritmo y velocidad.",
      },
    ],
  },
  fr: {
    title: "FAQ Calculateur d'Allure Running",
    items: [
      {
        question: "Qu'est-ce que l'allure de course ?",
        answer:
          "L'allure de course est le temps nécessaire pour parcourir une distance donnée, généralement exprimée en minutes par kilomètre ou par mile.",
      },
      {
        question: "Comment calculer mon allure de course ?",
        answer:
          "Pour calculer votre allure, divisez le temps total de course par la distance. Ce calculateur d'allure le fait instantanément pour vous.",
      },
      {
        question: "Quelle est une bonne allure de course ?",
        answer:
          "Une bonne allure dépend de votre niveau et de votre expérience. Les débutants courent souvent entre 7:00 et 9:00 minutes au kilomètre.",
      },
      {
        question: "Comment convertir l'allure en vitesse ?",
        answer:
          "Vous pouvez convertir l'allure en vitesse en calculant combien de kilomètres ou de miles vous parcourez par heure. Notre calculateur affiche allure et vitesse.",
      },
    ],
  },
  it: {
    title: "FAQ Calcolatore Ritmo Corsa",
    items: [
      {
        question: "Cos'è il ritmo di corsa?",
        answer:
          "Il ritmo di corsa è il tempo necessario per percorrere una certa distanza, di solito espresso in minuti per chilometro o per miglio.",
      },
      {
        question: "Come calcolo il mio ritmo di corsa?",
        answer:
          "Per calcolare il ritmo, dividi il tempo totale della corsa per la distanza. Questo calcolatore di ritmo lo fa istantaneamente per te.",
      },
      {
        question: "Qual è un buon ritmo di corsa?",
        answer:
          "Un buon ritmo dipende dal livello di forma e dall'esperienza. I principianti spesso corrono tra 7:00 e 9:00 minuti per chilometro.",
      },
      {
        question: "Come converto il ritmo in velocità?",
        answer:
          "Puoi convertire il ritmo in velocità calcolando quanti chilometri o miglia percorri all'ora. Il nostro calcolatore mostra ritmo e velocità.",
      },
    ],
  },
  "pt-BR": {
    title: "FAQ Calculadora de Pace de Corrida",
    items: [
      {
        question: "O que é pace de corrida?",
        answer:
          "Pace de corrida é o tempo que você leva para percorrer uma distância, geralmente em minutos por quilômetro ou minutos por milha.",
      },
      {
        question: "Como calcular meu pace de corrida?",
        answer:
          "Para calcular seu pace, divida o tempo total da corrida pela distância. Esta calculadora de pace faz isso na hora para você.",
      },
      {
        question: "Qual é um bom pace de corrida?",
        answer:
          "Um bom pace depende do seu condicionamento e experiência. Iniciantes costumam correr entre 7:00 e 9:00 minutos por quilômetro.",
      },
      {
        question: "Como converter pace em velocidade?",
        answer:
          "Você pode converter pace em velocidade calculando quantos quilômetros ou milhas você corre por hora. Nossa calculadora mostra pace e velocidade.",
      },
    ],
  },
  ja: {
    title: "ランニングペース計算機 よくある質問",
    items: [
      {
        question: "ランニングペースとは？",
        answer:
          "ランニングペースは、特定の距離を走るのにかかる時間で、通常は1キロまたは1マイルあたりの分数で表されます。",
      },
      {
        question: "ランニングペースはどのように計算しますか？",
        answer:
          "ランニングペースを計算するには、走行の合計時間を距離で割ります。このペース計算機で即座に計算できます。",
      },
      {
        question: "良いランニングペースとは？",
        answer:
          "良いペースは体力レベルや経験によって異なります。初心者は1キロあたり7:00〜9:00分で走ることが多いです。",
      },
      {
        question: "ペースを速度に変換するには？",
        answer:
          "1時間で何キロまたは何マイル走るかを計算すると、ペースを速度に変換できます。当計算機ではペースと速度の両方を表示します。",
      },
    ],
  },
  de: {
    title: "Lauf Pace Rechner FAQ",
    items: [
      {
        question: "Was ist Lauf-Pace?",
        answer:
          "Lauf-Pace ist die Zeit, die du für eine bestimmte Distanz brauchst, meist in Minuten pro Kilometer oder Minuten pro Meile angegeben.",
      },
      {
        question: "Wie berechne ich meinen Lauf-Pace?",
        answer:
          "Teile die Gesamtzeit deines Laufs durch die Distanz. Dieser Lauf-Pace-Rechner erledigt das sofort für dich.",
      },
      {
        question: "Was ist ein guter Lauf-Pace?",
        answer:
          "Ein guter Pace hängt von deinem Fitnesslevel und Erfahrung ab. Einsteiger laufen oft zwischen 7:00 und 9:00 Minuten pro Kilometer.",
      },
      {
        question: "Wie rechne ich Pace in Geschwindigkeit um?",
        answer:
          "Du kannst Pace in Geschwindigkeit umrechnen, indem du berechnest, wie viele Kilometer oder Meilen du pro Stunde läufst. Unser Rechner zeigt beides an.",
      },
    ],
  },
  nl: {
    title: "Running Pace Calculator FAQ",
    items: [
      {
        question: "What is running pace?",
        answer:
          "Running pace is the time it takes to run a specific distance, usually expressed as minutes per kilometer or minutes per mile.",
      },
      {
        question: "How do I calculate my running pace?",
        answer:
          "To calculate your running pace, divide the total time of your run by the distance. This running pace calculator does it instantly for you.",
      },
      {
        question: "What is a good running pace?",
        answer:
          "A good running pace depends on your fitness level and experience. Beginners often run between 7:00 and 9:00 minutes per kilometer.",
      },
      {
        question: "How do I convert pace to speed?",
        answer:
          "You can convert pace to speed by calculating how many kilometers or miles you run per hour. Our calculator shows both pace and speed.",
      },
    ],
  },
  pl: {
    title: "Running Pace Calculator FAQ",
    items: [
      {
        question: "What is running pace?",
        answer:
          "Running pace is the time it takes to run a specific distance, usually expressed as minutes per kilometer or minutes per mile.",
      },
      {
        question: "How do I calculate my running pace?",
        answer:
          "To calculate your running pace, divide the total time of your run by the distance. This running pace calculator does it instantly for you.",
      },
      {
        question: "What is a good running pace?",
        answer:
          "A good running pace depends on your fitness level and experience. Beginners often run between 7:00 and 9:00 minutes per kilometer.",
      },
      {
        question: "How do I convert pace to speed?",
        answer:
          "You can convert pace to speed by calculating how many kilometers or miles you run per hour. Our calculator shows both pace and speed.",
      },
    ],
  },
  sv: {
    title: "Running Pace Calculator FAQ",
    items: [
      {
        question: "What is running pace?",
        answer:
          "Running pace is the time it takes to run a specific distance, usually expressed as minutes per kilometer or minutes per mile.",
      },
      {
        question: "How do I calculate my running pace?",
        answer:
          "To calculate your running pace, divide the total time of your run by the distance. This running pace calculator does it instantly for you.",
      },
      {
        question: "What is a good running pace?",
        answer:
          "A good running pace depends on your fitness level and experience. Beginners often run between 7:00 and 9:00 minutes per kilometer.",
      },
      {
        question: "How do I convert pace to speed?",
        answer:
          "You can convert pace to speed by calculating how many kilometers or miles you run per hour. Our calculator shows both pace and speed.",
      },
    ],
  },
};
