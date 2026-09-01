/* OSTP DevTool — Sidebar UI (PATCHED: SVG Support + Lazy Loading) */
import { State } from "../../core/state.js";
import { Events } from "../../core/events.js";
import { Router } from "../../core/router.js";

let EXT_MAP = {};
let TEXT_EXT = new Set();
let SPECIAL_NAMES = [];

// ── SVG CACHE ──────────────────────────────────────────────────
const SVG_CACHE = {};

async function getSvgContent(name) {
    const svgPath = `assets/svg/${name}.svg`;
    if (SVG_CACHE[svgPath]) return SVG_CACHE[svgPath];
    try {
        const res = await fetch(svgPath);
        if (!res.ok) return null;
        const svg = await res.text();
        const match = svg.match(/<svg[\s\S]*?<\/svg>/);
        const result = match ? match[0] : null;
        if (result) SVG_CACHE[svgPath] = result;
        return result;
    } catch (e) {
        return null;
    }
}

function getSvgName(filename) {
    const name = filename.replace(/\.[^.]+$/, '');
    const iconMap = {
        'icon-export': 'icon-export',
        'icon-file': 'icon-file',
        'icon-folder': 'icon-folder',
        'icon-search': 'icon-search',
        'icon-terminal': 'icon-terminal',
        'icon-validate': 'icon-validate',
        'logo-echoshift': 'logo-echoshift',
        'logo-ostp': 'logo-ostp',
        'ostp-seal': 'ostp-seal'
    };
    return iconMap[name] || null;
}
// ──────────────────────────────────────────────────────────────

async function loadClassifyMap() {
  try {
    const res = await fetch("config/classify.json");
    const data = await res.json();
    EXT_MAP = data.extensions || {};
    TEXT_EXT = new Set(data.textExtensions || []);
    SPECIAL_NAMES = data.specialNames || [];
    Events.emit("log:add", { type:"ok", msg:`classify.json cargado: ${Object.keys(EXT_MAP).length} extensiones` });
    renderDynamicChips();
  } catch (e) {
    Events.emit("log:add", { type:"err", msg:"classify.json no encontrado" });
  }
}

function classifyFile(name) {
  const ext = name.split(".").pop().toLowerCase();
  const n = name.toLowerCase();
  for (const sn of SPECIAL_NAMES) {
    if (n.includes(sn) || n === sn) return { icon:"🔑", risk:"c", label:"🔥🔥 CRITICAL" };
  }
  return EXT_MAP[ext] || { icon:"📄", risk:"l", label:"ℹ LOW" };
}

function isText(name) {
  const ext = name.split(".").pop().toLowerCase();
  return TEXT_EXT.has(ext) || name.startsWith(".");
}

function renderDynamicChips() {
  const container = document.getElementById("chips");
  if (!container) return;
  container.innerHTML = "";
  const allWrapper = document.createElement("div");
  allWrapper.className = "chip-wrapper";
  const allChip = document.createElement("span");
  allChip.className = "chip on";
  allChip.dataset.e = "";
  allChip.title = "Mostrar todos los archivos";
  allChip.innerHTML = `<span class="chip-left"><span class="chip-icon"></span><span class="chip-label">ALL</span></span><span class="chip-check">▣</span>`;
  allWrapper.appendChild(allChip);
  container.appendChild(allWrapper);
  
  const risks = ["c", "h", "m", "l"];
  risks.forEach(risk => {
    const exts = Object.entries(EXT_MAP).filter(([_, val]) => val.risk === risk);
    if (exts.length === 0) return;
    const wrapper = document.createElement("div");
    wrapper.className = "chip-wrapper";
    exts.forEach(([ext, data]) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.dataset.e = ext;
      chip.dataset.risk = risk;
      chip.title = `${ext.toUpperCase()} - ${data.label}`;
      chip.innerHTML = `<span class="chip-left"><span class="chip-icon">${data.icon}</span><span class="chip-label">.${ext}</span></span><span class="chip-check">▢</span>`;
      wrapper.appendChild(chip);
    });
    container.appendChild(wrapper);
  });
  
  const actions = document.createElement("div");
  actions.className = "chip-actions";
  actions.innerHTML = `<button class="chip-btn" id="selectAllBtn"><span>▣</span> Select All</button><button class="chip-btn" id="clearAllBtn"><span>⊟</span> Clear</button>`;
  container.appendChild(actions);
  attachChipEvents();
}

