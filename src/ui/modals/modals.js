/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Modals UI
   src/ui/modals/modals.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */

import { Events } from '../../core/events.js';

export function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => {
        closeModal(m.id);
      });
    }
  });

  Events.on('modal:error',     ({ title, body, fix }) => openModalError(title, body, fix));
  Events.on('modal:shortcuts', () => openModalShortcuts());
  Events.on('modal:about',     () => openModalAbout());
}

export function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

export function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

window.closeModal = closeModal;
window.openModal  = openModal;

export function openModalError(title, body, fix) {
  const el = document.getElementById('modalError');
  if (!el) return;

  const titleEl = el.querySelector('.modal-title');
  const bodyEl  = document.getElementById('modalErrorBody');

  if (titleEl) titleEl.textContent = title || '⚠ Error detectado';

  if (bodyEl) {
    bodyEl.innerHTML = `
      <p style="color:var(--text);margin-bottom:12px">${esc(body || '')}</p>
      ${fix ? `
        <div style="background:rgba(0,255,144,0.06);border:1px solid rgba(0,255,144,0.15);
             border-radius:6px;padding:10px 12px;margin-top:8px">
          <div style="font-size:9px;letter-spacing:2px;color:var(--ostp-primary);margin-bottom:6px">FIX</div>
          <code style="font-size:12px;color:var(--ostp-primary)">${esc(fix)}</code>
        </div>` : ''}
    `;
  }

  openModal('modalError');
}

export async function openModalShortcuts() {
  const bodyEl = document.getElementById('modalShortcutsBody');
  if (!bodyEl) return;

  try {
    const res  = await fetch('config/shortcuts.json');
    const data = await res.json();

    bodyEl.innerHTML = data.shortcuts.map(s => `
      <div style="display:flex;justify-content:space-between;align-items:center;
           padding:5px 0;border-bottom:1px solid var(--border)">
        <span style="color:var(--text-muted);font-size:11px">${esc(s.desc)}</span>
        <code style="background:rgba(0,0,0,0.3);border:1px solid var(--border);
              border-radius:4px;padding:2px 8px;font-size:11px;color:var(--ostp-secondary)">
          ${esc(s.key)}
        </code>
      </div>
    `).join('');
  } catch (e) {
    bodyEl.innerHTML = '<div style="color:var(--text-muted)">shortcuts.json no encontrado</div>';
  }

  openModal('modalShortcuts');
}

export function openModalAbout() {
  openModal('modalAbout');
}

function esc(t) {
  return String(t)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}