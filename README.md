# Find Your Pace

**Find your pace. Win your race.**

---

## O projeto

Find Your Pace é uma aplicação web para **corredores**: calcula ritmo (pace), tempo de prova e distância, traz tabelas de referência e um blog com dicas em vários idiomas. Tudo com tema claro/escuro e suporte a **10 idiomas**.

Ideal para quem treina por pace, planeja provas ou quer converter entre unidades (min/km, min/mi, km/h, etc.).

---

## O que oferece

| Funcionalidade | Descrição |
|----------------|-----------|
| **Calculadora de pace** | Três modos em abas: ritmo (tempo por distância), tempo de prova (previsão) e distância (em um tempo dado). Unidades: milhas, km, metros; pace em min/mi ou min/km; velocidade em mph, km/h, m/min, m/s. |
| **Tabela de tempo por pace** | Consulta rápida: tempo total por distância e ritmo. |
| **Blog** | Artigos em Markdown, em 10 idiomas (EN, ES, FR, DE, PT, IT, JA, NL, PL, SV), com posts relacionados e layout responsivo. |
| **Navegação** | Menu com calculadoras e tabelas (itens “em breve” sinalizados), link para o blog e política de privacidade. Header responsivo (mobile e desktop) e footer global. |
| **Idioma e tema** | Troca de idioma e tema claro/escuro persistidos; URLs por locale (ex.: `/pt`, `/en`, `/ja`). |
| **Privacidade** | Página de política de privacidade traduzida em todos os locales. |

---

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4**, **Radix UI** / **shadcn**, **next-themes**
- Conteúdo do blog em **Markdown/MDX** (gray-matter, react-markdown)
- **Vercel**: deploy (produção + preview), Analytics, Speed Insights
- **Google AdSense**: placeholders preparados (inline e sidebars)

---

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000); a app redireciona para o locale padrão.

```bash
npm run build    # build para produção
npm run start    # rodar o build localmente
npm run lint     # lint
```

---

## Rotas (por locale)

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
├── public/                  # Favicon, ads.txt, og.png, etc.
├── src/
│   ├── app/[locale]/        # Rotas por locale
│   ├── components/          # Header, footer, calculadora, ads, UI
│   └── lib/                  # i18n, blog, calculator-utils
├── release-notes-v1.0.0.md
└── package.json
```

---

## Deploy (Vercel)

| Ambiente | Uso | Como |
|----------|-----|------|
| **Local** | Desenvolvimento | `npm run dev` |
| **Preview** | Testes antes de produção | Branch `preview` (deploy automático na Vercel) |
| **Production** | Site público | Branch `main` (merge na `main` = deploy de produção) |

- **`main`** = produção  
- **`preview`** = preview; para manter alinhada à produção: merge da `main` na `preview` após cada release.

CLI opcional: `npm i -g vercel` → `vercel link` → `vercel` (preview) / `vercel --prod` (produção).

---

## Versão

**v1.0.0** — Primeira release estável. Ver `release-notes-v1.0.0.md` para detalhes.

---

## Referências

- [Next.js](https://nextjs.org/docs) · [Vercel](https://vercel.com/docs) · [Tailwind CSS](https://tailwindcss.com/docs)
