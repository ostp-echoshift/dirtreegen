/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Topbar UI
   src/ui/topbar/topbar.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { Events } from '../../core/events.js';

export function initTopbar() {
  Events.on('status:set',    ({ msg }) => setCmd(`ostp devtool -- ${msg}`));
  Events.on('project:loaded', ({ stats }) =>
    setCmd(`ostp scan --files ${stats.total} --dirs ${stats.dirs} --ok`));
}

export function setCmd(cmd) {
  const el = document.getElementById('cmdLine');
  if (el) el.textContent = cmd;
}