const GLOSSARY = [
 {
  "id": "company-code",
  "kr": "회사코드",
  "en": "Company Code",
  "abbr": "",
  "desc": "재무회계를 독립적으로 결산할 수 있는 가장 작은 조직 단위. 전표가 이 단위로 끊어지고, 재무제표도 회사코드별로 나온다.",
  "items": [
   "org-company-code",
   "org-ccode-company"
  ],
  "terms": [
   "company",
   "chart-of-accounts"
  ]
 },
 {
  "id": "company",
  "kr": "회사",
  "en": "Company",
  "abbr": "",
  "desc": "여러 회사코드를 묶는 최상위 조직 단위. 연결재무제표의 기준이 된다.",
  "items": [
   "org-company",
   "org-ccode-company"
  ],
  "terms": [
   "company-code"
  ]
 },
 {
  "id": "chart-of-accounts",
  "kr": "계정과목표",
  "en": "Chart of Accounts",
  "abbr": "COA",
  "desc": "G/L 계정들의 전체 목록표. 회사코드는 반드시 하나의 계정과목표에 연결되어야 전표를 칠 수 있다.",
  "items": [
   "org-ccode-company"
  ],
  "terms": [
   "company-code",
   "gl-account"
  ]
 },
 {
  "id": "account-type",
  "kr": "계정유형",
  "en": "Account Type",
  "abbr": "",
  "desc": "SAP에서 '계정'은 G/L계정만이 아니라 고객·공급처·자산·자재까지 포함한 넓은 개념이다. 이 다섯 가지를 구분하는 코드가 계정유형이며, 전표의 성격이 여기서 갈린다.",
  "items": [],
  "terms": [
   "gl-account",
   "business-partner",
   "reconciliation-account",
   "sub-ledger"
  ]
 },
 {
  "id": "account-group",
  "kr": "계정그룹",
  "en": "Account Group",
  "abbr": "",
  "desc": "비슷한 성격의 계정들을 묶는 틀이다. G/L계정의 계정그룹은 전표 입력 화면에 어떤 필드가 나오는지(필드상태)를 좌우한다.",
  "items": [
   "gl-acct-group"
  ],
  "terms": [
   "gl-account",
   "field-status"
  ]
 },
 {
  "id": "account-assignment",
  "kr": "계정지정",
  "en": "Account Assignment",
  "abbr": "",
  "desc": "비용이 어느 코스트센터·오더에 귀속되는지 찍어주는 정보다. FI 전표 한 줄에 CO 귀속 정보를 함께 넣는 것이 계정지정이다.",
  "items": [],
  "terms": [
   "cost-center",
   "internal-order",
   "cost-element"
  ]
 },
 {
  "id": "additional-account-assignment",
  "kr": "추가 계정지정",
  "en": "Additional Account Assignment",
  "abbr": "",
  "desc": "기본 계정지정 외에 보조적으로 한 번 더 귀속을 나누는 기능이다. 예를 들어 한 비용을 두 부서에 나눠 보고 싶을 때 쓴다.",
  "items": [],
  "terms": [
   "account-assignment",
   "cost-center"
  ]
 },
 {
  "id": "clearing",
  "kr": "반제",
  "en": "Clearing",
  "abbr": "",
  "desc": "미결항목의 짝을 맞춰 '정리 완료'로 만드는 과정이다. 고객이 외상값을 갚으면, 미결로 남아 있던 송장 항목과 입금 항목을 반제해서 둘 다 미결에서 사라지게 한다.",
  "items": [
   "gl-clear-prep",
   "close-autoclear"
  ],
  "terms": [
   "open-item-management",
   "residual-item",
   "partial-payment",
   "noted-item"
  ]
 },
 {
  "id": "clearing-account",
  "kr": "중간계정",
  "en": "Clearing Account",
  "abbr": "",
  "desc": "돈이나 물건이 잠시 거쳐 가는 계정이다. GR/IR처럼 입고와 송장이 따로 들어올 때, 두 쪽이 맞을 때까지 금액을 임시로 묶어 둔다.",
  "items": [],
  "terms": [
   "gr-ir",
   "clearing",
   "reconciliation-account"
  ]
 },
 {
  "id": "clearing-procedure",
  "kr": "반제절차",
  "en": "Clearing Procedure",
  "abbr": "",
  "desc": "어떤 기준으로 미결항목들의 짝을 찾을지 정한 규칙이다. 금액·지급조건 등이 자동으로 맞으면 시스템이 알아서 반제한다.",
  "items": [
   "gl-clear-prep",
   "close-autoclear"
  ],
  "terms": [
   "clearing",
   "open-item-management"
  ]
 },
 {
  "id": "document",
  "kr": "전표",
  "en": "Document",
  "abbr": "",
  "desc": "SAP에서 일어나는 모든 회계 기록의 기본 단위다. 하나의 전표는 헤더(누가·언제·무슨 거래)와 여러 개의 개별항목(어느 계정에 얼마)으로 이루어진다.",
  "items": [
   "gl-doc-type"
  ],
  "terms": [
   "document-type",
   "document-header",
   "line-item",
   "posting-key"
  ]
 },
 {
  "id": "document-type",
  "kr": "전표유형",
  "en": "Document Type",
  "abbr": "",
  "desc": "전표의 종류를 구분하는 2자리 코드다. 전표유형이 정해지면 번호범위와 전기할 수 있는 계정유형이 자동으로 따라온다. (예: DR 고객송장, KR 공급처송장)",
  "items": [
   "gl-doc-type",
   "gl-doc-number"
  ],
  "terms": [
   "document",
   "document-number",
   "account-type"
  ]
 },
 {
  "id": "document-header",
  "kr": "전표헤더",
  "en": "Document Header",
  "abbr": "",
  "desc": "전표의 머리 부분이다. 전표일자·전기일자·전표유형·통화처럼 전표 전체에 공통으로 적용되는 정보가 들어간다.",
  "items": [],
  "terms": [
   "document",
   "line-item",
   "document-date",
   "document-currency"
  ]
 },
 {
  "id": "document-number",
  "kr": "전표번호",
  "en": "Document Number",
  "abbr": "",
  "desc": "전표마다 붙는 고유 번호다. 번호범위 설정에서 전표유형별로 번호 구간을 미리 정해 두면, 전기할 때 자동으로 채번된다.",
  "items": [
   "gl-doc-number"
  ],
  "terms": [
   "document",
   "document-type",
   "number-range"
  ]
 },
 {
  "id": "document-currency",
  "kr": "전표통화",
  "en": "Document Currency",
  "abbr": "",
  "desc": "전표에 찍힌 원래 통화다. 달러로 거래했다면 전표통화는 USD, 회사코드의 현지통화(KRW) 금액은 환율을 적용해 따로 계산된다.",
  "items": [],
  "terms": [
   "document",
   "local-currency",
   "foreign-currency-valuation"
  ]
 },
 {
  "id": "document-date",
  "kr": "증빙일자",
  "en": "Document Date",
  "abbr": "",
  "desc": "실제 거래가 일어난 날짜, 즉 증빙서류에 적힌 날짜다. 전기를 어느 회계기간에 넣을지 정하는 전기일자와는 다른 개념이다.",
  "items": [],
  "terms": [
   "document",
   "document-header",
   "posting-period"
  ]
 },
 {
  "id": "document-principle",
  "kr": "전표생성원칙",
  "en": "Document Principle",
  "abbr": "",
  "desc": "전표를 만들 때 지켜야 하는 기본 규칙이다. 차변 합계와 대변 합계가 맞아야 하고, 한 전표는 하나의 회사코드에만 속한다는 식의 원칙들이다.",
  "items": [],
  "terms": [
   "document",
   "line-item",
   "company-code"
  ]
 },
 {
  "id": "change-document",
  "kr": "변경문서",
  "en": "Change Document",
  "abbr": "",
  "desc": "마스터데이터나 전표가 바뀌면 누가·언제·무엇을 바꿨는지 자동으로 남기는 변경 이력이다. 감사 추적의 근거가 된다.",
  "items": [
   "gl-doc-change"
  ],
  "terms": [
   "document",
   "business-partner"
  ]
 },
 {
  "id": "field-status",
  "kr": "필드상태",
  "en": "Field Status",
  "abbr": "",
  "desc": "전표 입력 화면에서 각 필드를 필수·선택·숨김 중 어떻게 보여줄지 정하는 설정이다. 계정그룹과 전기키의 조합으로 최종 필드상태가 결정된다.",
  "items": [
   "gl-field-status",
   "gl-field-status-assign"
  ],
  "terms": [
   "account-group",
   "posting-key",
   "gl-account"
  ]
 },
 {
  "id": "posting-key",
  "kr": "전기키",
  "en": "Posting Key",
  "abbr": "",
  "desc": "전표 개별항목 한 줄의 성격을 정하는 2자리 숫자다. 차변인지 대변인지, 어떤 계정유형에 전기하는지, 입력 화면 레이아웃은 무엇인지가 전기키 하나로 결정된다.",
  "items": [
   "gl-posting-key"
  ],
  "terms": [
   "document",
   "line-item",
   "account-type",
   "field-status"
  ]
 },
 {
  "id": "posting-period",
  "kr": "전기기간",
  "en": "Posting Period",
  "abbr": "",
  "desc": "전기를 허용하는 회계기간이다. 월마감이 끝나면 지난 기간을 닫아 더 이상 전기가 안 되게 막는다. 보통 당월과 다음 달만 열어 둔다.",
  "items": [
   "gl-posting-period",
   "gl-pp-variant"
  ],
  "terms": [
   "document-date",
   "fiscal-year-variant"
  ]
 },
 {
  "id": "ledger",
  "kr": "원장",
  "en": "Ledger",
  "abbr": "",
  "desc": "전표들을 모아 두는 장부 단위다. S/4HANA에서는 회계기준별로 원장을 여러 개 둘 수 있고(예: K-IFRS용, 세무용), 전표는 원장별로 따로 집계된다.",
  "items": [
   "gl-ledger",
   "gl-ledger-group"
  ],
  "terms": [
   "general-ledger",
   "ledger-group",
   "universal-journal"
  ]
 },
 {
  "id": "general-ledger",
  "kr": "총계정원장",
  "en": "General Ledger",
  "abbr": "G/L",
  "desc": "모든 회계 거래가 최종으로 모이는 대표 장부다. 고객·공급처 같은 보조원장의 합계가 조정계정을 통해 G/L로 자동 반영된다.",
  "items": [
   "gl-ledger"
  ],
  "terms": [
   "ledger",
   "sub-ledger",
   "reconciliation-account",
   "gl-account"
  ]
 },
 {
  "id": "line-item",
  "kr": "개별항목",
  "en": "Line Item",
  "abbr": "",
  "desc": "전표를 구성하는 한 줄 한 줄의明細이다. 각 개별항목에는 계정·금액·전기키·텍스트 같은 정보가 들어간다.",
  "items": [],
  "terms": [
   "document",
   "posting-key",
   "document-header"
  ]
 },
 {
  "id": "open-item-management",
  "kr": "미결항목관리",
  "en": "Open Item Management",
  "abbr": "",
  "desc": "나중에 반제로 정리해야 하는 항목들을 '미결' 상태로 따로 관리하는 방식이다. 고객·공급처 계정과 GR/IR 계정이 대표적이며, 미결항목이 있는 계정은 잔액이 아니라 미결 합계로 관리된다.",
  "items": [],
  "terms": [
   "clearing",
   "reconciliation-account",
   "gr-ir",
   "noted-item"
  ]
 },
 {
  "id": "reconciliation-account",
  "kr": "조정계정",
  "en": "Reconciliation Account",
  "abbr": "",
  "desc": "보조원장(고객·공급처·자산)의 합계를 G/L에 자동으로 반영해주는 연결 계정이다. 이 계정에는 직접 전표를 칠 수 없고, 보조원장에서 전기가 일어날 때만 자동 반영된다.",
  "items": [
   "ap-recon",
   "ar-recon"
  ],
  "terms": [
   "sub-ledger",
   "general-ledger",
   "account-type"
  ]
 },
 {
  "id": "special-gl-indicator",
  "kr": "특수G/L표시자",
  "en": "Special G/L Indicator",
  "abbr": "",
  "desc": "일반 거래와 성격이 다른 거래(선금·어음 등)를 구분하는 한 자리 코드다. 같은 고객이라도 선금은 별도 조정계정에 쌓이게 하려는 장치다.",
  "items": [],
  "terms": [
   "special-gl-account",
   "down-payment",
   "reconciliation-account"
  ]
 },
 {
  "id": "special-gl-account",
  "kr": "특수G/L계정",
  "en": "Special G/L Account",
  "abbr": "",
  "desc": "선금·어음처럼 일반 채권·채무와 따로 보고 싶은 거래를 모아 두는 별도 조정계정이다. 특수G/L표시자와 세트로 움직인다.",
  "items": [],
  "terms": [
   "special-gl-indicator",
   "down-payment",
   "reconciliation-account"
  ]
 },
 {
  "id": "noted-item",
  "kr": "비망항목",
  "en": "Noted Item",
  "abbr": "",
  "desc": "참고용으로만 적어 두는 항목이다. 금액 집계에는 영향을 주지 않고, 나중에 실제 전표가 들어오면 연결해서 볼 수 있다.",
  "items": [],
  "terms": [
   "open-item-management",
   "clearing",
   "line-item"
  ]
 },
 {
  "id": "residual-item",
  "kr": "잔여항목",
  "en": "Residual Item",
  "abbr": "",
  "desc": "반제할 때 금액이 다 맞지 않으면, 차액을 새 미결항목으로 남기는 방식이다. 예를 들어 100 중 70만 입금되면 70은 반제되고 30이 잔여항목으로 남는다.",
  "items": [],
  "terms": [
   "clearing",
   "partial-payment",
   "open-item-management"
  ]
 },
 {
  "id": "down-payment",
  "kr": "선금",
  "en": "Down Payment",
  "abbr": "",
  "desc": "물건·서비스를 받기 전에 미리 주는 돈이다. SAP에서는 특수G/L로 따로 관리해서 일반 외상잔액과 섞이지 않게 한다.",
  "items": [],
  "terms": [
   "down-payment-request",
   "special-gl-indicator",
   "special-gl-account"
  ]
 },
 {
  "id": "down-payment-request",
  "kr": "선금요청",
  "en": "Down Payment Request",
  "abbr": "",
  "desc": "선금을 달라고 요청하는 문서다. 실제 돈이 오가기 전 단계라 비망항목으로 관리되며, 입금이 되면 본 선금으로 연결된다.",
  "items": [],
  "terms": [
   "down-payment",
   "noted-item"
  ]
 },
 {
  "id": "payment-method",
  "kr": "지급방법",
  "en": "Payment Method",
  "abbr": "",
  "desc": "대금을 어떤 수단으로 치를지 정하는 코드다. 계좌이체·수표·어음 등이 있으며, 국가별·회사코드별로 따로 설정한다. 자동지급 실행의 기준이 된다.",
  "items": [
   "ap-paymethod-country",
   "ap-paymethod-ccode",
   "ap-bank-determ"
  ],
  "terms": [
   "automatic-payment",
   "house-bank",
   "payment-block"
  ]
 },
 {
  "id": "payment-block",
  "kr": "지급보류",
  "en": "Payment Block",
  "abbr": "",
  "desc": "지급을 잠시 막아 두는 장치다. 송장에 이의가 있거나 확인이 필요할 때 보류 사유를 걸어 두면, 자동지급 대상에서 제외된다.",
  "items": [
   "ap-payblock"
  ],
  "terms": [
   "payment-method",
   "automatic-payment"
  ]
 },
 {
  "id": "payment-advice",
  "kr": "지급통지서",
  "en": "Payment Advice",
  "abbr": "",
  "desc": "돈을 보낼 때 '이 돈은 어떤 송장들에 대한 지급이다'라고 알려주는 명세서다. 받는 쪽에서 반제할 때 대조 기준으로 쓴다.",
  "items": [],
  "terms": [
   "payment-method",
   "clearing"
  ]
 },
 {
  "id": "foreign-currency-valuation",
  "kr": "외화평가",
  "en": "Foreign Currency Valuation",
  "abbr": "",
  "desc": "월말에 외화로 된 채권·채무를 마감 환율로 다시 평가하는 작업이다. 환율 차이만큼 평가손익이 생기며, 다음 달 초에 자동으로 역분개된다.",
  "items": [
   "close-fxval"
  ],
  "terms": [
   "document-currency",
   "local-currency",
   "reversal"
  ]
 },
 {
  "id": "local-currency",
  "kr": "현지통화",
  "en": "Local Currency",
  "abbr": "",
  "desc": "회사코드가 쓰는 자국 통화다. 전표통화가 달러여도 회사코드 통화가 원화면, 원화 금액이 함께 계산되어 장부에 남는다.",
  "items": [],
  "terms": [
   "document-currency",
   "foreign-currency-valuation",
   "company-code"
  ]
 },
 {
  "id": "reversal",
  "kr": "역분개",
  "en": "Reversal",
  "abbr": "",
  "desc": "이미 친 전표를 뒤집어서 없던 일로 만드는 것이다. 원전표를 삭제하는 게 아니라 반대 전표를 쳐서 상쇄하므로 감사 추적이 남는다.",
  "items": [
   "gl-reversal-reason"
  ],
  "terms": [
   "document",
   "reason-code",
   "foreign-currency-valuation"
  ]
 },
 {
  "id": "sample-account",
  "kr": "샘플계정",
  "en": "Sample Account",
  "abbr": "",
  "desc": "자주 쓰는 계정의 입력 패턴을 미리 저장해 둔 틀이다. 새 계정을 만들 때 샘플계정을 참조하면 필드값을 자동으로 가져올 수 있다.",
  "items": [
   "gl-acct-group"
  ],
  "terms": [
   "gl-account",
   "sample-document"
  ]
 },
 {
  "id": "sample-document",
  "kr": "샘플전표",
  "en": "Sample Document",
  "abbr": "",
  "desc": "자주 치는 전표의 양식을 저장해 둔 것이다. 실제 전기되지는 않고, 필요할 때 불러와 금액·날짜만 바꿔서 쓴다.",
  "items": [],
  "terms": [
   "document",
   "recurring-entry",
   "sample-account"
  ]
 },
 {
  "id": "recurring-entry",
  "kr": "정기전표",
  "en": "Recurring Entry",
  "abbr": "",
  "desc": "임대료처럼 매달 같은 내용으로 치는 전표를 미리 등록해 두는 기능이다. 실행일에 시스템이 자동으로 전표를 생성해준다.",
  "items": [
   "close-recurr"
  ],
  "terms": [
   "document",
   "sample-document"
  ]
 },
 {
  "id": "reference-document",
  "kr": "참조전표",
  "en": "Reference Document",
  "abbr": "",
  "desc": "새 전표를 칠 때 복사 원본으로 삼는 기존 전표다. 참조하면 계정·금액 패턴을 그대로 가져오면서 새 전표번호로 전기된다.",
  "items": [],
  "terms": [
   "document",
   "sample-document"
  ]
 },
 {
  "id": "sub-ledger",
  "kr": "보조원장",
  "en": "Sub-ledger",
  "abbr": "",
  "desc": "고객·공급처·자산처럼 낱개 단위로 자세히 관리하는 보조 장부다. 보조원장의 합계는 조정계정을 통해 총계정원장에 자동 반영된다.",
  "items": [],
  "terms": [
   "reconciliation-account",
   "general-ledger",
   "account-type",
   "business-partner"
  ]
 },
 {
  "id": "organizational-structure",
  "kr": "조직구조",
  "en": "Organizational Structure",
  "abbr": "",
  "desc": "회사·회사코드·사업영역 같은 SAP 조직 단위들의 계층 관계다. 전표가 어느 단위로 끊어지고 집계되는지가 조직구조에서 정해진다.",
  "items": [
   "org-company",
   "org-company-code",
   "org-business-area"
  ],
  "terms": [
   "company",
   "company-code",
   "business-area"
  ]
 },
 {
  "id": "cash-discount",
  "kr": "현금할인",
  "en": "Cash Discount",
  "abbr": "",
  "desc": "빨리 갚으면 깎아주는 할인이다. 지급조건에 할인율과 할인 기간을 넣어 두면, 자동지급이나 수동 지급 때 할인액을 자동 계산해준다.",
  "items": [
   "ar-cashdisc",
   "ap-payterms"
  ],
  "terms": [
   "payment-terms",
   "automatic-payment"
  ]
 },
 {
  "id": "partial-payment",
  "kr": "부분지급",
  "en": "Partial Payment",
  "abbr": "",
  "desc": "미결항목 금액의 일부만 먼저 지급하는 것이다. 원래 항목은 미결로 남고 지급액만큼 별도 항목이 생긴다. 잔여항목 방식과 달리 원 항목을 쪼개지 않는다.",
  "items": [],
  "terms": [
   "clearing",
   "residual-item",
   "open-item-management"
  ]
 },
 {
  "id": "gl-account",
  "kr": "G/L계정",
  "en": "G/L Account",
  "abbr": "",
  "desc": "계정과목표 안에 실제로 전표가 쳐지는 낱개의 계정이다. 계정그룹이 이 계정의 입력 화면 모양을 정하고, 조정계정으로 지정되면 직접 전기를 막는다.",
  "items": [
   "gl-acct-group",
   "gl-coa",
   "gl-coa-assign"
  ],
  "terms": [
   "chart-of-accounts",
   "account-group",
   "reconciliation-account",
   "field-status"
  ]
 },
 {
  "id": "business-area",
  "kr": "사업영역",
  "en": "Business Area",
  "abbr": "",
  "desc": "회사코드 안에서 사업 부문별로 재무제표를 나눠 보고 싶을 때 쓰는 조직 단위다. 전표 개별항목에 사업영역을 찍어 두면 부문별 손익을 뽑을 수 있다.",
  "items": [
   "org-business-area"
  ],
  "terms": [
   "organizational-structure",
   "company-code",
   "document-splitting"
  ]
 },
 {
  "id": "functional-area",
  "kr": "기능영역",
  "en": "Functional Area",
  "abbr": "",
  "desc": "비용을 기능별(제조·판매·관리)로 나눠 표시하기 위한 구분자다. 원가요소를 기능영역에 연결해 두면 손익계산서를 기능별로 그릴 수 있다.",
  "items": [
   "org-functional-area"
  ],
  "terms": [
   "cost-element",
   "organizational-structure"
  ]
 },
 {
  "id": "controlling-area",
  "kr": "관리회계영역",
  "en": "Controlling Area",
  "abbr": "CO Area",
  "desc": "관리회계(CO)의 최상위 조직 단위다. 여러 회사코드를 하나의 관리회계영역에 묶어야 회사 간 원가 배부와 내부 정산이 가능하다.",
  "items": [
   "co-area",
   "co-ccassign"
  ],
  "terms": [
   "company-code",
   "cost-center",
   "profit-center",
   "organizational-structure"
  ]
 },
 {
  "id": "credit-control-area",
  "kr": "신용관리영역",
  "en": "Credit Control Area",
  "abbr": "",
  "desc": "고객 신용한도를 관리하는 조직 단위다. 여러 회사코드를 묶어 한 고객의 총 여신을 한눈에 보고 한도를 통제한다.",
  "items": [
   "org-credit-area",
   "ar-credit"
  ],
  "terms": [
   "credit-management",
   "company-code",
   "business-partner"
  ]
 },
 {
  "id": "funds-management-area",
  "kr": "자금관리영역",
  "en": "Funds Management Area",
  "abbr": "FM Area",
  "desc": "예산과 자금 집행을 통제하는 조직 단위다. 회사코드를 자금관리영역에 연결하면 부서별 예산 대비 집행 현황을 관리할 수 있다.",
  "items": [
   "org-fm-area",
   "org-fm-ccode"
  ],
  "terms": [
   "company-code",
   "organizational-structure"
  ]
 },
 {
  "id": "fiscal-year-variant",
  "kr": "회계연도변형",
  "en": "Fiscal Year Variant",
  "abbr": "FYV",
  "desc": "회계연도를 몇 개 기간으로 나눌지, 월과 기간이 어떻게 대응되는지 정한 달력 틀이다. 회사코드는 반드시 하나의 회계연도변형에 연결되어야 한다.",
  "items": [
   "gl-fiscal-year",
   "gl-fiscal-assign"
  ],
  "terms": [
   "posting-period",
   "company-code"
  ]
 },
 {
  "id": "ledger-group",
  "kr": "원장그룹",
  "en": "Ledger Group",
  "abbr": "",
  "desc": "여러 원장을 묶어 한 번에 전표 치는 단위다. 회계기준별로 원장을 나눴을 때, 이 그룹에 전기하면 속한 원장들에 동시에 반영된다.",
  "items": [
   "gl-ledger-group",
   "gl-acct-principle"
  ],
  "terms": [
   "ledger",
   "universal-journal"
  ]
 },
 {
  "id": "document-splitting",
  "kr": "전표분할",
  "en": "Document Splitting",
  "abbr": "",
  "desc": "전표 한 장을 세그먼트(사업영역 등)별로 자동 쪼개서 균형을 맞추는 기능이다. 덕분에 사업영역별 재무제표가 전표 단에서부터 맞아떨어진다.",
  "items": [
   "gl-docsplit"
  ],
  "terms": [
   "document",
   "business-area",
   "line-item"
  ]
 },
 {
  "id": "tolerance-group",
  "kr": "허용오차그룹",
  "en": "Tolerance Group",
  "abbr": "",
  "desc": "전표 입력 담당자별로 허용되는 차액 한도를 묶은 그룹이다. 한도를 넘는 전표는 전기되지 않고, 담당자 권한에 따라 결재 절차를 탄다.",
  "items": [
   "gl-tolerance"
  ],
  "terms": [
   "document",
   "cash-discount"
  ]
 },
 {
  "id": "dunning",
  "kr": "독촉",
  "en": "Dunning",
  "abbr": "",
  "desc": "외상값을 안 갚는 고객에게 단계별로 독촉장을 보내는 기능이다. 독촉 절차에 따라 독촉장을 몇 차까지 보낼지, 이자는 어떻게 붙일지가 정해진다.",
  "items": [
   "ar-dunning"
  ],
  "terms": [
   "business-partner",
   "payment-terms",
   "open-item-management"
  ]
 },
 {
  "id": "house-bank",
  "kr": "하우스뱅크",
  "en": "House Bank",
  "abbr": "",
  "desc": "회사가 실제로 거래하는 은행을 SAP 안에 등록한 것이다. 회사코드별로 하우스뱅크와 계좌를 연결해 두면 자동지급이 이 계좌에서 나간다.",
  "items": [
   "ap-housebank",
   "ap-bank-determ"
  ],
  "terms": [
   "bank-master",
   "payment-method",
   "automatic-payment"
  ]
 },
 {
  "id": "bank-master",
  "kr": "은행마스터",
  "en": "Bank Master",
  "abbr": "",
  "desc": "은행 코드·지점·주소 같은 은행 기본 정보를 등록한 마스터다. 하우스뱅크나 거래처 은행계좌를 만들 때 이 마스터를 참조한다.",
  "items": [
   "bank-master",
   "bank-glstruct"
  ],
  "terms": [
   "house-bank",
   "business-partner"
  ]
 },
 {
  "id": "payment-terms",
  "kr": "지급조건",
  "en": "Payment Terms",
  "abbr": "",
  "desc": "언제까지 갚으면 되고, 일찍 갚으면 얼마나 깎아주는지 정한 조건 코드다. 송장에 지급조건이 들어가면 만기일과 현금할인이 자동 계산된다.",
  "items": [
   "ap-payterms",
   "ar-cashdisc"
  ],
  "terms": [
   "cash-discount",
   "dunning",
   "document"
  ]
 },
 {
  "id": "automatic-payment",
  "kr": "자동지급",
  "en": "Automatic Payment Program",
  "abbr": "F110",
  "desc": "만기가 된 미결항목을 모아서 한 번에 지급 실행하는 배치 프로그램이다. 지급방법·하우스뱅크·지급보류를 보고 지급 파일을 만들어 은행에 보낸다.",
  "items": [
   "ap-paymethod-ccode",
   "ap-bank-determ",
   "ap-payblock"
  ],
  "terms": [
   "payment-method",
   "house-bank",
   "payment-block",
   "clearing"
  ]
 },
 {
  "id": "number-range",
  "kr": "번호범위",
  "en": "Number Range",
  "abbr": "",
  "desc": "전표번호·거래처번호처럼 시스템이 자동으로 매기는 번호의 구간 정의다. 전표유형별, 계정그룹별로 번호 구간을 나눠 관리한다.",
  "items": [
   "gl-doc-number",
   "ap-vendor-num",
   "ar-cust-num",
   "aa-numrange",
   "ap-bp-num"
  ],
  "terms": [
   "document-number",
   "document-type",
   "business-partner"
  ]
 },
 {
  "id": "obyc",
  "kr": "자동계정결정",
  "en": "Automatic Account Determination",
  "abbr": "OBYC",
  "desc": "자재 입고·출고 같은 물류 거래가 일어날 때, 어떤 G/L계정에 전기할지를 거래키별로 자동 찾아주는 설정이다. MM과 FI를 잇는 핵심 연결고리다.",
  "items": [
   "xmod-obyc",
   "xmod-griradj"
  ],
  "terms": [
   "gr-ir",
   "material-ledger",
   "gl-account"
  ]
 },
 {
  "id": "vkoa",
  "kr": "수익계정결정",
  "en": "Revenue Account Determination",
  "abbr": "VKOA",
  "desc": "판매 청구가 일어날 때 매출을 어떤 G/L계정에 잡을지 정하는 설정이다. 판매조직·조건유형 같은 SD 정보와 FI 수익계정을 연결한다.",
  "items": [
   "xmod-vkoa",
   "xmod-copamap"
  ],
  "terms": [
   "obyc",
   "gl-account"
  ]
 },
 {
  "id": "cvi",
  "kr": "고객·공급처 통합",
  "en": "Customer/Vendor Integration",
  "abbr": "CVI",
  "desc": "S/4HANA에서 고객과 공급처 마스터를 비즈니스 파트너(BP)로 통합 관리하는 구조다. BP를 만들면 고객·공급처 역할이 자동으로 연결된다.",
  "items": [
   "ap-cvi"
  ],
  "terms": [
   "business-partner",
   "sub-ledger"
  ]
 },
 {
  "id": "business-partner",
  "kr": "비즈니스 파트너",
  "en": "Business Partner",
  "abbr": "BP",
  "desc": "S/4HANA에서 거래처를 통합 관리하는 마스터 개념이다. 고객·공급처가 따로 놀던 과거와 달리, 하나의 BP에 여러 역할을 부여해 함께 관리한다.",
  "items": [
   "ap-bp-role",
   "ap-bp-num",
   "ap-cvi",
   "ap-vendor-group",
   "ar-cust-group"
  ],
  "terms": [
   "cvi",
   "sub-ledger",
   "account-type",
   "number-range"
  ]
 },
 {
  "id": "universal-journal",
  "kr": "유니버설 저널",
  "en": "Universal Journal",
  "abbr": "ACDOCA",
  "desc": "S/4HANA의 단일 회계 장부 테이블이다. FI·CO 전표가 모두 여기에 한 줄로 쌓여서, 재무와 관리회계가 같은 숫자를 보게 된다. 과거의 총계정·보조계정 분리 구조를 대체한다.",
  "items": [
   "gl-ledger"
  ],
  "terms": [
   "ledger",
   "general-ledger",
   "document",
   "cost-element"
  ]
 },
 {
  "id": "material-ledger",
  "kr": "자재원장",
  "en": "Material Ledger",
  "abbr": "ML",
  "desc": "자재의 수량·금액을 다통화로 관리하는 원장이다. S/4HANA에서는 사실상 필수이며, 실제원가 계산과 다통화 평가의 기준이 된다.",
  "items": [
   "xmod-ml"
  ],
  "terms": [
   "obyc",
   "gr-ir",
   "sub-ledger"
  ]
 },
 {
  "id": "gr-ir",
  "kr": "GR/IR",
  "en": "GR/IR Clearing",
  "abbr": "",
  "desc": "입고(GR)는 됐는데 송장(IR)이 안 온 상태를 묶어 두는 중간계정이다. 입고와 송장이 모두 들어오면 반제되어 잔액이 0이 된다. 월말에 미결 잔액을 꼭 확인해야 한다.",
  "items": [
   "xmod-griradj",
   "close-grir"
  ],
  "terms": [
   "clearing-account",
   "open-item-management",
   "obyc"
  ]
 },
 {
  "id": "depreciation-area",
  "kr": "감가상각영역",
  "en": "Depreciation Area",
  "abbr": "",
  "desc": "하나의 자산에 대해 목적별(회계용·세무용 등)로 감가상각을 따로 계산하는 영역이다. 영역마다 감가상각키와 내용연수를 다르게 둘 수 있다.",
  "items": [
   "aa-deparea"
  ],
  "terms": [
   "depreciation-key",
   "chart-of-depreciation",
   "asset-class"
  ]
 },
 {
  "id": "depreciation-key",
  "kr": "감가상각키",
  "en": "Depreciation Key",
  "abbr": "",
  "desc": "감가상각을 어떤 방법(정액·정률 등)으로, 몇 년에 걸쳐 할지 정한 코드다. 감가상각영역마다 키를 지정해 계산 방식을 정한다.",
  "items": [
   "aa-depkey"
  ],
  "terms": [
   "depreciation-area",
   "asset-class"
  ]
 },
 {
  "id": "asset-class",
  "kr": "자산클래스",
  "en": "Asset Class",
  "abbr": "",
  "desc": "비슷한 자산들을 묶는 분류 틀이다. 자산클래스가 정해지면 번호범위와 전기될 G/L계정(계정결정)이 자동으로 따라온다.",
  "items": [
   "aa-class",
   "aa-acctdet",
   "aa-numrange"
  ],
  "terms": [
   "chart-of-depreciation",
   "depreciation-area",
   "gl-account",
   "number-range"
  ]
 },
 {
  "id": "chart-of-depreciation",
  "kr": "감가상각표",
  "en": "Chart of Depreciation",
  "abbr": "",
  "desc": "감가상각영역들의 묶음 정의다. 회사코드는 하나의 감가상각표에 연결되며, 보통 국가별 회계·세무 요구에 맞춰 만든다.",
  "items": [
   "aa-depchart",
   "aa-depchart-assign"
  ],
  "terms": [
   "depreciation-area",
   "asset-class",
   "company-code"
  ]
 },
 {
  "id": "tax-code",
  "kr": "세금코드",
  "en": "Tax Code",
  "abbr": "",
  "desc": "전표에 붙는 부가세 유형 코드다. 세금코드가 정해지면 세율과 전기될 세금계정이 자동으로 결정된다. 과세·영세·비과세를 코드로 구분한다.",
  "items": [
   "tax-code",
   "tax-account",
   "tax-procedure"
  ],
  "terms": [
   "gl-account",
   "document"
  ]
 },
 {
  "id": "withholding-tax",
  "kr": "원천세",
  "en": "Withholding Tax",
  "abbr": "",
  "desc": "대금을 줄 때 세금을 미리 떼고 내는 제도다. SAP에서는 원천세 유형·코드를 설정해 지급 실행 시점에 세액을 자동 계산하고 별도 계정에 전기한다.",
  "items": [
   "wth-type",
   "wth-account",
   "wth-section"
  ],
  "terms": [
   "automatic-payment",
   "tax-code"
  ]
 },
 {
  "id": "cost-center",
  "kr": "코스트센터",
  "en": "Cost Center",
  "abbr": "",
  "desc": "비용이 어디서 발생했는지 모으는 관리 단위다. 부서·팀별로 코스트센터를 만들고 표준계층으로 묶어, 부서별 실적을 집계한다.",
  "items": [
   "co-ccenter"
  ],
  "terms": [
   "controlling-area",
   "cost-element",
   "internal-order",
   "account-assignment"
  ]
 },
 {
  "id": "cost-element",
  "kr": "원가요소",
  "en": "Cost Element",
  "abbr": "",
  "desc": "CO에서 비용의 성격을 구분하는 코드다. 1차 원가요소는 G/L계정과 1:1로 연결되어, FI 전표가 CO로 넘어올 때 이 코드가 함께 간다.",
  "items": [
   "co-celem"
  ],
  "terms": [
   "gl-account",
   "cost-center",
   "universal-journal"
  ]
 },
 {
  "id": "internal-order",
  "kr": "내부오더",
  "en": "Internal Order",
  "abbr": "",
  "desc": "특정 프로젝트·행사처럼 한시적인 비용을 따로 모아보는 관리 단위다. 실제 발생한 비용을 오더에 모았다가 나중에 정산으로 배분한다.",
  "items": [
   "co-order",
   "co-settle"
  ],
  "terms": [
   "cost-center",
   "settlement",
   "account-assignment"
  ]
 },
 {
  "id": "profit-center",
  "kr": "손익센터",
  "en": "Profit Center",
  "abbr": "",
  "desc": "수익과 비용을 함께 모아 손익을 내는 관리 단위다. 사업부·제품군별로 손익센터를 두면 부문별 손익계산서를 뽑을 수 있다.",
  "items": [
   "co-prctr"
  ],
  "terms": [
   "controlling-area",
   "cost-center",
   "document-splitting"
  ]
 },
 {
  "id": "activity-type",
  "kr": "활동유형",
  "en": "Activity Type",
  "abbr": "",
  "desc": "코스트센터가 제공하는 활동(예: 기계시간, 작업시간)의 단위다. 활동단가를 정해 두면 실제 활동량만큼 비용을 배부할 수 있다.",
  "items": [
   "co-acttype"
  ],
  "terms": [
   "cost-center",
   "cost-element"
  ]
 },
 {
  "id": "settlement",
  "kr": "정산",
  "en": "Settlement",
  "abbr": "",
  "desc": "내부오더 등에 모인 비용을 최종 귀속처(코스트센터·자산 등)로 배분하는 작업이다. 정산 프로파일에 배분 규칙과 받는 쪽을 미리 정해 둔다.",
  "items": [
   "co-settle",
   "aa-settlement"
  ],
  "terms": [
   "internal-order",
   "cost-center",
   "account-assignment"
  ]
 },
 {
  "id": "operating-concern",
  "kr": "영업관리영역",
  "en": "Operating Concern",
  "abbr": "",
  "desc": "수익성 분석(CO-PA)의 최상위 구조다. 어떤 특성(제품·고객·지역)과 값필드(매출·원가)로 수익성을 볼지 여기서 정의한다.",
  "items": [
   "co-opcon"
  ],
  "terms": [
   "profitability-analysis",
   "profit-center"
  ]
 },
 {
  "id": "profitability-analysis",
  "kr": "수익성분석",
  "en": "Profitability Analysis",
  "abbr": "CO-PA",
  "desc": "제품·고객·지역별로 '어디서 돈을 벌었는지'를 분석하는 CO 모듈이다. S/4HANA에서는 마진 분석 방식으로 SD 청구 데이터가 실시간 넘어온다.",
  "items": [
   "xmod-copamap"
  ],
  "terms": [
   "operating-concern",
   "profit-center",
   "vkoa"
  ]
 },
 {
  "id": "accrual-engine",
  "kr": "발생주의엔진",
  "en": "Accrual Engine",
  "abbr": "",
  "desc": "아직 송장이 안 왔지만 비용이 발생한 항목을 월말에 자동으로 계상해주는 기능이다. 다음 달에 실제 송장이 오면 역분개로 정리된다.",
  "items": [
   "close-accrual"
  ],
  "terms": [
   "reversal",
   "document"
  ]
 },
 {
  "id": "closing-cockpit",
  "kr": "결산콕핏",
  "en": "Financial Closing Cockpit",
  "abbr": "FCLOS",
  "desc": "월말·연말 결산 작업들을 한 화면에서 순서대로 실행·모니터링하는 도구다. 작업 간 의존성을 정해 두면 순서대로 자동 실행된다.",
  "items": [
   "close-cockpit",
   "close-jobs"
  ],
  "terms": [
   "balance-carryforward",
   "foreign-currency-valuation",
   "automatic-payment"
  ]
 },
 {
  "id": "balance-carryforward",
  "kr": "잔액이월",
  "en": "Balance Carryforward",
  "abbr": "",
  "desc": "연도가 바뀌면 전년도 잔액을 새 연도로 넘기는 작업이다. G/L잔액·미결항목·자산 등 영역별로 이월 프로그램이 따로 있다.",
  "items": [
   "close-carryfwd",
   "aa-yearend"
  ],
  "terms": [
   "closing-cockpit",
   "fiscal-year-variant"
  ]
 },
 {
  "id": "intercompany",
  "kr": "회사간거래",
  "en": "Intercompany Posting",
  "abbr": "",
  "desc": "같은 그룹 내 회사코드끼리 주고받는 거래다. 한쪽이 매출을 치면 다른 쪽에 매입이 생기며, 차액은 회사간 전기 계정으로 자동 맞춰진다.",
  "items": [
   "xmod-interco"
  ],
  "terms": [
   "company-code",
   "company",
   "clearing"
  ]
 },
 {
  "id": "validation",
  "kr": "유효성검사",
  "en": "Validation",
  "abbr": "",
  "desc": "전표가 전기되기 전에 '이런 조합은 안 된다'는 규칙을 검사하는 기능이다. 조건에 안 맞으면 전기를 막고 오류 메시지를 띄운다.",
  "items": [
   "gl-validation"
  ],
  "terms": [
   "substitution",
   "document"
  ]
 },
 {
  "id": "substitution",
  "kr": "대체",
  "en": "Substitution",
  "abbr": "",
  "desc": "전표 입력값을 조건에 따라 자동으로 바꿔치우는 기능이다. 예를 들어 특정 계정에 전기하면 코스트센터를 자동으로 채워준다.",
  "items": [
   "gl-substitution"
  ],
  "terms": [
   "validation",
   "document",
   "cost-center"
  ]
 },
 {
  "id": "negative-posting",
  "kr": "음수전기",
  "en": "Negative Posting",
  "abbr": "",
  "desc": "금액을 마이너스로 직접 치는 전기 방식이다. 허용해 두면 차·대변을 뒤집지 않고도 음수 금액으로 조정 전표를 칠 수 있다.",
  "items": [
   "gl-negative-posting"
  ],
  "terms": [
   "document",
   "posting-key",
   "reversal"
  ]
 },
 {
  "id": "credit-management",
  "kr": "신용관리",
  "en": "Credit Management",
  "abbr": "",
  "desc": "고객별로 신용한도를 정하고 여신을 통제하는 기능이다. 한도를 넘으면 주문·출하를 막거나 승인 절차를 태운다.",
  "items": [
   "ar-credit",
   "org-credit-area",
   "ar-dispute"
  ],
  "terms": [
   "credit-control-area",
   "business-partner",
   "dunning"
  ]
 },
 {
  "id": "dispute-management",
  "kr": "분쟁관리",
  "en": "Dispute Management",
  "abbr": "FSCM",
  "desc": "송장에 이의가 제기된 건을 별도 케이스로 관리하는 기능이다. 분쟁 케이스가 열리면 해당 미결항목은 독촉·지급 대상에서 제외된다.",
  "items": [
   "ar-dispute"
  ],
  "terms": [
   "credit-management",
   "dunning",
   "open-item-management"
  ]
 },
 {
  "id": "reason-code",
  "kr": "사유코드",
  "en": "Reason Code",
  "abbr": "",
  "desc": "지급차이나 역분개가 왜 일어났는지 구분하는 코드다. 사유코드별로 차액이 어느 계정으로 가는지가 정해진다.",
  "items": [
   "ar-reason",
   "ar-overunder",
   "gl-reversal-reason"
  ],
  "terms": [
   "reversal",
   "cash-discount"
  ]
 },
 {
  "id": "retained-earnings",
  "kr": "이익잉여금계정",
  "en": "Retained Earnings Account",
  "abbr": "",
  "desc": "손익계정들의 잔액을 연말에 모아 두는 계정이다. 결산 때 수익·비용 계정의 잔액이 이 계정으로 이월되면서 손익계정은 0이 된다.",
  "items": [
   "gl-retained"
  ],
  "terms": [
   "gl-account",
   "balance-carryforward",
   "chart-of-accounts"
  ]
 },
 {
  "id": "fs-version",
  "kr": "재무제표버전",
  "en": "Financial Statement Version",
  "abbr": "FSV",
  "desc": "G/L계정들을 재무제표 양식에 맞게 트리 구조로 묶어 둔 버전이다. 같은 계정과목표라도 용도별로 다른 재무제표 모양을 만들 수 있다.",
  "items": [
   "gl-fsver"
  ],
  "terms": [
   "chart-of-accounts",
   "gl-account",
   "general-ledger"
  ]
 }
];
