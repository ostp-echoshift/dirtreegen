/* ═══════════════════════════════════════════════════════
    OSTP DevTool — Exporter Module (PATCHED)
    src/modules/exporter/exporter.js
    @echoShift · QUANTUM.qnu
 ═══════════════════════════════════════════════════════ */
import { State } from '../../core/state.js';
import { Events } from '../../core/events.js';
import { buildTreeStr } from '../tree/tree.js';

const LANG_MAP = {
  '.json': 'json', '.py': 'python', '.ps1': 'powershell', '.md': 'markdown',
  '.html': 'html', '.css': 'css', '.js': 'javascript', '.txt': 'text',
  '.log': 'text', '.xml': 'xml', '.yaml': 'yaml', '.yml': 'yaml',
  '.toml': 'toml', '.svg': 'xml', '.kt': 'kotlin', '.kts': 'kotlin',
  '.java': 'java', '.sql': 'sql', '.sh': 'bash', '.bat': 'batch',
  '.cmd': 'batch', '.ts': 'typescript', '.tsx': 'typescript',
  '.jsx': 'javascript', '.vue': 'vue', '.php': 'php', '.c': 'c',
  '.cpp': 'cpp', '.rs': 'rust', '.go': 'go', '.rb': 'ruby',
  '.swift': 'swift', '.dart': 'dart', '.lua': 'lua', '.r': 'r',
  '.gradle': 'groovy', '.groovy': 'groovy', '.properties': 'properties',
  '.ini': 'ini', '.cfg': 'ini', '.csv': 'csv', '.env': 'bash',
  '.gitignore': 'text', '.cs': 'csharp', '.csproj': 'xml'
};

function getLangTag(filePath) {
  const ext = filePath.slice(filePath.lastIndexOf('.')).toLowerCase();
  return LANG_MAP[ext] || '';
}

export function initExporter() {
  Events.on('export:md',  () => doExportMd());
  Events.on('export:txt', () => doExportTxt());
  Events.on('export:saveAs', ({ format, name }) => doExportSaveAs(format, name));
  Events.on('view:changed', ({ view }) => { if (view === 'export') renderExport(); });
}

// ── Save As nativo ─────────────────────────────────────
async function doExportSaveAs(format, name) {
  let content = '';
  let mimeType = 'text/plain';
  let ext = '.txt';

  if (format === 'md') { content = buildMd(); mimeType = 'text/markdown'; ext = '.md'; }
  else if (format === 'txt') { content = buildTxt(); mimeType = 'text/plain'; ext = '.txt'; }
  else if (format === 'ps1') { content = buildPs1(); mimeType = 'text/plain'; ext = '.ps1'; }

  const fullFileName = name.endsWith(ext) ? name : name + ext;

  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: fullFileName,
        types: [{ description: 'OSTP Export', accept: { [mimeType]: [ext] } }]
      });
      const writable = await handle.createWritable();
      await writable.write(content);
      await writable.close();
      Events.emit('log:add', { type:'ok', msg:`✓ Guardado: ${handle.name}` });
    } catch (err) {
      if (err.name !== 'AbortError') {
        Events.emit('log:add', { type:'err', msg:'✗ Error: ' + err.message });
      }
    }
  } else {
    saveFileFallback(content, fullFileName, mimeType);
    Events.emit('log:add', { type:'warn', msg:' Save As nativo no soportado — descarga estándar' });
  }
}

function saveFileFallback(c, n, t) {
  const b = new Blob([c], { type: t + ';charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(b);
  a.download = n;
  a.click();
  URL.revokeObjectURL(a.href);
}

export function buildMd() {
  const now = new Date().toLocaleString();
  let s = '# Árbol de Directorios - Análisis Cuántico\n\n';
  s += `**Sistema:** QUANTUM.qnu Operation System  \n`;
  s += `**Generado:** ${now}  \n`;
  s += `**Tecnología:** OSTP @echoShift & Quantum Sys  \n\n`;
  s += '```console\n    ' + buildTreeStr(State.treeRoot, '', true).replace(/\n/g, '\n    ') + '```\n\n';

  const items = State.idx.filter(item => {
    if (State.allSelectMode || State.activeFilters.size === 0) return true;
    const ext = item.name.split(".").pop().toLowerCase();
    return State.activeFilters.has(ext);
  }).filter(i => i.content && i.content.trim());

  if (items.length) {
    s += '-\n\n';
    items.forEach(item => {
      const lang = getLangTag(item.path);
      s += `### ${item.cl?.icon || '📄'} ${item.name}\n\n`;
      s += `\` ${item.path}\`\n\n`;
      s += (lang ? '```' + lang + '\n' : '```\n');
      s += item.content + '\n```\n\n';
      s += '                     ________________________________________\n';
      s += '              <!--████████████████ostp████████████████████-->\n\n';
    });
  }

  s += '\n          ________________________________________\n';
  s += '      <!--████████████████ostp████████████████████-->\n';
  return s;
}

export function buildTxt() {
  const now = new Date().toLocaleString();
  let s = `OSTP DevTool v1.1 · QUANTUM.qnu · @echoShift\n`;
  s += `Generado: ${now}\nArchivos: ${State.stats.total} · Directorios: ${State.stats.dirs}\n\n`;
  s += buildTreeStr(State.treeRoot, '', true);
  s += '\n────────────────────────────────────────\nOSTP · @echoShift · Zapopan, Jalisco\n';
  return s;
}

export function buildPs1() {
  const now = new Date().toLocaleString();
  let s = `# OSTP DevTool — PowerShell Output\n`;
  s += `# Proyecto: ${State.project}\n`;
  s += `# Generado: ${now}\n`;
  s += `# @echoShift · QUANTUM.qnu\n`;
  s += `# ══════════════════════════════════════════════════\n\n`;
  s += buildTreeStr(State.treeRoot, '', true);
  s += '\n# <!--████████████████ostp████████████████████-->\n';
  return s;
}

function renderExport() {
  const out = document.getElementById("output");
  if (!out || !State.treeRoot) return;
  out.innerHTML = '';
  const d = document.createElement('div');
  d.className = 'v-export';
  d.textContent = buildMd();
  out.appendChild(d);
}

function doExportMd()  { saveFileFallback(buildMd(),  'quantum_ostp.md',  'text/markdown'); Events.emit('log:add', { type:'ok', msg:'✓ Export: quantum_ostp.md' }); }
function doExportTxt() { saveFileFallback(buildTxt(), 'quantum_ostp.txt', 'text/plain');    Events.emit('log:add', { type:'ok', msg:'✓ Export: quantum_ostp.txt' }); }