# ═══════════════════════════════════════════════════════════════
#  OSTP DevTool — GitHub Pages Deploy Script
#  scripts/deploy-gh.ps1
#  @echoShift · QUANTUM.qnu · Zapopan, Jalisco
#
#  REQUISITOS:
#  - Git instalado y configurado
#  - Repo remoto: ostp-echoshift/ostp-echoshift (o DirTreeGen)
#  - dist/ generado previamente con build.ps1
#  - GitHub Pages activado en rama gh-pages (o main/docs)
#
#  FLUJO:
#  1. Corre .\scripts\build.ps1 primero
#  2. Luego corre este script
# ═══════════════════════════════════════════════════════════════

$ROOT       = "C:\Proyectos\DirTreeGen"
$DIST       = "$ROOT\dist"
$REPO_URL   = "https://github.com/ostp-echoshift/ostp-echoshift.git"
$BRANCH     = "gh-pages"
$COMMIT_MSG = "deploy: OSTP DevTool v1.0 - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

function Write-OK   { param($m) Write-Host "  [OK]  $m" -ForegroundColor Green }
function Write-ERR  { param($m) Write-Host "  [ERR] $m" -ForegroundColor Red }
function Write-INFO { param($m) Write-Host "  [>>]  $m" -ForegroundColor Cyan }
function Write-WARN { param($m) Write-Host "  [!!]  $m" -ForegroundColor Yellow }

Clear-Host
Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Magenta
Write-Host "║   OSTP DevTool — GitHub Pages Deploy                 ║" -ForegroundColor Magenta
Write-Host "║   @echoShift · QUANTUM.qnu                           ║" -ForegroundColor Magenta
Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Magenta
Write-Host ""

# ── Verificar dist/ ────────────────────────────────────────────
Write-INFO "Verificando dist/..."
if (-not (Test-Path "$DIST\index.html")) {
    Write-ERR "dist/index.html no encontrado"
    Write-WARN "Corre primero: .\scripts\build.ps1"
    exit 1
}
Write-OK "dist/ encontrado"
Write-Host ""

# ── Verificar git ──────────────────────────────────────────────
Write-INFO "Verificando git..."
try {
    $gitVersion = git --version 2>&1
    Write-OK $gitVersion
} catch {
    Write-ERR "Git no encontrado — instala Git desde https://git-scm.com"
    exit 1
}
Write-Host ""

# ── Entrar al repo ─────────────────────────────────────────────
Set-Location $ROOT

# ── Verificar si ya existe el remote ──────────────────────────
Write-INFO "Verificando remote origin..."
$remotes = git remote 2>&1
if ($remotes -notcontains "origin") {
    Write-WARN "No hay remote 'origin'. Configurando..."
    git remote add origin $REPO_URL
    Write-OK "Remote agregado: $REPO_URL"
} else {
    Write-OK "Remote origin: OK"
}
Write-Host ""

# ── Crear/cambiar a rama gh-pages ──────────────────────────────
Write-INFO "Preparando rama $BRANCH..."

$branches = git branch -a 2>&1
if ($branches -match "gh-pages") {
    git checkout $BRANCH 2>&1 | Out-Null
    Write-OK "Rama $BRANCH existente — checkout"
} else {
    git checkout --orphan $BRANCH 2>&1 | Out-Null
    Write-OK "Rama $BRANCH creada (orphan)"
}
Write-Host ""

# ── Limpiar rama gh-pages ──────────────────────────────────────
Write-INFO "Limpiando rama $BRANCH..."
git rm -rf . --quiet 2>&1 | Out-Null
Write-OK "Rama limpia"
Write-Host ""

# ── Copiar dist/ a raíz ────────────────────────────────────────
Write-INFO "Copiando dist/ a rama $BRANCH..."
Copy-Item "$DIST\*" $ROOT -Recurse -Force
Write-OK "Archivos copiados"
Write-Host ""

# ── Crear .nojekyll (necesario para GitHub Pages con carpetas _) 
New-Item -ItemType File -Path "$ROOT\.nojekyll" -Force | Out-Null
Write-OK ".nojekyll creado"

# ── Git add + commit ───────────────────────────────────────────
Write-INFO "Commiteando..."
git add -A 2>&1 | Out-Null
git commit -m $COMMIT_MSG 2>&1 | Out-Null
Write-OK "Commit: $COMMIT_MSG"
Write-Host ""

# ── Push ───────────────────────────────────────────────────────
Write-INFO "Push a origin/$BRANCH..."
git push origin $BRANCH --force 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-OK "Push exitoso"
} else {
    Write-ERR "Push falló — verifica credenciales de GitHub"
    Write-WARN "Si es la primera vez: gh auth login"
}
Write-Host ""

# ── Volver a main ──────────────────────────────────────────────
git checkout main 2>&1 | Out-Null
Write-OK "De vuelta en rama main"
Write-Host ""

# ── Resultado ──────────────────────────────────────────────────
Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   DEPLOY COMPLETADO ✅                               ║" -ForegroundColor Green
Write-Host "╠══════════════════════════════════════════════════════╣" -ForegroundColor Green
Write-Host "║   URL: https://ostp-echoshift.github.io              ║" -ForegroundColor Cyan
Write-Host "║   (GitHub Pages puede tardar 1-2 min en actualizar)  ║" -ForegroundColor DarkGray
Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

#          ________________________________________
#      <!--████████████████ostp████████████████████-->