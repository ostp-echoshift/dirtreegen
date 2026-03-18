# OSTP · DevTool v1

**Oficina de Soluciones Técnicas y Prototipado**  
@echoShift · QUANTUM.qnu · Zapopan, Jalisco

---

## ¿Qué es?

Herramienta de análisis, lectura y transformación de proyectos de desarrollo.  
Diseñada para eliminar el punto ciego entre comunicación, construcción y resultados.

## Motores

| Motor     | Función |
|-----------|---------|
| 🌳 TREE   | Árbol completo del proyecto |
| 📄 READ   | Lee y despliega contenido de archivos |
| 📤 EXPORT | Genera MD + TXT con sello OSTP |
| ✓ VALIDATE | Valida versiones Kotlin/KSP/AGP y IDs nav |
| ⬡ PS1    | Genera output para PowerShell/consola |

## Estructura

```
DirTreeGen/
├── index.html          ← Entry point
├── src/core/           ← app, state, events, router
├── src/modules/        ← tree, reader, search, validator, exporter, cmd
├── src/ui/             ← topbar, sidebar, toolbar, panels, terminal...
├── styles/             ← CSS modular por componente
├── assets/svg/         ← Logos e iconos OSTP
├── config/             ← classify, versions, rules
└── scripts/            ← DirMainRoot, build, deploy-gh
```

---

      ________________________________________
  <!--████████████████ostp████████████████████-->