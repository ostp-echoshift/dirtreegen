/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Reader Module
   src/modules/reader/reader.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }  from '../../core/state.js';
import { Events } from '../../core/events.js';

export function initReader() {
  Events.on('view:changed', ({ view }) => {
    if (view === 'content') renderContent();
  });
  Events.on('file:selected', () => {
    if (State.view === 'content') renderContent();
  });
}

export function renderContent() {
  const out = document.getElementById('output');
  if (!out || !State.treeRoot) return;
  out.innerHTML = '';

  if (State.selNode) {
    renderFile(out, State.selNode);
  } else {
    renderAllContent(out);
  }
}

function renderFile(out, node) {
  const item = State.idx.find(s => s.path === node.path);
  if (!item || !item.content) {
    out.innerHTML = '<div style="padding:20px;color:var(--text-muted);font-family:var(--font-mono)">Archivo binario — sin contenido legible</div>';
    return;
  }
  const lines = item.content.split('\n').length;
  const kb    = (item.file.size / 1024).toFixed(1);
  const coll  = lines > 30;
  const fb    = makeFb(node.cl?.icon || '📄', node.path, kb, lines, item.content, coll);
  out.appendChild(fb);
  Events.emit('log:add', { type: 'ok', msg: `✓ read "${node.name}" · ${lines}L · ${kb}KB` });
}

function renderAllContent(out) {
  const items = State.idx.filter(s => s.content && s.content.trim());
  if (!items.length) {
    out.innerHTML = '<div class="empty"><div class="empty-icon">📄</div><div>Sin archivos de texto cargados</div></div>';
    return;
  }
  items.forEach(item => {
    const lines = item.content.split('\n').length;
    const kb    = (item.file.size / 1024).toFixed(1);
    const coll  = lines > 15;
    out.appendChild(makeFb(item.cl?.icon || '📄', item.path, kb, lines, item.content, coll));
  });
}

function makeFb(icon, path, kb, lines, content, coll) {
  const fb = document.createElement('div');
  fb.className = 'fb';
  fb.innerHTML = `
    <div class="fb-head">
      <span class="fb-path">${icon} ${esc(path)}</span>
      <span class="fb-meta">${kb}KB · ${lines}L</span>
      ${coll ? '<button class="fb-toggle" onclick="this.closest(\'.fb\').querySelector(\'.fb-body\').classList.toggle(\'coll\');this.textContent=this.textContent===\'Expandir\'?\'Colapsar\':\'Expandir\'">Expandir</button>' : ''}
    </div>
    <div class="fb-body ${coll ? 'coll' : ''}">${esc(content)}</div>`;
  return fb;
}

function esc(t) {
  return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}