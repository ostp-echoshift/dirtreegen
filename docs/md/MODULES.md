# OSTP DevTool — Modules Reference
**@echoShift · QUANTUM.qnu**

---

## src/core/

### state.js
Estado global único del proyecto. Todos los módulos leen y escriben aquí.
- `State.reset()` — limpia todo al cargar nuevo proyecto
- `State.setView(v)` — cambia la vista activa
- `State.setFilter(f)` — cambia el filtro de extensión
- `State.setSelNode(n)` — registra el nodo seleccionado

### events.js
Event bus pub/sub centralizado.
- `Events.on(event, cb)` — suscribir
- `Events.emit(event, data)` — disparar
- `Events.off(event, cb)` — desuscribir

**Catálogo de eventos:**
| Evento | Data |
|--------|------|
| `project:loaded` | `{ treeRoot, stats }` |
| `file:selected` | `{ node }` |
| `view:changed` | `{ view }` |
| `filter:changed` | `{ ext }` |
| `log:add` | `{ type, msg }` |
| `export:md` | — |
| `export:txt` | — |
| `status:set` | `{ msg }` |

### router.js
Maneja el cambio de vistas.
- `Router.go('tree' | 'content' | 'export' | 'validate' | 'cmd')`
- `Router.current()` → string

### app.js
Bootstrap principal. Inicializa todos los módulos en orden.

---

## src/modules/

### tree/tree.js
Renderiza el árbol completo del proyecto en formato `console/pre`.
- `renderTree()` — dibuja en `#output`
- `buildTreeStr(node, pfx, isLast)` — genera string recursivo

### reader/reader.js
Lee y despliega contenido real de archivos.
- `renderContent()` — si hay `selNode` muestra ese archivo, si no muestra todos
- `renderFile(out, node)` — bloque individual expandible

### search/search.js
Búsqueda en tiempo real por nombre y contenido.
- Mínimo 2 caracteres para activar
- Máximo 15 resultados en dropdown
- `jumpTo(path)` — navega al archivo seleccionado

### validator/validator.js
Valida compatibilidad del proyecto.
- Detecta versiones de Kotlin, AGP, KSP, Room desde `libs.versions.toml`
- Compara IDs de `nav_graph.xml` vs `bottom_nav_menu.xml`
- Lista archivos con riesgo crítico

### exporter/exporter.js
Genera los archivos de salida.
- `buildMd()` → string Markdown con árbol + contenidos + sello OSTP
- `buildTxt()` → string texto plano para consola
- Emite `export:md` y `export:txt` via events

### exporter/templates.js
Templates de texto para los exports.
- `TPL_MD_HEADER(project, date)`
- `TPL_OSTP_SEAL()`
- `TPL_PS1_HEADER(project, date)`

### cmd/cmd.js
Genera output formateado para PowerShell.
- Árbol completo en formato `console`
- `Get-Content` con contenido inline para los archivos clave
- Botón Copy para clipboard

---

## src/ui/

### topbar/topbar.js
- Actualiza `#cmdLine` con el comando actual via `setCmd()`
- Escucha `project:loaded` y `status:set`

### sidebar/sidebar.js
- `loadFiles(files)` — carga y procesa el FileList del browser
- `renderSidebar()` — renderiza el file tree filtrado
- Maneja drag & drop y upload zone

### toolbar/toolbar.js
- Actualiza `#tp` (path actual) cuando se selecciona un archivo

### terminal/terminal.js
- `addLog(type, msg)` — agrega línea al terminal
- Tipos: `ok`, `warn`, `err`, `info`, `muted`
- `clearLog()` expuesto en `window`

### statusbar/statusbar.js
- Actualiza `#stMsg` con el status actual
- Mantiene el reloj `#stTime` actualizado cada segundo

### buttons/buttons.js
- Conecta todos los botones del topbar con sus acciones
- Inicializa los view tabs
- Conecta los filter chips con `State.setFilter()`
- Carga los keyboard shortcuts de `config/shortcuts.json`

---

## config/

| Archivo | Contenido |
|---------|-----------|
| `app.config.json` | Config global de la app |
| `classify.json` | Reglas de clasificación por extensión |
| `versions.json` | Tabla de versiones compatibles Kotlin/KSP/AGP |
| `shortcuts.json` | Keyboard shortcuts |

---

## data/

| Archivo | Contenido |
|---------|-----------|
| `schemas/android-schema.json` | Estructura esperada de proyecto Android |
| `schemas/gradle-schema.json` | Matriz de compatibilidad Gradle + errores comunes |
| `rules/kotlin-compat.json` | Reglas kapt vs ksp |
| `rules/nav-id-rules.json` | Reglas de IDs nav_graph vs menu |

---

      ________________________________________
  <!--████████████████ostp████████████████████-->