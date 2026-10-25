// Table(CDS View) 매핑 데이터
// 출처: 내부 T-Code 매핑 정리 자료 (P주요필드 탭: I_BUSINESSPARTNER 필드 상세)
//   엑셀에 없는 CDS뷰는 공개 자료로 대조, 확인 불가 항목은 확인중(unknown) 태그
// flag: 'yes' | 'no' | 'unknown'(확인중) | 'mix'(뷰별 상이)
const TABLE_MODULES = [
  { id: 'FI', name: 'FI', sub: '재무회계', open: true },
  { id: 'CO', name: 'CO', sub: '관리회계' },
  { id: 'SD', name: 'SD', sub: '판매관리' },
  { id: 'MM', name: 'MM', sub: '자재관리' },
  { id: 'PP', name: 'PP', sub: '생산관리' },
  { id: 'PS', name: 'PS', sub: '프로젝트시스템' },
];
// 2026-10-24 Cloud dev 열: SAP GitHub SAP/abap-atc-cr-cv-s4hc objectReleaseInfoLatest.json (2026-09-04 기준) DDLS released 기준으로 확정
const TABLE_ROWS = [
 {
  "mod": "FI",
  "table": "BKPF",
  "desc": "전표 헤더",
  "cds": [
   "I_JournalEntry"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "ACDOCA(Universal Journal) 기반",
  "terms": [
   "document",
   "document-type",
   "posting-key"
  ],
  "items": [
   "gl-doc-type",
   "gl-doc-number",
   "gl-posting-key"
  ],
  "menus": [
   "MIRO"
  ]
 },
 {
  "mod": "FI",
  "table": "BSEG",
  "desc": "전표 라인아이템",
  "cds": [
   "I_JournalEntryItem",
   "I_OPERATIONALACCTGDOCITEM"
  ],
  "cloud": "yes",
  "keyuser": "mix",
  "note": "KeyUser ✓: I_JournalEntryItem · ACDOCA 기반",
  "terms": [
   "line-item",
   "document"
  ],
  "items": [
   "gl-doc-type",
   "gl-field-status"
  ],
  "menus": [
   "FBL3N",
   "FD10N",
   "FBL5N",
   "S_ALR_87012172"
  ]
 },
 {
  "mod": "FI",
  "table": "ACDOCA",
  "desc": "GL 원장 라인아이템·잔액",
  "cds": [
   "I_GLAccountLineItem",
   "I_GLACCOUNTLINEITEMRAWDATA",
   "I_OperationalAcctgDocCube",
   "I_JOURNALENTRYITEMCUBE",
   "I_GLAccountYearToDateBalanceC",
   "I_GLACCOUNTLINEITEMCUBE",
   "I_GLAcctBalanceCube",
   "C_TRIALBALANCE"
  ],
  "cloud": "mix",
  "keyuser": "mix",
  "note": "Cloud ✓: I_GLAccountLineItem·I_GLAccountLineItemRawData만 해당. 큐브 5종·C_TRIALBALANCE는 Cloud 미릴리스 · KeyUser ✓: I_GLAccountLineItem·I_GLAcctBalanceCube(커뮤니티 확인) · FAGLFLEXT(신GL 합계)·GLT0(구 총계) 테이블 대체 · 시산표 API(C_TRIALBALANCE_CDS)",
  "terms": [
   "universal-journal",
   "general-ledger",
   "ledger"
  ],
  "items": [
   "gl-ledger",
   "gl-docsplit"
  ],
  "menus": [
   "FAGLB03",
   "FAGLL03",
   "FBL3N",
   "S_ALR_87012282"
  ]
 },
 {
  "mod": "FI",
  "table": "ACDOCP",
  "desc": "계획 데이터",
  "cds": [
   "A_JournalEntryItemBasic"
  ],
  "cloud": "no",
  "keyuser": "unknown",
  "note": "SAC 재무계획 연계용 · A_ 뷰는 OData API 엔터티로 CDS 재사용 대상이 아님",
  "terms": [],
  "items": []
 },
 {
  "mod": "FI",
  "table": "SKA1 / SKAT / SKB1",
  "desc": "G/L 계정 마스터",
  "cds": [
   "I_GLAccount"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "gl-account",
   "chart-of-accounts",
   "account-group"
  ],
  "items": [
   "gl-coa",
   "gl-acct-group",
   "gl-coa-assign"
  ],
  "menus": [
   "FS00",
   "F-04",
   "FS10N",
   "FAGLL03"
  ]
 },
 {
  "mod": "FI",
  "table": "T003",
  "desc": "전표유형",
  "cds": [
   "I_AccountingDocumentType",
   "I_FinancialDocumentTypeText",
   "I_AccountingDocumentTypeText"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "Cloud ✓: I_AccountingDocumentType·I_AccountingDocumentTypeText / Cloud –: I_FinancialDocumentTypeText",
  "terms": [
   "document-type"
  ],
  "items": [
   "gl-doc-type",
   "gl-doc-number"
  ],
  "menus": [
   "MIRO"
  ]
 },
 {
  "mod": "FI",
  "table": "T004",
  "desc": "계정과목표",
  "cds": [
   "I_ChartOfAccounts",
   "I_ChartOfAccountsText"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "공식 Released",
  "terms": [
   "chart-of-accounts"
  ],
  "items": [
   "gl-coa"
  ]
 },
 {
  "mod": "FI",
  "table": "BSID / BSAD",
  "desc": "고객 미결 / 반제 항목",
  "cds": [
   "I_ARLINEITEM",
   "I_ARJrnlEntrItmAgingGrid",
   "I_TotalAccountsReceivables",
   "I_OperationalAcctgDocItem"
  ],
  "cloud": "mix",
  "keyuser": "yes",
  "note": "TDD API State 확인값 (C0 Released) · 에이징/미결집계 뷰 · Cloud ✓: I_OperationalAcctgDocItem(계정유형 D 필터)",
  "terms": [
   "open-item-management",
   "clearing",
   "sub-ledger"
  ],
  "items": [
   "ar-recon",
   "gl-clear-prep"
  ],
  "menus": [
   "F.13",
   "FD01",
   "FD05",
   "XD01"
  ]
 },
 {
  "mod": "FI",
  "table": "BSIK / BSAK",
  "desc": "공급업체 미결 / 반제 항목",
  "cds": [
   "I_APLINEITEM",
   "I_APJrnlEntrItmAgingGrid",
   "I_OperationalAcctgDocItem"
  ],
  "cloud": "mix",
  "keyuser": "yes",
  "note": "에이징 뷰 · Cloud ✓: I_APJrnlEntrItmAgingGrid·I_OperationalAcctgDocItem(계정유형 K 필터) / Cloud –: I_APLINEITEM",
  "terms": [
   "open-item-management",
   "clearing",
   "sub-ledger"
  ],
  "items": [
   "ap-recon",
   "gl-clear-prep"
  ],
  "menus": [
   "F.13",
   "F-04",
   "FBRA",
   "F-30"
  ]
 },
 {
  "mod": "FI",
  "table": "KNA1",
  "desc": "고객 마스터",
  "cds": [
   "I_Customer"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "BP 통합 이후는 I_BusinessPartner 권장",
  "terms": [
   "business-partner",
   "cvi"
  ],
  "items": [
   "ar-cust-group",
   "ar-cust-num",
   "ap-cvi"
  ],
  "menus": [
   "F-92",
   "FD01",
   "FD05",
   "XD01"
  ]
 },
 {
  "mod": "FI",
  "table": "LFA1",
  "desc": "공급업체 마스터",
  "cds": [
   "I_Supplier"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "BP 통합 이후는 I_BusinessPartner 권장",
  "terms": [
   "business-partner",
   "cvi"
  ],
  "items": [
   "ap-vendor-group",
   "ap-vendor-num",
   "ap-cvi"
  ],
  "menus": [
   "ABAON",
   "F-92"
  ]
 },
 {
  "mod": "FI",
  "table": "BUT000",
  "desc": "비즈니스 파트너",
  "cds": [
   "I_BusinessPartner"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "엑셀 P주요필드 탭에 필드 상세 수록",
  "terms": [
   "business-partner",
   "cvi"
  ],
  "items": [
   "ap-bp-role",
   "ap-bp-num",
   "ap-cvi"
  ],
  "menus": [
   "ABAON",
   "F-92",
   "PFCG"
  ]
 },
 {
  "mod": "FI",
  "table": "T001",
  "desc": "회사코드",
  "cds": [
   "I_CompanyCode"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "company-code",
   "company"
  ],
  "items": [
   "org-company-code",
   "org-ccode-company"
  ]
 },
 {
  "mod": "FI",
  "table": "TCURR",
  "desc": "환율",
  "cds": [
   "I_Exchangeraterawdata",
   "I_ExchangeRate"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "Cloud ✓: I_Exchangeraterawdata / Cloud –: I_ExchangeRate · I_ExchangeRateRawData는 I_Exchangeraterawdata와 동일 뷰",
  "terms": [
   "foreign-currency-valuation"
  ],
  "items": [
   "gl-fx-diff-acct",
   "close-fxval"
  ],
  "menus": [
   "FAGL_FCV"
  ]
 },
 {
  "mod": "FI",
  "table": "WITH_ITEM",
  "desc": "원천세 아이템",
  "cds": [
   "I_WithholdingTaxItem"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "",
  "terms": [
   "withholding-tax"
  ],
  "items": [
   "wth-type",
   "wth-account"
  ]
 },
 {
  "mod": "FI",
  "table": "BSET",
  "desc": "세금 라인아이템 (부가세 신고)",
  "cds": [
   "I_TaxItem",
   "I_OperationalAcctgDocTaxItem"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "부가세 신고 원장 필드 매핑: I_TaxItem.AccountingDocument(원장 ID) · I_OPERATIONALACCTGDOCITEM(거래처 코드, 매출 세금코드면 Customer) · I_BusinessPartner.BusinessPartnerName(거래처명) · I_BusinessPartnerTaxNumber.BPTaxNumber(사업자번호) · Cloud ✓: I_OperationalAcctgDocTaxItem / Cloud –: I_TaxItem",
  "terms": [
   "tax-code",
   "tax-invoice-issue"
  ],
  "items": [
   "tax-code",
   "tax-nontax"
  ]
 },
 {
  "mod": "FI",
  "table": "J_1BBRANCV_KR",
  "desc": "사업장 (한국 로컬라이제이션)",
  "cds": [
   "I_BusinessPlaceVH"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "PCE 참고용. 주민등록번호 성격 필드는 I_BusinessPlaceVH.BPTaxNumberForEditValue",
  "terms": [],
  "items": [
   "wth-section"
  ]
 },
 {
  "mod": "FI",
  "table": "ANKA",
  "desc": "자산클래스·감가상각 마스터",
  "cds": [
   "I_AssetClass",
   "I_DepreciationKey",
   "I_DepreciationAreaForLedger",
   "I_ChartOfDepreciation",
   "I_AssetTransactionType"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "Cloud ✓: I_AssetClass·I_DepreciationAreaForLedger·I_ChartOfDepreciation·I_AssetTransactionType / Cloud –: I_DepreciationKey(대응 릴리스 뷰 없음)",
  "terms": [
   "asset-class",
   "depreciation-key",
   "depreciation-area",
   "chart-of-depreciation"
  ],
  "items": [
   "aa-class",
   "aa-depkey",
   "aa-deparea",
   "aa-depchart",
   "aa-transtype"
  ],
  "menus": [
   "AFAB",
   "AS01",
   "AS05",
   "AW01N"
  ]
 },
 {
  "mod": "FI",
  "table": "ANLA",
  "desc": "고정자산 마스터·평가",
  "cds": [
   "I_FixedAsset",
   "I_FixedAssetForLedger",
   "I_FixedAssetAssgmt",
   "I_AssetValuationForLedger"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "공식 Released · ANLC(자산 누적값)는 S/4에서 ACDOCA 기반 호환 뷰",
  "terms": [
   "acquire-to-decommission"
  ],
  "items": []
 },
 {
  "mod": "FI",
  "table": "REGUP",
  "desc": "자동지급 제안 (개별 미결 항목)",
  "cds": [
   "I_PaymentProposalItem"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "",
  "terms": [
   "automatic-payment",
   "payment-method"
  ],
  "items": [
   "ap-paymethod-ccode",
   "ap-housebank"
  ],
  "menus": [
   "F110"
  ]
 },
 {
  "mod": "FI",
  "table": "REGUH",
  "desc": "자동지급 지급프로그램 헤더",
  "cds": [
   "I_PaymentProposalPayment",
   "I_PaymentProposalItem"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "유사 매핑(중) — 지급제안 뷰. 지급 완료 결과는 I_OperationalAcctgDocItem으로 대체 조회",
  "terms": [
   "automatic-payment",
   "house-bank"
  ],
  "items": [
   "ap-housebank",
   "ap-paymethod-ccode"
  ],
  "menus": [
   "F110"
  ]
 },
 {
  "mod": "FI",
  "table": "T012",
  "desc": "하우스뱅크 계좌 연결",
  "cds": [
   "I_HouseBankAccountLinkage"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "G/L 계정은 미노출(커뮤니티 확인)",
  "terms": [
   "house-bank"
  ],
  "items": [
   "ap-housebank"
  ]
 },
 {
  "mod": "FI",
  "table": "T882",
  "desc": "원장·원장별 회사코드 설정",
  "cds": [
   "I_LedgerCoCode",
   "I_Ledger",
   "I_LedgerText",
   "I_LedgerCompanyCodeCrcyRoles"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "I_Ledger·I_LedgerText만 Cloud ✓. I_LedgerCoCode는 미릴리스 → I_LedgerCompanyCodeCrcyRoles 사용",
  "terms": [
   "ledger",
   "company-code"
  ],
  "items": [
   "gl-ledger",
   "org-company-code"
  ],
  "menus": [
   "FAGLB03",
   "FAGLL03",
   "FBL3N",
   "S_ALR_87012282"
  ]
 },
 {
  "mod": "FI",
  "table": "T009",
  "desc": "회계연도·회계기간",
  "cds": [
   "I_FSCLYRINTVLDRVTNFORPOSTGDATE",
   "I_FSCLYRINTVLDRVTNFORCOMPRNDTE",
   "I_FSCLQTRWTHOUTFSCLYRFORVAR",
   "I_FSCLPERDWTHOUTFSCLYRFORVAR",
   "I_CURRENTYEARFISCALPERIODTEXT",
   "I_FISCALCALENDARDTEPREVPERIODS",
   "I_FISCALCALENDARDATENXTPERIODS",
   "I_FISCALCALDATEPREVFSCLPERIOD",
   "I_FISCALCALDATENXTFSCLPERIOD",
   "I_FiscalYearPeriodForCmpnyCode",
   "I_FiscalYearPeriodForVariant",
   "I_FiscalPeriodForVariant",
   "I_FiscalCalendarDate",
   "I_FiscalYearForCompanyCode"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "기존 9개 뷰 모두 Cloud 미릴리스 → 대체 뷰 사용 · Cloud ✓: I_FiscalYearPeriodForCmpnyCode·I_FiscalYearPeriodForVariant·I_FiscalPeriodForVariant·I_FiscalCalendarDate·I_FiscalYearForCompanyCode",
  "terms": [
   "fiscal-year-variant",
   "posting-period"
  ],
  "items": [
   "gl-fiscal-year",
   "gl-posting-period",
   "gl-fiscal-assign"
  ],
  "menus": [
   "OB52",
   "MMPV",
   "MMRV"
  ]
 },
 {
  "mod": "FI",
  "table": "SETHEADER",
  "desc": "계층구조(기능영역·이익센터)",
  "cds": [
   "I_FUNCTIONALAREAHIERARCHY",
   "I_FUNCTIONALAREAHIERNODE",
   "I_PROFITCENTERHIERARCHY",
   "I_PROFITCENTERHIERARCHYNODE"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "",
  "terms": [
   "functional-area",
   "profit-center"
  ],
  "items": [
   "org-functional-area",
   "co-prctr"
  ],
  "menus": [
   "KS01",
   "KS13",
   "KSB1",
   "S_ALR_87013611"
  ]
 },
 {
  "mod": "CO",
  "table": "COEP",
  "desc": "CO 라인아이템(실적)",
  "cds": [
   "I_JournalEntryItem"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "유사 매핑(상) — CO 실적은 ACDOCA(Universal Journal)에 통합. 코스트센터·오더 등 CO 객체 필드 포함",
  "terms": [
   "cost-element",
   "cost-center"
  ],
  "items": [
   "co-celem",
   "co-alloc"
  ],
  "menus": [
   "KA23",
   "KAH1",
   "F-04",
   "KSU2"
  ]
 },
 {
  "mod": "CO",
  "table": "COBK",
  "desc": "CO 문서 헤더",
  "cds": [
   "I_JournalEntry"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "유사 매핑(상) — CO 문서가 FI 전표와 통합되어 전표 헤더로 조회",
  "terms": [],
  "items": []
 },
 {
  "mod": "CO",
  "table": "AUFK",
  "desc": "내부오더 마스터",
  "cds": [
   "I_InternalOrder"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "internal-order",
   "settlement"
  ],
  "items": [
   "co-order",
   "co-settle"
  ],
  "menus": [
   "KKS1",
   "KL13",
   "AIBU",
   "AIST"
  ]
 },
 {
  "mod": "CO",
  "table": "CSKS / CSKT",
  "desc": "코스트센터 마스터 / 텍스트",
  "cds": [
   "I_CostCenter"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "cost-center"
  ],
  "items": [
   "co-ccenter"
  ],
  "menus": [
   "KS01",
   "KS13",
   "KSB1",
   "S_ALR_87013611"
  ]
 },
 {
  "mod": "CO",
  "table": "CEPC / CECT",
  "desc": "이익센터 마스터 / 텍스트",
  "cds": [
   "I_ProfitCenter"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "profit-center"
  ],
  "items": [
   "co-prctr"
  ]
 },
 {
  "mod": "CO",
  "table": "TKA02",
  "desc": "관리회계영역",
  "cds": [
   "I_CompanyCode",
   "I_ControllingArea"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "유사 매핑(상) — 회사코드↔영역 할당은 I_CompanyCode의 ControllingArea 필드, 영역 마스터는 I_ControllingArea",
  "terms": [
   "controlling-area"
  ],
  "items": [
   "co-area",
   "co-ccassign"
  ]
 },
 {
  "mod": "CO",
  "table": "COSP / COSS",
  "desc": "기간 합계(외부 / 내부)",
  "cds": [
   "I_GLAcctBalanceCube",
   "I_ActualPlanJrnlEntryItemCube",
   "I_ActualPlanJournalEntryItem"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "유사 매핑(중) — 합계 테이블은 ACDOCA 집계로 대체. 외부/내부 구분은 파트너 객체 필드로 판별 · Cloud ✓: I_ActualPlanJournalEntryItem / Cloud –: I_GLAcctBalanceCube·I_ActualPlanJrnlEntryItemCube",
  "terms": [
   "cost-center"
  ],
  "items": [
   "co-ccenter"
  ],
  "menus": [
   "KS01",
   "KS13",
   "KSB1",
   "S_ALR_87013611"
  ]
 },
 {
  "mod": "CO",
  "table": "SETHEADER",
  "desc": "계층구조(코스트센터·액티비티유형·통계키수치)",
  "cds": [
   "I_COSTCENTERHIERARCHY",
   "I_COSTCENTERHIERARCHYNODE",
   "I_COSTCTRACTIVITYTYPEHIERARCHY",
   "I_COSTCTRACTIVITYTYPEHIERNODE",
   "I_STSTCLKEYFIGUREHIERARCHY",
   "I_STSTCLKEYFIGUREHIERNODE"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "",
  "terms": [
   "cost-center",
   "activity-type"
  ],
  "items": [
   "co-ccenter",
   "co-acttype"
  ],
  "menus": [
   "KS01",
   "KS13",
   "KSB1",
   "S_ALR_87013611"
  ]
 },
 {
  "mod": "CO",
  "table": null,
  "desc": "계층구조 런타임 노드",
  "cds": [
   "I_HIERRUNTIMERPRSTNNODE",
   "I_HIERRUNTIMERPRSTNNODETEXT"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "특정 테이블에 종속되지 않은 런타임 계층 노드",
  "terms": [],
  "items": []
 },
 {
  "mod": "SD",
  "table": "VBAK / VBAP",
  "desc": "판매오더 헤더 / 아이템",
  "cds": [
   "I_SalesDocument",
   "I_SalesDocumentItem"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "order-to-cash",
   "sd-module"
  ],
  "items": [
   "xmod-sdbill"
  ]
 },
 {
  "mod": "SD",
  "table": "LIKP / LIPS",
  "desc": "납품 헤더 / 아이템",
  "cds": [
   "I_DeliveryDocument",
   "I_DeliveryDocumentItem"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "order-to-cash"
  ],
  "items": [
   "xmod-sdbill"
  ]
 },
 {
  "mod": "SD",
  "table": "VBRK / VBRP",
  "desc": "청구 헤더 / 아이템",
  "cds": [
   "I_BillingDocument",
   "I_BillingDocumentItem"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "order-to-cash",
   "revenue-recognition"
  ],
  "items": [
   "xmod-sdbill",
   "xmod-vkoa"
  ]
 },
 {
  "mod": "SD",
  "table": "VBFA",
  "desc": "문서 흐름",
  "cds": [
   "I_SDDocumentProcessFlow",
   "I_SalesDocumentPrecdgProcFlow",
   "I_SalesDocumentSubsqntProcFlow",
   "I_SDDocumentMultiLevelProcFlow"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "유사 매핑(상) — 판매 문서 간 선행/후속 관계 직접 대응 · Cloud ✓: I_SalesDocumentPrecdgProcFlow·I_SalesDocumentSubsqntProcFlow·I_SDDocumentMultiLevelProcFlow / Cloud –: I_SDDocumentProcessFlow",
  "terms": [],
  "items": []
 },
 {
  "mod": "MM",
  "table": "MARA",
  "desc": "자재 마스터(기본)",
  "cds": [
   "I_Product"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "material-master",
   "mm-module"
  ],
  "items": []
 },
 {
  "mod": "MM",
  "table": "MARC",
  "desc": "자재 마스터(플랜트)",
  "cds": [
   "I_ProductPlant"
  ],
  "cloud": "yes",
  "keyuser": "yes",
  "note": "",
  "terms": [
   "material-master",
   "mm-module"
  ],
  "items": [
   "xmod-plant"
  ]
 },
 {
  "mod": "MM",
  "table": "MBEW",
  "desc": "자재 평가",
  "cds": [
   "I_ProductValuation",
   "I_PRODUCTVALUATIONACCT",
   "I_ValuationArea",
   "I_ProductValuationBasic"
  ],
  "cloud": "yes",
  "keyuser": "mix",
  "note": "KeyUser ✓: I_ProductValuation",
  "terms": [
   "standard-cost-valuation",
   "inventory-accounting"
  ],
  "items": [
   "xmod-ml"
  ]
 },
 {
  "mod": "MM",
  "table": "MKPF / MSEG",
  "desc": "자재문서 헤더 / 아이템",
  "cds": [
   "I_MaterialDocumentHeader",
   "I_MaterialDocumentItem",
   "I_MaterialDocumentHeader_2",
   "I_MaterialDocumentItem_2"
  ],
  "cloud": "mix",
  "keyuser": "yes",
  "note": "Cloud ✓: I_MaterialDocumentHeader_2·I_MaterialDocumentItem_2 / Cloud –: I_MaterialDocumentHeader·I_MaterialDocumentItem",
  "terms": [
   "inventory-accounting",
   "mm-module"
  ],
  "items": [
   "xmod-obyc"
  ],
  "menus": [
   "MIGO"
  ]
 },
 {
  "mod": "MM",
  "table": "EBAN",
  "desc": "구매요청 (아이템 단위)",
  "cds": [
   "I_PurchaseRequisitionAPI01",
   "I_PurchaseRequisitionItemAPI01"
  ],
  "cloud": "unknown",
  "keyuser": "unknown",
  "note": "헤더·아이템 API01 뷰 (SAP What's New 2208·2502). EBAN은 아이템 단위라 아이템 뷰가 주.",
  "terms": [
   "p2p"
  ],
  "items": []
 },
 {
  "mod": "MM",
  "table": "EKKO / EKPO",
  "desc": "구매오더 헤더 / 아이템",
  "cds": [
   "I_PurchaseOrder",
   "I_PurchaseOrderItem",
   "I_PurchaseOrderAPI01",
   "I_PurchaseOrderItemAPI01"
  ],
  "cloud": "mix",
  "keyuser": "yes",
  "note": "Cloud ✓: I_PurchaseOrderAPI01·I_PurchaseOrderItemAPI01 / Cloud –: I_PurchaseOrder·I_PurchaseOrderItem",
  "terms": [
   "p2p",
   "invoice-verification"
  ],
  "items": []
 },
 {
  "mod": "MM",
  "table": "EKKN",
  "desc": "구매오더 계정배정",
  "cds": [
   "I_PurchaseOrderItemAPI01"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "전용 뷰 없음. I_PurchaseOrderItemAPI01의 계정배정 필드로 대체 (SAP Help Purchase Order Item).",
  "terms": [
   "p2p"
  ],
  "items": []
 },
 {
  "mod": "MM",
  "table": "EKBE",
  "desc": "구매오더 이력",
  "cds": [
   "I_PurchaseOrderHistory",
   "I_GRIRPROCESSHISTORY",
   "I_PurchaseOrderHistoryAPI01"
  ],
  "cloud": "mix",
  "keyuser": "mix",
  "note": "I_GRIRPROCESSHISTORY는 Cloud 미릴리스 → I_PurchaseOrderHistoryAPI01 사용 · Cloud –: I_PurchaseOrderHistory도 미릴리스 · KeyUser ✓: I_PurchaseOrderHistory",
  "terms": [
   "gr-ir",
   "invoice-verification"
  ],
  "items": [
   "close-grir"
  ],
  "menus": [
   "MB5S",
   "F.19",
   "MR11"
  ]
 },
 {
  "mod": "MM",
  "table": "MLDOC",
  "desc": "수불부(자재원장)",
  "cds": [
   "I_ActlCostgMatlValueChainItem",
   "I_MATERIALLEDGERCUBE_LIT",
   "I_ActCostingRunTypeVH"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "실제원가·단가 큐브",
  "terms": [
   "material-ledger",
   "actual-costing"
  ],
  "items": [
   "xmod-ml",
   "co-ml"
  ],
  "menus": [
   "CKMLCP"
  ]
 },
 {
  "mod": "MM",
  "table": "RBKP",
  "desc": "MM 송장 전표 헤더 (임시 문서 포함)",
  "cds": [
   "I_SupplierInvoice",
   "I_SupplierInvoiceAPI01"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "임시(parked) 송장도 RBKP에 전표 상태(RBSTAT)로 머문다. 전기 전이라 ACDOCA에는 아직 없다 · Cloud ✓: I_SupplierInvoiceAPI01 / Cloud –: I_SupplierInvoice",
  "terms": [
   "invoice-verification"
  ],
  "items": [],
  "menus": [
   "MIRO"
  ]
 },
 {
  "mod": "MM",
  "table": "RSEG",
  "desc": "송장 수령 항목 (임시 문서 포함)",
  "cds": [
   "I_SupplierInvoiceAccountAssgmt",
   "I_SuplrInvcItmAcctAssgmtAPI01"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "임시 송장의 계정지정 데이터는 이 CDS 뷰로 조회한다. 전기 전이라 ACDOCA에는 없다 · Cloud ✓: I_SuplrInvcItmAcctAssgmtAPI01 / Cloud –: I_SupplierInvoiceAccountAssgmt",
  "terms": [
   "invoice-verification",
   "gr-ir"
  ],
  "items": [
   "xmod-obyc"
  ],
  "menus": [
   "MIGO",
   "MB5S",
   "F.19",
   "MR11"
  ]
 },
 {
  "mod": "PP",
  "table": "AFKO / AFPO",
  "desc": "생산오더 헤더 / 품목",
  "cds": [
   "I_ManufacturingOrder",
   "I_ManufacturingOrderItem",
   "I_ManufacturingOrderOperation"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "MRP용 PPH_MRP_* 뷰는 별도 존재 · 유사 매핑(상) — AFKO 헤더/AFPO 품목/AFVC 공정 대응. MRP용 PPH_MRP_* 뷰는 별도 존재",
  "terms": [
   "production-costing",
   "wip-accounting"
  ],
  "items": []
 },
 {
  "mod": "PP",
  "table": "AUFM",
  "desc": "자재 이동(오더 관련)",
  "cds": [
   "I_MaterialDocumentItem_2"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "유사 매핑(상) — 자재 이동은 MATDOC 기준. 오더 번호로 필터하면 AUFM과 동일 정보",
  "terms": [
   "inventory-accounting"
  ],
  "items": [
   "xmod-obyc"
  ],
  "menus": [
   "MIGO"
  ]
 },
 {
  "mod": "PP",
  "table": "PLKO / PLPO",
  "desc": "작업순서 헤더 / 공정",
  "cds": [
   "I_ProductionRoutingHeader",
   "I_ProductionRoutingOperation"
  ],
  "cloud": "no",
  "keyuser": "unknown",
  "note": "유사 매핑(중) — 라우팅 API 엔터티 기준. 조회용 릴리스 뷰 없음(TP 뷰 I_ProductionRoutingTP_2만 있음)",
  "terms": [
   "activity-type"
  ],
  "items": [
   "co-acttype"
  ]
 },
 {
  "mod": "PS",
  "table": "PRPS",
  "desc": "WBS 요소",
  "cds": [
   "I_EnterpriseProjectElement"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "",
  "terms": [],
  "items": []
 },
 {
  "mod": "FI",
  "table": "USOBT_C",
  "desc": "트랜잭션 코드별 권한 개체(오브젝트) 관계를 담는 테이블. 역할 설계 시 어떤 권한 개체를 손봐야 하는지 여기서 확인한다.",
  "cds": [],
  "cloud": "unknown",
  "keyuser": "unknown",
  "note": "대응 없음(하) — Public은 IAM(비즈니스 카탈로그·역할)으로 권한 관리. Fiori 앱 Business Catalogs / Maintain Business Roles 사용. Basis/GRC 보안 테이블",
  "terms": [],
  "items": []
 },
 {
  "mod": "MM",
  "table": "MATDOC",
  "desc": "자재 이동 통합 테이블",
  "cds": [
   "I_MaterialDocumentHeader_2",
   "I_MaterialDocumentItem_2",
   "I_MaterialStock_2"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "MKPF+MSEG 통합. 합계는 저장하지 않고 조회 시 실시간 계산. MARC/MARD 분산 저장 불필요(HANA 컬럼 구조) · 유사 매핑(상) — 헤더·아이템 직접 대응. 재고 합계는 I_MaterialStock_2 실시간 집계",
  "terms": [
   "material-ledger",
   "inventory-accounting"
  ],
  "items": [
   "xmod-ml",
   "co-ml"
  ],
  "menus": [
   "CKMLCP"
  ]
 },
 {
  "mod": "MM",
  "table": "MLDOCCCS",
  "desc": "자재원장 원가요소 분할 테이블",
  "cds": [
   "I_JournalEntryItem"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "MLDOC와 함께 실제원가 항목의 원가요소별 분석에 사용 · 유사 매핑(하) — 실제원가는 ACDOCA 기반. 원가요소 분할 전용 Released 뷰는 미확인(View Browser에서 CostComponent 검색)",
  "terms": [
   "material-ledger",
   "actual-cost-splitting"
  ],
  "items": [
   "co-ml"
  ],
  "menus": [
   "CKMLCP"
  ]
 },
 {
  "mod": "MM",
  "table": "FCML_* (구 보고 테이블)",
  "desc": "ML 드릴다운 리포팅용 보고 테이블군",
  "cds": [
   "FCML_MAT_V",
   "FCML_REP_V",
   "FCML_CCS_REP_V"
  ],
  "cloud": "no",
  "keyuser": "unknown",
  "note": "1610부터 CDS뷰가 MLDOC·MLDOCCCS에서 동적 조회로 대체. 구 트랜잭션 FCML_FILL 폐지. KKBML 수정 시 원가요소별 표시 가능",
  "terms": [
   "material-ledger"
  ],
  "items": [
   "co-ml"
  ],
  "menus": [
   "CKMLCP"
  ]
 },
 {
  "mod": "MM",
  "table": "CKMLHD / CKMLPR / CKMLPP / CKMLCR",
  "desc": "자재원장 마스터 데이터 테이블군",
  "cds": [
   "I_ProductValuationBasic",
   "I_ProductValuationAccounting",
   "I_ProductValuationAccounting_2"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "M10 마이그레이션(Migrate Material Ledger Master Data)에서 ML 통화로 채워지고 ACDOCA로 이관 · 유사 매핑(중) — 자재 평가 대응. 기간별 수량/금액은 I_JournalEntryItem·I_MaterialStock_2로 보완 · Cloud ✓: I_ProductValuationBasic·I_ProductValuationAccounting_2 / Cloud –: I_ProductValuationAccounting",
  "terms": [
   "material-ledger"
  ],
  "items": [
   "co-ml"
  ],
  "menus": [
   "CKMLCP"
  ]
 },
 {
  "mod": "MM",
  "table": "XBEW",
  "desc": "구 재고 평가 테이블",
  "cds": [
   "I_ProductValuationBasic",
   "I_JournalEntryItem"
  ],
  "cloud": "yes",
  "keyuser": "unknown",
  "note": "S/4HANA 전환 시 ACDOCA·ACDOCA_M_EXTRACT로 이관 (M10) · 유사 매핑(하) — S/4 전환 시 폐기된 구조. 현행 평가값은 제품 평가 뷰·ACDOCA로 대체 조회",
  "terms": [
   "material-ledger",
   "inventory-accounting"
  ],
  "items": [
   "xmod-ml"
  ],
  "menus": [
   "CKMLCP"
  ]
 },
 {
  "mod": "MM",
  "table": "KKBML",
  "desc": "ML 드릴다운 리포트 정의 테이블",
  "cds": [],
  "cloud": "unknown",
  "keyuser": "unknown",
  "note": "KKMLV 전역변수에 원가요소 구조를 가져오도록 수정하면 드릴다운 리포트를 원가요소별로 볼 수 있음 · 대응 없음(하) — Public에서 리포트 정의 커스텀 불가. 원가요소별 분석은 표준 Fiori 앱으로 대체",
  "terms": [
   "material-ledger"
  ],
  "items": [
   "co-ml"
  ],
  "menus": [
   "CKMLCP"
  ]
 },
 {
  "mod": "SD",
  "table": "KNVK",
  "desc": "거래처(고객) 연락처 마스터 테이블. BP의 연락처 관계가 CVI 동기화를 통해 이 테이블로 넘어간다. 커스텀 BP 관계 카테고리를 만들 때 동기화 지점으로 함께 봐야 한다.",
  "cds": [
   "I_BPContactToFuncAndDept",
   "I_BusinessPartnerRelationship",
   "I_BPRelationship_2"
  ],
  "cloud": "mix",
  "keyuser": "unknown",
  "note": "유사 매핑(중) — BP 관계 뷰로 조회(API_BUSINESS_PARTNER의 A_BusinessPartnerContact 대응). 커스텀 BP 관계 카테고리 동기화 지점 · Cloud ✓: I_BPContactToFuncAndDept·I_BPRelationship_2 / Cloud –: I_BusinessPartnerRelationship",
  "terms": [],
  "items": []
 }
];