function attachChipEvents() {
  const allChip = document.querySelector('.chip[data-e=""]');
  if (allChip) {
    allChip.addEventListener('click', () => {
      State.allSelectMode = !State.allSelectMode;
      State.activeFilters.clear();
      document.querySelectorAll('.chip').forEach(c => {
        const isAll = c.dataset.e === "";
        c.classList.toggle('on', isAll && State.allSelectMode);
        c.querySelector('.chip-check').textContent = (isAll && State.allSelectMode) ? '▣' : '▢';
      });
      Events.emit("log:add", { type:"info", msg: State.allSelectMode ? "→ Filtro: ALL" : "→ Filtro: Desactivado" });
      Events.emit("filter:changed");
    });
  }
  document.querySelectorAll('.chip[data-e]:not([data-e=""])').forEach(chip => {
    chip.addEventListener('click', () => {
      const ext = chip.dataset.e;
      if (State.allSelectMode) {
        State.allSelectMode = false;
        const ac = document.querySelector('.chip[data-e=""]');
        if (ac) { ac.classList.remove('on'); ac.querySelector('.chip-check').textContent = ''; }
      }
      if (State.activeFilters.has(ext)) {
        State.activeFilters.delete(ext);
        chip.classList.remove('on');
        chip.querySelector('.chip-check').textContent = '▢';
      } else {
        State.activeFilters.add(ext);
        chip.classList.add('on');
        chip.querySelector('.chip-check').textContent = '▣';
      }
      if (State.activeFilters.size === 0) {
        State.allSelectMode = true;
        const ac = document.querySelector('.chip[data-e=""]');
        if (ac) { ac.classList.add('on'); ac.querySelector('.chip-check').textContent = '▣'; }
      }
      const filterList = State.activeFilters.size > 0 ? Array.from(State.activeFilters).join(', ') : 'ALL';
      Events.emit("log:add", { type:"info", msg: `→ Filtro: [${filterList}]` });
      Events.emit("filter:changed");
    });
  });
  document.getElementById("selectAllBtn")?.addEventListener('click', () => {
    State.allSelectMode = true;
    State.activeFilters.clear();
    document.querySelectorAll('.chip').forEach(c => {
      const isAll = c.dataset.e === "";
      c.classList.toggle('on', isAll);
      c.querySelector('.chip-check').textContent = isAll ? '▣' : '▢';
    });
    Events.emit("filter:changed");
  });
  document.getElementById("clearAllBtn")?.addEventListener('click', () => {
    State.allSelectMode = false;
    State.activeFilters.clear();
    document.querySelectorAll('.chip').forEach(c => {
      c.classList.remove('on');
      c.querySelector('.chip-check').textContent = '▢';
    });
    Events.emit("filter:changed");
  });
}

function matchesFilter(filename) {
  if (State.allSelectMode || State.activeFilters.size === 0) return true;
  const ext = filename.split(".").pop().toLowerCase();
  return State.activeFilters.has(ext);
}

export async function initSidebar() {
  await loadClassifyMap();
  const fi = document.getElementById("fi");
  const fi2 = document.getElementById("fi2");
  if (fi) fi.addEventListener("change", e => loadFiles(e.target.files));
  if (fi2) fi2.addEventListener("change", e => loadFiles(e.target.files));
  const uz = document.getElementById("uz");
  if (uz) {
    uz.addEventListener("dragover", e => { e.preventDefault(); uz.classList.add("drag"); });
    uz.addEventListener("dragleave", () => uz.classList.remove("drag"));
    uz.addEventListener("drop", e => { e.preventDefault(); uz.classList.remove("drag"); });
  }
  Events.on("filter:changed", () => {
    renderSidebar();
    loadSelectedContents();
  });
  Events.on("project:loaded", () => renderSidebar());
}

export async function loadFiles(files) {
  if (!files || !files.length) return;
  State.reset();
  State.allFiles = Array.from(files);
  State.treeRoot = { name:"root", type:"folder", children:[], path:"" };
  const dirSet = new Set();
  State.allFiles.sort((a, b) => a.webkitRelativePath.localeCompare(b.webkitRelativePath)).forEach(f => {
    const parts = f.webkitRelativePath.split("/");
    let node = State.treeRoot;
    parts.forEach((p, i) => {
      const isFile = i === parts.length - 1;
      let ch = node.children?.find(c => c.name === p);
      if (!ch) {
        const path = parts.slice(0, i + 1).join("/");
        const cl = isFile ? classifyFile(p) : null;
        ch = { name:p, type:isFile?"file":"folder", path, children:isFile?null:[], file:isFile?f:null, cl };
        node.children.push(ch);
        if (isFile) {
          State.stats.total++;
          if (cl.risk === "c") State.stats.crit++;
          if (cl.risk === "h") State.stats.high++;
          State.idx.push({ name:p, path, file:f, cl, content:"" });
        } else if (!dirSet.has(path)) {
          dirSet.add(path);
          State.stats.dirs++;
        }
      }
      if (!isFile) node = ch;
    });
  });
  State.project = State.treeRoot.children[0]?.name || "project";
  
  if (State.allFiles.length > 0) {
    const firstFile = State.allFiles[0];
    const fullPath = firstFile.webkitRelativePath || firstFile.name;
    const rootParts = fullPath.split('/');
    State.pathRoot = rootParts.length > 0 ? rootParts[0] : State.project;
  } else {
    State.pathRoot = State.project;
  }
  
  updateStats();
  document.getElementById("tp").textContent = "~/" + State.pathRoot;
  document.getElementById("bSaveAs").disabled = false;
  document.getElementById("bCmd").disabled = false;
  Events.emit("project:loaded", { treeRoot: State.treeRoot, stats: State.stats });
  Events.emit("status:set", { msg: State.stats.total + " files · " + State.stats.dirs + " dirs (Metadata only)" });
}

