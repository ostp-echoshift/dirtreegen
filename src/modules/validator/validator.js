/* ═══════════════════════════════════════════════════════
   OSTP DevTool — Validator Module (COMPLETO)
   src/modules/validator/validator.js
   @echoShift · QUANTUM.qnu

   IMPLEMENTA TODAS LAS REGLAS DE rules.json:
   - version_rules (Kotlin, AGP, KSP, Room, JVM)
   - annotation_processor_rules (kapt vs ksp)
   - nav_id_rules (nav_graph ↔ bottom_nav_menu)
   - manifest_rules (Activity name, exported)
   - security_rules (secrets, local.properties en .gitignore)
 ═══════════════════════════════════════════════════════ */
import { State }  from "../../core/state.js";
import { Events } from "../../core/events.js";

let RULES = null;

async function loadRules() {
  if (RULES) return RULES;
  try {
    const res = await fetch("src/modules/validator/rules.json");
    RULES = await res.json();
    return RULES;
  } catch (e) {
    Events.emit("log:add", { type:"err", msg:"✗ rules.json no encontrado" });
    return null;
  }
}

export function initValidator() {
  Events.on("view:changed", async ({ view }) => {
    if (view === "validate") {
      await loadRules();
      renderValidate();
    }
  });
}

function findFile(nameOrPattern) {
  return State.idx.find(i => {
    if (typeof nameOrPattern === "string") {
      return i.name === nameOrPattern || i.name.endsWith(nameOrPattern);
    }
    return nameOrPattern.test(i.name);
  });
}

function findFileByPath(pattern) {
  return State.idx.find(i => pattern.test(i.path));
}

