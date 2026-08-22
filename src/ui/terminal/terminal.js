/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Terminal UI
   src/ui/terminal/terminal.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { Events } from '../../core/events.js';

export function initTerminal() {
  Events.on('log:add', ({ type, msg }) => addLog(type, msg));
}

function addLog(type, msg) {
  const log = document.getElementById('log');
  if (!log) return;
  const d = document.createElement('div');
  d.className = 'tl';
  const cls = { ok:'tl-ok', warn:'tl-warn', err:'tl-err', info:'tl-info' };
  d.innerHTML = `<span class="${cls[type] || 'tl-muted'}">${msg}</span>`;
  log.appendChild(d);
  log.scrollTop = log.scrollHeight;
}

window.clearLog = () => {
  const log = document.getElementById('log');
  if (log) log.innerHTML = '';
};