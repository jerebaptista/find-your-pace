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
  menuTables: string;
  menuBlog: string;
  navCalculatorLabels: readonly [
    string,
    string,
    string,
    string,
    string,
    string,
  ];
  navTableLabels: readonly [string, string, string, string];
  comingSoonBadge: string;
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
  blogMorePosts: string;
  validationMissingTitle: string;
  validationMissingDistance: string;
  validationMissingTime: string;
  validationMissingPace: string;
  validationMissingVelocity: string;
  menuPrivacyPolicy: string;
  privacyPageTitle: string;
  privacyLastUpdate: string;
  privacySections: readonly { title: string; body: string }[];
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
    menuTables: "Tables",
    menuBlog: "Blog",
    navCalculatorLabels: [
      "Pace Calculator",
      "Race Time Predictor",
      "Training Zones Calculator",
      "Splits Calculator",
      "Calories Calculator",
      "Unit Converter",
    ],
    navTableLabels: [
      "Pace to finish time table",
      "Splits table",
      "Training pace table",
      "Equivalences table",
    ],
    comingSoonBadge: "Coming soon",
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
    blogMorePosts: "More to read",
    validationMissingTitle: "Missing required fields",
    validationMissingDistance: "Distance",
    validationMissingTime: "Time",
    validationMissingPace: "Pace",
    validationMissingVelocity: "Velocity",
    menuPrivacyPolicy: "Privacy Policy",
    privacyPageTitle: "Privacy Policy",
    privacyLastUpdate: "Last updated: March 2025",
    privacySections: [
      {
        title: "Introduction",
        body: "FindYourPace (“we”, “our”) offers a free running pace calculator, race time and distance tools, and a blog. This policy describes how we handle information when you use our website.",
      },
      {
        title: "Information We Collect",
        body: "Our calculator and tools run in your browser. We do not require an account or collect personal data to use them. We may receive technical data such as your IP address, browser type, and general usage (e.g. through our hosting or analytics) in line with standard web operation.",
      },
      {
        title: "Google AdSense and Cookies",
        body: "We use Google AdSense to show ads and keep the service free. Google and its partners may use cookies and similar technologies to deliver ads and measure performance. You can learn how Google uses data from sites that use its services at policies.google.com/technologies/partner-sites. You can manage or opt out of personalised advertising in your Google Account settings.",
      },
      {
        title: "How We Use Information",
        body: "We use information to operate and improve the site, to display relevant ads, and to comply with legal obligations. We do not sell your personal information.",
      },
      {
        title: "Your Choices",
        body: "You can disable or limit cookies in your browser. Disabling cookies may affect ad relevance and some site features. You can also use your Google Account to control ad personalisation.",
      },
      {
        title: "Changes and Contact",
        body: "We may update this policy from time to time; the “Last updated” date will be revised. For questions about this privacy policy, you can contact us through the contact options available on our website.",
      },
    ],
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
    menuTables: "Tablas",
    menuBlog: "Blog",
    navCalculatorLabels: [
      "Calculadora de Ritmo",
      "Preditor de Tiempo de Prueba",
      "Calculadora de Zonas de Entrenamiento",
      "Calculadora de Splits",
      "Calculadora de Calorías",
      "Conversor de Unidades",
    ],
    navTableLabels: [
      "Tabla de tiempo por ritmo",
      "Tabla de splits",
      "Tabla de ritmos de entrenamiento",
      "Tabla de equivalencias",
    ],
    comingSoonBadge: "Próximamente",
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
    blogMorePosts: "Más para leer",
    validationMissingTitle: "Campos requeridos",
    validationMissingDistance: "Distancia",
    validationMissingTime: "Tiempo",
    validationMissingPace: "Ritmo",
    validationMissingVelocity: "Velocidad",
    menuPrivacyPolicy: "Política de privacidad",
    privacyPageTitle: "Política de privacidad",
    privacyLastUpdate: "Última actualización: marzo 2025",
    privacySections: [
      {
        title: "Introducción",
        body: "FindYourPace («nosotros») ofrece una calculadora de ritmo de carrera gratuita, herramientas de tiempo y distancia y un blog. Esta política describe cómo tratamos la información cuando utilizas nuestro sitio.",
      },
      {
        title: "Información que recogemos",
        body: "Nuestra calculadora y herramientas se ejecutan en tu navegador. No exigimos cuenta ni recogemos datos personales para usarlas. Podemos recibir datos técnicos como tu dirección IP, tipo de navegador y uso general (p. ej. a través de nuestro alojamiento o análisis) según el funcionamiento habitual de la web.",
      },
      {
        title: "Google AdSense y cookies",
        body: "Utilizamos Google AdSense para mostrar anuncios y mantener el servicio gratuito. Google y sus partners pueden usar cookies y tecnologías similares para mostrar anuncios y medir el rendimiento. Puedes consultar cómo usa Google los datos de sitios que usan sus servicios en policies.google.com/technologies/partner-sites. Puedes gestionar o desactivar la publicidad personalizada en la configuración de tu Cuenta de Google.",
      },
      {
        title: "Uso de la información",
        body: "Usamos la información para operar y mejorar el sitio, mostrar anuncios relevantes y cumplir obligaciones legales. No vendemos tu información personal.",
      },
      {
        title: "Tus opciones",
        body: "Puedes desactivar o limitar las cookies en tu navegador. Desactivarlas puede afectar a la relevancia de los anuncios y a algunas funciones del sitio. También puedes usar tu Cuenta de Google para controlar la personalización de anuncios.",
      },
      {
        title: "Cambios y contacto",
        body: "Podemos actualizar esta política; la fecha de «Última actualización» se revisará. Para preguntas sobre esta política de privacidad, puedes contactarnos a través de las opciones de contacto disponibles en nuestro sitio.",
      },
    ],
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
    menuTables: "Tableaux",
    menuBlog: "Blog",
    navCalculatorLabels: [
      "Calculateur d'allure",
      "Prédicteur de temps de course",
      "Calculateur de zones d'entraînement",
      "Calculateur de splits",
      "Calculateur de calories",
      "Convertisseur d'unités",
    ],
    navTableLabels: [
      "Tableau temps par allure",
      "Tableau de splits",
      "Tableau d'allures d'entraînement",
      "Tableau d'équivalences",
    ],
    comingSoonBadge: "Bientôt disponible",
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
    blogMorePosts: "À lire aussi",
    validationMissingTitle: "Champs requis manquants",
    validationMissingDistance: "Distance",
    validationMissingTime: "Temps",
    validationMissingPace: "Allure",
    validationMissingVelocity: "Vitesse",
    menuPrivacyPolicy: "Politique de confidentialité",
    privacyPageTitle: "Politique de confidentialité",
    privacyLastUpdate: "Dernière mise à jour : mars 2025",
    privacySections: [
      {
        title: "Introduction",
        body: "FindYourPace (« nous », « notre ») propose une calculatrice d'allure de course gratuite, des outils de temps et de distance et un blog. Cette politique décrit comment nous traitons les informations lorsque vous utilisez notre site.",
      },
      {
        title: "Informations que nous collectons",
        body: "Notre calculatrice et nos outils s'exécutent dans votre navigateur. Nous ne demandons pas de compte ni ne collectons de données personnelles pour les utiliser. Nous pouvons recevoir des données techniques (adresse IP, type de navigateur, usage général) via notre hébergement ou analyses, conformément au fonctionnement standard du web.",
      },
      {
        title: "Google AdSense et cookies",
        body: "Nous utilisons Google AdSense pour afficher des annonces et maintenir le service gratuit. Google et ses partenaires peuvent utiliser des cookies et technologies similaires pour diffuser des annonces et mesurer les performances. Consultez policies.google.com/technologies/partner-sites pour savoir comment Google utilise les données des sites utilisant ses services. Vous pouvez gérer ou désactiver la publicité personnalisée dans les paramètres de votre compte Google.",
      },
      {
        title: "Utilisation des informations",
        body: "Nous utilisons les informations pour faire fonctionner et améliorer le site, afficher des annonces pertinentes et respecter les obligations légales. Nous ne vendons pas vos données personnelles.",
      },
      {
        title: "Vos choix",
        body: "Vous pouvez désactiver ou limiter les cookies dans votre navigateur. Les désactiver peut affecter la pertinence des annonces et certaines fonctionnalités. Vous pouvez aussi utiliser votre compte Google pour contrôler la personnalisation des annonces.",
      },
      {
        title: "Modifications et contact",
        body: "Nous pouvons mettre à jour cette politique ; la date « Dernière mise à jour » sera révisée. Pour toute question, vous pouvez nous contacter via les options disponibles sur notre site.",
      },
    ],
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
    menuTables: "Tabellen",
    menuBlog: "Blog",
    navCalculatorLabels: [
      "Pace-Rechner",
      "Wettkampfzeit-Vorhersage",
      "Trainingszonen-Rechner",
      "Splits-Rechner",
      "Kalorien-Rechner",
      "Einheitenumrechner",
    ],
    navTableLabels: [
      "Tabelle Zeit nach Pace",
      "Splits-Tabelle",
      "Trainingspace-Tabelle",
      "Äquivalenz-Tabelle",
    ],
    comingSoonBadge: "Demnächst",
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
    blogMorePosts: "Weitere Beiträge",
    validationMissingTitle: "Pflichtfelder fehlen",
    validationMissingDistance: "Distanz",
    validationMissingTime: "Zeit",
    validationMissingPace: "Pace",
    validationMissingVelocity: "Geschwindigkeit",
    menuPrivacyPolicy: "Datenschutz",
    privacyPageTitle: "Datenschutzerklärung",
    privacyLastUpdate: "Zuletzt aktualisiert: März 2025",
    privacySections: [
      {
        title: "Einführung",
        body: "FindYourPace („wir“, „unser“) bietet einen kostenlosen Laufpace-Rechner, Werkzeuge für Zeit und Distanz sowie ein Blog. Diese Richtlinie beschreibt, wie wir mit Informationen umgehen, wenn Sie unsere Website nutzen.",
      },
      {
        title: "Erhobene Daten",
        body: "Unser Rechner und die Werkzeuge laufen in Ihrem Browser. Wir verlangen kein Konto und erheben keine personenbezogenen Daten. Wir können technische Daten (z. B. IP-Adresse, Browsertyp, allgemeine Nutzung) über unser Hosting oder Analysen erhalten, wie bei üblichen Webabläufen.",
      },
      {
        title: "Google AdSense und Cookies",
        body: "Wir nutzen Google AdSense für Anzeigen und um den Service kostenlos zu halten. Google und Partner können Cookies und ähnliche Technologien für Anzeigen und Messungen verwenden. Unter policies.google.com/technologies/partner-sites erfahren Sie, wie Google Daten von Partnerseiten nutzt. Sie können personalisierte Werbung in Ihren Google-Kontoeinstellungen verwalten oder deaktivieren.",
      },
      {
        title: "Verwendung der Daten",
        body: "Wir nutzen die Daten zum Betreiben und Verbessern der Website, für relevante Anzeigen und zur Erfüllung gesetzlicher Pflichten. Wir verkaufen Ihre personenbezogenen Daten nicht.",
      },
      {
        title: "Ihre Wahlmöglichkeiten",
        body: "Sie können Cookies in Ihrem Browser deaktivieren oder einschränken. Das Deaktivieren kann Anzeigenrelevanz und einige Funktionen beeinträchtigen. Sie können auch Ihr Google-Konto nutzen, um die Anzeigenpersonalisierung zu steuern.",
      },
      {
        title: "Änderungen und Kontakt",
        body: "Wir können diese Richtlinie aktualisieren; das Datum „Zuletzt aktualisiert“ wird angepasst. Bei Fragen können Sie uns über die auf unserer Website angegebenen Kontaktmöglichkeiten erreichen.",
      },
    ],
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
    menuTables: "Tabelas",
    menuBlog: "Blog",
    navCalculatorLabels: [
      "Calculadora de Pace",
      "Preditor de Tempo de Prova",
      "Calculadora de Zonas de Treino",
      "Calculadora de Splits",
      "Calculadora de Calorias",
      "Conversor de Unidade",
    ],
    navTableLabels: [
      "Tabela de tempo por pace",
      "Tabela de splits",
      "Tabela de ritmos de treino",
      "Tabela de equivalências",
    ],
    comingSoonBadge: "Em breve",
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
    blogMorePosts: "Outras leituras",
    validationMissingTitle: "Preencha os campos obrigatórios",
    validationMissingDistance: "Distância",
    validationMissingTime: "Tempo",
    validationMissingPace: "Ritmo",
    validationMissingVelocity: "Velocidade",
    menuPrivacyPolicy: "Política de privacidade",
    privacyPageTitle: "Política de privacidade",
    privacyLastUpdate: "Última atualização: março de 2025",
    privacySections: [
      {
        title: "Introdução",
        body: "O FindYourPace («nós») oferece uma calculadora de pace de corrida gratuita, ferramentas de tempo e distância e um blog. Esta política descreve como tratamos as informações quando você usa nosso site.",
      },
      {
        title: "Informações que coletamos",
        body: "Nossa calculadora e ferramentas funcionam no seu navegador. Não exigimos conta nem coletamos dados pessoais para usá-las. Podemos receber dados técnicos (endereço IP, tipo de navegador, uso geral) por meio de nossa hospedagem ou análises, conforme o funcionamento padrão da web.",
      },
      {
        title: "Google AdSense e cookies",
        body: "Usamos o Google AdSense para exibir anúncios e manter o serviço gratuito. O Google e seus parceiros podem usar cookies e tecnologias semelhantes para exibir anúncios e medir desempenho. Saiba como o Google usa dados de sites que usam seus serviços em policies.google.com/technologies/partner-sites. Você pode gerenciar ou desativar a publicidade personalizada nas configurações da sua Conta Google.",
      },
      {
        title: "Uso das informações",
        body: "Usamos as informações para operar e melhorar o site, exibir anúncios relevantes e cumprir obrigações legais. Não vendemos suas informações pessoais.",
      },
      {
        title: "Suas escolhas",
        body: "Você pode desativar ou limitar cookies no seu navegador. Desativá-los pode afetar a relevância dos anúncios e algumas funções do site. Você também pode usar sua Conta Google para controlar a personalização de anúncios.",
      },
      {
        title: "Alterações e contato",
        body: "Podemos atualizar esta política; a data de «Última atualização» será revisada. Para dúvidas sobre esta política de privacidade, você pode nos contatar pelas opções disponíveis em nosso site.",
      },
    ],
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
    menuTables: "Tabelle",
    menuBlog: "Blog",
    navCalculatorLabels: [
      "Calcolatore di ritmo",
      "Predittore tempo di gara",
      "Calcolatore zone di allenamento",
      "Calcolatore splits",
      "Calcolatore calorie",
      "Convertitore di unità",
    ],
    navTableLabels: [
      "Tabella tempo per ritmo",
      "Tabella splits",
      "Tabella ritmi di allenamento",
      "Tabella equivalenze",
    ],
    comingSoonBadge: "In arrivo",
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
    blogMorePosts: "Altri articoli",
    validationMissingTitle: "Campi obbligatori mancanti",
    validationMissingDistance: "Distanza",
    validationMissingTime: "Tempo",
    validationMissingPace: "Passo",
    validationMissingVelocity: "Velocità",
    menuPrivacyPolicy: "Informativa sulla privacy",
    privacyPageTitle: "Informativa sulla privacy",
    privacyLastUpdate: "Ultimo aggiornamento: marzo 2025",
    privacySections: [
      {
        title: "Introduzione",
        body: "FindYourPace («noi») offre una calcolatrice di ritmo di corsa gratuita, strumenti per tempo e distanza e un blog. Questa informativa descrive come trattiamo i dati quando utilizzi il nostro sito.",
      },
      {
        title: "Informazioni che raccogliamo",
        body: "La nostra calcolatrice e gli strumenti funzionano nel tuo browser. Non richiediamo un account né raccogliamo dati personali per usarli. Possiamo ricevere dati tecnici (indirizzo IP, tipo di browser, utilizzo generale) tramite hosting o analisi, come nel funzionamento standard del web.",
      },
      {
        title: "Google AdSense e cookie",
        body: "Utilizziamo Google AdSense per mostrare annunci e mantenere il servizio gratuito. Google e i suoi partner possono usare cookie e tecnologie simili per annunci e misurazioni. Puoi scoprire come Google utilizza i dati dei siti che usano i suoi servizi su policies.google.com/technologies/partner-sites. Puoi gestire o disattivare la pubblicità personalizzata nelle impostazioni del tuo account Google.",
      },
      {
        title: "Uso delle informazioni",
        body: "Utilizziamo le informazioni per gestire e migliorare il sito, mostrare annunci pertinenti e rispettare gli obblighi legali. Non vendiamo i tuoi dati personali.",
      },
      {
        title: "Le tue scelte",
        body: "Puoi disattivare o limitare i cookie nel browser. Disattivarli può influire sulla pertinenza degli annunci e su alcune funzionalità. Puoi anche usare il tuo account Google per controllare la personalizzazione degli annunci.",
      },
      {
        title: "Modifiche e contatto",
        body: "Potremmo aggiornare questa informativa; la data «Ultimo aggiornamento» sarà aggiornata. Per domande su questa privacy policy, puoi contattarci tramite le opzioni disponibili sul nostro sito.",
      },
    ],
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
    menuTables: "表",
    menuBlog: "ブログ",
    navCalculatorLabels: [
      "ペース計算機",
      "レースタイム予測",
      "トレーニングゾーン計算機",
      "スプリット計算機",
      "カロリー計算機",
      "単位換算",
    ],
    navTableLabels: [
      "ペース別ゴールタイム表",
      "スプリット表",
      "トレーニングペース表",
      "換算表",
    ],
    comingSoonBadge: "近日公開",
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
    blogMorePosts: "他の記事",
    validationMissingTitle: "必須項目を入力してください",
    validationMissingDistance: "距離",
    validationMissingTime: "タイム",
    validationMissingPace: "ペース",
    validationMissingVelocity: "速度",
    menuPrivacyPolicy: "プライバシーポリシー",
    privacyPageTitle: "プライバシーポリシー",
    privacyLastUpdate: "最終更新：2025年3月",
    privacySections: [
      {
        title: "はじめに",
        body: "FindYourPace（「当サイト」）は、無料のランニングペース計算機、レースタイム・距離ツール、ブログを提供しています。本ポリシーは、当サイトのご利用時に情報をどのように扱うかを説明します。",
      },
      {
        title: "収集する情報",
        body: "計算機とツールはお使いのブラウザ上で動作します。ご利用に際してアカウントや個人データの入力は不要です。ホスティングや解析を通じて、IPアドレス、ブラウザの種類、一般的な利用状況などの技術情報を受け取ることがあります。",
      },
      {
        title: "Google AdSenseとCookie",
        body: "広告表示とサービス無料提供のため、Google AdSenseを利用しています。Googleおよびそのパートナーは、広告の配信・効果測定のためにCookie等を使用することがあります。Googleのデータ利用については policies.google.com/technologies/partner-sites をご確認ください。Googleアカウントの設定でパーソナライズ広告の管理や無効化ができます。",
      },
      {
        title: "情報の利用",
        body: "情報はサイトの運営・改善、関連広告の表示、法的義務の履行に利用します。個人情報の販売は行いません。",
      },
      {
        title: "お客様の選択",
        body: "ブラウザでCookieを無効または制限できます。無効にすると広告の関連性や一部機能に影響する場合があります。Googleアカウントで広告のパーソナライズも管理できます。",
      },
      {
        title: "変更とお問い合わせ",
        body: "本ポリシーは随時更新することがあり、「最終更新」日を改めます。プライバシーポリシーに関するお問い合わせは、当サイトに記載の連絡方法からお願いします。",
      },
    ],
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
    menuTables: "Tabellen",
    menuBlog: "Blog",
    navCalculatorLabels: [
      "Tempo-calculator",
      "Wedstrijdtijd-voorspeller",
      "Trainingszones-calculator",
      "Splits-calculator",
      "Calorieën-calculator",
      "Eenhedenomzetter",
    ],
    navTableLabels: [
      "Tabel tijd per tempo",
      "Splits-tabel",
      "Trainingspace-tabel",
      "Equivalentietabel",
    ],
    comingSoonBadge: "Binnenkort",
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
    blogMorePosts: "Meer artikelen",
    validationMissingTitle: "Ontbrekende verplichte velden",
    validationMissingDistance: "Afstand",
    validationMissingTime: "Tijd",
    validationMissingPace: "Tempo",
    validationMissingVelocity: "Snelheid",
    menuPrivacyPolicy: "Privacybeleid",
    privacyPageTitle: "Privacybeleid",
    privacyLastUpdate: "Laatst bijgewerkt: maart 2025",
    privacySections: [
      {
        title: "Introductie",
        body: "FindYourPace («wij», «ons») biedt een gratis hardlooptempocalculator, tools voor tijd en afstand en een blog. Dit beleid beschrijft hoe we omgaan met informatie wanneer je onze site gebruikt.",
      },
      {
        title: "Informatie die we verzamelen",
        body: "Onze calculator en tools draaien in je browser. We vragen geen account aan en verzamelen geen persoonsgegevens om ze te gebruiken. We kunnen technische gegevens ontvangen (o.a. IP-adres, browsertype, algemeen gebruik) via onze hosting of analyses, conform standaard webwerking.",
      },
      {
        title: "Google AdSense en cookies",
        body: "We gebruiken Google AdSense om advertenties te tonen en de service gratis te houden. Google en partners kunnen cookies en vergelijkbare technologieën gebruiken voor advertenties en metingen. Meer over het gebruik van data door Google op policies.google.com/technologies/partner-sites. Je kunt gepersonaliseerde advertenties beheren of uitzetten in je Google-accountinstellingen.",
      },
      {
        title: "Gebruik van informatie",
        body: "We gebruiken informatie om de site te laten werken en verbeteren, relevante advertenties te tonen en aan wettelijke verplichtingen te voldoen. We verkopen je persoonsgegevens niet.",
      },
      {
        title: "Jouw keuzes",
        body: "Je kunt cookies in je browser uitschakelen of beperken. Uitschakelen kan de relevantie van advertenties en sommige functies beïnvloeden. Je kunt ook je Google-account gebruiken om advertentiepersonalisatie te beheren.",
      },
      {
        title: "Wijzigingen en contact",
        body: "We kunnen dit beleid bijwerken; de datum «Laatst bijgewerkt» wordt dan aangepast. Voor vragen over dit privacybeleid kun je contact met ons opnemen via de op onze site vermelde contactopties.",
      },
    ],
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
    menuTables: "Tabele",
    menuBlog: "Blog",
    navCalculatorLabels: [
      "Kalkulator tempa",
      "Predyktor czasu biegu",
      "Kalkulator stref treningowych",
      "Kalkulator odcinków",
      "Kalkulator kalorii",
      "Przelicznik jednostek",
    ],
    navTableLabels: [
      "Tabela czasu wg tempa",
      "Tabela odcinków",
      "Tabela temp treningowych",
      "Tabela równoważników",
    ],
    comingSoonBadge: "Wkrótce",
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
    blogMorePosts: "Inne artykuły",
    validationMissingTitle: "Wypełnij wymagane pola",
    validationMissingDistance: "Dystans",
    validationMissingTime: "Czas",
    validationMissingPace: "Tempo",
    validationMissingVelocity: "Prędkość",
    menuPrivacyPolicy: "Polityka prywatności",
    privacyPageTitle: "Polityka prywatności",
    privacyLastUpdate: "Ostatnia aktualizacja: marzec 2025",
    privacySections: [
      {
        title: "Wprowadzenie",
        body: "FindYourPace („my”, „nas”) oferuje darmowy kalkulator tempa biegu, narzędzia do czasu i dystansu oraz blog. Niniejsza polityka opisuje, jak przetwarzamy informacje podczas korzystania z naszej strony.",
      },
      {
        title: "Zbierane informacje",
        body: "Kalkulator i narzędzia działają w Twojej przeglądarce. Nie wymagamy konta ani nie zbieramy danych osobowych. Możemy otrzymywać dane techniczne (np. adres IP, typ przeglądarki, ogólne użycie) przez hosting lub analitykę, zgodnie ze standardowym działaniem sieci.",
      },
      {
        title: "Google AdSense i pliki cookie",
        body: "Używamy Google AdSense do wyświetlania reklam i utrzymania bezpłatnej usługi. Google i partnerzy mogą używać plików cookie i podobnych technologii do reklam i pomiarów. Więcej o wykorzystaniu danych przez Google: policies.google.com/technologies/partner-sites. Możesz zarządzać lub wyłączyć reklamy spersonalizowane w ustawieniach konta Google.",
      },
      {
        title: "Wykorzystanie informacji",
        body: "Używamy informacji do działania i rozwoju strony, wyświetlania relevantnych reklam oraz spełniania obowiązków prawnych. Nie sprzedajemy Twoich danych osobowych.",
      },
      {
        title: "Twoje wybory",
        body: "Możesz wyłączyć lub ograniczyć pliki cookie w przeglądarce. Wyłączenie może wpłynąć na trafność reklam i część funkcji. Możesz też użyć konta Google do zarządzania personalizacją reklam.",
      },
      {
        title: "Zmiany i kontakt",
        body: "Możemy aktualizować niniejszą politykę; data „Ostatnia aktualizacja” zostanie zmieniona. W razie pytań skontaktuj się z nami za pomocą opcji podanych na stronie.",
      },
    ],
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
    menuTables: "Tabeller",
    menuBlog: "Blogg",
    navCalculatorLabels: [
      "Tempokalkylator",
      "Lopptidsförutsägelse",
      "Träningszonkalkylator",
      "Splitkalkylator",
      "Kalorikalkylator",
      "Enhetsomvandlare",
    ],
    navTableLabels: [
      "Tabell tid per tempo",
      "Splittabell",
      "Träningspacetabell",
      "Equivalenstabell",
    ],
    comingSoonBadge: "Kommer snart",
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
    blogMorePosts: "Fler artiklar",
    validationMissingTitle: "Obligatoriska fält saknas",
    validationMissingDistance: "Sträcka",
    validationMissingTime: "Tid",
    validationMissingPace: "Tempo",
    validationMissingVelocity: "Hastighet",
    menuPrivacyPolicy: "Integritetspolicy",
    privacyPageTitle: "Integritetspolicy",
    privacyLastUpdate: "Senast uppdaterad: mars 2025",
    privacySections: [
      {
        title: "Introduktion",
        body: "FindYourPace (»vi«, »oss«) erbjuder en gratis löptempokalkylator, verktyg för tid och sträcka samt en blogg. Denna policy beskriver hur vi hanterar information när du använder vår webbplats.",
      },
      {
        title: "Information vi samlar in",
        body: "Vår kalkylator och verktyg körs i din webbläsare. Vi kräver inget konto och samlar inte in personuppgifter för användning. Vi kan ta emot teknisk data (t.ex. IP-adress, webbläsartyp, allmän användning) via vår hosting eller analyser, i enlighet med vanlig webbdrift.",
      },
      {
        title: "Google AdSense och cookies",
        body: "Vi använder Google AdSense för att visa annonser och hålla tjänsten gratis. Google och partners kan använda cookies och liknande teknik för annonser och mätning. Läs om hur Google använder data på policies.google.com/technologies/partner-sites. Du kan hantera eller stänga av personlig annonsering i dina Google-kontoinställningar.",
      },
      {
        title: "Hur vi använder information",
        body: "Vi använder information för att driva och förbättra webbplatsen, visa relevanta annonser och uppfylla juridiska krav. Vi säljer inte dina personuppgifter.",
      },
      {
        title: "Dina val",
        body: "Du kan inaktivera eller begränsa cookies i webbläsaren. Inaktivering kan påverka annonsrelevans och vissa funktioner. Du kan också använda ditt Google-konto för att styra annonspersonalisering.",
      },
      {
        title: "Ändringar och kontakt",
        body: "Vi kan uppdatera denna policy; datumet »Senast uppdaterad« revideras. För frågor om denna integritetspolicy kan du nå oss via de kontaktalternativ som finns på webbplatsen.",
      },
    ],
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
          "Running pace is the time it takes to cover a specific distance, usually expressed as minutes per kilometer or minutes per mile.",
      },
      {
        question: "How do I calculate my running pace?",
        answer:
          "To calculate running pace, divide your total running time by the distance covered. You can also use the FindYourPace calculator to get results instantly.",
      },
      {
        question: "What is a good running pace for beginners?",
        answer:
          "A good running pace for beginners typically ranges from 7:00 to 9:00 minutes per kilometer (11:00–14:30 per mile), depending on fitness level and experience.",
      },
      {
        question: "How do I convert running pace to speed?",
        answer:
          "You can convert pace to speed by calculating how many kilometers or miles you run per hour. Running apps and calculators usually show both values.",
      },
      {
        question: "How long does it take to run 5K?",
        answer:
          "The average 5K finish time ranges from 20 to 40 minutes depending on pace, training level, age, and experience.",
      },
      {
        question: "How long does it take to run a marathon?",
        answer:
          "Marathon finish times vary widely, but most runners complete it between 3 and 5 hours depending on pace and endurance.",
      },
      {
        question: "What pace do I need to run a sub-30 minute 5K?",
        answer:
          "To finish a 5K in under 30 minutes, you need to maintain a pace faster than 6:00 minutes per kilometer (9:39 per mile).",
      },
      {
        question: "Is pace or speed better for runners?",
        answer:
          "Pace is more commonly used by runners because it's easier to manage effort and race strategy, while speed is more common in cycling and track analysis.",
      },
      {
        question: "How can I improve my running pace?",
        answer:
          "You can improve pace through interval training, tempo runs, strength training, proper recovery, and consistent weekly mileage.",
      },
      {
        question: "Why is my running pace getting slower?",
        answer:
          "Slower pace can be caused by fatigue, overtraining, poor sleep, dehydration, terrain changes, or lack of recovery.",
      },
    ],
  },
  es: {
    title: "FAQ Calculadora de Ritmo de Carrera",
    items: [
      {
        question: "¿Qué es el ritmo de carrera?",
        answer:
          "El ritmo de carrera es el tiempo que se tarda en recorrer una distancia determinada, normalmente expresado en minutos por kilómetro o por milla.",
      },
      {
        question: "¿Cómo calculo mi ritmo de carrera?",
        answer:
          "Para calcular el ritmo, divide el tiempo total de carrera entre la distancia recorrida. También puedes usar la calculadora FindYourPace para obtener resultados al instante.",
      },
      {
        question: "¿Cuál es un buen ritmo de carrera para principiantes?",
        answer:
          "Un buen ritmo para principiantes suele estar entre 7:00 y 9:00 min/km (11:00–14:30 por milla), según el nivel físico y la experiencia.",
      },
      {
        question: "¿Cómo convierto el ritmo de carrera en velocidad?",
        answer:
          "Puedes convertir el ritmo en velocidad calculando cuántos kilómetros o millas corres por hora. Las apps y calculadoras de running suelen mostrar ambos valores.",
      },
      {
        question: "¿Cuánto se tarda en correr un 5K?",
        answer:
          "El tiempo medio de un 5K oscila entre 20 y 40 minutos según el ritmo, el nivel de entrenamiento, la edad y la experiencia.",
      },
      {
        question: "¿Cuánto se tarda en correr un maratón?",
        answer:
          "Los tiempos de maratón varían mucho; la mayoría de corredores lo completan entre 3 y 5 horas según ritmo y resistencia.",
      },
      {
        question: "¿Qué ritmo necesito para un 5K en menos de 30 minutos?",
        answer:
          "Para terminar un 5K en menos de 30 minutos necesitas mantener un ritmo inferior a 6:00 min/km (9:39 por milla).",
      },
      {
        question: "¿Es mejor el ritmo o la velocidad para corredores?",
        answer:
          "El ritmo es más usado por corredores porque facilita gestionar el esfuerzo y la estrategia de carrera; la velocidad es más común en ciclismo y análisis de pista.",
      },
      {
        question: "¿Cómo puedo mejorar mi ritmo de carrera?",
        answer:
          "Puedes mejorar el ritmo con entrenamiento por intervalos, rodajes a ritmo controlado, trabajo de fuerza, recuperación adecuada y kilometraje semanal constante.",
      },
      {
        question: "¿Por qué mi ritmo de carrera se está volviendo más lento?",
        answer:
          "Un ritmo más lento puede deberse a fatiga, sobreentrenamiento, mal descanso, deshidratación, cambios de terreno o falta de recuperación.",
      },
    ],
  },
  fr: {
    title: "FAQ Calculateur d'allure de course",
    items: [
      {
        question: "Qu'est-ce que l'allure de course ?",
        answer:
          "L'allure de course est le temps nécessaire pour parcourir une distance donnée, généralement exprimée en minutes par kilomètre ou par mile.",
      },
      {
        question: "Comment calculer mon allure de course ?",
        answer:
          "Pour calculer l'allure, divisez le temps total de course par la distance parcourue. Vous pouvez aussi utiliser le calculateur FindYourPace pour un résultat instantané.",
      },
      {
        question: "Quelle est une bonne allure pour les débutants ?",
        answer:
          "Une bonne allure pour débutants se situe généralement entre 7:00 et 9:00 min/km (11:00–14:30 par mile), selon la forme et l'expérience.",
      },
      {
        question: "Comment convertir l'allure en vitesse ?",
        answer:
          "Convertissez l'allure en vitesse en calculant combien de kilomètres ou de miles vous parcourez par heure. Les applis et calculateurs affichent souvent les deux.",
      },
      {
        question: "Combien de temps pour courir un 5 km ?",
        answer:
          "Le temps moyen d'un 5 km varie entre 20 et 40 minutes selon l'allure, le niveau d'entraînement, l'âge et l'expérience.",
      },
      {
        question: "Combien de temps pour courir un marathon ?",
        answer:
          "Les temps de marathon varient beaucoup ; la plupart des coureurs terminent entre 3 et 5 heures selon l'allure et l'endurance.",
      },
      {
        question: "Quelle allure pour un 5 km en moins de 30 minutes ?",
        answer:
          "Pour finir un 5 km en moins de 30 minutes, il faut maintenir une allure inférieure à 6:00 min/km (9:39 par mile).",
      },
      {
        question: "Allure ou vitesse : quoi de mieux pour les coureurs ?",
        answer:
          "L'allure est plus utilisée par les coureurs pour gérer l'effort et la stratégie de course ; la vitesse est plus courante en cyclisme et en analyse sur piste.",
      },
      {
        question: "Comment améliorer mon allure de course ?",
        answer:
          "Améliorez l'allure grâce aux séances par intervalles, aux sorties au tempo, au renforcement, à une bonne récupération et à un volume hebdomadaire régulier.",
      },
      {
        question: "Pourquoi mon allure de course ralentit-elle ?",
        answer:
          "Un ralentissement peut venir de la fatigue, du surentraînement, du manque de sommeil, de la déshydratation, du terrain ou d'une récupération insuffisante.",
      },
    ],
  },
  it: {
    title: "FAQ Calcolatore ritmo di corsa",
    items: [
      {
        question: "Cos'è il ritmo di corsa?",
        answer:
          "Il ritmo di corsa è il tempo necessario per percorrere una certa distanza, di solito espresso in minuti per chilometro o per miglio.",
      },
      {
        question: "Come calcolo il mio ritmo di corsa?",
        answer:
          "Per calcolare il ritmo, dividi il tempo totale di corsa per la distanza percorsa. Puoi anche usare il calcolatore FindYourPace per risultati immediati.",
      },
      {
        question: "Qual è un buon ritmo di corsa per i principianti?",
        answer:
          "Un buon ritmo per principianti è in genere tra 7:00 e 9:00 min/km (11:00–14:30 per miglio), in base a forma fisica ed esperienza.",
      },
      {
        question: "Come converto il ritmo di corsa in velocità?",
        answer:
          "Puoi convertire il ritmo in velocità calcolando quanti chilometri o miglia percorri all'ora. App e calcolatori di corsa di solito mostrano entrambi i valori.",
      },
      {
        question: "Quanto tempo ci vuole per correre un 5K?",
        answer:
          "Il tempo medio di un 5K varia tra 20 e 40 minuti in base a ritmo, livello di allenamento, età ed esperienza.",
      },
      {
        question: "Quanto tempo ci vuole per correre una maratona?",
        answer:
          "I tempi di maratona variano molto; la maggior parte dei runner la completa tra le 3 e le 5 ore in base a ritmo e resistenza.",
      },
      {
        question: "Che ritmo serve per un 5K sotto i 30 minuti?",
        answer:
          "Per finire un 5K in meno di 30 minuti devi mantenere un ritmo inferiore a 6:00 min/km (9:39 per miglio).",
      },
      {
        question: "Per i runner è meglio il ritmo o la velocità?",
        answer:
          "Il ritmo è più usato dai runner perché è più facile gestire sforzo e strategia di gara; la velocità è più comune in ciclismo e nell'analisi su pista.",
      },
      {
        question: "Come posso migliorare il mio ritmo di corsa?",
        answer:
          "Puoi migliorare il ritmo con interval training, corse a ritmo medio, potenziamento, recupero adeguato e chilometraggio settimanale costante.",
      },
      {
        question: "Perché il mio ritmo di corsa sta rallentando?",
        answer:
          "Un ritmo più lento può dipendere da affaticamento, overtraining, sonno insufficiente, disidratazione, tipo di terreno o scarsa recuperazione.",
      },
    ],
  },
  "pt-BR": {
    title: "FAQ Calculadora de pace de corrida",
    items: [
      {
        question: "O que é pace de corrida?",
        answer:
          "Pace de corrida é o tempo que você leva para percorrer uma distância específica, geralmente em minutos por quilômetro ou por milha.",
      },
      {
        question: "Como calcular meu pace de corrida?",
        answer:
          "Para calcular o pace, divida o tempo total da corrida pela distância percorrida. Você também pode usar a calculadora FindYourPace para obter o resultado na hora.",
      },
      {
        question: "Qual é um bom pace de corrida para iniciantes?",
        answer:
          "Um bom pace para iniciantes costuma ficar entre 7:00 e 9:00 min/km (11:00–14:30 por milha), dependendo do condicionamento e da experiência.",
      },
      {
        question: "Como converter pace de corrida em velocidade?",
        answer:
          "Você converte pace em velocidade calculando quantos quilômetros ou milhas você corre por hora. Apps e calculadoras de corrida costumam mostrar os dois.",
      },
      {
        question: "Quanto tempo leva para correr 5K?",
        answer:
          "O tempo médio de um 5K varia de 20 a 40 minutos conforme o pace, nível de treino, idade e experiência.",
      },
      {
        question: "Quanto tempo leva para correr uma maratona?",
        answer:
          "Os tempos de maratona variam muito; a maioria dos corredores termina entre 3 e 5 horas, dependendo do pace e do condicionamento.",
      },
      {
        question: "Que pace preciso para um 5K em menos de 30 minutos?",
        answer:
          "Para terminar um 5K em menos de 30 minutos é preciso manter um pace mais rápido que 6:00 min/km (9:39 por milha).",
      },
      {
        question: "Pace ou velocidade: o que é melhor para corredores?",
        answer:
          "O pace é mais usado por corredores porque facilita controlar o esforço e a estratégia de prova; a velocidade é mais comum no ciclismo e na análise de pista.",
      },
      {
        question: "Como posso melhorar meu pace de corrida?",
        answer:
          "Dá para melhorar o pace com treinos intervalados, corridas em ritmo controlado, fortalecimento, recuperação adequada e quilometragem semanal consistente.",
      },
      {
        question: "Por que meu pace de corrida está ficando mais lento?",
        answer:
          "Um pace mais lento pode ser causado por fadiga, overtraining, sono ruim, desidratação, tipo de terreno ou falta de recuperação.",
      },
    ],
  },
  ja: {
    title: "ランニングペース計算機 よくある質問",
    items: [
      {
        question: "ランニングペースとは？",
        answer:
          "ランニングペースは、一定の距離を走るのにかかる時間で、通常は1キロまたは1マイルあたりの分数で表します。",
      },
      {
        question: "ランニングペースはどう計算しますか？",
        answer:
          "走った合計時間を走行距離で割るとペースが出ます。FindYourPaceの計算機を使えばすぐに結果が得られます。",
      },
      {
        question: "初心者に適したランニングペースは？",
        answer:
          "初心者なら通常1キロ7:00〜9:00分（1マイル11:00〜14:30分）程度が目安で、体力や経験で変わります。",
      },
      {
        question: "ランニングペースを速度に換算するには？",
        answer:
          "1時間で何キロ（またはマイル）走るかを計算すると速度になります。ランニングアプリや計算機では両方表示されることが多いです。",
      },
      {
        question: "5Kを走るのにどのくらいかかりますか？",
        answer:
          "5Kの平均タイムはペース・トレーニングレベル・年齢・経験により20〜40分程度です。",
      },
      {
        question: "マラソンを走るのにどのくらいかかりますか？",
        answer:
          "マラソンのタイムは人により大きく異なりますが、多くのランナーはペースと持久力に応じて3〜5時間で完走します。",
      },
      {
        question: "5Kを30分以内で走るにはどのペースが必要ですか？",
        answer:
          "5Kを30分以内で走るには、1キロ6:00分（1マイル9:39分）より速いペースを維持する必要があります。",
      },
      {
        question: "ランナーにはペースと速度のどちらが向いていますか？",
        answer:
          "ランナーはペースの方がよく使われます。負荷やレース戦略を組み立てやすいためです。速度は自転車やトラック分析でよく使われます。",
      },
      {
        question: "ランニングペースを上げるには？",
        answer:
          "インターバル走、ペース走、筋トレ、十分な回復、そして毎週の走行距離を安定させることでペースを上げられます。",
      },
      {
        question: "ランニングペースが遅くなるのはなぜですか？",
        answer:
          "ペースが落ちる原因には、疲労、オーバートレーニング、睡眠不足、脱水、コースの変化、回復不足などがあります。",
      },
    ],
  },
  de: {
    title: "Lauf-Pace-Rechner FAQ",
    items: [
      {
        question: "Was ist Lauf-Pace?",
        answer:
          "Lauf-Pace ist die Zeit, die du für eine bestimmte Strecke brauchst, meist in Minuten pro Kilometer oder pro Meile angegeben.",
      },
      {
        question: "Wie berechne ich meinen Lauf-Pace?",
        answer:
          "Teile die Gesamtlaufzeit durch die gelaufene Strecke. Du kannst auch den FindYourPace-Rechner nutzen und sofort ein Ergebnis bekommen.",
      },
      {
        question: "Was ist ein guter Lauf-Pace für Einsteiger?",
        answer:
          "Ein guter Pace für Einsteiger liegt typischerweise zwischen 7:00 und 9:00 Min./km (11:00–14:30 pro Meile), je nach Fitness und Erfahrung.",
      },
      {
        question: "Wie rechne ich Lauf-Pace in Geschwindigkeit um?",
        answer:
          "Berechne, wie viele Kilometer oder Meilen du pro Stunde läufst. Lauf-Apps und Rechner zeigen meist beides an.",
      },
      {
        question: "Wie lange braucht man für einen 5K?",
        answer:
          "Die durchschnittliche 5K-Zeit liegt je nach Pace, Trainingsstand, Alter und Erfahrung zwischen 20 und 40 Minuten.",
      },
      {
        question: "Wie lange braucht man für einen Marathon?",
        answer:
          "Marathon-Zeiten variieren stark; die meisten Läufer liegen je nach Pace und Ausdauer zwischen 3 und 5 Stunden.",
      },
      {
        question: "Welchen Pace brauche ich für einen 5K unter 30 Minuten?",
        answer:
          "Für einen 5K unter 30 Minuten musst du schneller als 6:00 Min./km (9:39 pro Meile) laufen.",
      },
      {
        question: "Pace oder Geschwindigkeit – was ist besser für Läufer?",
        answer:
          "Pace wird von Läufern häufiger genutzt, weil sich damit Anstrengung und Renntaktik besser steuern lassen; Geschwindigkeit ist eher im Radsport und in der Bahnanalyse üblich.",
      },
      {
        question: "Wie kann ich meinen Lauf-Pace verbessern?",
        answer:
          "Pace verbesserst du durch Intervalltraining, Tempoläufe, Krafttraining, ausreichende Erholung und konstanten wöchentlichen Umfang.",
      },
      {
        question: "Warum wird mein Lauf-Pace langsamer?",
        answer:
          "Ein langsamerer Pace kann an Müdigkeit, Übertraining, schlechtem Schlaf, Dehydrierung, Gelände oder zu wenig Erholung liegen.",
      },
    ],
  },
  nl: {
    title: "FAQ Hardlooptempo-calculator",
    items: [
      {
        question: "Wat is hardlooptempo?",
        answer:
          "Hardlooptempo is de tijd die je nodig hebt om een bepaalde afstand te lopen, meestal uitgedrukt in minuten per kilometer of per mijl.",
      },
      {
        question: "Hoe bereken ik mijn hardlooptempo?",
        answer:
          "Deel je totale looptijd door de afgelegde afstand. Je kunt ook de FindYourPace-calculator gebruiken voor directe resultaten.",
      },
      {
        question: "Wat is een goed hardlooptempo voor beginners?",
        answer:
          "Een goed tempo voor beginners ligt meestal tussen 7:00 en 9:00 min/km (11:00–14:30 per mijl), afhankelijk van conditie en ervaring.",
      },
      {
        question: "Hoe zet ik hardlooptempo om in snelheid?",
        answer:
          "Bereken hoeveel kilometer of mijl je per uur loopt. Hardloopapps en rekenmachines tonen vaak beide waarden.",
      },
      {
        question: "Hoe lang duurt het om 5K te lopen?",
        answer:
          "De gemiddelde 5K-tijd ligt tussen 20 en 40 minuten, afhankelijk van tempo, trainingsniveau, leeftijd en ervaring.",
      },
      {
        question: "Hoe lang duurt het om een marathon te lopen?",
        answer:
          "Marathontijden lopen uiteen; de meeste lopers finishen tussen 3 en 5 uur, afhankelijk van tempo en uithoudingsvermogen.",
      },
      {
        question: "Welk tempo voor een 5K onder 30 minuten?",
        answer:
          "Voor een 5K onder 30 minuten moet je sneller dan 6:00 min/km (9:39 per mijl) lopen.",
      },
      {
        question: "Tempo of snelheid: wat is beter voor lopers?",
        answer:
          "Tempo wordt vaker gebruikt door lopers omdat het makkelijker is om inspanning en wedstrijdstrategie te sturen; snelheid is gebruikelijker in wielrennen en baananalyse.",
      },
      {
        question: "Hoe kan ik mijn hardlooptempo verbeteren?",
        answer:
          "Verbeter je tempo met intervaltraining, tempoloopjes, krachttraining, goed herstel en een constant wekelijks aantal kilometers.",
      },
      {
        question: "Waarom wordt mijn hardlooptempo langzamer?",
        answer:
          "Een langzamer tempo kan komen door vermoeidheid, overtraining, slecht slapen, uitdroging, ander terrein of te weinig herstel.",
      },
    ],
  },
  pl: {
    title: "FAQ Kalkulator tempa biegu",
    items: [
      {
        question: "Co to jest tempo biegu?",
        answer:
          "Tempo biegu to czas potrzebny na pokonanie danego dystansu, zwykle w minutach na kilometr lub na milę.",
      },
      {
        question: "Jak obliczyć moje tempo biegu?",
        answer:
          "Podziel łączny czas biegu przez pokonany dystans. Możesz też skorzystać z kalkulatora FindYourPace, żeby od razu uzyskać wynik.",
      },
      {
        question: "Jakie tempo biegu jest dobre dla początkujących?",
        answer:
          "Dobre tempo dla początkujących to zwykle 7:00–9:00 min/km (11:00–14:30 na milę), w zależności od formy i doświadczenia.",
      },
      {
        question: "Jak przeliczyć tempo biegu na prędkość?",
        answer:
          "Oblicz, ile kilometrów lub mil przebiegasz w godzinę. Aplikacje i kalkulatory do biegania zwykle pokazują obie wartości.",
      },
      {
        question: "Ile trwa przebiegnięcie 5K?",
        answer:
          "Średni czas 5K to 20–40 minut w zależności od tempa, poziomu treningu, wieku i doświadczenia.",
      },
      {
        question: "Ile trwa przebiegnięcie maratonu?",
        answer:
          "Czasy maratonów są bardzo zróżnicowane; większość biegaczy kończy między 3 a 5 godzin, w zależności od tempa i wytrzymałości.",
      },
      {
        question: "Jakie tempo do 5K w poniżej 30 minut?",
        answer:
          "Żeby przebiec 5K w poniżej 30 minut, musisz utrzymać tempo szybsze niż 6:00 min/km (9:39 na milę).",
      },
      {
        question: "Tempo czy prędkość – co lepsze dla biegaczy?",
        answer:
          "Biegacze częściej używają tempa, bo łatwiej planować wysiłek i taktykę; prędkość jest częstsza w kolarstwie i analizie na bieżni.",
      },
      {
        question: "Jak mogę poprawić tempo biegu?",
        answer:
          "Poprawisz tempo dzięki treningom interwałowym, biegom tempowym, treningowi siłowemu, odpowiedniej regeneracji i stałemu tygodniowemu kilometrażowi.",
      },
      {
        question: "Dlaczego moje tempo biegu się spowalnia?",
        answer:
          "Wolniejsze tempo może wynikać z zmęczenia, przetrenowania, złego snu, odwodnienia, zmiany nawierzchni lub braku regeneracji.",
      },
    ],
  },
  sv: {
    title: "FAQ Löptempokalkylator",
    items: [
      {
        question: "Vad är löptempo?",
        answer:
          "Löptempo är den tid det tar att springa en viss sträcka, vanligtvis uttryckt i minuter per kilometer eller per engelsk mil.",
      },
      {
        question: "Hur beräknar jag mitt löptempo?",
        answer:
          "Dela din totala springtid med den sprungna sträckan. Du kan också använda FindYourPace-kalkylatorn för resultat direkt.",
      },
      {
        question: "Vad är ett bra löptempo för nybörjare?",
        answer:
          "Ett bra tempo för nybörjare ligger oftast mellan 7:00 och 9:00 min/km (11:00–14:30 per engelsk mil), beroende på kondition och erfarenhet.",
      },
      {
        question: "Hur konverterar jag löptempo till hastighet?",
        answer:
          "Beräkna hur många kilometer eller engelska mil du springer per timme. Löpappar och kalkylatorer visar oftast båda värdena.",
      },
      {
        question: "Hur lång tid tar det att springa 5K?",
        answer:
          "Medel tiden för 5K är 20–40 minuter beroende på tempo, träningsnivå, ålder och erfarenhet.",
      },
      {
        question: "Hur lång tid tar det att springa ett maraton?",
        answer:
          "Maratontider varierar mycket; de flesta löpare fullföljer mellan 3 och 5 timmar beroende på tempo och uthållighet.",
      },
      {
        question: "Vilket tempo behövs för 5K under 30 minuter?",
        answer:
          "För att springa 5K på under 30 minuter behöver du hålla ett tempo snabbare än 6:00 min/km (9:39 per engelsk mil).",
      },
      {
        question: "Är tempo eller hastighet bättre för löpare?",
        answer:
          "Tempo används oftare av löpare eftersom det är lättare att styra ansträngning och tävlingsstrategi; hastighet är vanligare inom cykling och bana.",
      },
      {
        question: "Hur kan jag förbättra mitt löptempo?",
        answer:
          "Du kan förbättra tempot med intervallträning, tempolöpning, styrketräning, ordentlig återhämtning och konsekvent veckovolat.",
      },
      {
        question: "Varför blir mitt löptempo långsammare?",
        answer:
          "Långsammare tempo kan bero på trötthet, överträning, dålig sömn, uttorkning, underlagsändringar eller brist på återhämtning.",
      },
    ],
  },
};
