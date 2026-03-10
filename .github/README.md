# GitHub

## Release v1 e Labels (setup inicial)

Para criar a **Release v1.0.0** e as **labels** do repositório:

### Opção 1 – Pela interface do GitHub (recomendado)

1. **Release:** Em [Releases](https://github.com/jerebaptista/find-your-pace/releases) → **Draft a new release** → Tag: `v1.0.0` → Título: `v1.0.0 - Primeira release estável` → Cole o conteúdo de `release-notes-v1.0.0.md` em *Describe this release* → **Publish release**.

2. **Labels:** Em **Issues** → **Labels** → **New label**. Criar, por exemplo:
   - `area: calculadora` (azul), `area: blog`, `area: i18n`, `area: layout`, `area: ads`
   - `tipo: componente`, `tipo: funcionalidade`, `documentação`

### Opção 2 – Workflow (Actions)

Em **Actions** → **Create release and labels** → **Run workflow**.  
Cria a release (se a tag `v1.0.0` existir) e as labels via API.

### Opção 3 – Script local (PowerShell)

Defina um token com escopo `repo`:  
`$env:GITHUB_TOKEN = "seu_token"`  

Depois execute:  
`.\.github\create-release-and-labels.ps1`
