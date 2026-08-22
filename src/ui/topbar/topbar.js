/* OSTP DevTool — Topbar UI (PATCHED: Save As) */
import { Events } from "../../core/events.js";
import { State } from "../../core/state.js";

export function initTopbar() {
  Events.on("status:set", ({ msg }) => setCmd("ostp devtool -- " + msg));
  Events.on("project:loaded", ({ stats }) =>
    setCmd("ostp scan --files " + stats.total + " --dirs " + stats.dirs + " --ok"));

  const bQ = document.getElementById("bQuantum");
  if (bQ) bQ.onclick = () => {
    document.documentElement.setAttribute("data-theme", "quantum");
    Events.emit("log:add", { type:"info", msg:"→ theme: quantum" });
  };
  const bD = document.getElementById("bDark");
  if (bD) bD.onclick = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    Events.emit("log:add", { type:"info", msg:"→ theme: dark" });
  };
  const bS = document.getElementById("bShortcuts");
  if (bS) bS.onclick = () => Events.emit("modal:shortcuts");
  const bA = document.getElementById("bAbout");
  if (bA) bA.onclick = () => Events.emit("modal:about");

  // PATCH: Botón Save As
  const bSaveAs = document.getElementById("bSaveAs");
  if (bSaveAs) {
    bSaveAs.onclick = () => {
      if (!State.treeRoot) return;
      openModal('modalSaveAs');
    };
  }

  // PATCH: Confirmación del modal Save As
  const btnConfirm = document.getElementById("btnConfirmSaveAs");
  if (btnConfirm) {
    btnConfirm.onclick = () => {
      const format = document.getElementById("saveAsFormat").value;
      const name = document.getElementById("saveAsName").value || "quantum_ostp_export";
      Events.emit("export:saveAs", { format, name });
      closeModal('modalSaveAs');
    };
  }
}

export function setCmd(cmd) {
  const el = document.getElementById("cmdLine");
  if (el) el.textContent = cmd;
}