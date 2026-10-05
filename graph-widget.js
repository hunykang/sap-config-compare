/* 지식그래프 공용 위젯 — index.html(미리보기) + graph.html(전체)에서 사용
 * data.js의 GUIDE_DATA / GRAPH_CONCEPTS / GRAPH_LINKS를 읽어 force-directed 그래프를 그린다.
 * initGraph(canvasId, opts)
 *   opts.height: 캔버스 높이(px, 기본 520)
 *   opts.onSelect: 노드 클릭 시 호출. function(node | null). node.ref = {kind:'entry',entry} | {kind:'concept'}
 *   opts.ticks: 초기 안정화 tick 수 (기본 120)
 */
function initGraph(canvasId, opts) {
  opts = opts || {};
  const HEIGHT = opts.height || 520;
  const onSelect = opts.onSelect || function () {};
  const TYPE_COLOR = { master: '#0b5fff', concept: '#7c3aed', table: '#b45309', app: '#0a7a42', entry: '#475569' };

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
  GRAPH_LINKS.forEach(l => edges.push({ a: l.from, b: l.to, label: l.label }));
  GUIDE_DATA.forEach(e => {
    (e.related || []).forEach(r => {
      if (nodeById['e-' + r]) edges.push({ a: 'e-' + e.id, b: 'e-' + r, label: '연관' });
    });
    const tags = e.tags.join(' ') + ' ' + e.area;
    const link = (cid) => edges.push({ a: 'e-' + e.id, b: cid, label: '관련' });
    if (/BP/.test(tags)) link('c-bp');
    if (/BP/.test(tags) && /전환/.test(tags)) link('c-cvi');
    if (/G\/L|전표|테이블/.test(tags)) link('c-acdoca');
    if (/자산/.test(tags)) link('c-newaa');
    if (/자재원장/.test(tags)) link('c-ml');
    if (/Fiori/.test(tags)) link('c-fiori');
    if (/결산/.test(tags)) link('c-fcc');
  });

  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = Math.min(2, window.devicePixelRatio || 1);
  function resize() {
    const r = canvas.getBoundingClientRect();
    W = Math.max(300, r.width); H = HEIGHT;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);

  let dragging = null, selected = null, hover = null;
  let ox = 0, oy = 0, scale = 1;
  function tick() {
    const cx = W / 2, cy = H / 2;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
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
      if (!a || !b) return;
      const dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 1;
      const f = (d - 130) * 0.012;
      const fx = dx / d * f, fy = dy / d * f;
      a.vx += fx; a.vy += fy; b.vx -= fx; b.vy -= fy;
    });
    nodes.forEach(n => {
      if (n === dragging) return;
      n.vx += (cx - n.x) * 0.004;
      n.vy += (cy - n.y) * 0.004;
      n.vx *= 0.82; n.vy *= 0.82;
      n.x += n.vx; n.y += n.vy;
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.translate(ox, oy); ctx.scale(scale, scale);
    edges.forEach(e => {
      const a = nodeById[e.a], b = nodeById[e.b];
      if (!a || !b) return;
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
      const r = n.type === 'entry' ? 9 : 14;
      ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, 7);
      ctx.fillStyle = TYPE_COLOR[n.type] || '#475569';
      ctx.globalAlpha = (!selected || n === selected || edges.some(e =>
        (e.a === selected.id && e.b === n.id) || (e.b === selected.id && e.a === n.id))) ? 1 : 0.25;
      ctx.fill(); ctx.globalAlpha = 1;
      if (n === selected) { ctx.strokeStyle = '#0b5fff'; ctx.lineWidth = 3; ctx.stroke(); }
      if (n === hover) { ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2; ctx.stroke(); }
      ctx.fillStyle = '#1a1a1a'; ctx.font = (n.type === 'entry' ? 11 : 12) + 'px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(n.label, n.x, n.y + r + 14);
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
      const d = Math.hypot(n.x - p.x, n.y - p.y);
      if (d < 24 && d < bd) { bd = d; best = n; }
    });
    return best;
  }

  let downPos = null, moved = false;
  canvas.addEventListener('pointerdown', e => {
    const n = pick(e.clientX, e.clientY);
    downPos = { x: e.clientX, y: e.clientY }; moved = false;
    if (n) { dragging = n; canvas.setPointerCapture(e.pointerId); }
    canvas.style.cursor = 'grabbing';
  });
  canvas.addEventListener('pointermove', e => {
    if (downPos && Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) > 4) moved = true;
    if (dragging && moved) {
      const p = toWorld(e.clientX, e.clientY);
      dragging.x = p.x; dragging.y = p.y; dragging.vx = dragging.vy = 0;
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
      onSelect(n);
    }
    dragging = null; downPos = null;
  });
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    scale = Math.min(2.2, Math.max(0.5, scale * (e.deltaY < 0 ? 1.1 : 0.9)));
  }, { passive: false });

  resize();
  for (let i = 0; i < (opts.ticks || 120); i++) tick();
  loop();
  return { nodes, nodeById, edges };
}
