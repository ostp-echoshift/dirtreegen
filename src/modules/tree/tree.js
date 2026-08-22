/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Tree Module
   src/modules/tree/tree.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }  from '../../core/state.js';
import { Events } from '../../core/events.js';

export function initTree() {
  Events.on('view:changed',    ({ view }) => { if (view === 'tree') renderTree(); });
  Events.on('project:loaded',  ()         => renderTree());
}

export function renderTree() {
  const out = document.getElementById('output');
  if (!out || !State.treeRoot) return;
  out.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'v-tree';
  div.innerHTML = '<pre>' + esc(buildTreeStr(State.treeRoot, '', true)) + '</pre>';
  out.appendChild(div);
}

export function buildTreeStr(node, pfx, isLast) {
  let s = '';
  if (node.name !== 'root') {
    const conn = isLast ? '└── ' : '├── ';
    if (node.type === 'folder')
      s += pfx + conn + '📁 ' + node.name + '/\n';
    else
      s += pfx + conn + (node.cl?.icon || '📄') + ' ' + node.name + '\n';
  }
  if (node.children) {
    const np = node.name === 'root' ? pfx : pfx + (isLast ? '    ' : '│   ');
    node.children.forEach((c, i) =>
      s += buildTreeStr(c, np, i === node.children.length - 1));
  }
  return s;
}

function esc(t) {
  return String(t)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}