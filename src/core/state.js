/* ═══════════════════════════════════════════════════════
    OSTP DevTool — Global State (PATCHED)
    src/core/state.js
    @echoShift · QUANTUM.qnu
 ═══════════════════════════════════════════════════════ */
export const State = {
  project:        null,
  treeRoot:       null,
  allFiles:       [],
  idx:            [],
  selNode:        null,
  view:           'tree',
  filter:         '',
  allSelectMode:  true,        // PATCH: Default activo
  activeFilters:  new Set(),   // PATCH: Set de extensiones
  stats: { total: 0, dirs: 0, crit: 0, high: 0 },

  reset() {
    this.project        = null;
    this.treeRoot       = null;
    this.allFiles       = [];
    this.idx            = [];
    this.selNode        = null;
    this.view           = 'tree';
    this.filter         = '';
    this.allSelectMode  = true;
    this.activeFilters  = new Set();
    this.stats          = { total: 0, dirs: 0, crit: 0, high: 0 };
  },
  setView(v)    { this.view = v; },
  setFilter(f)  { this.filter = f; },
  setSelNode(n) { this.selNode = n; },
};