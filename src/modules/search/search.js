/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Search Module (PATCHED: Strict Extension Filter)
   src/modules/search/search.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */
import { State }  from '../../core/state.js';
import { Events } from '../../core/events.js';
import { Router } from '../../core/router.js';

export function initSearch() {
  const input = document.getElementById('si');
  if (!input) return;
  input.addEventListener('input', e => doSearch(e.target.value));
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) {
      const sr = document.getElementById('sr');
      if (sr) sr.style.display = 'none';
    }
  });
}

function doSearch(q) {
  const sr = document.getElementById('sr');

  if (!State.treeRoot || State.idx.length === 0) {
    if (sr) sr.style.display = 'none';
    return;
  }

  if (!q || q.length < 2) {
    if (sr) sr.style.display = 'none';
    return;
  }

  const ql = q.toLowerCase();

  const hits = State.idx.filter(i => {
    if (!State.allSelectMode && State.activeFilters.size > 0) {
      const ext = i.name.includes('.') ? i.name.split('.').pop().toLowerCase() : '';
      if (!State.activeFilters.has(ext)) return false;
    }
    return i.name.toLowerCase().includes(ql) || (i.content && i.content.toLowerCase().includes(ql));
  }).slice(0, 15);

  if (!hits.length) { sr.style.display = 'none'; return; }

  sr.style.display = 'block';
  sr.innerHTML = hits.map(h => {
    const snip = h.content ? getSnip(h.content, ql) : '';
    return `<div class="sr-item" data-path="${h.path}">
      <span>${h.cl?.icon || '📄'}</span>
      <div style="flex:1;min-width:0">
        <div class="sr-name">${hilite(h.name, q)}</div>
        ${snip ? `<div class="sr-snip">${snip}</div>` : ''}
      </div>
    </div>`;
  }).join('');

  sr.querySelectorAll('.sr-item').forEach(el => {
    el.onclick = () => jumpTo(el.dataset.path);
  });
}

function jumpTo(path) {
  const sr = document.getElementById('sr');
  if (sr) sr.style.display = 'none';
  const input = document.getElementById('si');
  if (input) input.value = '';
  const node = findNode(State.treeRoot, path);
  if (node) {
    State.setSelNode(node);
    const tp = document.getElementById('tp');
    if (tp) tp.textContent = node.path;
    Events.emit('file:selected', { node });
    Router.go('content');
  }
}

function findNode(n, path) {
  if (n.path === path) return n;
  if (n.children) {
    for (const c of n.children) {
      const f = findNode(c, path);
      if (f) return f;
    }
  }
  return null;
}

function getSnip(c, q) {
  const i = c.toLowerCase().indexOf(q);
  if (i < 0) return '';
  const s = Math.max(0, i - 25), e = Math.min(c.length, i + q.length + 25);
  return '…' + esc(c.slice(s, e)).replace(new RegExp(escRe(q), 'gi'), m => `<span class="hl">${m}</span>`) + '…';
}

function hilite(t, q) {
  return esc(t).replace(new RegExp(escRe(q), 'gi'), m => `<span class="hl">${m}</span>`);
}

function esc(t) { return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }