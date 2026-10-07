// Table(CDS View) 매핑 데이터
// 출처: 내부 T-Code 매핑 정리 자료 (P주요필드 탭: I_BUSINESSPARTNER 필드 상세)
//   엑셀에 없는 CDS뷰는 공개 자료로 대조, 확인 불가 항목은 확인중(unknown) 태그
// flag: 'yes' | 'no' | 'unknown'(확인중)
const TABLE_MODULES = [
  { id: 'FI', name: 'FI', sub: '재무회계', open: true },
  { id: 'CO', name: 'CO', sub: '관리회계' },
  { id: 'SD', name: 'SD', sub: '판매관리' },
  { id: 'MM', name: 'MM', sub: '자재관리' },
  { id: 'PP', name: 'PP', sub: '생산관리' },
];
const TABLE_ROWS = [
  // ---- FI ----
  { mod: 'FI', table: 'BKPF', desc: '전표 헤더', cds: ['I_JournalEntry'], cloud: 'unknown', keyuser: 'yes', note: 'ACDOCA(Universal Journal) 기반' },
  { mod: 'FI', table: 'BSEG', desc: '전표 라인아이템', cds: ['I_JournalEntryItem'], cloud: 'unknown', keyuser: 'yes', note: 'ACDOCA 기반' },
  { mod: 'FI', table: 'ACDOCA', desc: 'GL 원장 라인아이템', cds: ['I_GLAccountLineItem'], cloud: 'unknown', keyuser: 'yes', note: 'FAGLFLEXT 총계테이블 대체' },
  { mod: 'FI', table: 'ACDOCP', desc: '계획 데이터', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '' },
  { mod: 'FI', table: 'SKA1 / SKAT / SKB1', desc: 'G/L 계정 마스터', cds: ['I_GLAccount'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'FI', table: 'BSID / BSAD', desc: '고객 미결 / 반제 항목', cds: ['I_ARLINEITEM'], cloud: 'no', keyuser: 'yes', note: 'TDD API State 확인값 (C0 Released)' },
  { mod: 'FI', table: 'BSIK / BSAK', desc: '공급업체 미결 / 반제 항목', cds: ['I_APLINEITEM'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'FI', table: 'KNA1', desc: '고객 마스터', cds: ['I_Customer'], cloud: 'unknown', keyuser: 'yes', note: 'BP 통합 이후는 I_BusinessPartner 권장' },
  { mod: 'FI', table: 'LFA1', desc: '공급업체 마스터', cds: ['I_Supplier'], cloud: 'unknown', keyuser: 'yes', note: 'BP 통합 이후는 I_BusinessPartner 권장' },
  { mod: 'FI', table: 'BUT000', desc: '비즈니스 파트너', cds: ['I_BusinessPartner'], cloud: 'unknown', keyuser: 'yes', note: '엑셀 P주요필드 탭에 필드 상세 수록' },
  { mod: 'FI', table: 'T001', desc: '회사코드', cds: ['I_CompanyCode'], cloud: 'unknown', keyuser: 'yes', note: '' },
  // ---- CO ----
  { mod: 'CO', table: 'COEP', desc: 'CO 라인아이템(실적)', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '' },
  { mod: 'CO', table: 'COBK', desc: 'CO 문서 헤더', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '' },
  { mod: 'CO', table: 'AUFK', desc: '내부오더 마스터', cds: ['I_InternalOrder'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'CO', table: 'CSKS / CSKT', desc: '코스트센터 마스터 / 텍스트', cds: ['I_CostCenter'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'CO', table: 'CEPC / CECT', desc: '이익센터 마스터 / 텍스트', cds: ['I_ProfitCenter'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'CO', table: 'TKA02', desc: '관리회계영역', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '' },
  { mod: 'CO', table: 'COSP / COSS', desc: '기간 합계(외부 / 내부)', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '' },
  // ---- SD ----
  { mod: 'SD', table: 'VBAK / VBAP', desc: '판매오더 헤더 / 아이템', cds: ['I_SalesDocument', 'I_SalesDocumentItem'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'SD', table: 'LIKP / LIPS', desc: '납품 헤더 / 아이템', cds: ['I_DeliveryDocument', 'I_DeliveryDocumentItem'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'SD', table: 'VBRK / VBRP', desc: '청구 헤더 / 아이템', cds: ['I_BillingDocument', 'I_BillingDocumentItem'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'SD', table: 'VBFA', desc: '문서 흐름', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '' },
  // ---- MM ----
  { mod: 'MM', table: 'MARA', desc: '자재 마스터(기본)', cds: ['I_Product'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'MM', table: 'MARC', desc: '자재 마스터(플랜트)', cds: ['I_ProductPlant'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'MM', table: 'MBEW', desc: '자재 평가', cds: ['I_ProductValuation'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'MM', table: 'MKPF / MSEG', desc: '자재문서 헤더 / 아이템', cds: ['I_MaterialDocumentHeader', 'I_MaterialDocumentItem'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'MM', table: 'EKKO / EKPO', desc: '구매오더 헤더 / 아이템', cds: ['I_PurchaseOrder', 'I_PurchaseOrderItem'], cloud: 'unknown', keyuser: 'yes', note: '' },
  { mod: 'MM', table: 'EKBE', desc: '구매오더 이력', cds: ['I_PurchaseOrderHistory'], cloud: 'unknown', keyuser: 'yes', note: '' },
  // ---- PP ----
  { mod: 'PP', table: 'AFKO / AFPO', desc: '생산오더 헤더 / 오퍼레이션', cds: null, cloud: 'unknown', keyuser: 'unknown', note: 'MRP용 PPH_MRP_* 뷰는 별도 존재' },
  { mod: 'PP', table: 'AUFM', desc: '자재 이동(오더 관련)', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '' },
  { mod: 'PP', table: 'PLKO / PLPO', desc: '작업순서 헤더 / 공정', cds: null, cloud: 'unknown', keyuser: 'unknown', note: '' },
];
