/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Export Templates
   src/modules/exporter/templates.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

export const TPL_MD_HEADER = (project, date) => `
# ${project} — OSTP DevTool Report
**Generado:** ${date}
**Sistema:** QUANTUM.qnu · @echoShift
---
`.trim();

export const TPL_OSTP_SEAL = () =>
`\n          ________________________________________\n      <!--████████████████ostp████████████████████-->`;

export const TPL_PS1_HEADER = (project, date) =>
`# ═══════════════════════════════════════════════════
# OSTP DevTool — PowerShell Output
# Proyecto : ${project}
# Generado : ${date}
# @echoShift · QUANTUM.qnu
# ═══════════════════════════════════════════════════`;