async function loadSelectedContents() {
  const toLoad = State.idx.filter(item => {
    if (!isText(item.name)) return false;
    if (State.allSelectMode || State.activeFilters.size === 0) return true;
    const ext = item.name.split(".").pop().toLowerCase();
    return State.activeFilters.has(ext);
  });
  if (toLoad.length === 0) return;
  Events.emit("log:add", { type:"info", msg:`→ Lazy loading content for ${toLoad.length} files...` });
  await Promise.all(toLoad.map(async item => {
    if (!item.content) {
      try { item.content = await item.file.text(); } catch(e) { item.content = ""; }
    }
  }));
  Events.emit("log:add", { type:"ok", msg:`✓ Content loaded.` });
  if (State.view === 'content') Router.go('content');
}

export function renderSidebar() {
  const ft = document.getElementById("file-tree");
  if (!ft || !State.treeRoot) return;
  ft.innerHTML = "";
  let visibleCount = 0;
  const countVisible = (node) => {
    if (node.type === "file") { if (matchesFilter(node.name)) visibleCount++; }
    else if (node.children) { node.children.forEach(countVisible); }
  };
  countVisible(State.treeRoot);
  Events.emit("status:set", { msg: `Files: ${visibleCount}/${State.stats.total} · Dirs: ${State.stats.dirs}` });
  renderNode(State.treeRoot, ft, 0);
}

function renderNode(node, cont, depth) {
  if (node.name === "root") { node.children.forEach(c => renderNode(c, cont, depth)); return; }
  if (node.type === "file") {
    if (!matchesFilter(node.name)) return;
    const d = document.createElement("div");
    const riskClass = { "c":"c", "h":"h", "m":"m", "l":"l" }[node.cl?.risk||"l"];
    d.className = "ti risk-" + riskClass;
    d.style.paddingLeft = (depth * 12 + 8) + "px";
    
    // ── SVG SUPPORT ──────────────────────────────────────────
    const icon = node.cl?.icon || '📄';
    const svgName = getSvgName(node.name);
    
    if (svgName) {
      // Crear contenedor para SVG
      const iconSpan = document.createElement('span');
      iconSpan.className = 'svg-icon';
      iconSpan.dataset.svg = svgName;
      iconSpan.textContent = icon; // fallback mientras carga
      
      // Cargar SVG asíncronamente
      getSvgContent(svgName).then(svg => {
        if (svg) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(svg, 'image/svg+xml');
          const svgEl = doc.documentElement;
          if (svgEl) {
            svgEl.setAttribute('width', '16');
            svgEl.setAttribute('height', '16');
            iconSpan.innerHTML = '';
            iconSpan.appendChild(svgEl);
          }
        }
      });
      
      d.appendChild(iconSpan);
    } else {
      const iconSpan = document.createElement('span');
      iconSpan.textContent = icon;
      d.appendChild(iconSpan);
    }
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'ti-name';
    nameSpan.textContent = node.name;
    d.appendChild(nameSpan);
    
    const riskSpan = document.createElement('span');
    riskSpan.className = 'ti-risk';
    riskSpan.textContent = node.cl?.label || '';
    d.appendChild(riskSpan);
    
    d.onclick = () => selectFile(node, d);
    cont.appendChild(d);
    return;
  }
  
  const hasVisibleChildren = (n) => {
    if (!n.children) return false;
    return n.children.some(child => child.type === "file" ? matchesFilter(child.name) : hasVisibleChildren(child));
  };
  if (!hasVisibleChildren(node)) return;
  
  const fd = document.createElement("div");
  fd.className = "ti ti-folder";
  fd.style.paddingLeft = (depth * 12 + 8) + "px";
  fd.innerHTML = `<span>▾</span><span></span><span class="ti-name">${node.name}/</span>`;
  
  const ch = document.createElement("div");
  let open = true;
  fd.onclick = () => {
    open = !open;
    ch.style.display = open ? "" : "none";
    fd.querySelector("span").textContent = open ? "▾" : "▸";
    fd.querySelectorAll("span")[1].textContent = open ? "📂" : "📁";
  };
  cont.appendChild(fd);
  cont.appendChild(ch);
  if (node.children) node.children.forEach(c => renderNode(c, ch, depth + 1));
}

function selectFile(node, el) {
  document.querySelectorAll(".ti").forEach(e => e.classList.remove("sel"));
  el.classList.add("sel");
  State.setSelNode(node);
  document.getElementById("tp").textContent = "~/" + State.pathRoot + "/" + node.path;
  Events.emit("file:selected", { node });
  Router.go("content");
}

function updateStats() {
  document.getElementById("sT").textContent = State.stats.total;
  document.getElementById("sF").textContent = State.stats.dirs;
  document.getElementById("sC").textContent = State.stats.crit;
  document.getElementById("sH").textContent = State.stats.high;
}