/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Validator Module
   src/modules/validator/validator.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }  from '../../core/state.js';
import { Events } from '../../core/events.js';

export function initValidator() {
  Events.on('view:changed', ({ view }) => { if (view === 'validate') renderValidate(); });
}

function renderValidate() {
  const out = document.getElementById('output');
  if (!out || !State.treeRoot) return;
  out.innerHTML = '';
  const d = document.createElement('div');
  d.className = 'v-validate';

  const versions = extractVersions();
  const navIds   = extractNavIds();
  const menuIds  = extractMenuIds();

  d.innerHTML = `
    <div class="label" style="margin-bottom:12px">→ ostp validate --versions --ids --security</div>
    <div class="val-grid">
      <div class="val-card">
        <div class="val-title">Versiones detectadas</div>
        ${versions.map(v => `
          <div class="val-row">
            <span style="color:var(--text-muted)">${v.name}</span>
            <span style="display:flex;align-items:center;gap:6px">
              <span style="color:var(--text)">${v.value || '—'}</span>
              <span class="val-badge ${v.ok ? 'badge-ok' : v.value ? 'badge-warn' : 'badge-err'}">
                ${v.ok ? 'OK' : v.value ? 'CHECK' : 'NOT FOUND'}
              </span>
            </span>
          </div>`).join('')}
      </div>
      <div class="val-card">
        <div class="val-title">nav_graph vs bottom_nav</div>
        ${renderIdCheck(navIds, menuIds)}
      </div>
    </div>
    <div class="val-card">
      <div class="val-title">Archivos críticos</div>
      ${State.idx.filter(i => i.cl?.risk === 'c').length === 0
        ? '<div style="color:var(--ostp-primary);font-size:12px">✓ Sin archivos críticos</div>'
        : State.idx.filter(i => i.cl?.risk === 'c').map(i =>
            `<div class="val-row"><span>${i.cl?.icon} ${i.name}</span><span class="val-badge badge-err">CRITICAL</span></div>`
          ).join('')
      }
    </div>`;
  out.appendChild(d);
}

function extractVersions() {
  const res   = [];
  const toml  = State.idx.find(i => i.name === 'libs.versions.toml');
  const gradle = State.idx.find(i => i.name === 'build.gradle.kts' && i.path.includes('/app/'));

  const check = (name, regex, src) => {
    const m = src?.content?.match(regex);
    res.push({ name, value: m ? m[1] : null, ok: !!m });
  };

  check('Kotlin',  /kotlin\s*=\s*"([^"]+)"/, toml);
  check('AGP',     /agp\s*=\s*"([^"]+)"/,    toml);
  check('KSP',     /ksp.*version.*"([^"]+)"/, gradle);
  check('Room',    /room[^:]*:([0-9.]+)/,     gradle);
  return res;
}

function extractNavIds() {
  const nav = State.idx.find(i => i.name === 'nav_graph.xml');
  if (!nav?.content) return [];
  return [...nav.content.matchAll(/android:id="@\+id\/([^"]+)"/g)].map(m => m[1]);
}

function extractMenuIds() {
  const menu = State.idx.find(i => i.name.includes('bottom_nav') && i.name.endsWith('.xml'));
  if (!menu?.content) return [];
  return [...menu.content.matchAll(/android:id="@\+id\/([^"]+)"/g)].map(m => m[1]);
}

function renderIdCheck(nav, menu) {
  if (!nav.length && !menu.length)
    return '<div style="color:var(--text-muted);font-size:12px">nav_graph.xml / bottom_nav_menu.xml no encontrados</div>';
  const all = new Set([...nav, ...menu]);
  let html = '';
  all.forEach(id => {
    const inNav  = nav.includes(id);
    const inMenu = menu.includes(id);
    html += `<div class="val-row">
      <span style="font-family:var(--font-mono);font-size:11px">${id}</span>
      <span style="display:flex;gap:4px">
        <span class="val-badge ${inNav  ? 'badge-ok' : 'badge-err'}">NAV</span>
        <span class="val-badge ${inMenu ? 'badge-ok' : 'badge-err'}">MENU</span>
      </span>
    </div>`;
  });
  return html;
}