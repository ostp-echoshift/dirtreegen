# OSTP DevTool — Architecture
**@echoShift · QUANTUM.qnu · Zapopan, Jalisco**

---

## Visión general

OSTP DevTool es una herramienta de análisis, lectura y transformación de proyectos de desarrollo. Elimina el punto ciego entre comunicación, construcción y resultados.

```
index.html
    │
    └── src/core/app.js          ← Bootstrap
            │
            ├── core/state.js    ← Estado global único
            ├── core/events.js   ← Event bus (pub/sub)
            ├── core/router.js   ← View router
            │
            ├── modules/
            │   ├── tree/        ← Genera árbol de directorios
            │   ├── reader/      ← Lee y despliega contenido
            │   ├── search/      ← Búsqueda en nombre y contenido
            │   ├── validator/   ← Valida versiones e IDs
            │   ├── exporter/    ← Genera MD, TXT con sello OSTP
            │   └── cmd/         ← Output para PowerShell
            │
            └── ui/
                ├── topbar/      ← Barra superior + command line
                ├── sidebar/     ← File tree + upload + search
                ├── toolbar/     ← Path actual + view tabs
                ├── terminal/    ← Log de operaciones
                ├── statusbar/   ← Estado + reloj
                └── buttons/     ← Botones + chips + shortcuts
```

---

## Flujo de datos

```
Usuario abre carpeta
    │
    ▼
sidebar.js → loadFiles()
    │  Construye treeRoot + idx[]
    ▼
Events.emit('project:loaded')
    │
    ├── tree.js      → renderTree()
    ├── sidebar.js   → renderSidebar()
    ├── statusbar.js → setStatus()
    └── topbar.js    → setCmd()

Usuario hace click en archivo
    │
    ▼
Events.emit('file:selected', { node })
    │
    └── reader.js → renderFile()

Usuario cambia de vista
    │
    ▼
Router.go('validate')
    │
    └── Events.emit('view:changed', { view })
            │
            └── validator.js → renderValidate()
```

---

## Estado global (state.js)

```js
State = {
  project:  string,      // Nombre del proyecto
  treeRoot: TreeNode,    // Árbol estructurado
  allFiles: File[],      // Files originales del browser
  idx:      IndexItem[], // [{name, path, file, cl, content}]
  selNode:  TreeNode,    // Nodo seleccionado actualmente
  view:     string,      // Vista activa
  filter:   string,      // Filtro por extensión
  stats:    { total, dirs, crit, high }
}
```

---

## Clasificación de archivos

Definida en `config/classify.json`. Cada archivo recibe:

| Campo  | Valores |
|--------|---------|
| `icon` | Emoji representativo |
| `risk` | `c` crítico / `h` alto / `m` medio / `l` bajo |
| `rl`   | Label visible en el tree |

---

## Deploy

GitHub Pages desde rama `main` — `ostp-echoshift.github.io`

```
scripts/deploy-gh.ps1
```

---

      ________________________________________
  <!--████████████████ostp████████████████████-->