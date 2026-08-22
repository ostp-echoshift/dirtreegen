/* ═══════════════════════════════════════════════════════
   OSTP DevTool — App Bootstrap
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

document.addEventListener('DOMContentLoaded', () => {

  // UI Shell
  initPanels();
  initTopbar();
  initSidebar();
  initToolbar();
  initTerminal();
  initStatusbar();
  initButtons();
  initModals();

  // Módulos de contenido
  initTree();
  initReader();
  initSearch();
  initValidator();
  initExporter();
  initCmd();

  // Vista inicial
  Router.go('tree');

  Events.emit('log:add',    { type:'info', msg:'→ ostp devtool v1.0 · QUANTUM.qnu · READY' });
  Events.emit('status:set', { msg:'READY' });

  console.log('[OSTP] DevTool initialized · @echoShift · QUANTUM.qnu');
});
