# Create GitHub Release v1.0.0 and repository labels.
# Requires: $env:GITHUB_TOKEN with repo scope (or GitHub Actions provides it).
# Run: .\.github\create-release-and-labels.ps1

$ErrorActionPreference = "Stop"
$owner = "jerebaptista"
$repo = "find-your-pace"
$baseUrl = "https://api.github.com/repos/$owner/$repo"
$headers = @{
    "Accept"        = "application/vnd.github+json"
    "Authorization" = "Bearer $env:GITHUB_TOKEN"
    "X-GitHub-Api-Version" = "2022-11-28"
}

if (-not $env:GITHUB_TOKEN) {
    Write-Host "GITHUB_TOKEN nao definido. Defina com: `$env:GITHUB_TOKEN = 'seu_token'" -ForegroundColor Yellow
    Write-Host "Ou crie a release e as labels manualmente no GitHub." -ForegroundColor Yellow
    exit 1
}

# --- Release v1.0.0 ---
$notesPath = Join-Path $PSScriptRoot "..\release-notes-v1.0.0.md"
$body = ""
if (Test-Path $notesPath) {
    $body = (Get-Content $notesPath -Raw) -replace '<!--.*?-->', '' -replace '\r\n', "`n"
}
$releasePayload = @{
    tag_name = "v1.0.0"
    name     = "v1.0.0 - Primeira release estavel"
    body     = $body.Trim()
} | ConvertTo-Json -Depth 10 -Compress

try {
    $release = Invoke-RestMethod -Uri "$baseUrl/releases" -Method Post -Headers $headers -Body $releasePayload -ContentType "application/json; charset=utf-8"
    Write-Host "Release criada: $($release.html_url)" -ForegroundColor Green
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 422) {
        Write-Host "Release v1.0.0 ja existe ou tag nao encontrada. Ignorando." -ForegroundColor Yellow
    } else { throw }
}

# --- Labels (areas + tipos) ---
$labels = @(
    @{ name = "area: calculadora"; color = "1d76db"; description = "Calculadora de pace, tempo, distancia" }
    @{ name = "area: blog"; color = "bfd4f2"; description = "Blog e posts" }
    @{ name = "area: i18n"; color = "0e8a16"; description = "Traducoes e locales" }
    @{ name = "area: layout"; color = "fbca04"; description = "Header, footer, navegacao" }
    @{ name = "area: ads"; color = "d93f0b"; description = "AdSense e placeholders" }
    @{ name = "tipo: componente"; color = "c5def5"; description = "Componentes UI e paginas" }
    @{ name = "tipo: funcionalidade"; color = "a2eeef"; description = "Funcionalidades e features" }
    @{ name = "documentacao"; color = "ededed"; description = "README, release notes, docs" }
)

foreach ($label in $labels) {
    try {
        $payload = @{ name = $label.name; color = $label.color; description = $label.description } | ConvertTo-Json -Compress
        Invoke-RestMethod -Uri "$baseUrl/labels" -Method Post -Headers $headers -Body $payload -ContentType "application/json; charset=utf-8" | Out-Null
        Write-Host "Label criada: $($label.name)" -ForegroundColor Green
    } catch {
        if ($_.Exception.Response.StatusCode.value__ -eq 422) {
            Write-Host "Label '$($label.name)' ja existe. Ignorando." -ForegroundColor Yellow
        } else { throw }
    }
}

Write-Host "Concluido." -ForegroundColor Green
