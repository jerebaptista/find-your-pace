# Fluxo de publicação do blog

## Regras

- **Idioma de origem:** inglês. O post é gerado primeiro em inglês.
- **Slug da URL:** derivado do **título em inglês**, sem data. Ex.: "Best sports bras in 2026" → `best-sports-bras`.
- **URL:** `findyourpace.app/{locale}/blog/{slug}`  
  Ex.: `findyourpace.app/pt/blog/best-sports-bras` (conteúdo em PT), `findyourpace.app/en/blog/best-sports-bras` (conteúdo em EN).

## Diagrama do fluxo

```mermaid
flowchart TB
  subgraph input["Entrada"]
    R[Reddit r/running · hot]
    F[Fallback: temas fixos]
  end

  subgraph generate["Geração (EN)"]
    R --> C
    F --> C
    C[Contexto: títulos ou tema do dia]
    C --> GPT[OpenAI: gerar post em inglês]
    GPT --> SEO[SEO: título, description, corpo]
    SEO --> SLUG[Slug = título EN slugificado, sem data]
    SLUG --> FILE_EN[Arquivo EN: content/blog/en/{slug}.mdx]
  end

  subgraph translate["Tradução"]
    FILE_EN --> T9[Traduzir para os outros 9 idiomas]
    T9 --> FILES[content/blog/{locale}/{slug}.mdx]
    FILES --> LOCALES[es, fr, it, pt, ja, de, nl, pl, sv]
  end

  subgraph publish["Publicação"]
    FILE_EN --> GIT
    LOCALES --> GIT
    GIT[git add content/blog/]
    GIT --> COMMIT[commit + push]
  end

  style SLUG fill:#e1f5fe
  style FILE_EN fill:#e8f5e9
  style FILES fill:#e8f5e9
```

## Resumo por etapa

| # | Etapa | Saída |
|---|--------|--------|
| 1 | Buscar temas | Reddit r/running (hot) ou lista fixa |
| 2 | Gerar post em inglês | Título EN, description, corpo Markdown (com SEO) |
| 3 | Definir slug | Do título em inglês, sem data. Ex.: `best-sports-bras` |
| 4 | Salvar post EN | `content/blog/en/{slug}.mdx` |
| 5 | Traduzir | 9 arquivos: `content/blog/{locale}/{slug}.mdx` (es, fr, it, pt, ja, de, nl, pl, sv) |
| 6 | Publicar | Commit + push de `content/blog/` |

## Exemplo de URL e arquivos

**Título (EN):** "Best sports bras in 2026"  
**Slug:** `best-sports-bras`

**URLs:**
- findyourpace.app/en/blog/best-sports-bras
- findyourpace.app/pt/blog/best-sports-bras
- findyourpace.app/es/blog/best-sports-bras
- … (demais locales)

**Arquivos (a criar):**
- `content/blog/en/best-sports-bras.mdx`
- `content/blog/pt/best-sports-bras.mdx`
- `content/blog/es/best-sports-bras.mdx`
- etc.

## Observação

A estrutura de pastas atual do blog é `content/blog/*.mdx` (um arquivo por post, sem pasta por idioma). Para esse fluxo será necessário migrar para `content/blog/{locale}/{slug}.mdx` e ajustar `src/lib/blog.ts` para aceitar `locale` e ler o arquivo correto por idioma.
