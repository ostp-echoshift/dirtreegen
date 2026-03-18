# OSTP DevTool — Changelog
**@echoShift · QUANTUM.qnu · Zapopan, Jalisco**

---

## v1.0.0 — 2026-03-18

### Primer release — Scaffold completo

**Estructura creada:**
- `src/core/` — state, events, router, app
- `src/modules/` — tree, reader, search, validator, exporter, cmd
- `src/ui/` — topbar, sidebar, toolbar, terminal, statusbar, buttons
- `styles/` — base, components, themes, layout
- `assets/svg/` — logos e íconos OSTP
- `config/` — classify, versions, shortcuts, app.config
- `data/schemas/` — android-schema, gradle-schema
- `data/rules/` — kotlin-compat, nav-id-rules

**Motores activos:**
- 🌳 TREE — árbol completo en formato console
- 📄 READ — contenido real de archivos expandible
- 📤 EXPORT — MD + TXT con sello OSTP
- ✓ VALIDATE — versiones Kotlin/KSP/AGP + IDs nav_graph vs menu
- ⬡ PS1 — output formateado para PowerShell

**Base de conocimiento incorporada:**
- Matriz de compatibilidad Kotlin 2.0.21 / KSP / AGP / Room
- Errores comunes de build documentados con causa y fix
- Reglas de IDs Android nav_graph ↔ bottom_nav_menu
- Fix permanente de JAVA_HOME via registro de Windows

---

## Próximas versiones

### v1.1.0 — Planeado
- [ ] Keyboard shortcuts activos via `buttons.js`
- [ ] Tema Quantum activable con `Ctrl+Q`
- [ ] Panel de modals para mensajes de error expandidos
- [ ] Generador de archivos corregidos desde el validator

### v1.2.0 — Planeado
- [ ] Deploy en GitHub Pages — `ostp-echoshift.github.io`
- [ ] Script `deploy-gh.ps1` funcional
- [ ] Modo offline con Service Worker

### v2.0.0 — Visión
- [ ] Motor de transformación bidireccional user ↔ console
- [ ] Migración de formatos (XML → JSON, TOML → properties)
- [ ] Sustraer secciones específicas de archivos
- [ ] Mapear posición exacta de IDs en archivos

---

      ________________________________________
  <!--████████████████ostp████████████████████-->