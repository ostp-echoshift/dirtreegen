/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Statusbar UI
   src/ui/statusbar/statusbar.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { Events } from '../../core/events.js';

export function initStatusbar() {
  Events.on('status:set', ({ msg }) => {
    const el = document.getElementById('stMsg');
    if (el) el.textContent = msg;
  });

  // Clock
  const tick = () => {
    const el = document.getElementById('stTime');
    if (el) el.textContent = new Date().toLocaleTimeString();
  };
  tick();
  setInterval(tick, 1000);
}