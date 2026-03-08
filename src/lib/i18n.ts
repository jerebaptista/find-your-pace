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
  appTitleTime: string;
  appDescriptionTime: string;
  appTitleDistance: string;
  appDescriptionDistance: string;
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
  resultTitlePace: string;
  resultTitleTime: string;
  resultTitleDistance: string;
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
  btnCalculating: string;
  btnNewCalculation: string;
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
  adSupportRun: string;
  adEnableAds: string;
  distanceBadges: Record<
    "miles" | "kilometers" | "meters",
    Array<{ label: string; value: string }>
  >;
  paceTimeTableTitle: string;
  paceTimeTableDescription: string;
  paceTimeTableColHalf: string;
  paceTimeTableColMarathon: string;
  paceTimeTableDistancesNote: string;
  blogWrittenBy: string;
  validationMissingTitle: string;
  validationMissingDistance: string;
  validationMissingTime: string;
  validationMissingPace: string;
  validationMissingVelocity: string;
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
    appTitleTime: "Find Your Running Time",
    appDescriptionTime:
      "Estimate your running time instantly with our free calculator. Enter distance and pace to calculate your finish time for 5K, 10K, half marathon, and marathon races.",
    appTitleDistance: "Find Your Running Distance",
    appDescriptionDistance:
      "Calculate your running distance instantly with our free calculator. Enter time and pace to estimate how far you can run in kilometers or miles.",
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
    resultTitlePace: "Your pace is",
    resultTitleTime: "Your time is",
    resultTitleDistance: "Your distance is",
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
    btnCalculating: "Calculating",
    btnNewCalculation: "New calculation",
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
    adSupportRun: "Support our run",
    adEnableAds: "Enable ads and keep this tool free for everyone.",
    distanceBadges: {
      kilometers: [
        { label: "1km", value: "1" },
        { label: "5km", value: "5" },
        { label: "10km", value: "10" },
        { label: "Half Marathon", value: "21.0975" },
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
        { label: "Half Marathon", value: "13.1" },
        { label: "Marathon", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Pace to Finish Time Table",
    paceTimeTableDescription:
      "Find your finish time with our pace-by-distance table. See how long you complete a 5K, 10K, half marathon or marathon at different paces per km.",
    paceTimeTableColHalf: "Half",
    paceTimeTableColMarathon: "Marathon",
    paceTimeTableDistancesNote:
      "Half: 21.0975 km (13.1 mi). Marathon: 42.195 km (26.2 mi).",
    blogWrittenBy: "Written by",
    validationMissingTitle: "Missing required fields",
    validationMissingDistance: "Distance",
    validationMissingTime: "Time",
    validationMissingPace: "Pace",
    validationMissingVelocity: "Velocity",
  },
  es: {
    appTitle: "Encuentra tu Ritmo de Carrera",
    appDescription:
      "Calcula tu ritmo de carrera al instante con nuestra calculadora gratuita. Introduce distancia y tiempo para obtener el ritmo por km o por milla para 5K, 10K, media maratón o maratón.",
    appTitleTime: "Encuentra Tu Tiempo de Carrera",
    appDescriptionTime:
      "Estima tu tiempo de carrera al instante con nuestra calculadora gratuita. Introduce distancia y ritmo para calcular tu tiempo de llegada en 5K, 10K, media maratón y maratón.",
    appTitleDistance: "Encuentra Tu Distancia de Carrera",
    appDescriptionDistance:
      "Calcula tu distancia de carrera al instante con nuestra calculadora gratuita. Introduce tiempo y ritmo para estimar cuánto puedes correr en kilómetros o millas.",
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
    resultTitlePace: "Tu ritmo es",
    resultTitleTime: "Tu tiempo es",
    resultTitleDistance: "Tu distancia es",
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
    btnCalculating: "Calculando",
    btnNewCalculation: "Nuevo cálculo",
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
    adSupportRun: "Apoya nuestra carrera",
    adEnableAds: "Activa los anuncios y mantén esta herramienta gratis para todos.",
    distanceBadges: {
      kilometers: [
        { label: "1 km", value: "1" },
        { label: "5 km", value: "5" },
        { label: "10 km", value: "10" },
        { label: "Media maratón", value: "21.0975" },
        { label: "Maratón", value: "42.195" },
      ],
      meters: [
        { label: "100 m", value: "100" },
        { label: "200 m", value: "200" },
        { label: "400 m", value: "400" },
        { label: "500 m", value: "500" },
        { label: "600 m", value: "600" },
        { label: "800 m", value: "800" },
        { label: "1 km", value: "1000" },
      ],
      miles: [
        { label: "1 milla", value: "1" },
        { label: "3 millas", value: "3" },
        { label: "5 millas", value: "5" },
        { label: "10 millas", value: "10" },
        { label: "Media maratón", value: "13.1" },
        { label: "Maratón", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Tabla de Tiempo por Ritmo",
    paceTimeTableDescription:
      "Descubre tu tiempo final de carrera con nuestra tabla de ritmo por distancia. Consulta en cuánto terminas una prueba de 5 km, 10 km, media maratón o maratón a distintos ritmos por km.",
    paceTimeTableColHalf: "Media",
    paceTimeTableColMarathon: "Maratón",
    paceTimeTableDistancesNote:
      "Media: 21,0975 km (13,1 mi). Maratón: 42,195 km (26,2 mi).",
    blogWrittenBy: "Escrito por",
    validationMissingTitle: "Campos requeridos",
    validationMissingDistance: "Distancia",
    validationMissingTime: "Tiempo",
    validationMissingPace: "Ritmo",
    validationMissingVelocity: "Velocidad",
  },
  fr: {
    appTitle: "Trouvez Votre Allure de Course",
    appDescription:
      "Calculez votre allure de course instantanément avec notre calculateur gratuit. Entrez la distance et le temps pour obtenir l'allure par km ou par mile pour 5K, 10K, semi-marathon ou marathon.",
    appTitleTime: "Trouvez Votre Temps de Course",
    appDescriptionTime:
      "Estimez votre temps de course instantanément avec notre calculateur gratuit. Entrez la distance et l'allure pour calculer votre temps d'arrivée sur 5K, 10K, semi-marathon et marathon.",
    appTitleDistance: "Trouvez Votre Distance de Course",
    appDescriptionDistance:
      "Calculez votre distance de course instantanément avec notre calculateur gratuit. Entrez le temps et l'allure pour estimer la distance que vous pouvez parcourir en km ou en miles.",
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
    resultTitlePace: "Votre allure est",
    resultTitleTime: "Votre temps est",
    resultTitleDistance: "Votre distance est",
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
    btnCalculating: "Calcul en cours",
    btnNewCalculation: "Nouveau calcul",
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
    adSupportRun: "Soutenez notre course",
    adEnableAds: "Activez les annonces et gardez cet outil gratuit pour tous.",
    distanceBadges: {
      kilometers: [
        { label: "1 km", value: "1" },
        { label: "5 km", value: "5" },
        { label: "10 km", value: "10" },
        { label: "Semi-marathon", value: "21.0975" },
        { label: "Marathon", value: "42.195" },
      ],
      meters: [
        { label: "100 m", value: "100" },
        { label: "200 m", value: "200" },
        { label: "400 m", value: "400" },
        { label: "500 m", value: "500" },
        { label: "600 m", value: "600" },
        { label: "800 m", value: "800" },
        { label: "1 km", value: "1000" },
      ],
      miles: [
        { label: "1 mile", value: "1" },
        { label: "3 miles", value: "3" },
        { label: "5 miles", value: "5" },
        { label: "10 miles", value: "10" },
        { label: "Semi-marathon", value: "13.1" },
        { label: "Marathon", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Tableau Temps par Allure",
    paceTimeTableDescription:
      "Découvrez votre temps final avec notre tableau allure par distance. Voyez en combien de temps vous terminez un 5 km, 10 km, semi-marathon ou marathon à différentes allures au km.",
    paceTimeTableColHalf: "Demi",
    paceTimeTableColMarathon: "Marathon",
    paceTimeTableDistancesNote:
      "Demi: 21,0975 km (13,1 mi). Marathon: 42,195 km (26,2 mi).",
    blogWrittenBy: "Écrit par",
    validationMissingTitle: "Champs requis manquants",
    validationMissingDistance: "Distance",
    validationMissingTime: "Temps",
    validationMissingPace: "Allure",
    validationMissingVelocity: "Vitesse",
  },
  de: {
    appTitle: "Finde Deinen Lauf-Pace",
    appDescription:
      "Berechne deine Lauf-Pace, Zeit, Distanz und Geschwindigkeit mit unserem kostenlosen Lauf-Pace Rechner. Ideal für 5 km, 10 km, Halbmarathon und Marathon Training.",
    appTitleTime: "Finde Deine Laufzeit",
    appDescriptionTime:
      "Schätze deine Laufzeit sofort mit unserem kostenlosen Rechner. Gib Strecke und Tempo ein, um deine Zielzeit für 5K, 10K, Halbmarathon und Marathon zu berechnen.",
    appTitleDistance: "Finde Deine Laufdistanz",
    appDescriptionDistance:
      "Berechne deine Laufdistanz sofort mit unserem kostenlosen Rechner. Gib Zeit und Tempo ein, um zu schätzen, wie weit du in Kilometern oder Meilen laufen kannst.",
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
    resultTitlePace: "Dein Pace ist",
    resultTitleTime: "Deine Zeit ist",
    resultTitleDistance: "Deine Distanz ist",
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
    btnCalculating: "Berechne",
    btnNewCalculation: "Neue Berechnung",
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
    adSupportRun: "Unterstütze unseren Lauf",
    adEnableAds: "Aktiviere Anzeigen und halte dieses Tool für alle kostenlos.",
    distanceBadges: {
      kilometers: [
        { label: "1 km", value: "1" },
        { label: "5 km", value: "5" },
        { label: "10 km", value: "10" },
        { label: "Halbmarathon", value: "21.0975" },
        { label: "Marathon", value: "42.195" },
      ],
      meters: [
        { label: "100 m", value: "100" },
        { label: "200 m", value: "200" },
        { label: "400 m", value: "400" },
        { label: "500 m", value: "500" },
        { label: "600 m", value: "600" },
        { label: "800 m", value: "800" },
        { label: "1 km", value: "1000" },
      ],
      miles: [
        { label: "1 Meile", value: "1" },
        { label: "3 Meilen", value: "3" },
        { label: "5 Meilen", value: "5" },
        { label: "10 Meilen", value: "10" },
        { label: "Halbmarathon", value: "13.1" },
        { label: "Marathon", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Tabelle Zeit nach Pace",
    paceTimeTableDescription:
      "Finde deine Zielzeit mit unserer Pace-zu-Strecke-Tabelle. Sieh, in welcher Zeit du 5 km, 10 km, Halbmarathon oder Marathon bei verschiedenen Paces pro km schaffst.",
    paceTimeTableColHalf: "Halb",
    paceTimeTableColMarathon: "Marathon",
    paceTimeTableDistancesNote:
      "Halb: 21,0975 km (13,1 mi). Marathon: 42,195 km (26,2 mi).",
    blogWrittenBy: "Geschrieben von",
    validationMissingTitle: "Pflichtfelder fehlen",
    validationMissingDistance: "Distanz",
    validationMissingTime: "Zeit",
    validationMissingPace: "Pace",
    validationMissingVelocity: "Geschwindigkeit",
  },
  "pt-BR": {
    appTitle: "Encontre Seu Pace de Corrida",
    appDescription:
      "Descubra seu pace de corrida em segundos com nossa calculadora gratuita. Insira distância e tempo para calcular o ritmo por km ou por milha para 5K, 10K, meia maratona ou maratona.",
    appTitleTime: "Encontre Seu Tempo de Corrida",
    appDescriptionTime:
      "Estime seu tempo de corrida na hora com nossa calculadora gratuita. Informe distância e pace para calcular seu tempo de chegada em 5K, 10K, meia-maratona e maratona.",
    appTitleDistance: "Encontre Sua Distância de Corrida",
    appDescriptionDistance:
      "Calcule sua distância de corrida na hora com nossa calculadora gratuita. Informe tempo e pace para estimar quantos km ou milhas você pode percorrer.",
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
    resultTitlePace: "Seu pace é",
    resultTitleTime: "Seu tempo é",
    resultTitleDistance: "Sua distância é",
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
    btnCalculating: "Calculando",
    btnNewCalculation: "Novo cálculo",
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
    adSupportRun: "Apoie nossa correria",
    adEnableAds: "Ative os anúncios e mantenha esta ferramenta gratuita para todos.",
    distanceBadges: {
      kilometers: [
        { label: "1 km", value: "1" },
        { label: "5 km", value: "5" },
        { label: "10 km", value: "10" },
        { label: "Meia-maratona", value: "21.0975" },
        { label: "Maratona", value: "42.195" },
      ],
      meters: [
        { label: "100 m", value: "100" },
        { label: "200 m", value: "200" },
        { label: "400 m", value: "400" },
        { label: "500 m", value: "500" },
        { label: "600 m", value: "600" },
        { label: "800 m", value: "800" },
        { label: "1 km", value: "1000" },
      ],
      miles: [
        { label: "1 milha", value: "1" },
        { label: "3 milhas", value: "3" },
        { label: "5 milhas", value: "5" },
        { label: "10 milhas", value: "10" },
        { label: "Meia-maratona", value: "13.1" },
        { label: "Maratona", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Tabela de Tempo por Pace",
    paceTimeTableDescription:
      "Descubra seu tempo final de corrida com nossa tabela de pace por distância. Veja quanto você termina uma prova de 5 km, 10 km, meia maratona ou maratona em diferentes ritmos por km.",
    paceTimeTableColHalf: "Meia",
    paceTimeTableColMarathon: "Maratona",
    paceTimeTableDistancesNote:
      "Meia: 21,0975 km (13,1 mi). Maratona: 42,195 km (26,2 mi).",
    blogWrittenBy: "Escrito por",
    validationMissingTitle: "Preencha os campos obrigatórios",
    validationMissingDistance: "Distância",
    validationMissingTime: "Tempo",
    validationMissingPace: "Ritmo",
    validationMissingVelocity: "Velocidade",
  },
  it: {
    appTitle: "Trova il Tuo Ritmo di Corsa",
    appDescription:
      "Calcola il tuo ritmo di corsa in pochi secondi con il nostro calcolatore gratuito. Inserisci distanza e tempo per ottenere il passo per km o miglio per 5K, 10K, mezza maratona o maratona.",
    appTitleTime: "Trova Il Tuo Tempo di Corsa",
    appDescriptionTime:
      "Stima il tuo tempo di corsa all'istante con il nostro calcolatore gratuito. Inserisci distanza e ritmo per calcolare il tempo di arrivo su 5K, 10K, mezza maratona e maratona.",
    appTitleDistance: "Trova La Tua Distanza di Corsa",
    appDescriptionDistance:
      "Calcola la tua distanza di corsa all'istante con il nostro calcolatore gratuito. Inserisci tempo e ritmo per stimare quanti km o miglia puoi percorrere.",
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
    resultTitlePace: "Il tuo passo è",
    resultTitleTime: "Il tuo tempo è",
    resultTitleDistance: "La tua distanza è",
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
    btnCalculating: "Calcolo in corso",
    btnNewCalculation: "Nuovo calcolo",
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
    adSupportRun: "Sostieni la nostra corsa",
    adEnableAds: "Abilita gli annunci e mantieni questo strumento gratuito per tutti.",
    distanceBadges: {
      kilometers: [
        { label: "1 km", value: "1" },
        { label: "5 km", value: "5" },
        { label: "10 km", value: "10" },
        { label: "Mezza maratona", value: "21.0975" },
        { label: "Maratona", value: "42.195" },
      ],
      meters: [
        { label: "100 m", value: "100" },
        { label: "200 m", value: "200" },
        { label: "400 m", value: "400" },
        { label: "500 m", value: "500" },
        { label: "600 m", value: "600" },
        { label: "800 m", value: "800" },
        { label: "1 km", value: "1000" },
      ],
      miles: [
        { label: "1 miglio", value: "1" },
        { label: "3 miglia", value: "3" },
        { label: "5 miglia", value: "5" },
        { label: "10 miglia", value: "10" },
        { label: "Mezza maratona", value: "13.1" },
        { label: "Maratona", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Tabella Tempo per Ritmo",
    paceTimeTableDescription:
      "Scopri il tuo tempo di arrivo con la nostra tabella ritmo per distanza. Vedi in quanto completi 5 km, 10 km, mezza maratona o maratona a diversi ritmi al km.",
    paceTimeTableColHalf: "Mezza",
    paceTimeTableColMarathon: "Maratona",
    paceTimeTableDistancesNote:
      "Mezza: 21,0975 km (13,1 mi). Maratona: 42,195 km (26,2 mi).",
    blogWrittenBy: "Scritto da",
    validationMissingTitle: "Campi obbligatori mancanti",
    validationMissingDistance: "Distanza",
    validationMissingTime: "Tempo",
    validationMissingPace: "Passo",
    validationMissingVelocity: "Velocità",
  },
  ja: {
    appTitle: "あなたのランニングペースを見つける",
    appDescription:
      "無料のランニングペース計算機で、距離と時間からペースをすぐに計算できます。5K、10K、ハーフマラソン、フルマラソンのトレーニングに最適です。",
    appTitleTime: "ランニングタイムを計算",
    appDescriptionTime:
      "無料計算機でランニングタイムをすぐに推定。距離とペースを入力して、5K・10K・ハーフマラソン・マラソンのゴールタイムを計算します。",
    appTitleDistance: "ランニング距離を計算",
    appDescriptionDistance:
      "無料計算機で走行距離をすぐに計算。時間とペースを入力して、何kmまたは何マイル走れるかを推定します。",
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
    resultTitlePace: "あなたのペースは",
    resultTitleTime: "あなたのタイムは",
    resultTitleDistance: "あなたの距離は",
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
    btnCalculating: "計算中",
    btnNewCalculation: "新しい計算",
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
    adSupportRun: "私たちのランをサポート",
    adEnableAds: "広告を有効にして、このツールを誰でも無料で使えるようにしましょう。",
    distanceBadges: {
      kilometers: [
        { label: "1km", value: "1" },
        { label: "5km", value: "5" },
        { label: "10km", value: "10" },
        { label: "ハーフマラソン", value: "21.0975" },
        { label: "マラソン", value: "42.195" },
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
        { label: "1マイル", value: "1" },
        { label: "3マイル", value: "3" },
        { label: "5マイル", value: "5" },
        { label: "10マイル", value: "10" },
        { label: "ハーフマラソン", value: "13.1" },
        { label: "マラソン", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "ペース別ゴールタイム表",
    paceTimeTableDescription:
      "距離別ペース表でゴールタイムを確認。5km、10km、ハーフマラソン、マラソンをそれぞれのペース（min/km）で走った場合のタイムをご覧ください。",
    paceTimeTableColHalf: "ハーフ",
    paceTimeTableColMarathon: "マラソン",
    paceTimeTableDistancesNote:
      "ハーフ: 21.0975 km (13.1 mi). マラソン: 42.195 km (26.2 mi).",
    blogWrittenBy: "執筆：",
    validationMissingTitle: "必須項目を入力してください",
    validationMissingDistance: "距離",
    validationMissingTime: "タイム",
    validationMissingPace: "ペース",
    validationMissingVelocity: "速度",
  },
  nl: {
    appTitle: "Vind Je Hardlooptempo",
    appDescription:
      "Bereken je hardlooptempo direct met onze gratis tempocalculator. Voer afstand en tijd in om je tempo per km of per mijl te berekenen voor 5K, 10K, halve marathon en marathontraining.",
    appTitleTime: "Vind Je Hardlooptijd",
    appDescriptionTime:
      "Schat je hardlooptijd direct met onze gratis rekenmachine. Voer afstand en tempo in om je finishtijd voor 5K, 10K, halve marathon en marathon te berekenen.",
    appTitleDistance: "Vind Je Hardloopafstand",
    appDescriptionDistance:
      "Bereken je hardloopafstand direct met onze gratis rekenmachine. Voer tijd en tempo in om te schatten hoe ver je in kilometers of mijlen kunt hardlopen.",
    menuCalculators: "Rekenmachines",
    menuCharts: "Grafieken",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Tempo calculator",
      "5K Tempo calculator",
      "Halve marathon tempo",
      "Marathon tempo calculator",
    ],
    chartLinks: ["Aangepast", "5K Tempo", "10K Tempo", "Halve marathon", "Marathon"],
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
    resultTitlePace: "Je tempo is",
    resultTitleTime: "Je tijd is",
    resultTitleDistance: "Je afstand is",
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
    btnCalculating: "Bezig met berekenen",
    btnNewCalculation: "Nieuwe berekening",
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
    adSupportRun: "Ondersteun onze hardloop",
    adEnableAds: "Schakel advertenties in en houd deze tool gratis voor iedereen.",
    distanceBadges: {
      kilometers: [
        { label: "1 km", value: "1" },
        { label: "5 km", value: "5" },
        { label: "10 km", value: "10" },
        { label: "Halve marathon", value: "21.0975" },
        { label: "Marathon", value: "42.195" },
      ],
      meters: [
        { label: "100 m", value: "100" },
        { label: "200 m", value: "200" },
        { label: "400 m", value: "400" },
        { label: "500 m", value: "500" },
        { label: "600 m", value: "600" },
        { label: "800 m", value: "800" },
        { label: "1 km", value: "1000" },
      ],
      miles: [
        { label: "1 mijl", value: "1" },
        { label: "3 mijl", value: "3" },
        { label: "5 mijl", value: "5" },
        { label: "10 mijl", value: "10" },
        { label: "Halve marathon", value: "13.1" },
        { label: "Marathon", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Tabel Tempo naar Finishtijd",
    paceTimeTableDescription:
      "Ontdek je finishtijd met onze tempo-per-afstandtabel. Bekijk hoe snel je een 5 km, 10 km, halve marathon of marathon loopt bij verschillende tempos per km.",
    paceTimeTableColHalf: "Halve",
    paceTimeTableColMarathon: "Marathon",
    paceTimeTableDistancesNote:
      "Halve: 21,0975 km (13,1 mi). Marathon: 42,195 km (26,2 mi).",
    blogWrittenBy: "Geschreven door",
    validationMissingTitle: "Ontbrekende verplichte velden",
    validationMissingDistance: "Afstand",
    validationMissingTime: "Tijd",
    validationMissingPace: "Tempo",
    validationMissingVelocity: "Snelheid",
  },
  pl: {
    appTitle: "Znajdź Swój Tempo Biegu",
    appDescription:
      "Oblicz tempo biegu w mgnieniu oka dzięki naszej darmowej kalkulatorce. Wprowadź dystans i czas, aby uzyskać tempo na km lub milę dla 5K, 10K, półmaratonu i maratonu.",
    appTitleTime: "Znajdź Swój Czas Biegu",
    appDescriptionTime:
      "Oszacuj czas biegu od razu z naszym darmowym kalkulatorem. Wprowadź dystans i tempo, aby obliczyć czas mety na 5K, 10K, półmaraton i maraton.",
    appTitleDistance: "Znajdź Swój Dystans Biegu",
    appDescriptionDistance:
      "Oblicz dystans biegu od razu z naszym darmowym kalkulatorem. Wprowadź czas i tempo, aby oszacować, jak daleko możesz przebiec w km lub milach.",
    menuCalculators: "Kalkulatory",
    menuCharts: "Wykresy",
    menuBlog: "Blog",
    calculatorsLinks: [
      "Kalkulator tempa",
      "Kalkulator tempa 5K",
      "Kalkulator półmaratonu",
      "Kalkulator maratonu",
    ],
    chartLinks: ["Niestandardowy", "Tempo 5K", "Tempo 10K", "Półmaraton", "Maraton"],
    language: "Język",
    theme: "Motyw",
    darkMode: "Tryb ciemny",
    calculatorTitle: "Kalkulator tempa",
    distanceLabel: "Dystans (km)",
    hoursLabel: "Godziny",
    minutesLabel: "Minuty",
    secondsLabel: "Sekundy",
    emptyState: "Wpisz dystans i czas, aby obliczyć tempo.",
    resultTitle: "Wynik",
    resultTitlePace: "Twoje tempo to",
    resultTitleTime: "Twój czas to",
    resultTitleDistance: "Twój dystans to",
    averagePace: "Średnie tempo",
    averageSpeed: "Średnia prędkość",
    racePredictions: "Prognozy biegu",
    hourShort: "h",
    minuteShort: "m",
    secondShort: "s",
    tabPace: "Tempo",
    tabTime: "Czas",
    tabDistance: "Dystans",
    btnCalculate: "Oblicz",
    btnCalculating: "Obliczanie",
    btnNewCalculation: "Nowe obliczenie",
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
    adSupportRun: "Wspieraj nasz bieg",
    adEnableAds: "Włącz reklamy i zachowaj to narzędzie bezpłatne dla wszystkich.",
    distanceBadges: {
      kilometers: [
        { label: "1 km", value: "1" },
        { label: "5 km", value: "5" },
        { label: "10 km", value: "10" },
        { label: "Halvmaraton", value: "21.0975" },
        { label: "Maraton", value: "42.195" },
      ],
      meters: [
        { label: "100 m", value: "100" },
        { label: "200 m", value: "200" },
        { label: "400 m", value: "400" },
        { label: "500 m", value: "500" },
        { label: "600 m", value: "600" },
        { label: "800 m", value: "800" },
        { label: "1 km", value: "1000" },
      ],
      miles: [
        { label: "1 mil", value: "1" },
        { label: "3 mil", value: "3" },
        { label: "5 mil", value: "5" },
        { label: "10 mil", value: "10" },
        { label: "Halvmaraton", value: "13.1" },
        { label: "Maraton", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Tabela czasu na tempo",
    paceTimeTableDescription:
      "Sprawdź swój czas meta z naszą tabelą tempa na dystans. Zobacz, w jakim czasie przebiegniesz 5 km, 10 km, półmaraton lub maraton przy różnych tempach na km.",
    paceTimeTableColHalf: "Pół",
    paceTimeTableColMarathon: "Maraton",
    paceTimeTableDistancesNote:
      "Pół: 21,0975 km (13,1 mi). Maraton: 42,195 km (26,2 mi).",
    blogWrittenBy: "Napisane przez",
    validationMissingTitle: "Wypełnij wymagane pola",
    validationMissingDistance: "Dystans",
    validationMissingTime: "Czas",
    validationMissingPace: "Tempo",
    validationMissingVelocity: "Prędkość",
  },
  sv: {
    appTitle: "Hitta Din Löptempo",
    appDescription:
      "Beräkna ditt löptempo direkt med vår gratis tempokalkylator. Ange sträcka och tid för att få tempo per km eller mil för 5K, 10K, halvmaraton och maratonträning.",
    appTitleTime: "Hitta Din Löptid",
    appDescriptionTime:
      "Uppskatta din löptid direkt med vår gratis kalkylator. Ange sträcka och tempo för att beräkna mål tid för 5K, 10K, halvmaraton och maraton.",
    appTitleDistance: "Hitta Din Löpsträcka",
    appDescriptionDistance:
      "Beräkna din löpsträcka direkt med vår gratis kalkylator. Ange tid och tempo för att uppskatta hur långt du kan springa i km eller miles.",
    menuCalculators: "Kalkylatorer",
    menuCharts: "Diagram",
    menuBlog: "Blogg",
    calculatorsLinks: [
      "Tempokalkylator",
      "5K tempokalkylator",
      "Halvmaratonkalkylator",
      "Maratonkalkylator",
    ],
    chartLinks: ["Anpassad", "5K tempo", "10K tempo", "Halvmaraton", "Maraton"],
    language: "Språk",
    theme: "Tema",
    darkMode: "Mörkt läge",
    calculatorTitle: "Tempokalkylator",
    distanceLabel: "Distans (km)",
    hoursLabel: "Timmar",
    minutesLabel: "Minuter",
    secondsLabel: "Sekunder",
    emptyState: "Fyll i distans och tid för att beräkna ditt tempo.",
    resultTitle: "Resultat",
    resultTitlePace: "Ditt tempo är",
    resultTitleTime: "Din tid är",
    resultTitleDistance: "Ditt avstånd är",
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
    btnCalculating: "Beräknar",
    btnNewCalculation: "Ny beräkning",
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
    adSupportRun: "Stöd vårt löp",
    adEnableAds: "Aktivera annonser och håll verktyget gratis för alla.",
    distanceBadges: {
      kilometers: [
        { label: "1 km", value: "1" },
        { label: "5 km", value: "5" },
        { label: "10 km", value: "10" },
        { label: "Halvmaraton", value: "21.0975" },
        { label: "Maraton", value: "42.195" },
      ],
      meters: [
        { label: "100 m", value: "100" },
        { label: "200 m", value: "200" },
        { label: "400 m", value: "400" },
        { label: "500 m", value: "500" },
        { label: "600 m", value: "600" },
        { label: "800 m", value: "800" },
        { label: "1 km", value: "1000" },
      ],
      miles: [
        { label: "1 mil", value: "1" },
        { label: "3 mil", value: "3" },
        { label: "5 mil", value: "5" },
        { label: "10 mil", value: "10" },
        { label: "Halvmaraton", value: "13.1" },
        { label: "Maraton", value: "26.2" },
      ],
    },
    paceTimeTableTitle: "Tabell tempo till måltid",
    paceTimeTableDescription:
      "Ta reda på din måltid med vår tabell tempo per sträcka. Se hur lång tid du springer 5 km, 10 km, halvmaraton eller maraton vid olika tempon per km.",
    paceTimeTableColHalf: "Halv",
    paceTimeTableColMarathon: "Maraton",
    paceTimeTableDistancesNote:
      "Halv: 21,0975 km (13,1 mi). Maraton: 42,195 km (26,2 mi).",
    blogWrittenBy: "Skrivet av",
    validationMissingTitle: "Obligatoriska fält saknas",
    validationMissingDistance: "Sträcka",
    validationMissingTime: "Tid",
    validationMissingPace: "Tempo",
    validationMissingVelocity: "Hastighet",
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

/** Segmentos de URL por idioma: /en/, /es/, /fr/, /it/, /pt/, /ja/, /de/, /nl/, /pl/, /sv/ */
export const pathLocales = ["en", "es", "fr", "it", "pt", "ja", "de", "nl", "pl", "sv"] as const;
export type PathLocale = (typeof pathLocales)[number];

const pathLocaleToLocaleMap: Record<PathLocale, Locale> = {
  en: "en",
  es: "es",
  fr: "fr",
  it: "it",
  pt: "pt-BR",
  ja: "ja",
  de: "de",
  nl: "nl",
  pl: "pl",
  sv: "sv",
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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://findyourpace.app";

/** Título da página por path locale (SEO). */
export const pageTitleByPathLocale: Record<PathLocale, string> = {
  en: "Find Your Running Pace | FindYourPace",
  es: "Encuentra tu Ritmo de Carrera | FindYourPace",
  fr: "Trouvez Votre Allure de Course | FindYourPace",
  it: "Trova il Tuo Ritmo di Corsa | FindYourPace",
  pt: "Encontre Seu Pace de Corrida | FindYourPace",
  ja: "あなたのランニングペースを見つける | FindYourPace",
  de: "Finde Deinen Lauf-Pace | FindYourPace",
  nl: "Vind Je Hardlooptempo | FindYourPace",
  pl: "Znajdź Swój Tempo Biegu | FindYourPace",
  sv: "Hitta Din Löptempo | FindYourPace",
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
    title: "FAQ Hardlooptempo Calculator",
    items: [
      {
        question: "Wat is hardlooptempo?",
        answer:
          "Hardlooptempo is de tijd die je nodig hebt om een bepaalde afstand te lopen, meestal uitgedrukt in minuten per kilometer of minuten per mijl.",
      },
      {
        question: "Hoe bereken ik mijn hardlooptempo?",
        answer:
          "Deel de totale looptijd door de afstand. Deze tempocalculator doet het direct voor je.",
      },
      {
        question: "Wat is een goed hardlooptempo?",
        answer:
          "Een goed tempo hangt af van je conditie en ervaring. Beginners lopen vaak tussen 7:00 en 9:00 minuten per kilometer.",
      },
      {
        question: "Hoe zet ik tempo om in snelheid?",
        answer:
          "Bereken hoeveel kilometer of mijl je per uur loopt. Onze rekenmachine toont zowel tempo als snelheid.",
      },
    ],
  },
  pl: {
    title: "FAQ Kalkulator tempa biegu",
    items: [
      {
        question: "Co to jest tempo biegu?",
        answer:
          "Tempo biegu to czas, w jakim pokonujesz określony dystans, zwykle podawany w minutach na kilometr lub minutach na milę.",
      },
      {
        question: "Jak obliczyć moje tempo biegu?",
        answer:
          "Podziel łączny czas biegu przez dystans. Ten kalkulator tempa zrobi to za Ciebie w mgnieniu oka.",
      },
      {
        question: "Jakie tempo biegu jest dobre?",
        answer:
          "Dobre tempo zależy od formy i doświadczenia. Początkujący często biegają między 7:00 a 9:00 minut na kilometr.",
      },
      {
        question: "Jak przeliczyć tempo na prędkość?",
        answer:
          "Oblicz, ile kilometrów lub mil przebiegasz w godzinę. Nasz kalkulator pokazuje zarówno tempo, jak i prędkość.",
      },
    ],
  },
  sv: {
    title: "FAQ Löptempokalkylator",
    items: [
      {
        question: "Vad är löptempo?",
        answer:
          "Löptempo är den tid det tar att springa en viss sträcka, vanligtvis uttryckt i minuter per kilometer eller minuter per mil.",
      },
      {
        question: "Hur beräknar jag mitt löptempo?",
        answer:
          "Dela din totala springtid med sträckan. Denna tempokalkylator gör det direkt åt dig.",
      },
      {
        question: "Vad är ett bra löptempo?",
        answer:
          "Ett bra tempo beror på din kondition och erfarenhet. Nybörjare springer ofta mellan 7:00 och 9:00 minuter per kilometer.",
      },
      {
        question: "Hur konverterar jag tempo till hastighet?",
        answer:
          "Beräkna hur många kilometer eller mil du springer per timme. Vår kalkylator visar både tempo och hastighet.",
      },
    ],
  },
};
