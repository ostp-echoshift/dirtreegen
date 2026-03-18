/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Global State
   src/core/state.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

export const State = {
  project:    null,   // nombre del proyecto
  treeRoot:   null,   // árbol estructurado
  allFiles:   [],     // File[] originales
  idx:        [],     // [{name,path,file,cl,content}]
  selNode:    null,   // nodo seleccionado
  view:       'tree', // vista activa
  filter:     '',     // filtro por extensión
  stats: {
    total:   0,
    dirs:    0,
    crit:    0,
    high:    0,
  },

  reset() {
    this.project  = null;
    this.treeRoot = null;
    this.allFiles = [];
    this.idx      = [];
    this.selNode  = null;
    this.view     = 'tree';
    this.filter   = '';
    this.stats    = { total:0, dirs:0, crit:0, high:0 };
  },

  setView(v)    { this.view = v; },
  setFilter(f)  { this.filter = f; },
  setSelNode(n) { this.selNode = n; },
};