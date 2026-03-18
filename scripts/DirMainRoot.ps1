# ═══════════════════════════════════════════════════════════════
#  DirMainRoot.ps1
#  OSTP DevTool — Generador de estructura del proyecto
#  @echoShift · QUANTUM.qnu · Zapopan, Jalisco
#  Ejecutar desde: C:\Proyectos\DirTreeGen\
# ═══════════════════════════════════════════════════════════════

$ROOT = "C:\Proyectos\DirTreeGen"

function New-Dir  { param($p) New-Item -ItemType Directory -Path $p -Force | Out-Null }
function New-File { param($p) New-Item -ItemType File -Path $p -Force | Out-Null }

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Magenta
Write-Host "║   OSTP DevTool — Scaffold Generator              ║" -ForegroundColor Magenta
Write-Host "║   @echoShift · QUANTUM.qnu                       ║" -ForegroundColor Magenta
Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Magenta
Write-Host ""

# ── DIRECTORIOS ───────────────────────────────────────────────
$dirs = @(
    # Raíz del proyecto
    "$ROOT",

    # Core de la app
    "$ROOT\src",
    "$ROOT\src\core",
    "$ROOT\src\modules",
    "$ROOT\src\modules\tree",
    "$ROOT\src\modules\reader",
    "$ROOT\src\modules\search",
    "$ROOT\src\modules\validator",
    "$ROOT\src\modules\exporter",
    "$ROOT\src\modules\cmd",

    # UI — componentes
    "$ROOT\src\ui",
    "$ROOT\src\ui\topbar",
    "$ROOT\src\ui\sidebar",
    "$ROOT\src\ui\toolbar",
    "$ROOT\src\ui\panels",
    "$ROOT\src\ui\terminal",
    "$ROOT\src\ui\statusbar",
    "$ROOT\src\ui\buttons",
    "$ROOT\src\ui\modals",

    # Estilos
    "$ROOT\styles",
    "$ROOT\styles\base",
    "$ROOT\styles\components",
    "$ROOT\styles\themes",
    "$ROOT\styles\layout",

    # Assets
    "$ROOT\assets",
    "$ROOT\assets\svg",
    "$ROOT\assets\icons",
    "$ROOT\assets\img",
    "$ROOT\assets\fonts",

    # Config / data
    "$ROOT\config",
    "$ROOT\data",
    "$ROOT\data\schemas",
    "$ROOT\data\rules",

    # Docs
    "$ROOT\docs",
    "$ROOT\docs\md",
    "$ROOT\docs\yaml",

    # Scripts de build / deploy
    "$ROOT\scripts",

    # Output / dist
    "$ROOT\dist"
)

foreach ($d in $dirs) {
    New-Dir $d
    Write-Host "  [DIR] $($d.Replace($ROOT,'.'))" -ForegroundColor Cyan
}

Write-Host ""

