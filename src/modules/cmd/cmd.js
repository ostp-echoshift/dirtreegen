/* ═══════════════════════════════════════════════════════
   OSTP DevTool — CMD / PowerShell Module
   src/modules/cmd/cmd.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { State }         from '../../core/state.js';
import { Events }        from '../../core/events.js';
import { buildTreeStr }  from '../tree/tree.js';
import { TPL_PS1_HEADER, TPL_OSTP_SEAL } from '../exporter/templates.js';

export function initCmd() {
  Events.on('view:changed', ({ view }) => { if (view === 'cmd') renderCmd(); });
}

function renderCmd() {
  const out = document.getElementById('output');
  if (!out || !State.treeRoot) return;
  out.innerHTML = '';

  const project = State.treeRoot.children[0]?.name || 'project';
  const now     = new Date().toLocaleString();
  const items   = State.idx.filter(i => i.content && i.content.trim()).slice(0, 6);

  let ps  = TPL_PS1_HEADER(project, now) + '\n\n';
  ps += '# ESTRUCTURA DEL PROYECTO\n';
  ps += buildTreeStr(State.treeRoot, '', true);
  ps += '\n# CONTENIDO DE ARCHIVOS CLAVE\n';
  items.forEach(item => {
    ps += `\n# ══ ${item.path} ══\n`;
    ps += `Get-Content "${item.path.replace(/\//g, '\\')}" -Raw\n`;
    ps += `<#\n${item.content}\n#>\n`;
  });
  ps += TPL_OSTP_SEAL();

  const d   = document.createElement('div');
  d.className = 'v-cmd';
  d.innerHTML = `
    <div class="label" style="margin-bottom:10px">→ ostp generate --powershell --format console</div>
    <div class="cmd-block">
      <button class="cmd-copy" onclick="navigator.clipboard.writeText(this.dataset.t).then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})" data-t="${escAttr(ps)}">Copy</button>
      ${esc(ps)}
    </div>`;
  out.appendChild(d);
}

function esc(t)      { return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escAttr(t)  { return t.replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }