/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Panels UI
   src/ui/panels/panels.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }  from '../../core/state.js';
import { Events } from '../../core/events.js';

export function initPanels() {
  Events.on('view:changed',   ({ view }) => switchPanel(view));
  Events.on('project:loaded', ()         => hideEmpty());
}

// ── Cambiar panel visible ─────────────────────────────
function switchPanel(view) {
  const output = document.getElementById('output');
  if (!output) return;

  // Si no hay proyecto cargado — mantener empty state
  if (!State.treeRoot) {
    showEmpty();
    return;
  }

  hideEmpty();
}

// ── Empty state ───────────────────────────────────────
export function showEmpty() {
  const el = document.getElementById('emptyState');
  if (el) el.style.display = 'flex';
}

export function hideEmpty() {
  const el = document.getElementById('emptyState');
  if (el) el.style.display = 'none';
}

// ── File block factory ────────────────────────────────
// Crea un bloque de contenido de archivo
export function makeFileBlock(icon, path, kb, lines, content, collapsed = true) {
  const fb   = document.createElement('div');
  fb.className = 'fb';

  const shouldCollapse = collapsed && lines > 15;

  fb.innerHTML = `
    <div class="fb-head">
      <span class="fb-path">${icon} ${esc(path)}</span>
      <span class="fb-meta">${kb}KB · ${lines}L</span>
      ${shouldCollapse
        ? `<button class="fb-toggle" onclick="toggleBlock(this)">Expandir</button>`
        : ''}
    </div>
    <div class="fb-body ${shouldCollapse ? 'coll' : ''}">${esc(content)}</div>
  `;

  return fb;
}

// ── Toggle expand/collapse ────────────────────────────
export function toggleBlock(btn) {
  const body      = btn.closest('.fb').querySelector('.fb-body');
  const collapsed = body.classList.toggle('coll');
  btn.textContent = collapsed ? 'Expandir' : 'Colapsar';
}

// Exponer globalmente para uso inline en HTML
window.toggleBlock = toggleBlock;

// ── CMD block factory ─────────────────────────────────
// Crea un bloque de output para PowerShell
export function makeCmdBlock(content) {
  const div = document.createElement('div');
  div.className = 'cmd-block';
  div.innerHTML = `
    <button class="cmd-copy" onclick="copyToClipboard(this)" data-t="${escAttr(content)}">
      Copy
    </button>
    ${esc(content)}
  `;
  return div;
}

// ── Copy to clipboard ─────────────────────────────────
export function copyToClipboard(btn) {
  const text = btn.dataset.t;
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = orig, 1500);
  }).catch(() => {
    Events.emit('log:add', { type: 'err', msg: '✗ Clipboard no disponible' });
  });
}

// Exponer globalmente para uso inline en HTML
window.copyToClipboard = copyToClipboard;

// ── Scroll output to top ──────────────────────────────
export function scrollOutputTop() {
  const out = document.getElementById('output');
  if (out) out.scrollTop = 0;
}

// ── Utils ─────────────────────────────────────────────
function esc(t) {
  return String(t)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escAttr(t) {
  return String(t)
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}