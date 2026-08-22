/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Event Bus
   src/core/events.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

const _listeners = {};

export const Events = {

  on(event, cb) {
    if (!_listeners[event]) _listeners[event] = [];
    _listeners[event].push(cb);
  },

  off(event, cb) {
    if (!_listeners[event]) return;
    _listeners[event] = _listeners[event].filter(fn => fn !== cb);
  },

  emit(event, data) {
    (_listeners[event] || []).forEach(fn => fn(data));
  },
};

/*
  EVENTS CATÁLOGO:
  ─────────────────────────────────────────────────────
  'project:loaded'     → { treeRoot, stats }
  'file:selected'      → { node }
  'view:changed'       → { view }
  'filter:changed'     → { ext }
  'search:query'       → { q }
  'log:add'            → { type, msg }
  'export:md'          → void
  'export:txt'         → void
  'status:set'         → { msg }
  ─────────────────────────────────────────────────────
*/