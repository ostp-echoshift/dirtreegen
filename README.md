# OSTP · DevTool v1.0

-

            **Oficina de Soluciones Técnicas y Prototipado**  
            **@echoShift · QUANTUM.qnu · Zapopan, Jalisco**

            [![Status](https://img.shields.io/badge/status-stable-brightgreen)](https://ostp-echoshift.github.io)
            [![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/ostp-echoshift/ostp-echoshift)
            [![License](https://img.shields.io/badge/license-MIT-purple)](LICENSE)

            ---

            ## 📖 ¿Qué es?

            **OSTP DevTool** es una herramienta de análisis, lectura y transformación de proyectos de desarrollo. Diseñada para **eliminar el punto ciego entre comunicación, construcción y resultados**.

            **Filosofía:**  
            > *"Cada archivo tiene una historia. Cada estructura cuenta un sistema. La herramienta lo revela todo."*

            ---

            ## 🚀 Motores

            | Motor | Ícono | Función |
            |-------|-------|---------|
            | **TREE** | 🌳 | Árbol completo del proyecto en formato `console` |
            | **READ** | 📄 | Lee y despliega contenido de archivos (expandible) |
            | **EXPORT** | 📤 | Genera MD + TXT con sello OSTP y etiquetas de lenguaje |
            | **VALIDATE** | ✓ | Valida versiones Kotlin/KSP/AGP, IDs nav, manifest y seguridad |
            | **PS1** | ⬡ | Genera output formateado para PowerShell/consola |

            ---

            ## 🏗️ Estructura del Proyecto

            ```console
            DirTreeGen/
            ├── index.html              ← Entry point (modular)
            │
            ├── 📁 src/                 ← Código fuente (ES Modules)
            │   ├── 📁 core/            ← app.js, state.js, events.js, router.js
            │   ├── 📁 modules/         ← tree, reader, search, validator, exporter, cmd
            │   │   ├── 📁 validator/   ← rules.json + validator.js (COMPLETO)
            │   │   └── 📁 exporter/    ← exporter.js + templates.js (LANG_MAP)
            │   └── 📁 ui/              ← topbar, sidebar, toolbar, panels, terminal,
            │                              statusbar, buttons, modals
            │
            ├── 📁 styles/              ← CSS modular (23 archivos)
            │   ├── 📁 base/            ← variables, reset, typography
            │   ├── 📁 components/      ← topbar, sidebar, buttons, chips, modals...
            │   ├── 📁 layout/          ← app, grid, responsive
            │   └── 📁 themes/          ← dark.css (default) + quantum.css (neon)
            │
            ├── 📁 assets/              ← Recursos visuales
            │   └── 📁 svg/             ← 9 SVGs (logos e íconos OSTP mejorados)
            │
            ├── 📁 config/              ← Configuración
            │   ├── classify.json       ← 57 extensiones + specialNames + textExtensions
            │   ├── shortcuts.json      ← 15 keyboard shortcuts
            │   ├── versions.json       ← Tabla de compatibilidad Kotlin/KSP/AGP
            │   └── app.config.json     ← Config global de la app
            │
            ├── 📁 data/                ← Base de conocimiento
            │   ├── 📁 schemas/         ← android-schema.json, gradle-schema.json
            │   └── 📁 rules/           ← kotlin-compat.json, nav-id-rules.json
            │
            ├── 📁 docs/                ← Documentación
            │   ├── 📁 md/              ← ARCHITECTURE.md, MODULES.md, CHANGELOG.md
            │   └── 📁 yaml/            ← prompt.yaml (contexto para IA)
            │
            └── 📁 layout/              ← Archivos de prueba generados
                └── BLENDERS.md         ← Ejemplo de exportación con etiquetas de lenguaje
            ```

            ---

            ## 🎯 Validator — 5 Motores de Validación

            El validador ejecuta **todas** las reglas definidas en `rules.json`:

            | Motor | Reglas |
            |-------|--------|
            | **Versiones** | Kotlin, AGP, KSP, Room, JVM |
            | **Annotation Processor** | kapt vs ksp (detección de Kotlin 2.x) |
            | **Nav IDs** | nav_graph ↔ bottom_nav_menu + startDestination |
            | **Manifest** | Activity name vs .kt + android:exported |
            | **Seguridad** | Secrets, .env, local.properties en .gitignore |

            ### Flujo de validación:

            ```mermaid
            graph LR
                A[User carga proyecto] --> B[Validator.js]
                B --> C[checkVersions]
                B --> D[checkAnnotationProcessor]
                B --> E[checkNavIds]
                B --> F[checkManifest]
                B --> G[checkSecurity]
                C --> H[Render Validate View]
                D --> H
                E --> H
                F --> H
                G --> H
                H --> I[modal:error si hay críticos]
            ```

            ---

            ## ⌨️ Keyboard Shortcuts

            | Tecla | Acción | Vista |
            |-------|--------|-------|
            | `Ctrl+O` | Abrir carpeta | — |
            | `Ctrl+F` | Enfocar búsqueda | — |
            | `Escape` | Cerrar búsqueda / modales | — |
            | `Ctrl+1` | Vista TREE | 🌳 |
            | `Ctrl+2` | Vista READ | 📄 |
            | `Ctrl+3` | Vista EXPORT | 📤 |
            | `Ctrl+4` | Vista VALIDATE | ✓ |
            | `Ctrl+5` | Vista PS1 | ⬡ |
            | `Ctrl+M` | Exportar Markdown | 📤 |
            | `Ctrl+T` | Exportar TXT | 📤 |
            | `Ctrl+L` | Limpiar terminal | — |
            | `Ctrl+\` | Mostrar/ocultar sidebar | — |
            | `Ctrl+D` | Tema Dark | 🌑 |
            | `Ctrl+Q` | Tema Quantum | ✦ |
            | `Ctrl+/` | Ver shortcuts | ⌨ |

            ---

            ## 🎨 Temas

            | Tema | Tecla | Descripción |
            |------|-------|-------------|
            | **Dark** | `Ctrl+D` | Tema oscuro por defecto — profesional |
            | **Quantum** | `Ctrl+Q` | Tema neon — experiencia inmersiva |

            ---

            ## 🧩 Módulos UI

            ```console
            src/ui/
            ├── topbar/        ← Barra superior + cmdLine
            ├── sidebar/       ← File tree + upload + search + filtros
            ├── toolbar/       ← Path actual + view tabs
            ├── panels/        ← File blocks + empty state
            ├── terminal/      ← Log de operaciones
            ├── statusbar/     ← Estado + reloj
            ├── buttons/       ← Botones + shortcuts + temas
            └── modals/        ← Error, Shortcuts, About (conectados a eventos)
            ```

            ---

            ## 🗂️ Clasificación de Archivos

            `classify.json` soporta **57 extensiones** con:

            | Campo | Descripción |
            |-------|-------------|
            | `icon` | Emoji representativo |
            | `risk` | `c` crítico / `h` alto / `m` medio / `l` bajo |
            | `label` | Etiqueta visible en el tree |

            **Special Names:** `password`, `secret`, `.env`, `credentials`, `token` → automáticamente **CRÍTICOS**

            **Text Extensions:** 57 extensiones detectadas como texto legible.

            ---

            ## 🔧 Deploy

            ```bash
            # Desarrollo con Live Server
            npm run dev

            # Build para producción
            npm run build

            # Deploy a GitHub Pages
            npm run deploy
            ```

            **URL:** [https://ostp-echoshift.github.io](https://ostp-echoshift.github.io)

            ---

            ## 📦 Dependencias

            ```json
            {
              "devDependencies": {
                "serve": "^14.2.0"
              }
            }
            ```

            **Node.js:** `>=18.0.0`

            ---

            ## 🤝 Contribuciones

            1. Fork el repositorio
            2. Crea tu rama de feature (`git checkout -b feature/amazing-feature`)
            3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
            4. Push a la rama (`git push origin feature/amazing-feature`)
            5. Abre un Pull Request

            ---

            ## 📄 Licencia

            MIT License — ver archivo [LICENSE](LICENSE) para detalles.

            ---

            ## 📬 Contacto

            **OSTP — Oficina de Soluciones Técnicas y Prototipado**  
            📍 Zapopan, Jalisco, México  
            🐦 [@echoShift](https://github.com/echoshift)  
            🔗 [ostp-echoshift.github.io](https://ostp-echoshift.github.io)

            ---

            -
                  ________________________________________
              <!--████████████████ostp████████████████████-->

            ---

            ## 📝 Historial de Cambios

            Ver [CHANGELOG.md](docs/md/CHANGELOG.md) para detalles completos.

            | Versión | Fecha | Cambios |
            |---------|-------|---------|
            | **v1.1.0** | 2026-08-18 | Validator completo, SVGs mejorados, temas, shortcuts |
            | **v1.0.0** | 2026-03-18 | Primer release — Scaffold completo |

            ---

            ## 🎯 Roadmap

            ### v1.2.0 — Planeado
            - [ ] Service Worker para modo offline
            - [ ] Soporte para más lenguajes en LANG_MAP
            - [ ] Export a JSON

            ### v2.0.0 — Visión
            - [ ] Motor de transformación bidireccional
            - [ ] Migración de formatos (XML → JSON, TOML → properties)
            - [ ] Sustraer secciones específicas de archivos

            ---

            -
                  ________________________________________
              <!--████████████████ostp████████████████████-->

            ---

            **¿Preguntas?** Abre un issue o contacta a @echoShift. 🚀