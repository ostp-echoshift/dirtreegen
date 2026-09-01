/* ═══════════════════════════════════════════════════════
   OSTP DevTool — App Bootstrap (PATCHED)
   src/core/app.js
   @echoShift · QUANTUM.qnu
═══════════════════════════════════════════════════════ */
import { Events }  from './events.js';
import { Router }  from './router.js';
import { initTopbar }    from '../ui/topbar/topbar.js';
import { initSidebar }   from '../ui/sidebar/sidebar.js';
import { initToolbar }   from '../ui/toolbar/toolbar.js';
import { initTerminal }  from '../ui/terminal/terminal.js';
import { initStatusbar } from '../ui/statusbar/statusbar.js';
import { initButtons }   from '../ui/buttons/buttons.js';
import { initPanels }    from '../ui/panels/panels.js';
import { initModals }    from '../ui/modals/modals.js';
import { initTree }      from '../modules/tree/tree.js';
import { initReader }    from '../modules/reader/reader.js';
import { initSearch }    from '../modules/search/search.js';
import { initValidator } from '../modules/validator/validator.js';
import { initExporter }  from '../modules/exporter/exporter.js';
import { initCmd }       from '../modules/cmd/cmd.js';
import { initTaking }    from '../modules/taking/taking.js';

document.addEventListener('DOMContentLoaded', () => {
  initPanels();
  initTopbar();
  initSidebar();
  initToolbar();
  initTerminal();
  initStatusbar();
  initButtons();
  initModals();
  initTree();
  initReader();
  initSearch();
  initValidator();
  initExporter();
  initCmd();
  initTaking();

  Router.go('tree');
  Events.emit('log:add',    { type:'info', msg:'→ ostp devtool v1.1 · QUANTUM.qnu · READY' });
  Events.emit('status:set', { msg:'READY' });
  console.log('[OSTP] DevTool initialized · @echoShift · QUANTUM.qnu');
});