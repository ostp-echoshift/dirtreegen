# OSTP DevTool — Changelog
**@echoShift · QUANTUM.qnu · Zapopan, Jalisco**

---

## v1.1.0 — 2026-08-18
**Reparación estructural vía DirFixRoot.ps1**

### Eliminados
- 13 archivos .html muertos en src/ (documentación de referencia que no se cargaba)

### Agregados
- classify.json expandido: 57 extensiones (antes 20)
- Botón visible de tema Quantum (✦) en topbar
- Botón de tema Dark (◐) en topbar
- Botón de Shortcuts (⌨) en topbar
- Botón About (ⓘ) en topbar
- Modal de Shortcuts cargado desde shortcuts.json
- Modal About con información OSTP
- Shortcut Ctrl+/ para ver shortcuts

### Corregidos
- validator.js reescrito COMPLETO: implementa TODAS las reglas de rules.json
  - version_rules (Kotlin, AGP, KSP, Room, JVM)
  - annotation_processor_rules (kapt vs ksp con detección de Kotlin 2.x)
  - nav_id_rules (nav_graph ↔ bottom_nav_menu + startDestination)
  - manifest_rules (Activity name vs .kt + android:exported)
  - security_rules (secrets, .env, local.properties en .gitignore)
- sidebar.js ahora carga classify.json via fetch()
- Modales conectados al event bus (modal:error, modal:shortcuts, modal:about)
- Escape cierra modales Y búsqueda
- Topbar.js conecta botones Quantum/Dark/Shortcuts/About

### Próximas versiones
- v1.2.0: Service Worker para offline
- v2.0.0: Motor de transformación bidireccional

---

## v1.0.0 — 2026-03-18
Primer release — Scaffold completo

---
      ________________________________________
  <!--████████████████ostp████████████████████-->