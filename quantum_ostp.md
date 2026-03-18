# Árbol de Directorios - Análisis Cuántico

-

      **Sistema:** QUANTUM.qnu Operation System  
      **Generado:** 18/3/2026, 5:26:49 a.m.  
      **Tecnología:** OSTP @echoShift & Quantum Sys  

      ```console
          └── 📁 DirTreeGen/
              ├── 🚫 .gitignore
              ├── 📁 assets/
              │   └── 📁 svg/
              │       ├── 🎨 icon-export.svg
              │       ├── 🎨 icon-file.svg
              │       ├── 🎨 icon-folder.svg
              │       ├── 🎨 icon-search.svg
              │       ├── 🎨 icon-terminal.svg
              │       ├── 🎨 icon-validate.svg
              │       ├── 🎨 logo-echoshift.svg
              │       ├── 🎨 logo-ostp.svg
              │       └── 🎨 ostp-seal.svg
              ├── 📁 config/
              │   ├── 🌐 app.config.json
              │   ├── 🌐 classify.json
              │   ├── 🌐 shortcuts.json
              │   └── 🌐 versions.json
              ├── 📁 data/
              │   ├── 📁 rules/
              │   │   ├── 🌐 kotlin-compat.json
              │   │   └── 🌐 nav-id-rules.json
              │   └── 📁 schemas/
              │       ├── 🌐 android-schema.json
              │       └── 🌐 gradle-schema.json
              ├── 📜 DirMainRoot.md
              ├── 📁 docs/
              │   ├── 📁 md/
              │   │   ├── 📜 ARCHITECTURE.md
              │   │   ├── 📜 CHANGELOG.md
              │   │   └── 📜 MODULES.md
              │   └── 📁 yaml/
              │       └── 📋 prompt.yaml
              ├── 🌐 index.html
              ├── 🌐 ostp-dirgen.html
              ├── 🌐 package.json
              ├── 📜 README.md
              ├── 📁 scripts/
              │   ├── 🏗️ build.ps1
              │   ├── 🏗️ deploy-gh.ps1
              │   └── 🏗️ DirMainRoot.ps1
              ├── 📁 src/
              │   ├── 📁 core/
              │   │   ├── 📜 app.js
              │   │   ├── 📜 events.js
              │   │   ├── 📜 router.js
              │   │   └── 📜 state.js
              │   ├── 📁 modules/
              │   │   ├── 📁 cmd/
              │   │   │   ├── 🌐 cmd.html
              │   │   │   └── 📜 cmd.js
              │   │   ├── 📁 exporter/
              │   │   │   ├── 📜 exporter.js
              │   │   │   └── 📜 templates.js
              │   │   ├── 📁 reader/
              │   │   │   ├── 🌐 reader.html
              │   │   │   └── 📜 reader.js
              │   │   ├── 📁 search/
              │   │   │   ├── 🌐 search.html
              │   │   │   └── 📜 search.js
              │   │   ├── 📁 tree/
              │   │   │   ├── 🌐 tree.html
              │   │   │   └── 📜 tree.js
              │   │   └── 📁 validator/
              │   │       ├── 🌐 rules.json
              │   │       ├── 🌐 validator.html
              │   │       └── 📜 validator.js
              │   └── 📁 ui/
              │       ├── 📁 buttons/
              │       │   ├── 🌐 buttons.html
              │       │   └── 📜 buttons.js
              │       ├── 📁 modals/
              │       │   ├── 🌐 modals.html
              │       │   └── 📜 modals.js
              │       ├── 📁 panels/
              │       │   ├── 🌐 panels.html
              │       │   └── 📜 panels.js
              │       ├── 📁 sidebar/
              │       │   ├── 🌐 sidebar.html
              │       │   └── 📜 sidebar.js
              │       ├── 📁 statusbar/
              │       │   ├── 🌐 statusbar.html
              │       │   └── 📜 statusbar.js
              │       ├── 📁 terminal/
              │       │   ├── 🌐 terminal.html
              │       │   └── 📜 terminal.js
              │       ├── 📁 toolbar/
              │       │   ├── 🌐 toolbar.html
              │       │   └── 📜 toolbar.js
              │       └── 📁 topbar/
              │           ├── 🌐 topbar.html
              │           └── 📜 topbar.js
              └── 📁 styles/
                  ├── 📁 base/
                  │   ├── 🎨 reset.css
                  │   ├── 🎨 typography.css
                  │   └── 🎨 variables.css
                  ├── 📁 components/
                  │   ├── 🎨 buttons.css
                  │   ├── 🎨 chips.css
                  │   ├── 🎨 fileblock.css
                  │   ├── 🎨 modals.css
                  │   ├── 🎨 panels.css
                  │   ├── 🎨 search.css
                  │   ├── 🎨 sidebar.css
                  │   ├── 🎨 stats.css
                  │   ├── 🎨 statusbar.css
                  │   ├── 🎨 terminal.css
                  │   ├── 🎨 toolbar.css
                  │   ├── 🎨 topbar.css
                  │   ├── 🎨 tree.css
                  │   └── 🎨 validator.css
                  ├── 📁 layout/
                  │   ├── 🎨 app.css
                  │   ├── 🎨 grid.css
                  │   └── 🎨 responsive.css
                  ├── 🎨 main.css
                  └── 📁 themes/
                      ├── 🎨 dark.css
                      └── 🎨 quantum.css
          ```

      -

      ### DirTreeGen/.gitignore
      ```console
      # ═══════════════════════════════════════════════════════════════
      #  OSTP DevTool — .gitignore
      #  DirTreeGen · @echoShift · QUANTUM.qnu
      # ═══════════════════════════════════════════════════════════════

      # ── Dist / Build ───────────────────────────────────────────────
      dist/
      build/
      *.min.js
      *.min.css

      # ── Node (si se agrega en el futuro) ──────────────────────────
      node_modules/
      npm-debug.log*
      yarn-error.log*
      package-lock.json
      yarn.lock
      .pnp/
      .pnp.js

      # ── OS ─────────────────────────────────────────────────────────
      .DS_Store
      .DS_Store?
      ._*
      .Spotlight-V100
      .Trashes
      Thumbs.db
      desktop.ini
      ehthumbs.db

      # ── Windows PowerShell temp ────────────────────────────────────
      *.tmp
      *.temp
      $RECYCLE.BIN/

      # ── Editores ───────────────────────────────────────────────────
      .vscode/
      .idea/
      *.suo
      *.ntvs*
      *.njsproj
      *.sln
      *.sw?
      *.swp
      .project
      .classpath

      # ── Secrets / Credenciales ─────────────────────────────────────
      .env
      .env.local
      .env.*.local
      local.properties
      secrets.json
      *.key
      *.pem
      *.p12
      *.keystore

      # ── Logs ───────────────────────────────────────────────────────
      logs/
      *.log
      npm-debug.log*

      # ── Cache ──────────────────────────────────────────────────────
      .cache/
      .parcel-cache/
      .eslintcache

      # ── Testing ────────────────────────────────────────────────────
      coverage/
      .nyc_output/

      #          ________________________________________
      #      <!--████████████████ostp████████████████████-->
      ```

      ### DirTreeGen/assets/svg/icon-export.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" stroke="#C8982A" stroke-width="1.5" stroke-linecap="round"/>
        <polyline points="17,8 12,3 7,8" stroke="#C8982A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="12" y1="3" x2="12" y2="15" stroke="#C8982A" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      ```

      ### DirTreeGen/assets/svg/icon-file.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#c9d1d9" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M14 2V8H20" stroke="#c9d1d9" stroke-width="1.5" stroke-linejoin="round"/>
        <line x1="8" y1="13" x2="16" y2="13" stroke="#8b949e" stroke-width="1" stroke-linecap="round"/>
        <line x1="8" y1="16" x2="14" y2="16" stroke="#8b949e" stroke-width="1" stroke-linecap="round"/>
      </svg>
      ```

      ### DirTreeGen/assets/svg/icon-folder.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M3 7C3 5.9 3.9 5 5 5H10L12 7H19C20.1 7 21 7.9 21 9V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7Z" stroke="#58a6ff" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M3 9H21" stroke="#58a6ff" stroke-width="1" opacity="0.4"/>
      </svg>
      ```

      ### DirTreeGen/assets/svg/icon-search.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#8b949e" stroke-width="1.5"/>
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#8b949e" stroke-width="2" stroke-linecap="round"/>
        <circle cx="11" cy="11" r="3" stroke="#00ff90" stroke-width="1" opacity="0.5"/>
      </svg>
      ```

      ### DirTreeGen/assets/svg/icon-terminal.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="3" stroke="#58a6ff" stroke-width="1.5"/>
        <rect x="2" y="3" width="20" height="5" rx="3" fill="#1e2d3d"/>
        <circle cx="6" cy="5.5" r="1" fill="#ff6b6b"/>
        <circle cx="10" cy="5.5" r="1" fill="#d29922"/>
        <circle cx="14" cy="5.5" r="1" fill="#00ff90"/>
        <polyline points="6,13 10,16 6,19" stroke="#00ff90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <line x1="12" y1="19" x2="18" y2="19" stroke="#58a6ff" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      ```

      ### DirTreeGen/assets/svg/icon-validate.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M12 2L4 5V11C4 15.5 7.5 19.7 12 21C16.5 19.7 20 15.5 20 11V5L12 2Z" stroke="#00ff90" stroke-width="1.5" stroke-linejoin="round"/>
        <polyline points="8,12 11,15 16,9" stroke="#00ff90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ```

      ### DirTreeGen/assets/svg/logo-echoshift.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" width="200" height="48">
        <defs>
          <linearGradient id="eg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00ff90"/>
            <stop offset="100%" stop-color="#58a6ff"/>
          </linearGradient>
        </defs>
        <!-- Signal waves left -->
        <path d="M8 24 Q14 14 20 24 Q26 34 32 24" stroke="#00ff90" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M4 24 Q14 8 24 24 Q34 40 44 24" stroke="#58a6ff" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
        <!-- Text -->
        <text x="50" y="30" font-family="Segoe UI, sans-serif" font-size="18" font-weight="700" fill="url(#eg)" letter-spacing="1">echoShift</text>
        <!-- Dot -->
        <circle cx="42" cy="24" r="3" fill="#00ff90"/>
      </svg>
      ```

      ### DirTreeGen/assets/svg/logo-ostp.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00ff90"/>
            <stop offset="100%" stop-color="#58a6ff"/>
          </linearGradient>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6D1A2A"/>
            <stop offset="100%" stop-color="#2a0a14"/>
          </linearGradient>
        </defs>
        <!-- BG -->
        <rect width="120" height="120" rx="20" fill="url(#g2)"/>
        <!-- Top accent line -->
        <rect x="0" y="0" width="120" height="3" rx="2" fill="url(#g1)"/>
        <!-- OSTP Letters -->
        <text x="12" y="52" font-family="Segoe UI, sans-serif" font-size="28" font-weight="800" fill="url(#g1)" letter-spacing="2">OSTP</text>
        <!-- Divider -->
        <rect x="12" y="60" width="96" height="1" fill="#1e2d3d"/>
        <!-- Subtitle -->
        <text x="12" y="76" font-family="Consolas, monospace" font-size="9" fill="#8b949e" letter-spacing="1.5">@echoShift</text>
        <!-- Dot indicator -->
        <circle cx="14" cy="90" r="4" fill="#00ff90"/>
        <circle cx="26" cy="90" r="4" fill="#58a6ff"/>
        <circle cx="38" cy="90" r="4" fill="#ff6b6b"/>
        <!-- Bottom label -->
        <text x="48" y="94" font-family="Consolas, monospace" font-size="8" fill="#3d4f5f" letter-spacing="1">QUANTUM.qnu</text>
      </svg>
      ```

      ### DirTreeGen/assets/svg/ostp-seal.svg
      ```svg
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 48" width="320" height="48">
        <defs>
          <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6D1A2A"/>
            <stop offset="40%" stop-color="#C8982A"/>
            <stop offset="60%" stop-color="#C8982A"/>
            <stop offset="100%" stop-color="#6D1A2A"/>
          </linearGradient>
        </defs>
        <!-- Background bar -->
        <rect width="320" height="48" rx="4" fill="#050811"/>
        <!-- Top line -->
        <rect x="0" y="0" width="320" height="1" fill="url(#sg)"/>
        <!-- Bottom line -->
        <rect x="0" y="47" width="320" height="1" fill="url(#sg)"/>
        <!-- Left blocks -->
        <rect x="8"  y="18" width="6" height="12" fill="#6D1A2A"/>
        <rect x="16" y="14" width="6" height="20" fill="#6D1A2A"/>
        <rect x="24" y="18" width="6" height="12" fill="#6D1A2A"/>
        <rect x="32" y="22" width="6" height="8"  fill="#6D1A2A"/>
        <rect x="40" y="16" width="6" height="16" fill="#C8982A"/>
        <rect x="48" y="20" width="6" height="8"  fill="#C8982A"/>
        <rect x="56" y="18" width="6" height="12" fill="#6D1A2A"/>
        <!-- Center text -->
        <text x="160" y="29" font-family="Consolas, monospace" font-size="11" font-weight="700" fill="#C8982A" text-anchor="middle" letter-spacing="3">████ ostp ████</text>
        <!-- Right blocks (mirror) -->
        <rect x="258" y="20" width="6" height="8"  fill="#C8982A"/>
        <rect x="266" y="16" width="6" height="16" fill="#C8982A"/>
        <rect x="274" y="18" width="6" height="12" fill="#6D1A2A"/>
        <rect x="282" y="22" width="6" height="8"  fill="#6D1A2A"/>
        <rect x="290" y="18" width="6" height="12" fill="#6D1A2A"/>
        <rect x="298" y="14" width="6" height="20" fill="#6D1A2A"/>
        <rect x="306" y="18" width="6" height="12" fill="#6D1A2A"/>
      </svg>
      ```

      ### DirTreeGen/config/app.config.json
      ```json
      {
        "name": "OSTP DevTool",
        "version": "1.0.0",
        "author": "@echoShift",
        "system": "QUANTUM.qnu",
        "location": "Zapopan, Jalisco",
        "defaultTheme": "dark",
        "defaultView": "tree",
        "terminalLines": 200,
        "searchMinChars": 2,
        "searchMaxResults": 15,
        "treeAutoCollapse": false,
        "exportSeal": "<!--████████████████ostp████████████████████-->"
      }
      ```

      ### DirTreeGen/config/classify.json
      ```json
      {
        "extensions": {
          "kt":         { "icon": "🟣", "risk": "m", "label": "⚠ MEDIUM" },
          "kts":        { "icon": "🔧", "risk": "h", "label": "🔥 HIGH" },
          "gradle":     { "icon": "🔧", "risk": "h", "label": "🔥 HIGH" },
          "xml":        { "icon": "🔧", "risk": "h", "label": "🔥 HIGH" },
          "toml":       { "icon": "📋", "risk": "h", "label": "🔥 HIGH" },
          "properties": { "icon": "⚙️", "risk": "h", "label": "🔥 HIGH" },
          "json":       { "icon": "🌐", "risk": "m", "label": "⚠ MEDIUM" },
          "md":         { "icon": "📜", "risk": "l", "label": "ℹ LOW" },
          "sql":        { "icon": "🗄️", "risk": "c", "label": "🔥🔥 CRITICAL" },
          "ps1":        { "icon": "🏗️", "risk": "h", "label": "🔥 HIGH" },
          "bat":        { "icon": "🏗️", "risk": "h", "label": "🔥 HIGH" },
          "js":         { "icon": "📜", "risk": "m", "label": "⚠ MEDIUM" },
          "html":       { "icon": "🌐", "risk": "m", "label": "⚠ MEDIUM" },
          "css":        { "icon": "🎨", "risk": "l", "label": "ℹ LOW" },
          "java":       { "icon": "☕", "risk": "m", "label": "⚠ MEDIUM" },
          "gitignore":  { "icon": "🚫", "risk": "l", "label": "ℹ LOW" },
          "apk":        { "icon": "📦", "risk": "h", "label": "🔥 HIGH" },
          "exe":        { "icon": "⚙️", "risk": "h", "label": "🔥 HIGH" },
          "env":        { "icon": "🔑", "risk": "c", "label": "🔥🔥 CRITICAL" }
        },
        "specialNames": ["password", "secret", ".env"],
        "textExtensions": ["kt","kts","xml","toml","properties","json","md","sql","ps1","bat",
          "js","html","css","txt","log","java","gradle","gitignore","sh","yaml","yml","csv"]
      }
      ```

      ### DirTreeGen/config/shortcuts.json
      ```json
      {
        "shortcuts": [

          { "key": "Ctrl+O",     "action": "triggerOpen",      "desc": "Abrir carpeta" },
          { "key": "Ctrl+F",     "action": "focusSearch",      "desc": "Enfocar búsqueda" },
          { "key": "Escape",     "action": "closeSearch",      "desc": "Cerrar búsqueda / deselect" },

          { "key": "Ctrl+1",     "action": "view:tree",        "desc": "Vista TREE" },
          { "key": "Ctrl+2",     "action": "view:content",     "desc": "Vista READ" },
          { "key": "Ctrl+3",     "action": "view:export",      "desc": "Vista EXPORT" },
          { "key": "Ctrl+4",     "action": "view:validate",    "desc": "Vista VALIDATE" },
          { "key": "Ctrl+5",     "action": "view:cmd",         "desc": "Vista PS1" },

          { "key": "Ctrl+M",     "action": "export:md",        "desc": "Exportar Markdown" },
          { "key": "Ctrl+T",     "action": "export:txt",       "desc": "Exportar TXT" },

          { "key": "Ctrl+L",     "action": "clearLog",         "desc": "Limpiar terminal" },
          { "key": "Ctrl+\\",   "action": "toggleSidebar",    "desc": "Mostrar/ocultar sidebar" },

          { "key": "Ctrl+D",     "action": "theme:dark",       "desc": "Tema Dark" },
          { "key": "Ctrl+Q",     "action": "theme:quantum",    "desc": "Tema Quantum" }
        ]
      }
      ```

      ### DirTreeGen/config/versions.json
      ```json
      {
        "kotlin": {
          "stable": "2.0.21",
          "latest": "2.2.0",
          "min":    "1.9.0"
        },
        "ksp": {
          "2.0.21": "2.0.21-1.0.28",
          "2.2.0":  "2.2.0-1.0.29"
        },
        "agp": {
          "stable": "8.7.3",
          "latest": "8.13.2"
        },
        "room": {
          "stable":  "2.6.1",
          "latest":  "2.7.0",
          "ksp_min": "2.7.0"
        },
        "gradle": {
          "stable": "9.3.1"
        },
        "jdk": {
          "recommended": "17",
          "supported": ["11","17","21"]
        }
      }
      ```

      ### DirTreeGen/data/rules/kotlin-compat.json
      ```json
      {
        "rules": [
          {
            "id": "kotlin-ksp-match",
            "desc": "KSP version prefix must match Kotlin version",
            "example": "Kotlin 2.0.21 → KSP 2.0.21-x.x.x"
          },
          {
            "id": "room-kapt-deprecated",
            "desc": "Room 2.7.0+ uses KSP, not kapt",
            "example": "ksp(room-compiler:2.7.0) NOT kapt()"
          },
          {
            "id": "kotlin-2x-kapt-broken",
            "desc": "kapt does not support Kotlin 2.0+ language version",
            "fix": "Migrate to KSP"
          }
        ]
      }
      ```

      ### DirTreeGen/data/rules/nav-id-rules.json
      ```json
      {
        "rules": [
          {
            "id": "nav-menu-id-match",
            "desc": "IDs in nav_graph.xml must exactly match IDs in bottom_nav_menu.xml",
            "severity": "error"
          },
          {
            "id": "start-destination",
            "desc": "app:startDestination must reference a valid fragment ID",
            "severity": "error"
          }
        ]
      }
      ```

      ### DirTreeGen/data/schemas/android-schema.json
      ```json
      {
        "schema": "android-project",
        "version": "1.0",
        "description": "Estructura esperada de un proyecto Android con Kotlin",

        "required_files": [
          "app/src/main/AndroidManifest.xml",
          "app/build.gradle.kts",
          "build.gradle.kts",
          "gradle/libs.versions.toml",
          "gradle.properties",
          "local.properties",
          "settings.gradle.kts"
        ],

        "required_dirs": [
          "app/src/main/java",
          "app/src/main/res",
          "app/src/main/res/layout",
          "app/src/main/res/values",
          "app/src/main/res/navigation",
          "app/src/main/res/menu"
        ],

        "manifest_required": [
          "android:name",
          "android:exported",
          "intent-filter"
        ],

        "nav_graph": {
          "file": "app/src/main/res/navigation/nav_graph.xml",
          "required_attrs": ["app:startDestination"],
          "id_must_match": "app/src/main/res/menu/bottom_nav_menu.xml"
        },

        "activity_name_rules": {
          "manifest_must_match_kt": true,
          "desc": "android:name en AndroidManifest debe coincidir con el nombre del archivo .kt de la Activity"
        },

        "permissions": {
          "known": [
            "android.permission.INTERNET",
            "android.permission.ACCESS_NETWORK_STATE",
            "android.permission.CAMERA",
            "android.permission.FLASHLIGHT",
            "android.permission.VIBRATE"
          ],
          "risky": [
            "android.permission.READ_CONTACTS",
            "android.permission.WRITE_CONTACTS",
            "android.permission.ACCESS_FINE_LOCATION",
            "android.permission.RECORD_AUDIO"
          ]
        },

        "resource_naming": {
          "id_convention": "snake_case",
          "layout_prefix": "fragment_",
          "drawable_prefix": ["ic_", "bg_", "circle_"],
          "color_prefix": ""
        }
      }
      ```

      ### DirTreeGen/data/schemas/gradle-schema.json
      ```json
      {
        "schema": "gradle-android",
        "version": "1.0",
        "description": "Reglas de compatibilidad para Gradle + Kotlin + Android",

        "compatibility_matrix": [
          {
            "kotlin":  "2.0.21",
            "ksp":     "2.0.21-1.0.28",
            "agp":     "8.7.3",
            "room":    "2.6.1",
            "gradle":  "9.3.1",
            "jdk":     "17",
            "status":  "stable",
            "notes":   "Configuración probada y estable — JR-Sistema-Android"
          },
          {
            "kotlin":  "2.2.0",
            "ksp":     "2.2.0-1.0.29",
            "agp":     "8.13.2",
            "room":    "2.7.0",
            "gradle":  "9.3.1",
            "jdk":     "17",
            "status":  "latest",
            "notes":   "AGP 8.13.2 jala kotlin-stdlib 2.2.0 internamente — requiere force en resolutionStrategy"
          }
        ],

        "plugin_declaration": {
          "modern": {
            "root_build": "plugins { id('...') version '...' apply false }",
            "app_build":  "plugins { id('...') }",
            "desc": "Versiones declaradas en raíz, app hereda sin versión — AGP 8.x+"
          },
          "legacy": {
            "root_build": "buildscript { classpath '...' }",
            "app_build":  "apply plugin: '...'",
            "desc": "Estilo antiguo — funcional pero no recomendado"
          }
        },

        "kapt_vs_ksp": {
          "kapt": {
            "status": "deprecated",
            "kotlin_max": "1.9.x",
            "issue": "No soporta Kotlin 2.0+ language version",
            "error": "Kapt currently doesn't support language version 2.0+"
          },
          "ksp": {
            "status": "recommended",
            "kotlin_min": "1.9.0",
            "plugin": "com.google.devtools.ksp",
            "version_format": "{kotlin_version}-{ksp_release}",
            "room_min": "2.6.1"
          }
        },

        "repositories": {
          "settings_gradle": [
            "google()",
            "mavenCentral()",
            "gradlePluginPortal()"
          ],
          "order_matters": true,
          "note": "gradlePluginPortal al final mejora velocidad de build"
        },

        "common_errors": [
          {
            "error": "Cannot add extension with name 'kotlin'",
            "cause": "Kotlin plugin aplicado dos veces",
            "fix":   "Verificar que no esté en buildscript Y en plugins{} simultáneamente"
          },
          {
            "error": "Plugin already on classpath with different version",
            "cause": "Versión de kapt/kotlin diferente entre root y app",
            "fix":   "Usar id('org.jetbrains.kotlin.kapt') sin versión en app/build.gradle.kts"
          },
          {
            "error": "Metadata version 2.2.0, expected 2.0.0",
            "cause": "AGP moderno jala kotlin-stdlib 2.2.0 pero el compilador es 2.0.x",
            "fix":   "resolutionStrategy.force('org.jetbrains.kotlin:kotlin-stdlib:2.0.21')"
          },
          {
            "error": "Build was configured to prefer settings repositories",
            "cause": "allprojects{repositories{}} en root cuando ya están en settings.gradle.kts",
            "fix":   "Eliminar bloque allprojects{} del root build.gradle.kts"
          },
          {
            "error": "ClassNotFoundException: MainActivity",
            "cause": "android:name en AndroidManifest no coincide con el nombre del archivo .kt",
            "fix":   "Verificar que android:name='.ActivityMAin' si el archivo es ActivityMAin.kt"
          }
        ],

        "java_home": {
          "recommended": "Eclipse Adoptium JDK 17",
          "path_windows": "C:\\Program Files\\Eclipse Adoptium\\jdk-17.0.16.8-hotspot",
          "set_permanent": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment\" /v JAVA_HOME /t REG_SZ /d \"{path}\" /f"
        }
      }
      ```

      ### DirTreeGen/DirMainRoot.md
      ```console
      # Árbol de Directorios - Análisis Cuántico

      **Sistema:** QUANTUM.qnu Operation System  
      **Generado:** 18/3/2026, 2:01:55 a.m.  
      **Tecnología:** OSTP @echoShif & Quantum Sys  

      ```console
          └── 📁 DirTreeGen/
              ├── 📄 .gitignore 
              ├── 🏗️ DirMainRoot.ps1 
              ├── 📜 README.md 
              ├── 📁 assets/
              │   └── 📁 svg/
              │       ├── 📄 icon-export.svg 
              │       ├── 📄 icon-file.svg 
              │       ├── 📄 icon-folder.svg 
              │       ├── 📄 icon-search.svg 
              │       ├── 📄 icon-terminal.svg 
              │       ├── 📄 icon-validate.svg 
              │       ├── 📄 logo-echoshift.svg 
              │       ├── 📄 logo-ostp.svg 
              │       └── 📄 ostp-seal.svg 
              ├── 📁 config/
              │   ├── 🌐 app.config.json 
              │   ├── 🌐 classify.json 
              │   ├── 🌐 shortcuts.json 
              │   └── 🌐 versions.json 
              ├── 📁 data/
              │   ├── 📁 rules/
              │   │   ├── 🌐 kotlin-compat.json 
              │   │   └── 🌐 nav-id-rules.json 
              │   └── 📁 schemas/
              │       ├── 🌐 android-schema.json 
              │       └── 🌐 gradle-schema.json 
              ├── 📁 docs/
              │   ├── 📁 md/
              │   │   ├── 📜 ARCHITECTURE.md 
              │   │   ├── 📜 CHANGELOG.md 
              │   │   └── 📜 MODULES.md 
              │   └── 📁 yaml/
              │       └── 📄 prompt.yaml 
              ├── 📄 index.html 
              ├── 📄 ostp-dirgen.html 
              ├── 🌐 package.json 
              ├── 📁 scripts/
              │   ├── 🏗️ DirMainRoot.ps1 
              │   ├── 🏗️ build.ps1 
              │   └── 🏗️ deploy-gh.ps1 
              ├── 📁 src/
              │   ├── 📁 core/
              │   │   ├── 📄 app.js 
              │   │   ├── 📄 events.js 
              │   │   ├── 📄 router.js 
              │   │   └── 📄 state.js 
              │   ├── 📁 modules/
              │   │   ├── 📁 cmd/
              │   │   │   ├── 📄 cmd.html 
              │   │   │   └── 📄 cmd.js 
              │   │   ├── 📁 exporter/
              │   │   │   ├── 📄 exporter.js 
              │   │   │   └── 📄 templates.js 
              │   │   ├── 📁 reader/
              │   │   │   ├── 📄 reader.html 
              │   │   │   └── 📄 reader.js 
              │   │   ├── 📁 search/
              │   │   │   ├── 📄 search.html 
              │   │   │   └── 📄 search.js 
              │   │   ├── 📁 tree/
              │   │   │   ├── 📄 tree.html 
              │   │   │   └── 📄 tree.js 
              │   │   └── 📁 validator/
              │   │       ├── 🌐 rules.json 
              │   │       ├── 📄 validator.html 
              │   │       └── 📄 validator.js 
              │   └── 📁 ui/
              │       ├── 📁 buttons/
              │       │   ├── 📄 buttons.html 
              │       │   └── 📄 buttons.js 
              │       ├── 📁 modals/
              │       │   ├── 📄 modals.html 
              │       │   └── 📄 modals.js 
              │       ├── 📁 panels/
              │       │   ├── 📄 panels.html 
              │       │   └── 📄 panels.js 
              │       ├── 📁 sidebar/
              │       │   ├── 📄 sidebar.html 
              │       │   └── 📄 sidebar.js 
              │       ├── 📁 statusbar/
              │       │   ├── 📄 statusbar.html 
              │       │   └── 📄 statusbar.js 
              │       ├── 📁 terminal/
              │       │   ├── 📄 terminal.html 
              │       │   └── 📄 terminal.js 
              │       ├── 📁 toolbar/
              │       │   ├── 📄 toolbar.html 
              │       │   └── 📄 toolbar.js 
              │       └── 📁 topbar/
              │           ├── 📄 topbar.html 
              │           └── 📄 topbar.js 
              └── 📁 styles/
                  ├── 📁 base/
                  │   ├── 📄 reset.css 
                  │   ├── 📄 typography.css 
                  │   └── 📄 variables.css 
                  ├── 📁 components/
                  │   ├── 📄 buttons.css 
                  │   ├── 📄 chips.css 
                  │   ├── 📄 fileblock.css 
                  │   ├── 📄 modals.css 
                  │   ├── 📄 panels.css 
                  │   ├── 📄 search.css 
                  │   ├── 📄 sidebar.css 
                  │   ├── 📄 stats.css 
                  │   ├── 📄 statusbar.css 
                  │   ├── 📄 terminal.css 
                  │   ├── 📄 toolbar.css 
                  │   ├── 📄 topbar.css 
                  │   ├── 📄 tree.css 
                  │   └── 📄 validator.css 
                  ├── 📁 layout/
                  │   ├── 📄 app.css 
                  │   ├── 📄 grid.css 
                  │   └── 📄 responsive.css 
                  ├── 📄 main.css 
                  └── 📁 themes/
                      ├── 📄 dark.css 
                      └── 📄 quantum.css 

      ```


      ```console

      ### DirTreeGen/docs/md/ARCHITECTURE.md
      
      # OSTP DevTool — Architecture
      **@echoShift · QUANTUM.qnu · Zapopan, Jalisco**

      ---

      ## Visión general

      OSTP DevTool es una herramienta de análisis, lectura y transformación de proyectos de desarrollo. Elimina el punto ciego entre comunicación, construcción y resultados.

      
      index.html
          │
          └── src/core/app.js          ← Bootstrap
                  │
                  ├── core/state.js    ← Estado global único
                  ├── core/events.js   ← Event bus (pub/sub)
                  ├── core/router.js   ← View router
                  │
                  ├── modules/
                  │   ├── tree/        ← Genera árbol de directorios
                  │   ├── reader/      ← Lee y despliega contenido
                  │   ├── search/      ← Búsqueda en nombre y contenido
                  │   ├── validator/   ← Valida versiones e IDs
                  │   ├── exporter/    ← Genera MD, TXT con sello OSTP
                  │   └── cmd/         ← Output para PowerShell
                  │
                  └── ui/
                      ├── topbar/      ← Barra superior + command line
                      ├── sidebar/     ← File tree + upload + search
                      ├── toolbar/     ← Path actual + view tabs
                      ├── terminal/    ← Log de operaciones
                      ├── statusbar/   ← Estado + reloj
                      └── buttons/     ← Botones + chips + shortcuts
      

      

      ## Flujo de datos

      
      Usuario abre carpeta
          │
          ▼
      sidebar.js → loadFiles()
          │  Construye treeRoot + idx[]
          ▼
      Events.emit('project:loaded')
          │
          ├── tree.js      → renderTree()
          ├── sidebar.js   → renderSidebar()
          ├── statusbar.js → setStatus()
          └── topbar.js    → setCmd()

      Usuario hace click en archivo
          │
          ▼
      Events.emit('file:selected', { node })
          │
          └── reader.js → renderFile()

      Usuario cambia de vista
          │
          ▼
      Router.go('validate')
          │
          └── Events.emit('view:changed', { view })
                  │
                  └── validator.js → renderValidate()
      

      ---

      ## Estado global (state.js)

      ```js
      State = {
        project:  string,      // Nombre del proyecto
        treeRoot: TreeNode,    // Árbol estructurado
        allFiles: File[],      // Files originales del browser
        idx:      IndexItem[], // [{name, path, file, cl, content}]
        selNode:  TreeNode,    // Nodo seleccionado actualmente
        view:     string,      // Vista activa
        filter:   string,      // Filtro por extensión
        stats:    { total, dirs, crit, high }
      }
      

      ---

      ## Clasificación de archivos

      Definida en `config/classify.json`. Cada archivo recibe:

      | Campo  | Valores |
      |--------|---------|
      | `icon` | Emoji representativo |
      | `risk` | `c` crítico / `h` alto / `m` medio / `l` bajo |
      | `rl`   | Label visible en el tree |

      ---

      ## Deploy

      GitHub Pages desde rama `main` — `ostp-echoshift.github.io`

      
      scripts/deploy-gh.ps1
      

      ---

            ________________________________________
        <!--████████████████ostp████████████████████-->
      ```

      ### DirTreeGen/docs/md/CHANGELOG.md
      ```console
      # OSTP DevTool — Changelog
      **@echoShift · QUANTUM.qnu · Zapopan, Jalisco**

      ---

      ## v1.0.0 — 2026-03-18

      ### Primer release — Scaffold completo

      **Estructura creada:**
      - `src/core/` — state, events, router, app
      - `src/modules/` — tree, reader, search, validator, exporter, cmd
      - `src/ui/` — topbar, sidebar, toolbar, terminal, statusbar, buttons
      - `styles/` — base, components, themes, layout
      - `assets/svg/` — logos e íconos OSTP
      - `config/` — classify, versions, shortcuts, app.config
      - `data/schemas/` — android-schema, gradle-schema
      - `data/rules/` — kotlin-compat, nav-id-rules

      **Motores activos:**
      - 🌳 TREE — árbol completo en formato console
      - 📄 READ — contenido real de archivos expandible
      - 📤 EXPORT — MD + TXT con sello OSTP
      - ✓ VALIDATE — versiones Kotlin/KSP/AGP + IDs nav_graph vs menu
      - ⬡ PS1 — output formateado para PowerShell

      **Base de conocimiento incorporada:**
      - Matriz de compatibilidad Kotlin 2.0.21 / KSP / AGP / Room
      - Errores comunes de build documentados con causa y fix
      - Reglas de IDs Android nav_graph ↔ bottom_nav_menu
      - Fix permanente de JAVA_HOME via registro de Windows

      ---

      ## Próximas versiones

      ### v1.1.0 — Planeado
      - [ ] Keyboard shortcuts activos via `buttons.js`
      - [ ] Tema Quantum activable con `Ctrl+Q`
      - [ ] Panel de modals para mensajes de error expandidos
      - [ ] Generador de archivos corregidos desde el validator

      ### v1.2.0 — Planeado
      - [ ] Deploy en GitHub Pages — `ostp-echoshift.github.io`
      - [ ] Script `deploy-gh.ps1` funcional
      - [ ] Modo offline con Service Worker

      ### v2.0.0 — Visión
      - [ ] Motor de transformación bidireccional user ↔ console
      - [ ] Migración de formatos (XML → JSON, TOML → properties)
      - [ ] Sustraer secciones específicas de archivos
      - [ ] Mapear posición exacta de IDs en archivos

      ---

            ________________________________________
        <!--████████████████ostp████████████████████-->
      ```

      ### DirTreeGen/docs/md/MODULES.md
      ```console
      # OSTP DevTool — Modules Reference
      **@echoShift · QUANTUM.qnu**

      ---

      ## src/core/

      ### state.js
      Estado global único del proyecto. Todos los módulos leen y escriben aquí.
      - `State.reset()` — limpia todo al cargar nuevo proyecto
      - `State.setView(v)` — cambia la vista activa
      - `State.setFilter(f)` — cambia el filtro de extensión
      - `State.setSelNode(n)` — registra el nodo seleccionado

      ### events.js
      Event bus pub/sub centralizado.
      - `Events.on(event, cb)` — suscribir
      - `Events.emit(event, data)` — disparar
      - `Events.off(event, cb)` — desuscribir

      **Catálogo de eventos:**
      | Evento | Data |
      |--------|------|
      | `project:loaded` | `{ treeRoot, stats }` |
      | `file:selected` | `{ node }` |
      | `view:changed` | `{ view }` |
      | `filter:changed` | `{ ext }` |
      | `log:add` | `{ type, msg }` |
      | `export:md` | — |
      | `export:txt` | — |
      | `status:set` | `{ msg }` |

      ### router.js
      Maneja el cambio de vistas.
      - `Router.go('tree' | 'content' | 'export' | 'validate' | 'cmd')`
      - `Router.current()` → string

      ### app.js
      Bootstrap principal. Inicializa todos los módulos en orden.

      ---

      ## src/modules/

      ### tree/tree.js
      Renderiza el árbol completo del proyecto en formato `console/pre`.
      - `renderTree()` — dibuja en `#output`
      - `buildTreeStr(node, pfx, isLast)` — genera string recursivo

      ### reader/reader.js
      Lee y despliega contenido real de archivos.
      - `renderContent()` — si hay `selNode` muestra ese archivo, si no muestra todos
      - `renderFile(out, node)` — bloque individual expandible

      ### search/search.js
      Búsqueda en tiempo real por nombre y contenido.
      - Mínimo 2 caracteres para activar
      - Máximo 15 resultados en dropdown
      - `jumpTo(path)` — navega al archivo seleccionado

      ### validator/validator.js
      Valida compatibilidad del proyecto.
      - Detecta versiones de Kotlin, AGP, KSP, Room desde `libs.versions.toml`
      - Compara IDs de `nav_graph.xml` vs `bottom_nav_menu.xml`
      - Lista archivos con riesgo crítico

      ### exporter/exporter.js
      Genera los archivos de salida.
      - `buildMd()` → string Markdown con árbol + contenidos + sello OSTP
      - `buildTxt()` → string texto plano para consola
      - Emite `export:md` y `export:txt` via events

      ### exporter/templates.js
      Templates de texto para los exports.
      - `TPL_MD_HEADER(project, date)`
      - `TPL_OSTP_SEAL()`
      - `TPL_PS1_HEADER(project, date)`

      ### cmd/cmd.js
      Genera output formateado para PowerShell.
      - Árbol completo en formato `console`
      - `Get-Content` con contenido inline para los archivos clave
      - Botón Copy para clipboard

      ---

      ## src/ui/

      ### topbar/topbar.js
      - Actualiza `#cmdLine` con el comando actual via `setCmd()`
      - Escucha `project:loaded` y `status:set`

      ### sidebar/sidebar.js
      - `loadFiles(files)` — carga y procesa el FileList del browser
      - `renderSidebar()` — renderiza el file tree filtrado
      - Maneja drag & drop y upload zone

      ### toolbar/toolbar.js
      - Actualiza `#tp` (path actual) cuando se selecciona un archivo

      ### terminal/terminal.js
      - `addLog(type, msg)` — agrega línea al terminal
      - Tipos: `ok`, `warn`, `err`, `info`, `muted`
      - `clearLog()` expuesto en `window`

      ### statusbar/statusbar.js
      - Actualiza `#stMsg` con el status actual
      - Mantiene el reloj `#stTime` actualizado cada segundo

      ### buttons/buttons.js
      - Conecta todos los botones del topbar con sus acciones
      - Inicializa los view tabs
      - Conecta los filter chips con `State.setFilter()`
      - Carga los keyboard shortcuts de `config/shortcuts.json`

      ---

      ## config/

      | Archivo | Contenido |
      |---------|-----------|
      | `app.config.json` | Config global de la app |
      | `classify.json` | Reglas de clasificación por extensión |
      | `versions.json` | Tabla de versiones compatibles Kotlin/KSP/AGP |
      | `shortcuts.json` | Keyboard shortcuts |

      ---

      ## data/

      | Archivo | Contenido |
      |---------|-----------|
      | `schemas/android-schema.json` | Estructura esperada de proyecto Android |
      | `schemas/gradle-schema.json` | Matriz de compatibilidad Gradle + errores comunes |
      | `rules/kotlin-compat.json` | Reglas kapt vs ksp |
      | `rules/nav-id-rules.json` | Reglas de IDs nav_graph vs menu |

      ---

            ________________________________________
        <!--████████████████ostp████████████████████-->
      ```

      ### DirTreeGen/docs/yaml/prompt.yaml
      ```yaml
      # ═══════════════════════════════════════════════════════════════
      #  OSTP DevTool — AI Prompt Context
      #  docs/yaml/prompt.yaml
      #  @echoShift · QUANTUM.qnu · Zapopan, Jalisco
      # ═══════════════════════════════════════════════════════════════

      identity:
        name:     "OSTP DevTool"
        alias:    "Agente Rider"
        author:   "@echoShift"
        system:   "QUANTUM.qnu"
        location: "Zapopan, Jalisco, México"
        context:  "Modo agente OSTP activado"

      project:
        name:    "DirTreeGen"
        repo:    "ostp-echoshift.github.io"
        version: "1.0.0"
        stack:
          - "HTML5 vanilla"
          - "CSS modular (no framework)"
          - "JavaScript ES Modules"
          - "GitHub Pages (hosting)"

      mission: >
        Eliminar el punto ciego entre comunicación, construcción y resultados
        en proyectos de desarrollo. La herramienta ubica, abre, lee, desglosea,
        mapea posición, genera organización, sustrae, migra a formato distinto
        y emite output legible para el usuario Y para la consola (PowerShell).

      modules:
        - id: tree
          desc: "Árbol visual del proyecto en formato console"
        - id: reader
          desc: "Lee y despliega contenido real de cualquier archivo"
        - id: search
          desc: "Búsqueda por nombre y contenido con snippet"
        - id: validator
          desc: "Valida versiones Kotlin/KSP/AGP y alineación de IDs nav"
        - id: exporter
          desc: "Genera MD + TXT con sello OSTP"
        - id: cmd
          desc: "Output formateado para PowerShell / consola"

      android_context:
        project:   "JR-Sistema-Android"
        package:   "com.jrsistem.app"
        stack:
          kotlin:     "2.0.21"
          ksp:        "2.0.21-1.0.28"
          agp:        "8.7.3"
          room:       "2.7.0"
          gradle:     "9.3.1"
          jdk:        "Eclipse Adoptium 17.0.16.8-hotspot"
        java_home:  "C:\\Program Files\\Eclipse Adoptium\\jdk-17.0.16.8-hotspot"
        device:     "Moto G84 5G"
        emulator:   "Small Phone API 36"
        paths:
          project:   "C:\\Proyectos\\JR-Sistema-Android"
          devtool:   "C:\\Proyectos\\DirTreeGen"
          crossdev:  "C:\\Users\\fngtr\\CrossDevice\\moto g84 5G"

      known_errors:
        - id:    "kotlin-duplicate-plugin"
          error: "Cannot add extension with name 'kotlin'"
          fix:   "No declarar kotlin en buildscript Y en plugins{} simultáneamente"

        - id:    "kapt-kotlin2"
          error: "Kapt doesn't support language version 2.0+"
          fix:   "Migrar a KSP: id('com.google.devtools.ksp')"

        - id:    "stdlib-version-mismatch"
          error: "Metadata version 2.2.0, expected 2.0.0"
          fix:   "resolutionStrategy.force('kotlin-stdlib:2.0.21')"

        - id:    "nav-id-mismatch"
          error: "App no navega entre fragments"
          fix:   "IDs en nav_graph.xml deben ser idénticos a bottom_nav_menu.xml"

        - id:    "manifest-classnotfound"
          error: "ClassNotFoundException: com.jrsistem.app.MainActivity"
          fix:   "android:name en Manifest debe coincidir con nombre real del .kt"

        - id:    "java-home-invalid"
          error: "JAVA_HOME is set to an invalid directory"
          fix: >
            reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment"
            /v JAVA_HOME /t REG_SZ
            /d "C:\Program Files\Eclipse Adoptium\jdk-17.0.16.8-hotspot" /f

      output_formats:
        markdown:
          header:   "# Árbol de Directorios - Análisis Cuántico"
          system:   "QUANTUM.qnu Operation System"
          author:   "OSTP @echoShift & Quantum Sys"
          seal:     "<!--████████████████ostp████████████████████-->"
        powershell:
          header:   "# OSTP DevTool — PowerShell Output"
          command:  "Get-Content \"{path}\" -Raw"
          seal:     "# <!--████████████████ostp████████████████████-->"

      brand:
        colors:
          primary:   "#00ff90"
          secondary: "#58a6ff"
          accent:    "#ff6b6b"
          vino:      "#6D1A2A"
          gold:      "#C8982A"
        fonts:
          ui:   "Segoe UI, system-ui"
          mono: "Consolas, Monaco"
        seal:   "<!--████████████████ostp████████████████████-->"
        themes:
          - dark
          - quantum
      ```

      ### DirTreeGen/index.html
      ```html
      <!DOCTYPE html>
      <html lang="es" data-theme="dark">
      <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <title>OSTP · DevTool · @echoShift</title>
      <link rel="stylesheet" href="styles/main.css"/>
      </head>
      <body>

      <div id="app">

        <!-- ── TOPBAR ─────────────────────────────────────── -->
        <div id="topbar">
          <div class="topbar-brand">
            <div class="topbar-brand-dot"></div>
            <div>
              <div class="topbar-brand-name">OSTP · DevTool</div>
              <div class="topbar-brand-sub">@echoShift · QUANTUM.qnu</div>
            </div>
          </div>

          <div class="topbar-cmd">
            <div class="topbar-cmd-inner">
              <span class="prompt">→</span>
              <span id="cmdLine">ostp devtool --ready</span>
            </div>
          </div>

          <div class="topbar-actions">
            <button class="btn btn-vino" onclick="triggerOpen()">📁 Abrir</button>
            <button class="btn btn-gold"    id="bMd"  disabled>⬇ MD</button>
            <button class="btn btn-success" id="bTxt" disabled>⬇ TXT</button>
            <button class="btn btn-primary" id="bCmd" disabled>⬡ PS1</button>
            <input type="file" id="fi" webkitdirectory multiple style="display:none"/>
          </div>
        </div>

        <!-- ── BODY ───────────────────────────────────────── -->
        <div id="body">

          <!-- ── SIDEBAR ─────────────────────────────────── -->
          <div id="sidebar">

            <div class="sidebar-section">
              <div class="label" style="margin-bottom:8px">Proyecto</div>
              <div class="upload-zone" id="uz">
                <input type="file" webkitdirectory multiple id="fi2"/>
                <span class="upload-zone-icon">📂</span>
                <div class="upload-zone-text">Arrastra una carpeta</div>
                <div class="upload-zone-sub">o haz click aquí</div>
              </div>

              <div class="search-wrap">
                <span class="search-icon">⌕</span>
                <input type="text" id="si" placeholder="ostp search..."/>
                <div class="search-results" id="sr"></div>
              </div>
            </div>

            <!-- Filters -->
            <div class="chips" id="chips">
              <span class="chip on"  data-e="">ALL</span>
              <span class="chip" data-e="kt">.kt</span>
              <span class="chip" data-e="xml">.xml</span>
              <span class="chip" data-e="kts">.kts</span>
              <span class="chip" data-e="toml">.toml</span>
              <span class="chip" data-e="properties">.prop</span>
              <span class="chip" data-e="json">.json</span>
              <span class="chip" data-e="md">.md</span>
              <span class="chip" data-e="sql">.sql</span>
              <span class="chip" data-e="ps1">.ps1</span>
            </div>

            <!-- Stats -->
            <div class="stats-row">
              <div class="stat-cell"><div class="stat-n" id="sT">0</div><div class="stat-l">Files</div></div>
              <div class="stat-cell"><div class="stat-n" id="sF">0</div><div class="stat-l">Dirs</div></div>
              <div class="stat-cell"><div class="stat-n" id="sC" style="color:var(--risk-critical)">0</div><div class="stat-l">Crit</div></div>
              <div class="stat-cell"><div class="stat-n" id="sH" style="color:var(--risk-high)">0</div><div class="stat-l">High</div></div>
            </div>

            <div class="label" style="padding:6px 14px">Estructura</div>
            <div id="file-tree"></div>
          </div>

          <!-- ── MAIN ─────────────────────────────────────── -->
          <div id="main">

            <!-- Toolbar -->
            <div id="toolbar">
              <div class="toolbar-path" id="tp">— sin proyecto —</div>
              <div class="view-tabs">
                <button class="vt on" id="vt-tree">🌳 TREE</button>
                <button class="vt"    id="vt-content">📄 READ</button>
                <button class="vt"    id="vt-export">📤 EXPORT</button>
                <button class="vt"    id="vt-validate">✓ VALIDATE</button>
                <button class="vt"    id="vt-cmd">⬡ PS1</button>
              </div>
            </div>

            <!-- Output -->
            <div id="output">
              <div class="empty">
                <div class="empty-icon">⬡</div>
                <div style="font-size:14px;font-weight:700;color:var(--text)">OSTP · DevTool v1</div>
                <div class="mono-sm" style="color:var(--text-muted);margin-top:4px">Oficina de Soluciones Técnicas y Prototipado</div>
                <button class="btn btn-success" onclick="triggerOpen()" style="margin-top:12px">📂 Abrir Proyecto</button>
              </div>
            </div>

            <!-- Terminal -->
            <div id="terminal">
              <div class="term-header">
                <div class="term-title">OSTP · TERMINAL</div>
                <button class="btn btn-vino btn-xs" onclick="clearLog()">CLR</button>
              </div>
              <div class="term-log" id="log"></div>
            </div>

          </div>
        </div>

        <!-- ── STATUS BAR ─────────────────────────────────── -->
        <div id="statusbar">
          <div class="status-item">
            <div class="status-dot" style="background:var(--ostp-primary)"></div>
            <span class="status-ok" id="stMsg">READY</span>
          </div>
          <span>OSTP · @echoShift · Zapopan, Jalisco</span>
          <span class="status-right" id="stTime"></span>
        </div>

      </div>

      <script type="module" src="src/core/app.js"></script>
      </body>
      </html>
      ```

      ### DirTreeGen/ostp-dirgen.html
      ```html
      <!DOCTYPE html>
      <html lang="es">
      <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <title>OSTP · DevTool · @echoShift</title>
      <style>
      :root{
        --primary:#00ff90;
        --secondary:#58a6ff;
        --accent:#ff6b6b;
        --warn:#d29922;
        --dark:#0a0f1c;
        --darker:#050811;
        --card:#161b22;
        --border:#1e2d3d;
        --text:#c9d1d9;
        --muted:#8b949e;
        --vino:#6D1A2A;
        --gold:#C8982A;
      }
      *{box-sizing:border-box;margin:0;padding:0}
      html,body{height:100%;overflow:hidden}
      body{font-family:'Segoe UI',system-ui,sans-serif;background:var(--darker);color:var(--text);display:flex;flex-direction:column}

      /* ── TOPBAR ── */
      .topbar{
        background:linear-gradient(90deg,var(--darker),#0d1525);
        border-bottom:1px solid var(--border);
        padding:0 20px;
        height:52px;
        display:flex;align-items:center;gap:16px;
        flex-shrink:0;
        position:relative;
      }
      .topbar::after{
        content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
        background:linear-gradient(90deg,var(--accent),var(--primary),var(--secondary));
      }
      .brand{display:flex;align-items:center;gap:10px}
      .brand-dot{width:8px;height:8px;border-radius:50%;background:var(--primary);box-shadow:0 0 8px var(--primary)}
      .brand-name{font-size:15px;font-weight:700;letter-spacing:1px;color:#fff}
      .brand-echo{color:var(--primary);font-size:12px;letter-spacing:2px}
      .topbar-center{flex:1;display:flex;justify-content:center}
      .topbar-cmd{
        background:rgba(0,255,144,0.06);border:1px solid rgba(0,255,144,0.15);
        border-radius:6px;padding:5px 14px;font-family:monospace;font-size:12px;
        color:var(--muted);display:flex;align-items:center;gap:8px
      }
      .topbar-cmd .prompt{color:var(--primary)}
      .topbar-actions{display:flex;gap:8px;margin-left:auto}

      /* ── LAYOUT ── */
      .app{display:flex;flex:1;overflow:hidden}

      /* ── SIDEBAR ── */
      .sidebar{
        width:300px;flex-shrink:0;
        background:var(--card);
        border-right:1px solid var(--border);
        display:flex;flex-direction:column;
        overflow:hidden;
      }
      .sidebar-header{
        padding:12px 14px 8px;
        border-bottom:1px solid var(--border);
        background:rgba(0,0,0,0.2);
      }
      .sidebar-title{font-size:9px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:8px}

      /* UPLOAD ZONE */
      .upload-zone{
        border:1px dashed var(--border);border-radius:8px;
        padding:14px;text-align:center;cursor:pointer;
        transition:all 0.2s;position:relative;
        background:rgba(0,255,144,0.02);
      }
      .upload-zone:hover,.upload-zone.drag{
        border-color:var(--primary);background:rgba(0,255,144,0.06);
      }
      .upload-zone input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
      .upload-zone .uz-icon{font-size:20px;margin-bottom:4px;display:block}
      .upload-zone .uz-text{font-size:11px;color:var(--muted)}
      .upload-zone .uz-sub{font-size:10px;color:var(--border);margin-top:2px}

      /* SEARCH */
      .search-wrap{position:relative;margin-top:8px}
      .search-wrap input{
        width:100%;background:var(--darker);border:1px solid var(--border);
        color:var(--text);padding:7px 10px 7px 28px;border-radius:6px;
        font-size:12px;font-family:monospace;outline:none;transition:border 0.2s
      }
      .search-wrap input:focus{border-color:var(--primary)}
      .search-wrap input::placeholder{color:var(--border)}
      .search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:13px;pointer-events:none}
      .search-results{
        position:absolute;top:100%;left:0;right:0;z-index:50;
        background:var(--card);border:1px solid var(--border);border-radius:6px;
        margin-top:2px;max-height:220px;overflow-y:auto;display:none;
      }
      .sr-item{
        padding:7px 10px;font-size:11px;cursor:pointer;
        border-bottom:1px solid rgba(30,45,61,0.5);
        display:flex;align-items:flex-start;gap:7px;transition:background 0.1s;
      }
      .sr-item:hover{background:rgba(0,255,144,0.06)}
      .sr-item .sr-name{color:var(--secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .sr-item .sr-snip{font-size:10px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .hl{color:var(--primary);font-weight:700}

      /* FILTERS */
      .filters{padding:8px 14px;border-bottom:1px solid var(--border);display:flex;flex-wrap:wrap;gap:4px}
      .chip{
        padding:2px 8px;border-radius:20px;font-size:10px;cursor:pointer;
        border:1px solid var(--border);background:transparent;color:var(--muted);
        transition:all 0.15s;font-family:monospace;letter-spacing:0.5px;
      }
      .chip.on{background:var(--primary);color:#000;border-color:var(--primary)}
      .chip:hover:not(.on){border-color:var(--primary);color:var(--primary)}

      /* STATS */
      .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);flex-shrink:0}
      .stat-cell{background:var(--darker);padding:8px 4px;text-align:center}
      .stat-n{font-size:16px;font-weight:700;font-family:monospace;color:var(--primary)}
      .stat-l{font-size:8px;letter-spacing:1px;color:var(--muted);text-transform:uppercase}

      /* FILE TREE */
      .file-tree{flex:1;overflow-y:auto;padding:6px 0}
      .ti{
        padding:3px 0 3px 0;font-size:11px;font-family:monospace;
        display:flex;align-items:center;gap:5px;cursor:pointer;
        border-left:2px solid transparent;transition:all 0.1s;
        white-space:nowrap;overflow:hidden;
      }
      .ti:hover{background:rgba(88,166,255,0.06);border-left-color:var(--secondary)}
      .ti.sel{background:rgba(0,255,144,0.08);border-left-color:var(--primary);color:var(--primary)}
      .ti-folder{color:var(--secondary)}
      .ti-name{overflow:hidden;text-overflow:ellipsis;flex:1}
      .ti-risk{font-size:8px;margin-left:auto;padding-right:6px;white-space:nowrap}
      .risk-c{color:var(--accent)}
      .risk-h{color:#ff8e8e}
      .risk-m{color:var(--warn)}
      .risk-l{color:var(--border)}

      /* ── MAIN ── */
      .main{flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--darker)}

      /* TOOLBAR */
      .toolbar{
        height:40px;border-bottom:1px solid var(--border);
        display:flex;align-items:center;padding:0 14px;gap:10px;
        background:rgba(22,27,34,0.8);flex-shrink:0;
      }
      .toolbar-path{font-family:monospace;font-size:11px;color:var(--muted);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .view-tabs{display:flex;gap:2px}
      .vt{
        padding:4px 11px;border-radius:4px;font-size:10px;cursor:pointer;
        border:1px solid var(--border);background:transparent;color:var(--muted);
        transition:all 0.15s;letter-spacing:0.5px;
      }
      .vt.on{background:var(--primary);color:#000;border-color:var(--primary)}

      /* OUTPUT */
      .output{flex:1;overflow-y:auto;overflow-x:hidden}

      /* VIEWS */
      .v-tree{padding:14px;font-family:monospace;font-size:12px;line-height:1.7}
      .v-content{padding:0}
      .v-export{padding:14px;font-family:monospace;font-size:12px;line-height:1.6;white-space:pre-wrap;color:var(--primary)}
      .v-validate{padding:14px}
      .v-cmd{padding:14px;font-family:monospace;font-size:12px}

      /* FILE BLOCK */
      .fb{border:1px solid var(--border);border-radius:7px;margin:10px 14px;overflow:hidden}
      .fb-head{
        background:rgba(0,0,0,0.3);padding:7px 12px;
        display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--border);
      }
      .fb-path{font-family:monospace;font-size:11px;color:var(--secondary);flex:1;overflow:hidden;text-overflow:ellipsis}
      .fb-meta{font-size:10px;color:var(--muted)}
      .fb-body{
        padding:12px;font-family:'Consolas','Monaco',monospace;font-size:12px;
        line-height:1.6;white-space:pre-wrap;word-break:break-all;
        color:var(--text);background:rgba(5,8,17,0.6);
        max-height:280px;overflow-y:auto;
      }
      .fb-body.coll{max-height:70px;overflow:hidden;mask-image:linear-gradient(to bottom,black 40%,transparent)}
      .fb-toggle{
        background:transparent;border:1px solid var(--border);color:var(--muted);
        font-size:10px;padding:2px 8px;border-radius:3px;cursor:pointer;
      }
      .fb-toggle:hover{border-color:var(--primary);color:var(--primary)}

      /* TERMINAL PANEL */
      .term{
        border-top:1px solid var(--border);height:150px;flex-shrink:0;
        background:var(--darker);display:flex;flex-direction:column;overflow:hidden;
      }
      .term-header{
        padding:4px 14px;border-bottom:1px solid var(--border);
        display:flex;align-items:center;gap:8px;background:rgba(0,0,0,0.3);
        flex-shrink:0;
      }
      .term-title{font-size:10px;letter-spacing:2px;color:var(--muted);flex:1}
      .term-log{flex:1;overflow-y:auto;padding:8px 14px;font-family:monospace;font-size:11px;line-height:1.7}
      .tl{display:flex;gap:6px;align-items:flex-start}
      .tl-ok{color:var(--primary)}
      .tl-warn{color:var(--warn)}
      .tl-err{color:var(--accent)}
      .tl-info{color:var(--secondary)}
      .tl-muted{color:var(--muted)}

      /* VALIDATOR */
      .val-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
      .val-card{background:var(--card);border:1px solid var(--border);border-radius:7px;padding:12px}
      .val-title{font-size:10px;letter-spacing:1px;color:var(--muted);text-transform:uppercase;margin-bottom:8px}
      .val-row{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-family:monospace;padding:3px 0}
      .val-ok{color:var(--primary)}
      .val-warn{color:var(--warn)}
      .val-err{color:var(--accent)}
      .val-badge{font-size:10px;padding:1px 6px;border-radius:3px;font-weight:700}
      .badge-ok{background:rgba(0,255,144,0.15);color:var(--primary)}
      .badge-warn{background:rgba(210,153,34,0.15);color:var(--warn)}
      .badge-err{background:rgba(255,107,107,0.15);color:var(--accent)}

      /* BUTTONS */
      .btn{
        padding:5px 12px;border:none;border-radius:5px;font-size:11px;
        font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px;
        transition:all 0.15s;letter-spacing:0.5px;
      }
      .btn-p{background:linear-gradient(135deg,var(--secondary),#1f6feb);color:#fff}
      .btn-s{background:linear-gradient(135deg,var(--primary),#00cc7a);color:#000}
      .btn-v{background:linear-gradient(135deg,var(--vino),#3d0a14);color:#FDF6EC;border:1px solid rgba(109,26,42,0.5)}
      .btn-g{background:linear-gradient(135deg,var(--gold),#8B6520);color:#fff}
      .btn:hover{transform:translateY(-1px);opacity:0.9}
      .btn:disabled{opacity:0.3;cursor:not-allowed;transform:none}

      /* EMPTY */
      .empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;color:var(--muted);padding:40px;text-align:center}
      .empty-icon{font-size:40px;opacity:0.3}

      /* CMD OUTPUT */
      .cmd-block{background:rgba(0,0,0,0.4);border:1px solid var(--border);border-radius:6px;padding:14px;font-family:monospace;font-size:12px;line-height:1.8;white-space:pre-wrap;color:var(--text);position:relative}
      .cmd-copy{position:absolute;top:8px;right:8px;background:var(--card);border:1px solid var(--border);color:var(--muted);padding:2px 8px;border-radius:4px;font-size:10px;cursor:pointer}
      .cmd-copy:hover{color:var(--primary);border-color:var(--primary)}

      /* SCROLLBAR */
      ::-webkit-scrollbar{width:4px;height:4px}
      ::-webkit-scrollbar-track{background:transparent}
      ::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px}
      ::-webkit-scrollbar-thumb:hover{background:var(--secondary)}

      /* STATUS BAR */
      .statusbar{
        height:24px;flex-shrink:0;background:var(--vino);
        display:flex;align-items:center;padding:0 14px;gap:16px;
        font-size:10px;letter-spacing:1px;color:rgba(253,246,236,0.7);
      }
      .status-ok{color:var(--primary)}
      .status-item{display:flex;align-items:center;gap:4px}
      .status-dot{width:5px;height:5px;border-radius:50%}
      </style>
      </head>
      <body>

      <!-- TOPBAR -->
      <div class="topbar">
        <div class="brand">
          <div class="brand-dot"></div>
          <div>
            <div class="brand-name">OSTP · DevTool</div>
            <div class="brand-echo">@echoShift · QUANTUM.qnu</div>
          </div>
        </div>
        <div class="topbar-center">
          <div class="topbar-cmd">
            <span class="prompt">→</span>
            <span id="cmdLine">ostp devtool --ready</span>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="btn btn-v" onclick="trigger()">📁 Abrir</button>
          <button class="btn btn-g" id="bMd" disabled onclick="doExportMd()">⬇ MD</button>
          <button class="btn btn-s" id="bTxt" disabled onclick="doExportTxt()">⬇ TXT</button>
          <button class="btn btn-p" id="bCmd" disabled onclick="setView('cmd')">⬡ PowerShell</button>
          <input type="file" id="fi" webkitdirectory multiple style="display:none" onchange="load(this.files)"/>
        </div>
      </div>

      <!-- APP -->
      <div class="app">

        <!-- SIDEBAR -->
        <div class="sidebar">
          <div class="sidebar-header">
            <div class="sidebar-title">Proyecto</div>
            <div class="upload-zone" id="uz">
              <input type="file" webkitdirectory multiple onchange="load(this.files)"/>
              <span class="uz-icon">📂</span>
              <div class="uz-text">Arrastra una carpeta</div>
              <div class="uz-sub">o haz click para seleccionar</div>
            </div>
            <div class="search-wrap" style="margin-top:8px">
              <span class="search-icon">⌕</span>
              <input type="text" id="si" placeholder="ostp search..." oninput="doSearch(this.value)"/>
              <div class="search-results" id="sr"></div>
            </div>
          </div>

          <div class="filters" id="chips">
            <span class="chip on" data-e="" onclick="setFilter(this,'')">ALL</span>
            <span class="chip" data-e="kt" onclick="setFilter(this,'kt')">.kt</span>
            <span class="chip" data-e="xml" onclick="setFilter(this,'xml')">.xml</span>
            <span class="chip" data-e="kts" onclick="setFilter(this,'kts')">.kts</span>
            <span class="chip" data-e="toml" onclick="setFilter(this,'toml')">.toml</span>
            <span class="chip" data-e="properties" onclick="setFilter(this,'properties')">.prop</span>
            <span class="chip" data-e="json" onclick="setFilter(this,'json')">.json</span>
            <span class="chip" data-e="md" onclick="setFilter(this,'md')">.md</span>
            <span class="chip" data-e="sql" onclick="setFilter(this,'sql')">.sql</span>
            <span class="chip" data-e="ps1" onclick="setFilter(this,'ps1')">.ps1</span>
          </div>

          <div class="stats-row">
            <div class="stat-cell"><div class="stat-n" id="sT">0</div><div class="stat-l">Files</div></div>
            <div class="stat-cell"><div class="stat-n" id="sF">0</div><div class="stat-l">Dirs</div></div>
            <div class="stat-cell"><div class="stat-n" id="sC" style="color:var(--accent)">0</div><div class="stat-l">Crit</div></div>
            <div class="stat-cell"><div class="stat-n" id="sH" style="color:#ff8e8e">0</div><div class="stat-l">High</div></div>
          </div>

          <div class="file-tree" id="ft">
            <div style="padding:20px;text-align:center;font-size:11px;color:var(--border)">
              ostp awaiting target...
            </div>
          </div>
        </div>

        <!-- MAIN -->
        <div class="main">
          <div class="toolbar">
            <div class="toolbar-path" id="tp">— selecciona un proyecto —</div>
            <div class="view-tabs">
              <button class="vt on" onclick="setView('tree')" id="vt-tree">🌳 TREE</button>
              <button class="vt" onclick="setView('content')" id="vt-content">📄 READ</button>
              <button class="vt" onclick="setView('export')" id="vt-export">📤 EXPORT</button>
              <button class="vt" onclick="setView('validate')" id="vt-validate">✓ VALIDATE</button>
              <button class="vt" onclick="setView('cmd')" id="vt-cmd">⬡ PS1</button>
            </div>
          </div>

          <div class="output" id="out">
            <div class="empty">
              <div class="empty-icon">⬡</div>
              <div style="font-size:14px;font-weight:700;color:var(--text)">OSTP · DevTool v1</div>
              <div style="font-size:12px;max-width:300px">
                Oficina de Soluciones Técnicas y Prototipado<br>
                <span style="color:var(--muted)">Abre una carpeta para iniciar el análisis cuántico</span>
              </div>
              <button class="btn btn-s" onclick="trigger()" style="margin-top:8px">📂 Abrir Proyecto</button>
            </div>
          </div>

          <!-- TERMINAL -->
          <div class="term">
            <div class="term-header">
              <div class="term-title">OSTP · TERMINAL</div>
              <button class="btn btn-v" onclick="clearLog()" style="padding:2px 8px;font-size:9px">CLR</button>
            </div>
            <div class="term-log" id="log">
              <div class="tl"><span class="tl-muted">→</span><span class="tl-info">ostp devtool v1.0 · QUANTUM.qnu · @echoShift · READY</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- STATUS BAR -->
      <div class="statusbar">
        <div class="status-item">
          <div class="status-dot" style="background:var(--primary)"></div>
          <span class="status-ok" id="stMsg">READY</span>
        </div>
        <span>OSTP · @echoShift · Zapopan, Jalisco</span>
        <span style="margin-left:auto" id="stTime"></span>
      </div>

      <script>
      // ═══════════════════════════════════════════════════════
      //  OSTP DevTool v1 — Motor central
      //  @echoShift · QUANTUM.qnu · Zapopan, Jalisco
      // ═══════════════════════════════════════════════════════

      let allFiles=[], treeRoot=null, idx=[], view='tree', filter='', selNode=null;
      const st={total:0,dirs:0,crit:0,high:0};

      // ── CLASSIFY ─────────────────────────────────────────
      const EXT_MAP={
        kt:{icon:'🟣',risk:'m',rl:'⚠ MEDIUM'},
        kts:{icon:'🔧',risk:'h',rl:'🔥 HIGH'},
        gradle:{icon:'🔧',risk:'h',rl:'🔥 HIGH'},
        xml:{icon:'🔧',risk:'h',rl:'🔥 HIGH'},
        toml:{icon:'📋',risk:'h',rl:'🔥 HIGH'},
        properties:{icon:'⚙️',risk:'h',rl:'🔥 HIGH'},
        json:{icon:'🌐',risk:'m',rl:'⚠ MEDIUM'},
        md:{icon:'📜',risk:'l',rl:'ℹ LOW'},
        sql:{icon:'🗄️',risk:'c',rl:'🔥🔥 CRITICAL'},
        ps1:{icon:'🏗️',risk:'h',rl:'🔥 HIGH'},
        bat:{icon:'🏗️',risk:'h',rl:'🔥 HIGH'},
        cmd:{icon:'🏗️',risk:'h',rl:'🔥 HIGH'},
        js:{icon:'📜',risk:'m',rl:'⚠ MEDIUM'},
        html:{icon:'🌐',risk:'m',rl:'⚠ MEDIUM'},
        css:{icon:'🎨',risk:'l',rl:'ℹ LOW'},
        txt:{icon:'📄',risk:'l',rl:'ℹ LOW'},
        log:{icon:'📄',risk:'l',rl:'ℹ LOW'},
        java:{icon:'☕',risk:'m',rl:'⚠ MEDIUM'},
        gitignore:{icon:'🚫',risk:'l',rl:'ℹ LOW'},
        apk:{icon:'📦',risk:'h',rl:'🔥 HIGH'},
        exe:{icon:'⚙️',risk:'h',rl:'🔥 HIGH'},
      };
      function classify(name){
        const e=name.split('.').pop().toLowerCase();
        const n=name.toLowerCase();
        if(n.includes('password')||n.includes('secret')||n.endsWith('.env'))
          return{icon:'🔑',risk:'c',rl:'🔥🔥 CRITICAL',ext:'env'};
        return EXT_MAP[e]||{icon:'📄',risk:'l',rl:'ℹ LOW',ext:e};
      }

      // ── TEXT EXTENSIONS ───────────────────────────────────
      const TEXT_EXT=new Set(['kt','kts','xml','toml','properties','json','md','sql','ps1','bat','cmd',
        'js','html','css','txt','log','java','gradle','gitignore','sh','yaml','yml','csv','env']);

      function isText(name){
        const e=name.split('.').pop().toLowerCase();
        return TEXT_EXT.has(e)||name.startsWith('.');
      }

      // ── LOAD ─────────────────────────────────────────────
      function trigger(){document.getElementById('fi').click()}

      async function load(files){
        allFiles=Array.from(files);
        st.total=0;st.dirs=0;st.crit=0;st.high=0;idx=[];
        treeRoot={name:'root',type:'folder',children:[],path:''};
        const dirs=new Set();

        allFiles.sort((a,b)=>a.webkitRelativePath.localeCompare(b.webkitRelativePath));

        allFiles.forEach(f=>{
          const parts=f.webkitRelativePath.split('/');
          let node=treeRoot;
          parts.forEach((p,i)=>{
            const isFile=i===parts.length-1;
            let ch=node.children.find(c=>c.name===p);
            if(!ch){
              const path=parts.slice(0,i+1).join('/');
              ch={name:p,type:isFile?'file':'folder',path,children:isFile?null:[],file:isFile?f:null,cl:isFile?classify(p):null};
              node.children.push(ch);
              if(isFile){
                st.total++;
                if(ch.cl.risk==='c')st.crit++;
                if(ch.cl.risk==='h')st.high++;
                idx.push({name:p,path,file:f,cl:ch.cl,content:''});
              } else {
                if(!dirs.has(path)){dirs.add(path);st.dirs++;}
              }
            }
            if(!isFile)node=ch;
          });
        });

        log_('info',`→ ostp scan "${treeRoot.children[0]?.name||'project'}" --all`);
        log_('ok',`✓ ${st.total} files · ${st.dirs} dirs`);
        
        // Read text contents
        await Promise.all(idx.map(async item=>{
          if(isText(item.name)){
            try{item.content=await item.file.text();}catch(e){item.content='';}
          }
        }));
        
        log_('ok',`✓ Text content loaded · Ready`);
        updateStats();
        renderSidebar();
        setView('tree');
        renderMain();
        
        document.getElementById('bMd').disabled=false;
        document.getElementById('bTxt').disabled=false;
        document.getElementById('bCmd').disabled=false;
        document.getElementById('tp').textContent=`~/${treeRoot.children[0]?.name||'project'}`;
        setCmd(`ostp scan "${treeRoot.children[0]?.name||'project'}" --files ${st.total} --ok`);
        setStatus(`✓ ${st.total} archivos · ${st.dirs} carpetas`);
      }

      // ── SIDEBAR ───────────────────────────────────────────
      function renderSidebar(flt='',q=''){
        const ft=document.getElementById('ft');
        ft.innerHTML='';
        renderNode(treeRoot,ft,0,flt,q);
      }

      function renderNode(node,cont,depth,flt,q){
        if(node.name==='root'){
          node.children.forEach(c=>renderNode(c,cont,depth,flt,q));
          return;
        }
        if(node.type==='file'){
          if(flt&&node.name.split('.').pop().toLowerCase()!==flt)return;
          if(q&&!node.name.toLowerCase().includes(q)&&
             !(idx.find(s=>s.path===node.path)?.content?.toLowerCase().includes(q)))return;
          
          const d=document.createElement('div');
          d.className='ti risk-'+{'c':'c','h':'h','m':'m','l':'l'}[node.cl?.risk||'l'];
          d.style.paddingLeft=(depth*12+8)+'px';
          d.innerHTML=`<span>${node.cl?.icon||'📄'}</span><span class="ti-name">${node.name}</span><span class="ti-risk">${node.cl?.rl||''}</span>`;
          d.onclick=()=>openFile(node,d);
          cont.appendChild(d);
          return;
        }
        
        // Folder
        const fd=document.createElement('div');
        fd.className='ti ti-folder';
        fd.style.paddingLeft=(depth*12+8)+'px';
        const arrow=document.createElement('span');
        arrow.textContent='▾';
        arrow.style.cssText='font-size:9px;color:var(--muted)';
        fd.appendChild(arrow);
        const ico=document.createElement('span');ico.textContent='📂';fd.appendChild(ico);
        const nm=document.createElement('span');nm.className='ti-name';nm.textContent=node.name+'/';fd.appendChild(nm);
        
        const children=document.createElement('div');
        children.id='fd-'+node.path.replace(/\W/g,'_');
        let open=true;
        fd.onclick=e=>{
          if(e.target===fd||e.target===nm||e.target===arrow||e.target===ico){
            open=!open;
            children.style.display=open?'':'none';
            arrow.textContent=open?'▾':'▸';
            ico.textContent=open?'📂':'📁';
          }
        };
        cont.appendChild(fd);
        cont.appendChild(children);
        if(node.children)node.children.forEach(c=>renderNode(c,children,depth+1,flt,q));
      }

      // ── OPEN FILE ─────────────────────────────────────────
      function openFile(node,el){
        document.querySelectorAll('.ti').forEach(e=>e.classList.remove('sel'));
        el.classList.add('sel');
        selNode=node;
        document.getElementById('tp').textContent=node.path;
        log_('info',`→ ostp read "${node.path}"`);
        if(view==='tree')setView('content');
        renderMain();
      }

      // ── VIEW ─────────────────────────────────────────────
      function setView(v){
        view=v;
        ['tree','content','export','validate','cmd'].forEach(t=>{
          document.getElementById('vt-'+t)?.classList.toggle('on',t===v);
        });
        renderMain();
      }

      function renderMain(){
        const out=document.getElementById('out');
        if(!treeRoot){
          out.innerHTML='<div class="empty"><div class="empty-icon">⬡</div><div>Sin proyecto cargado</div></div>';
          return;
        }
        out.innerHTML='';
        if(view==='tree')renderTree(out);
        else if(view==='content')selNode?renderFile(out,selNode):renderAllContent(out);
        else if(view==='export')renderExport(out);
        else if(view==='validate')renderValidate(out);
        else if(view==='cmd')renderCmd(out);
      }

      // ── TREE VIEW ─────────────────────────────────────────
      function renderTree(out){
        const d=document.createElement('div');
        d.className='v-tree';
        d.innerHTML='<pre style="color:var(--text);font-size:12px">'+esc(buildTreeStr(treeRoot,'',true))+'</pre>';
        out.appendChild(d);
      }

      function buildTreeStr(node,pfx,isLast){
        let s='';
        if(node.name!=='root'){
          const conn=isLast?'└── ':'├── ';
          if(node.type==='folder')s+=pfx+conn+'📁 '+node.name+'/\n';
          else s+=pfx+conn+(node.cl?.icon||'📄')+' '+node.name+'\n';
        }
        if(node.children){
          const np=node.name==='root'?pfx:pfx+(isLast?'    ':'│   ');
          node.children.forEach((c,i)=>s+=buildTreeStr(c,np,i===node.children.length-1));
        }
        return s;
      }

      // ── FILE VIEW ─────────────────────────────────────────
      function renderFile(out,node){
        out.className='output v-content';
        const item=idx.find(s=>s.path===node.path);
        if(!item||!item.content){
          out.innerHTML='<div style="padding:20px;color:var(--muted);font-family:monospace;font-size:12px">Archivo binario — sin contenido legible</div>';
          return;
        }
        const lines=item.content.split('\n').length;
        const kb=(item.file.size/1024).toFixed(1);
        
        const fb=document.createElement('div');
        fb.className='fb';
        const coll=lines>30;
        fb.innerHTML=`
          <div class="fb-head">
            <span class="fb-path">${node.cl?.icon||'📄'} ${node.path}</span>
            <span class="fb-meta">${kb} KB · ${lines} líneas</span>
            ${coll?`<button class="fb-toggle" onclick="tog(this)">Expandir</button>`:''}
          </div>
          <div class="fb-body ${coll?'coll':''}">${esc(item.content)}</div>
        `;
        out.appendChild(fb);
        log_('ok',`✓ read "${node.name}" · ${lines} lines · ${kb}KB`);
      }

      function tog(btn){
        const b=btn.closest('.fb').querySelector('.fb-body');
        const c=b.classList.toggle('coll');
        btn.textContent=c?'Expandir':'Colapsar';
      }

      // ── ALL CONTENT ───────────────────────────────────────
      function renderAllContent(out){
        const items=idx.filter(s=>s.content&&s.content.trim());
        if(!items.length){
          out.innerHTML='<div class="empty"><div>No hay archivos de texto cargados</div></div>';
          return;
        }
        items.forEach(item=>{
          const lines=item.content.split('\n').length;
          const kb=(item.file.size/1024).toFixed(1);
          const coll=lines>15;
          const fb=document.createElement('div');
          fb.className='fb';
          fb.innerHTML=`
            <div class="fb-head">
              <span class="fb-path">${item.cl?.icon||'📄'} ${item.path}</span>
              <span class="fb-meta">${kb}KB · ${lines}L</span>
              ${coll?`<button class="fb-toggle" onclick="tog(this)">Expandir</button>`:''}
            </div>
            <div class="fb-body ${coll?'coll':''}">${esc(item.content)}</div>
          `;
          out.appendChild(fb);
        });
      }

      // ── EXPORT VIEW ───────────────────────────────────────
      function renderExport(out){
        const md=buildMd();
        const d=document.createElement('div');
        d.className='v-export';
        d.textContent=md;
        out.appendChild(d);
      }

      function buildMd(){
        const now=new Date().toLocaleString();
        let s='# Árbol de Directorios - Análisis Cuántico\n\n';
        s+=`**Sistema:** QUANTUM.qnu Operation System  \n`;
        s+=`**Generado:** ${now}  \n`;
        s+=`**Tecnología:** OSTP @echoShift & Quantum Sys  \n\n`;
        s+='```console\n    '+buildTreeStr(treeRoot,'',true).replace(/\n/g,'\n    ')+'```\n\n';
        
        const items=idx.filter(i=>i.content&&i.content.trim());
        if(items.length){
          s+='-\n\n';
          items.forEach(item=>{
            s+=`### ${item.path}\n\`\`\`\n${item.content}\n\`\`\`\n\n`;
          });
        }
        
        s+='\n          ________________________________________\n';
        s+='      <!--████████████████ostp████████████████████-->\n';
        return s;
      }

      function buildTxt(){
        const now=new Date().toLocaleString();
        let s=`OSTP DevTool v1 · QUANTUM.qnu · @echoShift\n`;
        s+=`Generado: ${now}\n`;
        s+=`Archivos: ${st.total} · Directorios: ${st.dirs}\n`;
        s+=`Críticos: ${st.crit} · Alto riesgo: ${st.high}\n\n`;
        s+='ESTRUCTURA:\n'+buildTreeStr(treeRoot,'',true);
        s+='\n────────────────────────────────────────\n';
        s+='OSTP · @echoShift · Zapopan, Jalisco\n';
        return s;
      }

      // ── VALIDATE VIEW ─────────────────────────────────────
      function renderValidate(out){
        const d=document.createElement('div');
        d.className='v-validate';
        
        // Extraer versiones del proyecto
        const versions=extractVersions();
        const navIds=extractNavIds();
        const menuIds=extractMenuIds();
        
        d.innerHTML=`
          <div style="font-size:10px;letter-spacing:2px;color:var(--muted);margin-bottom:12px">→ ostp validate --all</div>
          
          <div class="val-grid">
            <div class="val-card">
              <div class="val-title">Versiones detectadas</div>
              ${versions.map(v=>`
                <div class="val-row">
                  <span style="color:var(--muted)">${v.name}</span>
                  <span style="display:flex;align-items:center;gap:6px">
                    <span style="color:var(--text)">${v.value||'—'}</span>
                    <span class="val-badge ${v.ok?'badge-ok':v.value?'badge-warn':'badge-err'}">${v.ok?'OK':v.value?'CHECK':'NO FOUND'}</span>
                  </span>
                </div>
              `).join('')}
            </div>
            
            <div class="val-card">
              <div class="val-title">IDs nav_graph vs menu</div>
              ${renderIdCheck(navIds,menuIds)}
            </div>
          </div>
          
          <div class="val-card" style="margin-bottom:10px">
            <div class="val-title">Archivos críticos detectados</div>
            ${idx.filter(i=>i.cl?.risk==='c').length===0
              ? '<div style="color:var(--primary);font-size:12px">✓ Sin archivos críticos</div>'
              : idx.filter(i=>i.cl?.risk==='c').map(i=>`
                <div class="val-row">
                  <span>${i.cl?.icon} ${i.name}</span>
                  <span class="val-badge badge-err">CRITICAL</span>
                </div>`).join('')
            }
          </div>
        `;
        out.appendChild(d);
        log_('info','→ ostp validate --versions --ids --security');
      }

      function extractVersions(){
        const res=[];
        const toml=idx.find(i=>i.name==='libs.versions.toml');
        const gradle=idx.find(i=>i.name==='build.gradle.kts'&&i.path.includes('/app/'));
        
        const check=(name,regex,src,expected)=>{
          const m=src?.content?.match(regex);
          const val=m?m[1]:null;
          res.push({name,value:val,ok:val&&(!expected||val.startsWith(expected))});
        };
        
        check('Kotlin',/kotlin\s*=\s*"([^"]+)"/,toml,'2.');
        check('AGP',/agp\s*=\s*"([^"]+)"/,toml,'8.');
        check('KSP',/ksp.*version.*"([^"]+)"/,gradle,'2.');
        check('Room',/room.*:([0-9.]+)/,gradle,null);
        check('Gradle',/gradle-wrapper\.properties/,{content:''},null);
        
        return res;
      }

      function extractNavIds(){
        const navGraph=idx.find(i=>i.name==='nav_graph.xml');
        if(!navGraph?.content)return[];
        const matches=[...navGraph.content.matchAll(/android:id="@\+id\/([^"]+)"/g)];
        return matches.map(m=>m[1]);
      }

      function extractMenuIds(){
        const menu=idx.find(i=>i.name.includes('bottom_nav')&&i.name.endsWith('.xml'));
        if(!menu?.content)return[];
        const matches=[...menu.content.matchAll(/android:id="@\+id\/([^"]+)"/g)];
        return matches.map(m=>m[1]);
      }

      function renderIdCheck(nav,menu){
        if(!nav.length&&!menu.length)
          return '<div style="color:var(--muted);font-size:12px">nav_graph.xml y bottom_nav_menu.xml no encontrados</div>';
        
        const allIds=new Set([...nav,...menu]);
        let html='';
        allIds.forEach(id=>{
          const inNav=nav.includes(id);
          const inMenu=menu.includes(id);
          const ok=inNav&&inMenu;
          html+=`<div class="val-row">
            <span style="font-family:monospace;font-size:11px">${id}</span>
            <span style="display:flex;gap:4px">
              <span class="val-badge ${inNav?'badge-ok':'badge-err'}">NAV</span>
              <span class="val-badge ${inMenu?'badge-ok':'badge-err'}">MENU</span>
            </span>
          </div>`;
        });
        return html||'<div style="color:var(--primary);font-size:12px">✓ Sin discrepancias</div>';
      }

      // ── CMD/POWERSHELL VIEW ───────────────────────────────
      function renderCmd(out){
        const d=document.createElement('div');
        d.className='v-cmd';
        
        const items=idx.filter(i=>i.content&&i.content.trim()).slice(0,5);
        
        let psOut='# OSTP DevTool — PowerShell Output\n';
        psOut+=`# Generado: ${new Date().toLocaleString()}\n`;
        psOut+=`# @echoShift · QUANTUM.qnu\n\n`;
        psOut+=`# ESTRUCTURA DEL PROYECTO\n`;
        psOut+=buildTreeStr(treeRoot,'',true);
        psOut+='\n# CONTENIDO DE ARCHIVOS CLAVE\n';
        items.forEach(item=>{
          psOut+=`\n# ══ ${item.path} ══\n`;
          psOut+=`Get-Content "${item.path.replace(/\//g,'\\')}" -Raw\n`;
          psOut+=`<#\n${item.content}\n#>\n`;
        });
        psOut+='\n# ────────────────────────────────────────\n';
        psOut+='# OSTP · @echoShift · Zapopan, Jalisco\n';
        psOut+='# <!--████████████████ostp████████████████████-->\n';
        
        d.innerHTML=`
          <div style="font-size:10px;letter-spacing:2px;color:var(--muted);margin-bottom:10px">
            → ostp generate --powershell --format console
          </div>
          <div class="cmd-block">
            <button class="cmd-copy" onclick="copyCmd(this)"  data-text="${escAttr(psOut)}">Copy</button>
            <span style="color:var(--muted)">${esc(psOut)}</span>
          </div>
        `;
        out.appendChild(d);
      }

      function copyCmd(btn){
        navigator.clipboard.writeText(btn.dataset.text).then(()=>{
          btn.textContent='Copied!';
          setTimeout(()=>btn.textContent='Copy',1500);
        });
      }

      // ── SEARCH ────────────────────────────────────────────
      function doSearch(q){
        const sr=document.getElementById('sr');
        if(!q||q.length<2){sr.style.display='none';return;}
        const ql=q.toLowerCase();
        const hits=idx.filter(i=>
          i.name.toLowerCase().includes(ql)||
          (i.content&&i.content.toLowerCase().includes(ql))
        ).slice(0,15);
        if(!hits.length){sr.style.display='none';return;}
        sr.style.display='block';
        sr.innerHTML=hits.map(h=>{
          const nc=h.name.toLowerCase().includes(ql);
          const cc=h.content&&h.content.toLowerCase().includes(ql);
          const snip=cc?getSnip(h.content,ql):'';
          return `<div class="sr-item" onclick="jumpTo('${h.path}')">
            <span>${h.cl?.icon||'📄'}</span>
            <div style="flex:1;min-width:0">
              <div class="sr-name">${nc?hilite(h.name,ql):h.name}</div>
              ${snip?`<div class="sr-snip">${snip}</div>`:''}
            </div>
          </div>`;
        }).join('');
      }

      function getSnip(c,q){
        const i=c.toLowerCase().indexOf(q);
        if(i<0)return'';
        const s=Math.max(0,i-25),e=Math.min(c.length,i+q.length+25);
        return'…'+esc(c.slice(s,e)).replace(new RegExp(escRe(q),'gi'),m=>`<span class="hl">${m}</span>`)+'…';
      }

      function hilite(t,q){
        return esc(t).replace(new RegExp(escRe(q),'gi'),m=>`<span class="hl">${m}</span>`);
      }

      function jumpTo(path){
        document.getElementById('sr').style.display='none';
        document.getElementById('si').value='';
        const node=findNode(treeRoot,path);
        if(node){selNode=node;document.getElementById('tp').textContent=path;setView('content');renderMain();}
      }

      function findNode(n,path){
        if(n.path===path)return n;
        if(n.children)for(const c of n.children){const f=findNode(c,path);if(f)return f;}
        return null;
      }

      // ── FILTER ────────────────────────────────────────────
      function setFilter(el,ext){
        document.querySelectorAll('.chip').forEach(c=>c.classList.remove('on'));
        el.classList.add('on');
        filter=ext;
        renderSidebar(ext);
      }

      // ── STATS ─────────────────────────────────────────────
      function updateStats(){
        document.getElementById('sT').textContent=st.total;
        document.getElementById('sF').textContent=st.dirs;
        document.getElementById('sC').textContent=st.crit;
        document.getElementById('sH').textContent=st.high;
      }

      // ── LOG ───────────────────────────────────────────────
      function log_(type,msg){
        const log=document.getElementById('log');
        const d=document.createElement('div');
        d.className='tl';
        const classes={ok:'tl-ok',warn:'tl-warn',err:'tl-err',info:'tl-info',muted:'tl-muted'};
        d.innerHTML=`<span class="${classes[type]||'tl-muted'}">${msg}</span>`;
        log.appendChild(d);
        log.scrollTop=log.scrollHeight;
      }
      function clearLog(){document.getElementById('log').innerHTML='';}

      // ── STATUS ────────────────────────────────────────────
      function setStatus(msg){document.getElementById('stMsg').textContent=msg;}
      function setCmd(cmd){document.getElementById('cmdLine').textContent=cmd;}

      // ── EXPORT ────────────────────────────────────────────
      function doExportMd(){saveFile(buildMd(),'quantum_ostp.md','text/markdown');}
      function doExportTxt(){saveFile(buildTxt(),'quantum_ostp.txt','text/plain');}
      function saveFile(c,n,t){
        const b=new Blob([c],{type:t+';charset=utf-8'});
        const a=document.createElement('a');
        a.href=URL.createObjectURL(b);a.download=n;a.click();URL.revokeObjectURL(a.href);
        log_('ok','✓ Export: '+n);
      }

      // ── UTILS ─────────────────────────────────────────────
      function esc(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
      function escAttr(t){return t.replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
      function escRe(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}

      // ── CLOCK ─────────────────────────────────────────────
      setInterval(()=>{document.getElementById('stTime').textContent=new Date().toLocaleTimeString();},1000);
      document.getElementById('stTime').textContent=new Date().toLocaleTimeString();

      // ── DRAG & DROP ───────────────────────────────────────
      document.getElementById('uz').addEventListener('dragover',e=>{e.preventDefault();document.getElementById('uz').classList.add('drag');});
      document.getElementById('uz').addEventListener('dragleave',()=>document.getElementById('uz').classList.remove('drag'));
      document.getElementById('uz').addEventListener('drop',e=>{
        e.preventDefault();
        document.getElementById('uz').classList.remove('drag');
        log_('warn','⚠ Drag & drop: usa el botón Abrir para carpetas completas');
      });

      // Close search on outside click
      document.addEventListener('click',e=>{
        if(!e.target.closest('.search-wrap'))document.getElementById('sr').style.display='none';
      });
      </script>
      </body>
      </html>
      ```

      ### DirTreeGen/package.json
      ```json
      {
        "name": "ostp-devtool",
        "version": "1.0.0",
        "description": "OSTP DevTool — Herramienta de análisis, lectura y transformación de proyectos de desarrollo",
        "author": "@echoShift · QUANTUM.qnu · Zapopan, Jalisco",
        "license": "MIT",
        "homepage": "https://ostp-echoshift.github.io",
        "repository": {
          "type": "git",
          "url": "https://github.com/ostp-echoshift/ostp-echoshift.git"
        },
        "keywords": [
          "ostp",
          "echoShift",
          "devtool",
          "android",
          "kotlin",
          "gradle",
          "dirtree",
          "validator",
          "quantum"
        ],
        "type": "module",
        "main": "src/core/app.js",
        "scripts": {
          "build":   "pwsh -File scripts/build.ps1",
          "deploy":  "pwsh -File scripts/deploy-gh.ps1",
          "dev": "npx serve . -l 3000",
          "lint":    "npx eslint src/**/*.js"
        },
        "devDependencies": {
          "serve": "^14.2.0"
        },
        "engines": {
          "node": ">=18.0.0"
        }
      }

      ```

      ### DirTreeGen/README.md
      ```console
      # OSTP · DevTool v1

      **Oficina de Soluciones Técnicas y Prototipado**  
      @echoShift · QUANTUM.qnu · Zapopan, Jalisco

      ---

      ## ¿Qué es?

      Herramienta de análisis, lectura y transformación de proyectos de desarrollo.  
      Diseñada para eliminar el punto ciego entre comunicación, construcción y resultados.

      ## Motores

      | Motor     | Función |
      |-----------|---------|
      | 🌳 TREE   | Árbol completo del proyecto |
      | 📄 READ   | Lee y despliega contenido de archivos |
      | 📤 EXPORT | Genera MD + TXT con sello OSTP |
      | ✓ VALIDATE | Valida versiones Kotlin/KSP/AGP y IDs nav |
      | ⬡ PS1    | Genera output para PowerShell/consola |

      ## Estructura

      
      DirTreeGen/
      ├── index.html          ← Entry point
      ├── src/core/           ← app, state, events, router
      ├── src/modules/        ← tree, reader, search, validator, exporter, cmd
      ├── src/ui/             ← topbar, sidebar, toolbar, panels, terminal...
      ├── styles/             ← CSS modular por componente
      ├── assets/svg/         ← Logos e iconos OSTP
      ├── config/             ← classify, versions, rules
      └── scripts/            ← DirMainRoot, build, deploy-gh
      

      ---

            ________________________________________
        <!--████████████████ostp████████████████████-->
      ```

      ### DirTreeGen/scripts/build.ps1
      ```Zsh
      # ═══════════════════════════════════════════════════════════════
      #  OSTP DevTool — Build Script
      #  scripts/build.ps1
      #  @echoShift · QUANTUM.qnu · Zapopan, Jalisco
      #  Ejecutar desde: C:\Proyectos\DirTreeGen\
      # ═══════════════════════════════════════════════════════════════

      $ROOT  = "C:\Proyectos\DirTreeGen"
      $DIST  = "$ROOT\dist"
      $SRC   = "$ROOT\src"
      $STYLE = "$ROOT\styles"
      $ASSET = "$ROOT\assets"
      $CONF  = "$ROOT\config"

      # ── Colores de consola ─────────────────────────────────────────
      function Write-OK   { param($m) Write-Host "  [OK]  $m" -ForegroundColor Green }
      function Write-SKIP { param($m) Write-Host "  [--]  $m" -ForegroundColor DarkGray }
      function Write-ERR  { param($m) Write-Host "  [ERR] $m" -ForegroundColor Red }
      function Write-INFO { param($m) Write-Host "  [>>]  $m" -ForegroundColor Cyan }

      Clear-Host
      Write-Host ""
      Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Magenta
      Write-Host "║   OSTP DevTool — Build v1.0                          ║" -ForegroundColor Magenta
      Write-Host "║   @echoShift · QUANTUM.qnu · Zapopan, Jalisco        ║" -ForegroundColor Magenta
      Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Magenta
      Write-Host ""

      # ── 1. Limpiar dist ────────────────────────────────────────────
      Write-INFO "Limpiando dist/..."
      if (Test-Path $DIST) {
          Remove-Item -Recurse -Force $DIST
          Write-OK "dist/ eliminado"
      }
      New-Item -ItemType Directory -Path $DIST -Force | Out-Null
      Write-OK "dist/ creado"
      Write-Host ""

      # ── 2. Copiar index.html ───────────────────────────────────────
      Write-INFO "Copiando index.html..."
      Copy-Item "$ROOT\index.html" "$DIST\index.html" -Force
      Write-OK "index.html"
      Write-Host ""

      # ── 3. Copiar src/ ─────────────────────────────────────────────
      Write-INFO "Copiando src/..."
      Copy-Item $SRC "$DIST\src" -Recurse -Force
      Write-OK "src/ → dist/src/"
      Write-Host ""

      # ── 4. Copiar styles/ ──────────────────────────────────────────
      Write-INFO "Copiando styles/..."
      Copy-Item $STYLE "$DIST\styles" -Recurse -Force
      Write-OK "styles/ → dist/styles/"
      Write-Host ""

      # ── 5. Copiar assets/ ──────────────────────────────────────────
      Write-INFO "Copiando assets/..."
      Copy-Item $ASSET "$DIST\assets" -Recurse -Force
      Write-OK "assets/ → dist/assets/"
      Write-Host ""

      # ── 6. Copiar config/ ──────────────────────────────────────────
      Write-INFO "Copiando config/..."
      Copy-Item $CONF "$DIST\config" -Recurse -Force
      Write-OK "config/ → dist/config/"
      Write-Host ""

      # ── 7. Copiar data/ ────────────────────────────────────────────
      Write-INFO "Copiando data/..."
      Copy-Item "$ROOT\data" "$DIST\data" -Recurse -Force
      Write-OK "data/ → dist/data/"
      Write-Host ""

      # ── 8. Verificar estructura dist ───────────────────────────────
      Write-INFO "Verificando dist/..."
      $required = @(
          "$DIST\index.html",
          "$DIST\src\core\app.js",
          "$DIST\src\core\state.js",
          "$DIST\src\core\events.js",
          "$DIST\src\core\router.js",
          "$DIST\styles\main.css",
          "$DIST\styles\base\variables.css",
          "$DIST\assets\svg\logo-ostp.svg",
          "$DIST\config\app.config.json"
      )

      $ok = $true
      foreach ($f in $required) {
          if (Test-Path $f) {
              Write-OK $f.Replace($DIST, "dist")
          } else {
              Write-ERR "FALTA: $($f.Replace($DIST,'dist'))"
              $ok = $false
          }
      }

      Write-Host ""

      # ── Resultado ──────────────────────────────────────────────────
      if ($ok) {
          Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Green
          Write-Host "║   BUILD EXITOSO ✅  →  dist/ listo                   ║" -ForegroundColor Green
          Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Green
      } else {
          Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Red
          Write-Host "║   BUILD CON ERRORES ❌  Revisa los archivos faltantes ║" -ForegroundColor Red
          Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Red
      }

      Write-Host ""
      Write-Host "  Siguiente paso: .\scripts\deploy-gh.ps1" -ForegroundColor Yellow
      Write-Host ""

      #          ________________________________________
      #      <!--████████████████ostp████████████████████-->
      ```

      ### DirTreeGen/scripts/deploy-gh.ps1
      ```zsh
      # ═══════════════════════════════════════════════════════════════
      #  OSTP DevTool — GitHub Pages Deploy Script
      #  scripts/deploy-gh.ps1
      #  @echoShift · QUANTUM.qnu · Zapopan, Jalisco
      #
      #  REQUISITOS:
      #  - Git instalado y configurado
      #  - Repo remoto: ostp-echoshift/ostp-echoshift (o DirTreeGen)
      #  - dist/ generado previamente con build.ps1
      #  - GitHub Pages activado en rama gh-pages (o main/docs)
      #
      #  FLUJO:
      #  1. Corre .\scripts\build.ps1 primero
      #  2. Luego corre este script
      # ═══════════════════════════════════════════════════════════════

      $ROOT       = "C:\Proyectos\DirTreeGen"
      $DIST       = "$ROOT\dist"
      $REPO_URL   = "https://github.com/ostp-echoshift/ostp-echoshift.git"
      $BRANCH     = "gh-pages"
      $COMMIT_MSG = "deploy: OSTP DevTool v1.0 - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

      function Write-OK   { param($m) Write-Host "  [OK]  $m" -ForegroundColor Green }
      function Write-ERR  { param($m) Write-Host "  [ERR] $m" -ForegroundColor Red }
      function Write-INFO { param($m) Write-Host "  [>>]  $m" -ForegroundColor Cyan }
      function Write-WARN { param($m) Write-Host "  [!!]  $m" -ForegroundColor Yellow }

      Clear-Host
      Write-Host ""
      Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Magenta
      Write-Host "║   OSTP DevTool — GitHub Pages Deploy                 ║" -ForegroundColor Magenta
      Write-Host "║   @echoShift · QUANTUM.qnu                           ║" -ForegroundColor Magenta
      Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Magenta
      Write-Host ""

      # ── Verificar dist/ ────────────────────────────────────────────
      Write-INFO "Verificando dist/..."
      if (-not (Test-Path "$DIST\index.html")) {
          Write-ERR "dist/index.html no encontrado"
          Write-WARN "Corre primero: .\scripts\build.ps1"
          exit 1
      }
      Write-OK "dist/ encontrado"
      Write-Host ""

      # ── Verificar git ──────────────────────────────────────────────
      Write-INFO "Verificando git..."
      try {
          $gitVersion = git --version 2>&1
          Write-OK $gitVersion
      } catch {
          Write-ERR "Git no encontrado — instala Git desde https://git-scm.com"
          exit 1
      }
      Write-Host ""

      # ── Entrar al repo ─────────────────────────────────────────────
      Set-Location $ROOT

      # ── Verificar si ya existe el remote ──────────────────────────
      Write-INFO "Verificando remote origin..."
      $remotes = git remote 2>&1
      if ($remotes -notcontains "origin") {
          Write-WARN "No hay remote 'origin'. Configurando..."
          git remote add origin $REPO_URL
          Write-OK "Remote agregado: $REPO_URL"
      } else {
          Write-OK "Remote origin: OK"
      }
      Write-Host ""

      # ── Crear/cambiar a rama gh-pages ──────────────────────────────
      Write-INFO "Preparando rama $BRANCH..."

      $branches = git branch -a 2>&1
      if ($branches -match "gh-pages") {
          git checkout $BRANCH 2>&1 | Out-Null
          Write-OK "Rama $BRANCH existente — checkout"
      } else {
          git checkout --orphan $BRANCH 2>&1 | Out-Null
          Write-OK "Rama $BRANCH creada (orphan)"
      }
      Write-Host ""

      # ── Limpiar rama gh-pages ──────────────────────────────────────
      Write-INFO "Limpiando rama $BRANCH..."
      git rm -rf . --quiet 2>&1 | Out-Null
      Write-OK "Rama limpia"
      Write-Host ""

      # ── Copiar dist/ a raíz ────────────────────────────────────────
      Write-INFO "Copiando dist/ a rama $BRANCH..."
      Copy-Item "$DIST\*" $ROOT -Recurse -Force
      Write-OK "Archivos copiados"
      Write-Host ""

      # ── Crear .nojekyll (necesario para GitHub Pages con carpetas _) 
      New-Item -ItemType File -Path "$ROOT\.nojekyll" -Force | Out-Null
      Write-OK ".nojekyll creado"

      # ── Git add + commit ───────────────────────────────────────────
      Write-INFO "Commiteando..."
      git add -A 2>&1 | Out-Null
      git commit -m $COMMIT_MSG 2>&1 | Out-Null
      Write-OK "Commit: $COMMIT_MSG"
      Write-Host ""

      # ── Push ───────────────────────────────────────────────────────
      Write-INFO "Push a origin/$BRANCH..."
      git push origin $BRANCH --force 2>&1
      if ($LASTEXITCODE -eq 0) {
          Write-OK "Push exitoso"
      } else {
          Write-ERR "Push falló — verifica credenciales de GitHub"
          Write-WARN "Si es la primera vez: gh auth login"
      }
      Write-Host ""

      # ── Volver a main ──────────────────────────────────────────────
      git checkout main 2>&1 | Out-Null
      Write-OK "De vuelta en rama main"
      Write-Host ""

      # ── Resultado ──────────────────────────────────────────────────
      Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor Green
      Write-Host "║   DEPLOY COMPLETADO ✅                               ║" -ForegroundColor Green
      Write-Host "╠══════════════════════════════════════════════════════╣" -ForegroundColor Green
      Write-Host "║   URL: https://ostp-echoshift.github.io              ║" -ForegroundColor Cyan
      Write-Host "║   (GitHub Pages puede tardar 1-2 min en actualizar)  ║" -ForegroundColor DarkGray
      Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor Green
      Write-Host ""

      #          ________________________________________
      #      <!--████████████████ostp████████████████████-->
      ```

      ### DirTreeGen/scripts/DirMainRoot.ps1
      ```Zsh
      # ═══════════════════════════════════════════════════════════════
      #  DirMainRoot.ps1
      #  OSTP DevTool — Generador de estructura del proyecto
      #  @echoShift · QUANTUM.qnu · Zapopan, Jalisco
      #  Ejecutar desde: C:\Proyectos\DirTreeGen\
      # ═══════════════════════════════════════════════════════════════

      $ROOT = "C:\Proyectos\DirTreeGen"

      function New-Dir  { param($p) New-Item -ItemType Directory -Path $p -Force | Out-Null }
      function New-File { param($p) New-Item -ItemType File -Path $p -Force | Out-Null }

      Write-Host ""
      Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Magenta
      Write-Host "║   OSTP DevTool — Scaffold Generator              ║" -ForegroundColor Magenta
      Write-Host "║   @echoShift · QUANTUM.qnu                       ║" -ForegroundColor Magenta
      Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Magenta
      Write-Host ""

      # ── DIRECTORIOS ───────────────────────────────────────────────
      $dirs = @(
          # Raíz del proyecto
          "$ROOT",

          # Core de la app
          "$ROOT\src",
          "$ROOT\src\core",
          "$ROOT\src\modules",
          "$ROOT\src\modules\tree",
          "$ROOT\src\modules\reader",
          "$ROOT\src\modules\search",
          "$ROOT\src\modules\validator",
          "$ROOT\src\modules\exporter",
          "$ROOT\src\modules\cmd",

          # UI — componentes
          "$ROOT\src\ui",
          "$ROOT\src\ui\topbar",
          "$ROOT\src\ui\sidebar",
          "$ROOT\src\ui\toolbar",
          "$ROOT\src\ui\panels",
          "$ROOT\src\ui\terminal",
          "$ROOT\src\ui\statusbar",
          "$ROOT\src\ui\buttons",
          "$ROOT\src\ui\modals",

          # Estilos
          "$ROOT\styles",
          "$ROOT\styles\base",
          "$ROOT\styles\components",
          "$ROOT\styles\themes",
          "$ROOT\styles\layout",

          # Assets
          "$ROOT\assets",
          "$ROOT\assets\svg",
          "$ROOT\assets\icons",
          "$ROOT\assets\img",
          "$ROOT\assets\fonts",

          # Config / data
          "$ROOT\config",
          "$ROOT\data",
          "$ROOT\data\schemas",
          "$ROOT\data\rules",

          # Docs
          "$ROOT\docs",
          "$ROOT\docs\md",
          "$ROOT\docs\yaml",

          # Scripts de build / deploy
          "$ROOT\scripts",

          # Output / dist
          "$ROOT\dist"
      )

      foreach ($d in $dirs) {
          New-Dir $d
          Write-Host "  [DIR] $($d.Replace($ROOT,'.'))" -ForegroundColor Cyan
      }

      Write-Host ""

      # ── ARCHIVOS PLACEHOLDER ──────────────────────────────────────
      $files = @(

          # ── Raíz ──────────────────────────────────────────────────
          "$ROOT\index.html",
          "$ROOT\.gitignore",
          "$ROOT\README.md",
          "$ROOT\package.json",

          # ── Core ──────────────────────────────────────────────────
          "$ROOT\src\core\app.js",           # Bootstrap / init
          "$ROOT\src\core\state.js",         # Estado global
          "$ROOT\src\core\events.js",        # Event bus
          "$ROOT\src\core\router.js",        # View router

          # ── Módulos ───────────────────────────────────────────────
          "$ROOT\src\modules\tree\tree.js",
          "$ROOT\src\modules\tree\tree.html",

          "$ROOT\src\modules\reader\reader.js",
          "$ROOT\src\modules\reader\reader.html",

          "$ROOT\src\modules\search\search.js",
          "$ROOT\src\modules\search\search.html",

          "$ROOT\src\modules\validator\validator.js",
          "$ROOT\src\modules\validator\validator.html",
          "$ROOT\src\modules\validator\rules.json",

          "$ROOT\src\modules\exporter\exporter.js",
          "$ROOT\src\modules\exporter\templates.js",

          "$ROOT\src\modules\cmd\cmd.js",
          "$ROOT\src\modules\cmd\cmd.html",

          # ── UI Componentes ─────────────────────────────────────────
          "$ROOT\src\ui\topbar\topbar.js",
          "$ROOT\src\ui\topbar\topbar.html",

          "$ROOT\src\ui\sidebar\sidebar.js",
          "$ROOT\src\ui\sidebar\sidebar.html",

          "$ROOT\src\ui\toolbar\toolbar.js",
          "$ROOT\src\ui\toolbar\toolbar.html",

          "$ROOT\src\ui\panels\panels.js",
          "$ROOT\src\ui\panels\panels.html",

          "$ROOT\src\ui\terminal\terminal.js",
          "$ROOT\src\ui\terminal\terminal.html",

          "$ROOT\src\ui\statusbar\statusbar.js",
          "$ROOT\src\ui\statusbar\statusbar.html",

          "$ROOT\src\ui\buttons\buttons.js",
          "$ROOT\src\ui\buttons\buttons.html",

          "$ROOT\src\ui\modals\modals.js",
          "$ROOT\src\ui\modals\modals.html",

          # ── Estilos ────────────────────────────────────────────────
          "$ROOT\styles\base\reset.css",
          "$ROOT\styles\base\variables.css",     # CSS custom properties
          "$ROOT\styles\base\typography.css",

          "$ROOT\styles\components\topbar.css",
          "$ROOT\styles\components\sidebar.css",
          "$ROOT\styles\components\toolbar.css",
          "$ROOT\styles\components\panels.css",
          "$ROOT\styles\components\terminal.css",
          "$ROOT\styles\components\buttons.css",
          "$ROOT\styles\components\chips.css",
          "$ROOT\styles\components\modals.css",
          "$ROOT\styles\components\tree.css",
          "$ROOT\styles\components\fileblock.css",
          "$ROOT\styles\components\search.css",
          "$ROOT\styles\components\statusbar.css",
          "$ROOT\styles\components\stats.css",
          "$ROOT\styles\components\validator.css",

          "$ROOT\styles\layout\app.css",
          "$ROOT\styles\layout\grid.css",
          "$ROOT\styles\layout\responsive.css",

          "$ROOT\styles\themes\dark.css",         # Tema OSTP Dark (default)
          "$ROOT\styles\themes\quantum.css",      # Tema Quantum neon
          "$ROOT\styles\main.css",                # Entry point CSS

          # ── Assets SVG ────────────────────────────────────────────
          "$ROOT\assets\svg\logo-ostp.svg",
          "$ROOT\assets\svg\logo-echoshift.svg",
          "$ROOT\assets\svg\icon-folder.svg",
          "$ROOT\assets\svg\icon-file.svg",
          "$ROOT\assets\svg\icon-search.svg",
          "$ROOT\assets\svg\icon-terminal.svg",
          "$ROOT\assets\svg\icon-export.svg",
          "$ROOT\assets\svg\icon-validate.svg",
          "$ROOT\assets\svg\ostp-seal.svg",

          # ── Config ────────────────────────────────────────────────
          "$ROOT\config\app.config.json",        # Config global
          "$ROOT\config\classify.json",          # Reglas de clasificación de archivos
          "$ROOT\config\versions.json",          # Tabla de versiones compatibles
          "$ROOT\config\shortcuts.json",         # Keyboard shortcuts

          # ── Data / Rules ──────────────────────────────────────────
          "$ROOT\data\schemas\gradle-schema.json",
          "$ROOT\data\schemas\android-schema.json",
          "$ROOT\data\rules\kotlin-compat.json",
          "$ROOT\data\rules\nav-id-rules.json",

          # ── Docs ──────────────────────────────────────────────────
          "$ROOT\docs\md\ARCHITECTURE.md",
          "$ROOT\docs\md\MODULES.md",
          "$ROOT\docs\md\CHANGELOG.md",
          "$ROOT\docs\yaml\prompt.yaml",

          # ── Scripts ───────────────────────────────────────────────
          "$ROOT\scripts\build.ps1",
          "$ROOT\scripts\deploy-gh.ps1",
          "$ROOT\scripts\DirMainRoot.ps1"        # Este mismo script
      )

      foreach ($f in $files) {
          New-File $f
          Write-Host "  [FILE] $($f.Replace($ROOT,'.'))" -ForegroundColor Green
      }

      Write-Host ""
      Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Green
      Write-Host "║   SCAFFOLD COMPLETO ✅                           ║" -ForegroundColor Green
      Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Green
      Write-Host ""
      Write-Host "  Directorios : $($dirs.Count)" -ForegroundColor Yellow
      Write-Host "  Archivos    : $($files.Count) placeholders vacíos" -ForegroundColor Yellow
      Write-Host "  Raíz        : $ROOT" -ForegroundColor Yellow
      Write-Host ""
      Write-Host "  PRÓXIMO PASO:" -ForegroundColor Cyan
      Write-Host "  Abrir C:\Proyectos\DirTreeGen en VS Code" -ForegroundColor Cyan
      Write-Host "  code C:\Proyectos\DirTreeGen" -ForegroundColor Cyan
      Write-Host ""

      #          ________________________________________
      #      <!--████████████████ostp████████████████████-->
      ```

      ### DirTreeGen/src/core/app.js
      ```js
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
      ```

      ### DirTreeGen/src/core/events.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Event Bus
         src/core/events.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      const _listeners = {};

      export const Events = {

        on(event, cb) {
          if (!_listeners[event]) _listeners[event] = [];
          _listeners[event].push(cb);
        },

        off(event, cb) {
          if (!_listeners[event]) return;
          _listeners[event] = _listeners[event].filter(fn => fn !== cb);
        },

        emit(event, data) {
          (_listeners[event] || []).forEach(fn => fn(data));
        },
      };

      /*
        EVENTS CATÁLOGO:
        ─────────────────────────────────────────────────────
        'project:loaded'     → { treeRoot, stats }
        'file:selected'      → { node }
        'view:changed'       → { view }
        'filter:changed'     → { ext }
        'search:query'       → { q }
        'log:add'            → { type, msg }
        'export:md'          → void
        'export:txt'         → void
        'status:set'         → { msg }
        ─────────────────────────────────────────────────────
      */
      ```

      ### DirTreeGen/src/core/router.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — View Router
         src/core/router.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { State }  from './state.js';
      import { Events } from './events.js';

      const VIEWS = ['tree', 'content', 'export', 'validate', 'cmd'];

      export const Router = {

        go(view) {
          if (!VIEWS.includes(view)) return;
          State.setView(view);

          // Actualizar tabs activos
          VIEWS.forEach(v => {
            const el = document.getElementById('vt-' + v);
            if (el) el.classList.toggle('on', v === view);
          });

          Events.emit('view:changed', { view });
        },

        current() {
          return State.view;
        },
      };
      ```

      ### DirTreeGen/src/core/state.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Global State
         src/core/state.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      export const State = {
        project:    null,   // nombre del proyecto
        treeRoot:   null,   // árbol estructurado
        allFiles:   [],     // File[] originales
        idx:        [],     // [{name,path,file,cl,content}]
        selNode:    null,   // nodo seleccionado
        view:       'tree', // vista activa
        filter:     '',     // filtro por extensión
        stats: {
          total:   0,
          dirs:    0,
          crit:    0,
          high:    0,
        },

        reset() {
          this.project  = null;
          this.treeRoot = null;
          this.allFiles = [];
          this.idx      = [];
          this.selNode  = null;
          this.view     = 'tree';
          this.filter   = '';
          this.stats    = { total:0, dirs:0, crit:0, high:0 };
        },

        setView(v)    { this.view = v; },
        setFilter(f)  { this.filter = f; },
        setSelNode(n) { this.selNode = n; },
      };
      ```

      ### DirTreeGen/src/modules/cmd/cmd.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — CMD / PowerShell View
           src/modules/cmd/cmd.html
           Mount point para el output de PowerShell
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <!-- Se renderiza dinámicamente por cmd.js -->
      <!-- Estructura resultante:
      <div class="v-cmd">

        <div class="label">→ ostp generate --powershell --format console</div>

        <div class="cmd-block">
          <button class="cmd-copy" data-t="{ps_content}">Copy</button>
          # ═══════════════════════════════════════════════════
          # OSTP DevTool — PowerShell Output
          # Proyecto : JR-Sistema-Android
          # Generado : 18/3/2026, 2:01:55 a.m.
          # @echoShift · QUANTUM.qnu
          # ═══════════════════════════════════════════════════

          # ESTRUCTURA DEL PROYECTO
          └── 📁 JR-Sistema-Android/
              ├── 📄 .gitignore
              ├── 🔧 app/build.gradle.kts
              ...

          # CONTENIDO DE ARCHIVOS CLAVE

          # ══ app/build.gradle.kts ══
          Get-Content "app\build.gradle.kts" -Raw
          <#
          plugins {
            id("com.android.application")
            ...
          }
          #-->
               
            <!--████████████████ostp████████████████████-->

        </div>

      </div>
      -->

      <div id="view-cmd" style="display:none">
        <!-- cmd.js renderiza aquí -->
      </div>
      ```

      ### DirTreeGen/src/modules/cmd/cmd.js
      ```js
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
      ```

      ### DirTreeGen/src/modules/exporter/exporter.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Exporter Module
         src/modules/exporter/exporter.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { State }         from '../../core/state.js';
      import { Events }        from '../../core/events.js';
      import { buildTreeStr }  from '../tree/tree.js';

      export function initExporter() {
        Events.on('export:md',  () => doExportMd());
        Events.on('export:txt', () => doExportTxt());
        Events.on('view:changed', ({ view }) => { if (view === 'export') renderExport(); });
      }

      export function buildMd() {
        const now = new Date().toLocaleString();
        let s  = '# Árbol de Directorios - Análisis Cuántico\n\n';
        s += `**Sistema:** QUANTUM.qnu Operation System  \n`;
        s += `**Generado:** ${now}  \n`;
        s += `**Tecnología:** OSTP @echoShift & Quantum Sys  \n\n`;
        s += '```console\n    ' + buildTreeStr(State.treeRoot, '', true).replace(/\n/g, '\n    ') + '```\n\n';

        const items = State.idx.filter(i => i.content && i.content.trim());
        if (items.length) {
          s += '-\n\n';
          items.forEach(i => { s += `### ${i.path}\n\`\`\`\n${i.content}\n\`\`\`\n\n`; });
        }

        s += '\n          ________________________________________\n';
        s += '      <!--████████████████ostp████████████████████-->\n';
        return s;
      }

      export function buildTxt() {
        const now = new Date().toLocaleString();
        let s  = `OSTP DevTool v1 · QUANTUM.qnu · @echoShift\n`;
        s += `Generado: ${now}\n`;
        s += `Archivos: ${State.stats.total} · Directorios: ${State.stats.dirs}\n\n`;
        s += buildTreeStr(State.treeRoot, '', true);
        s += '\n────────────────────────────────────────\n';
        s += 'OSTP · @echoShift · Zapopan, Jalisco\n';
        return s;
      }

      function renderExport() {
        const out = document.getElementById('output');
        if (!out || !State.treeRoot) return;
        out.innerHTML = '';
        const d = document.createElement('div');
        d.className = 'v-export';
        d.textContent = buildMd();
        out.appendChild(d);
      }

      function doExportMd()  { saveFile(buildMd(),  'quantum_ostp.md',  'text/markdown'); Events.emit('log:add', { type:'ok', msg:'✓ Export: quantum_ostp.md' }); }
      function doExportTxt() { saveFile(buildTxt(), 'quantum_ostp.txt', 'text/plain');    Events.emit('log:add', { type:'ok', msg:'✓ Export: quantum_ostp.txt' }); }

      function saveFile(c, n, t) {
        const b = new Blob([c], { type: t + ';charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(b);
        a.download = n;
        a.click();
        URL.revokeObjectURL(a.href);
      }
      ```

      ### DirTreeGen/src/modules/exporter/templates.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Export Templates
         src/modules/exporter/templates.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      export const TPL_MD_HEADER = (project, date) => `
      # ${project} — OSTP DevTool Report
      **Generado:** ${date}
      **Sistema:** QUANTUM.qnu · @echoShift
      ---
      `.trim();

      export const TPL_OSTP_SEAL = () =>
      `\n          ________________________________________\n      <!--████████████████ostp████████████████████-->`;

      export const TPL_PS1_HEADER = (project, date) =>
      `# ═══════════════════════════════════════════════════
      # OSTP DevTool — PowerShell Output
      # Proyecto : ${project}
      # Generado : ${date}
      # @echoShift · QUANTUM.qnu
      # ═══════════════════════════════════════════════════`;
      ```

      ### DirTreeGen/src/modules/reader/reader.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Reader View
           src/modules/reader/reader.html
           Mount point para la vista de contenido de archivos
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <!-- Se renderiza dinámicamente por reader.js -->
      <!-- Estructura resultante por archivo:
      <div class="fb">
        <div class="fb-head">
          <span class="fb-path">🔧 app/build.gradle.kts</span>
          <span class="fb-meta">3.2KB · 98 líneas</span>
          <button class="fb-toggle">Expandir</button>
        </div>
        <div class="fb-body coll">
          plugins {
            id("com.android.application")
            ...
          }
        </div>
      </div>
      -->

      <div id="view-content" style="display:none">
        <!-- reader.js renderiza aquí los file blocks -->
      </div>
      ```

      ### DirTreeGen/src/modules/reader/reader.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Reader Module
         src/modules/reader/reader.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { State }  from '../../core/state.js';
      import { Events } from '../../core/events.js';

      export function initReader() {
        Events.on('view:changed', ({ view }) => {
          if (view === 'content') renderContent();
        });
        Events.on('file:selected', () => {
          if (State.view === 'content') renderContent();
        });
      }

      export function renderContent() {
        const out = document.getElementById('output');
        if (!out || !State.treeRoot) return;
        out.innerHTML = '';

        if (State.selNode) {
          renderFile(out, State.selNode);
        } else {
          renderAllContent(out);
        }
      }

      function renderFile(out, node) {
        const item = State.idx.find(s => s.path === node.path);
        if (!item || !item.content) {
          out.innerHTML = '<div style="padding:20px;color:var(--text-muted);font-family:var(--font-mono)">Archivo binario — sin contenido legible</div>';
          return;
        }
        const lines = item.content.split('\n').length;
        const kb    = (item.file.size / 1024).toFixed(1);
        const coll  = lines > 30;
        const fb    = makeFb(node.cl?.icon || '📄', node.path, kb, lines, item.content, coll);
        out.appendChild(fb);
        Events.emit('log:add', { type: 'ok', msg: `✓ read "${node.name}" · ${lines}L · ${kb}KB` });
      }

      function renderAllContent(out) {
        const items = State.idx.filter(s => s.content && s.content.trim());
        if (!items.length) {
          out.innerHTML = '<div class="empty"><div class="empty-icon">📄</div><div>Sin archivos de texto cargados</div></div>';
          return;
        }
        items.forEach(item => {
          const lines = item.content.split('\n').length;
          const kb    = (item.file.size / 1024).toFixed(1);
          const coll  = lines > 15;
          out.appendChild(makeFb(item.cl?.icon || '📄', item.path, kb, lines, item.content, coll));
        });
      }

      function makeFb(icon, path, kb, lines, content, coll) {
        const fb = document.createElement('div');
        fb.className = 'fb';
        fb.innerHTML = `
          <div class="fb-head">
            <span class="fb-path">${icon} ${esc(path)}</span>
            <span class="fb-meta">${kb}KB · ${lines}L</span>
            ${coll ? '<button class="fb-toggle" onclick="this.closest(\'.fb\').querySelector(\'.fb-body\').classList.toggle(\'coll\');this.textContent=this.textContent===\'Expandir\'?\'Colapsar\':\'Expandir\'">Expandir</button>' : ''}
          </div>
          <div class="fb-body ${coll ? 'coll' : ''}">${esc(content)}</div>`;
        return fb;
      }

      function esc(t) {
        return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      }
      ```

      ### DirTreeGen/src/modules/search/search.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Search Component
           src/modules/search/search.html
           Vive dentro del sidebar
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <div class="search-wrap">
        <span class="search-icon">⌕</span>
        <input
          type="text"
          id="si"
          placeholder="ostp search..."
          autocomplete="off"
          spellcheck="false"
        />
        <!-- Dropdown de resultados -->
        <div class="search-results" id="sr">
          <!-- Estructura de cada resultado:
          <div class="sr-item" data-path="{path}">
            <span>{icon}</span>
            <div style="flex:1;min-width:0">
              <div class="sr-name">{nombre con highlight}</div>
              <div class="sr-snip">...{snippet con highlight}...</div>
            </div>
          </div>
          -->
        </div>
      </div>
      ```

      ### DirTreeGen/src/modules/search/search.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Search Module
         src/modules/search/search.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { State }  from '../../core/state.js';
      import { Events } from '../../core/events.js';
      import { Router } from '../../core/router.js';

      export function initSearch() {
        const input = document.getElementById('si');
        if (!input) return;
        input.addEventListener('input', e => doSearch(e.target.value));
        document.addEventListener('click', e => {
          if (!e.target.closest('.search-wrap'))
            document.getElementById('sr').style.display = 'none';
        });
      }

      function doSearch(q) {
        const sr = document.getElementById('sr');
        if (!q || q.length < 2) { sr.style.display = 'none'; return; }
        const ql = q.toLowerCase();
        const hits = State.idx.filter(i =>
          i.name.toLowerCase().includes(ql) ||
          (i.content && i.content.toLowerCase().includes(ql))
        ).slice(0, 15);

        if (!hits.length) { sr.style.display = 'none'; return; }
        sr.style.display = 'block';
        sr.innerHTML = hits.map(h => {
          const snip = h.content ? getSnip(h.content, ql) : '';
          return `<div class="sr-item" data-path="${h.path}">
            <span>${h.cl?.icon || '📄'}</span>
            <div style="flex:1;min-width:0">
              <div class="sr-name">${hilite(h.name, q)}</div>
              ${snip ? `<div class="sr-snip">${snip}</div>` : ''}
            </div>
          </div>`;
        }).join('');

        sr.querySelectorAll('.sr-item').forEach(el => {
          el.onclick = () => jumpTo(el.dataset.path);
        });
      }

      function jumpTo(path) {
        document.getElementById('sr').style.display = 'none';
        document.getElementById('si').value = '';
        const node = findNode(State.treeRoot, path);
        if (node) {
          State.setSelNode(node);
          document.getElementById('tp').textContent = path;
          Events.emit('file:selected', { node });
          Router.go('content');
        }
      }

      function findNode(n, path) {
        if (n.path === path) return n;
        if (n.children) for (const c of n.children) { const f = findNode(c, path); if (f) return f; }
        return null;
      }

      function getSnip(c, q) {
        const i = c.toLowerCase().indexOf(q);
        if (i < 0) return '';
        const s = Math.max(0, i - 25), e = Math.min(c.length, i + q.length + 25);
        return '…' + esc(c.slice(s, e)).replace(new RegExp(escRe(q), 'gi'), m => `<span class="hl">${m}</span>`) + '…';
      }

      function hilite(t, q) {
        return esc(t).replace(new RegExp(escRe(q), 'gi'), m => `<span class="hl">${m}</span>`);
      }

      function esc(t)    { return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
      function escRe(s)  { return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
      ```

      ### DirTreeGen/src/modules/tree/tree.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Tree View
           src/modules/tree/tree.html
           Mount point para la vista de árbol
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <!-- Se renderiza dinámicamente por tree.js -->
      <!-- Estructura resultante:
      <div class="v-tree">
        <pre>
          └── 📁 DirTreeGen/
              ├── 📄 .gitignore
              ├── 🏗️ DirMainRoot.ps1
              ├── 📁 src/
              │   ├── 📁 core/
              │   │   ├── 📄 app.js
              │   │   └── 📄 state.js
              ...
        </pre>
      </div>
      -->

      <div id="view-tree" class="v-tree" style="display:none">
        <!-- buildTreeStr() output aquí -->
      </div>
      ```

      ### DirTreeGen/src/modules/tree/tree.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Tree Module
         src/modules/tree/tree.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { State }  from '../../core/state.js';
      import { Events } from '../../core/events.js';

      export function initTree() {
        Events.on('view:changed',    ({ view }) => { if (view === 'tree') renderTree(); });
        Events.on('project:loaded',  ()         => renderTree());
      }

      export function renderTree() {
        const out = document.getElementById('output');
        if (!out || !State.treeRoot) return;
        out.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'v-tree';
        div.innerHTML = '<pre>' + esc(buildTreeStr(State.treeRoot, '', true)) + '</pre>';
        out.appendChild(div);
      }

      export function buildTreeStr(node, pfx, isLast) {
        let s = '';
        if (node.name !== 'root') {
          const conn = isLast ? '└── ' : '├── ';
          if (node.type === 'folder')
            s += pfx + conn + '📁 ' + node.name + '/\n';
          else
            s += pfx + conn + (node.cl?.icon || '📄') + ' ' + node.name + '\n';
        }
        if (node.children) {
          const np = node.name === 'root' ? pfx : pfx + (isLast ? '    ' : '│   ');
          node.children.forEach((c, i) =>
            s += buildTreeStr(c, np, i === node.children.length - 1));
        }
        return s;
      }

      function esc(t) {
        return String(t)
          .replace(/&/g,'&amp;')
          .replace(/</g,'&lt;')
          .replace(/>/g,'&gt;');
      }
      ```

      ### DirTreeGen/src/modules/validator/rules.json
      ```json
      {
        "version": "1.0",
        "description": "Reglas de validación activas del OSTP DevTool Validator",
        "author": "@echoShift · QUANTUM.qnu",

        "version_rules": [
          {
            "id":       "kotlin-version",
            "name":     "Kotlin",
            "source":   "libs.versions.toml",
            "regex":    "kotlin\\s*=\\s*\"([^\"]+)\"",
            "expected": ["2.0.21", "2.2.0"],
            "severity": "error",
            "fix":      "Actualizar kotlin en libs.versions.toml"
          },
          {
            "id":       "agp-version",
            "name":     "AGP",
            "source":   "libs.versions.toml",
            "regex":    "agp\\s*=\\s*\"([^\"]+)\"",
            "expected": ["8.7.3", "8.13.2"],
            "severity": "warn",
            "fix":      "Actualizar agp en libs.versions.toml"
          },
          {
            "id":       "ksp-version",
            "name":     "KSP",
            "source":   "app/build.gradle.kts",
            "regex":    "com\\.google\\.devtools\\.ksp.*version.*\"([^\"]+)\"",
            "must_match_kotlin_prefix": true,
            "severity": "error",
            "fix":      "KSP version debe iniciar con la misma versión de Kotlin. Ej: Kotlin 2.0.21 → KSP 2.0.21-1.0.28"
          },
          {
            "id":       "room-version",
            "name":     "Room",
            "source":   "app/build.gradle.kts",
            "regex":    "room[^:]*:([0-9.]+)",
            "expected": ["2.6.1", "2.7.0"],
            "severity": "warn",
            "fix":      "Room 2.7.0 recomendado para KSP. Room 2.6.1 requiere kapt"
          },
          {
            "id":       "java-version",
            "name":     "JVM Target",
            "source":   "app/build.gradle.kts",
            "regex":    "jvmTarget.*JVM_(\\d+)|jvmTarget\\s*=\\s*\"(\\d+)\"",
            "expected": ["17", "JVM_17"],
            "severity": "warn",
            "fix":      "Usar JDK 17 — Eclipse Adoptium recomendado"
          }
        ],

        "annotation_processor_rules": [
          {
            "id":       "no-kapt-kotlin2",
            "name":     "kapt con Kotlin 2.x",
            "detect":   "kapt\\(",
            "source":   "app/build.gradle.kts",
            "severity": "error",
            "message":  "kapt no soporta Kotlin 2.0+. Migrar a KSP",
            "fix":      "Reemplazar kapt(\"androidx.room:room-compiler:x\") por ksp(\"androidx.room:room-compiler:x\")"
          },
          {
            "id":       "ksp-preferred",
            "name":     "KSP activo",
            "detect":   "com\\.google\\.devtools\\.ksp",
            "source":   "app/build.gradle.kts",
            "severity": "ok",
            "message":  "KSP correctamente configurado"
          }
        ],

        "nav_id_rules": [
          {
            "id":       "nav-menu-match",
            "name":     "nav_graph ↔ bottom_nav_menu",
            "file_a":   "nav_graph.xml",
            "file_b":   "bottom_nav_menu.xml",
            "regex":    "android:id=\"@\\+id\\/([^\"]+)\"",
            "severity": "error",
            "message":  "Los IDs deben ser idénticos en ambos archivos para que setupWithNavController funcione",
            "fix":      "Alinear IDs: si menu tiene nav_home, nav_graph también debe tener nav_home"
          },
          {
            "id":       "start-destination-exists",
            "name":     "startDestination válido",
            "file_a":   "nav_graph.xml",
            "regex":    "app:startDestination=\"@id\\/([^\"]+)\"",
            "must_exist_in_same_file": true,
            "severity": "error",
            "fix":      "El ID referenciado en startDestination debe existir como fragment en nav_graph.xml"
          }
        ],

        "manifest_rules": [
          {
            "id":       "activity-name-match",
            "name":     "Activity name vs archivo .kt",
            "file":     "AndroidManifest.xml",
            "regex":    "android:name=\"\\.([^\"]+)\"",
            "must_match_kt": true,
            "severity": "error",
            "message":  "android:name en Manifest debe coincidir con el nombre del archivo .kt",
            "fix":      "Si el archivo es ActivityMAin.kt → android:name=\".ActivityMAin\""
          },
          {
            "id":       "exported-launcher",
            "name":     "android:exported en launcher",
            "file":     "AndroidManifest.xml",
            "detect":   "android.intent.action.MAIN",
            "requires": "android:exported=\"true\"",
            "severity": "error",
            "fix":      "Agregar android:exported=\"true\" a la activity con intent-filter MAIN/LAUNCHER"
          }
        ],

        "security_rules": [
          {
            "id":       "no-secrets-in-code",
            "name":     "Secrets en código",
            "patterns": ["password", "secret", "api_key", "apikey", "token", ".env"],
            "severity": "critical",
            "message":  "Archivo potencialmente contiene credenciales",
            "fix":      "Mover a local.properties o variables de entorno. Agregar al .gitignore"
          },
          {
            "id":       "local-properties-gitignore",
            "name":     "local.properties en .gitignore",
            "file":     ".gitignore",
            "must_contain": "local.properties",
            "severity": "warn",
            "fix":      "Agregar local.properties al .gitignore para no exponer sdk.dir"
          }
        ],

        "risk_levels": {
          "critical": { "label": "🔥🔥 CRITICAL", "color": "#ff6b6b", "stop_build": true },
          "error":    { "label": "🔥 ERROR",      "color": "#ff8e8e", "stop_build": true },
          "warn":     { "label": "⚠ WARNING",    "color": "#d29922", "stop_build": false },
          "ok":       { "label": "✓ OK",         "color": "#00ff90", "stop_build": false }
        }
      }
      ```

      ### DirTreeGen/src/modules/validator/validator.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Validator View
           src/modules/validator/validator.html
           Mount point para la vista de validación
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <!-- Se renderiza dinámicamente por validator.js -->
      <!-- Estructura resultante:
      <div class="v-validate">

        <div class="label">→ ostp validate --versions --ids --security</div>

        <div class="val-grid">

          <div class="val-card">
            <div class="val-title">Versiones detectadas</div>
            <div class="val-row">
              <span>Kotlin</span>
              <span>2.0.21 <span class="val-badge badge-ok">OK</span></span>
            </div>
            <div class="val-row">
              <span>KSP</span>
              <span>2.0.21-1.0.28 <span class="val-badge badge-ok">OK</span></span>
            </div>
            <div class="val-row">
              <span>AGP</span>
              <span>8.7.3 <span class="val-badge badge-ok">OK</span></span>
            </div>
            <div class="val-row">
              <span>Room</span>
              <span>2.7.0 <span class="val-badge badge-ok">OK</span></span>
            </div>
          </div>

          <div class="val-card">
            <div class="val-title">nav_graph vs bottom_nav</div>
            <div class="val-row">
              <span>nav_home</span>
              <span class="val-badge badge-ok">NAV</span>
              <span class="val-badge badge-ok">MENU</span>
            </div>
            <div class="val-row">
              <span>nav_inventario</span>
              <span class="val-badge badge-ok">NAV</span>
              <span class="val-badge badge-ok">MENU</span>
            </div>
          </div>

        </div>

        <div class="val-card">
          <div class="val-title">Archivos críticos</div>
          <div style="color:var(--ostp-primary)">✓ Sin archivos críticos</div>
        </div>

      </div>
      -->

      <div id="view-validate" style="display:none">
        <!-- validator.js renderiza aquí -->
      </div>
      ```

      ### DirTreeGen/src/modules/validator/validator.js
      ```js
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
      ```

      ### DirTreeGen/src/ui/buttons/buttons.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Buttons Reference
           src/ui/buttons/buttons.html
           Referencia visual de todos los botones del sistema
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <!-- ── Botones principales (topbar) ──────────────────── -->
      <div class="flex gap-sm">
        <button class="btn btn-vino"    id="btnOpen">📁 Abrir</button>
        <button class="btn btn-gold"    id="bMd"  disabled>⬇ MD</button>
        <button class="btn btn-success" id="bTxt" disabled>⬇ TXT</button>
        <button class="btn btn-primary" id="bCmd" disabled>⬡ PS1</button>
      </div>

      <!-- ── View tabs (toolbar) ───────────────────────────── -->
      <div class="view-tabs">
        <button class="vt on" id="vt-tree">🌳 TREE</button>
        <button class="vt"    id="vt-content">📄 READ</button>
        <button class="vt"    id="vt-export">📤 EXPORT</button>
        <button class="vt"    id="vt-validate">✓ VALIDATE</button>
        <button class="vt"    id="vt-cmd">⬡ PS1</button>
      </div>

      <!-- ── Filter chips (sidebar) ────────────────────────── -->
      <div class="chips">
        <span class="chip on"  data-e="">ALL</span>
        <span class="chip" data-e="kt">.kt</span>
        <span class="chip" data-e="xml">.xml</span>
        <span class="chip" data-e="kts">.kts</span>
        <span class="chip" data-e="toml">.toml</span>
        <span class="chip" data-e="properties">.prop</span>
        <span class="chip" data-e="json">.json</span>
        <span class="chip" data-e="md">.md</span>
        <span class="chip" data-e="sql">.sql</span>
        <span class="chip" data-e="ps1">.ps1</span>
      </div>

      <!-- ── Terminal control ──────────────────────────────── -->
      <button class="btn btn-vino btn-xs" onclick="clearLog()">CLR</button>

      <!-- ── File block expand ─────────────────────────────── -->
      <button class="fb-toggle">Expandir</button>

      <!-- ── CMD copy ──────────────────────────────────────── -->
      <button class="cmd-copy">Copy</button>
      ```

      ### DirTreeGen/src/ui/buttons/buttons.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Buttons UI
         src/ui/buttons/buttons.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { State }     from '../../core/state.js';
      import { Events }    from '../../core/events.js';
      import { Router }    from '../../core/router.js';
      import { loadFiles } from '../sidebar/sidebar.js';

      export function initButtons() {

        // ── Open folder ──────────────────────────────────────
        const fi = document.getElementById('fi');
        window.triggerOpen = () => fi?.click();

        // ── Export ───────────────────────────────────────────
        const bMd  = document.getElementById('bMd');
        const bTxt = document.getElementById('bTxt');
        const bCmd = document.getElementById('bCmd');
        if (bMd)  bMd.onclick  = () => Events.emit('export:md');
        if (bTxt) bTxt.onclick = () => Events.emit('export:txt');
        if (bCmd) bCmd.onclick = () => Router.go('cmd');

        // ── View tabs ────────────────────────────────────────
        ['tree','content','export','validate','cmd'].forEach(v => {
          const btn = document.getElementById('vt-' + v);
          if (btn) btn.onclick = () => Router.go(v);
        });

        // ── Filter chips ─────────────────────────────────────
        document.querySelectorAll('.chip').forEach(chip => {
          chip.onclick = () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
            chip.classList.add('on');
            State.setFilter(chip.dataset.e || '');
            Events.emit('filter:changed', { ext: State.filter });
          };
        });

        // ── Keyboard shortcuts ───────────────────────────────
        document.addEventListener('keydown', e => {
          const ctrl = e.ctrlKey || e.metaKey;
          if (!ctrl) return;

          const map = {
            'o': () => window.triggerOpen?.(),
            'f': () => document.getElementById('si')?.focus(),
            '1': () => Router.go('tree'),
            '2': () => Router.go('content'),
            '3': () => Router.go('export'),
            '4': () => Router.go('validate'),
            '5': () => Router.go('cmd'),
            'm': () => Events.emit('export:md'),
            't': () => Events.emit('export:txt'),
            'l': () => window.clearLog?.(),
            '\\':() => toggleSidebar(),
            'd': () => setTheme('dark'),
            'q': () => setTheme('quantum'),
          };

          const action = map[e.key.toLowerCase()];
          if (action) { e.preventDefault(); action(); }
        });
      }

      // ── Sidebar toggle ────────────────────────────────────
      function toggleSidebar() {
        const sb = document.getElementById('sidebar');
        if (!sb) return;
        const hidden = sb.style.display === 'none';
        sb.style.display = hidden ? '' : 'none';
        Events.emit('log:add', { type:'info', msg:`→ sidebar: ${hidden ? 'show' : 'hide'}` });
      }

      // ── Theme switcher ────────────────────────────────────
      function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        Events.emit('log:add', { type:'info', msg:`→ theme: ${theme}` });
      }

      window.toggleSidebar = toggleSidebar;
      window.setTheme      = setTheme;
      ```

      ### DirTreeGen/src/ui/modals/modals.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Modals
           src/ui/modals/modals.html
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <!-- ── Modal: Error de validación ────────────────────── -->
      <div class="modal-overlay" id="modalError">
        <div class="modal">
          <div class="modal-header">
            <span class="modal-title">⚠ Error detectado</span>
            <button class="modal-close" onclick="closeModal('modalError')">✕</button>
          </div>
          <div id="modalErrorBody" style="font-size:13px;line-height:1.7;color:var(--text)">
            <!-- Contenido dinámico -->
          </div>
          <div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end">
            <button class="btn btn-ghost btn-sm" onclick="closeModal('modalError')">Cerrar</button>
            <button class="btn btn-success btn-sm" id="modalErrorFix">Ver Fix</button>
          </div>
        </div>
      </div>

      <!-- ── Modal: Shortcuts ───────────────────────────────── -->
      <div class="modal-overlay" id="modalShortcuts">
        <div class="modal">
          <div class="modal-header">
            <span class="modal-title">⌨ Keyboard Shortcuts</span>
            <button class="modal-close" onclick="closeModal('modalShortcuts')">✕</button>
          </div>
          <div id="modalShortcutsBody" style="font-size:12px;font-family:var(--font-mono)">
            <!-- Se puebla desde shortcuts.json -->
          </div>
        </div>
      </div>

      <!-- ── Modal: Acerca de ───────────────────────────────── -->
      <div class="modal-overlay" id="modalAbout">
        <div class="modal">
          <div class="modal-header">
            <span class="modal-title">OSTP · DevTool v1.0</span>
            <button class="modal-close" onclick="closeModal('modalAbout')">✕</button>
          </div>
          <div style="font-size:13px;line-height:1.8;color:var(--text)">
            <p style="color:var(--ostp-primary);font-family:var(--font-mono);margin-bottom:12px">
              Oficina de Soluciones Técnicas y Prototipado
            </p>
            <p>@echoShift · QUANTUM.qnu · Zapopan, Jalisco</p>
            <p style="color:var(--text-muted);margin-top:8px;font-size:11px">
              Elimina el punto ciego entre comunicación,<br>
              construcción y resultados en proyectos de desarrollo.
            </p>
            <div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--border);font-family:var(--font-mono);font-size:10px;color:var(--ostp-gold)">
              <!--████████████████ostp████████████████████-->
            </div>
          </div>
        </div>
      </div>
      ```

      ### DirTreeGen/src/ui/modals/modals.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Modals UI
         src/ui/modals/modals.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { Events } from '../../core/events.js';

      export function initModals() {
        // Cerrar modal al click fuera
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
          overlay.addEventListener('click', e => {
            if (e.target === overlay) closeModal(overlay.id);
          });
        });

        // Cerrar con Escape
        document.addEventListener('keydown', e => {
          if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.open').forEach(m => {
              closeModal(m.id);
            });
          }
        });

        // Escuchar eventos del sistema
        Events.on('modal:error',     ({ title, body, fix }) => openModalError(title, body, fix));
        Events.on('modal:shortcuts', ()                     => openModalShortcuts());
        Events.on('modal:about',     ()                     => openModalAbout());
      }

      // ── Open / Close ──────────────────────────────────────
      export function openModal(id) {
        const el = document.getElementById(id);
        if (el) el.classList.add('open');
      }

      export function closeModal(id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove('open');
      }

      // Exponer globalmente para uso inline en HTML
      window.closeModal = closeModal;
      window.openModal  = openModal;

      // ── Modal: Error con Fix ───────────────────────────────
      export function openModalError(title, body, fix) {
        const el = document.getElementById('modalError');
        if (!el) return;

        const titleEl = el.querySelector('.modal-title');
        const bodyEl  = document.getElementById('modalErrorBody');
        const fixBtn  = document.getElementById('modalErrorFix');

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

        if (fixBtn) fixBtn.style.display = fix ? 'inline-flex' : 'none';

        openModal('modalError');
      }

      // ── Modal: Shortcuts ──────────────────────────────────
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

      // ── Modal: About ──────────────────────────────────────
      export function openModalAbout() {
        openModal('modalAbout');
      }

      // ── Utils ─────────────────────────────────────────────
      function esc(t) {
        return String(t)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      ```

      ### DirTreeGen/src/ui/panels/panels.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Panels / Output Views
           src/ui/panels/panels.html
           Contiene los templates de los paneles de contenido
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <!-- ── Output mount point ────────────────────────────── -->
      <div id="output">

        <!-- Empty state (default) -->
        <div class="empty" id="emptyState">
          <div class="empty-icon">⬡</div>
          <div style="font-size:14px;font-weight:700;color:var(--text)">OSTP · DevTool v1</div>
          <div class="mono-sm" style="color:var(--text-muted);margin-top:4px">
            Oficina de Soluciones Técnicas y Prototipado
          </div>
          <button class="btn btn-success" onclick="triggerOpen()" style="margin-top:12px">
            📂 Abrir Proyecto
          </button>
        </div>

      </div>

      <!-- ── File block template ────────────────────────────── -->
      <!--
        Uso en JS: clonar este template y llenar los datos
        <div class="fb">
          <div class="fb-head">
            <span class="fb-path">{icon} {path}</span>
            <span class="fb-meta">{kb}KB · {lines}L</span>
            <button class="fb-toggle">Expandir</button>
          </div>
          <div class="fb-body coll">{content}</div>
        </div>
      -->

      <!-- ── CMD block template ─────────────────────────────── -->
      <!--
        <div class="cmd-block">
          <button class="cmd-copy" data-t="{escaped_content}">Copy</button>
          {content}
        </div>
      -->
      ```

      ### DirTreeGen/src/ui/panels/panels.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Panels UI
         src/ui/panels/panels.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { State }  from '../../core/state.js';
      import { Events } from '../../core/events.js';

      export function initPanels() {
        Events.on('view:changed',   ({ view }) => switchPanel(view));
        Events.on('project:loaded', ()         => hideEmpty());
      }

      // ── Cambiar panel visible ─────────────────────────────
      function switchPanel(view) {
        const output = document.getElementById('output');
        if (!output) return;

        // Si no hay proyecto cargado — mantener empty state
        if (!State.treeRoot) {
          showEmpty();
          return;
        }

        hideEmpty();
      }

      // ── Empty state ───────────────────────────────────────
      export function showEmpty() {
        const el = document.getElementById('emptyState');
        if (el) el.style.display = 'flex';
      }

      export function hideEmpty() {
        const el = document.getElementById('emptyState');
        if (el) el.style.display = 'none';
      }

      // ── File block factory ────────────────────────────────
      // Crea un bloque de contenido de archivo
      export function makeFileBlock(icon, path, kb, lines, content, collapsed = true) {
        const fb   = document.createElement('div');
        fb.className = 'fb';

        const shouldCollapse = collapsed && lines > 15;

        fb.innerHTML = `
          <div class="fb-head">
            <span class="fb-path">${icon} ${esc(path)}</span>
            <span class="fb-meta">${kb}KB · ${lines}L</span>
            ${shouldCollapse
              ? `<button class="fb-toggle" onclick="toggleBlock(this)">Expandir</button>`
              : ''}
          </div>
          <div class="fb-body ${shouldCollapse ? 'coll' : ''}">${esc(content)}</div>
        `;

        return fb;
      }

      // ── Toggle expand/collapse ────────────────────────────
      export function toggleBlock(btn) {
        const body      = btn.closest('.fb').querySelector('.fb-body');
        const collapsed = body.classList.toggle('coll');
        btn.textContent = collapsed ? 'Expandir' : 'Colapsar';
      }

      // Exponer globalmente para uso inline en HTML
      window.toggleBlock = toggleBlock;

      // ── CMD block factory ─────────────────────────────────
      // Crea un bloque de output para PowerShell
      export function makeCmdBlock(content) {
        const div = document.createElement('div');
        div.className = 'cmd-block';
        div.innerHTML = `
          <button class="cmd-copy" onclick="copyToClipboard(this)" data-t="${escAttr(content)}">
            Copy
          </button>
          ${esc(content)}
        `;
        return div;
      }

      // ── Copy to clipboard ─────────────────────────────────
      export function copyToClipboard(btn) {
        const text = btn.dataset.t;
        navigator.clipboard.writeText(text).then(() => {
          const orig = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => btn.textContent = orig, 1500);
        }).catch(() => {
          Events.emit('log:add', { type: 'err', msg: '✗ Clipboard no disponible' });
        });
      }

      // Exponer globalmente para uso inline en HTML
      window.copyToClipboard = copyToClipboard;

      // ── Scroll output to top ──────────────────────────────
      export function scrollOutputTop() {
        const out = document.getElementById('output');
        if (out) out.scrollTop = 0;
      }

      // ── Utils ─────────────────────────────────────────────
      function esc(t) {
        return String(t)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }

      function escAttr(t) {
        return String(t)
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }
      ```

      ### DirTreeGen/src/ui/sidebar/sidebar.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Sidebar Component
           src/ui/sidebar/sidebar.html
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <div id="sidebar">

        <!-- Project section -->
        <div class="sidebar-section">
          <div class="label" style="margin-bottom:8px">Proyecto</div>

          <!-- Upload zone -->
          <div class="upload-zone" id="uz">
            <input type="file" webkitdirectory multiple id="fi2"/>
            <span class="upload-zone-icon">📂</span>
            <div class="upload-zone-text">Arrastra una carpeta</div>
            <div class="upload-zone-sub">o haz click aquí</div>
          </div>

          <!-- Search -->
          <div class="search-wrap">
            <span class="search-icon">⌕</span>
            <input type="text" id="si" placeholder="ostp search..."/>
            <div class="search-results" id="sr"></div>
          </div>
        </div>

        <!-- Filter chips -->
        <div class="chips" id="chips">
          <span class="chip on"  data-e="">ALL</span>
          <span class="chip" data-e="kt">.kt</span>
          <span class="chip" data-e="xml">.xml</span>
          <span class="chip" data-e="kts">.kts</span>
          <span class="chip" data-e="toml">.toml</span>
          <span class="chip" data-e="properties">.prop</span>
          <span class="chip" data-e="json">.json</span>
          <span class="chip" data-e="md">.md</span>
          <span class="chip" data-e="sql">.sql</span>
          <span class="chip" data-e="ps1">.ps1</span>
        </div>

        <!-- Stats row -->
        <div class="stats-row">
          <div class="stat-cell">
            <div class="stat-n" id="sT">0</div>
            <div class="stat-l">Files</div>
          </div>
          <div class="stat-cell">
            <div class="stat-n" id="sF">0</div>
            <div class="stat-l">Dirs</div>
          </div>
          <div class="stat-cell">
            <div class="stat-n" id="sC" style="color:var(--risk-critical)">0</div>
            <div class="stat-l">Crit</div>
          </div>
          <div class="stat-cell">
            <div class="stat-n" id="sH" style="color:var(--risk-high)">0</div>
            <div class="stat-l">High</div>
          </div>
        </div>

        <!-- File tree label -->
        <div class="label" style="padding:6px 14px">Estructura</div>

        <!-- File tree mount point -->
        <div id="file-tree">
          <div style="padding:20px;text-align:center;font-size:11px;color:var(--border)">
            ostp awaiting target...
          </div>
        </div>

      </div>
      ```

      ### DirTreeGen/src/ui/sidebar/sidebar.js
      ```js
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
      ```

      ### DirTreeGen/src/ui/statusbar/statusbar.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Status Bar Component
           src/ui/statusbar/statusbar.html
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <div id="statusbar">

        <!-- Status indicator -->
        <div class="status-item">
          <div class="status-dot" style="background:var(--ostp-primary)"></div>
          <span class="status-ok" id="stMsg">READY</span>
        </div>

        <!-- Brand -->
        <span>OSTP · @echoShift · Zapopan, Jalisco</span>

        <!-- Clock -->
        <span class="status-right" id="stTime"></span>

      </div>
      ```

      ### DirTreeGen/src/ui/statusbar/statusbar.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Statusbar UI
         src/ui/statusbar/statusbar.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { Events } from '../../core/events.js';

      export function initStatusbar() {
        Events.on('status:set', ({ msg }) => {
          const el = document.getElementById('stMsg');
          if (el) el.textContent = msg;
        });

        // Clock
        const tick = () => {
          const el = document.getElementById('stTime');
          if (el) el.textContent = new Date().toLocaleTimeString();
        };
        tick();
        setInterval(tick, 1000);
      }
      ```

      ### DirTreeGen/src/ui/terminal/terminal.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Terminal Component
           src/ui/terminal/terminal.html
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <div id="terminal">

        <!-- Header -->
        <div class="term-header">
          <div class="term-title">OSTP · TERMINAL</div>
          <button class="btn btn-vino btn-xs" onclick="clearLog()">CLR</button>
        </div>

        <!-- Log output -->
        <div class="term-log" id="log">
          <div class="tl">
            <span class="tl-info">→ ostp devtool v1.0 · QUANTUM.qnu · @echoShift · READY</span>
          </div>
        </div>

      </div>
      ```

      ### DirTreeGen/src/ui/terminal/terminal.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Terminal UI
         src/ui/terminal/terminal.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { Events } from '../../core/events.js';

      export function initTerminal() {
        Events.on('log:add', ({ type, msg }) => addLog(type, msg));
      }

      function addLog(type, msg) {
        const log = document.getElementById('log');
        if (!log) return;
        const d = document.createElement('div');
        d.className = 'tl';
        const cls = { ok:'tl-ok', warn:'tl-warn', err:'tl-err', info:'tl-info' };
        d.innerHTML = `<span class="${cls[type] || 'tl-muted'}">${msg}</span>`;
        log.appendChild(d);
        log.scrollTop = log.scrollHeight;
      }

      window.clearLog = () => {
        const log = document.getElementById('log');
        if (log) log.innerHTML = '';
      };
      ```

      ### DirTreeGen/src/ui/toolbar/toolbar.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Toolbar Component
           src/ui/toolbar/toolbar.html
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <div id="toolbar">

        <!-- Current path -->
        <div class="toolbar-path" id="tp">— sin proyecto —</div>

        <!-- View tabs -->
        <div class="view-tabs">
          <button class="vt on" id="vt-tree">🌳 TREE</button>
          <button class="vt"    id="vt-content">📄 READ</button>
          <button class="vt"    id="vt-export">📤 EXPORT</button>
          <button class="vt"    id="vt-validate">✓ VALIDATE</button>
          <button class="vt"    id="vt-cmd">⬡ PS1</button>
        </div>

      </div>
      ```

      ### DirTreeGen/src/ui/toolbar/toolbar.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Toolbar UI
         src/ui/toolbar/toolbar.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { State }  from '../../core/state.js';
      import { Events } from '../../core/events.js';
      import { Router } from '../../core/router.js';

      export function initToolbar() {
        Events.on('file:selected', ({ node }) => {
          const el = document.getElementById('tp');
          if (el) el.textContent = node.path;
        });
      }
      ```

      ### DirTreeGen/src/ui/topbar/topbar.html
      ```html
      <!-- ═══════════════════════════════════════════════════════
           OSTP DevTool — Topbar Component
           src/ui/topbar/topbar.html
           @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ -->

      <div id="topbar">

        <!-- Brand -->
        <div class="topbar-brand">
          <div class="topbar-brand-dot"></div>
          <div>
            <div class="topbar-brand-name">OSTP · DevTool</div>
            <div class="topbar-brand-sub">@echoShift · QUANTUM.qnu</div>
          </div>
        </div>

        <!-- Command line display -->
        <div class="topbar-cmd">
          <div class="topbar-cmd-inner">
            <span class="prompt">→</span>
            <span id="cmdLine">ostp devtool --ready</span>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="topbar-actions">
          <button class="btn btn-vino"    id="btnOpen" onclick="triggerOpen()">📁 Abrir</button>
          <button class="btn btn-gold"    id="bMd"  disabled>⬇ MD</button>
          <button class="btn btn-success" id="bTxt" disabled>⬇ TXT</button>
          <button class="btn btn-primary" id="bCmd" disabled>⬡ PS1</button>
          <input  type="file" id="fi" webkitdirectory multiple style="display:none"/>
        </div>

      </div>
      ```

      ### DirTreeGen/src/ui/topbar/topbar.js
      ```js
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Topbar UI
         src/ui/topbar/topbar.js
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      import { Events } from '../../core/events.js';

      export function initTopbar() {
        Events.on('status:set',    ({ msg }) => setCmd(`ostp devtool -- ${msg}`));
        Events.on('project:loaded', ({ stats }) =>
          setCmd(`ostp scan --files ${stats.total} --dirs ${stats.dirs} --ok`));
      }

      export function setCmd(cmd) {
        const el = document.getElementById('cmdLine');
        if (el) el.textContent = cmd;
      }
      ```

      ### DirTreeGen/styles/base/reset.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Reset
         styles/base/reset.css
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html, body {
        height: 100%;
        overflow: hidden;
      }

      body {
        font-family: var(--font-ui);
        font-size: var(--fs-base);
        background: var(--bg-root);
        color: var(--text);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }

      a { color: inherit; text-decoration: none; }
      button { cursor: pointer; font-family: inherit; }
      input, select, textarea { font-family: inherit; }
      ul, ol { list-style: none; }
      img, svg { display: block; }

      /* ── Scrollbar ────────────────────────────────────── */
      ::-webkit-scrollbar       { width: 4px; height: 4px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
      ::-webkit-scrollbar-thumb:hover { background: var(--ostp-secondary); }
      ```

      ### DirTreeGen/styles/base/typography.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Typography
         styles/base/typography.css
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      /* ── Labels / Caps ────────────────────────────────── */
      .label {
        font-size: var(--fs-xs);
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--text-muted);
      }

      .label-sm {
        font-size: 8px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: var(--text-muted);
      }

      /* ── Monospace ────────────────────────────────────── */
      .mono {
        font-family: var(--font-mono);
        font-size: var(--fs-base);
      }

      .mono-sm {
        font-family: var(--font-mono);
        font-size: var(--fs-md);
      }

      /* ── Brand ────────────────────────────────────────── */
      .brand-gradient {
        background: linear-gradient(45deg, var(--ostp-primary), var(--ostp-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* ── Risk Labels ──────────────────────────────────── */
      .risk-c { color: var(--risk-critical); }
      .risk-h { color: var(--risk-high); }
      .risk-m { color: var(--risk-medium); }
      .risk-l { color: var(--risk-low); }

      /* ── Highlight ────────────────────────────────────── */
      .hl {
        color: var(--ostp-primary);
        font-weight: 700;
      }

      /* ── Truncate ─────────────────────────────────────── */
      .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* ── Code ─────────────────────────────────────────── */
      code {
        font-family: var(--font-mono);
        font-size: var(--fs-base);
        background: rgba(0,0,0,0.3);
        padding: 1px 5px;
        border-radius: var(--r-sm);
        color: var(--ostp-secondary);
      }
      ```

      ### DirTreeGen/styles/base/variables.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — CSS Variables
         styles/base/variables.css
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      :root {
        /* ── Brand Colors ─────────────────────────────────── */
        --ostp-primary:    #00ff90;
        --ostp-secondary:  #58a6ff;
        --ostp-accent:     #ff6b6b;
        --ostp-warn:       #d29922;
        --ostp-vino:       #6D1A2A;
        --ostp-gold:       #C8982A;

        /* ── Backgrounds ──────────────────────────────────── */
        --bg-root:         #050811;
        --bg-dark:         #0a0f1c;
        --bg-card:         #161b22;
        --bg-hover:        rgba(88,166,255,0.06);
        --bg-active:       rgba(0,255,144,0.08);
        --bg-input:        rgba(5,8,17,0.8);

        /* ── Borders ──────────────────────────────────────── */
        --border:          #1e2d3d;
        --border-light:    rgba(30,45,61,0.5);
        --border-focus:    var(--ostp-primary);

        /* ── Text ─────────────────────────────────────────── */
        --text:            #c9d1d9;
        --text-muted:      #8b949e;
        --text-dim:        #3d4f5f;
        --text-on-primary: #000000;
        --text-on-vino:    #FDF6EC;

        /* ── Risk Colors ──────────────────────────────────── */
        --risk-critical:   #ff6b6b;
        --risk-high:       #ff8e8e;
        --risk-medium:     #d29922;
        --risk-low:        #3d4f5f;

        /* ── Layout ───────────────────────────────────────── */
        --topbar-h:        52px;
        --toolbar-h:       40px;
        --statusbar-h:     24px;
        --terminal-h:      150px;
        --sidebar-w:       300px;

        /* ── Spacing ──────────────────────────────────────── */
        --sp-xs:  4px;
        --sp-sm:  8px;
        --sp-md:  12px;
        --sp-lg:  16px;
        --sp-xl:  20px;
        --sp-xxl: 24px;

        /* ── Radius ───────────────────────────────────────── */
        --r-sm:   4px;
        --r-md:   6px;
        --r-lg:   8px;
        --r-xl:   12px;

        /* ── Fonts ────────────────────────────────────────── */
        --font-ui:   'Segoe UI', system-ui, sans-serif;
        --font-mono: 'Consolas', 'Monaco', 'Courier New', monospace;

        /* ── Font Sizes ───────────────────────────────────── */
        --fs-xs:   9px;
        --fs-sm:   10px;
        --fs-md:   11px;
        --fs-base: 12px;
        --fs-lg:   13px;
        --fs-xl:   14px;
        --fs-2xl:  16px;

        /* ── Transitions ──────────────────────────────────── */
        --t-fast:   0.1s ease;
        --t-base:   0.15s ease;
        --t-slow:   0.2s ease;

        /* ── Shadows ──────────────────────────────────────── */
        --shadow-sm:  0 2px 8px rgba(0,0,0,0.3);
        --shadow-md:  0 4px 16px rgba(0,0,0,0.4);
        --shadow-lg:  0 8px 32px rgba(0,0,0,0.5);

        /* ── Z-index ──────────────────────────────────────── */
        --z-base:    1;
        --z-sidebar: 10;
        --z-topbar:  100;
        --z-modal:   200;
        --z-tooltip: 300;
      }
      ```

      ### DirTreeGen/styles/components/buttons.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Buttons
         styles/components/buttons.css
      ═══════════════════════════════════════════════════════ */

      .btn {
        padding: 5px 12px;
        border: none;
        border-radius: var(--r-md);
        font-size: var(--fs-md);
        font-weight: 600;
        font-family: var(--font-ui);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        transition: all var(--t-base);
        letter-spacing: 0.5px;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .btn:hover   { transform: translateY(-1px); opacity: 0.9; }
      .btn:active  { transform: translateY(0); opacity: 1; }
      .btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }

      /* ── Variants ─────────────────────────────────────── */
      .btn-primary {
        background: linear-gradient(135deg, var(--ostp-secondary), #1f6feb);
        color: #fff;
      }

      .btn-success {
        background: linear-gradient(135deg, var(--ostp-primary), #00cc7a);
        color: var(--text-on-primary);
      }

      .btn-vino {
        background: linear-gradient(135deg, var(--ostp-vino), #3d0a14);
        color: var(--text-on-vino);
        border: 1px solid rgba(109,26,42,0.5);
      }

      .btn-gold {
        background: linear-gradient(135deg, var(--ostp-gold), #8B6520);
        color: #fff;
      }

      .btn-ghost {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text-muted);
      }

      .btn-ghost:hover {
        border-color: var(--ostp-primary);
        color: var(--ostp-primary);
      }

      .btn-danger {
        background: linear-gradient(135deg, var(--ostp-accent), #cc3333);
        color: #fff;
      }

      /* ── Sizes ────────────────────────────────────────── */
      .btn-xs  { padding: 2px 8px;  font-size: var(--fs-xs); }
      .btn-sm  { padding: 4px 10px; font-size: var(--fs-sm); }
      .btn-lg  { padding: 8px 18px; font-size: var(--fs-lg); }

      /* ── View tabs ────────────────────────────────────── */
      .vt {
        padding: 4px 11px;
        border-radius: var(--r-md);
        font-size: var(--fs-sm);
        cursor: pointer;
        border: 1px solid var(--border);
        background: transparent;
        color: var(--text-muted);
        font-family: var(--font-ui);
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: all var(--t-base);
      }

      .vt.on {
        background: var(--ostp-primary);
        color: var(--text-on-primary);
        border-color: var(--ostp-primary);
      }

      .vt:hover:not(.on) {
        border-color: var(--ostp-secondary);
        color: var(--ostp-secondary);
      }
      ```

      ### DirTreeGen/styles/components/chips.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Chips / Filters
         styles/components/chips.css
      ═══════════════════════════════════════════════════════ */

      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: var(--sp-xs);
        padding: var(--sp-sm) var(--sp-md);
        border-bottom: 1px solid var(--border);
        flex-shrink: 0;
      }

      .chip {
        padding: 2px 8px;
        border-radius: 20px;
        font-size: var(--fs-sm);
        font-family: var(--font-mono);
        letter-spacing: 0.5px;
        cursor: pointer;
        border: 1px solid var(--border);
        background: transparent;
        color: var(--text-muted);
        transition: all var(--t-base);
      }

      .chip.on {
        background: var(--ostp-primary);
        color: var(--text-on-primary);
        border-color: var(--ostp-primary);
        font-weight: 700;
      }

      .chip:hover:not(.on) {
        border-color: var(--ostp-primary);
        color: var(--ostp-primary);
      }
      ```

      ### DirTreeGen/styles/components/fileblock.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — File Block (cmd/export view)
         styles/components/fileblock.css
      ═══════════════════════════════════════════════════════ */

      .cmd-block {
        background: rgba(0,0,0,0.4);
        border: 1px solid var(--border);
        border-radius: var(--r-md);
        padding: var(--sp-md);
        font-family: var(--font-mono);
        font-size: var(--fs-base);
        line-height: 1.8;
        white-space: pre-wrap;
        color: var(--text);
        position: relative;
      }

      .cmd-copy {
        position: absolute;
        top: 8px; right: 8px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        color: var(--text-muted);
        padding: 2px 8px;
        border-radius: var(--r-sm);
        font-size: var(--fs-sm);
        cursor: pointer;
        font-family: var(--font-ui);
      }

      .cmd-copy:hover {
        color: var(--ostp-primary);
        border-color: var(--ostp-primary);
      }

      .v-export {
        padding: var(--sp-md);
        font-family: var(--font-mono);
        font-size: var(--fs-base);
        line-height: 1.6;
        white-space: pre-wrap;
        color: var(--ostp-primary);
      }

      .v-cmd { padding: var(--sp-md); }
      ```

      ### DirTreeGen/styles/components/modals.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Modals
         styles/components/modals.css
      ═══════════════════════════════════════════════════════ */

      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(5,8,17,0.85);
        z-index: var(--z-modal);
        display: flex;
        align-items: center;
        justify-content: center;
        display: none;
      }

      .modal-overlay.open { display: flex; }

      .modal {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--r-xl);
        padding: var(--sp-xl);
        min-width: 360px;
        max-width: 560px;
        width: 90%;
        box-shadow: var(--shadow-lg);
        position: relative;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--sp-lg);
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--sp-md);
      }

      .modal-title {
        font-size: var(--fs-lg);
        font-weight: 700;
        color: var(--text);
        letter-spacing: 1px;
      }

      .modal-close {
        background: transparent;
        border: none;
        color: var(--text-muted);
        font-size: 18px;
        cursor: pointer;
        line-height: 1;
      }

      .modal-close:hover { color: var(--ostp-accent); }
      ```

      ### DirTreeGen/styles/components/panels.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Panels
         styles/components/panels.css
      ═══════════════════════════════════════════════════════ */

      .fb {
        border: 1px solid var(--border);
        border-radius: var(--r-lg);
        margin: 10px 14px;
        overflow: hidden;
      }

      .fb-head {
        background: rgba(0,0,0,0.3);
        padding: 7px 12px;
        display: flex;
        align-items: center;
        gap: var(--sp-sm);
        border-bottom: 1px solid var(--border);
      }

      .fb-path {
        font-family: var(--font-mono);
        font-size: var(--fs-md);
        color: var(--ostp-secondary);
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .fb-meta { font-size: var(--fs-sm); color: var(--text-muted); }

      .fb-body {
        padding: 12px;
        font-family: var(--font-mono);
        font-size: var(--fs-base);
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-all;
        color: var(--text);
        background: rgba(5,8,17,0.6);
        max-height: 280px;
        overflow-y: auto;
      }

      .fb-body.coll {
        max-height: 70px;
        overflow: hidden;
        mask-image: linear-gradient(to bottom, black 40%, transparent);
      }

      .fb-toggle {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text-muted);
        font-size: var(--fs-sm);
        padding: 2px 8px;
        border-radius: var(--r-sm);
        cursor: pointer;
        font-family: var(--font-ui);
      }

      .fb-toggle:hover {
        border-color: var(--ostp-primary);
        color: var(--ostp-primary);
      }

      /* ── Empty state ──────────────────────────────────── */
      .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 12px;
        color: var(--text-muted);
        padding: 40px;
        text-align: center;
      }

      .empty-icon {
        font-size: 40px;
        opacity: 0.3;
      }/* ═══════════════════════════════════════════════════════
         OSTP DevTool — Panels
         styles/components/panels.css
      ═══════════════════════════════════════════════════════ */

      .fb {
        border: 1px solid var(--border);
        border-radius: var(--r-lg);
        margin: 10px 14px;
        overflow: hidden;
      }

      .fb-head {
        background: rgba(0,0,0,0.3);
        padding: 7px 12px;
        display: flex;
        align-items: center;
        gap: var(--sp-sm);
        border-bottom: 1px solid var(--border);
      }

      .fb-path {
        font-family: var(--font-mono);
        font-size: var(--fs-md);
        color: var(--ostp-secondary);
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .fb-meta { font-size: var(--fs-sm); color: var(--text-muted); }

      .fb-body {
        padding: 12px;
        font-family: var(--font-mono);
        font-size: var(--fs-base);
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-all;
        color: var(--text);
        background: rgba(5,8,17,0.6);
        max-height: 280px;
        overflow-y: auto;
      }

      .fb-body.coll {
        max-height: 70px;
        overflow: hidden;
        mask-image: linear-gradient(to bottom, black 40%, transparent);
      }

      .fb-toggle {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text-muted);
        font-size: var(--fs-sm);
        padding: 2px 8px;
        border-radius: var(--r-sm);
        cursor: pointer;
        font-family: var(--font-ui);
      }

      .fb-toggle:hover {
        border-color: var(--ostp-primary);
        color: var(--ostp-primary);
      }

      /* ── Empty state ──────────────────────────────────── */
      .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 12px;
        color: var(--text-muted);
        padding: 40px;
        text-align: center;
      }

      .empty-icon {
        font-size: 40px;
        opacity: 0.3;
      }
      ```

      ### DirTreeGen/styles/components/search.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Search
         styles/components/search.css
      ═══════════════════════════════════════════════════════ */

      .search-wrap {
        position: relative;
        margin-top: var(--sp-sm);
      }

      .search-wrap input {
        width: 100%;
        background: var(--bg-root);
        border: 1px solid var(--border);
        color: var(--text);
        padding: 7px 10px 7px 28px;
        border-radius: var(--r-md);
        font-size: var(--fs-base);
        font-family: var(--font-mono);
        outline: none;
        transition: border var(--t-base);
      }

      .search-wrap input:focus { border-color: var(--ostp-primary); }
      .search-wrap input::placeholder { color: var(--border); }

      .search-icon {
        position: absolute;
        left: 9px; top: 50%;
        transform: translateY(-50%);
        color: var(--text-muted);
        font-size: var(--fs-lg);
        pointer-events: none;
      }

      /* ── Results dropdown ─────────────────────────────── */
      .search-results {
        position: absolute;
        top: 100%; left: 0; right: 0;
        z-index: 50;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--r-md);
        margin-top: 2px;
        max-height: 220px;
        overflow-y: auto;
        display: none;
      }

      .sr-item {
        padding: 7px 10px;
        font-size: var(--fs-md);
        cursor: pointer;
        border-bottom: 1px solid var(--border-light);
        display: flex;
        align-items: flex-start;
        gap: 7px;
        transition: background var(--t-fast);
      }

      .sr-item:hover { background: rgba(0,255,144,0.06); }
      .sr-item:last-child { border-bottom: none; }

      .sr-name {
        color: var(--ostp-secondary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: var(--font-mono);
      }

      .sr-snip {
        font-size: var(--fs-sm);
        color: var(--text-muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      ```

      ### DirTreeGen/styles/components/sidebar.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Sidebar Component
         styles/components/sidebar.css
      ═══════════════════════════════════════════════════════ */

      #sidebar {
        width: var(--sidebar-w);
        flex-shrink: 0;
        background: var(--bg-card);
        border-right: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: var(--z-sidebar);
      }

      .sidebar-section {
        padding: var(--sp-md) var(--sp-md) var(--sp-sm);
        border-bottom: 1px solid var(--border);
        flex-shrink: 0;
      }

      /* ── Upload zone ──────────────────────────────────── */
      .upload-zone {
        border: 1px dashed var(--border);
        border-radius: var(--r-lg);
        padding: var(--sp-md);
        text-align: center;
        cursor: pointer;
        transition: all var(--t-slow);
        position: relative;
        background: rgba(0,255,144,0.02);
      }

      .upload-zone:hover,
      .upload-zone.drag {
        border-color: var(--ostp-primary);
        background: rgba(0,255,144,0.06);
      }

      .upload-zone input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }

      .upload-zone-icon  { font-size: 20px; margin-bottom: var(--sp-xs); display: block; }
      .upload-zone-text  { font-size: var(--fs-md); color: var(--text-muted); }
      .upload-zone-sub   { font-size: var(--fs-sm); color: var(--border); margin-top: 2px; }

      /* ── File tree ────────────────────────────────────── */
      #file-tree {
        flex: 1;
        overflow-y: auto;
        padding: 6px 0;
      }

      /* Tree item */
      .ti {
        padding: 3px 0;
        font-family: var(--font-mono);
        font-size: var(--fs-md);
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        border-left: 2px solid transparent;
        transition: all var(--t-fast);
        white-space: nowrap;
        overflow: hidden;
      }

      .ti:hover {
        background: var(--bg-hover);
        border-left-color: var(--ostp-secondary);
      }

      .ti.sel {
        background: var(--bg-active);
        border-left-color: var(--ostp-primary);
        color: var(--ostp-primary);
      }

      .ti-folder { color: var(--ostp-secondary); }
      .ti-name   { overflow: hidden; text-overflow: ellipsis; flex: 1; }
      .ti-risk   { font-size: 8px; margin-left: auto; padding-right: 6px; white-space: nowrap; }
      ```

      ### DirTreeGen/styles/components/stats.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Stats Row
         styles/components/stats.css
      ═══════════════════════════════════════════════════════ */

      .stats-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1px;
        background: var(--border);
        flex-shrink: 0;
      }

      .stat-cell {
        background: var(--bg-root);
        padding: 8px 4px;
        text-align: center;
      }

      .stat-n {
        font-size: 16px;
        font-weight: 700;
        font-family: var(--font-mono);
        color: var(--ostp-primary);
        line-height: 1.2;
      }

      .stat-l {
        font-size: 8px;
        letter-spacing: 1px;
        color: var(--text-muted);
        text-transform: uppercase;
      }
      ```

      ### DirTreeGen/styles/components/statusbar.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Status Bar
         styles/components/statusbar.css
      ═══════════════════════════════════════════════════════ */

      #statusbar {
        height: var(--statusbar-h);
        flex-shrink: 0;
        background: var(--ostp-vino);
        display: flex;
        align-items: center;
        padding: 0 var(--sp-md);
        gap: var(--sp-lg);
        font-size: var(--fs-sm);
        letter-spacing: 1px;
        color: rgba(253,246,236,0.7);
      }

      .status-item {
        display: flex;
        align-items: center;
        gap: var(--sp-xs);
      }

      .status-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
      }

      .status-ok  { color: var(--ostp-primary); }
      .status-right { margin-left: auto; }
      ```

      ### DirTreeGen/styles/components/terminal.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Terminal
         styles/components/terminal.css
      ═══════════════════════════════════════════════════════ */

      #terminal {
        border-top: 1px solid var(--border);
        height: var(--terminal-h);
        background: var(--bg-root);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        flex-shrink: 0;
      }

      .term-header {
        padding: 4px var(--sp-md);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: var(--sp-sm);
        background: rgba(0,0,0,0.3);
        flex-shrink: 0;
      }

      .term-title {
        font-size: var(--fs-sm);
        letter-spacing: 2px;
        color: var(--text-muted);
        flex: 1;
        text-transform: uppercase;
      }

      .term-log {
        flex: 1;
        overflow-y: auto;
        padding: var(--sp-sm) var(--sp-md);
        font-family: var(--font-mono);
        font-size: var(--fs-md);
        line-height: 1.7;
      }

      .tl { display: flex; gap: 6px; align-items: flex-start; }
      .tl-ok   { color: var(--ostp-primary); }
      .tl-warn { color: var(--ostp-warn); }
      .tl-err  { color: var(--ostp-accent); }
      .tl-info { color: var(--ostp-secondary); }
      .tl-muted { color: var(--text-muted); }
      ```

      ### DirTreeGen/styles/components/toolbar.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Toolbar
         styles/components/toolbar.css
      ═══════════════════════════════════════════════════════ */

      #toolbar {
        height: var(--toolbar-h);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        padding: 0 var(--sp-md);
        gap: var(--sp-sm);
        background: rgba(22,27,34,0.8);
        flex-shrink: 0;
      }

      .toolbar-path {
        font-family: var(--font-mono);
        font-size: var(--fs-md);
        color: var(--text-muted);
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .view-tabs {
        display: flex;
        gap: 2px;
      }
      ```

      ### DirTreeGen/styles/components/topbar.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Topbar Component
         styles/components/topbar.css
      ═══════════════════════════════════════════════════════ */

      #topbar {
        height: var(--topbar-h);
        background: linear-gradient(90deg, var(--bg-root), #0d1525);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        padding: 0 var(--sp-xl);
        gap: var(--sp-lg);
        flex-shrink: 0;
        position: relative;
        z-index: var(--z-topbar);
      }

      #topbar::after {
        content: '';
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 1px;
        background: linear-gradient(90deg, var(--ostp-accent), var(--ostp-primary), var(--ostp-secondary));
      }

      /* ── Brand ────────────────────────────────────────── */
      .topbar-brand {
        display: flex;
        align-items: center;
        gap: var(--sp-sm);
        flex-shrink: 0;
      }

      .topbar-brand-dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--ostp-primary);
        box-shadow: 0 0 8px var(--ostp-primary);
      }

      .topbar-brand-name {
        font-size: var(--fs-xl);
        font-weight: 700;
        letter-spacing: 1px;
        color: #fff;
        line-height: 1.2;
      }

      .topbar-brand-sub {
        font-size: var(--fs-xs);
        letter-spacing: 2px;
        color: var(--ostp-primary);
      }

      /* ── Command line ─────────────────────────────────── */
      .topbar-cmd {
        flex: 1;
        display: flex;
        justify-content: center;
      }

      .topbar-cmd-inner {
        background: rgba(0,255,144,0.04);
        border: 1px solid rgba(0,255,144,0.12);
        border-radius: var(--r-lg);
        padding: 5px 16px;
        font-family: var(--font-mono);
        font-size: var(--fs-base);
        color: var(--text-muted);
        display: flex;
        align-items: center;
        gap: var(--sp-sm);
        min-width: 280px;
      }

      .topbar-cmd-inner .prompt { color: var(--ostp-primary); }

      /* ── Actions ──────────────────────────────────────── */
      .topbar-actions {
        display: flex;
        gap: var(--sp-sm);
        margin-left: auto;
      }
      ```

      ### DirTreeGen/styles/components/tree.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Tree View
         styles/components/tree.css
      ═══════════════════════════════════════════════════════ */

      .v-tree {
        padding: var(--sp-md);
        font-family: var(--font-mono);
        font-size: var(--fs-base);
        line-height: 1.7;
      }

      .v-tree pre {
        color: var(--text);
        font-size: var(--fs-base);
        white-space: pre;
        overflow-x: auto;
      }
      ```

      ### DirTreeGen/styles/components/validator.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Validator View
         styles/components/validator.css
      ═══════════════════════════════════════════════════════ */

      .v-validate { padding: var(--sp-md); }

      .val-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--sp-sm);
        margin-bottom: var(--sp-sm);
      }

      .val-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--r-lg);
        padding: var(--sp-md);
      }

      .val-title {
        font-size: var(--fs-sm);
        letter-spacing: 1px;
        color: var(--text-muted);
        text-transform: uppercase;
        margin-bottom: var(--sp-sm);
      }

      .val-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: var(--fs-base);
        font-family: var(--font-mono);
        padding: 3px 0;
        border-bottom: 1px solid var(--border-light);
      }

      .val-row:last-child { border-bottom: none; }

      .val-badge {
        font-size: var(--fs-sm);
        padding: 1px 6px;
        border-radius: var(--r-sm);
        font-weight: 700;
        font-family: var(--font-mono);
      }

      .badge-ok   { background: rgba(0,255,144,0.12); color: var(--ostp-primary); }
      .badge-warn { background: rgba(210,153,34,0.12); color: var(--ostp-warn); }
      .badge-err  { background: rgba(255,107,107,0.12); color: var(--ostp-accent); }
      ```

      ### DirTreeGen/styles/layout/app.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — App Layout
         styles/layout/app.css
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      /* ── Shell ────────────────────────────────────────── */
      #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
      }

      /* ── Body layout ──────────────────────────────────── */
      #body {
        display: flex;
        flex: 1;
        overflow: hidden;
      }

      /* ── Main area ────────────────────────────────────── */
      #main {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        background: var(--bg-root);
      }

      /* ── Output panel ─────────────────────────────────── */
      #output {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }
      ```

      ### DirTreeGen/styles/layout/grid.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Grid Utilities
         styles/layout/grid.css
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-md); }
      .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: var(--sp-md); }
      .grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: var(--sp-sm); }

      .flex     { display: flex; }
      .flex-col { display: flex; flex-direction: column; }
      .flex-1   { flex: 1; }
      .flex-center { display: flex; align-items: center; justify-content: center; }
      .items-center { align-items: center; }
      .justify-between { justify-content: space-between; }
      .gap-sm { gap: var(--sp-sm); }
      .gap-md { gap: var(--sp-md); }
      .gap-lg { gap: var(--sp-lg); }

      .p-sm  { padding: var(--sp-sm); }
      .p-md  { padding: var(--sp-md); }
      .p-lg  { padding: var(--sp-lg); }
      .px-md { padding-left: var(--sp-md); padding-right: var(--sp-md); }
      .py-sm { padding-top: var(--sp-sm); padding-bottom: var(--sp-sm); }

      .border-b { border-bottom: 1px solid var(--border); }
      .border-t { border-top: 1px solid var(--border); }
      .border-r { border-right: 1px solid var(--border); }
      ```

      ### DirTreeGen/styles/layout/responsive.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Responsive
         styles/layout/responsive.css
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      @media (max-width: 900px) {
        :root { --sidebar-w: 240px; }
      }

      @media (max-width: 700px) {
        #sidebar { display: none; }
        :root { --sidebar-w: 0px; }
      }
      ```

      ### DirTreeGen/styles/main.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Main CSS Entry Point
         styles/main.css
         @echoShift · QUANTUM.qnu
         ─────────────────────────────────────────────────────
         IMPORT ORDER (preservar):
         1. base/variables  → tokens
         2. base/reset      → normalize
         3. base/typography → text utils
         4. themes/dark     → default theme
         5. layout/*        → estructura
         6. components/*    → UI pieces
      ═══════════════════════════════════════════════════════ */

      @import './base/variables.css';
      @import './base/reset.css';
      @import './base/typography.css';

      @import './themes/dark.css';
      @import './themes/quantum.css';

      @import './layout/app.css';
      @import './layout/grid.css';
      @import './layout/responsive.css';

      @import './components/topbar.css';
      @import './components/sidebar.css';
      @import './components/toolbar.css';
      @import './components/buttons.css';
      @import './components/chips.css';
      @import './components/search.css';
      @import './components/panels.css';
      @import './components/terminal.css';
      @import './components/statusbar.css';
      @import './components/stats.css';
      @import './components/modals.css';
      @import './components/tree.css';
      @import './components/validator.css';
      @import './components/fileblock.css';
      ```

      ### DirTreeGen/styles/themes/dark.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Dark Theme (default)
         styles/themes/dark.css
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      [data-theme="dark"],
      :root {
        --bg-root:  #050811;
        --bg-dark:  #0a0f1c;
        --bg-card:  #161b22;
        --border:   #1e2d3d;
        --text:     #c9d1d9;
        --text-muted: #8b949e;
      }
      ```

      ### DirTreeGen/styles/themes/quantum.css
      ```css
      /* ═══════════════════════════════════════════════════════
         OSTP DevTool — Quantum Theme (neon)
         styles/themes/quantum.css
         @echoShift · QUANTUM.qnu
      ═══════════════════════════════════════════════════════ */

      [data-theme="quantum"] {
        --bg-root:  #000000;
        --bg-dark:  #030a05;
        --bg-card:  #071210;
        --border:   #0d3d2a;
        --text:     #b0ffd8;
        --text-muted: #4dcc8a;
        --ostp-primary:   #00ff90;
        --ostp-secondary: #00ffcc;
        --ostp-accent:    #ff3366;
      }
      ```
      -

                ________________________________________
            <!--████████████████ostp████████████████████-->

🔱⟪∴∑Δ↿↾ ‖ ↿αΣψ↾∴⟫🔱

6245. [flag]: 03:60 'LineCode'