# ── ARCHIVOS PLACEHOLDER ──────────────────────────────────────
$files = @(

    # ── Raíz ──────────────────────────────────────────────────
    "$ROOT\index.html",
    "$ROOT\.gitignore",
    "$ROOT\README.md",
    "$ROOT\package.json",

    # ── Core ──────────────────────────────────────────────────
    "$ROOT\src\core\app.js",           # Bootstrap / init
    "$ROOT\src\core\state.js",         # Estado global
    "$ROOT\src\core\events.js",        # Event bus
    "$ROOT\src\core\router.js",        # View router

    # ── Módulos ───────────────────────────────────────────────
    "$ROOT\src\modules\tree\tree.js",
    "$ROOT\src\modules\tree\tree.html",

    "$ROOT\src\modules\reader\reader.js",
    "$ROOT\src\modules\reader\reader.html",

    "$ROOT\src\modules\search\search.js",
    "$ROOT\src\modules\search\search.html",

    "$ROOT\src\modules\validator\validator.js",
    "$ROOT\src\modules\validator\validator.html",
    "$ROOT\src\modules\validator\rules.json",

    "$ROOT\src\modules\exporter\exporter.js",
    "$ROOT\src\modules\exporter\templates.js",

    "$ROOT\src\modules\cmd\cmd.js",
    "$ROOT\src\modules\cmd\cmd.html",

    # ── UI Componentes ─────────────────────────────────────────
    "$ROOT\src\ui\topbar\topbar.js",
    "$ROOT\src\ui\topbar\topbar.html",

    "$ROOT\src\ui\sidebar\sidebar.js",
    "$ROOT\src\ui\sidebar\sidebar.html",

    "$ROOT\src\ui\toolbar\toolbar.js",
    "$ROOT\src\ui\toolbar\toolbar.html",

    "$ROOT\src\ui\panels\panels.js",
    "$ROOT\src\ui\panels\panels.html",

    "$ROOT\src\ui\terminal\terminal.js",
    "$ROOT\src\ui\terminal\terminal.html",

    "$ROOT\src\ui\statusbar\statusbar.js",
    "$ROOT\src\ui\statusbar\statusbar.html",

    "$ROOT\src\ui\buttons\buttons.js",
    "$ROOT\src\ui\buttons\buttons.html",

    "$ROOT\src\ui\modals\modals.js",
    "$ROOT\src\ui\modals\modals.html",

    # ── Estilos ────────────────────────────────────────────────
    "$ROOT\styles\base\reset.css",
    "$ROOT\styles\base\variables.css",     # CSS custom properties
    "$ROOT\styles\base\typography.css",

    "$ROOT\styles\components\topbar.css",
    "$ROOT\styles\components\sidebar.css",
    "$ROOT\styles\components\toolbar.css",
    "$ROOT\styles\components\panels.css",
    "$ROOT\styles\components\terminal.css",
    "$ROOT\styles\components\buttons.css",
    "$ROOT\styles\components\chips.css",
    "$ROOT\styles\components\modals.css",
    "$ROOT\styles\components\tree.css",
    "$ROOT\styles\components\fileblock.css",
    "$ROOT\styles\components\search.css",
    "$ROOT\styles\components\statusbar.css",
    "$ROOT\styles\components\stats.css",
    "$ROOT\styles\components\validator.css",

    "$ROOT\styles\layout\app.css",
    "$ROOT\styles\layout\grid.css",
    "$ROOT\styles\layout\responsive.css",

    "$ROOT\styles\themes\dark.css",         # Tema OSTP Dark (default)
    "$ROOT\styles\themes\quantum.css",      # Tema Quantum neon
    "$ROOT\styles\main.css",                # Entry point CSS

    # ── Assets SVG ────────────────────────────────────────────
    "$ROOT\assets\svg\logo-ostp.svg",
    "$ROOT\assets\svg\logo-echoshift.svg",
    "$ROOT\assets\svg\icon-folder.svg",
    "$ROOT\assets\svg\icon-file.svg",
    "$ROOT\assets\svg\icon-search.svg",
    "$ROOT\assets\svg\icon-terminal.svg",
    "$ROOT\assets\svg\icon-export.svg",
    "$ROOT\assets\svg\icon-validate.svg",
    "$ROOT\assets\svg\ostp-seal.svg",

    # ── Config ────────────────────────────────────────────────
    "$ROOT\config\app.config.json",        # Config global
    "$ROOT\config\classify.json",          # Reglas de clasificación de archivos
    "$ROOT\config\versions.json",          # Tabla de versiones compatibles
    "$ROOT\config\shortcuts.json",         # Keyboard shortcuts

    # ── Data / Rules ──────────────────────────────────────────
    "$ROOT\data\schemas\gradle-schema.json",
    "$ROOT\data\schemas\android-schema.json",
    "$ROOT\data\rules\kotlin-compat.json",
    "$ROOT\data\rules\nav-id-rules.json",

    # ── Docs ──────────────────────────────────────────────────
    "$ROOT\docs\md\ARCHITECTURE.md",
    "$ROOT\docs\md\MODULES.md",
    "$ROOT\docs\md\CHANGELOG.md",
    "$ROOT\docs\yaml\prompt.yaml",

    # ── Scripts ───────────────────────────────────────────────
    "$ROOT\scripts\build.ps1",
    "$ROOT\scripts\deploy-gh.ps1",
    "$ROOT\scripts\DirMainRoot.ps1"        # Este mismo script
)

foreach ($f in $files) {
    New-File $f
    Write-Host "  [FILE] $($f.Replace($ROOT,'.'))" -ForegroundColor Green
}

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   SCAFFOLD COMPLETO ✅                           ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "  Directorios : $($dirs.Count)" -ForegroundColor Yellow
Write-Host "  Archivos    : $($files.Count) placeholders vacíos" -ForegroundColor Yellow
Write-Host "  Raíz        : $ROOT" -ForegroundColor Yellow
Write-Host ""
Write-Host "  PRÓXIMO PASO:" -ForegroundColor Cyan
Write-Host "  Abrir C:\Proyectos\DirTreeGen en VS Code" -ForegroundColor Cyan
Write-Host "  code C:\Proyectos\DirTreeGen" -ForegroundColor Cyan
Write-Host ""

#          ________________________________________
#      <!--████████████████ostp████████████████████-->