function esc(t) {
  return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function badge(type, text) {
  const cls = { ok:"badge-ok", warn:"badge-warn", err:"badge-err", crit:"badge-err" }[type] || "badge-warn";
  return "<span class=\"val-badge " + cls + "\">" + esc(text) + "</span>";
}

function renderValidate() {
  const out = document.getElementById("output");
  if (!out || !State.treeRoot) {
    out.innerHTML = "<div class=\"empty\"><div class=\"empty-icon\">⬡</div><div>Carga un proyecto primero</div></div>";
    return;
  }
  out.innerHTML = "";

  const findings = [];
  const versions = checkVersions(findings);
  const kaptKsp  = checkAnnotationProcessor(findings);
  const navCheck = checkNavIds(findings);
  const manifest = checkManifest(findings);
  const security = checkSecurity(findings);
  const critical = State.idx.filter(i => i.cl?.risk === "c");

  const totalErrors = findings.filter(f => f.severity === "error" || f.severity === "critical").length;
  const totalWarns  = findings.filter(f => f.severity === "warn").length;
  const totalOk     = findings.filter(f => f.severity === "ok").length;

  const d = document.createElement("div");
  d.className = "v-validate";
  d.innerHTML = `
    <div class="label" style="margin-bottom:12px">→ ostp validate --all</div>

    <div style="display:flex;gap:10px;margin-bottom:14px">
      <div style="flex:1;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-md);padding:10px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:var(--ostp-primary);font-family:var(--font-mono)">${totalOk}</div>
        <div style="font-size:9px;letter-spacing:1px;color:var(--text-muted)">OK</div>
      </div>
      <div style="flex:1;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-md);padding:10px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:var(--ostp-warn);font-family:var(--font-mono)">${totalWarns}</div>
        <div style="font-size:9px;letter-spacing:1px;color:var(--text-muted)">WARN</div>
      </div>
      <div style="flex:1;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-md);padding:10px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:var(--ostp-accent);font-family:var(--font-mono)">${totalErrors}</div>
        <div style="font-size:9px;letter-spacing:1px;color:var(--text-muted)">ERROR</div>
      </div>
    </div>

    <div class="val-grid">
      <div class="val-card">
        <div class="val-title">Versiones detectadas</div>
        ${versions.map(v => `
          <div class="val-row">
            <span style="color:var(--text-muted)">${esc(v.name)}</span>
            <span style="display:flex;align-items:center;gap:6px">
              <span style="color:var(--text)">${esc(v.value || "—")}</span>
              ${badge(v.severity, v.badge)}
            </span>
          </div>`).join("")}
      </div>

      <div class="val-card">
        <div class="val-title">Annotation Processor</div>
        ${kaptKsp.map(k => `
          <div class="val-row" style="flex-direction:column;align-items:flex-start;gap:4px">
            <div style="display:flex;justify-content:space-between;width:100%">
              <span style="color:var(--text-muted)">${esc(k.name)}</span>
              ${badge(k.severity, k.badge)}
            </div>
            ${k.detail ? "<div style=\"font-size:10px;color:var(--text-muted);font-family:var(--font-mono)\">" + esc(k.detail) + "</div>" : ""}
          </div>`).join("")}
      </div>
    </div>

    <div class="val-card" style="margin-bottom:10px">
      <div class="val-title">nav_graph ↔ bottom_nav_menu</div>
      ${navCheck.length ? navCheck.map(n => `
        <div class="val-row">
          <span style="font-family:var(--font-mono);font-size:11px">${esc(n.id)}</span>
          <span style="display:flex;gap:4px">
            ${badge(n.inNav  ? "ok" : "err", "NAV")}
            ${badge(n.inMenu ? "ok" : "err", "MENU")}
          </span>
        </div>`).join("")
        : "<div style=\"color:var(--text-muted);font-size:12px\">nav_graph.xml / bottom_nav_menu.xml no encontrados</div>"}
    </div>

    <div class="val-card" style="margin-bottom:10px">
      <div class="val-title">AndroidManifest</div>
      ${manifest.map(m => `
        <div class="val-row" style="flex-direction:column;align-items:flex-start;gap:4px">
          <div style="display:flex;justify-content:space-between;width:100%">
            <span style="color:var(--text-muted)">${esc(m.name)}</span>
            ${badge(m.severity, m.badge)}
          </div>
          ${m.detail ? "<div style=\"font-size:10px;color:var(--text-muted);font-family:var(--font-mono)\">" + esc(m.detail) + "</div>" : ""}
        </div>`).join("")}
    </div>

    <div class="val-card" style="margin-bottom:10px">
      <div class="val-title">Seguridad / Secrets</div>
      ${security.length ? security.map(s => `
        <div class="val-row" style="flex-direction:column;align-items:flex-start;gap:4px">
          <div style="display:flex;justify-content:space-between;width:100%">
            <span>${esc(s.icon)} ${esc(s.name)}</span>
            ${badge(s.severity, s.badge)}
          </div>
          ${s.detail ? "<div style=\"font-size:10px;color:var(--text-muted);font-family:var(--font-mono)\">" + esc(s.detail) + "</div>" : ""}
        </div>`).join("")
        : "<div style=\"color:var(--ostp-primary);font-size:12px\">✓ Sin problemas de seguridad detectados</div>"}
    </div>

    <div class="val-card">
      <div class="val-title">Archivos críticos (${critical.length})</div>
      ${critical.length === 0
        ? "<div style=\"color:var(--ostp-primary);font-size:12px\">✓ Sin archivos críticos</div>"
        : critical.map(i => `
          <div class="val-row">
            <span>${i.cl?.icon} ${esc(i.name)}</span>
            ${badge("err", "CRITICAL")}
          </div>`).join("")}
    </div>

    ${findings.filter(f => f.severity === "error" || f.severity === "critical").length ? `
      <div style="margin-top:14px;padding:12px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);border-radius:var(--r-md)">
        <div style="font-size:10px;letter-spacing:2px;color:var(--ostp-accent);margin-bottom:8px">FIXES REQUERIDOS</div>
        ${findings.filter(f => f.severity === "error" || f.severity === "critical").map(f => `
          <div style="margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid rgba(255,107,107,0.1)">
            <div style="font-size:11px;color:var(--text);font-weight:600">${esc(f.name)}</div>
            <code style="display:block;margin-top:4px;font-size:11px;color:var(--ostp-primary);background:rgba(0,0,0,0.3);padding:6px 8px;border-radius:4px">${esc(f.fix || "Sin fix disponible")}</code>
          </div>`).join("")}
      </div>
    ` : ""}
  `;
  out.appendChild(d);

  Events.emit("log:add", { type:"info", msg:"→ ostp validate · " + totalOk + " ok · " + totalWarns + " warn · " + totalErrors + " err" });

  if (totalErrors > 0) {
    const first = findings.find(f => f.severity === "error" || f.severity === "critical");
    if (first) {
      Events.emit("modal:error", {
        title: "⚠ " + totalErrors + " error(es) detectado(s)",
        body: first.name,
        fix: first.fix
      });
    }
  }
}

function checkVersions(findings) {
  const res = [];
  const toml   = findFile("libs.versions.toml");
  const gradle = findFileByPath(/\/app\/build\.gradle\.kts$/);

  const checks = [
    { name:"Kotlin",  regex:/kotlin\s*=\s*"([^"]+)"/, src:toml,   expected:["2.0.21","2.2.0"] },
    { name:"AGP",     regex:/agp\s*=\s*"([^"]+)"/,    src:toml,   expected:["8.7.3","8.13.2"] },
    { name:"KSP",     regex:/ksp.*version.*"([^"]+)"/, src:gradle, matchKotlin:true },
    { name:"Room",    regex:/room[^:]*:([0-9.]+)/,     src:gradle, expected:["2.6.1","2.7.0"] },
    { name:"JVM",     regex:/jvmTarget.*JVM_(\d+)|jvmTarget\s*=\s*"(\d+)"/, src:gradle, expected:["17","JVM_17"] },
  ];

  for (const c of checks) {
    const m = c.src?.content?.match(c.regex);
    const val = m ? (m[1] || m[2]) : null;

    if (!val) {
      res.push({ name:c.name, value:null, severity:"err", badge:"NOT FOUND" });
      findings.push({ name:c.name + " no encontrada", severity:"error", fix:"Declarar " + c.name.toLowerCase() + " en " + (c.src?.name || "build.gradle.kts") });
      continue;
    }

    let ok = false;
    if (c.matchKotlin) {
      const kotlinM = toml?.content?.match(/kotlin\s*=\s*"([^"]+)"/);
      const kotlinV = kotlinM?.[1];
      ok = kotlinV && val.startsWith(kotlinV);
    } else if (c.expected) {
      ok = c.expected.some(e => val === e || val.startsWith(e.replace("JVM_","")));
    }

    res.push({
      name: c.name,
      value: val,
      severity: ok ? "ok" : "warn",
      badge: ok ? "OK" : "CHECK"
    });

    if (!ok) {
      findings.push({
        name: c.name + " " + val + " — versión no reconocida",
        severity: "warn",
        fix: "Usar una de: " + ((c.expected||[]).join(", ") || "versión compatible con Kotlin")
      });
    }
  }
  return res;
}

