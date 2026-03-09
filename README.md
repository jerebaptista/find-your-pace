This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Ambientes (Local, Preview, Production)

O projeto usa os três ambientes da [Vercel](https://vercel.com/docs/deployments/environments):

| Ambiente | Uso | Como usar |
|----------|-----|-----------|
| **1. Local Development** | Desenvolver e testar no teu PC | `npm run dev` → [http://localhost:3000](http://localhost:3000) |
| **2. Preview** | Testar/QA sem afetar o site em produção | `vercel` (CLI) ou push/PR para uma branch que não seja a de produção |
| **3. Production** | Site público final | `vercel --prod` ou merge na branch de produção (ex.: `main`) |

### Pré-requisitos para Preview e Production (CLI)

```bash
npm i -g vercel
vercel link          # associar esta pasta ao projeto na Vercel
vercel env pull      # (opcional) trazer variáveis de ambiente para .env.local
```

### Comandos rápidos

```bash
# Local
npm run dev

# Preview (deploy de teste; URL temporário)
vercel

# Production (atualiza o site em produção)
vercel --prod
```

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
