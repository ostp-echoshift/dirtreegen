# OSTP DevTool — Modules Reference
**@echoShift · QUANTUM.qnu**

---

## src/core/

### state.js
Estado global único del proyecto.
- State.reset() — limpia todo al cargar nuevo proyecto
- State.setView(v) — cambia la vista activa
- State.setFilter(f) — cambia el filtro de extensión
- State.setSelNode(n) — registra el nodo seleccionado

### events.js
Event bus pub/sub centralizado.
- Events.on(event, cb) — suscribir
- Events.emit(event, data) — disparar

**Catálogo de eventos:**

| Evento | Data |
|--------|------|
| project:loaded | { treeRoot, stats } |
| ile:selected | { node } |
| iew:changed | { view } |
| ilter:changed | { ext } |
| search:query | { q } |
| log:add | { type, msg } |
| xport:md | — |
| xport:txt | — |
| status:set | { msg } |
| modal:error | { title, body, fix } |
| modal:shortcuts | — |
| modal:about | — |

### router.js
Maneja el cambio de vistas.
- Router.go('tree' | 'content' | 'export' | 'validate' | 'cmd')

### app.js
Bootstrap principal. Inicializa todos los módulos en orden.

---

## src/modules/

### validator/validator.js
**Validación COMPLETA** — implementa todas las reglas de ules.json:
- checkVersions() — Kotlin, AGP, KSP, Room, JVM
- checkAnnotationProcessor() — kapt vs ksp con detección Kotlin 2.x
- checkNavIds() — nav_graph ↔ bottom_nav_menu + startDestination
- checkManifest() — Activity name vs .kt + android:exported
- checkSecurity() — secrets, .env, local.properties en .gitignore

Emite modal:error cuando encuentra errores críticos.

### sidebar/sidebar.js
- loadFiles(files) — carga y procesa el FileList del browser
- Carga classify.json via etch() (57 extensiones soportadas)
- enderSidebar() — renderiza el file tree filtrado

### topbar/topbar.js
Actualiza #cmdLine con el comando actual. Conecta botones:
- Quantum → tema Quantum
- Dark → tema Dark
- Shortcuts → modal de shortcuts
- About → modal about

### buttons/buttons.js
- Keyboard shortcuts (Ctrl+O, F, 1-5, M, T, L, \\, D, Q, /)

### modals/modals.js
- openModal(id) / closeModal(id)
- openModalError(title, body, fix) — modal con fix expandible
- openModalShortcuts() — carga desde shortcuts.json
- openModalAbout() — info OSTP

---

## config/

| Archivo | Contenido |
|---------|-----------|
| app.config.json | Config global de la app |
| classify.json | **57 extensiones** + specialNames + textExtensions |
| versions.json | Tabla de versiones compatibles Kotlin/KSP/AGP |
| shortcuts.json | Keyboard shortcuts (15 shortcuts) |

---
  #    ________________________________________
  #<!--████████████████ostp████████████████████-->