function checkAnnotationProcessor(findings) {
  const res = [];
  const gradle = findFileByPath(/\/app\/build\.gradle\.kts$/);
  if (!gradle?.content) {
    res.push({ name:"app/build.gradle.kts", severity:"warn", badge:"NO FOUND", detail:"No se encontró el archivo" });
    return res;
  }

  const hasKapt = /kapt\s*\(/.test(gradle.content);
  const hasKsp  = /com\.google\.devtools\.ksp/.test(gradle.content);
  const toml    = findFile("libs.versions.toml");
  const kotlinM = toml?.content?.match(/kotlin\s*=\s*"([^"]+)"/);
  const kotlinV = kotlinM?.[1];
  const isKotlin2 = kotlinV && kotlinV.startsWith("2.");

  if (hasKapt && isKotlin2) {
    res.push({
      name: "kapt con Kotlin 2.x",
      severity: "err",
      badge: "ERROR",
      detail: "kapt no soporta Kotlin 2.0+"
    });
    findings.push({
      name: "kapt incompatible con Kotlin 2.x",
      severity: "error",
      fix: "Reemplazar kapt(\"androidx.room:room-compiler:x\") por ksp(\"androidx.room:room-compiler:x\")"
    });
  } else if (hasKapt) {
    res.push({
      name: "kapt activo (Kotlin 1.x)",
      severity: "warn",
      badge: "DEPRECATED",
      detail: "Funciona pero se recomienda migrar a KSP"
    });
  }

  if (hasKsp) {
    res.push({
      name: "KSP configurado",
      severity: "ok",
      badge: "OK",
      detail: "com.google.devtools.ksp activo"
    });
  } else if (!hasKapt) {
    res.push({
      name: "Sin annotation processor",
      severity: "warn",
      badge: "CHECK",
      detail: "No se detectó kapt ni ksp"
    });
  }

  return res;
}

function checkNavIds(findings) {
  const nav  = findFile("nav_graph.xml");
  const menu = State.idx.find(i => /bottom_nav.*\.xml$/.test(i.name));

  if (!nav?.content && !menu?.content) return [];

  const navIds  = nav?.content  ? [...nav.content.matchAll(/android:id="@\+id\/([^"]+)"/g)].map(m => m[1]) : [];
  const menuIds = menu?.content ? [...menu.content.matchAll(/android:id="@\+id\/([^"]+)"/g)].map(m => m[1]) : [];

  const all = new Set([...navIds, ...menuIds]);
  const res = [];

  all.forEach(id => {
    const inNav  = navIds.includes(id);
    const inMenu = menuIds.includes(id);
    res.push({ id, inNav, inMenu });

    if (!inNav || !inMenu) {
      findings.push({
        name: "ID \"" + id + "\" no está en " + (!inNav ? "nav_graph" : "bottom_nav_menu"),
        severity: "error",
        fix: "Alinear IDs: si menu tiene " + id + ", nav_graph también debe tenerlo (y viceversa)"
      });
    }
  });

  if (nav?.content) {
    const startM = nav.content.match(/app:startDestination="@id\/([^"]+)"/);
    if (startM) {
      const startId = startM[1];
      if (!navIds.includes(startId)) {
        findings.push({
          name: "startDestination \"" + startId + "\" no existe en nav_graph",
          severity: "error",
          fix: "El ID referenciado en startDestination debe existir como fragment en nav_graph.xml"
        });
      }
    }
  }

  return res;
}

