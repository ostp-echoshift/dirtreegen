/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Sidebar UI
   src/ui/sidebar/sidebar.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }  from '../../core/state.js';
import { Events } from '../../core/events.js';
import { Router } from '../../core/router.js';

// ── Clasificación inline ──────────────────────────────
// Sin import de JSON — compatibilidad browser sin bundler
const EXT_MAP = {
  kt:         { icon:'🟣', risk:'m', rl:'⚠ MEDIUM' },
  kts:        { icon:'🔧', risk:'h', rl:'🔥 HIGH' },
  gradle:     { icon:'🔧', risk:'h', rl:'🔥 HIGH' },
  xml:        { icon:'🔧', risk:'h', rl:'🔥 HIGH' },
  toml:       { icon:'📋', risk:'h', rl:'🔥 HIGH' },
  properties: { icon:'⚙️', risk:'h', rl:'🔥 HIGH' },
  json:       { icon:'🌐', risk:'m', rl:'⚠ MEDIUM' },
  md:         { icon:'📜', risk:'l', rl:'ℹ LOW' },
  sql:        { icon:'🗄️', risk:'c', rl:'🔥🔥 CRITICAL' },
  ps1:        { icon:'🏗️', risk:'h', rl:'🔥 HIGH' },
  bat:        { icon:'🏗️', risk:'h', rl:'🔥 HIGH' },
  cmd:        { icon:'🏗️', risk:'h', rl:'🔥 HIGH' },
  js:         { icon:'📜', risk:'m', rl:'⚠ MEDIUM' },
  html:       { icon:'🌐', risk:'m', rl:'⚠ MEDIUM' },
  css:        { icon:'🎨', risk:'l', rl:'ℹ LOW' },
  txt:        { icon:'📄', risk:'l', rl:'ℹ LOW' },
  log:        { icon:'📄', risk:'l', rl:'ℹ LOW' },
  java:       { icon:'☕', risk:'m', rl:'⚠ MEDIUM' },
  gitignore:  { icon:'🚫', risk:'l', rl:'ℹ LOW' },
  apk:        { icon:'📦', risk:'h', rl:'🔥 HIGH' },
  exe:        { icon:'⚙️', risk:'h', rl:'🔥 HIGH' },
  yaml:       { icon:'📋', risk:'m', rl:'⚠ MEDIUM' },
  yml:        { icon:'📋', risk:'m', rl:'⚠ MEDIUM' },
  sh:         { icon:'🏗️', risk:'h', rl:'🔥 HIGH' },
  svg:        { icon:'🎨', risk:'l', rl:'ℹ LOW' },
};

const TEXT_EXT = new Set([
  'kt','kts','xml','toml','properties','json','md','sql','ps1','bat',
  'cmd','js','html','css','txt','log','java','gradle','gitignore',
  'sh','yaml','yml','csv','env','svg',
]);

function classifyFile(name) {
  const ext = name.split('.').pop().toLowerCase();
  const n   = name.toLowerCase();
  if (n.includes('password') || n.includes('secret') || n.endsWith('.env'))
    return { icon:'🔑', risk:'c', rl:'🔥🔥 CRITICAL' };
  return EXT_MAP[ext] || { icon:'📄', risk:'l', rl:'ℹ LOW' };
}

function isText(name) {
  const ext = name.split('.').pop().toLowerCase();
  return TEXT_EXT.has(ext) || name.startsWith('.');
}

// ── Init ──────────────────────────────────────────────
export function initSidebar() {
  const fi  = document.getElementById('fi');
  const fi2 = document.getElementById('fi2');
  if (fi)  fi.addEventListener('change',  e => loadFiles(e.target.files));
  if (fi2) fi2.addEventListener('change', e => loadFiles(e.target.files));

  const uz = document.getElementById('uz');
  if (uz) {
    uz.addEventListener('dragover',  e => { e.preventDefault(); uz.classList.add('drag'); });
    uz.addEventListener('dragleave', ()  => uz.classList.remove('drag'));
    uz.addEventListener('drop', e => {
      e.preventDefault();
      uz.classList.remove('drag');
      Events.emit('log:add', { type:'warn', msg:'⚠ Usa el botón Abrir para carpetas completas' });
    });
  }

  Events.on('filter:changed', () => renderSidebar());
  Events.on('project:loaded', () => renderSidebar());
}

