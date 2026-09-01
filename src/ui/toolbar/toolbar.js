/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Toolbar UI
   src/ui/toolbar/toolbar.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }  from '../../core/state.js';
import { Events } from '../../core/events.js';
import { Router } from '../../core/router.js';

export function initToolbar() {
  Events.on('file:selected', ({ node }) => {
    const el = document.getElementById('tp');
    if (el) el.textContent = node.path;
  });
}