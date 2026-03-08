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
    SLUG --> IMG[Unsplash: imagem aleatória Running, horizontal]
    IMG --> FILE_EN[Arquivo EN: content/blog/en/{slug}.mdx com image no frontmatter]
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
| 4 | Buscar imagem | Unsplash: uma foto aleatória (query "Running", horizontal); URL no frontmatter `image` |
| 5 | Salvar post EN | `content/blog/en/{slug}.mdx` (com `image` se UNSPLASH_ACCESS_KEY estiver definida) |
| 6 | Traduzir | 9 arquivos: `content/blog/{locale}/{slug}.mdx` (mesma imagem em todos) |
| 7 | Publicar | Commit + push de `content/blog/` |

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

## Variáveis de ambiente (script e GitHub Action)

- **OPENAI_API_KEY** (obrigatória): chave da API OpenAI.
- **UNSPLASH_ACCESS_KEY** (opcional): Access Key da aplicação Unsplash. Se definida, o script busca uma foto horizontal (query "Running") e grava a URL no frontmatter `image` do post. No GitHub Actions, criar secret `UNSPLASH_ACCESS_KEY` com o valor do Access Key (não usar Secret Key no script).
