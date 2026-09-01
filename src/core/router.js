/* ═══════════════════════════════════════════════════════
   OSTP DevTool — View Router
   src/core/router.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }  from './state.js';
import { Events } from './events.js';

const VIEWS = ['tree', 'content', 'export', 'validate', 'cmd'];

export const Router = {

  go(view) {
    if (!VIEWS.includes(view)) return;
    State.setView(view);

    // Actualizar tabs activos
    VIEWS.forEach(v => {
      const el = document.getElementById('vt-' + v);
      if (el) el.classList.toggle('on', v === view);
    });

    Events.emit('view:changed', { view });
  },

  current() {
    return State.view;
  },
};