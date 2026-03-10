# Find Your Pace — v1.0.0

<!-- Título sugerido para a Release no GitHub: "v1.0.0 – Primeira release estável" -->

**Find your pace. Win your race.** Calculadora de ritmo (pace) para corredores, com blog e suporte a vários idiomas.

---

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4**, **Radix UI** / **shadcn**, **next-themes**
- **Vercel**: deploy (produção + preview), Analytics, Speed Insights
- **Google AdSense**: anúncios (placeholders preparados)
- Conteúdo do blog em **Markdown/MDX** (gray-matter, react-markdown)

---

## Funcionalidades

### Calculadora de pace (página principal)

- **Três modos** em abas: **Pace** (tempo por distância), **Tempo** (prever tempo de prova), **Distância** (distância em um tempo).
- **Unidades**: milhas, quilômetros, metros; pace em min/mi, min/km; velocidade em mph, km/h, m/min, m/s.
- **Idioma**: unidades padrão por locale (ex.: EN → milhas, demais → km).
- **Tabela de tempo por pace**: consulta rápida (tempo total por distância e ritmo).
- **FAQ** em accordion, traduzido por idioma.
- Layout responsivo: banners de ads no mobile; sidebars no desktop.

### Páginas auxiliares da calculadora

- **`/[locale]/time`** — Preditor de tempo (foco em tempo de prova).
- **`/[locale]/distance`** — Calculadora de distância (foco em distância no tempo dado).

### Blog

- **Listagem** por locale: `/[locale]/blog` com posts e blocos de ads.
- **Post** individual: `/[locale]/blog/[slug]` com conteúdo em Markdown, imagem, autor, data; ads inline (antes do 2.º H2) e no final; **3 posts relacionados** (aleatórios determinísticos) no final.
- Conteúdo em **10 idiomas** (pastas em `content/blog/{locale}/`): EN, ES, FR, DE, PT, IT, JA, NL, PL, SV.
- Títulos e meta (SEO) por post e por locale.

### Navegação e layout

- **Header** responsivo: menu mobile (Sheet), menu desktop (NavigationMenu).
- **Calculadoras** (menu): Calculadora de Pace, Preditor de Tempo, Zonas de Treino, Splits, Calorias, Conversor de Unidade — com badge “Em breve” nas que ainda não têm página.
- **Tabelas** (menu): Tabela tempo por pace, Splits, Ritmos de treino, Equivalências — com badge “Em breve” onde aplicável.
- **Blog** e **Política de privacidade** no menu e no footer.
- **Footer** global: “Copyright © {ano} Find your pace. Win your race · Privacy Policy”.
- **Tema** claro/escuro e **troca de idioma** (10 locales) persistidos.

### Internacionalização (i18n)

- **10 locales**: EN, ES, FR, DE, PT-BR, IT, JA, NL, PL, SV.
- URLs por locale: `/[locale]/...` (ex.: `/pt`, `/en`, `/ja`).
- Traduções centralizadas em `src/lib/i18n.ts` (meta, UI, calculadora, blog, FAQ, privacidade).
- SEO: `alternates.canonical`, `alternates.languages`, Open Graph, Twitter cards.

### Política de privacidade

- Página **`/[locale]/privacy`** com conteúdo traduzido (títulos e seções) em todos os locales.

### Ads e monetização

- **Placeholders** de AdSense (componente `AdPlaceholder`): inline mobile (320×100 e 300×600), sidebars desktop.
- Script e meta do AdSense no layout; `public/ads.txt` configurado.
- Banners integrados na calculadora, no blog (listagem e post) com espaçamento e `not-prose` onde necessário.

### Performance e métricas

- **Vercel Analytics** e **Speed Insights** no layout.
- Otimizações: fontes com `display: swap`, reserva de espaço para ads/imagens, `content-visibility` em seções abaixo da dobra, `fetchPriority="high"` em imagens críticas.
- Hidratação: `suppressHydrationWarning` em Button e NavigationMenuTrigger (Radix) para evitar mismatch de atributos.

### Outros

- **Favicon**: emoji de corredor (SVG).
- **Ambientes**: Local, Preview (branch `preview`), Production (branch `main`), conforme README.

---

## Estrutura de rotas (por locale)

| Rota | Conteúdo |
|------|----------|
| `/[locale]` | Calculadora principal (pace / tempo / distância), tabela, FAQ, ads |
| `/[locale]/time` | Preditor de tempo |
| `/[locale]/distance` | Calculadora de distância |
| `/[locale]/blog` | Listagem do blog |
| `/[locale]/blog/[slug]` | Post do blog |
| `/[locale]/privacy` | Política de privacidade |

---

## Versão

- **v1.0.0** — Primeira release estável com calculadora, blog multidioma, ads, privacidade e deploy (main = production, preview = preview).
