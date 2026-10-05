/* 그래프 노드 클릭 → 사이드 패널 렌더링 공용 모듈
 * data.js(GUIDE_DATA) + graph-widget.js(initGraph 반환 {nodes, nodeById, edges})와 함께 사용.
 * initGraphPanel(g, panelEl, opts)
 *   opts.afterEntry: 항목 상세 뒤에 붙일 추가 HTML을 만드는 함수. function(entry) -> html
 * 반환: { onSelect } — initGraph의 onSelect에 그대로 넘기면 됨.
 * 패널 안의 [data-goto] 칩을 클릭하면 패널에서 바로 해당 항목으로 이동.
 */
function gpEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

function gpDiffBadges(e) {
  const b = [];
  b.push(e.eccSame
    ? '<span class="diff-badge same">ECC와 동일</span>'
    : '<span class="diff-badge yes">ECC와 다름</span>');
  if (/확인 중/.test(e.pub)) b.push('<span class="diff-badge checking">Public 확인 중</span>');
  else if (e.pub === e.pce) b.push('<span class="diff-badge same">Public 동일</span>');
  else b.push('<span class="diff-badge yes">Public 다름</span>');
  return b.join('');
}

function gpDetailHTML(e, extra) {
  return `
    <h3>${gpEsc(e.item)}</h3>
    <div style="font-size:12px;color:#666;margin-bottom:10px">${gpEsc(e.area)} · ${e.tags.map(t => `<a href="compare.html?q=${encodeURIComponent(t)}">${gpEsc(t)}</a>`).join(', ')}</div>
    <div style="margin-bottom:10px">${gpDiffBadges(e)}</div>
    <p><span class="badge pce">PCE 기준</span><br>${gpEsc(e.pce)}</p>
    <p><span class="badge ecc">ECC</span><br>${gpEsc(e.ecc)}</p>
    <p><span class="badge pub">Public</span><br>${gpEsc(e.pub).replace(/확인 중/g, '<span class="checking">확인 중</span>')}</p>
    <p style="margin-top:10px"><strong>달라지는 부분</strong><br>${gpEsc(e.diff)}</p>
    ${e.help.length ? `<p class="src">${e.help.map(u => `<a href="${u}" target="_blank" rel="noopener">SAP 공식 문서 ↗</a>`).join('<br>')}</p>` : ''}
    ${extra || ''}
    <p style="margin-top:12px;font-size:13px"><a href="#${e.id}" onclick="gpCopyLink('${e.id}');return false;">🔗 이 항목 링크 복사</a> · <a href="feedback.html">✏️ 오류 제보하기</a></p>`;
}

function gpCopyLink(id) {
  const url = location.origin + location.pathname.replace(/[^/]*$/, '') + 'index.html#' + id;
  (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject())
    .then(() => alert('링크가 복사되었습니다.'))
    .catch(() => prompt('아래 링크를 복사하세요:', url));
}

function gpNeighbors(g, nodeId) {
  const entries = [];
  g.edges.forEach(e => {
    const other = e.a === nodeId ? e.b : (e.b === nodeId ? e.a : null);
    if (!other) return;
    const n = g.nodeById[other];
    if (n && n.ref.kind === 'entry') entries.push(n.ref.entry.id);
  });
  return [...new Set(entries)];
}

function initGraphPanel(g, panel, opts) {
  opts = opts || {};
  const DEFAULT_HTML = panel.innerHTML;
  const afterEntry = opts.afterEntry || function () { return ''; };

  function relChips(ids, selfId) {
    const list = ids.filter(id => id !== selfId).slice(0, 8);
    if (!list.length) return '';
    return `<p style="margin-top:10px"><strong>관련 항목</strong></p>
      <div class="rel-chips">${list.map(id => {
        const r = GUIDE_DATA.find(x => x.id === id);
        return r ? `<button data-goto="${id}">${gpEsc(r.item)}</button>` : '';
      }).join('')}</div>`;
  }

  function showEntry(id) {
    const e = GUIDE_DATA.find(x => x.id === id);
    if (!e) return;
    panel.innerHTML = gpDetailHTML(e, relChips(gpNeighbors(g, 'e-' + id), id) + afterEntry(e));
    if (window.innerWidth <= 760) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function onSelect(n) {
    if (!n) { panel.innerHTML = DEFAULT_HTML; return; }
    if (n.ref.kind === 'entry') { showEntry(n.ref.entry.id); return; }
    const rel = gpNeighbors(g, n.id);
    panel.innerHTML = `
      <h3>${gpEsc(n.label)}</h3>
      <div style="font-size:12px;color:#666;margin-bottom:10px">개념 노드 · 연결 ${rel.length}개</div>
      <p><strong>연결된 설정 항목</strong></p>
      ${rel.length
        ? `<div class="rel-chips">${rel.slice(0, 20).map(id => {
            const e = GUIDE_DATA.find(x => x.id === id);
            return e ? `<button data-goto="${id}">${gpEsc(e.item)}</button>` : '';
          }).join('')}</div>`
        : '<p style="font-size:13px;color:#888">연결된 항목이 없습니다.</p>'}`;
    if (window.innerWidth <= 760) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  panel.addEventListener('click', ev => {
    const b = ev.target.closest('[data-goto]');
    if (b) showEntry(b.dataset.goto);
  });

  return { onSelect, showEntry };
}
