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

  // ---- 추가 허브 노드: 주요 테이블·앱(T-code)·마스터 (선별) ----
  const EXTRA_NODES = [
    // 테이블
    { id: 'tb-bkpf', label: 'BKPF', type: 'table', ref: { kind: 'table', desc: '전표 헤더 테이블. 모든 회계 전표의 헤더가 쌓이며, S/4HANA에서는 ACDOCA와 함께 본다.', cds: 'I_JournalEntry', href: 'table.html#t-BKPF' } },
    { id: 'tb-bseg', label: 'BSEG', type: 'table', ref: { kind: 'table', desc: '전표 라인아이템 테이블. S/4HANA에서는 ACDOCA 기반 CDS 뷰로 대체 조회한다.', cds: 'I_JournalEntryItem', href: 'table.html#t-BSEG' } },
    { id: 'tb-matdoc', label: 'MATDOC', type: 'table', ref: { kind: 'table', desc: '자재 이동 통합 테이블. MKPF+MSEG를 하나로 합쳤고 합계는 조회 시 실시간 계산한다.', cds: 'I_MaterialDocumentItem_2', href: 'table.html#t-MATDOC' } },
    { id: 'tb-ska1', label: 'SKA1 · SKB1', type: 'table', ref: { kind: 'table', desc: 'G/L 계정 마스터 테이블. SKA1은 계정과목표 레벨, SKB1은 회사코드 레벨 속성을 담는다.', cds: 'I_GLAccount', href: 'table.html#t-SKA1' } },
    { id: 'tb-coep', label: 'COEP', type: 'table', ref: { kind: 'table', desc: 'CO 라인아이템(실적) 테이블. S/4HANA에서는 ACDOCA(Universal Journal)로 통합됐다.', cds: 'I_JournalEntryItem', href: 'table.html#t-COEP' } },
    // 앱 (T-code)
    { id: 'ap-f110', label: 'F110 자동지급', type: 'app', ref: { kind: 'app', desc: '자동지급 프로그램. 지급 제안부터 지급 실행까지 AP 지급을 한 번에 처리한다.', href: 'usermenu.html#u-F110' } },
    { id: 'ap-miro', label: 'MIRO 송장 검증', type: 'app', ref: { kind: 'app', desc: '구매 송장 검증. GR/IR 계정이 여기서 반제되기 시작한다.', href: 'usermenu.html#u-MIRO' } },
    { id: 'ap-migo', label: 'MIGO 자재 이동', type: 'app', ref: { kind: 'app', desc: '입고·출고·재고 이전 등 모든 자재 이동의 입구. 이동 유형이 회계 전표를 만든다.', href: 'usermenu.html#u-MIGO' } },
    { id: 'ap-fs00', label: 'FS00 G/L계정', type: 'app', ref: { kind: 'app', desc: 'G/L 계정 마스터 관리. 계정의 성격과 전기 규칙을 정한다.', href: 'usermenu.html#u-FS00' } },
    { id: 'ap-fbl3n', label: 'FBL3N 항목 조회', type: 'app', ref: { kind: 'app', desc: 'G/L 개별항목 조회. 전표 추적의 시작점.', href: 'usermenu.html#u-FBL3N' } },
    { id: 'ap-faglb03', label: 'FAGLB03 잔액 조회', type: 'app', ref: { kind: 'app', desc: '원장별 계정 잔액 조회. ACDOCA 기반 잔액을 원장 단위로 본다.', href: 'usermenu.html#u-FAGLB03' } },
    { id: 'ap-ks01', label: 'KS01 코스트센터', type: 'app', ref: { kind: 'app', desc: '코스트센터 마스터 관리. CO 배부와 리포트의 기준점.', href: 'usermenu.html#u-KS01' } },
    // 마스터
    { id: 'm-glacct', label: 'G/L 계정 마스터', type: 'master', ref: { kind: 'master', desc: '계정과목표와 회사코드 레벨로 관리되는 계정 마스터. 모든 전표 전기의 기준이다.' } },
    { id: 'm-customer', label: '고객 마스터', type: 'master', ref: { kind: 'master', desc: 'AR의 기준 마스터. S/4HANA에서는 BP(비즈니스 파트너)로 통합 관리한다.' } },
    { id: 'm-vendor', label: '공급업체 마스터', type: 'master', ref: { kind: 'master', desc: 'AP의 기준 마스터. 고객과 마찬가지로 BP로 통합 관리한다.' } },
    { id: 'm-material', label: '자재 마스터', type: 'master', ref: { kind: 'master', desc: 'MM의 기준 마스터. 평가 클래스와 이동 유형이 FI 자동전기를 결정한다.' } },
    { id: 'm-asset', label: '고정자산 마스터', type: 'master', ref: { kind: 'master', desc: '자산 클래스와 감가상각 키를 물고 있는 자산회계의 기준 마스터.' } },
    { id: 'm-costcenter', label: '코스트센터', type: 'master', ref: { kind: 'master', desc: 'CO의 기본 책임 단위. 비용이 모이고 배부되는 출발점이다.' } }
  ];
  EXTRA_NODES.forEach(n => addNode(n.id, n.label, n.type, n.ref));
  const EXTRA_EDGES = [
    ['tb-bkpf', 'c-acdoca', '통합'], ['tb-bkpf', 't-document', '관련'], ['tb-bkpf', 't-document-type', '관련'], ['tb-bkpf', 'e-gl-doc-type', '설정'],
    ['tb-bseg', 'c-acdoca', '통합'], ['tb-bseg', 't-line-item', '관련'], ['tb-bseg', 't-document', '관련'],
    ['tb-matdoc', 't-material-ledger', '관련'], ['tb-matdoc', 'ap-migo', '앱'], ['tb-matdoc', 'm-material', '마스터'],
    ['tb-ska1', 'm-glacct', '마스터'], ['tb-ska1', 't-gl-account', '관련'], ['tb-ska1', 'e-gl-coa', '설정'],
    ['tb-coep', 'c-acdoca', '통합'], ['tb-coep', 't-cost-element', '관련'], ['tb-coep', 't-cost-center', '관련'], ['tb-coep', 'e-co-celem', '설정'],
    ['ap-f110', 'e-ap-bank-determ', '설정'], ['ap-f110', 't-automatic-payment', '관련'],
    ['ap-miro', 'e-xmod-griradj', '설정'], ['ap-miro', 't-gr-ir', '관련'],
    ['ap-migo', 'e-xmod-obyc', '설정'],
    ['ap-fs00', 'm-glacct', '마스터'], ['ap-fs00', 't-gl-account', '관련'],
    ['ap-fbl3n', 'c-acdoca', '조회'], ['ap-fbl3n', 't-line-item', '관련'],
    ['ap-faglb03', 'c-acdoca', '조회'], ['ap-faglb03', 't-general-ledger', '관련'], ['ap-faglb03', 'e-gl-ledger', '설정'],
    ['ap-ks01', 'm-costcenter', '마스터'], ['ap-ks01', 't-cost-center', '관련'], ['ap-ks01', 'e-co-ccenter', '설정'],
    ['m-glacct', 't-chart-of-accounts', '관련'], ['m-glacct', 'e-gl-coa', '설정'],
    ['m-customer', 'c-bp', '통합'], ['m-customer', 'e-ar-cust-group', '설정'],
    ['m-vendor', 'c-bp', '통합'], ['m-vendor', 'e-ap-vendor-group', '설정'],
    ['m-material', 't-material-master', '관련'],
    ['m-asset', 'c-newaa', '관련'], ['m-asset', 'e-aa-acctdet', '설정'],
    ['m-costcenter', 't-cost-center', '관련'], ['m-costcenter', 'e-co-ccenter', '설정']
  ];
  EXTRA_EDGES.forEach(([a, b, l]) => pushEdge(a, b, l));
  // ---- 추가 허브 2차: 주요 테이블·트랜잭션 앱 확장 (UserMenu·Table 데이터 기반) ----
  const EXTRA2_NODES = [
 {
  "id": "tb-t001",
  "label": "T001",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "회사코드",
   "cds": "I_CompanyCode",
   "href": "table.html#t-T001"
  }
 },
 {
  "id": "tb-t003",
  "label": "T003",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "전표유형",
   "cds": "I_AccountingDocumentType",
   "href": "table.html#t-T003"
  }
 },
 {
  "id": "tb-kna1",
  "label": "KNA1",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "고객 마스터",
   "cds": "I_Customer",
   "href": "table.html#t-KNA1"
  }
 },
 {
  "id": "tb-lfa1",
  "label": "LFA1",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "공급업체 마스터",
   "cds": "I_Supplier",
   "href": "table.html#t-LFA1"
  }
 },
 {
  "id": "tb-anla",
  "label": "ANLA",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "고정자산 마스터·평가",
   "cds": "I_FixedAsset",
   "href": "table.html#t-ANLA"
  }
 },
 {
  "id": "tb-reguh",
  "label": "REGUH",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "자동지급 지급프로그램 헤더",
   "cds": "I_PaymentProposalPayment",
   "href": "table.html#t-REGUH"
  }
 },
 {
  "id": "tb-cobk",
  "label": "COBK",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "CO 문서 헤더",
   "cds": "I_JournalEntry",
   "href": "table.html#t-COBK"
  }
 },
 {
  "id": "tb-mara",
  "label": "MARA",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "자재 마스터(기본)",
   "cds": "I_Product",
   "href": "table.html#t-MARA"
  }
 },
 {
  "id": "tb-mbew",
  "label": "MBEW",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "자재 평가",
   "cds": "I_ProductValuation",
   "href": "table.html#t-MBEW"
  }
 },
 {
  "id": "tb-cosp",
  "label": "COSP · COSS",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "기간 합계(외부 / 내부)",
   "cds": "I_GLAcctBalanceCube",
   "href": "table.html#t-COSP"
  }
 },
 {
  "id": "tb-vbak",
  "label": "VBAK · VBAP",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "판매오더 헤더 / 아이템",
   "cds": "I_SalesDocument",
   "href": "table.html#t-VBAK"
  }
 },
 {
  "id": "tb-ekko",
  "label": "EKKO · EKPO",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "구매오더 헤더 / 아이템",
   "cds": "I_PurchaseOrder",
   "href": "table.html#t-EKKO"
  }
 },
 {
  "id": "tb-acdocp",
  "label": "ACDOCP",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "계획 데이터",
   "cds": "A_JournalEntryItemBasic",
   "href": "table.html#t-ACDOCP"
  }
 },
 {
  "id": "tb-bsid",
  "label": "BSID · BSAD",
  "type": "table",
  "ref": {
   "kind": "table",
   "desc": "고객 미결 / 반제 항목",
   "cds": "I_ARLINEITEM",
   "href": "table.html#t-BSID"
  }
 },
 {
  "id": "ap-f-04",
  "label": "F-04 반제 전기",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "미결항목을 골라 반제하면서 전기하는 화면",
   "href": "usermenu.html#u-F-04"
  }
 },
 {
  "id": "ap-fbl1n",
  "label": "FBL1N 공급업체 항목",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "공급업체 미결·반제 항목을 줄 단위로 추적",
   "href": "usermenu.html#u-FBL1N"
  }
 },
 {
  "id": "ap-fbl5n",
  "label": "FBL5N 고객 항목",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "고객 미결·반제 항목을 줄 단위로 추적",
   "href": "usermenu.html#u-FBL5N"
  }
 },
 {
  "id": "ap-ckmlcp",
  "label": "CKMLCP 실제원가",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "실제 원가를 계산해 마감하는 실제원가계산 실행",
   "href": "usermenu.html#u-CKMLCP"
  }
 },
 {
  "id": "ap-faglgvtr",
  "label": "FAGLGVTR 잔액이월",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "한 해 숫자를 다음 해로 넘기는 잔액 이월",
   "href": "usermenu.html#u-FAGLGVTR"
  }
 },
 {
  "id": "ap-as01",
  "label": "AS01 자산 생성",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "자산 하나가 장부에 태어나는 곳",
   "href": "usermenu.html#u-AS01"
  }
 },
 {
  "id": "ap-f-19",
  "label": "F.19 GR/IR 재분류",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "월말에 GR/IR 잔액을 정리 전표로 자동 전기하는 실행",
   "href": "usermenu.html#u-F.19"
  }
 },
 {
  "id": "ap-f-13",
  "label": "F.13 자동반제",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "같은 상대·금액끼리 자동 반제해 미결을 정리",
   "href": "usermenu.html#u-F.13"
  }
 },
 {
  "id": "ap-f-01",
  "label": "F.01 재무제표",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "재무제표 버전 기준으로 재무상태표와 손익계산서를 뽑는 실행 화면",
   "href": "usermenu.html#u-F.01"
  }
 },
 {
  "id": "ap-afab",
  "label": "AFAB 감가상각",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "한 달 상각비를 전기하고 결과를 로그로 검증",
   "href": "usermenu.html#u-AFAB"
  }
 },
 {
  "id": "ap-ajab",
  "label": "AJAB 자산 연마감",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "자산 회계연도를 열고 닫고, 잘못 닫은 연도를 되돌리는 결산 관리",
   "href": "usermenu.html#u-AJAB"
  }
 },
 {
  "id": "ap-ksb1",
  "label": "KSB1 코스트센터 항목",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "코스트센터 실제 항목을 줄 단위로 추적하는 조회",
   "href": "usermenu.html#u-KSB1"
  }
 },
 {
  "id": "ap-ksu5",
  "label": "KSU5 배부 실행",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "평가(Assessment) 배부를 실제로 실행하는 화면",
   "href": "usermenu.html#u-KSU5"
  }
 },
 {
  "id": "ap-vl01n",
  "label": "VL01N 납품",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "판매오더를 출하로 바꾸는 납품 생성",
   "href": "usermenu.html#u-VL01N"
  }
 },
 {
  "id": "ap-vf01",
  "label": "VF01 청구",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "청구문서를 발행해 매출채권이 생기는 화면",
   "href": "usermenu.html#u-VF01"
  }
 },
 {
  "id": "ap-me21n",
  "label": "ME21N 구매오더",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "발주서를 만드는 구매오더 생성 화면",
   "href": "usermenu.html#u-ME21N"
  }
 },
 {
  "id": "ap-mb51",
  "label": "MB51 자재전표",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "자재가 언제 왜 움직였는지 문서로 추적",
   "href": "usermenu.html#u-MB51"
  }
 },
 {
  "id": "ap-fb50",
  "label": "FB50 전표 입력",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "모든 수기 전표의 기본이 되는 G/L 전기 화면",
   "href": "usermenu.html#u-FB50"
  }
 },
 {
  "id": "ap-fb08",
  "label": "FB08 역분개",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "잘못된 전표를 개별 또는 일괄로 되돌리는 역분개",
   "href": "usermenu.html#u-FB08"
  }
 },
 {
  "id": "ap-f-53",
  "label": "F-53 지급 전기",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "건별로 골라 수동으로 지급 전기",
   "href": "usermenu.html#u-F-53"
  }
 },
 {
  "id": "ap-fb60",
  "label": "FB60 매입송장",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "PO 없는 수기 매입송장을 입력하는 곳",
   "href": "usermenu.html#u-FB60"
  }
 },
 {
  "id": "ap-fb70",
  "label": "FB70 매출송장",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "SD를 거치지 않는 수기 매출송장을 발행하는 곳",
   "href": "usermenu.html#u-FB70"
  }
 },
 {
  "id": "ap-f-28",
  "label": "F-28 입금 전기",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "들어온 돈을 매출채권에 붙이는 입금 전기",
   "href": "usermenu.html#u-F-28"
  }
 },
 {
  "id": "ap-f-90",
  "label": "F-90 자산 취득",
  "type": "app",
  "ref": {
   "kind": "app",
   "desc": "공급업체 송장과 함께 자산을 취득 전기",
   "href": "usermenu.html#u-F-90"
  }
 }
];
  EXTRA2_NODES.forEach(n => addNode(n.id, n.label, n.type, n.ref));
  const EXTRA2_EDGES = [["tb-t001","e-org-company-code","설정"],["tb-t001","e-org-ccode-company","설정"],["tb-t001","t-company-code","관련"],["tb-t001","t-company","관련"],["tb-t001","c-bp","관련"],["tb-t003","e-gl-doc-type","설정"],["tb-t003","e-gl-doc-number","설정"],["tb-t003","t-document-type","관련"],["tb-t003","ap-miro","앱"],["tb-kna1","e-ar-cust-group","설정"],["tb-kna1","e-ar-cust-num","설정"],["tb-kna1","e-ap-cvi","설정"],["tb-kna1","t-business-partner","관련"],["tb-kna1","t-cvi","관련"],["tb-kna1","ap-f-92","앱"],["tb-kna1","ap-fd01","앱"],["tb-lfa1","e-ap-vendor-group","설정"],["tb-lfa1","e-ap-vendor-num","설정"],["tb-lfa1","e-ap-cvi","설정"],["tb-lfa1","t-business-partner","관련"],["tb-lfa1","t-cvi","관련"],["tb-lfa1","ap-abaon","앱"],["tb-lfa1","ap-f-92","앱"],["tb-anla","t-acquire-to-decommission","관련"],["tb-anla","m-asset","마스터"],["tb-reguh","e-ap-housebank","설정"],["tb-reguh","e-ap-paymethod-ccode","설정"],["tb-reguh","t-automatic-payment","관련"],["tb-reguh","t-house-bank","관련"],["tb-reguh","ap-f110","앱"],["tb-reguh","ap-f110","앱"],["tb-cobk","c-acdoca","통합"],["tb-cobk","tb-coep","관련"],["tb-mara","t-material-master","관련"],["tb-mara","t-mm-module","관련"],["tb-mara","m-material","마스터"],["tb-mbew","e-xmod-ml","설정"],["tb-mbew","t-standard-cost-valuation","관련"],["tb-mbew","t-inventory-accounting","관련"],["tb-cosp","e-co-ccenter","설정"],["tb-cosp","t-cost-center","관련"],["tb-cosp","ap-ks01","앱"],["tb-cosp","ap-ks13","앱"],["tb-vbak","e-xmod-sdbill","설정"],["tb-vbak","t-order-to-cash","관련"],["tb-vbak","t-sd-module","관련"],["tb-ekko","t-p2p","관련"],["tb-ekko","t-invoice-verification","관련"],["tb-acdocp","c-acdoca","관련"],["tb-bsid","e-ar-recon","설정"],["tb-bsid","e-gl-clear-prep","설정"],["tb-bsid","t-open-item-management","관련"],["tb-bsid","t-clearing","관련"],["tb-bsid","ap-f-13","앱"],["tb-bsid","ap-fd01","앱"],["ap-f-04","e-co-celem","설정"],["ap-f-04","e-xmod-griradj","설정"],["ap-f-04","e-etc-mass-clearing","설정"],["ap-f-04","t-clearing","관련"],["ap-f-04","t-gl-account","관련"],["ap-fbl1n","t-line-item","관련"],["ap-fbl5n","e-ar-cust-group","설정"],["ap-fbl5n","e-ar-cust-num","설정"],["ap-fbl5n","e-ar-recon","설정"],["ap-fbl5n","t-line-item","관련"],["ap-ckmlcp","e-ml-ckmlcp-steps","설정"],["ap-ckmlcp","e-ml-wip-revaluation","설정"],["ap-ckmlcp","e-ml-price-marking","설정"],["ap-ckmlcp","t-actual-costing","관련"],["ap-ckmlcp","t-material-ledger","관련"],["ap-faglgvtr","e-close-carryfwd","설정"],["ap-faglgvtr","e-aa-yearend","설정"],["ap-faglgvtr","e-gl-ledger","설정"],["ap-faglgvtr","t-general-ledger","관련"],["ap-as01","e-aa-acctdet","설정"],["ap-as01","e-aa-numrange","설정"],["ap-as01","e-aa-transtype","설정"],["ap-f-19","e-xmod-griradj","설정"],["ap-f-19","t-gr-ir","관련"],["ap-f-19","t-clearing","관련"],["ap-f-19","t-gr-ir","관련"],["ap-f-13","e-gl-clear-prep","설정"],["ap-f-13","e-xmod-griradj","설정"],["ap-f-13","e-etc-mass-clearing","설정"],["ap-f-13","t-clearing","관련"],["ap-f-01","c-acdoca","조회"],["ap-afab","e-aa-depkey","설정"],["ap-afab","e-aa-deparea","설정"],["ap-afab","e-aa-depchart-assign","설정"],["ap-ajab","e-close-carryfwd","설정"],["ap-ajab","e-aa-yearend","설정"],["ap-ajab","e-aa-acctdet","설정"],["ap-ajab","c-newaa","결산"],["ap-ksb1","e-co-ccenter","설정"],["ap-ksb1","t-cost-center","관련"],["ap-ksu5","e-co-alloc","설정"],["ap-ksu5","e-ml-parallel-valuation","설정"],["ap-ksu5","t-allocation","관련"],["ap-vf01","c-acdoca","전기"],["ap-me21n","ap-migo","입고"],["ap-mb51","tb-matdoc","테이블"],["ap-fb50","t-document","관련"],["ap-fb08","t-reversal","관련"],["ap-f-53","ap-f110","지급"],["ap-fb60","ap-miro","검증"],["ap-fb70","c-bp","마스터"],["ap-f-28","ap-fbl5n","조회"],["ap-f-90","e-aa-transtype","설정"],["ap-f-90","e-aa-acctdet","설정"]];
  EXTRA2_EDGES.forEach(([a, b, l]) => pushEdge(a, b, l));
  const EXTRA3_EDGES = [
    ['ap-vl01n', 'tb-vbak', '테이블'], ['ap-vl01n', 'ap-vf01', '청구'],
    ['tb-acdocp', 'e-co-version', '설정'],
    ['ap-fbl1n', 'm-vendor', '마스터'],
    ['ap-f-01', 'ap-faglb03', '조회'],
    ['ap-vf01', 'tb-vbak', '테이블'],
    ['ap-me21n', 'tb-ekko', '테이블'],
    ['ap-mb51', 'ap-migo', '조회'],
    ['ap-fb50', 'e-gl-doc-type', '설정'],
    ['ap-fb08', 'tb-bkpf', '테이블'],
    ['ap-f-53', 'm-vendor', '마스터'],
    ['ap-fb60', 'm-vendor', '마스터'],
    ['ap-fb70', 'm-customer', '마스터'],
    ['ap-f-28', 'm-customer', '마스터']
  ];
  EXTRA3_EDGES.forEach(([a, b, l]) => pushEdge(a, b, l));


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
  let frozenUntil = 0;  // 화면을 끈 뒤 클릭할 수 있게 물리 정지 유지 (ms)
  applyFilter();
  function tick() {
    // 화면을 끄는 중이거나 끈 직후에는 노드를 멈춰 둔다 — 가져다 놓은 노드가
    // 커서 아래에서 미끄러져 클릭이 안 되는 문제를 막기 위함
    if (downPos || performance.now() < frozenUntil) return;
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
      const f = (d - 130) * 0.006;  // 복귀 속도 완화 (기존 0.012)
      const fx = dx / d * f, fy = dy / d * f;
      if (!a.pinned) { a.vx += fx; a.vy += fy; }
      if (!b.pinned) { b.vx -= fx; b.vy -= fy; }
    });
    nodes.forEach(n => {
      if (n === dragging || n.hidden || n.pinned) return;
      n.vx += (cx - n.x) * 0.0001;  // 중앙 복귀 속도 완화 (기존 0.0004)
      n.vy += (cy - n.y) * 0.0001;
      n.vx *= 0.92; n.vy *= 0.92;
      if (Math.abs(n.vx) < 0.02 && Math.abs(n.vy) < 0.02) { n.vx = 0; n.vy = 0; }
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
      return [Math.sin(tNow * 0.16 + n.x * 0.05) * 1.2, Math.cos(tNow * 0.135 + n.y * 0.05) * 1.2];
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
      const dx = n.x - p.x, dy = n.y - p.y;
      const grabR = (n.r || 9) + 14;
      const d = Math.hypot(dx, dy);
      // 원 아래 라벨 텍스트를 클릭해도 노드 선택으로 처리 (라벨은 원 아래 ~r+14px에 그려짐)
      const inLabel = Math.abs(dx) < grabR && dy <= 0 && dy >= -(grabR + 16);
      if ((d < grabR || inLabel) && d < bd) { bd = d; best = n; }
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
    if (moved) frozenUntil = performance.now() + 1500;  // 끈 뒤 1.5초간 정지 유지
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
  for (let i = 0; i < (opts.ticks || 240); i++) tick();
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
