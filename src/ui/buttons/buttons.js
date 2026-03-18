/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Buttons UI
   src/ui/buttons/buttons.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }     from '../../core/state.js';
import { Events }    from '../../core/events.js';
import { Router }    from '../../core/router.js';
import { loadFiles } from '../sidebar/sidebar.js';

export function initButtons() {

  // ── Open folder ──────────────────────────────────────
  const fi = document.getElementById('fi');
  window.triggerOpen = () => fi?.click();

  // ── Export ───────────────────────────────────────────
  const bMd  = document.getElementById('bMd');
  const bTxt = document.getElementById('bTxt');
  const bCmd = document.getElementById('bCmd');
  if (bMd)  bMd.onclick  = () => Events.emit('export:md');
  if (bTxt) bTxt.onclick = () => Events.emit('export:txt');
  if (bCmd) bCmd.onclick = () => Router.go('cmd');

  // ── View tabs ────────────────────────────────────────
  ['tree','content','export','validate','cmd'].forEach(v => {
    const btn = document.getElementById('vt-' + v);
    if (btn) btn.onclick = () => Router.go(v);
  });

  // ── Filter chips ─────────────────────────────────────
  document.querySelectorAll('.chip').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      State.setFilter(chip.dataset.e || '');
      Events.emit('filter:changed', { ext: State.filter });
    };
  });

  // ── Keyboard shortcuts ───────────────────────────────
  document.addEventListener('keydown', e => {
    const ctrl = e.ctrlKey || e.metaKey;
    if (!ctrl) return;

    const map = {
      'o': () => window.triggerOpen?.(),
      'f': () => document.getElementById('si')?.focus(),
      '1': () => Router.go('tree'),
      '2': () => Router.go('content'),
      '3': () => Router.go('export'),
      '4': () => Router.go('validate'),
      '5': () => Router.go('cmd'),
      'm': () => Events.emit('export:md'),
      't': () => Events.emit('export:txt'),
      'l': () => window.clearLog?.(),
      '\\':() => toggleSidebar(),
      'd': () => setTheme('dark'),
      'q': () => setTheme('quantum'),
    };

    const action = map[e.key.toLowerCase()];
    if (action) { e.preventDefault(); action(); }
  });
}

// ── Sidebar toggle ────────────────────────────────────
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if (!sb) return;
  const hidden = sb.style.display === 'none';
  sb.style.display = hidden ? '' : 'none';
  Events.emit('log:add', { type:'info', msg:`→ sidebar: ${hidden ? 'show' : 'hide'}` });
}

// ── Theme switcher ────────────────────────────────────
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  Events.emit('log:add', { type:'info', msg:`→ theme: ${theme}` });
}

window.toggleSidebar = toggleSidebar;
window.setTheme      = setTheme;