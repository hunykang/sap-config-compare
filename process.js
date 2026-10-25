// process.html 전용 렌더링 (Bible Graph '역사순' 방식: 축 위에 노드 배치 + 클릭 시 상세 패널)
// 기본 화면: 겹쳐보기 + 전 레이어 ON (2026-10-24 사용자 결정)
(function () {
  function esc(x) { return String(x == null ? "" : x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function gUrl(q) { return "https://www.google.com/search?q=" + encodeURIComponent(q); }
  function whyLink(q, cls) { return '<a class="' + (cls || "why-link") + '" href="' + gUrl(q) + '" target="_blank" rel="noopener" title="왜 필요한지 구글 검색">why?</a>'; }
  function tcodeAnchor(c) { return "u-" + String(c).replace(/[^A-Za-z0-9_-]/g, "-"); }
  function cfgName(id) { var x = (typeof GUIDE_DATA !== "undefined") ? GUIDE_DATA.find(function (v) { return v.id === id; }) : null; return x ? (x.item || x.title_kr || id) : id; }
  function termName(id) { var x = (typeof GLOSSARY !== "undefined") ? GLOSSARY.find(function (v) { return v.id === id; }) : null; return x ? (x.kr || id) : id; }
  function umEntry(code) {
    if (typeof USERMENU_DATA === "undefined") return null;
    var hit = null;
    USERMENU_DATA.forEach(function (e) {
      var list = (e.tcodes && e.tcodes.length ? e.tcodes : [{ c: e.tcode }]);
      list.forEach(function (t) { if (t.c === code) hit = e; });
    });
    return hit;
  }
  function sketchMatches(n) {
    if (typeof SKETCHES === "undefined") return [];
    return SKETCHES.filter(function (s) {
      var c = (s.configs || []).some(function (id) { return (n.config || []).indexOf(id) >= 0; });
      var t = (s.terms || []).some(function (id) { return (n.terms || []).indexOf(id) >= 0; });
      return c || t;
    });
  }
  function byId(id) { return PROCESS_NODES.find(function (n) { return n.id === id; }); }
  function laneName(k) { var L = PROCESS_LANES.find(function (x) { return x[0] === k; }); return L ? L[1] : k; }
  function nodesAt(lane, step) { return PROCESS_NODES.filter(function (n) { return n.lane === lane && n.step === step; }); }

  var DEF = { mode: "overlay", layers: { L1: true, L2: true, MC: true, L3: true, L4: true }, sel: null, q: "" };
  function mergeState(s) { return { mode: s.mode || DEF.mode, layers: Object.assign({}, DEF.layers, s.layers || {}), sel: s.sel || null, q: s.q || "" }; }
  function loadState() {
    // 위젯 환경에서는 백엔드 브리지 상태를, 일반 웹에서는 해시(#p-노드)만 사용한다.
    // 뒤로가기는 브라우저 해시 이력 + hashchange로 복원한다.
    try {
      if (window.hatchWidget && window.hatchWidget.getState) {
        var s = window.hatchWidget.getState(DEF);
        if (s && s.layers) return mergeState(s);
      }
    } catch (e) {}
    return DEF;
  }
  var st = loadState();
  function saveState() {
    try {
      if (window.hatchWidget && window.hatchWidget.setState) { window.hatchWidget.setState(st); }
    } catch (e) {}
  }
  function histSnap() { return { mode: st.mode, layers: Object.assign({}, st.layers), sel: st.sel, q: st.q }; }
  function syncHistory() { try { history.replaceState(histSnap(), ""); } catch (e) {} }

  function matchesQ(n) {
    if (!st.q) return true;
    var q = st.q.toLowerCase();
    var hayArr = [n.name, n.en, n.posting, n.desc].concat(n.subs, n.tcodes);
    if (n.subFi) { Object.keys(n.subFi).forEach(function (k) { hayArr.push(n.subFi[k]); }); }
    var hay = hayArr.join(" ").toLowerCase();
    return hay.indexOf(q) >= 0;
  }
  function badges(n) {
    var h = "";
    if (st.layers.MC && n.mc === 2) h += '<span class="badge">MC</span>';
    if (st.layers.MC && n.mc === 1) h += '<span class="badge link">MC 연계</span>';
    if (st.layers.MC && n.cbo) h += '<span class="badge cbo">CBO개발</span>';
    if (st.layers.L4) { var m = sketchMatches(n); if (m.length) h += '<span class="badge issue">Ep. ' + m.length + "건</span>"; }
    return h ? '<div class="badges">' + h + "</div>" : "";
  }
  function tcodeChips(n) {
    if (!st.layers.L3 || !n.tcodes.length) return "";
    return '<div class="tchips">' + n.tcodes.map(function (t) {
      return '<a class="tchip" href="usermenu.html#' + tcodeAnchor(t) + '" title="UserMenu에서 ' + esc(t) + ' 설명 보기">' + esc(t) + "</a>";
    }).join("") + "</div>";
  }
  function nodeHTML(n, overlay) {
    var dim = (overlay && st.layers.MC && n.mc === 0) || !matchesQ(n);
    var h = '<div class="node ' + (n.main ? "main" : "sub") + (st.sel === n.id ? " sel" : "") + (dim ? " dim" : "") + '" data-id="' + n.id + '" role="button" tabindex="0">';
    h += (n.main ? "◆ " : "") + esc(n.name);
    if (n.posting) h += '<span class="post">' + esc(n.posting) + "</span>";
    if (overlay) {
      if (st.layers.L2 && n.subs.length) h += '<ul class="sublist">' + n.subs.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>";
      h += tcodeChips(n);
      h += badges(n);
    }
    h += "</div>";
    return h;
  }
  function gridHTML(cellFn) {
    var h = '<div class="scrollx"><div class="map">';
    h += '<div class="hd">레인 ＼ 흐름</div>' + PROCESS_STEPS.map(function (s) { return '<div class="hd">' + s + "</div>"; }).join("");
    PROCESS_LANES.forEach(function (L) {
      h += '<div class="lane">' + L[1] + "</div>";
      for (var s = 0; s < 6; s++) h += "<div>" + cellFn(L[0], s) + "</div>";
    });
    h += "</div></div>";
    return h;
  }
  function render() {
    document.querySelectorAll("#modeSeg button").forEach(function (b) { b.classList.toggle("on", b.dataset.mode === st.mode); });
    document.getElementById("layerBar").innerHTML = PROCESS_LAYERS.map(function (L) {
      var on = st.layers[L[0]];
      var dis = (st.mode === "overlay" && L[0] === "L1");
      return '<span class="lchip' + (on ? "" : " off") + '"><label title="' + (dis ? "겹쳐보기에서는 바탕 지도로 항상 표시됩니다" : "") + '"><input type="checkbox" data-layer="' + L[0] + '"' + (on ? " checked" : "") + (dis ? " disabled" : "") + "> " + L[1] + '</label><button class="solo" data-solo="' + L[0] + '">이것만</button></span>';
    }).join("");
    var maps = document.getElementById("maps"); var h = "";
    if (st.mode === "overlay") {
      h += gridHTML(function (lane, step) { return nodesAt(lane, step).map(function (n) { return nodeHTML(n, true); }).join(""); });
    } else {
      var titles = { L1: "L1 — 메가 프로세스 지도", L2: "L2 — 서브 프로세스 지도", MC: "Model Company — FI 중심 커버리지 지도", L3: "L3 — T-code 배치 지도", L4: "L4 — 프로젝트 이슈 (Ep.) 지도" };
      PROCESS_LAYERS.forEach(function (L) {
        if (!st.layers[L[0]]) return;
        h += '<div class="ptitle">' + titles[L[0]] + "</div>";
        if (L[0] === "L1") h += gridHTML(function (lane, step) { return nodesAt(lane, step).map(function (n) { return nodeHTML(n, false); }).join(""); });
        if (L[0] === "L2") {
          h += '<div class="pnote">서브 프로세스는 부모 프로세스의 좌표에 그대로 배치했습니다. (To-Be 목록 FI-01~07 구조를 일반화)</div>';
          h += gridHTML(function (lane, step) { return nodesAt(lane, step).map(function (n) { return '<div class="cellmini">' + esc(n.name) + "</div>" + n.subs.map(function (s) { return '<div class="subbox" data-id="' + n.id + '">' + esc(s) + "</div>"; }).join(""); }).join(""); });
        }
        if (L[0] === "MC") {
          h += '<div class="pnote">MC가 다루는 프로세스만 남긴 지도입니다. CO·구매자재·TR 시나리오는 FI와 닿는 지점만 연계로 표시합니다. CBO개발 배지는 해당 영역에 MC 전용 프로그램이 있었음을 뜻하며, 코드명은 표기하지 않습니다.</div>';
          h += gridHTML(function (lane, step) { return nodesAt(lane, step).filter(function (n) { return n.mc > 0; }).map(function (n) {
            var inner = nodeHTML(n, false);
            var b = '<div class="badges"><span class="badge' + (n.mc === 1 ? " link" : "") + '">' + (n.mc === 2 ? "MC" : "MC 연계") + "</span>" + (n.cbo ? '<span class="badge cbo">CBO개발</span>' : "") + "</div>";
            return inner.replace(/<\/div>$/, b + "</div>");
          }).join(""); });
        }
        if (L[0] === "L3") {
          h += '<div class="pnote">T-code가 어느 업무 절차에서 쓰이는지 배치한 지도입니다. 칩을 누르면 UserMenu 페이지의 해당 코드 설명으로 이동합니다.</div>';
          h += gridHTML(function (lane, step) { return nodesAt(lane, step).filter(function (n) { return n.tcodes.length; }).map(function (n) { return '<div class="cellmini">' + esc(n.name) + '</div><div class="tchips">' + n.tcodes.map(function (t) { return '<a class="tchip" href="usermenu.html#' + tcodeAnchor(t) + '">' + esc(t) + "</a>"; }).join("") + "</div>"; }).join(""); });
        }
        if (L[0] === "L4") {
          h += '<div class="pnote">현장 스케치 카드가 연결된 프로세스만 표시합니다. 카드를 누르면 해당 현장 스케치로 이동합니다.</div>';
          h += gridHTML(function (lane, step) { return nodesAt(lane, step).map(function (n) { var m = sketchMatches(n); if (!m.length) return ""; return '<div class="cellmini">' + esc(n.name) + "</div>" + m.map(function (s) { return '<a class="subbox" href="sketch.html#sk-' + esc(s.id) + '">' + esc(s.title) + "</a>"; }).join(""); }).join(""); });
        }
      });
    }
    maps.innerHTML = h;
    maps.querySelectorAll("[data-id]").forEach(function (el) {
      el.addEventListener("click", function () { select(el.dataset.id, true); });
      el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(el.dataset.id, true); } });
    });
    if (st.sel) showDetail(st.sel);
  }
  function select(id, pushHash) {
    st.sel = id; saveState(); render();
    if (pushHash) { try { history.pushState(histSnap(), "", "#p-" + id); } catch (e) {} }
    var d = document.getElementById("detail");
    if (d) d.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function backToNode() {
    if (!st.sel) return;
    var el = document.querySelector('[data-id="' + st.sel + '"]');
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("flash");
    setTimeout(function () { el.classList.remove("flash"); }, 1600);
  }
  function showDetail(id) {
    var n = byId(id); if (!n) return;
    var d = document.getElementById("detail");
    var h = "<h4>" + (n.main ? "◆ " : "") + esc(n.name) +
      ' <a class="item-link" href="' + gUrl("SAP " + n.name) + '" target="_blank" rel="noopener" title="구글 검색으로 열기"><i class="ext">↗</i></a> ' +
      whyLink("sap why " + n.name) +
      '<span class="en">' + esc(n.en || "") + "</span></h4>";
    h += '<div class="meta">' + laneName(n.lane) + " · " + PROCESS_STEPS[n.step] + " 단계" + (n.posting ? " · 전표: " + esc(n.posting) : "") + "</div>";
    h += "<p>" + esc(n.desc) + "</p>";
    if (n.subs.length) {
      var fi = n.subFi || {};
      h += '<div class="row"><b>L2 서브 — 요약 · FI 영향:</b></div><ul class="subfi-list">' + n.subs.map(function (s) {
        return "<li><b>" + esc(s) + "</b> " + whyLink("sap why " + s) + (fi[s] ? " — " + esc(fi[s]) : "") + "</li>";
      }).join("") + "</ul>";
    }
    if (n.mc > 0) h += '<div class="row"><b>Model Company:</b> ' + esc(n.mcNote) + (n.mc === 1 ? " (연계)" : "") + "</div>";
    if (n.ext && n.ext.length) h += '<div class="row"><b>외부 연계:</b> ' + n.ext.map(esc).join(" · ") + ' <a class="chip-link" href="integrations.html">외부 연계 설명 페이지</a></div>';
    if (n.cbo) h += '<div class="row"><b>CBO개발</b> — ' + (n.cboNote ? esc(n.cboNote) + ' ' : '') + '<span class="meta">(MC 전용 프로그램, 코드 미표기)</span></div>';
    if (n.tcodes.length) {
      h += '<div class="row"><b>T-code</b> <span class="meta">(클릭하면 UserMenu 설명으로 이동)</span></div><ul class="tc-list">';
      n.tcodes.forEach(function (t) {
        var e = umEntry(t);
        var name = e ? ((e.ko ? esc(e.ko) : "") + (e.en ? " <span class='meta'>" + esc(e.en) + "</span>" : "")) : "";
        var why = e && e.why ? "<br><span class='u-why'>" + esc(e.why) + "</span>" : "";
        h += "<li><a class='tchip big' href='usermenu.html#" + tcodeAnchor(t) + "'>" + esc(t) + "</a> " + name +
          ' <a class="item-link" href="' + gUrl("sap " + t) + '" target="_blank" rel="noopener" title="구글 검색으로 열기"><i class="ext">↗</i></a> ' +
          whyLink("sap why " + t) + why + "</li>";
      });
      h += "</ul>";
    }
    var linkRows = "";
    if (n.config.length) linkRows += '<div class="row"><b>관련 설정</b> ' + n.config.map(function (id) { return '<a class="chip-link" href="compare.html#row-' + esc(id) + '">' + esc(cfgName(id)) + "</a>"; }).join(" ") + "</div>";
    if (n.terms.length) linkRows += '<div class="row"><b>관련 용어</b> ' + n.terms.map(function (id) { return '<a class="chip-link" href="glossary.html#term-' + esc(id) + '">' + esc(termName(id)) + "</a>"; }).join(" ") + "</div>";
    if (n.tables.length) linkRows += '<div class="row"><b>관련 테이블</b> ' + n.tables.map(function (t) {
      var onPage = (typeof TABLE_ROWS !== "undefined") && TABLE_ROWS.some(function (r) { return r.table && r.table.split(" ")[0].replace(/\//g, "-") === t; });
      return onPage
        ? '<a class="chip-link" href="table.html#t-' + esc(t) + '">' + esc(t) + '</a>'
        : '<a class="chip-link" href="' + gUrl("SAP table " + t) + '" target="_blank" rel="noopener">' + esc(t) + " ↗</a>";
    }).join(" ") + "</div>";
    var m = sketchMatches(n);
    if (m.length) linkRows += '<div class="row"><b>현장 스케치</b> ' + m.map(function (s) { return '<a class="chip-link" href="sketch.html#sk-' + esc(s.id) + '">' + esc(s.title) + "</a>"; }).join(" ") + "</div>";
    if (linkRows) h += linkRows;
    h += '<div class="row" style="margin-top:8px"><a href="compare.html">비교표(SPRO)</a> · <a href="glossary.html">용어집</a> · <a href="usermenu.html">UserMenu</a> · <a href="table.html">Table</a> · <a href="sketch.html">현장 스케치</a> · <a href="autoposting.html">Auto-posting</a></div>';
    h += '<div style="margin-top:10px"><button class="backbtn" data-back="1">↑ 지도로 돌아가기</button></div>';
    d.innerHTML = h;
  }
  document.querySelectorAll("#modeSeg button").forEach(function (b) { b.addEventListener("click", function () { st.mode = b.dataset.mode; if (st.mode === "overlay") st.layers.L1 = true; saveState(); render(); syncHistory(); }); });
  document.addEventListener("change", function (e) {
    if (e.target && e.target.dataset && e.target.dataset.layer) { st.layers[e.target.dataset.layer] = e.target.checked; if (st.mode === "overlay") st.layers.L1 = true; saveState(); render(); syncHistory(); }
  });
  document.addEventListener("click", function (e) {
    if (e.target && e.target.dataset && e.target.dataset.back) { backToNode(); return; }
    if (e.target && e.target.dataset && e.target.dataset.solo) {
      var k = e.target.dataset.solo;
      PROCESS_LAYERS.forEach(function (L) { st.layers[L[0]] = false; });
      st.layers[k] = true;
      if (st.mode === "overlay") st.layers.L1 = true; // 겹쳐보기에서는 L1이 바탕 지도
      saveState(); render(); syncHistory();
    }
  });
  var qEl = document.getElementById("pq");
  if (qEl) { qEl.value = st.q; qEl.addEventListener("input", function () { st.q = qEl.value.trim(); saveState(); render(); syncHistory(); }); }
  window.addEventListener("popstate", function (ev) {
    if (ev.state) { st = mergeState(ev.state); var q = document.getElementById("pq"); if (q) q.value = st.q; saveState(); render(); }
  });
  window.addEventListener("hashchange", function () {
    if (location.hash.indexOf("#p-") === 0) { st.sel = location.hash.slice(3); saveState(); render(); }
  });
  window.addEventListener("hatch-widget-state", function (ev) {
    if (ev && ev.detail && ev.detail.state) { st = mergeState(ev.detail.state); render(); }
  });
  // 딥링크 #p-<nodeId> 로 들어오면 해당 노드 선택
  if (location.hash.indexOf("#p-") === 0) { var nid = location.hash.slice(3); if (byId(nid)) st.sel = nid; }
  render();
  syncHistory();
})();
