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
const TABLE_ROWS = [
  // ---- FI ----
  { mod: 'FI', table: 'BKPF', desc: '전표 헤더', cds: ['I_JournalEntry'], cloud: 'unknown', keyuser: 'yes', note: 'ACDOCA(Universal Journal) 기반', terms: ['document', 'document-type', 'posting-key'], items: ['gl-doc-type', 'gl-doc-number', 'gl-posting-key'] },
  { mod: 'FI', table: 'BSEG', desc: '전표 라인아이템', cds: ['I_JournalEntryItem', 'I_OPERATIONALACCTGDOCITEM'], cloud: 'unknown', keyuser: 'mix', note: 'KeyUser ✓: I_JournalEntryItem · ACDOCA 기반', terms: ['line-item', 'document'], items: ['gl-doc-type', 'gl-field-status'] },
  { mod: 'FI', table: 'ACDOCA', desc: 'GL 원장 라인아이템·잔액', cds: ['I_GLAccountLineItem', 'I_GLACCOUNTLINEITEMRAWDATA', 'I_OperationalAcctgDocCube', 'I_JOURNALENTRYITEMCUBE', 'I_GLAccountYearToDateBalanceC', 'I_GLACCOUNTLINEITEMCUBE', 'I_GLAcctBalanceCube', 'C_TRIALBALANCE'], cloud: 'mix', keyuser: 'mix', note: 'Cloud ✓: 큐브 4종 · KeyUser ✓: I_GLAccountLineItem·I_GLAcctBalanceCube(커뮤니티 확인) · FAGLFLEXT 총계테이블 대체 · 시산표 API(C_TRIALBALANCE_CDS)', terms: ['universal-journal', 'general-ledger', 'ledger'], items: ['gl-ledger', 'gl-docsplit'] },
  { mod: 'FI', table: 'ACDOCP', desc: '계획 데이터', cds: ['A_JournalEntryItemBasic'], cloud: 'unknown', keyuser: 'unknown', note: 'SAC 재무계획 연계용', terms: [], items: [] },
  { mod: 'FI', table: 'SKA1 / SKAT / SKB1', desc: 'G/L 계정 마스터', cds: ['I_GLAccount'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['gl-account', 'chart-of-accounts', 'account-group'], items: ['gl-coa', 'gl-acct-group', 'gl-coa-assign'] },
  { mod: 'FI', table: 'T003', desc: '전표유형', cds: ['I_AccountingDocumentType', 'I_FinancialDocumentTypeText'], cloud: 'unknown', keyuser: 'unknown', note: '공식 Released', terms: ['document-type'], items: ['gl-doc-type', 'gl-doc-number'] },
  { mod: 'FI', table: 'T004', desc: '계정과목표', cds: ['I_ChartOfAccounts', 'I_ChartOfAccountsText'], cloud: 'unknown', keyuser: 'unknown', note: '공식 Released', terms: ['chart-of-accounts'], items: ['gl-coa'] },
  { mod: 'FI', table: 'BSID / BSAD', desc: '고객 미결 / 반제 항목', cds: ['I_ARLINEITEM', 'I_ARJrnlEntrItmAgingGrid', 'I_TotalAccountsReceivables'], cloud: 'no', keyuser: 'yes', note: 'TDD API State 확인값 (C0 Released) · 에이징/미결집계 뷰', terms: ['open-item-management', 'clearing', 'sub-ledger'], items: ['ar-recon', 'gl-clear-prep'] },
  { mod: 'FI', table: 'BSIK / BSAK', desc: '공급업체 미결 / 반제 항목', cds: ['I_APLINEITEM', 'I_APJrnlEntrItmAgingGrid'], cloud: 'unknown', keyuser: 'yes', note: '에이징 뷰', terms: ['open-item-management', 'clearing', 'sub-ledger'], items: ['ap-recon', 'gl-clear-prep'] },
  { mod: 'FI', table: 'KNA1', desc: '고객 마스터', cds: ['I_Customer'], cloud: 'unknown', keyuser: 'yes', note: 'BP 통합 이후는 I_BusinessPartner 권장', terms: ['business-partner', 'cvi'], items: ['ar-cust-group', 'ar-cust-num', 'ap-cvi'] },
  { mod: 'FI', table: 'LFA1', desc: '공급업체 마스터', cds: ['I_Supplier'], cloud: 'unknown', keyuser: 'yes', note: 'BP 통합 이후는 I_BusinessPartner 권장', terms: ['business-partner', 'cvi'], items: ['ap-vendor-group', 'ap-vendor-num', 'ap-cvi'] },
  { mod: 'FI', table: 'BUT000', desc: '비즈니스 파트너', cds: ['I_BusinessPartner'], cloud: 'unknown', keyuser: 'yes', note: '엑셀 P주요필드 탭에 필드 상세 수록', terms: ['business-partner', 'cvi'], items: ['ap-bp-role', 'ap-bp-num', 'ap-cvi'] },
  { mod: 'FI', table: 'T001', desc: '회사코드', cds: ['I_CompanyCode'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['company-code', 'company'], items: ['org-company-code', 'org-ccode-company'] },
  { mod: 'FI', table: 'TCURR', desc: '환율', cds: ['I_Exchangeraterawdata', 'I_ExchangeRate'], cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['foreign-currency-valuation'], items: ['gl-fx-diff-acct', 'close-fxval'] },
  { mod: 'FI', table: 'WITH_ITEM', desc: '원천세 아이템', cds: ['I_WithholdingTaxItem'], cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['withholding-tax'], items: ['wth-type', 'wth-account'] },
  { mod: 'FI', table: 'ANKA', desc: '자산클래스·감가상각 마스터', cds: ['I_AssetClass', 'I_DepreciationKey', 'I_DepreciationAreaForLedger', 'I_ChartOfDepreciation', 'I_AssetTransactionType'], cloud: 'unknown', keyuser: 'unknown', note: '공식 Released', terms: ['asset-class', 'depreciation-key', 'depreciation-area', 'chart-of-depreciation'], items: ['aa-class', 'aa-depkey', 'aa-deparea', 'aa-depchart', 'aa-transtype'] },
  { mod: 'FI', table: 'ANLA', desc: '고정자산 마스터·평가', cds: ['I_FixedAsset', 'I_FixedAssetForLedger', 'I_FixedAssetAssgmt', 'I_AssetValuationForLedger'], cloud: 'unknown', keyuser: 'unknown', note: '공식 Released', terms: ['acquire-to-decommission'], items: [] },
  { mod: 'FI', table: 'REGUP', desc: '자동지급 제안 (개별 미결 항목)', cds: ['I_PaymentProposalItem'], cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['automatic-payment', 'payment-method'], items: ['ap-paymethod-ccode', 'ap-housebank'] },
  { mod: 'FI', table: 'REGUH', desc: '자동지급 지급프로그램 헤더', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['automatic-payment', 'house-bank'], items: ['ap-housebank', 'ap-paymethod-ccode'] },
  { mod: 'FI', table: 'T012', desc: '하우스뱅크 계좌 연결', cds: ['I_HouseBankAccountLinkage'], cloud: 'unknown', keyuser: 'unknown', note: 'G/L 계정은 미노출(커뮤니티 확인)', terms: ['house-bank'], items: ['ap-housebank'] },
  { mod: 'FI', table: 'T882', desc: '원장·원장별 회사코드 설정', cds: ['I_LedgerCoCode', 'I_Ledger', 'I_LedgerText'], cloud: 'yes', keyuser: 'unknown', note: '신규 릴리스 (developer extensibility)', terms: ['ledger', 'company-code'], items: ['gl-ledger', 'org-company-code'] },
  { mod: 'FI', table: 'T009', desc: '회계연도·회계기간', cds: ['I_FSCLYRINTVLDRVTNFORPOSTGDATE', 'I_FSCLYRINTVLDRVTNFORCOMPRNDTE', 'I_FSCLQTRWTHOUTFSCLYRFORVAR', 'I_FSCLPERDWTHOUTFSCLYRFORVAR', 'I_CURRENTYEARFISCALPERIODTEXT', 'I_FISCALCALENDARDTEPREVPERIODS', 'I_FISCALCALENDARDATENXTPERIODS', 'I_FISCALCALDATEPREVFSCLPERIOD', 'I_FISCALCALDATENXTFSCLPERIOD'], cloud: 'yes', keyuser: 'unknown', note: '신규 릴리스 (developer extensibility)', terms: ['fiscal-year-variant', 'posting-period'], items: ['gl-fiscal-year', 'gl-posting-period', 'gl-fiscal-assign'] },
  { mod: 'FI', table: 'SETHEADER', desc: '계층구조(기능영역·이익센터)', cds: ['I_FUNCTIONALAREAHIERARCHY', 'I_FUNCTIONALAREAHIERNODE', 'I_PROFITCENTERHIERARCHY', 'I_PROFITCENTERHIERARCHYNODE'], cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['functional-area', 'profit-center'], items: ['org-functional-area', 'co-prctr'] },
  // ---- CO ----
  { mod: 'CO', table: 'COEP', desc: 'CO 라인아이템(실적)', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['cost-element', 'cost-center'], items: ['co-celem', 'co-alloc'] },
  { mod: 'CO', table: 'COBK', desc: 'CO 문서 헤더', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '', terms: [], items: [] },
  { mod: 'CO', table: 'AUFK', desc: '내부오더 마스터', cds: ['I_InternalOrder'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['internal-order', 'settlement'], items: ['co-order', 'co-settle'] },
  { mod: 'CO', table: 'CSKS / CSKT', desc: '코스트센터 마스터 / 텍스트', cds: ['I_CostCenter'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['cost-center'], items: ['co-ccenter'] },
  { mod: 'CO', table: 'CEPC / CECT', desc: '이익센터 마스터 / 텍스트', cds: ['I_ProfitCenter'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['profit-center'], items: ['co-prctr'] },
  { mod: 'CO', table: 'TKA02', desc: '관리회계영역', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['controlling-area'], items: ['co-area', 'co-ccassign'] },
  { mod: 'CO', table: 'COSP / COSS', desc: '기간 합계(외부 / 내부)', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['cost-center'], items: ['co-ccenter'] },
  { mod: 'CO', table: 'SETHEADER', desc: '계층구조(코스트센터·액티비티유형·통계키수치)', cds: ['I_COSTCENTERHIERARCHY', 'I_COSTCENTERHIERARCHYNODE', 'I_COSTCTRACTIVITYTYPEHIERARCHY', 'I_COSTCTRACTIVITYTYPEHIERNODE', 'I_STSTCLKEYFIGUREHIERARCHY', 'I_STSTCLKEYFIGUREHIERNODE'], cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['cost-center', 'activity-type'], items: ['co-ccenter', 'co-acttype'] },
  { mod: 'CO', table: null, desc: '계층구조 런타임 노드', cds: ['I_HIERRUNTIMERPRSTNNODE', 'I_HIERRUNTIMERPRSTNNODETEXT'], cloud: 'unknown', keyuser: 'unknown', note: '특정 테이블에 종속되지 않은 런타임 계층 노드', terms: [], items: [] },
  // ---- SD ----
  { mod: 'SD', table: 'VBAK / VBAP', desc: '판매오더 헤더 / 아이템', cds: ['I_SalesDocument', 'I_SalesDocumentItem'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['order-to-cash', 'sd-module'], items: ['xmod-sdbill'] },
  { mod: 'SD', table: 'LIKP / LIPS', desc: '납품 헤더 / 아이템', cds: ['I_DeliveryDocument', 'I_DeliveryDocumentItem'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['order-to-cash'], items: ['xmod-sdbill'] },
  { mod: 'SD', table: 'VBRK / VBRP', desc: '청구 헤더 / 아이템', cds: ['I_BillingDocument', 'I_BillingDocumentItem'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['order-to-cash', 'revenue-recognition'], items: ['xmod-sdbill', 'xmod-vkoa'] },
  { mod: 'SD', table: 'VBFA', desc: '문서 흐름', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '', terms: [], items: [] },
  // ---- MM ----
  { mod: 'MM', table: 'MARA', desc: '자재 마스터(기본)', cds: ['I_Product'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['material-master', 'mm-module'], items: [] },
  { mod: 'MM', table: 'MARC', desc: '자재 마스터(플랜트)', cds: ['I_ProductPlant'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['material-master', 'mm-module'], items: ['xmod-plant'] },
  { mod: 'MM', table: 'MBEW', desc: '자재 평가', cds: ['I_ProductValuation', 'I_PRODUCTVALUATIONACCT'], cloud: 'unknown', keyuser: 'mix', note: 'KeyUser ✓: I_ProductValuation', terms: ['standard-cost-valuation', 'inventory-accounting'], items: ['xmod-ml'] },
  { mod: 'MM', table: 'MKPF / MSEG', desc: '자재문서 헤더 / 아이템', cds: ['I_MaterialDocumentHeader', 'I_MaterialDocumentItem'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['inventory-accounting', 'mm-module'], items: ['xmod-obyc'] },
  { mod: 'MM', table: 'EKKO / EKPO', desc: '구매오더 헤더 / 아이템', cds: ['I_PurchaseOrder', 'I_PurchaseOrderItem'], cloud: 'unknown', keyuser: 'yes', note: '', terms: ['p2p', 'invoice-verification'], items: [] },
  { mod: 'MM', table: 'EKBE', desc: '구매오더 이력', cds: ['I_PurchaseOrderHistory', 'I_GRIRPROCESSHISTORY'], cloud: 'mix', keyuser: 'mix', note: 'Cloud ✓: I_GRIRPROCESSHISTORY(신규 릴리스) · KeyUser ✓: I_PurchaseOrderHistory', terms: ['gr-ir', 'invoice-verification'], items: ['close-grir'] },
  { mod: 'MM', table: 'MLDOC', desc: '수불부(자재원장)', cds: ['I_ActlCostgMatlValueChainItem', 'I_MATERIALLEDGERCUBE_LIT'], cloud: 'unknown', keyuser: 'unknown', note: '실제원가·단가 큐브', terms: ['material-ledger', 'actual-costing'], items: ['xmod-ml', 'co-ml'] },
  { mod: 'MM', table: 'RSEG', desc: '임시송장(공급업체 송장 귀속)', cds: ['I_SUPPLIERINVOICEACCOUNTASSGMT'], cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['invoice-verification', 'gr-ir'], items: ['xmod-obyc'] },
  // ---- PP ----
  { mod: 'PP', table: 'AFKO / AFPO', desc: '생산오더 헤더 / 오퍼레이션', cds: null, cloud: 'unknown', keyuser: 'unknown', note: 'MRP용 PPH_MRP_* 뷰는 별도 존재', terms: ['production-costing', 'wip-accounting'], items: [] },
  { mod: 'PP', table: 'AUFM', desc: '자재 이동(오더 관련)', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['inventory-accounting'], items: ['xmod-obyc'] },
  { mod: 'PP', table: 'PLKO / PLPO', desc: '작업순서 헤더 / 공정', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '', terms: ['activity-type'], items: ['co-acttype'] },
  // ---- PS ----
  { mod: 'PS', table: 'PRPS', desc: 'WBS 요소', cds: ['I_EnterpriseProjectElement'], cloud: 'unknown', keyuser: 'unknown', note: '', terms: [], items: [] },
];
