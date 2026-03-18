/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Exporter Module
   src/modules/exporter/exporter.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }         from '../../core/state.js';
import { Events }        from '../../core/events.js';
import { buildTreeStr }  from '../tree/tree.js';

export function initExporter() {
  Events.on('export:md',  () => doExportMd());
  Events.on('export:txt', () => doExportTxt());
  Events.on('view:changed', ({ view }) => { if (view === 'export') renderExport(); });
}

export function buildMd() {
  const now = new Date().toLocaleString();
  let s  = '# Árbol de Directorios - Análisis Cuántico\n\n';
  s += `**Sistema:** QUANTUM.qnu Operation System  \n`;
  s += `**Generado:** ${now}  \n`;
  s += `**Tecnología:** OSTP @echoShift & Quantum Sys  \n\n`;
  s += '```console\n    ' + buildTreeStr(State.treeRoot, '', true).replace(/\n/g, '\n    ') + '```\n\n';

  const items = State.idx.filter(i => i.content && i.content.trim());
  if (items.length) {
    s += '-\n\n';
    items.forEach(i => { s += `### ${i.path}\n\`\`\`\n${i.content}\n\`\`\`\n\n`; });
  }

  s += '\n          ________________________________________\n';
  s += '      <!--████████████████ostp████████████████████-->\n';
  return s;
}

export function buildTxt() {
  const now = new Date().toLocaleString();
  let s  = `OSTP DevTool v1 · QUANTUM.qnu · @echoShift\n`;
  s += `Generado: ${now}\n`;
  s += `Archivos: ${State.stats.total} · Directorios: ${State.stats.dirs}\n\n`;
  s += buildTreeStr(State.treeRoot, '', true);
  s += '\n────────────────────────────────────────\n';
  s += 'OSTP · @echoShift · Zapopan, Jalisco\n';
  return s;
}

function renderExport() {
  const out = document.getElementById('output');
  if (!out || !State.treeRoot) return;
  out.innerHTML = '';
  const d = document.createElement('div');
  d.className = 'v-export';
  d.textContent = buildMd();
  out.appendChild(d);
}

function doExportMd()  { saveFile(buildMd(),  'quantum_ostp.md',  'text/markdown'); Events.emit('log:add', { type:'ok', msg:'✓ Export: quantum_ostp.md' }); }
function doExportTxt() { saveFile(buildTxt(), 'quantum_ostp.txt', 'text/plain');    Events.emit('log:add', { type:'ok', msg:'✓ Export: quantum_ostp.txt' }); }

function saveFile(c, n, t) {
  const b = new Blob([c], { type: t + ';charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(b);
  a.download = n;
  a.click();
  URL.revokeObjectURL(a.href);
}