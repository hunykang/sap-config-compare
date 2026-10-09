/* MM-FI 자동전표 (Automatic Posting) 데이터
 * 트랜잭션 키(OBYC)별 설명 요약 + 상세 설명 + 회계분개 예시
 * 분개 예시의 금액·통화는 원자료와 다르게 변형한 교육용 예시임
 * 항목 추가 방법: 아래 배열에 {id, key, en, kr, cat, summary, desc[], entries[]} 형태로 추가
 * cat(카테고리): '재고 입출고·이동' | '소모·출고' | '가격차이' | '운송·부대비' | '구매·정산'
 */
const AUTOPOST_CATS = ['재고 입출고·이동', '소모·출고', '가격차이', '운송·부대비', '구매·정산'];
const AUTOPOSTINGS = [
/* ============ 재고 입출고·이동 ============ */
{
  id: 'bsx', key: 'BSX', en: 'Inventory Posting',
  kr: '재고자산 전기',
  cat: '재고 입출고·이동',
  summary: '자재 입출고로 재고자산이 변동할 때 기표되는 재고자산 계정',
  desc: [
    '자재의 입출고로 인한 재고자산의 변동 시 사용하는 재고자산 계정을 지정한다.',
    'MM-FI 자동전표의 가장 기본이 되는 키로, 입고 시 차변에 재고자산이 기표된다.',
    'ML 사후마감에서 재고 재평가를 선택하면 기간 차이가 이 재고계정으로 롤링된다.'
  ],
  entries: [
    { t: '자재 입고 시', dr: ['원재료(BSX) 350'], cr: ['GR/IR Clearing(WRX) 350'] }
  ]
},
{
  id: 'bsv', key: 'BSV', en: 'Change in Stock Account',
  kr: '재고계정 변경 (무상사급 상대계정)',
  cat: '재고 입출고·이동',
  summary: '무상사급 자재 입고·반품 자재 처리 시 사용되는 상대계정',
  desc: [
    '무상사급(Subcontracting) 자재의 입고, 반품된 자재의 처리 시 사용되는 상대계정이다.',
    '① 원재료 불출: 회계전표 없음 ② 반제품 입고 시 아래 분개가 기표된다.'
  ],
  entries: [
    { t: '반제품 입고', dr: ['반제품(BSX) 2,500', '원재료비(GBB-VBO) 2,000', '외주가공비(FRL) 500'], cr: ['반제품대체(BSV) 2,500', '원재료(BSV) 2,000', 'GR/IR Clearing(WRX) 500'] }
  ]
},
{
  id: 'aum', key: 'AUM', en: 'Expense/Revenue from Stock Transfer',
  kr: '플랜트간 이동 가격차이',
  cat: '재고 입출고·이동',
  summary: '플랜트 간 자재이동 시 표준단가 차이로 발생한 차액 기표',
  desc: [
    'Plant 간 자재이동이 일어날 때 Standard Price의 차이로 인해 발생한 차액을 기표한다.',
    'Price Type이 S(표준가)인 경우 이동 전후 단가 차이를 AUM 계정으로 처리하고, V(이동평균가)인 경우 차액이 발생하지 않는다.'
  ],
  entries: [
    { t: 'Price Type(S) — 표준가 차이 발생', dr: ['재고자산(BSX) 145', '재고이동차(AUM) 15'], cr: ['재고자산(BSX) 160'] },
    { t: 'Price Type(V) — 차이 없음', dr: ['재고자산(BSX) 320'], cr: ['재고자산(BSX) 320'] }
  ]
},
{
  id: 'gbb-bsa', key: 'GBB-BSA', en: 'Initial Entry of Stock Balances',
  kr: '기초재고 설정',
  cat: '재고 입출고·이동',
  summary: '기초 재고를 설정하기 위한 상대계정 지정',
  desc: ['기초 재고를 설정하기 위한 계정을 지정한다. 이동유형 561(기초재고 입고) 등에 사용된다.'],
  entries: [
    { t: '기초재고 입고', dr: ['재고자산(BSX) 500'], cr: ['초기재고(GBB-BSA) 500'] }
  ]
},
{
  id: 'gbb-inv', key: 'GBB-INV', en: 'Inventory Differences',
  kr: '실사 재고차이',
  cat: '재고 입출고·이동',
  summary: '실지 재고조사 수량 차이를 기표하기 위한 계정 지정',
  desc: [
    '실지 재고조사에 의해 수량 차이를 발견했을 때 그 차이분을 기표하기 위한 계정을 지정한다.',
    '실사수량을 입력하면 장부상 재고수량과 비교하여 차이분을 자동으로 기표 처리한다.'
  ],
  entries: [
    { t: '부족 시 (장부 > 실사)', dr: ['수량차(GBB-INV) 250'], cr: ['재고자산(BSX) 250'] },
    { t: '과잉 시 (실사 > 장부)', dr: ['재고자산(BSX) 250'], cr: ['수량차(GBB-INV) 250'] }
  ]
},
{
  id: 'gbb-zob', key: 'GBB-ZOB', en: 'Goods Receipt w/o Purchase Order',
  kr: '무발주 입고',
  cat: '재고 입출고·이동',
  summary: '구매오더 없이 자재 입고 시 사용 (Vendor 추가 제공분 등)',
  desc: [
    'Purchase Order 없이 자재 입고 시 사용하는 계정으로, 주문수량 외에 Vendor가 추가로 제공하는 자재를 처리하는 경우에 사용한다.'
  ],
  entries: [
    { t: '무발주 입고', dr: ['재고자산(BSX) 2,750'], cr: ['영업외수익(GBB-ZOB) 2,750'] }
  ]
},
{
  id: 'gbb-zof', key: 'GBB-ZOF', en: 'Goods Receipt without Production Order',
  kr: '무생산오더 입고 (부산물)',
  cat: '재고 입출고·이동',
  summary: '생산오더 없이 자재 입고 시 사용 (부산물 입출고 등)',
  desc: [
    'Production Order 없이 자재를 입고할 경우 사용하는 계정으로, 부산물(By-Product) 등의 입출고 시 사용한다.',
    '예시에서는 부산물 재고계정으로 BSK(자가생산 부산물)를 사용하였다.'
  ],
  entries: [
    { t: '부산물 입고', dr: ['재고자산-부산물(BSK) 3,400'], cr: ['재고변동(ZOF) 3,400'] }
  ]
},
/* ============ 소모·출고 ============ */
{
  id: 'gbb-vbr', key: 'GBB-VBR', en: 'Consumption for Internal Goods Issues',
  kr: '내부 출고 소모',
  cat: '소모·출고',
  summary: '코스트센터·생산오더·프로젝트 등 원가오브젝트로 자재 출고·소비 시 계정 지정',
  desc: [
    'Cost Center, Production Order, Project 등 Cost Object로 자재가 출고되어 소비되는 경우의 계정을 지정한다.',
    '아래는 Component(표준가 $32) 10개로 제품(표준가 $128) 10개를 생산하는 예시이다.'
  ],
  entries: [
    { t: '자재 출고 (생산오더)', dr: ['재료비(GBB-VBR) 320'], cr: ['재고자산-Components(BSX) 320'] },
    { t: '제품 입고 (생산오더 참조)', dr: ['재고자산-Material(BSX) 1,280'], cr: ['공장산출(GBB-AUF) 1,280'] },
    { t: '생산오더 정산', dr: ['공장산출-정산(GBB-AUA) 960'], cr: ['가격차이(PRD) 960'] }
  ]
},
{
  id: 'gbb-vbo', key: 'GBB-VBO', en: 'Consumption from Material Stock Provided to Vendor',
  kr: '위탁제공 자재 소모',
  cat: '소모·출고',
  summary: 'Vendor에 제공한 자재가 소모될 때의 계정 지정 (BSV 참조)',
  desc: [
    'Vendor에게 제공한 자재(무상사급)가 생산에 소모될 때 사용하는 계정이다.',
    '처리 흐름은 BSV 항목을 참조한다.'
  ],
  entries: [
    { t: '무상사급 자재 소모 (BSV 예시)', dr: ['원재료비(GBB-VBO) 2,000'], cr: ['원재료(BSV) 2,000'] }
  ]
},
{
  id: 'gbb-vax', key: 'GBB-VAX', en: 'G/I for Customer Orders Without Account Assignment',
  kr: '고객오더 출고 (무귀속)',
  cat: '소모·출고',
  summary: 'SD 납품 시 매출원가계정 지정 — 판매오더를 참조하지 않는 경우',
  desc: [
    'SD에서 Delivery 시 매출원가계정을 지정하기 위한 것으로, Sales Order를 참조하지 않는 경우이다.'
  ],
  entries: [
    { t: '납품 출고', dr: ['매출원가(GBB-VAX) 420'], cr: ['재고자산(BSX) 420'] }
  ]
},
{
  id: 'gbb-vay', key: 'GBB-VAY', en: 'G/I for Customer Order with Account Assignment',
  kr: '고객오더 출고 (귀속)',
  cat: '소모·출고',
  summary: 'SD 납품 시 매출원가계정 지정 — 판매오더를 참조하는 일반적인 경우',
  desc: [
    'SD에서 Delivery 시 매출원가계정을 지정하기 위한 것으로, Sales Order를 참조하는 일반적인 경우이다.',
    'VAX와 달리 판매오더에 원가가 귀속된다.'
  ],
  entries: []
},
{
  id: 'gbb-vka', key: 'GBB-VKA', en: 'Consumption Customer Order Without SD',
  kr: '고객오더 직접귀속 출고',
  cat: '소모·출고',
  summary: 'SD 납품 없이 판매오더에 직접 원가 귀속하는 자재 출고 시 계정 지정',
  desc: [
    'Sales Order로 직접 원가를 귀속하는 자재의 출고 시 원가계정을 지정한다 (SD의 Delivery를 사용하지 않는 경우).'
  ],
  entries: [
    { t: '자재 출고', dr: ['재료비(GBB-VKA) 670'], cr: ['재고자산(BSX) 670'] }
  ]
},
{
  id: 'gbb-vng', key: 'GBB-VNG', en: 'Scrapping / Destruction',
  kr: '스크랩·폐기',
  cat: '소모·출고',
  summary: 'Scrap으로 자재가 출고되는 경우의 계정 지정',
  desc: ['Scrap으로 자재가 출고되는 경우의 계정을 지정한다.'],
  entries: [
    { t: '스크랩 출고', dr: ['재료비-Scrap(GBB-VNG) 890'], cr: ['재고자산(BSX) 890'] }
  ]
},
{
  id: 'gbb-vqp', key: 'GBB-VQP', en: 'Sampling without Account Assignment',
  kr: '샘플링 출고 (무귀속)',
  cat: '소모·출고',
  summary: '품질검사 Sample 출고 시 계정 지정 — 원가귀속 없음',
  desc: ['품질검사를 위한 Sample을 출고하는 경우의 계정을 지정한다.'],
  entries: [
    { t: '샘플 출고', dr: ['제비용(GBB-VQP) 1,150'], cr: ['재고자산(BSX) 1,150'] }
  ]
},
{
  id: 'gbb-vqy', key: 'GBB-VQY', en: 'Sampling with Account Assignment',
  kr: '샘플링 출고 (귀속)',
  cat: '소모·출고',
  summary: '품질검사 Sample을 CO 오브젝트로 출고하는 경우의 계정 지정',
  desc: ['품질검사를 위한 Sample을 CO Object로 출고하는 경우의 계정을 지정한다.'],
  entries: [
    { t: '샘플 출고 (CO 귀속)', dr: ['견본비(GBB-VQY) 1,320'], cr: ['재고자산(BSX) 1,320'] }
  ]
},
{
  id: 'gbb-aua', key: 'GBB-AUA', en: 'For Order Settlement',
  kr: '오더 정산 상대계정',
  cat: '소모·출고',
  summary: '생산오더 정산 시 사용되는 상대계정 (AUF 지정 계정에 우선)',
  desc: [
    'Production Order를 정산(Settle)할 때 사용되는 상대계정으로, 정산 시 AUF에 지정된 계정에 우선한다.',
    '아래는 Component(표준가 $32) 10개로 제품(표준가 $128) 10개를 생산·정산하는 예시이다.'
  ],
  entries: [
    { t: '자재 출고 (생산오더)', dr: ['재료비(GBB-VBR) 320'], cr: ['재고자산-Components(BSX) 320'] },
    { t: '제품 입고 (생산오더 참조)', dr: ['재고자산-Material(BSX) 1,280'], cr: ['공장산출(GBB-AUF) 1,280'] },
    { t: '생산오더 정산', dr: ['공장산출-정산(GBB-AUA) 960'], cr: ['가격차이(PRD) 960'] }
  ]
},
{
  id: 'gbb-auf', key: 'GBB-AUF', en: 'G/R for Assigned Orders / Order Settlement',
  kr: '오더 입고 상대계정',
  cat: '소모·출고',
  summary: '생산오더 생산완료 후 제품 입고 시 상대계정 (정산 시에도 사용)',
  desc: [
    'Production Order로부터 생산완료 후 제품 입고가 일어날 경우 제품에 대한 상대계정이며, Production Order를 정산할 때 사용되는 상대계정이다.',
    '처리 흐름은 GBB-AUA 항목을 참조한다.'
  ],
  entries: [
    { t: '제품 입고 (생산오더 참조)', dr: ['재고자산-Material(BSX) 1,280'], cr: ['공장산출(GBB-AUF) 1,280'] }
  ]
},
{
  id: 'ako', key: 'AKO', en: 'Expense/Revenue from Material Consumption',
  kr: '위탁자재 소모차이',
  cat: '소모·출고',
  summary: '위탁자재 생산투입·소유권 이전 시 표준단가와 위탁단가의 차이 처리',
  desc: [
    '위탁자재(Vendor Consignment)를 생산에 투입하거나 일정기간 경과 후 회사재고로 소유권을 이동할 때, Standard Price를 사용하는 경우 Vendor Consignment Price와 Material Master상의 Standard Price 차이분을 처리한다.',
    '① Consignment 입고: 회계전표 없음 ② 생산에 소비 ③ 소유권 이전'
  ],
  entries: [
    { t: '생산 소비 / 소유권 이전 (위탁단가 2,425)', dr: ['재료비(GBB-VBR) 2,400', '손실-소모차(AKO) 25'], cr: ['A/P-위탁자재(KON) 2,425'] }
  ]
},
/* ============ 가격차이 ============ */
{
  id: 'prd', key: 'PRD', en: 'Cost (Price) Differences',
  kr: '가격차이',
  cat: '가격차이',
  summary: '표준가 사용 시 모든 재고 이동에서 발생한 가격차이 처리 계정',
  desc: [
    'Standard Price를 사용하는 경우 모든 재고자산의 이동에서 발생한 가격차이를 처리하기 위한 계정을 지정한다.',
    '예) 입고 시 참조한 Purchase Order상의 단가와 Master상의 표준원가가 다를 때, I/V 시 입고단가와 확정단가가 다를 때 그 차이분을 기표한다.',
    'Moving Average Price( 이동평균가)를 사용하는 경우에는 입고·출고·송장 흐름에 따라 재고금액과 평균단가가 변동한다.'
  ],
  entries: [
    { t: '입고 시 가격차이 (표준가 1,960 / 발주단가 2,000)', dr: ['재고자산(BSX) 1,960', '가격차이(PRD) 40'], cr: ['GR/IR(WRX) 2,000'] }
  ]
},
{
  id: 'ppk', key: 'PPK', en: 'Price Differences (Cost Object Hierarchy)',
  kr: '가격차이 (원가오브젝트 계층)',
  cat: '가격차이',
  summary: 'PRD와 같은 역할이나 Cost Object Hierarchy에서 발생한 경우 사용',
  desc: [
    'PRD와 같은 역할을 하지만 Cost Object Hierarchy 상에서 발생한 경우에 사용한다.'
  ],
  entries: [
    { t: '비용 처리', dr: ['영업외비용(PPK) 350'], cr: ['Factory Output(KTR) 350'] },
    { t: '수익 처리', dr: ['Factory Output(KTR) 350'], cr: ['영업외수익(PRK) 350'] }
  ]
},
{
  id: 'pry', key: 'PRY', en: 'Cost (Price) Differences (Material Ledger)',
  kr: '가격차이 (자재원장)',
  cat: '가격차이',
  summary: '이동평균가 자재의 거래건별 가격차이 기표 / 표준가는 월말 자재원장 정산 시 일괄 처리',
  desc: [
    'Moving Average Price를 사용하는 자재의 경우 Purchase Order상의 단가×수량과 Material Master상의 단가×수량의 차이를 거래건별 전표로 기표함으로써 표준원가와 실제원가의 차이를 나타낸다.',
    'Standard Price를 사용하는 제품·상품 등의 경우는 월말에 Material Ledger 정산 시 일괄 전표 처리한다.'
  ],
  entries: [
    { t: '자재 입고 시 (1)', dr: ['원재료(BSX) 190', '가격차(PRD) 10'], cr: ['GR/IR(WRX) 200'] },
    { t: '자재 입고 시 (2)', dr: ['원재료(BSX) 10'], cr: ['가격차(PRY) 10'] },
    { t: '월말 자재원장 정산 (표준가 제품)', dr: ['가격차(PRY) 200'], cr: ['재고자산(BSX) 200'] }
  ]
},
{
  id: 'ktr', key: 'KTR', en: 'Price Difference Offsetting Entry (Cost Object)',
  kr: '가격차 상쇄 (원가오브젝트)',
  cat: '가격차이',
  summary: 'PRK 프로세스의 상대계정',
  desc: ['PRK Process의 상대 계정이다.'],
  entries: [
    { t: '비용 처리', dr: ['영업외비용(PRK) 250'], cr: ['Factory Output(KTR) 250'] },
    { t: '수익 처리', dr: ['Factory Output(KTR) 250'], cr: ['영업외수익(PRK) 250'] }
  ]
},
{
  id: 'dif', key: 'DIF', en: 'Material Management Small Differences',
  kr: '소액차이 (허용한도 내 자동조정)',
  cat: '가격차이',
  summary: '송장검증 시 허용한도 내 잔액을 자동으로 맞춰주는 대차조정계정',
  desc: [
    'Invoice Verification 시 Balance가 Zero가 되지 않으나 그 차이금액이 미리 설정한 허용 한도 내에 있을 경우 자동으로 Balance를 맞추어주기 위한 대차조정계정이다.',
    'GR/IR과 I/V 시점 차이로 인한 단가 차이와는 성격이 다르다.'
  ],
  entries: [
    { t: '① P/O 생성 시 설정한 구매단가로 G/R', dr: ['재고자산(BSX) 5,006'], cr: ['GR/IR(WRX) 5,006'] },
    { t: '② I/V 시 확정단가(5,000) — 차액 6은 DIF로 자동조정', dr: ['GR/IR 5,006'], cr: ['A/P 5,000', 'Small Price Difference(DIF) 6'] }
  ]
},
{
  id: 'umb', key: 'UMB', en: 'Revenue/Expense from Revaluation',
  kr: '재평가 손익',
  cat: '가격차이',
  summary: '재고자산 표준단가 변경·전월분 기표 시 계정 지정',
  desc: [
    '재고자산의 Standard Price를 변경하거나 전월분 기표를 하는 경우의 계정을 지정한다.'
  ],
  entries: [
    { t: '표준단가 인상 시', dr: ['재고자산(BSX) 450'], cr: ['가격차(UMB) 450'] }
  ]
},
/* ============ 운송·부대비 ============ */
{
  id: 'fr1', key: 'FR1', en: 'Freight Clearing',
  kr: '운송비 정산',
  cat: '운송·부대비',
  summary: 'MM 매입부대비용(운반비·관세) 처리 — 취득원가 산입 (MAP)',
  desc: [
    'MM에서 Delivery Cost를 처리하는 경우의 계정이다.',
    '① 매입과 관련된 운반비, 관세 등의 매입부대비용을 처리 ② 매입부대비용은 재고자산의 취득원가에 산입해야 함 (MAP 사용 시) ③ 예상매입부대비(Planned Delivery Cost)는 P/O 생성 시에 설정한다.',
    '④ 실발생 부대비가 표준부대비와 차이가 있는 경우 아래와 같이 처리한다.'
  ],
  entries: [
    { t: 'G/R 시', dr: ['재고자산(BSX) 3,000'], cr: ['GR/IR(WRX) 2,400', 'Freight Clearing(FR1) 150', 'Customer Clearing(FR3) 450'] },
    { t: '물대에 대한 I/V 시', dr: ['GR/IR(WRX) 2,400'], cr: ['A/P(물대 Vendor) 2,400'] },
    { t: '부대비에 대한 I/V 시', dr: ['Freight Clearing(FR1) 150', 'Customer Clearing(FR3) 450'], cr: ['A/P 150', 'A/P 450'] },
    { t: '입고 후 I/V — 실발생 180 (표준 150)', dr: ['Freight Clearing(FR1) 150', '재고자산(BSX) 30'], cr: ['A/P 180'] },
    { t: 'I/V가 먼저 일어난 경우', dr: ['Freight Clearing(FR1) 180'], cr: ['A/P 180'] },
    { t: 'G/R이 이후에 일어난 경우', dr: ['재고자산(BSX) 180'], cr: ['Freight Clearing(FR1) 180'] }
  ]
},
{
  id: 'fr2', key: 'FR2', en: 'Freight Provisions',
  kr: '운송비 충당',
  cat: '운송·부대비',
  summary: 'Condition Category "F:Freight" 부대비 — I/V 시 차변 미표시, 수작업 기표 필요',
  desc: [
    '일반적으로 매입부대비를 나타내는 Condition Type은 Condition Category가 "B:Delivery Costs"로 설정되며 FR1은 이에 준한 Procedure이다.',
    '그러나 부대비 관련 Condition Type의 Condition Category를 "F:Freight"로 설정하면 G/R 시 자동 설정된 Freight Clearing 계정이 I/V 시에는 차변에 나타나지 않는다. 즉, 그러한 Condition Type으로 설정된 부대비에 대해서는 I/V 시 Planned Delivery Cost로 나타나지 않으며, 실발생비용을 기표하기 위해서는 I/V 또는 FI에서 수작업 기표해야 한다.'
  ],
  entries: [
    { t: 'G/R 시', dr: ['재고자산(BSX) 2,000'], cr: ['GR/IR Clearing(WRX) 1,800', 'Freight Clearing(FR1) 80', 'Freight Provision(FR2) 120'] },
    { t: 'I/V 시 (Planned Delivery Cost 이용)', dr: ['GR/IR Clearing(WRX) 1,800', 'Freight Clearing(FR1) 80'], cr: ['A/P(물대) 1,800', 'A/P(부대비) 80'] },
    { t: 'I/V 또는 FI에서 실발생비용 처리 (수작업)', dr: ['재고자산 또는 비용 120'], cr: ['A/P 120'] }
  ]
},
{
  id: 'fr3', key: 'FR3', en: 'Other Freight Costs',
  kr: '기타 운송비',
  cat: '운송·부대비',
  summary: '기타 부대비 처리 (FR1 참조)',
  desc: ['기타 부대비를 처리하며, 처리 흐름은 FR1을 참조한다.'],
  entries: []
},
{
  id: 'fr4', key: 'FR4', en: 'Special Freight Charges',
  kr: '특별 운송비',
  cat: '운송·부대비',
  summary: '기타 부대비 처리 — 처리 흐름은 FR2와 동일',
  desc: ['기타 부대비를 처리하며 처리 흐름은 FR2와 동일하다.'],
  entries: []
},
{
  id: 'fre', key: 'FRE', en: 'Purchasing Freight Account',
  kr: '구매 운송비 계정',
  cat: '운송·부대비',
  summary: 'Purchase Account Active 시 운송료를 별도 기표할 때 지정',
  desc: [
    'Purchase Account(EIN, EKG) 처리 시 별도로 운송료를 기표할 필요가 있을 때 지정한다.'
  ],
  entries: [
    { t: '운송료 별도 기표', dr: ['재고자산(BSX) 2,040', 'Freight(FRE) 40', 'Purchase(EIN) 2,000'], cr: ['GR/IR(WRX) 2,000', 'Freight Clearing(FR1) 40', 'Purchase Offsetting(EKG) 2,040'] }
  ]
},
{
  id: 'frl', key: 'FRL', en: 'External Activity',
  kr: '외주가공비',
  cat: '운송·부대비',
  summary: '무상사급 자재 입고 시 가공비 처리 계정 (BSV 참조)',
  desc: [
    '무상사급(Subcontracting) 자재의 입고 시 가공비를 처리하기 위한 계정을 지정한다.',
    '처리 흐름은 BSV 항목을 참조한다.'
  ],
  entries: [
    { t: '반제품 입고 (외주가공비)', dr: ['외주가공비(FRL) 500'], cr: ['GR/IR Clearing(WRX) 500'] }
  ]
},
{
  id: 'frn', key: 'FRN', en: 'Incidental Costs of Activities',
  kr: '외주가공 부대비용',
  cat: '운송·부대비',
  summary: '무상사급 입고 시 부수적 발생 비용(Delivery Cost) 처리 계정',
  desc: [
    '무상사급(Subcontracting) 자재의 입고 시 부수적으로 발생한 비용(Delivery Cost)을 처리하기 위한 계정을 지정한다.',
    '① 원재료 불출 → 회계전표 없음 ② 반제품 입고'
  ],
  entries: [
    { t: '반제품 입고', dr: ['반제품(BSX) 3,000', '원재료비(GBB-VBO) 2,400', '외주가공비(FRL) 600', '외주가공-운반비(FRN) 60'], cr: ['반제품대체(BSV) 3,000', '원재료(BSX) 2,400', 'GR/IR Clearing(WRX) 600', 'Freight Clearing(FR1) 60'] }
  ]
},
/* ============ 구매·정산 ============ */
{
  id: 'ein', key: 'EIN', en: 'Purchasing Account',
  kr: '구매계정',
  cat: '구매·정산',
  summary: 'Purchase Account Active 시 재고자산 대응 P+L 계정 지정 (프랑스·스페인 등)',
  desc: [
    '프랑스, 스페인 등 특정 국가에서 재고자산의 순수한 구매량을 원계정과는 별도의 계정(Purchase Account)과 이에 대한 상대계정(Offsetting Purchase Account)으로 구분하여 관리하려고 하는데, 이 Transaction Event Key는 재고자산에 대응되는 계정을 지정하며 이 계정은 P+L 계정이다.'
  ],
  entries: [
    { t: '자재 입고 시', dr: ['재고자산(BSX) 780', 'Purchase Account(EIN) 780'], cr: ['GR/IR(WRX) 780', 'Offsetting Purchase Account(EKG) 780'] }
  ]
},
{
  id: 'ekg', key: 'EKG', en: 'Offsetting Purchasing Account',
  kr: '구매상쇄계정',
  cat: '구매·정산',
  summary: 'Purchase Account의 상대계정 (EIN 참조)',
  desc: ['EIN 참조. Purchase Account(EIN)에 대한 상대계정이다.'],
  entries: []
},
{
  id: 'kbs', key: 'KBS', en: 'Account-Assigned Purchase Order',
  kr: '계정귀속 구매오더',
  cat: '구매·정산',
  summary: 'P/O 생성 시 Account Assignment Category로 차변 계정을 재고자산 대신 지정',
  desc: [
    '일반적으로 Purchase Order를 통해 입고 처리하게 되면 차변에 재고자산 계정(BSX)이 기표되는데, 만일 이를 다른 계정으로 바꾸고자 한다면(비용계정, 고정자산 등) P/O 생성 시 Account Assignment Category 필드를 별도 지정한다 (A, K, P 등).'
  ],
  entries: []
},
{
  id: 'bo1', key: 'BO1', en: 'Rebates',
  kr: '리베이트 미수',
  cat: '구매·정산',
  summary: 'Volume-Based Rebate 계약 시 예상 리베이트를 미수 Rebate로 기표',
  desc: [
    'Vendor로부터 Volume-Based Rebate 계약을 체결하고 구매할 때 예상 Rebate 금액을 미수 Rebate로 기표 처리한다.'
  ],
  entries: [
    { t: '구매 시 (예상 리베이트)', dr: ['재고자산(BSX) 1,164', '미수Rebate(BO1) 36'], cr: ['GR/IR Clearing(WRX) 1,200'] }
  ]
},
{
  id: 'bo2', key: 'BO2', en: 'Volume Rebate Income',
  kr: '리베이트 정산 (조건 후속정산)',
  cat: '구매·정산',
  summary: '계약기간 종료 후 Rebate 정산 시 미수-실제 차액을 수익으로 기표',
  desc: [
    'Subsequent Settlement of Conditions — Vendor와의 Volume-Based Rebate에 근거하여 계약기간 종료 후 Rebate 정산 기표 시, 미수 Rebate와 실제 Rebate 사이의 차액을 수익으로 기표한다.'
  ],
  entries: [
    { t: '정산 시 (차액 수익)', dr: ['Rebate 수익(BO2) 42'], cr: ['미수Rebate(BO1) 42'] },
    { t: '정산 시 (추가분)', dr: ['A/P 8'], cr: ['Rebate 수익(BO2) 8'] }
  ]
},
{
  id: 'kon', key: 'KON', en: 'Consignment Payables',
  kr: '위탁 매입채무',
  cat: '구매·정산',
  summary: '위탁자재 매입채무 계정 (AKO 참조)',
  desc: ['AKO 참조. 위탁자재(Vendor Consignment)에 대한 매입채무 계정이다.'],
  entries: []
},
{
  id: 'kdm', key: 'KDM', en: 'Materials Management Exchange Rate Differences',
  kr: '환율차이 (G/R–I/V 시점차)',
  cat: '구매·정산',
  summary: 'G/R과 I/V 시점 차이에 의해 발생하는 환차손익 기표계정',
  desc: [
    'G/R과 I/V 시점 차이에 의해 발생하는 환차손익 기표계정을 지정한다.',
    '아래는 G/R 시점 환율 $1=₩1,200 → I/V 시점 $1=₩1,800으로 변동한 예시이다.'
  ],
  entries: [
    { t: 'G/R 시점 ($1=₩1,200)', dr: ['재고자산(BSX) $1,200'], cr: ['GR/IR(WRX) $1,200'] },
    { t: 'I/V 시점 ($1=₩1,800)', dr: ['GR/IR $1,200', '환차손(KDM) $600'], cr: ['A/P $1,800'] }
  ]
},
{
  id: 'kdr', key: 'KDR', en: 'Material Management Exchange Rate Rounding Differences',
  kr: '환율 반올림차이',
  cat: '구매·정산',
  summary: '거래통화·현지통화 소수점 자리수 제한으로 반올림 시 발생하는 금액차이 처리',
  desc: [
    'Transaction Currency와 Local Currency의 소수점 이하 허용 자리수 제한(시스템에서 Default로 소수점 이하 2자리로 규정)으로 반올림 시 발생하는 금액차이를 처리하는 계정을 지정한다.',
    '아래는 Local Currency: EUR, Transaction Currency: USD, 환율 1.0865, 단가 2USD/ITEM인 예시이다.'
  ],
  entries: [
    { t: 'Transaction Currency 전표', dr: ['현금 2.00USD'], cr: ['A/P 4.00USD', '외환차익(KDR) 0.00USD'] },
    { t: 'Local Currency 전표 (반올림 차이 0.01)', dr: ['현금 2.17EUR', '외환차손(KDR) 0.01EUR'], cr: ['A/P 4.35EUR'] }
  ]
},
{
  id: 'wrx', key: 'WRX', en: 'Goods Receipt / Invoice Receipt Clearing Account',
  kr: 'GR/IR 정산계정',
  cat: '구매·정산',
  summary: '입고 시점과 매입채무 확정 시점 차이 보전을 위한 조정계정',
  desc: [
    '자재의 입고 시점과 매입채무 확정 시점의 차이로 인해 실시간으로 정확한 데이터가 FI에 반영되지 못하므로 이를 보전하는 데 필요한 조정계정을 지정한다.'
  ],
  entries: [
    { t: '입고 시 (GR)', dr: ['재고자산(BSX) 750'], cr: ['GR/IR Clearing(WRX) 750'] },
    { t: '매입채무 확정 시 (IV)', dr: ['GR/IR Clearing(WRX) 750'], cr: ['A/P 750'] }
  ]
},
{
  id: 'lkw', key: 'LKW', en: 'Accrual Account for Non-Revaluated Stock',
  kr: '미재평가 발생계정',
  cat: '가격차이',
  summary: 'ML 사후마감에서 재고 재평가를 선택하지 않을 때 차이가 귀속되는 발생계정',
  desc: [
    'ML 사후마감(실제원가계산 마감) 시 재고 재평가를 선택하지 않으면, 기간 차이가 재고가 아닌 이 발생(Accrual) 계정으로 롤링된다.',
    '재고로 올릴지 비용성 계정으로 둘지의 선택에 따라 BSX와 짝을 이루어 사용한다.'
  ],
  entries: [
    { t: '재평가 미선택 시', dr: ['가격차이(LKW) 120'], cr: ['GR/IR Clearing(WRX) 120'] }
  ]
},
{
  id: 'coc', key: 'COC', en: 'Designated Account for Consumption Revaluation',
  kr: '소비재평가 지정계정',
  cat: '가격차이',
  summary: '소비재평가 시 오리지날 계정이 아닌 지정 계정으로 차이를 강제 전송',
  desc: [
    '소비재평가 단계에서 오리지날 계정이 아니라 여기서 지정한 계정으로 차이를 강제 전송하고 싶을 때 사용한다.',
    '이동유형그룹(CC/CF) 설정과 함께 사용하며, 감모손실처럼 특정 성격의 차이를 별도 계정에 모을 때 쓴다.'
  ],
  entries: [
    { t: '소비재평가 지정 시', dr: ['감모손실(COC) 80'], cr: ['재고자산(BSX) 80'] }
  ]
},
];
/* 출처 */
const AUTOPOST_SOURCES = [
  { label: '네이버 블로그 mondawy — MM-FI Automatic Posting 정리', url: 'https://blog.naver.com/mondawy/30078028402' },
  { label: '네이버 블로그 밝마맑마(hsland) — MM-FI Automatic Posting 정리', url: 'http://blog.naver.com/hsland/40022024950' }
];
/* 항목별 관련 링크 (비교표 / 용어집 / 현장 스케치) */
const AUTOPOST_LINKS = {
  ako:  { terms: ['obyc'], sk: ['sk-autoposting-456'] },
  aum:  { terms: ['obyc'], sk: ['sk-autoposting-456'] },
  bo1:  { terms: ['obyc', 'gr-ir'], sk: ['sk-grir-settle-461'] },
  bo2:  { terms: ['obyc'], sk: [] },
  bsv:  { terms: ['obyc'], sk: ['sk-autoposting-456'] },
  bsx:  { terms: ['obyc', 'gr-ir'], sk: ['sk-blog-10', 'sk-mvtype-obyc-514'] },
  dif:  { terms: ['obyc', 'invoice-verification'], sk: ['sk-miro-split'] },
  ein:  { terms: ['obyc'], sk: ['sk-purchase-acct-515'] },
  ekg:  { terms: ['obyc'], sk: ['sk-purchase-acct-515'] },
  fr1:  { terms: ['obyc', 'gr-ir'], sk: ['sk-grir-settle-461'] },
  fr2:  { terms: ['obyc'], sk: [] },
  fr3:  { terms: ['obyc'], sk: [] },
  fr4:  { terms: ['obyc'], sk: [] },
  fre:  { terms: ['obyc'], sk: ['sk-purchase-acct-515'] },
  frl:  { terms: ['obyc'], sk: [] },
  frn:  { terms: ['obyc'], sk: [] },
  'gbb-aua': { terms: ['obyc'], sk: ['sk-autoposting-456', 'sk-mvtype-obyc-514'] },
  'gbb-auf': { terms: ['obyc'], sk: ['sk-autoposting-456'] },
  'gbb-bsa': { terms: ['obyc'], sk: ['sk-mvtype-obyc-514'] },
  'gbb-inv': { terms: ['obyc'], sk: [] },
  'gbb-vax': { terms: ['obyc'], sk: ['sk-blog-11'] },
  'gbb-vay': { terms: ['obyc'], sk: ['sk-blog-11'] },
  'gbb-vbo': { terms: ['obyc'], sk: ['sk-autoposting-456'] },
  'gbb-vbr': { terms: ['obyc'], sk: ['sk-autoposting-456'] },
  'gbb-vka': { terms: ['obyc'], sk: [] },
  'gbb-vng': { terms: ['obyc'], sk: [] },
  'gbb-vqp': { terms: ['obyc'], sk: [] },
  'gbb-vqy': { terms: ['obyc'], sk: [] },
  'gbb-zob': { terms: ['obyc'], sk: [] },
  'gbb-zof': { terms: ['obyc'], sk: [] },
  kbs:  { terms: ['obyc'], sk: [] },
  kdm:  { terms: ['obyc', 'gr-ir'], sk: [] },
  kdr:  { terms: ['obyc'], sk: [] },
  kon:  { terms: ['obyc'], sk: ['sk-autoposting-456'] },
  ktr:  { terms: ['obyc'], sk: [] },
  prd:  { terms: ['obyc'], sk: ['sk-autoposting-456'] },
  ppk:  { terms: ['obyc', 'material-ledger'], sk: ['sk-material-ledger-act', 'sk-ml-table'] },
  pry:  { terms: ['obyc', 'material-ledger'], sk: ['sk-material-ledger-act', 'sk-ml-table'] },
  umb:  { terms: ['obyc'], sk: [] },
  wrx:  { terms: ['obyc', 'gr-ir', 'invoice-verification'], sk: ['sk-blog-05', 'sk-grir-settle-461'] }
};
/* 관련 대상 이름표 */
const AUTOPOST_NAMES = {
  cmp: { 'xmod-obyc': 'MM-FI 자동계정결정 (OBYC)' },
  terms: {
    'obyc': '자동계정결정 (OBYC)',
    'gr-ir': 'GR/IR',
    'material-ledger': '자재원장 (ML)',
    'invoice-verification': '송장검증'
  },
  sk: {
    'sk-autoposting-456': 'Autoposting',
    'sk-mvtype-obyc-514': '이동유형 OBYC 관련',
    'sk-purchase-acct-515': 'Purchase account 관련',
    'sk-grir-settle-461': 'GRIR 정산',
    'sk-blog-05': 'F.19 GR/IR 미착대체 관련',
    'sk-blog-10': 'MM 입고시 회계전표 안나오게 설정',
    'sk-blog-11': 'OBYC GBB-VAX GBB-VAY 관련',
    'sk-ml-table': 'ML Table 관련',
    'sk-miro-split': 'MIRO 송장처리 시 FI전표 분할 관련',
    'sk-material-ledger-act': 'Material Ledgers/ Actual Costing 관련'
  }
};
