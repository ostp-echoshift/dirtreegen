# ═══════════════════════════════════════════════════════════════
#  OSTP DevTool — Build Script
#  scripts/build.ps1
#  @echoShift · QUANTUM.qnu · Zapopan, Jalisco
#  Ejecutar desde: C:\Proyectos\DirTreeGen\
# ═══════════════════════════════════════════════════════════════

$ROOT  = "C:\Proyectos\DirTreeGen"
$DIST  = "$ROOT\dist"
$SRC   = "$ROOT\src"
$STYLE = "$ROOT\styles"
$ASSET = "$ROOT\assets"
$CONF  = "$ROOT\config"

# ── Colores de consola ─────────────────────────────────────────
function Write-OK   { param($m) Write-Host "  [OK]  $m" -ForegroundColor Green }
function Write-SKIP { param($m) Write-Host "  [--]  $m" -ForegroundColor DarkGray }
function Write-ERR  { param($m) Write-Host "  [ERR] $m" -ForegroundColor Red }
function Write-INFO { param($m) Write-Host "  [>>]  $m" -ForegroundColor Cyan }

Clear-Host
Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Magenta
Write-Host "║   OSTP DevTool — Build v1.0                          ║" -ForegroundColor Magenta
Write-Host "║   @echoShift · QUANTUM.qnu · Zapopan, Jalisco        ║" -ForegroundColor Magenta
Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Magenta
Write-Host ""

# ── 1. Limpiar dist ────────────────────────────────────────────
Write-INFO "Limpiando dist/..."
if (Test-Path $DIST) {
    Remove-Item -Recurse -Force $DIST
    Write-OK "dist/ eliminado"
}
New-Item -ItemType Directory -Path $DIST -Force | Out-Null
Write-OK "dist/ creado"
Write-Host ""

# ── 2. Copiar index.html ───────────────────────────────────────
Write-INFO "Copiando index.html..."
Copy-Item "$ROOT\index.html" "$DIST\index.html" -Force
Write-OK "index.html"
Write-Host ""

# ── 3. Copiar src/ ─────────────────────────────────────────────
Write-INFO "Copiando src/..."
Copy-Item $SRC "$DIST\src" -Recurse -Force
Write-OK "src/ → dist/src/"
Write-Host ""

# ── 4. Copiar styles/ ──────────────────────────────────────────
Write-INFO "Copiando styles/..."
Copy-Item $STYLE "$DIST\styles" -Recurse -Force
Write-OK "styles/ → dist/styles/"
Write-Host ""

# ── 5. Copiar assets/ ──────────────────────────────────────────
Write-INFO "Copiando assets/..."
Copy-Item $ASSET "$DIST\assets" -Recurse -Force
Write-OK "assets/ → dist/assets/"
Write-Host ""

# ── 6. Copiar config/ ──────────────────────────────────────────
Write-INFO "Copiando config/..."
Copy-Item $CONF "$DIST\config" -Recurse -Force
Write-OK "config/ → dist/config/"
Write-Host ""

# ── 7. Copiar data/ ────────────────────────────────────────────
Write-INFO "Copiando data/..."
Copy-Item "$ROOT\data" "$DIST\data" -Recurse -Force
Write-OK "data/ → dist/data/"
Write-Host ""

# ── 8. Verificar estructura dist ───────────────────────────────
Write-INFO "Verificando dist/..."
$required = @(
    "$DIST\index.html",
    "$DIST\src\core\app.js",
    "$DIST\src\core\state.js",
    "$DIST\src\core\events.js",
    "$DIST\src\core\router.js",
    "$DIST\styles\main.css",
    "$DIST\styles\base\variables.css",
    "$DIST\assets\svg\logo-ostp.svg",
    "$DIST\config\app.config.json"
)

$ok = $true
foreach ($f in $required) {
    if (Test-Path $f) {
        Write-OK $f.Replace($DIST, "dist")
    } else {
        Write-ERR "FALTA: $($f.Replace($DIST,'dist'))"
        $ok = $false
    }
}

Write-Host ""

# ── Resultado ──────────────────────────────────────────────────
if ($ok) {
    Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║   BUILD EXITOSO ✅  →  dist/ listo                   ║" -ForegroundColor Green
    Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Green
} else {
    Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Red
    Write-Host "║   BUILD CON ERRORES ❌  Revisa los archivos faltantes ║" -ForegroundColor Red
    Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Red
}

Write-Host ""
Write-Host "  Siguiente paso: .\scripts\deploy-gh.ps1" -ForegroundColor Yellow
Write-Host ""

#          ________________________________________
#      <!--████████████████ostp████████████████████-->