// ── Load files ────────────────────────────────────────
export async function loadFiles(files) {
  if (!files || !files.length) return;

  State.reset();
  State.allFiles = Array.from(files);
  State.treeRoot = { name:'root', type:'folder', children:[], path:'' };

  const dirSet = new Set();

  State.allFiles
    .sort((a, b) => a.webkitRelativePath.localeCompare(b.webkitRelativePath))
    .forEach(f => {
      const parts = f.webkitRelativePath.split('/');
      let node = State.treeRoot;

      parts.forEach((p, i) => {
        const isFile = i === parts.length - 1;
        let ch = node.children?.find(c => c.name === p);

        if (!ch) {
          const path = parts.slice(0, i + 1).join('/');
          const cl   = isFile ? classifyFile(p) : null;
          ch = { name:p, type:isFile?'file':'folder', path, children:isFile?null:[], file:isFile?f:null, cl };
          node.children.push(ch);

          if (isFile) {
            State.stats.total++;
            if (cl.risk === 'c') State.stats.crit++;
            if (cl.risk === 'h') State.stats.high++;
            State.idx.push({ name:p, path, file:f, cl, content:'' });
          } else if (!dirSet.has(path)) {
            dirSet.add(path);
            State.stats.dirs++;
          }
        }
        if (!isFile) node = ch;
      });
    });

  State.project = State.treeRoot.children[0]?.name || 'project';
  Events.emit('log:add', { type:'info', msg:`→ ostp scan "${State.project}" --all` });

  await loadContents();

  updateStats();
  document.getElementById('tp').textContent  = `~/${State.project}`;
  document.getElementById('bMd').disabled    = false;
  document.getElementById('bTxt').disabled   = false;
  document.getElementById('bCmd').disabled   = false;

  Events.emit('project:loaded', { treeRoot: State.treeRoot, stats: State.stats });
  Events.emit('log:add',    { type:'ok',   msg:`✓ ${State.stats.total} archivos · ${State.stats.dirs} dirs` });
  Events.emit('status:set', { msg:`✓ ${State.stats.total} files · ${State.stats.dirs} dirs` });
}

// ── Load text contents ────────────────────────────────
async function loadContents() {
  await Promise.all(
    State.idx.map(async item => {
      if (isText(item.name)) {
        try { item.content = await item.file.text(); }
        catch(e) { item.content = ''; }
      }
    })
  );
}

// ── Render sidebar tree ───────────────────────────────
export function renderSidebar() {
  const ft = document.getElementById('file-tree');
  if (!ft || !State.treeRoot) return;
  ft.innerHTML = '';
  renderNode(State.treeRoot, ft, 0);
}

function renderNode(node, cont, depth) {
  if (node.name === 'root') {
    node.children.forEach(c => renderNode(c, cont, depth));
    return;
  }

  if (node.type === 'file') {
    const ext = node.name.split('.').pop().toLowerCase();
    if (State.filter && ext !== State.filter) return;

    const d = document.createElement('div');
    d.className = `ti risk-${ {'c':'c','h':'h','m':'m','l':'l'}[node.cl?.risk||'l'] }`;
    d.style.paddingLeft = (depth * 12 + 8) + 'px';
    d.innerHTML = `<span>${node.cl?.icon||'📄'}</span><span class="ti-name">${node.name}</span><span class="ti-risk">${node.cl?.rl||''}</span>`;
    d.onclick = () => selectFile(node, d);
    cont.appendChild(d);
    return;
  }

  // Folder
  const fd = document.createElement('div');
  fd.className = 'ti ti-folder';
  fd.style.paddingLeft = (depth * 12 + 8) + 'px';
  fd.innerHTML = `<span>▾</span><span>📂</span><span class="ti-name">${node.name}/</span>`;

  const ch = document.createElement('div');
  let open = true;
  fd.onclick = () => {
    open = !open;
    ch.style.display = open ? '' : 'none';
    fd.querySelector('span').textContent = open ? '▾' : '▸';
    fd.querySelectorAll('span')[1].textContent = open ? '📂' : '📁';
  };
  cont.appendChild(fd);
  cont.appendChild(ch);
  if (node.children) node.children.forEach(c => renderNode(c, ch, depth + 1));
}

function selectFile(node, el) {
  document.querySelectorAll('.ti').forEach(e => e.classList.remove('sel'));
  el.classList.add('sel');
  State.setSelNode(node);
  document.getElementById('tp').textContent = node.path;
  Events.emit('file:selected', { node });
  Router.go('content');
}

function updateStats() {
  document.getElementById('sT').textContent = State.stats.total;
  document.getElementById('sF').textContent = State.stats.dirs;
  document.getElementById('sC').textContent = State.stats.crit;
  document.getElementById('sH').textContent = State.stats.high;
}