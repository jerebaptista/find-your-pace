# Find Your Pace

**Find your pace. Win your race.**

Calculadora de ritmo (pace) para corredores, com blog em vários idiomas, tabelas de referência e tema claro/escuro.

---

## Stack

| Área | Tecnologia |
|------|------------|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Estilo | Tailwind CSS 4, Radix UI / shadcn, next-themes |
| Conteúdo | Markdown/MDX (gray-matter, react-markdown) |
| Deploy & métricas | Vercel (Analytics, Speed Insights), Google AdSense |

---

## Começando

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). A app redireciona para o locale padrão (ex.: `/en`).

```bash
# Build para produção
npm run build

# Rodar build localmente
npm run start

# Lint
npm run lint
```

---

## O que o projeto tem

### Calculadora de pace (página principal)

- **Três modos** em abas: **Pace** (tempo por distância), **Tempo** (prever tempo de prova), **Distância** (distância em um tempo).
- **Unidades**: milhas, km, metros; pace em min/mi, min/km; velocidade em mph, km/h, m/min, m/s (padrão por idioma).
- **Tabela de tempo por pace** para consulta rápida.
- **FAQ** em accordion, traduzido por locale.
- Páginas dedicadas: `/[locale]/time` (preditor de tempo), `/[locale]/distance` (distância).

### Blog

- Listagem em `/[locale]/blog` e post em `/[locale]/blog/[slug]`.
- Conteúdo em Markdown por locale em `content/blog/{locale}/`.
- **10 idiomas**: EN, ES, FR, DE, PT, IT, JA, NL, PL, SV.
- Posts relacionados no final de cada post; ads inline e no final (mobile).

### Navegação e layout

- **Header** responsivo: menu mobile (Sheet) e menu desktop (NavigationMenu).
- **Menu Calculadoras**: Pace, Preditor de Tempo, Zonas de Treino, Splits, Calorias, Conversor — com badge “Em breve” nas que ainda não têm página.
- **Menu Tabelas**: Tempo por pace, Splits, Ritmos de treino, Equivalências — com badge “Em breve” onde aplicável.
- **Blog** e **Política de privacidade** no menu e no **footer** global.
- **Tema** claro/escuro e **idioma** (10 locales) persistidos.

### Internacionalização (i18n)

- URLs por locale: `/[locale]/...` (ex.: `/pt`, `/en`, `/ja`).
- Traduções em `src/lib/i18n.ts`.
- SEO: canonical, alternates por idioma, Open Graph, Twitter cards.

### Outros

- **Política de privacidade**: `/[locale]/privacy` traduzida em todos os locales.
- **AdSense**: placeholders (inline mobile e sidebars desktop), script e `public/ads.txt`.
- **Favicon**: emoji de corredor (SVG).

---

## Estrutura de rotas (por locale)

| Rota | Conteúdo |
|------|----------|
| `/[locale]` | Calculadora principal (pace / tempo / distância), tabela, FAQ |
| `/[locale]/time` | Preditor de tempo |
| `/[locale]/distance` | Calculadora de distância |
| `/[locale]/blog` | Listagem do blog |
| `/[locale]/blog/[slug]` | Post do blog |
| `/[locale]/privacy` | Política de privacidade |

---

## Estrutura do repositório

```
├── content/blog/{locale}/   # Posts em Markdown/MDX por idioma
├── public/                   # Favicon, ads.txt, og.png, etc.
├── src/
│   ├── app/
│   │   ├── [locale]/         # Rotas por locale (page, time, distance, blog, privacy)
│   │   ├── layout.tsx        # Root layout (fontes, AdSense, Analytics, Speed Insights)
│   │   └── page.tsx         # Redirecionamento
│   ├── components/          # Header, footer, calculadora, ads, UI (shadcn)
│   └── lib/                  # i18n, blog, calculator-utils
├── release-notes-v1.0.0.md  # Notas da release v1.0.0
└── package.json
```

---

## Ambientes (Local, Preview, Production)

O projeto usa os três ambientes da [Vercel](https://vercel.com/docs/deployments/environments):

| Ambiente | Uso | Como usar |
|----------|-----|-----------|
| **Local** | Desenvolver e testar no PC | `npm run dev` → [http://localhost:3000](http://localhost:3000) |
| **Preview** | Testar sem afetar produção | Push/PR na branch `preview` (ou outra não-produção); deploy automático na Vercel |
| **Production** | Site público | Branch `main` = produção; merge na `main` dispara deploy de produção |

### Branches

- **`main`** — Produção. Todo commit/push na `main` atualiza o site em produção.
- **`preview`** — Preview. Deploys de preview na Vercel. Para manter alinhada com a produção: fazer merge da `main` na `preview` após cada release.

### CLI Vercel (opcional)

```bash
npm i -g vercel
vercel link
vercel          # deploy de preview
vercel --prod   # deploy de produção
```

---

## Versão

- **v1.0.0** — Primeira release estável. Detalhes em `release-notes-v1.0.0.md`.

---

## Referências

- [Next.js](https://nextjs.org/docs)
- [Vercel](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
