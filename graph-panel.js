/* 그래프 노드 클릭 → 사이드 패널 렌더링 공용 모듈
 * data.js(GUIDE_DATA) + graph-widget.js(initGraph 반환 {nodes, nodeById, edges})와 함께 사용.
 * initGraphPanel(g, panelEl, opts)
 *   opts.afterEntry: 항목 상세 뒤에 붙일 추가 HTML을 만드는 함수. function(entry) -> html
 * 반환: { onSelect } — initGraph의 onSelect에 그대로 넘기면 됨.
 * 패널 안의 [data-goto] 칩을 클릭하면 패널에서 바로 해당 항목으로 이동.
 */
function gpEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

const TERM_AREA_KO = { org: '조직구조', gl: 'G/L', ap: 'AP', ar: 'AR', bank: '은행', aa: '자산회계', tax: '세금', co: 'CO', xmod: '타모듈 연결', close: '결산' };
const TYPE_LABEL_FALLBACK = { entry: '설정', term: '용어', concept: '개념', master: '마스터', table: '테이블', app: '앱' };
function gpTypeLabel(g, n) {
  if (g && g.TYPE_LABEL && g.TYPE_LABEL[n.type]) return g.TYPE_LABEL[n.type];
  return TYPE_LABEL_FALLBACK[n.type] || n.type;
}

function gpDiffBadges(e) {
  const b = [];
  b.push(e.eccSame
    ? '<span class="diff-badge same">ECC와 동일</span>'
    : '<span class="diff-badge yes">ECC와 다름</span>');
  if (/확인 중/.test(e.pub)) b.push('<span class="diff-badge checking">Public 확인 중</span>');
  else if (/사용불가/.test(e.pub)) b.push('<span class="diff-badge nouse">Public 사용불가</span>');
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
  const slide = !!opts.slide;   // true면 오른쪽 슬라이딩 오버레이 패널
  const DEFAULT_HTML = panel.innerHTML;
  const afterEntry = opts.afterEntry || function () { return ''; };
  const closeBtnHTML = slide ? '<button class="panel-close" data-close aria-label="닫기">×</button>' : '';

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
    panel.innerHTML = closeBtnHTML + gpDetailHTML(e, relChips(gpNeighbors(g, 'e-' + id), id) + afterEntry(e));
    if (slide) panel.classList.add('open');
    else if (window.innerWidth <= 760) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showTerm(t) {
    const rel = gpNeighbors(g, 't-' + t.id);
    const terms = (t.terms || [])
      .map(tid => (typeof GLOSSARY !== 'undefined' ? GLOSSARY.find(x => x.id === tid) : null))
      .filter(Boolean);
    panel.innerHTML = closeBtnHTML + `
      <h3>${gpEsc(t.kr)}${t.en ? `<span style="font-size:13px;color:#666;font-weight:400"> · ${gpEsc(t.en)}</span>` : ''}</h3>
      <div style="font-size:12px;color:#666;margin-bottom:10px">용어 노드${t.area ? ' · ' + gpEsc(TERM_AREA_KO[t.area] || t.area) : ''}${t.abbr ? ' · 약어 ' + gpEsc(t.abbr) : ''}</div>
      <p>${gpEsc(t.desc)}</p>
      ${rel.length ? `<p style="margin-top:10px"><strong>관련 설정 항목</strong></p>
      <div class="rel-chips">${rel.slice(0, 20).map(id => {
          const e = GUIDE_DATA.find(x => x.id === id);
          return e ? `<button data-goto="${id}">${gpEsc(e.item)}</button>` : '';
        }).join('')}</div>` : ''}
      ${terms.length ? `<p style="margin-top:10px"><strong>관련 용어</strong></p>
      <div class="rel-chips">${terms.slice(0, 8).map(x => `<button data-goto-term="${x.id}">${gpEsc(x.kr)}</button>`).join('')}</div>` : ''}
      <p style="margin-top:12px;font-size:13px"><a href="glossary.html#${encodeURIComponent(t.id)}">📖 용어집에서 보기 →</a> · <a href="feedback.html">✏️ 오류 제보하기</a></p>`;
    if (slide) panel.classList.add('open');
    else if (window.innerWidth <= 760) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function onSelect(n) {
    if (!n) {
      if (slide) panel.classList.remove('open');
      else panel.innerHTML = DEFAULT_HTML;
      return;
    }
    if (n.ref.kind === 'entry') { showEntry(n.ref.entry.id); return; }
    if (n.ref.kind === 'term') { showTerm(n.ref.term); return; }
    const rel = gpNeighbors(g, n.id);
    panel.innerHTML = closeBtnHTML + `
      <h3>${gpEsc(n.label)}</h3>
      <div style="font-size:12px;color:#666;margin-bottom:10px">${gpEsc(gpTypeLabel(g, n))} 노드 · 연결 ${rel.length}개</div>
      <p><strong>연결된 설정 항목</strong></p>
      ${rel.length
        ? `<div class="rel-chips">${rel.slice(0, 20).map(id => {
            const e = GUIDE_DATA.find(x => x.id === id);
            return e ? `<button data-goto="${id}">${gpEsc(e.item)}</button>` : '';
          }).join('')}</div>`
        : '<p style="font-size:13px;color:#888">연결된 항목이 없습니다.</p>'}`;
    if (slide) panel.classList.add('open');
    else if (window.innerWidth <= 760) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function close() { panel.classList.remove('open'); }

  panel.addEventListener('click', ev => {
    if (ev.target.closest('[data-close]')) { close(); return; }
    const gt = ev.target.closest('[data-goto-term]');
    if (gt && typeof GLOSSARY !== 'undefined') {
      const t = GLOSSARY.find(x => x.id === gt.dataset.gotoTerm);
      if (t) showTerm(t);
      return;
    }
    const b = ev.target.closest('[data-goto]');
    if (b) showEntry(b.dataset.goto);
  });

  return { onSelect, showEntry, close };
}