function checkManifest(findings) {
  const res = [];
  const manifest = findFile("AndroidManifest.xml");
  if (!manifest?.content) {
    res.push({ name:"AndroidManifest.xml", severity:"warn", badge:"NO FOUND" });
    return res;
  }

  const actMatches = [...manifest.content.matchAll(/android:name="\.([^\"]+)"/g)];
  for (const m of actMatches) {
    const actName = m[1];
    const ktFile = State.idx.find(i => i.name === actName + ".kt");
    if (!ktFile) {
      res.push({
        name: "Activity \"" + actName + "\"",
        severity: "err",
        badge: "MISMATCH",
        detail: "No se encontró " + actName + ".kt"
      });
      findings.push({
        name: "android:name=\".\" + actName + \"\" no coincide con ningún .kt",
        severity: "error",
        fix: "Verificar que exista el archivo " + actName + ".kt (respeta mayúsculas/minúsculas)"
      });
    } else {
      res.push({
        name: "Activity \"" + actName + "\"",
        severity: "ok",
        badge: "OK",
        detail: actName + ".kt encontrado"
      });
    }
  }

  if (/android\.intent\.action\.MAIN/.test(manifest.content)) {
    const launcherRegex = /<activity[^>]*>[\s\S]*?android\.intent\.action\.MAIN[\s\S]*?<\/activity>/g;
    const launcherActs = [...manifest.content.matchAll(launcherRegex)];
    for (const act of launcherActs) {
      if (!/android:exported\s*=\s*"true"/.test(act[0])) {
        const nameM = act[0].match(/android:name="\.([^"]+)"/);
        const name = nameM?.[1] || "launcher";
        res.push({
          name: "Activity \"" + name + "\" (launcher)",
          severity: "err",
          badge: "NO EXPORTED",
          detail: "Falta android:exported=\"true\""
        });
        findings.push({
          name: "Activity launcher \"" + name + "\" sin android:exported",
          severity: "error",
          fix: "Agregar android:exported=\"true\" a la activity con intent-filter MAIN/LAUNCHER"
        });
      }
    }
  }

  if (res.length === 0) {
    res.push({ name:"AndroidManifest", severity:"ok", badge:"OK" });
  }

  return res;
}

function checkSecurity(findings) {
  const res = [];
  const patterns = ["password","secret","api_key","apikey","token","credentials"];

  for (const item of State.idx) {
    const n = item.name.toLowerCase();
    for (const p of patterns) {
      if (n.includes(p)) {
        res.push({
          icon: "🔑",
          name: item.name,
          severity: "crit",
          badge: "CRITICAL",
          detail: "Contiene \"" + p + "\" en el nombre"
        });
        findings.push({
          name: "Archivo sensible: " + item.name,
          severity: "critical",
          fix: "Mover a local.properties o variables de entorno. Agregar al .gitignore"
        });
        break;
      }
    }
  }

  const envFiles = State.idx.filter(i => i.name.endsWith(".env") || i.name === ".env");
  for (const ef of envFiles) {
    res.push({
      icon: "🔑",
      name: ef.name,
      severity: "crit",
      badge: "CRITICAL",
      detail: "Archivo .env detectado"
    });
  }

  const gitignore = findFile(".gitignore");
  if (gitignore?.content) {
    if (!/local\.properties/.test(gitignore.content)) {
      res.push({
        icon: "⚠️",
        name: ".gitignore",
        severity: "warn",
        badge: "MISSING",
        detail: "No incluye local.properties"
      });
      findings.push({
        name: "local.properties no está en .gitignore",
        severity: "warn",
        fix: "Agregar \"local.properties\" al .gitignore para no exponer sdk.dir"
      });
    } else {
      res.push({
        icon: "✓",
        name: ".gitignore",
        severity: "ok",
        badge: "OK",
        detail: "Incluye local.properties"
      });
    }
  }

  return res;
}