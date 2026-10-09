/* 지식그래프 공용 위젯 — index.html(미리보기) + graph.html(전체)에서 사용
 * data.js의 GUIDE_DATA / GRAPH_CONCEPTS / GRAPH_LINKS를 읽어 force-directed 그래프를 그린다.
 * initGraph(canvasId, opts)
 *   opts.height: 캔버스 높이(px, 기본 520)
 *   opts.onSelect: 노드 클릭 시 호출. function(node | null). node.ref = {kind:'entry',entry} | {kind:'term',term} | {kind:'concept'}
 *   opts.ticks: 초기 안정화 tick 수 (기본 120)
 */
function initGraph(canvasId, opts) {
  opts = opts || {};
  const HEIGHT = opts.height || 520;
  const onSelect = opts.onSelect || function () {};
  const TYPE_COLOR = { entry: '#86BC25', term: '#a3aec2', concept: '#9fb6bd', master: '#b5aea1', table: '#c0a98a', app: '#93b295' };
  const TYPE_LABEL = { entry: '설정', term: '용어', concept: '개념', master: '마스터', table: '테이블', app: '앱' };
  const TYPE_BASE_R = { entry: 7, term: 6, concept: 10, master: 10, table: 10, app: 10 };
  // 용어 area 코드 → 영역 필터 한글명
  const TERM_AREA_NAME = { org: '조직구조', gl: 'G/L', ap: 'AP', ar: 'AR', bank: '은행', aa: '자산회계', tax: '세금', co: 'CO', xmod: '타모듈 연결', close: '결산' };
  // 개념/마스터/테이블/앱 허브 노드와 용어를 잇는 키워드 (고아 용어 fallback용)
  const CONCEPT_KEYS = [
    ['c-acdoca', ['ACDOCA', 'acdoca', '유니버셜 저널']],
    ['c-bp', ['비즈니스 파트너', '비즈니스파트너', 'Business Partner']],
    ['c-cvi', ['CVI']],
    ['c-newaa', ['New AA', '신자산']],
    ['c-ml', ['Material Ledger', '자재원장']],
    ['c-fiori', ['Fiori', '피오리']],
    ['c-fcc', ['결산 콕핏', 'Financial Closing Cockpit', '결산콕핏']]
  ];
  const ORPHAN_HUB = { org: 'c-acdoca', gl: 'c-acdoca', ap: 'c-bp', ar: 'c-bp', bank: 'c-acdoca', aa: 'c-newaa', tax: 'c-acdoca', co: 'c-ml', xmod: 'c-ml', close: 'c-fcc' };

  const nodes = [];
  const nodeById = {};
  function addNode(id, label, type, ref) {
    if (nodeById[id]) return nodeById[id];
    const n = { id, label, type, ref, x: Math.random() * 600, y: Math.random() * 400, vx: 0, vy: 0 };
    nodes.push(n); nodeById[id] = n; return n;
  }
  GRAPH_CONCEPTS.forEach(c => addNode(c.id, c.label, c.type, { kind: 'concept' }));
  GUIDE_DATA.forEach(e => addNode('e-' + e.id, e.item, 'entry', { kind: 'entry', entry: e }));

  const edges = [];
  const edgeSeen = new Set();
  function pushEdge(a, b, label) {
    if (!nodeById[a] || !nodeById[b] || a === b) return false;
    const key = a < b ? a + '|' + b : b + '|' + a;
    if (edgeSeen.has(key)) return false;
    edgeSeen.add(key);
    edges.push({ a, b, label });
    return true;
  }
  GRAPH_LINKS.forEach(l => pushEdge(l.from, l.to, l.label));
  GUIDE_DATA.forEach(e => {
    (e.related || []).forEach(r => {
      if (nodeById['e-' + r]) pushEdge('e-' + e.id, 'e-' + r, '연관');
    });
    const tags = e.tags.join(' ') + ' ' + e.area;
    const link = (cid) => pushEdge('e-' + e.id, cid, '관련');
    if (/BP/.test(tags)) link('c-bp');
    if (/BP/.test(tags) && /전환/.test(tags)) link('c-cvi');
    if (/G\/L|전표|테이블/.test(tags)) link('c-acdoca');
    if (/자산/.test(tags)) link('c-newaa');
    if (/자재원장/.test(tags)) link('c-ml');
    if (/Fiori/.test(tags)) link('c-fiori');
    if (/결산/.test(tags)) link('c-fcc');
  });

  // ---- 용어 노드 (glossary.js, type='term') ----
  const MAX_TERM_EDGES = 6;
  if (typeof GLOSSARY !== 'undefined' && GLOSSARY) {
    GLOSSARY.forEach(t => addNode('t-' + t.id, t.kr, 'term', { kind: 'term', term: t }));
    GLOSSARY.forEach(t => {
      const tid = 't-' + t.id;
      let cnt = 0;
      // 용어 → 관련 설정
      (t.items || []).forEach(iid => {
        if (cnt >= MAX_TERM_EDGES) return;
        if (pushEdge(tid, 'e-' + iid, '설정')) cnt++;
      });
      // 용어 ↔ 용어
      (t.terms || []).forEach(tid2 => {
        if (cnt >= MAX_TERM_EDGES) return;
        if (pushEdge(tid, 't-' + tid2, '연관')) cnt++;
      });
      // 용어 → 허브 노드(개념/마스터/테이블/앱) 키워드 매칭
      if (cnt < MAX_TERM_EDGES) {
        const hay = ((t.kr || '') + ' ' + (t.en || '') + ' ' + (t.abbr || '') + ' ' + (t.desc || '')).toLowerCase();
        for (const [cid, keys] of CONCEPT_KEYS) {
          if (cnt >= MAX_TERM_EDGES) break;
          if (keys.some(k => hay.indexOf(k.toLowerCase()) >= 0)) {
            if (pushEdge(tid, cid, '관련')) cnt++;
          }
        }
      }
    });
    // 고아 용어(엣지 0개) → 영역 허브에 최소 1개 연결
    const _deg = {};
    edges.forEach(e => { _deg[e.a] = (_deg[e.a] || 0) + 1; _deg[e.b] = (_deg[e.b] || 0) + 1; });
    GLOSSARY.forEach(t => {
      const tid = 't-' + t.id;
      if (!_deg[tid]) {
        const hub = ORPHAN_HUB[t.area];
        if (hub) pushEdge(tid, hub, '관련');
      }
    });
  }

  // ---- 필터 / 포커스 / 검색 ----
  const adj = {};
  function buildAdj() {
    nodes.forEach(n => adj[n.id] = new Set());
    edges.forEach(e => {
      if (nodeById[e.a] && nodeById[e.b]) { adj[e.a].add(e.b); adj[e.b].add(e.a); }
    });
  }
  buildAdj();
  // 노드 반지름: 연결 수(degree)에 비례 — 허브가 자연스럽게 커진다. r = base + sqrt(degree) * 2.2
  nodes.forEach(n => {
    n.degree = (adj[n.id] || new Set()).size;
    n.r = (TYPE_BASE_R[n.type] || 7) + Math.sqrt(n.degree) * 2.2;
  });
  const filter = { area: '', hiddenTypes: new Set(), focusOnly: false };
  function isNeighborOrSelf(n) {
    return !selected || n.id === selected.id || (adj[selected.id] && adj[selected.id].has(n.id));
  }
  function applyFilter() {
    nodes.forEach(n => {
      let hide = false;
      const isEntry = n.ref.kind === 'entry';
      if (isEntry && filter.area && n.ref.entry.area !== filter.area) hide = true;
      if (n.ref.kind === 'term' && filter.area && TERM_AREA_NAME[n.ref.term.area] !== filter.area) hide = true;
      if (filter.hiddenTypes.has(n.type)) hide = true;
      if (filter.focusOnly && !isNeighborOrSelf(n)) hide = true;
      n.hidden = hide;
      n.match = false;
    });
  }

  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = Math.min(2, window.devicePixelRatio || 1);  function resize() {
    const r = canvas.getBoundingClientRect();
    W = Math.max(300, r.width); H = HEIGHT;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);

  let dragging = null, selected = null, hover = null;
  let ox = 0, oy = 0, scale = 1;
  applyFilter();
  function tick() {
    const cx = (W / 2 - ox) / scale, cy = (H / 2 - oy) / scale;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (a.hidden || a.pinned) continue;
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        if (b.hidden || b.pinned) continue;
        let dx = a.x - b.x, dy = a.y - b.y;
        let d2 = dx * dx + dy * dy || 1;
        const f = Math.min(9000 / d2, 8);
        const d = Math.sqrt(d2);
        dx /= d; dy /= d;
        a.vx += dx * f; a.vy += dy * f;
        b.vx -= dx * f; b.vy -= dy * f;
      }
    }
    edges.forEach(e => {
      const a = nodeById[e.a], b = nodeById[e.b];
      if (!a || !b || a.hidden || b.hidden || (a.pinned && b.pinned)) return;
      const dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 1;
      const f = (d - 130) * 0.012;
      const fx = dx / d * f, fy = dy / d * f;
      if (!a.pinned) { a.vx += fx; a.vy += fy; }
      if (!b.pinned) { b.vx -= fx; b.vy -= fy; }
    });
    nodes.forEach(n => {
      if (n === dragging || n.hidden || n.pinned) return;
      n.vx += (cx - n.x) * 0.0004;
      n.vy += (cy - n.y) * 0.0004;
      n.vx *= 0.82; n.vy *= 0.82;
      n.x += n.vx; n.y += n.vy;
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.translate(ox, oy); ctx.scale(scale, scale);
    const tNow = performance.now() / 1000;
    // 살살 계속 움직이는 느낌: 고정되지 않은 노드에만 미세한 부유 효과 (물리 연산과 무관한 시각 효과)
    // 드래그 중인 노드는 부유를 멈춤 — 놓으면 다시 부유
    function floatOf(n) {
      if (n.hidden || n.pinned || n === dragging) return [0, 0];
      return [Math.sin(tNow * 0.8 + n.x * 0.05) * 5, Math.cos(tNow * 0.7 + n.y * 0.05) * 5];
    }
    edges.forEach(e => {
      const a = nodeById[e.a], b = nodeById[e.b];
      if (!a || !b || a.hidden || b.hidden) return;
      const hot = selected && (e.a === selected.id || e.b === selected.id);
      ctx.strokeStyle = hot ? '#0b5fff' : '#d7dce3';
      ctx.lineWidth = hot ? 2 : 1;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      if (e.label && hot) {
        ctx.fillStyle = '#666'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(e.label, (a.x + b.x) / 2, (a.y + b.y) / 2 - 4);
      }
    });
    nodes.forEach(n => {
      if (n.hidden) return;
      const [fx, fy] = floatOf(n);
      const px = n.x + fx, py = n.y + fy;
      const r = n.r || 9;
      ctx.beginPath(); ctx.arc(px, py, r, 0, 7);
      ctx.fillStyle = TYPE_COLOR[n.type] || '#475569';
      const isRel = !selected || n === selected || (adj[selected.id] && adj[selected.id].has(n.id));
      ctx.globalAlpha = isRel ? 1 : 0.25;
      ctx.fill(); ctx.globalAlpha = 1;
      if (n === selected) { ctx.strokeStyle = '#0b5fff'; ctx.lineWidth = 3; ctx.stroke(); }
      if (n === hover) { ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2; ctx.stroke(); }
      if (n.match) { ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 3; ctx.stroke(); }
      ctx.fillStyle = '#1a1a1a'; ctx.font = (n.type === 'entry' ? 11 : 12) + 'px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(n.label, px, py + r + 14);
    });
    ctx.restore();
  }

  function loop() { tick(); draw(); requestAnimationFrame(loop); }

  function toWorld(mx, my) {
    const r = canvas.getBoundingClientRect();
    return { x: (mx - r.left - ox) / scale, y: (my - r.top - oy) / scale };
  }
  function pick(mx, my) {
    const p = toWorld(mx, my);
    let best = null, bd = 1e9;
    nodes.forEach(n => {
      if (n.hidden) return;
      const d = Math.hypot(n.x - p.x, n.y - p.y);
      const grabR = (n.r || 9) + 14;
      if (d < grabR && d < bd) { bd = d; best = n; }
    });
    return best;
  }

  let downPos = null, moved = false, panStart = null;
  canvas.addEventListener('pointerdown', e => {
    const n = pick(e.clientX, e.clientY);
    downPos = { x: e.clientX, y: e.clientY }; moved = false;
    if (n) { dragging = n; }
    else { panStart = { x: e.clientX, y: e.clientY, ox, oy }; }
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = 'grabbing';
  });
  canvas.addEventListener('pointermove', e => {
    if (downPos && Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) > 4) moved = true;
    if (dragging && moved) {
      const p = toWorld(e.clientX, e.clientY);
      dragging.x = p.x; dragging.y = p.y; dragging.vx = dragging.vy = 0;
    } else if (!dragging && panStart) {
      ox = panStart.ox + (e.clientX - panStart.x);
      oy = panStart.oy + (e.clientY - panStart.y);
    } else if (!dragging) {
      hover = pick(e.clientX, e.clientY);
      canvas.style.cursor = hover ? 'pointer' : 'grab';
    }
  });
  canvas.addEventListener('pointerup', e => {
    canvas.style.cursor = 'grab';
    if (!moved) {
      const n = pick(e.clientX, e.clientY);
      selected = n;
      applyFilter();
      onSelect(n);
    } else if (dragging) {
      dragging.pinned = true;  // 드래그한 노드는 그 자리에 고정
    }
    dragging = null; downPos = null; panStart = null;
  });
  canvas.addEventListener('dblclick', e => {
    const n = pick(e.clientX, e.clientY);
    if (n) { n.pinned = false; }  // 더블클릭으로 고정 해제
  });
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    scale = Math.min(2.2, Math.max(0.5, scale * (e.deltaY < 0 ? 1.1 : 0.9)));
  }, { passive: false });

  resize();
  for (let i = 0; i < (opts.ticks || 120); i++) tick();
  loop();
  function selectNode(n) {
    selected = n || null;
    applyFilter();
    onSelect(selected);
  }
  function search(q) {
    q = (q || '').trim().toLowerCase();
    nodes.forEach(n => n.match = false);
    if (!q) return [];
    const hits = nodes.filter(n => !n.hidden && (n.label || '').toLowerCase().includes(q));
    hits.forEach(n => n.match = true);
    return hits;
  }
  return {
    nodes, nodeById, edges, TYPE_COLOR, TYPE_LABEL,
    setArea(a) { filter.area = a || ''; applyFilter(); },
    setTypeVisible(type, v) { if (v) filter.hiddenTypes.delete(type); else filter.hiddenTypes.add(type); applyFilter(); },
    setFocusOnly(v) { filter.focusOnly = !!v; applyFilter(); },
    clearSelection() { selectNode(null); },
    unpinAll() { nodes.forEach(n => n.pinned = false); },
    search, selectNode,
    visibleCount() { return nodes.filter(n => !n.hidden).length; }
  };
}
