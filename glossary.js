const GLOSSARY = [
 {
  "id": "company-code",
  "kr": "회사코드",
  "en": "Company Code",
  "abbr": "",
  "desc": "재무회계를 독립적으로 결산할 수 있는 가장 작은 조직 단위. 전표가 이 단위로 끊어지고, 재무제표도 회사코드별로 나온다.",
  "area": "org",
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
  "desc": "여러 회사코드를 묶는 최상위 조직 단위. 연결재무제표의 기준이 된다. 회사 간 거래가 일어나면 전표에 상대 회사(Trading Partner, 거래상대방)를 찍어 두어야 한다. 이 정보가 있어야 연결 결산 때 그룹 내부거래를 찾아내 상계할 수 있다.",
  "area": "org",
  "items": [
   "org-company",
   "org-ccode-company"
  ],
  "terms": [
   "company-code",
   "intercompany"
  ]
 },
 {
  "id": "chart-of-accounts",
  "kr": "계정과목표",
  "en": "Chart of Accounts",
  "abbr": "COA",
  "desc": "G/L 계정들의 전체 목록표. 회사코드는 반드시 하나의 계정과목표에 연결되어야 전표를 칠 수 있다.",
  "area": "org",
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
  "area": "aa",
  "items": [
   "gl-acct-group"
  ],
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
  "area": "gl",
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
  "area": "co",
  "items": [
   "xmod-obyc",
   "xmod-assetpo",
   "co-okb9"
  ],
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
  "area": "gl",
  "items": [
   "xmod-obyc",
   "gl-docsplit"
  ],
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
  "area": "gl",
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
  "area": "gl",
  "items": [
   "gl-clear-prep",
   "close-autoclear"
  ],
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
  "items": [
   "gl-doc-type"
  ],
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
  "items": [
   "gl-docsplit"
  ],
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "desc": "전표를 구성하는 한 줄 한 줄의 명세다. 각 개별항목에는 계정·금액·전기키·텍스트 같은 정보가 들어간다.",
  "area": "gl",
  "items": [
   "gl-posting-key"
  ],
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
  "area": "gl",
  "items": [
   "gl-clear-prep",
   "close-autoclear"
  ],
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
  "area": "ap",
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
  "area": "bank",
  "items": [
   "ap-vendor-group",
   "ar-cust-group"
  ],
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
  "area": "bank",
  "items": [
   "ap-recon",
   "ar-recon"
  ],
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
  "area": "xmod",
  "items": [
   "ar-dispute"
  ],
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
  "area": "gl",
  "items": [
   "close-autoclear",
   "gl-clear-prep"
  ],
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
  "area": "ap",
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
  "area": "xmod",
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
  "area": "ap",
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
  "area": "ap",
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
  "area": "bank",
  "items": [
   "ap-bank-determ",
   "ap-paymethod-ccode"
  ],
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
  "area": "close",
  "items": [
   "close-fxval",
   "gl-fx-diff-acct"
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
  "area": "gl",
  "items": [
   "gl-global-param"
  ],
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
  "items": [
   "close-recurr"
  ],
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
  "area": "close",
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
  "area": "gl",
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
  "area": "aa",
  "items": [
   "ap-recon",
   "ar-recon",
   "aa-acctdet"
  ],
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
  "area": "org",
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
  "area": "ar",
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
  "area": "bank",
  "items": [
   "ar-overunder",
   "ar-cashdisc"
  ],
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
  "area": "gl",
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
  "area": "org",
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
  "area": "org",
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
  "area": "co",
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
  "area": "org",
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
  "area": "org",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "ar",
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
  "area": "ap",
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
  "area": "bank",
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
  "area": "ap",
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
  "area": "ap",
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
  "area": "ap",
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
  "area": "xmod",
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
  "area": "xmod",
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
  "area": "ap",
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
  "area": "ap",
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
  "area": "gl",
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
  "area": "xmod",
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
  "desc": "입고(GR)와 송장(IR)의 시차 때문에 생기는 중간계정이다. 입고는 됐는데 송장이 안 온 경우(GNB)와 송장은 왔는데 입고가 안 된 경우(BNG) 모두 GR/IR에 쌓인다. 입고와 송장이 모두 들어오면 반제되어 잔액이 0이 된다. 월말에 미결 잔액을 꼭 확인해야 한다.",
  "area": "xmod",
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
  "area": "aa",
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
  "area": "aa",
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
  "area": "aa",
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
  "area": "aa",
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
  "area": "tax",
  "items": [
   "tax-code",
   "tax-account",
   "tax-procedure",
   "tax-nontax"
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
  "area": "tax",
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
  "area": "co",
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
  "area": "co",
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
  "area": "co",
  "items": [
   "co-order",
   "co-settle",
   "co-order-budget"
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
  "area": "co",
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
  "area": "co",
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
  "area": "co",
  "items": [
   "co-settle",
   "aa-settlement",
   "co-auc-settle",
   "co-close"
  ],
  "terms": [
   "internal-order",
   "cost-center",
   "account-assignment"
  ]
 },
 {
  "id": "operating-concern",
  "kr": "경영단위",
  "en": "Operating Concern",
  "abbr": "",
  "desc": "수익성 분석(CO-PA)의 최상위 구조다. SAP 표준 번역으로는 영업관리영역이라고도 한다. 어떤 특성(제품·고객·지역)과 값필드(매출·원가)로 수익성을 볼지 여기서 정의한다.",
  "area": "co",
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
  "area": "xmod",
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
  "area": "close",
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
  "area": "close",
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
  "area": "close",
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
  "area": "xmod",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "gl",
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
  "area": "ar",
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
  "area": "ar",
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
  "area": "ar",
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
  "area": "gl",
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
  "area": "gl",
  "items": [
   "gl-fsver"
  ],
  "terms": [
   "chart-of-accounts",
   "gl-account",
   "general-ledger"
  ]
 },
 {
  "id": "material-master",
  "kr": "자재마스터",
  "en": "Material Master",
  "abbr": "",
  "desc": "회사가 사고팔고 만드는 모든 자재의 기준 정보를 모아둔 마스터. 자재번호 하나로 구매·재고·원가·회계가 같은 자재를 가리킨다. S/4HANA에서는 자재유형과 평가클래스로 회계 연결을 정한다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "business-partner",
   "material-ledger"
  ]
 },
 {
  "id": "master-data-management",
  "kr": "마스터데이터 관리",
  "en": "Master Data Management",
  "abbr": "MDM",
  "desc": "계정·자재·거래처처럼 여러 업무에서 함께 쓰는 기준 정보를 하나로 모아 관리하는 활동. 기준 정보가 틀어지면 전표부터 결산까지 다 틀어지므로 처음 만들 때부터 표준을 정해 관리한다.",
  "area": "org",
  "items": [],
  "terms": [
   "business-partner",
   "organizational-structure"
  ]
 },
 {
  "id": "bom",
  "kr": "BOM",
  "en": "Bill of Material",
  "abbr": "",
  "desc": "제품 하나를 만드는 데 들어가는 자재 목록과 수량을 정리한 설계도. MRP가 이 목록을 보고 자재를 발주하고, 표준원가도 이 목록을 기준으로 계산한다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "material-master",
   "standard-cost-valuation"
  ]
 },
 {
  "id": "actual-costing",
  "kr": "실제원가계산",
  "en": "Actual Costing",
  "abbr": "",
  "desc": "표준원가로 미리 잡아둔 원가와 실제로 든 비용의 차이를 계산해 자재와 제품의 진짜 원가를 다시 매기는 결산 절차. 자재원장(ML)과 함께 돌리며 재고와 매출원가를 실제에 가깝게 고친다.",
  "area": "co",
  "items": [
   "xmod-ml",
   "co-ml"
  ],
  "terms": [
   "material-ledger",
   "standard-cost-valuation",
   "price-variance"
  ]
 },
 {
  "id": "actual-activity-price-calculation",
  "kr": "실제작업단가계산",
  "en": "Actual Activity Price Calculation",
  "abbr": "",
  "desc": "계획할 때 정해둔 작업 단가가 아니라, 결산 시점에 모인 실제 비용으로 작업 단가를 다시 계산하는 절차. 이렇게 구한 실제 단가로 생산오더 원가를 확정한다.",
  "area": "co",
  "items": [
   "co-acttype",
   "co-ml"
  ],
  "terms": [
   "activity-type",
   "cost-center",
   "actual-costing"
  ]
 },
 {
  "id": "actual-cost-splitting",
  "kr": "실제원가분할",
  "en": "Actual Cost Splitting",
  "abbr": "",
  "desc": "코스트센터에 뭉쳐 있는 실제 비용을 어떤 생산 활동에 얼마나 썼는지에 따라 나누는 절차. 나눠야 활동별 실제 단가를 구할 수 있어 제조원가 결산의 첫 단추다.",
  "area": "co",
  "items": [
   "xmod-ml",
   "co-ml"
  ],
  "terms": [
   "cost-center",
   "activity-type",
   "actual-activity-price-calculation"
  ]
 },
 {
  "id": "allocation",
  "kr": "배부",
  "en": "Allocation",
  "abbr": "",
  "desc": "어느 부서 것인지 딱 잘라 말하기 어려운 간접비를 정해둔 기준(인원수, 면적 등)으로 나눠 갖는 처리. 코스트센터끼리, 또는 코스트센터에서 손익센터로 비용을 옮길 때 쓴다.",
  "area": "co",
  "items": [
   "co-alloc"
  ],
  "terms": [
   "cost-center",
   "profit-center",
   "settlement"
  ]
 },
 {
  "id": "universal-allocation",
  "kr": "유니버설배부",
  "en": "Universal Allocation",
  "abbr": "",
  "desc": "S/4HANA에서 배부를 ACDOCA 위에서 바로 돌리는 기능. 별도 배부 원장을 거치지 않아 배부 결과가 재무와 관리회계에 동시에 같은 숫자로 보인다.",
  "area": "co",
  "items": [
   "co-alloc"
  ],
  "terms": [
   "allocation",
   "universal-journal",
   "cost-center"
  ]
 },
 {
  "id": "overhead-calculation",
  "kr": "간접비계산",
  "en": "Overhead Calculation",
  "abbr": "",
  "desc": "생산오더에 직접 붙이기 어려운 간접비(간접노무비, 경비 등)를 미리 정한 비율로 얹어주는 결산 단계. 간접비를 얹고 나면 빌려준 쪽 코스트센터 잔액은 0이 된다.",
  "area": "co",
  "items": [
   "co-alloc"
  ],
  "terms": [
   "cost-center",
   "internal-order",
   "production-costing"
  ]
 },
 {
  "id": "cost-center-accounting",
  "kr": "코스트센터회계",
  "en": "Cost Center Accounting",
  "abbr": "CCA",
  "desc": "비용이 어디서 발생했는지 부서(코스트센터) 단위로 모아 관리하는 관리회계. 제조원가 결산은 여기서 시작한다. 비용 집계가 끝나야 배부·간접비·차이분석이 이어진다.",
  "area": "co",
  "items": [
   "co-ccenter",
   "co-alloc",
   "co-repost"
  ],
  "terms": [
   "cost-center",
   "cost-element",
   "allocation"
  ]
 },
 {
  "id": "statistical-order",
  "kr": "통계오더",
  "en": "Statistical Order",
  "abbr": "",
  "desc": "실제 비용은 코스트센터에 그대로 두고, 참고용으로만 금액을 따로 모아보는 관리용 오더. 부산물 원가 흐름처럼 실제 배부와 별개로 통계를 내고 싶을 때 쓴다.",
  "area": "co",
  "items": [
   "co-order"
  ],
  "terms": [
   "internal-order",
   "cost-center"
  ]
 },
 {
  "id": "multilevel-costing",
  "kr": "다단계원가계산",
  "en": "Multilevel Costing",
  "abbr": "",
  "desc": "반제품에서 난 가격차이를 상위 제품으로 한 단계씩 올려 보내 최종 제품의 실제 원가를 구하는 계산. BOM 단계가 여러 개인 제조업에서 자재원장 결산의 핵심이다.",
  "area": "co",
  "items": [
   "co-costvar"
  ],
  "terms": [
   "material-ledger",
   "actual-costing",
   "price-variance"
  ]
 },
 {
  "id": "variance-analysis",
  "kr": "차이분석",
  "en": "Variance Analysis",
  "abbr": "",
  "desc": "표준원가와 실제원가가 왜 어긋났는지 재료비·노무비·경비로 쪼개 원인을 찾는 분석. 차이가 크면 표준을 고치거나 현장을 손본다.",
  "area": "co",
  "items": [
   "co-costvar"
  ],
  "terms": [
   "production-costing",
   "standard-cost-valuation",
   "actual-costing"
  ]
 },
 {
  "id": "production-variance-analysis",
  "kr": "생산차이분석",
  "en": "Production Variance Analysis",
  "abbr": "",
  "desc": "생산오더별로 표준 투입 대비 실제 투입의 차이를 계산해 손익으로 정산하는 절차. 수량 차이와 가격 차이를 구분해 어디서 새는지를 본다.",
  "area": "co",
  "items": [
   "co-costvar"
  ],
  "terms": [
   "variance-analysis",
   "production-costing",
   "settlement"
  ]
 },
 {
  "id": "budget-planning",
  "kr": "예산관리",
  "en": "Budgeting and Planning",
  "abbr": "",
  "desc": "부서·프로젝트별로 쓸 수 있는 돈의 한도를 미리 정하고 집행을 통제하는 관리. S/4HANA에서는 내부오더나 프로젝트에 예산을 걸어 초과 집행을 막는다.",
  "area": "co",
  "items": [
   "co-version",
   "co-order-budget"
  ],
  "terms": [
   "internal-order",
   "cost-center"
  ]
 },
 {
  "id": "allocation-base",
  "kr": "배부기준",
  "en": "Allocation Base",
  "abbr": "",
  "desc": "간접비를 나눌 때 쓰는 자(기준). 인원수·면적·매출액처럼 합리적인 기준을 정해야 배부 결과가 설득력을 갖는다. CO 배부 사이클의 핵심 설정이다.",
  "area": "co",
  "items": [
   "co-alloc",
   "co-skf"
  ],
  "terms": [
   "allocation",
   "cost-center",
   "profitability-analysis"
  ]
 },
 {
  "id": "by-product-accounting",
  "kr": "부산물원가배분",
  "en": "By-product Accounting",
  "abbr": "",
  "desc": "주산품과 함께 나오는 부산물에 원가를 나눠주는 회계 처리. 부산물은 보통 순실현가치로 평가하고 나머지를 주산품이 가져가는 식으로 배분한다.",
  "area": "co",
  "items": [
   "co-costvar"
  ],
  "terms": [
   "production-costing",
   "statistical-order",
   "material-ledger"
  ]
 },
 {
  "id": "production-costing",
  "kr": "생산원가계산",
  "en": "Production Costing",
  "abbr": "CO-PC",
  "desc": "생산오더에 들어간 재료비·노무비·경비를 모아 제품 하나의 원가를 계산하는 관리회계. 표준원가와 비교해 차이를 내고, 자재원장으로 실제원가를 확정한다.",
  "area": "co",
  "items": [
   "co-costvar",
   "co-ml"
  ],
  "terms": [
   "internal-order",
   "actual-costing",
   "variance-analysis"
  ]
 },
 {
  "id": "wip-accounting",
  "kr": "재공품회계",
  "en": "WIP Accounting",
  "abbr": "WIP",
  "desc": "아직 다 만들지 못한 채 공정에 걸쳐 있는 제품(재공품)의 가치를 계산하는 처리. 투입된 비용에서 완성품으로 빠진 것을 빼고 남은 금액을 재고자산으로 잡는다.",
  "area": "co",
  "items": [
   "co-ml"
  ],
  "terms": [
   "production-costing",
   "settlement",
   "material-ledger"
  ]
 },
 {
  "id": "gbb",
  "kr": "GBB",
  "en": "Offsetting Entry for Inventory Posting",
  "abbr": "",
  "desc": "자재가 움직일 때(입고·출고·이동) 상대 계정을 자동으로 정해주는 OBYC의 대표 트랜잭션 키. 평가클래스와 이동유형을 보고 재고·소비·차이 계정을 골라 전표를 만든다.",
  "area": "xmod",
  "items": [
   "xmod-obyc"
  ],
  "terms": [
   "obyc",
   "material-ledger",
   "inventory-accounting"
  ]
 },
 {
  "id": "invoice-verification",
  "kr": "송장검증",
  "en": "Invoice Verification",
  "abbr": "",
  "desc": "공급처가 보낸 청구서와 실제 입고 내역을 대조해 지급할 금액을 확정하는 절차(MIRO). 입고·발주·송장 세 가지를 맞추는 3자 대조로 틀린 청구를 걸러낸다.",
  "area": "xmod",
  "items": [
   "close-grir"
  ],
  "terms": [
   "gr-ir",
   "automatic-payment",
   "reconciliation-account"
  ]
 },
 {
  "id": "movement-type-grouping",
  "kr": "이동유형그룹",
  "en": "Movement Type Grouping",
  "abbr": "",
  "desc": "자재 이동유형을 몇 개씩 묶어 가격차이 계정을 다르게 쓰는 설정. 자재원장 결산 때 이동유형별로 차이 계정을 나누고 싶을 때 쓴다.",
  "area": "xmod",
  "items": [
   "xmod-assetpo"
  ],
  "terms": [
   "material-ledger",
   "price-variance",
   "obyc"
  ]
 },
 {
  "id": "p2p",
  "kr": "P2P",
  "en": "Procure to Pay",
  "abbr": "",
  "desc": "구매요청부터 발주·입고·송장검증·지급까지 이어지는 구매-지급 전 과정. FI와 만나면 입고 때 GR/IR, 송장 때 채무, 지급 때 출금이 자동으로 찍힌다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "gr-ir",
   "invoice-verification",
   "automatic-payment"
  ]
 },
 {
  "id": "mm-module",
  "kr": "MM",
  "en": "Materials Management",
  "abbr": "",
  "desc": "자재·구매·재고를 맡는 물류 모듈. FI와는 입고(재고자산), 송장(채무), 지급(현금) 지점에서 전표로 연결된다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "material-master",
   "inventory-accounting",
   "gr-ir"
  ]
 },
 {
  "id": "inventory-accounting",
  "kr": "재고회계",
  "en": "Inventory Accounting",
  "abbr": "",
  "desc": "자재가 들어오고 나가는 흐름을 금액으로 기록해 재고자산 가치를 관리하는 회계. 입고는 재고자산 증가, 출고는 매출원가 또는 소비로 잡힌다.",
  "area": "xmod",
  "items": [
   "xmod-obyc",
   "xmod-ml"
  ],
  "terms": [
   "material-ledger",
   "gbb",
   "standard-cost-valuation"
  ]
 },
 {
  "id": "standard-cost-valuation",
  "kr": "표준원가평가",
  "en": "Standard Cost Valuation",
  "abbr": "",
  "desc": "자재를 실제 가격이 아니라 미리 정한 표준가격으로 평가하는 방식. 표준과 실제의 차이는 가격차이로 모아 자재원장에서 나중에 정산한다.",
  "area": "xmod",
  "items": [
   "xmod-ml"
  ],
  "terms": [
   "material-ledger",
   "price-variance",
   "bom"
  ]
 },
 {
  "id": "price-variance",
  "kr": "가격차이",
  "en": "Price Variance",
  "abbr": "",
  "desc": "표준가격과 실제 매입·제조 가격의 차이. 자재원장 결산 때 이 차이를 재고와 매출원가에 나눠 실제에 가깝게 고친다.",
  "area": "xmod",
  "items": [
   "xmod-obyc"
  ],
  "terms": [
   "standard-cost-valuation",
   "material-ledger",
   "multilevel-costing"
  ]
 },
 {
  "id": "order-to-cash",
  "kr": "O2C",
  "en": "Order to Cash",
  "abbr": "",
  "desc": "고객 주문부터 출고·청구·수금까지 이어지는 판매-회수 전 과정. FI와 만나면 출고 때 매출원가, 청구 때 매출채권과 매출이 자동으로 찍힌다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "credit-management",
   "dunning",
   "revenue-recognition"
  ]
 },
 {
  "id": "sd-module",
  "kr": "SD",
  "en": "Sales and Distribution",
  "abbr": "",
  "desc": "주문·출고·청구를 맡는 영업 물류 모듈. FI와는 매출(수익), 매출채권, 세금 지점에서 전표로 연결된다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "credit-management",
   "vkoa",
   "revenue-recognition"
  ]
 },
 {
  "id": "mrp",
  "kr": "MRP",
  "en": "Material Requirements Planning",
  "abbr": "",
  "desc": "앞으로 필요한 자재가 언제 얼마나 모자라는지 계산해 구매요청을 자동으로 만드는 계획 기능. BOM과 재고·주문 정보를 보고 소요량을 전개한다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "material-master",
   "bom",
   "inventory-accounting"
  ]
 },
 {
  "id": "material-ledger-closing",
  "kr": "자재원장결산",
  "en": "Material Ledger Closing",
  "abbr": "",
  "desc": "CKMLCP를 돌려 자재별 실제 단가를 확정하는 월 결산 절차. 가격차이를 재고와 소비에 배부하고, 다단계로 올려 최종 제품 원가를 확정한다.",
  "area": "close",
  "items": [
   "xmod-ml"
  ],
  "terms": [
   "material-ledger",
   "actual-costing",
   "consumption-revaluation"
  ]
 },
 {
  "id": "consumption-revaluation",
  "kr": "소비재평가",
  "en": "Consumption Revaluation",
  "abbr": "COC",
  "desc": "자재원장 결산에서 가격차이를 이미 쓴(소비된) 수량에 나눠 실제 원가로 고치는 단계. 기말재고가 아닌 당기 소비분에 대한 차이를 손익 쪽에 반영한다.",
  "area": "close",
  "items": [
   "xmod-ml"
  ],
  "terms": [
   "material-ledger-closing",
   "price-variance",
   "movement-type-grouping"
  ]
 },
 {
  "id": "manufacturing-cost-closing",
  "kr": "제조원가결산",
  "en": "Manufacturing Cost Closing",
  "abbr": "",
  "desc": "한 달 동안 공장에서 든 비용을 모아 제품 원가를 확정하는 결산. 코스트센터 마감→간접비→차이분석→자재원장 순서로 돌린다.",
  "area": "close",
  "items": [
   "xmod-ml"
  ],
  "terms": [
   "production-costing",
   "material-ledger-closing",
   "closing-cockpit"
  ]
 },
 {
  "id": "closing-monitor",
  "kr": "결산모니터",
  "en": "Closing Monitor",
  "abbr": "",
  "desc": "결산 때 해야 할 일(감가상각·외화평가·GR/IR조정 등)의 진행 상태를 한 화면에서 보는 기능. 누가 어디까지 했는지 보여줘 결산을 빨리 닫게 돕는다.",
  "area": "close",
  "items": [
   "close-cockpit",
   "close-jobs"
  ],
  "terms": [
   "closing-cockpit",
   "accrual-engine",
   "foreign-currency-valuation"
  ]
 },
 {
  "id": "closing-automation",
  "kr": "결산자동화",
  "en": "Financial Closing Automation",
  "abbr": "",
  "desc": "반복되는 결산 작업을 스케줄로 돌려 사람이 손대지 않게 하는 것. 결산콕핏의 작업 목록을 자동 실행해 결산 기간을 단축한다.",
  "area": "close",
  "items": [
   "close-cockpit",
   "close-jobs"
  ],
  "terms": [
   "closing-cockpit",
   "recurring-entry",
   "accrual-engine"
  ]
 },
 {
  "id": "asset-revaluation",
  "kr": "자산재평가",
  "en": "Asset Revaluation",
  "abbr": "",
  "desc": "토지 같은 자산의 장부가액을 시장 가치에 맞게 다시 매기는 처리. 재평가 차액은 자본(재평가잉여금)에 쌓는다.",
  "area": "aa",
  "items": [
   "aa-transtype"
  ],
  "terms": [
   "asset-class",
   "depreciation-area",
   "sub-ledger"
  ]
 },
 {
  "id": "post-capitalization",
  "kr": "자본적지출",
  "en": "Post-Capitalization",
  "abbr": "",
  "desc": "이미 쓰고 있는 자산에 가치를 올리는 큰 수리를 했을 때 그 돈을 비용이 아니라 자산 원가에 얹는 처리. 내용연수가 늘어나는 효과가 있다.",
  "area": "aa",
  "items": [
   "aa-transtype"
  ],
  "terms": [
   "asset-class",
   "depreciation-key",
   "sub-ledger"
  ]
 },
 {
  "id": "declining-balance-method",
  "kr": "정률법",
  "en": "Declining Balance Method",
  "abbr": "",
  "desc": "처음엔 많이, 갈수록 적게 감가상각하는 체감상각법. 자산 가치가 초기에 빨리 떨어지는 설비에 어울린다. 감가상각키에 상각 방법을 담는다.",
  "area": "aa",
  "items": [
   "aa-depkey"
  ],
  "terms": [
   "depreciation-key",
   "depreciation-area",
   "chart-of-depreciation"
  ]
 },
 {
  "id": "acquire-to-decommission",
  "kr": "자산생애주기",
  "en": "Acquire to Decommission",
  "abbr": "A2D",
  "desc": "자산의 취득부터 운영·유지보수·폐기까지 전 생애를 하나로 보는 프로세스. FI-AA는 이 흐름 중 취득·감가상각·폐기의 회계 처리를 맡는다.",
  "area": "aa",
  "items": [],
  "terms": [
   "asset-class",
   "asset-retirement",
   "sub-ledger"
  ]
 },
 {
  "id": "lease-accounting",
  "kr": "리스회계",
  "en": "Lease Accounting",
  "abbr": "",
  "desc": "리스 계약을 IFRS 16 기준으로 회계 처리하는 것. 임차인은 사용권자산과 리스부채를 잡고, 매달 이자와 감가상각을 나눠 인식한다.",
  "area": "aa",
  "items": [],
  "terms": [
   "right-of-use-asset",
   "asset-class",
   "sub-ledger"
  ]
 },
 {
  "id": "right-of-use-asset",
  "kr": "사용권자산",
  "en": "Right-of-Use Asset",
  "abbr": "ROU",
  "desc": "리스로 빌려 쓰는 자산에 대한 사용 권리를 자산으로 잡은 것. 리스부채와 함께 재무상태표에 올라가고 리스 기간 동안 감가상각한다.",
  "area": "aa",
  "items": [],
  "terms": [
   "lease-accounting",
   "asset-class",
   "depreciation-area"
  ]
 },
 {
  "id": "asset-retirement",
  "kr": "자산폐기",
  "en": "Asset Retirement",
  "abbr": "",
  "desc": "다 쓴 자산을 팔거나 버리며 장부에서 없애는 처리. 처분 금액과 장부가액의 차이는 처분손익으로 잡고 감가상각을 멈춘다.",
  "area": "aa",
  "items": [
   "aa-transtype"
  ],
  "terms": [
   "asset-class",
   "physical-inventory-verification",
   "sub-ledger"
  ]
 },
 {
  "id": "physical-inventory-verification",
  "kr": "재물조사",
  "en": "Physical Inventory Verification",
  "abbr": "",
  "desc": "장부상 자산 목록과 실제 있는 자산을 대조하는 실사. 없어진 건 폐기하고, 찾아낸 건 등록하며 장부를 현실에 맞춘다.",
  "area": "aa",
  "items": [],
  "terms": [
   "asset-class",
   "asset-retirement",
   "sub-ledger"
  ]
 },
 {
  "id": "bank-interface",
  "kr": "은행인터페이스",
  "en": "Bank Interface",
  "abbr": "",
  "desc": "ERP와 은행을 연결해 입출금 내역을 받아오고 지급 지시를 보내는 연동. 펌뱅킹이 대표적이며, 들어온 내역으로 전표를 자동 생성한다.",
  "area": "bank",
  "items": [],
  "terms": [
   "firmbanking",
   "house-bank",
   "bank-master"
  ]
 },
 {
  "id": "firmbanking",
  "kr": "펌뱅킹",
  "en": "Firm Banking",
  "abbr": "",
  "desc": "회사 시스템과 은행을 전용선으로 직접 연결해 이체·조회를 실시간 처리하는 서비스. 대량 지급을 은행에 가지 않고 ERP에서 바로 날린다.",
  "area": "bank",
  "items": [],
  "terms": [
   "bank-interface",
   "automatic-payment",
   "house-bank"
  ]
 },
 {
  "id": "treasury-management",
  "kr": "자금관리",
  "en": "Treasury Management",
  "abbr": "TR",
  "desc": "회사의 현금 흐름과 금융거래를 한데 모아 관리하는 영역. 현금 포지션 파악, 지급·차입·예적금 같은 금융상품을 여기서 다룬다.",
  "area": "bank",
  "items": [],
  "terms": [
   "cash-flow-planning",
   "bank-interface",
   "house-bank"
  ]
 },
 {
  "id": "cash-flow-planning",
  "kr": "자금수지계획",
  "en": "Cash Flow Planning",
  "abbr": "",
  "desc": "앞으로 들어오고 나갈 현금을 미리 짜보는 계획. 손익이 아니라 현금 기준으로 세워 자금이 모자랄 때를 대비한다.",
  "area": "bank",
  "items": [],
  "terms": [
   "treasury-management",
   "firmbanking",
   "bank-interface"
  ]
 },
 {
  "id": "journal-entry-api",
  "kr": "전표API",
  "en": "Journal Entry API",
  "abbr": "",
  "desc": "외부 시스템의 거래 데이터를 SAP로 보내 전표를 자동으로 만드는 표준 인터페이스. S/4HANA Public에서는 외부 전표 연동의 정석이다.",
  "area": "gl",
  "items": [],
  "terms": [
   "document",
   "document-type",
   "document-management"
  ]
 },
 {
  "id": "predictive-accounting",
  "kr": "예측회계",
  "en": "Predictive Accounting",
  "abbr": "",
  "desc": "판매오더 같은 물류 데이터를 미리 재무에 반영해 미래 손익을 내다보는 기능. 결산 전에도 이번 달 실적이 어떻게 될지 가늠한다.",
  "area": "gl",
  "items": [],
  "terms": [
   "universal-journal",
   "order-to-cash",
   "document"
  ]
 },
 {
  "id": "green-ledger",
  "kr": "그린원장",
  "en": "Green Ledger",
  "abbr": "",
  "desc": "탄소 배출량을 재무 데이터와 함께 관리하는 원장 개념. 코스트센터·손익센터 단위로 탄소 비용을 모아 ESG 보고의 근거로 쓴다.",
  "area": "gl",
  "items": [
   "gl-ledger",
   "gl-ledger-group"
  ],
  "terms": [
   "ledger",
   "cost-center",
   "profit-center"
  ]
 },
 {
  "id": "ledger-scenario",
  "kr": "원장시나리오",
  "en": "Ledger Scenario",
  "abbr": "",
  "desc": "원장마다 어떤 회계 기준(로컬/IFRS 등)으로 기록할지 정하는 S/4HANA 설정. 한 번 저장하면 바꾸기 어려워 처음 설계가 중요하다.",
  "area": "gl",
  "items": [
   "gl-ledger"
  ],
  "terms": [
   "ledger",
   "ledger-group",
   "fiscal-year-variant"
  ]
 },
 {
  "id": "document-management",
  "kr": "전표관리",
  "en": "Document Management",
  "abbr": "",
  "desc": "전표의 생성·승인·추적을 체계화하는 업무. 누가 언제 어떤 전표를 만들었는지 이력이 남아야 결산 때 믿고 쓸 수 있다.",
  "area": "gl",
  "items": [],
  "terms": [
   "document",
   "document-type",
   "change-document"
  ]
 },
 {
  "id": "revenue-recognition",
  "kr": "수익인식",
  "en": "Revenue Recognition",
  "abbr": "",
  "desc": "물건을 넘기거나 서비스를 다 했을 때 비로소 매출로 잡는 원칙. 대금을 먼저 받았으면 선수금(부채)으로 두었다가 인도 시점에 매출로 돌린다.",
  "area": "gl",
  "items": [
   "xmod-vkoa",
   "xmod-sdbill"
  ],
  "terms": [
   "document",
   "down-payment",
   "order-to-cash"
  ]
 },
 {
  "id": "consolidation",
  "kr": "연결회계",
  "en": "Consolidation",
  "abbr": "",
  "desc": "본사와 자회사들을 하나의 회사처럼 합쳐 재무제표를 만드는 회계. S/4HANA에서는 Group Reporting에서 내부거래를 상계하고 합산한다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "intercompany",
   "consolidation-adjustment",
   "intercompany-elimination"
  ]
 },
 {
  "id": "consolidation-adjustment",
  "kr": "연결조정",
  "en": "Consolidation Adjustment",
  "abbr": "",
  "desc": "각 회사의 재무제표를 합치기 전후에 중복을 없애고 기준을 맞추는 조정. 내부거래 상계와 미실현이익 제거가 대표적이다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "consolidation",
   "intercompany-elimination",
   "unrealized-profit-elimination"
  ]
 },
 {
  "id": "intercompany-elimination",
  "kr": "내부거래상계",
  "en": "Intercompany Elimination",
  "abbr": "",
  "desc": "그룹 안에서 오간 매출·매입·채권·채무를 연결재무제표에서 지워 없애는 처리. 안 지우면 그룹 전체 숫자가 부풀려 보인다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "intercompany",
   "consolidation-adjustment",
   "consolidation"
  ]
 },
 {
  "id": "unrealized-profit-elimination",
  "kr": "미실현이익제거",
  "en": "Unrealized Profit Elimination",
  "abbr": "",
  "desc": "그룹 안에서 주고받은 재고·자산에 숨어 있는 이익을 연결결산에서 빼는 조정. 아직 밖에 팔지 않았으니 이익으로 볼 수 없다는 원칙이다.",
  "area": "xmod",
  "items": [],
  "terms": [
   "consolidation-adjustment",
   "intercompany-elimination",
   "consolidation"
  ]
 },
  {
    "id": "ara",
    "kr": "ARA",
    "en": "Access Risk Analysis",
    "abbr": "ARA",
    "desc": "사용자·역할·프로필·HR 개체에 숨어 있는 SoD 충돌과 위험 권한을 찾아내는 분석 기능이다. 실시간·오프라인·교차 시스템 분석과 변경 시뮬레이션을 지원한다.",
    "area": "grc",
    "items": ["grc-ara", "grc-arm"],
    "terms": ["sod", "arm", "mitigating-control"]
  },
  {
    "id": "arm",
    "kr": "ARM",
    "en": "Access Request Management",
    "abbr": "ARM",
    "desc": "권한 요청과 승인을 티켓 기반 워크플로로 관리하는 기능이다. 요청·승인 단계에서 위험 분석을 함께 수행할 수 있다.",
    "area": "grc",
    "items": ["grc-arm", "grc-ara"],
    "terms": ["ara", "hr-trigger", "role-certification"]
  },
  {
    "id": "sod",
    "kr": "SoD",
    "en": "Segregation of Duties",
    "abbr": "SoD",
    "desc": "서로 견제해야 하는 직무를 한 사람이 겸하지 못하게 나누는 원칙이다. 대표 예로 벤더마스터 생성과 송장 전기의 분리가 있다.",
    "area": "grc",
    "items": ["grc-ara", "grc-mitigating"],
    "terms": ["ara", "mitigating-control", "preventive-control", "detective-control"]
  },
  {
    "id": "mitigating-control",
    "kr": "완화통제",
    "en": "Mitigating Control",
    "abbr": "",
    "desc": "SoD 충돌을 없앨 수 없을 때 대신 두는 보완 장치다. 위험과 연결해 유효기간·승인자·모니터를 정하고, 이상 행위 시 알림을 보낸다.",
    "area": "grc",
    "items": ["grc-mitigating"],
    "terms": ["sod", "ara", "preventive-control", "detective-control"]
  },
  {
    "id": "preventive-control",
    "kr": "예방통제",
    "en": "Preventive Control",
    "abbr": "",
    "desc": "위험한 권한 조합이 애초에 생기지 않게 막는 통제다. 예: 벤더마스터 생성 권한과 송장 전기 권한을 같은 사용자에게 주지 않는다.",
    "area": "grc",
    "items": ["grc-ara"],
    "terms": ["detective-control", "sod", "mitigating-control"]
  },
  {
    "id": "detective-control",
    "kr": "적발통제",
    "en": "Detective Control",
    "abbr": "",
    "desc": "위험 조합이 이미 존재할 때 사후에 찾아내어 점검하는 통제다. 예: 위험 권한 보유자의 벤더마스터 생성·송장 전기 내역을 주기적으로 확인한다.",
    "area": "grc",
    "items": ["grc-ara"],
    "terms": ["preventive-control", "sod", "mitigating-control"]
  },
  {
    "id": "firefighter",
    "kr": "파이어파이터",
    "en": "Firefighter",
    "abbr": "",
    "desc": "긴급 상황에 한시적으로 부여하는 강력한 권한이다. 사용 내역이 모두 기록되어 감사 추적이 가능하다.",
    "area": "grc",
    "items": ["grc-firefighter"],
    "terms": ["ara", "arm"]
  },
  {
    "id": "master-role",
    "kr": "마스터 역할",
    "en": "Master Role",
    "abbr": "",
    "desc": "여러 회사코드에 공통으로 쓸 권한의 원본이 되는 역할이다. 조직값은 비워 두고 템플릿으로 사용한다.",
    "area": "grc",
    "items": ["grc-role-derivation"],
    "terms": ["derived-role", "business-role"]
  },
  {
    "id": "derived-role",
    "kr": "파생 역할",
    "en": "Derived Role",
    "abbr": "",
    "desc": "마스터 역할을 복사해 회사코드 등 조직값을 채워 만든 실제 사용 역할이다. 마스터의 권한 변경분을 버튼 하나로 전파받을 수 있다.",
    "area": "grc",
    "items": ["grc-role-derivation"],
    "terms": ["master-role", "business-role"]
  },
  {
    "id": "business-role",
    "kr": "비즈니스 역할",
    "en": "Business Role",
    "abbr": "",
    "desc": "기술적인 단일 역할들을 업무 관점의 논리적인 하나로 묶은 역할이다. 사용자가 기술 역할명을 몰라도 업무 단위로 권한을 요청할 수 있다.",
    "area": "grc",
    "items": ["grc-arm"],
    "terms": ["master-role", "derived-role", "role-certification"]
  },
  {
    "id": "role-certification",
    "kr": "역할 인증",
    "en": "Role Certification",
    "abbr": "",
    "desc": "역할 소유자에게 담당 역할을 주기적으로 재확인하게 하는 워크플로 기반 점검이다. 불필요한 권한이 쌓이는 것을 막는다.",
    "area": "grc",
    "items": ["grc-arm"],
    "terms": ["uar", "business-role", "arm"]
  },
  {
    "id": "uar",
    "kr": "UAR",
    "en": "User Access Review",
    "abbr": "UAR",
    "desc": "사용자가 가진 역할이 지금도 정당한지 주기적으로 확인하는 워크플로 기반 검토다.",
    "area": "grc",
    "items": ["grc-arm"],
    "terms": ["role-certification", "arm"]
  },
  {
    "id": "hr-trigger",
    "kr": "HR 트리거",
    "en": "HR Trigger",
    "abbr": "",
    "desc": "입사·퇴사·부서 이동 같은 인사 이벤트를 권한 요청의 출발점으로 쓰는 연동 방식이다. SuccessFactors 같은 HR 시스템과 연결해 프로비저닝 수작업을 줄인다.",
    "area": "grc",
    "items": ["grc-arm"],
    "terms": ["arm"]
  },
  {
    "id": "ml-periodic-price",
    "kr": "주기적 단가",
    "en": "Periodic Unit Price",
    "abbr": "",
    "desc": "ML 실제원가계산 런에서 계산되는 자재의 진짜 단가. 누적 재고의 표준원가에 해당 기간의 가격·환율 차이를 더해 구한다. 다음 기간 재고 재평가의 기준이 된다.",
    "area": "co",
    "items": ["ml-ckmlcp-steps"],
    "terms": ["ml-single-level", "ml-multilevel"]
  },
  {
    "id": "ml-single-level",
    "kr": "단일수준 가격결정",
    "en": "Single-Level Price Determination",
    "abbr": "",
    "desc": "자재 자체 수준에서 발생한 가격·환율 차이만으로 실제원가를 계산하는 단계. 하위 자재의 영향은 반영하지 않는다. CKMLCP 3단계.",
    "area": "co",
    "items": ["ml-ckmlcp-steps"],
    "terms": ["ml-multilevel", "ml-periodic-price"]
  },
  {
    "id": "ml-multilevel",
    "kr": "다수준 가격결정",
    "en": "Multilevel Price Determination",
    "abbr": "",
    "desc": "하위 자재의 차이를 그것을 소비한 상위 자재에 비례 배분하는 단계. 순서 결정 단계에서 정한 제조 수준 계층을 따라 BOM을 거슬러 올라가며 차이를 안분한다. CKMLCP 4단계.",
    "area": "co",
    "items": ["ml-ckmlcp-steps"],
    "terms": ["ml-single-level", "ml-actual-bom", "ml-periodic-price"]
  },
  {
    "id": "ml-consumption-revaluation",
    "kr": "소비재평가",
    "en": "Revaluation of Consumption",
    "abbr": "",
    "desc": "코스트센터·WBS·매출원가 같은 비자재 입고처로 소비된 자재의 차이를 해당 처에 비례 배분하는 절차. CKMLCP 5단계이며, 켜면 FI 계정에도 다시 반영된다.",
    "area": "co",
    "items": ["ml-consumption-cc-cf"],
    "terms": ["ml-movement-group"]
  },
  {
    "id": "ml-wip-revaluation",
    "kr": "WIP 재평가",
    "en": "WIP Revaluation",
    "abbr": "",
    "desc": "아직 끝나지 않은 생산오더에서 소비된 자재의 차이를 재공품 계정에 배분하는 절차. DLV(납품)·TECO(기술적 완료) 상태가 아닌 오더가 대상이다. CKMLCP 6단계.",
    "area": "co",
    "items": ["ml-wip-revaluation"],
    "terms": ["ml-consumption-revaluation"]
  },
  {
    "id": "ml-actual-bom",
    "kr": "실제 BOM",
    "en": "Actual BOM",
    "abbr": "",
    "desc": "표준 BOM이 아니라 해당 기간에 실제로 투입된 자재·활동 수량 구조. CKMLQS 리포트로 조회하며, 다수준 가격결정이 어떤 투입 구조로 실제원가를 계산했는지 보여준다.",
    "area": "co",
    "items": ["ml-ckmlcp-steps"],
    "terms": ["ml-multilevel"]
  },
  {
    "id": "ml-price-control",
    "kr": "가격통제(S/V)",
    "en": "Price Control",
    "abbr": "",
    "desc": "자재의 재고 평가 방식을 나타내는 구분. S는 표준원가, V는 이동평균가를 뜻한다. ML 사후마감에서 재고 재평가를 선택하면 마감 기간의 가격통제가 S에서 V로 전환된다.",
    "area": "co",
    "items": ["ml-price-marking"],
    "terms": ["ml-periodic-price", "ml-parallel-valuation"]
  },
  {
    "id": "ml-movement-group",
    "kr": "이동유형그룹",
    "en": "Movement Type Group",
    "abbr": "",
    "desc": "이동유형마다 소비재평가 방식을 묶어 지정하는 그룹. 차이가 계정별로만(CC) 재평가되는지, 계정+원가대상별로(CF) 재평가되는지를 이동유형 단위로 정한다.",
    "area": "co",
    "items": ["ml-consumption-cc-cf"],
    "terms": ["ml-consumption-revaluation"]
  },
  {
    "id": "ml-post-closing",
    "kr": "사후마감",
    "en": "Postclosing",
    "abbr": "",
    "desc": "CKMLCP 실제원가계산 런의 마지막 전기 단계. 앞 단계들의 계산 결과를 총계정원장에 전기하고 자재 상태를 '마감 입력 완료'로 바꾼다. 이후 해당 기간의 재고 전기는 막힌다.",
    "area": "co",
    "items": ["ml-ckmlcp-steps"],
    "terms": ["ml-periodic-price"]
  },
  {
    "id": "ml-parallel-valuation",
    "kr": "병렬 평가",
    "en": "Parallel Valuation",
    "abbr": "",
    "desc": "하나의 재고를 법적 평가(회사코드 통화)와 그룹 평가(그룹 통화) 등 여러 관점으로 병행해 평가하는 방식. ML이 있어야 가능하며, S/4HANA에서는 ML이 필수라 기본 전제가 된다.",
    "area": "co",
    "items": ["ml-parallel-valuation"],
    "terms": ["ml-price-control"]
  },
  {
    "id": "lease-liability",
    "kr": "리스부채",
    "en": "Lease Liability",
    "abbr": "",
    "desc": "리스 기간 동안 지급할 리스료를 현재가치로 환산해 계상한 부채. 보증 예상 금액이 변동되면 주기적으로 재검토해 사용권자산과 함께 조정한다.",
    "area": "aa",
    "items": ["lease-recognition"],
    "terms": ["guaranteed-residual-value", "right-of-use-asset"]
  },
  {
    "id": "guaranteed-residual-value",
    "kr": "보증잔존가치",
    "en": "Guaranteed Residual Value",
    "abbr": "",
    "desc": "리스 종료 시점 자산의 잔존가치 중 리스이용자가 보증한 금액. 리스부채 측정에는 포함되지만, 사용권자산의 감가상각비를 계산할 때는 차감하지 않는다.",
    "area": "aa",
    "items": ["lease-recognition"],
    "terms": ["lease-liability", "right-of-use-asset"]
  },
  {
    "id": "bp-relcat",
    "kr": "BP 관계 카테고리",
    "en": "BP Relationship Category",
    "abbr": "",
    "desc": "Business Partner 사이의 관계(예: 연락처 담당자, 본사-지사)를 구분하는 카테고리. 커스텀 관계 카테고리를 만들면 CVI를 통해 고객·공급처처 마스터의 연락처(KNVK) 등으로 동기화되는 지점에 영향을 준다.",
    "area": "etc",
    "items": ["tmp-bp-relcat"],
    "terms": ["bp-role-category", "cvi-mapping"]
  },
  {
    "id": "cvi-mapping",
    "kr": "CVI 매핑",
    "en": "CVI Mapping",
    "abbr": "",
    "desc": "BP의 관계·역할 정보가 고객·공급처처 마스터의 어떤 테이블·필드로 넘어가는지를 정하는 매핑. 예: BP의 연락처 관계 유형(rel_type_contact)은 KNVK(거래처처 연락처)로 매핑된다.",
    "area": "etc",
    "items": ["tmp-cvi-sync"],
    "terms": ["cvi", "bp-relcat"]
  },
  {
    "id": "mass-doc",
    "kr": "대량전표",
    "en": "Mass Document Upload",
    "abbr": "",
    "desc": "많은 전표를 파일 형태로 만들어 일괄 전기하는 방식. 온라인몰의 일일 매출·수금 정산 내역을 SAP에 반영할 때 쓴다. 오류가 나면 오류내역을 검토·수정하고 다시 올린다.",
    "area": "etc",
    "items": ["etc-mass-clearing"],
    "terms": ["daily-settlement"]
  },
  {
    "id": "return-fault",
    "kr": "귀책판정",
    "en": "Return Fault Determination",
    "abbr": "",
    "desc": "반품 사유의 책임 소재(고객 변심·상품 불량·협력업체·물류 등)를 판정하는 절차. 판정 결과에 따라 환불 처리와 재고 이동 방향이 갈린다.",
    "area": "etc",
    "items": ["etc-return-cycle"],
    "terms": ["daily-settlement"]
  },
  {
    "id": "daily-settlement",
    "kr": "일일 정산",
    "en": "Daily Settlement",
    "abbr": "",
    "desc": "하루 동안의 매출·수금 내역을 모아 입금내역 확인→정산내역 조회→대량전표 파일 생성→미수금 반제→회계전표 제출·승인 순서로 마감하는 일일 루틴.",
    "area": "etc",
    "items": ["etc-mass-clearing", "etc-return-cycle"],
    "terms": ["mass-doc", "return-fault", "pg-settle"]
  },
  {
    "id": "pg-settle",
    "kr": "PG정산",
    "en": "PG Settlement",
    "abbr": "PG",
    "desc": "PG(결제대행사)사의 정산내역을 확인하고 정산금액을 확정한 뒤 정산전표를 발행해 회계에 반영하는 처리. 자사몰 일일 정산의 한 축이다.",
    "area": "etc",
    "items": [],
    "terms": ["daily-settlement", "tax-invoice-issue"]
  },
  {
    "id": "tax-invoice-issue",
    "kr": "세금계산서 발행",
    "en": "Tax Invoice Issuance",
    "abbr": "",
    "desc": "주문·출고 내역을 점검하고 발행금액을 확인한 뒤 세금계산서를 발행하는 절차. 미발행건을 점검하는 단계가 별도로 있다.",
    "area": "etc",
    "items": [],
    "terms": ["pg-settle", "daily-settlement"]
  },
  {
    "id": "investment-program",
    "kr": "투자 프로그램",
    "en": "Investment Program",
    "abbr": "",
    "desc": "연간 투자 계획을 계층 구조(최대 99레벨)로 묶어 관리하는 투자관리 최상위 마스터. 프로그램 정의·구조·위치로 구성된다.",
    "area": "etc",
    "items": ["im-invest-program"],
    "terms": ["investment-measure", "appropriation-request", "availability-control"]
  },
  {
    "id": "appropriation-request",
    "kr": "지출요청",
    "en": "Appropriation Request",
    "abbr": "",
    "desc": "투자 계획·의사결정 단계에서 원하는 투자나 개발 아이디어를 금액과 함께 등록하는 문서. 수익성 분석과 승인 절차를 거친 뒤 투자 프로그램에 편입된다.",
    "area": "etc",
    "items": ["im-invest-program"],
    "terms": ["investment-program", "investment-measure"]
  },
  {
    "id": "investment-measure",
    "kr": "조치",
    "en": "Investment Measure",
    "abbr": "",
    "desc": "투자를 실제로 집행하는 단위. 내부오더·설비오더·프로젝트의 WBS 요소가 될 수 있으며, 비용이 모였다가 자산이나 코스트센터로 정산된다.",
    "area": "etc",
    "items": ["im-invest-program", "im-auc-settle"],
    "terms": ["investment-program", "appropriation-request", "auc"]
  },
  {
    "id": "availability-control",
    "kr": "가용성 통제",
    "en": "Availability Control",
    "abbr": "",
    "desc": "조치에 예산을 초과해 전기하지 못하도록 막는 통제. 가용 자금을 넘어서는 발주·전표 입력을 시스템이 차단한다.",
    "area": "etc",
    "items": ["im-invest-program"],
    "terms": ["investment-program", "approval-year"]
  },
  {
    "id": "approval-year",
    "kr": "승인 연도",
    "en": "Approval Year",
    "abbr": "",
    "desc": "투자 프로그램에 들어 있는 값이 승인된 회계연도. 반드시 그 해에만 쓰는 값이라는 뜻은 아니다.",
    "area": "etc",
    "items": ["im-invest-program"],
    "terms": ["availability-control", "investment-program"]
  },
  {
    "id": "auc",
    "kr": "건설중인자산",
    "en": "Assets Under Construction",
    "abbr": "AUC",
    "desc": "아직 준공되지 않은 건설·제작 중인 자산의 대차대조표 항목. 자본화 대상 비용이 먼저 모였다가 준공 시 본자산으로 대체된다.",
    "area": "etc",
    "items": ["im-auc-settle"],
    "terms": ["investment-measure", "depreciation-chart"]
  },
  {
    "id": "depreciation-chart",
    "kr": "감가상각 차트",
    "en": "Chart of Depreciation",
    "abbr": "",
    "desc": "국가별로 장부·세무·관리회계 등 목적에 맞는 감가상각 방법을 모아 놓은 설정. 자산이 내용연수에 들어가면 이 차트 기준으로 상각한다.",
    "area": "etc",
    "items": ["im-auc-settle"],
    "terms": ["auc"]
  },
  {
    "id": "business-partner-role",
    "kr": "BP 역할",
    "en": "Business Partner Role",
    "abbr": "",
    "desc": "대화상자에서 어떤 기능을 쓸지 지정하기 위해 비즈니스 파트너에게 할당하는 역할. 6자리 영숫자 키로 정의한다.",
    "area": "etc",
    "items": ["tmp-cvi-sync", "tmp-bp-relcat"],
    "terms": ["bp-role-category", "cvi", "bp-relcat"]
  },
  {
    "id": "bp-role-category",
    "kr": "역할 범주",
    "en": "Role Category",
    "abbr": "",
    "desc": "BP 역할들을 묶는 상위 분류. 역할과 1:n 관계이며, 프로그래밍에서 하나의 역할만 읽히도록 표준 역할을 지정할 수 있다. BUT100 테이블(전달클래스 E)에 저장된다.",
    "area": "etc",
    "items": ["tmp-bp-relcat"],
    "terms": ["bp-relcat", "bp-role-grouping", "bp-role-exclusion-group"]
  },
  {
    "id": "business-data-toolset",
    "kr": "BDT",
    "en": "Business Data Toolset",
    "abbr": "BDT",
    "desc": "비즈니스 파트너 화면을 제어하는 도구. 선택된 역할에 따라 대화상자에 표시될 BP 데이터를 정의하는 데 쓰인다.",
    "area": "etc",
    "items": ["tmp-cvi-sync"],
    "terms": ["business-partner-role", "bp-role-category"]
  },
  {
    "id": "bp-role-grouping",
    "kr": "BP 역할 그룹화",
    "en": "BP Role Grouping",
    "abbr": "",
    "desc": "대화상자에서 한 번에 선택할 수 있도록 여러 BP 역할을 함께 묶는 설정. 역할 제외 그룹에 든 두 역할은 같은 그룹에 속할 수 없다.",
    "area": "etc",
    "items": [],
    "terms": ["bp-role-category", "bp-role-exclusion-group"]
  },
  {
    "id": "bp-role-exclusion-group",
    "kr": "역할 제외 그룹",
    "en": "BP Role Exclusion Group",
    "abbr": "",
    "desc": "한 BP가 동시에 수행하면 안 되는 역할들을 묶는 설정. 각 역할은 하나의 제외 그룹에만 속할 수 있고, 그룹 안에서 허용된 역할 전환(순서)을 정의한다.",
    "area": "etc",
    "items": [],
    "terms": ["bp-role-category", "bp-role-grouping"]
  },
  {
    "id": "simplification-item",
    "kr": "단순화 항목",
    "en": "Simplification Item",
    "abbr": "",
    "desc": "ECC→S/4HANA 전환 시 바뀌거나 없어지는 기능 목록의 한 건. 준비 상태 확인 보고서에서 점검한다.",
    "area": "etc",
    "items": ["conv-readiness"],
    "terms": ["readiness-check"]
  },
  {
    "id": "readiness-check",
    "kr": "준비 상태 확인",
    "en": "Readiness Check",
    "abbr": "",
    "desc": "시스템이 S/4HANA 전환을 받을 준비가 됐는지 점검하는 보고서. SE38에서 /SDF/RC_START_CHECK를 실행한다.",
    "area": "etc",
    "items": ["conv-readiness"],
    "terms": ["simplification-item", "sum-upgrade", "cutover"]
  },
  {
    "id": "sum-upgrade",
    "kr": "SUM",
    "en": "Software Update Manager",
    "abbr": "SUM",
    "desc": "릴리스 업그레이드·향상 패키지·지원 패키지 스택 적용에 쓰는 소프트웨어 업그레이드 관리자.",
    "area": "etc",
    "items": ["conv-sum"],
    "terms": ["readiness-check", "cutover"]
  },
  {
    "id": "cutover",
    "kr": "컷오버",
    "en": "Cutover",
    "abbr": "",
    "desc": "테스트 시스템을 끄고 프로덕션으로 본전환하는 작업. SIT·UAT 승인 뒤 일정에 따라 수행한다.",
    "area": "etc",
    "items": ["conv-cutover"],
    "terms": ["sum-upgrade", "sit-uat", "readiness-check"]
  },
  {
    "id": "sit-uat",
    "kr": "SIT·UAT",
    "en": "System Integration Testing / User Acceptance Testing",
    "abbr": "SIT·UAT",
    "desc": "시스템 통합 테스트와 사용자 인수 테스트. 두 승인이 떨어져야 컷오버 계획을 시작할 수 있다.",
    "area": "etc",
    "items": ["conv-cutover"],
    "terms": ["cutover"]
  },
  {
    "id": "sap-activate",
    "kr": "SAP Activate",
    "en": "SAP Activate",
    "abbr": "",
    "desc": "S/4HANA 구축용 SAP 공식 방법론. Discover·Prepare·Explore·Realize·Deploy and Run 6단계로 구성된다.",
    "area": "etc",
    "items": ["act-methodology"],
    "terms": ["fit-to-standard", "explore-phase", "realize-phase", "deploy-run-phase"]
  },
  {
    "id": "fit-to-standard",
    "kr": "Fit-to-Standard",
    "en": "Fit-to-Standard",
    "abbr": "",
    "desc": "표준 프로세스에 우리 업무를 맞추는 분석 방식. Explore 단계에서 수행하며, Public에서는 필수다.",
    "area": "etc",
    "items": ["act-methodology"],
    "terms": ["sap-activate", "explore-phase"]
  },
  {
    "id": "explore-phase",
    "kr": "Explore 단계",
    "en": "Explore Phase",
    "abbr": "",
    "desc": "SAP Activate의 세 번째 단계. 표준 프로세스를 보여주며 Fit-to-Standard 분석으로 갭을 확정한다.",
    "area": "etc",
    "items": ["act-methodology"],
    "terms": ["sap-activate", "fit-to-standard", "realize-phase"]
  },
  {
    "id": "realize-phase",
    "kr": "Realize 단계",
    "en": "Realize Phase",
    "abbr": "",
    "desc": "SAP Activate의 네 번째 단계. 솔루션 구성·레거시 데이터 이관·통합·확장 개발·테스트를 수행한다.",
    "area": "etc",
    "items": ["act-methodology"],
    "terms": ["sap-activate", "explore-phase", "deploy-run-phase"]
  },
  {
    "id": "deploy-run-phase",
    "kr": "Deploy and Run 단계",
    "en": "Deploy and Run Phases",
    "abbr": "",
    "desc": "SAP Activate의 마지막 단계들. 최종 사용자 교육과 본가동을 거쳐 분기 릴리스로 지속 혁신을 이어간다.",
    "area": "etc",
    "items": ["act-methodology"],
    "terms": ["sap-activate", "realize-phase"]
  },
];