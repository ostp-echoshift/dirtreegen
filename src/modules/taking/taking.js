/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Taking Process Module
   src/modules/taking/taking.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */
import { State } from '../../core/state.js';
import { Events } from '../../core/events.js';

export function initTaking() {
  Events.on('project:loaded', () => {
    const btn = document.getElementById('bTaking');
    if (btn) btn.disabled = false;
  });

  const btn = document.getElementById('bTaking');
  if (btn) {
    btn.onclick = () => showTakingProcess();
  }
}

function showTakingProcess() {
  if (!State.treeRoot) return;

  const extCount = {};
  let totalFiles = 0;
  let totalSize = 0;

  State.idx.forEach(item => {
    if (item.type === 'file') {
      const matchesFilter = () => {
        if (State.allSelectMode || State.activeFilters.size === 0) return true;
        const ext = item.name.split('.').pop().toLowerCase();
        return State.activeFilters.has(ext);
      };

      if (matchesFilter()) {
        totalFiles++;
        totalSize += item.file.size;
        const ext = '.' + item.name.split('.').pop().toLowerCase();
        extCount[ext] = (extCount[ext] || 0) + 1;
      }
    }
  });

  const sorted = Object.entries(extCount).sort((a, b) => b[1] - a[1]);
  let modal = document.getElementById('modalTaking');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modalTaking';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal" style="max-width:520px">
        <div class="modal-header">
          <span class="modal-title">⚡ Taking Process — Windows Emergency</span>
          <button class="modal-close" onclick="closeModal('modalTaking')">×</button>
        </div>
        <div id="modalTakingBody" style="font-size:13px;line-height:1.7;color:var(--text)"></div>
        <div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end">
          <button class="btn btn-ghost btn-sm" onclick="closeModal('modalTaking')">Cerrar</button>
          <button class="btn btn-gold btn-sm" onclick="closeModal('modalTaking'); document.getElementById('bSaveAs').click()">💾 Proceed to Save As</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const body = document.getElementById('modalTakingBody');
  const totalFiltered = sorted.reduce((sum, [_, count]) => sum + count, 0);
  const totalAll = State.idx.filter(i => i.type === 'file').length;

  let html = `
    <div style="display:flex;gap:12px;margin-bottom:16px">
      <div style="flex:1;background:rgba(0,255,144,0.08);border:1px solid var(--ostp-primary);border-radius:var(--r-md);padding:12px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--ostp-primary);font-family:var(--font-mono)">${totalFiltered}</div>
        <div style="font-size:9px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase">Selected Files</div>
      </div>
      <div style="flex:1;background:rgba(88,166,255,0.08);border:1px solid var(--ostp-secondary);border-radius:var(--r-md);padding:12px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--ostp-secondary);font-family:var(--font-mono)">${(totalSize/1024).toFixed(1)}KB</div>
        <div style="font-size:9px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase">Total Size</div>
      </div>
      <div style="flex:1;background:rgba(210,153,34,0.08);border:1px solid var(--ostp-warn);border-radius:var(--r-md);padding:12px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--ostp-warn);font-family:var(--font-mono)">${totalAll}</div>
        <div style="font-size:9px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase">Total Files</div>
      </div>
    </div>
    <div style="background:rgba(0,0,0,0.3);border:1px solid var(--border);border-radius:var(--r-md);padding:12px;margin-bottom:12px">
      <div style="font-size:9px;letter-spacing:2px;color:var(--text-muted);text-transform:uppercase;margin-bottom:8px">EXTENSION BREAKDOWN</div>
      <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
  `;

  sorted.forEach(([ext, count]) => {
    const percentage = ((count / totalFiltered) * 100).toFixed(1);
    const extSize = State.idx.filter(i => i.type === 'file' && i.name.toLowerCase().endsWith(ext.substring(1))).reduce((sum, i) => sum + i.file.size, 0);
    html += `
      <div style="display:flex;align-items:center;gap:8px;padding:6px;background:rgba(255,255,255,0.02);border-radius:var(--r-sm)">
        <span style="font-weight:700;font-family:var(--font-mono);min-width:70px;color:var(--ostp-secondary)">${ext}</span>
        <div style="flex:1;height:6px;background:var(--border);border-radius:3px;overflow:hidden">
          <div style="width:${percentage}%;height:100%;background:linear-gradient(90deg, var(--ostp-primary), var(--ostp-secondary))"></div>
        </div>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--text)">${count}</span>
        <span style="font-size:9px;color:var(--text-muted);min-width:45px">(${percentage}%)</span>
        <span style="font-size:9px;color:var(--text-muted);min-width:50px;text-align:right">${(extSize/1024).toFixed(1)}KB</span>
      </div>
    `;
  });

  html += `
      </div>
    </div>
    <div style="background:rgba(210,153,34,0.08);border:1px solid var(--ostp-warn);border-radius:var(--r-md);padding:10px">
      <div style="font-size:10px;color:var(--ostp-warn);font-family:var(--font-mono)">READY FOR EXTRACTION — ${sorted.length} extensiones detectadas</div>
    </div>
  `;

  body.innerHTML = html;
  openModal('modalTaking');
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

window.closeModal = window.closeModal || function(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
};
window.openModal = openModal;