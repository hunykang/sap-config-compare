// UserMenu(SE43): PCE T-code ↔ Public 앱 매핑 (why=왜 쓰는지 한줄평)
const USERMENU_DATA = [
 {
  "tcode": "FS00",
  "ko": "G/L 계정 마스터",
  "en": "G/L Account Master Data",
  "menu": "Master Data > GL",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F0763A",
   "en": "Manage G/L Account Master data",
   "ko": "G/L 계정 마스터 데이터 관리",
   "scopes": [
    "BNG",
    "J58"
   ],
   "note": ""
  },
  "n": 1,
  "tcodes": [
   {
    "c": "FS00",
    "l": "마스터 관리"
   },
   {
    "c": "OB_GLACC11",
    "l": "일괄변경"
   },
   {
    "c": "S_ALR_87012328",
    "l": "계정 목록"
   }
  ],
  "why": "계정의 성격과 전기 규칙을 정하고, 일괄로 고치고, 목록으로 점검하는 G/L 계정 관리"
 },
 {
  "tcode": "FD01",
  "ko": "고객 마스터 (회계)",
  "en": "Customer Master (Accounting)",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F0850A",
   "en": "Manage Customer Master data",
   "ko": "고객 마스터 데이터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "생성"
  },
  "n": 2,
  "tcodes": [
   {
    "c": "FD01",
    "l": "생성"
   },
   {
    "c": "FD02",
    "l": "변경"
   },
   {
    "c": "FD03",
    "l": "조회"
   }
  ],
  "why": "매출채권의 시작, 고객의 회계 속성을 여는 곳"
 },
 {
  "tcode": "FD05",
  "ko": "고객 마스터 차단/삭제",
  "en": "Customer Master Block/Delete",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F0850A",
   "en": "Manage Customer Master data",
   "ko": "고객 마스터 데이터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "차단"
  },
  "n": 3,
  "tcodes": [
   {
    "c": "FD05",
    "l": "차단"
   },
   {
    "c": "FD06",
    "l": "삭제 표시"
   }
  ],
  "why": "거래 중단 고객을 막고 정리 대상을 표시하는 안전장치"
 },
 {
  "tcode": "FD33",
  "ko": "",
  "en": "Display Customer Credit Management",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F4596",
   "en": "Manage Credit Accounts",
   "ko": "여신 계정 관리",
   "scopes": [],
   "note": ""
  },
  "n": 4,
  "tcodes": [
   {
    "c": "FD33",
    "l": ""
   }
  ],
  "why": "고객 신용한도가 살아있는지 확인하는 화면"
 },
 {
  "tcode": "F.31",
  "ko": "",
  "en": "Credit Management - Overview",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F4596",
   "en": "Manage Credit Accounts",
   "ko": "여신 계정 관리",
   "scopes": [],
   "note": ""
  },
  "n": 5,
  "tcodes": [
   {
    "c": "F.31",
    "l": ""
   }
  ],
  "why": "여신 현황 전체를 한 화면에서 조망하는 개요"
 },
 {
  "tcode": "FDK43",
  "ko": "",
  "en": "Credit Management - Master Data List",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F4596",
   "en": "Manage Credit Accounts",
   "ko": "여신 계정 관리",
   "scopes": [],
   "note": ""
  },
  "n": 6,
  "tcodes": [
   {
    "c": "FDK43",
    "l": ""
   }
  ],
  "why": "여신 마스터가 제대로 세팅됐는지 목록으로 검증"
 },
 {
  "tcode": "XD01",
  "ko": "고객 마스터 (중앙)",
  "en": "Customer Master (Centrally)",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F0850A",
   "en": "Manage Customer Master data",
   "ko": "고객 마스터 데이터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "중앙 생성"
  },
  "n": 7,
  "tcodes": [
   {
    "c": "XD01",
    "l": "생성"
   },
   {
    "c": "XD02",
    "l": "변경"
   },
   {
    "c": "XD03",
    "l": "조회"
   }
  ],
  "why": "영업과 회계가 함께 쓰는 고객 마스터의 본진"
 },
 {
  "tcode": "XD05",
  "ko": "고객 마스터 차단/삭제 (중앙)",
  "en": "Customer Master Block/Delete (Centrally)",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F0850A",
   "en": "Manage Customer Master data",
   "ko": "고객 마스터 데이터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "중앙 차단"
  },
  "n": 8,
  "tcodes": [
   {
    "c": "XD05",
    "l": "차단"
   },
   {
    "c": "XD06",
    "l": "삭제 표시"
   }
  ],
  "why": "중앙 고객의 차단·삭제 표시를 거는 곳"
 },
 {
  "tcode": "S_ALR_87012179",
  "ko": "고객 목록",
  "en": "Customer List",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F0850A",
   "en": "Manage Customer Master data",
   "ko": "고객 마스터 데이터 관리",
   "scopes": [
    "1RK"
   ],
   "note": ""
  },
  "n": 9,
  "tcodes": [
   {
    "c": "S_ALR_87012179",
    "l": "고객 목록"
   },
   {
    "c": "S_ALR_87012180",
    "l": "주소 목록"
   }
  ],
  "why": "고객 전체 목록, 마스터 점검의 기본 자료"
 },
 {
  "tcode": "S_ALR_87012182",
  "ko": "고객 변경 이력",
  "en": "Changes to Customers",
  "menu": "Master Data > Customer",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F2681",
   "en": "Display Item Change Log - Customer",
   "ko": "항목 변경 로그 조회 고객",
   "scopes": [
    "1RK"
   ],
   "note": ""
  },
  "n": 10,
  "tcodes": [
   {
    "c": "S_ALR_87012182",
    "l": "변경 이력"
   },
   {
    "c": "S_ALR_87012183",
    "l": "중요 변경"
   }
  ],
  "why": "누가 언제 고객 정보를 바꿨는지 추적하는 변경 로그"
 },
 {
  "tcode": "FK01",
  "ko": "공급업체 마스터 (회계)",
  "en": "Supplier Master (Accounting)",
  "menu": "Master Data > Vendor (Supplier)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F1053A",
   "en": "Manage Supplier Master data",
   "ko": "공급업체 마스터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "생성"
  },
  "n": 11,
  "tcodes": [
   {
    "c": "FK01",
    "l": "생성"
   },
   {
    "c": "FK02",
    "l": "변경"
   },
   {
    "c": "FK03",
    "l": "조회"
   }
  ],
  "why": "매입채무의 시작, 공급업체의 회계 속성을 여는 곳"
 },
 {
  "tcode": "FK05",
  "ko": "공급업체 마스터 차단/삭제",
  "en": "Supplier Master Block/Delete",
  "menu": "Master Data > Vendor (Supplier)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F1053A",
   "en": "Manage Supplier Master data",
   "ko": "공급업체 마스터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "차단"
  },
  "n": 12,
  "tcodes": [
   {
    "c": "FK05",
    "l": "차단"
   },
   {
    "c": "FK06",
    "l": "삭제 표시"
   }
  ],
  "why": "거래 중단 공급업체를 막는 안전장치"
 },
 {
  "tcode": "FK09",
  "ko": "",
  "en": "Confirm Vendor List (Accounting)",
  "menu": "Master Data > Vendor (Supplier)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "FK09",
   "en": "Confirm Supplier List",
   "ko": "공급업체 리스트 확정",
   "scopes": [],
   "note": "민감 필드 이중 확인 승인/거절"
  },
  "n": 13,
  "tcodes": [
   {
    "c": "FK09",
    "l": ""
   }
  ],
  "why": "공급업체 변경을 확정 전에 목록으로 재확인"
 },
 {
  "tcode": "XK01",
  "ko": "공급업체 마스터 (중앙)",
  "en": "Supplier Master (Centrally)",
  "menu": "Master Data > Vendor (Supplier)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F1053A",
   "en": "Manage Supplier Master data",
   "ko": "공급업체 마스터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "중앙 생성"
  },
  "n": 14,
  "tcodes": [
   {
    "c": "XK01",
    "l": "생성"
   },
   {
    "c": "XK02",
    "l": "변경"
   },
   {
    "c": "XK03",
    "l": "조회"
   }
  ],
  "why": "구매와 회계가 함께 쓰는 공급업체 마스터의 본진"
 },
 {
  "tcode": "XK05",
  "ko": "공급업체 마스터 차단/삭제 (중앙)",
  "en": "Supplier Master Block/Delete (Centrally)",
  "menu": "Master Data > Vendor (Supplier)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F1053A",
   "en": "Manage Supplier Master data",
   "ko": "공급업체 마스터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "중앙 차단"
  },
  "n": 15,
  "tcodes": [
   {
    "c": "XK05",
    "l": "차단"
   },
   {
    "c": "XK06",
    "l": "삭제 표시"
   }
  ],
  "why": "중앙 공급업체의 차단·삭제 표시를 거는 곳"
 },
 {
  "tcode": "MASS",
  "ko": "",
  "en": "Mass Change",
  "menu": "Master Data > Vendor (Supplier)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F2505",
   "en": "Manage Mass Maintenance",
   "ko": "일괄 유지보수 관리",
   "scopes": [],
   "note": "객체별 앱으로 분리 (제품 F9335 등)"
  },
  "n": 16,
  "tcodes": [
   {
    "c": "MASS",
    "l": ""
   }
  ],
  "why": "마스터를 대량으로 한 번에 고치는 일괄변경 도구"
 },
 {
  "tcode": "S_ALR_87012086",
  "ko": "",
  "en": "Vendor List",
  "menu": "Master Data > Vendor (Supplier)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F1053A",
   "en": "Manage Supplier Master data",
   "ko": "공급업체 마스터 관리",
   "scopes": [
    "1RK"
   ],
   "note": "공급업체 목록"
  },
  "n": 17,
  "tcodes": [
   {
    "c": "S_ALR_87012086",
    "l": ""
   }
  ],
  "why": "공급업체 전체 목록, 마스터 점검의 기본 자료"
 },
 {
  "tcode": "AS01",
  "ko": "고정자산 마스터",
  "en": "Asset Master Record",
  "menu": "Master Data > Asset (Fixed Asset)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F3425A",
   "en": "Manage Fixed Assets",
   "ko": "고정 자산 관리",
   "scopes": [
    "J62"
   ],
   "note": "자산 생성"
  },
  "n": 18,
  "tcodes": [
   {
    "c": "AS01",
    "l": "생성"
   },
   {
    "c": "AS02",
    "l": "변경"
   },
   {
    "c": "AS03",
    "l": "조회"
   }
  ],
  "why": "자산 하나가 장부에 태어나는 곳"
 },
 {
  "tcode": "AS05",
  "ko": "고정자산 차단/삭제",
  "en": "Asset Block/Delete",
  "menu": "Master Data > Asset (Fixed Asset)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F3425A",
   "en": "Manage Fixed Assets",
   "ko": "고정 자산 관리",
   "scopes": [
    "J62"
   ],
   "note": "자산 차단"
  },
  "n": 19,
  "tcodes": [
   {
    "c": "AS05",
    "l": "차단"
   },
   {
    "c": "AS06",
    "l": "삭제 표시"
   }
  ],
  "why": "더 이상 쓰지 않는 자산을 잠그고 정리하는 표시"
 },
 {
  "tcode": "AW01N",
  "ko": "자산 탐색기",
  "en": "Asset Explorer",
  "menu": "Master Data > Asset (Fixed Asset)",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Fixed Asset Overview",
   "ko": "자산 개요",
   "scopes": [
    "2QY"
   ],
   "note": "자산 탐색기"
  },
  "n": 20,
  "tcodes": [
   {
    "c": "AW01N",
    "l": ""
   }
  ],
  "why": "자산의 취득부터 상각까지 전 생애를 한 화면에서 추적"
 },
 {
  "tcode": "FI12",
  "ko": "",
  "en": "Change House Banks/Bank Accounts",
  "menu": "Master Data > Bank",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F1366A",
   "en": "Manage Bank Accounts",
   "ko": "은행계좌관리",
   "scopes": [
    "BFA"
   ],
   "note": "하우스뱅크"
  },
  "n": 21,
  "tcodes": [
   {
    "c": "FI12",
    "l": ""
   }
  ],
  "why": "자사 은행과 계좌를 등록해 자금 흐름의 출구를 만드는 곳"
 },
 {
  "tcode": "FI01",
  "ko": "은행 마스터",
  "en": "Bank Master",
  "menu": "Master Data > Bank",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F1366A",
   "en": "Manage Bank Accounts",
   "ko": "은행계좌관리",
   "scopes": [
    "BFA"
   ],
   "note": "은행 생성"
  },
  "n": 22,
  "tcodes": [
   {
    "c": "FI01",
    "l": "생성"
   },
   {
    "c": "FI02",
    "l": "변경"
   },
   {
    "c": "FI03",
    "l": "조회"
   }
  ],
  "why": "은행 마스터 자체를 여는 곳"
 },
 {
  "tcode": "FI04",
  "ko": "은행 변경내역/삭제",
  "en": "Bank Changes/Delete",
  "menu": "Master Data > Bank",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F1366A",
   "en": "Manage Bank Accounts",
   "ko": "은행계좌관리",
   "scopes": [
    "BFA"
   ],
   "note": "은행 변경 조회"
  },
  "n": 23,
  "tcodes": [
   {
    "c": "FI04",
    "l": "변경내역"
   },
   {
    "c": "FI06",
    "l": "삭제 표시"
   }
  ],
  "why": "은행 정보가 언제 어떻게 바뀌었는지 확인"
 },
 {
  "tcode": "OB08",
  "ko": "",
  "en": "Enter Translation Rates",
  "menu": "Master Data > FX Rate",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F3616",
   "en": "Currency Exchange Rates",
   "ko": "통화 환율",
   "scopes": [
    "J58"
   ],
   "note": ""
  },
  "n": 24,
  "tcodes": [
   {
    "c": "OB08",
    "l": ""
   }
  ],
  "why": "외화 평가와 전기의 기준이 되는 환율을 넣는 곳"
 },
 {
  "tcode": "SU3",
  "ko": "",
  "en": "Maintain Users Own Data",
  "menu": "Master Data",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "",
   "en": "User Settings",
   "ko": "사용자 설정 (런치패드)",
   "scopes": [],
   "note": "SU3 같은 1:1 앱은 없음, 런치패드 개인 설정"
  },
  "n": 25,
  "tcodes": [
   {
    "c": "SU3",
    "l": ""
   }
  ],
  "why": "내 기본값(회사코드·날짜 형식 등)을 정하는 개인 설정"
 },
 {
  "tcode": "SU53",
  "ko": "",
  "en": "Evaluate Authorization Check",
  "menu": "Master Data",
  "group": "Master Data",
  "src": "se43",
  "app": {
   "id": "F4106",
   "en": "Display Authorization Trace",
   "ko": "권한 추적 조회",
   "scopes": [],
   "note": ""
  },
  "n": 26,
  "tcodes": [
   {
    "c": "SU53",
    "l": ""
   }
  ],
  "why": "권한 없음 오류가 났을 때 원인을 바로 찾는 진단 화면"
 },
 {
  "tcode": "FB00",
  "ko": "편집 옵션",
  "en": "Accounting Editing Options",
  "menu": "Master Data",
  "group": "Master Data",
  "src": "se43",
  "app": null,
  "n": 27,
  "tcodes": [
   {
    "c": "FB00",
    "l": ""
   }
  ],
  "why": "전표 입력 화면의 개인 기본값을 정하는 편집 옵션",
  "noapp": true
 },
 {
  "tcode": "F-02",
  "ko": "G/L 전표 입력",
  "en": "Post G/L Document",
  "menu": "GL (General Ledger) > G/L Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F0718",
   "en": "Post General Journal Entries",
   "ko": "일반 분개 전기",
   "scopes": [
    "J58"
   ],
   "note": ""
  },
  "n": 28,
  "tcodes": [
   {
    "c": "F-02",
    "l": "공통원장"
   },
   {
    "c": "FB50",
    "l": "Enjoy"
   },
   {
    "c": "FBR2",
    "l": "참조전기"
   }
  ],
  "why": "모든 수기 전표의 기본이 되는 G/L 전기 화면"
 },
 {
  "tcode": "F-04",
  "ko": "G/L 미결항목 반제하여 전기",
  "en": "Post with Clearing",
  "menu": "GL (General Ledger) > G/L Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F1579",
   "en": "Clear G/L Accounts",
   "ko": "G/L계정 반제",
   "scopes": [],
   "note": ""
  },
  "n": 29,
  "tcodes": [
   {
    "c": "F-04",
    "l": ""
   }
  ],
  "why": "미결항목을 골라 반제하면서 전기하는 화면"
 },
 {
  "tcode": "FB02",
  "ko": "전표 변경/조회",
  "en": "Change/Display Document",
  "menu": "GL (General Ledger) > G/L Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F0717A",
   "en": "Manage Journal Entries",
   "ko": "분개 관리",
   "scopes": [
    "J58",
    "J59",
    "J60"
   ],
   "note": "전표 변경"
  },
  "n": 30,
  "tcodes": [
   {
    "c": "FB02",
    "l": "변경"
   },
   {
    "c": "FB03",
    "l": "조회"
   }
  ],
  "why": "이미 전기된 전표의 내용을 손보고 확인하는 화면"
 },
 {
  "tcode": "FBV0",
  "ko": "임시전표 전기",
  "en": "Post Parked Document",
  "menu": "GL (General Ledger) > G/L Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F0717A",
   "en": "Manage Journal Entries",
   "ko": "분개 관리",
   "scopes": [
    "J58",
    "J59",
    "J60"
   ],
   "note": "임시전표 전기"
  },
  "n": 31,
  "tcodes": [
   {
    "c": "FBV0",
    "l": ""
   }
  ],
  "why": "임시저장된 전표를 정식 전표로 바꾸는 관문"
 },
 {
  "tcode": "FB09",
  "ko": "",
  "en": "Change Line Items",
  "menu": "GL (General Ledger) > G/L Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F0717A",
   "en": "Manage Journal Entries",
   "ko": "분개 관리",
   "scopes": [],
   "note": "변경 가능 필드만 수정 (금액·계정은 불가)"
  },
  "n": 32,
  "tcodes": [
   {
    "c": "FB09",
    "l": ""
   }
  ],
  "why": "전기 후 항목별 세부 정보를 정정하는 화면"
 },
 {
  "tcode": "FAGLB03",
  "ko": "계정 잔액 조회 (IFRS원장)",
  "en": "Display Balances",
  "menu": "GL (General Ledger) > G/L Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F2217",
   "en": "Display Line Items in General Ledger",
   "ko": "총계정원장의 개별 항목 조회",
   "scopes": [
    "J58"
   ],
   "note": "계정 잔액 조회"
  },
  "n": 33,
  "tcodes": [
   {
    "c": "FAGLB03",
    "l": ""
   }
  ],
  "why": "원장별 계정 잔액을 확인하는 잔액 조회"
 },
 {
  "tcode": "FS10N",
  "ko": "G/L 계정 잔액 조회",
  "en": "Display G/L Account Balances",
  "menu": "GL (General Ledger)",
  "group": "GL (General Ledger)",
  "src": "manual",
  "why": "계정별 기간 잔액과 누계를 확인하는 잔액 조회",
  "tcodes": [
   {
    "c": "FS10N",
    "l": ""
   }
  ],
  "app": {
   "id": "F0707A",
   "en": "Display G/L Account Balances",
   "ko": "G/L 계정 잔액 조회",
   "scopes": [],
   "note": ""
  },
  "n": 34
 },
 {
  "tcode": "FAGLL03",
  "ko": "항목 조회/변경(신규)",
  "en": "G/L Account Line Items (New)",
  "menu": "GL (General Ledger) > G/L Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F2217",
   "en": "Display Line Items in General Ledger",
   "ko": "총계정원장의 개별 항목 조회",
   "scopes": [
    "J58"
   ],
   "note": "항목 조회"
  },
  "n": 35,
  "tcodes": [
   {
    "c": "FAGLL03",
    "l": ""
   }
  ],
  "why": "G/L 개별항목을 조회하고 일부를 고치는 화면"
 },
 {
  "tcode": "FBL3N",
  "ko": "G/L 개별항목 조회",
  "en": "",
  "menu": "GL (General Ledger)",
  "group": "GL (General Ledger)",
  "src": "proc",
  "app": {
   "id": "F2217",
   "en": "Display Line Items in General Ledger",
   "ko": "총계정원장의 개별 항목 조회",
   "scopes": [
    "J58"
   ],
   "note": "G/L 개별항목"
  },
  "n": 36,
  "tcodes": [
   {
    "c": "FBL3N",
    "l": ""
   }
  ],
  "why": "G/L 개별항목을 줄 단위로 보는 대표 조회"
 },
 {
  "tcode": "FB08",
  "ko": "전표 역분개",
  "en": "Reverse Document",
  "menu": "GL (General Ledger) > Reverse Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F0717A",
   "en": "Manage Journal Entries",
   "ko": "분개 관리",
   "scopes": [
    "J58",
    "J59",
    "J60"
   ],
   "note": "전표 역분개(개별)"
  },
  "n": 37,
  "tcodes": [
   {
    "c": "FB08",
    "l": "개별"
   },
   {
    "c": "F.80",
    "l": "일괄"
   }
  ],
  "why": "잘못된 전표를 개별 또는 일괄로 되돌리는 역분개"
 },
 {
  "tcode": "FBRA",
  "ko": "반제항목 재설정",
  "en": "Reset Cleared Items",
  "menu": "GL (General Ledger) > Reverse Document",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F2223",
   "en": "Reset Cleared Items",
   "ko": "반제된 항목 재설정",
   "scopes": [],
   "note": ""
  },
  "n": 38,
  "tcodes": [
   {
    "c": "FBRA",
    "l": ""
   }
  ],
  "why": "잘못 반제된 건을 풀어 다시 반제할 수 있게 하는 유일한 방법"
 },
 {
  "tcode": "S_ALR_87012310",
  "ko": "시산표",
  "en": "Trial Balance",
  "menu": "GL (General Ledger)",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F0996",
   "en": "Trial Balance",
   "ko": "시산표",
   "scopes": [
    "J58"
   ],
   "note": ""
  },
  "n": 39,
  "tcodes": [
   {
    "c": "S_ALR_87012310",
    "l": "시산표"
   },
   {
    "c": "S_ALR_87012301",
    "l": "합계·잔액"
   }
  ],
  "why": "결산 전 숫자가 맞는지 확인하는 시산표"
 },
 {
  "tcode": "F.08",
  "ko": "시산표",
  "en": "Trial Balance",
  "menu": "GL (General Ledger)",
  "group": "GL (General Ledger)",
  "src": "manual",
  "why": "결산 전 숫자가 맞는지 확인하는 시산표",
  "tcodes": [
   {
    "c": "F.08",
    "l": ""
   }
  ],
  "app": {
   "id": "F0996",
   "en": "Trial Balance",
   "ko": "시산표",
   "scopes": [],
   "note": ""
  },
  "n": 40
 },
 {
  "tcode": "S_ALR_87012277",
  "ko": "",
  "en": "G/L Account Balances",
  "menu": "GL (General Ledger)",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F0707A",
   "en": "Display G/L Account Balances",
   "ko": "G/L 계정 잔액 조회",
   "scopes": [
    "J58"
   ],
   "note": "G/L 계정 잔액"
  },
  "n": 41,
  "tcodes": [
   {
    "c": "S_ALR_87012277",
    "l": ""
   }
  ],
  "why": "계정 잔액만 빠르게 훑어보는 리포트"
 },
 {
  "tcode": "S_ALR_87012282",
  "ko": "G/L 개별 항목",
  "en": "G/L Line Items",
  "menu": "GL (General Ledger)",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F2217",
   "en": "Display Line Items in General Ledger",
   "ko": "총계정원장의 개별 항목 조회",
   "scopes": [
    "J58"
   ],
   "note": ""
  },
  "n": 42,
  "tcodes": [
   {
    "c": "S_ALR_87012282",
    "l": "G/L 항목"
   },
   {
    "c": "S_ALR_87012291",
    "l": "항목 저널"
   }
  ],
  "why": "G/L 개별항목을 뽑아 분석하는 기본 리포트"
 },
 {
  "tcode": "S_ALR_87012287",
  "ko": "전표 저널",
  "en": "Document Journal",
  "menu": "GL (General Ledger)",
  "group": "GL (General Ledger)",
  "src": "se43",
  "app": {
   "id": "F0717A",
   "en": "Manage Journal Entries",
   "ko": "분개 관리",
   "scopes": [
    "J58",
    "J59",
    "J60"
   ],
   "note": ""
  },
  "n": 43,
  "tcodes": [
   {
    "c": "S_ALR_87012287",
    "l": "전표 저널"
   },
   {
    "c": "S_ALR_87012289",
    "l": "전표 저널·요약"
   }
  ],
  "why": "전표 단위로 전기 내역을 확인하는 저널"
 },
 {
  "tcode": "F-22",
  "ko": "매출송장 생성",
  "en": "Create Customer Invoice",
  "menu": "AR (Account Receivable) > AR Document",
  "group": "AR (Account Receivable)",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Create Outgoing Invoice",
   "ko": "발행 송장 생성",
   "scopes": [
    "J59"
   ],
   "note": "고객 송장"
  },
  "n": 44,
  "tcodes": [
   {
    "c": "F-22",
    "l": "클래식"
   },
   {
    "c": "FB70",
    "l": "Enjoy"
   }
  ],
  "why": "SD를 거치지 않는 수기 매출송장을 발행하는 곳"
 },
 {
  "tcode": "FD10N",
  "ko": "잔액조회",
  "en": "Customer Balance Display",
  "menu": "AR (Account Receivable) > AR Document",
  "group": "AR (Account Receivable)",
  "src": "se43",
  "app": {
   "id": "F0711",
   "en": "Manage Customer Line Item",
   "ko": "고객 개별 항목 관리",
   "scopes": [
    "1WQ",
    "J59"
   ],
   "note": "고객 잔액 조회"
  },
  "n": 45,
  "tcodes": [
   {
    "c": "FD10N",
    "l": ""
   }
  ],
  "why": "고객별 잔액이 얼마인지 한눈에 확인"
 },
 {
  "tcode": "FBL5N",
  "ko": "개별항목조회",
  "en": "Customer Line Items",
  "menu": "AR (Account Receivable) > AR Document",
  "group": "AR (Account Receivable)",
  "src": "se43",
  "app": {
   "id": "F0711",
   "en": "Manage Customer Line Item",
   "ko": "고객 개별 항목 관리",
   "scopes": [
    "1WQ",
    "J59"
   ],
   "note": "고객 개별항목"
  },
  "n": 46,
  "tcodes": [
   {
    "c": "FBL5N",
    "l": ""
   }
  ],
  "why": "고객 미결·반제 항목을 줄 단위로 추적"
 },
 {
  "tcode": "F-30",
  "ko": "반제하여 대체",
  "en": "Post with Clearing",
  "menu": "AR (Account Receivable) > AR Clearing",
  "group": "AR (Account Receivable)",
  "src": "se43",
  "app": {
   "id": "F0773",
   "en": "Clear incoming payments",
   "ko": "입금 반제",
   "scopes": [
    "1WQ"
   ],
   "note": "고객 반제"
  },
  "n": 47,
  "tcodes": [
   {
    "c": "F-30",
    "l": ""
   }
  ],
  "why": "입금을 특정 미결항목에 정확히 붙여 반제"
 },
 {
  "tcode": "S_ALR_87012172",
  "ko": "고객 항목 리포트",
  "en": "Customer Line Item Reports",
  "menu": "AR (Account Receivable)",
  "group": "AR (Account Receivable)",
  "src": "se43",
  "app": {
   "id": "F0711",
   "en": "Manage Customer Line Item",
   "ko": "고객 개별 항목 관리",
   "scopes": [
    "1WQ",
    "J59"
   ],
   "note": ""
  },
  "n": 48,
  "tcodes": [
   {
    "c": "S_ALR_87012172",
    "l": "고객 잔액"
   },
   {
    "c": "S_ALR_87012197",
    "l": "항목 목록"
   },
   {
    "c": "S_ALR_87012173",
    "l": "미결항목"
   },
   {
    "c": "S_ALR_87012178",
    "l": "연체 분석"
   },
   {
    "c": "S_ALR_87012198",
    "l": "반제 항목"
   }
  ],
  "why": "고객 잔액·미결·반제 항목을 뽑아 분석하는 리포트"
 },
 {
  "tcode": "F-43",
  "ko": "매입송장 생성",
  "en": "Create Supplier Invoice",
  "menu": "AP (Account Payable) > AP Document",
  "group": "AP (Account Payable)",
  "src": "se43",
  "app": {
   "id": "F0859",
   "en": "Create Supplier Invoice",
   "ko": "수령 송장 생성",
   "scopes": [
    "J60"
   ],
   "note": "공급업체 송장"
  },
  "n": 49,
  "tcodes": [
   {
    "c": "F-43",
    "l": "일반"
   },
   {
    "c": "FB60",
    "l": "Enjoy"
   }
  ],
  "why": "PO 없는 수기 매입송장을 입력하는 곳"
 },
 {
  "tcode": "FK10N",
  "ko": "구매처 잔액 조회",
  "en": "Vendor Balance Display",
  "menu": "AP (Account Payable) > AP Document",
  "group": "AP (Account Payable)",
  "src": "se43",
  "app": {
   "id": "F0712",
   "en": "Manage Supplier Line Items",
   "ko": "공급업체 개별 항목 관리",
   "scopes": [
    "J60"
   ],
   "note": "공급업체 잔액 조회"
  },
  "n": 50,
  "tcodes": [
   {
    "c": "FK10N",
    "l": ""
   }
  ],
  "why": "공급업체별 잔액을 한눈에 확인"
 },
 {
  "tcode": "FBL1N",
  "ko": "개별항목조회",
  "en": "Vendor Line Items",
  "menu": "AP (Account Payable) > AP Document",
  "group": "AP (Account Payable)",
  "src": "se43",
  "app": {
   "id": "F0712",
   "en": "Manage Supplier Line Items",
   "ko": "공급업체 개별 항목 관리",
   "scopes": [
    "J60"
   ],
   "note": "공급업체 개별항목"
  },
  "n": 51,
  "tcodes": [
   {
    "c": "FBL1N",
    "l": ""
   }
  ],
  "why": "공급업체 미결·반제 항목을 줄 단위로 추적"
 },
 {
  "tcode": "F-51",
  "ko": "반제하여 전기",
  "en": "Post with Clearing",
  "menu": "AP (Account Payable) > AP Clearing",
  "group": "AP (Account Payable)",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Post Clearing",
   "ko": "반제 전기",
   "scopes": [],
   "note": "앱 검색으로 안 뜸 — 분개 관리에서 전표번호 클릭 → 추가 링크 → 반제 전기 앱"
  },
  "n": 52,
  "tcodes": [
   {
    "c": "F-51",
    "l": ""
   }
  ],
  "why": "미결항목을 골라 반제 전기를 거는 화면"
 },
 {
  "tcode": "S_ALR_87012082",
  "ko": "공급업체 항목 리포트",
  "en": "Supplier Line Item Reports",
  "menu": "AP (Account Payable)",
  "group": "AP (Account Payable)",
  "src": "se43",
  "app": {
   "id": "F0712",
   "en": "Manage Supplier Line Items",
   "ko": "공급업체 개별 항목 관리",
   "scopes": [
    "J60"
   ],
   "note": ""
  },
  "n": 53,
  "tcodes": [
   {
    "c": "S_ALR_87012082",
    "l": "공급업체 잔액"
   },
   {
    "c": "S_ALR_87012103",
    "l": "항목 목록"
   },
   {
    "c": "S_ALR_87012083",
    "l": "미결항목"
   },
   {
    "c": "S_ALR_87012104",
    "l": "반제 항목"
   }
  ],
  "why": "공급업체 잔액·미결·반제 항목을 뽑아 분석하는 리포트"
 },
 {
  "tcode": "F-90",
  "ko": "취득-공급업체 포함",
  "en": "Acquisition from purchase w. vendor",
  "menu": "AA (Asset Accounting) > AA Document",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Post Acquisition (Integrated AP) – Without Purchase Order",
   "ko": "취득 전기",
   "scopes": [
    "J62"
   ],
   "note": "자산 취득"
  },
  "n": 54,
  "tcodes": [
   {
    "c": "F-90",
    "l": ""
   }
  ],
  "why": "공급업체 송장과 함께 자산을 취득 전기"
 },
 {
  "tcode": "AB08",
  "ko": "역분개-기타 자산 전표",
  "en": "Reverse Line Items",
  "menu": "AA (Asset Accounting) > AA Document",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "F3425A",
   "en": "Manage Fixed Assets",
   "ko": "고정 자산 관리",
   "scopes": [],
   "note": "자산가액 화면에서 자산전표 역분개"
  },
  "n": 55,
  "tcodes": [
   {
    "c": "AB08",
    "l": ""
   }
  ],
  "why": "자산 전표 한 건을 되돌리는 역분개"
 },
 {
  "tcode": "AIAB",
  "ko": "건설중인자산자본화-배부",
  "en": "AuC Assignment of Dist. Rule",
  "menu": "AA (Asset Accounting) > AA Document",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Define Distribution Rules - Assets under Construction",
   "ko": "배부 규칙 정의 - 건설 중 자산",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 56,
  "tcodes": [
   {
    "c": "AIAB",
    "l": ""
   }
  ],
  "why": "건설 중 자산을 본자산으로 자본화하는 배부 규칙 설정"
 },
 {
  "tcode": "AIBU",
  "ko": "정산",
  "en": "Transfer Asset under Const.",
  "menu": "AA (Asset Accounting) > AA Document",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Execute Settlement - Assets under Construction",
   "ko": "정산 실행 - 건설 중 자산",
   "scopes": [],
   "note": "AUC 정산",
   "webgui": true
  },
  "n": 57,
  "tcodes": [
   {
    "c": "AIBU",
    "l": ""
   }
  ],
  "why": "건설 중 자산 정산을 실제로 실행"
 },
 {
  "tcode": "AIST",
  "ko": "역분개-건설 중 자산 자본화",
  "en": "Reverse Settlement of AuC",
  "menu": "AA (Asset Accounting) > AA Document",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "F3425A",
   "en": "Manage Fixed Assets",
   "ko": "고정 자산 관리",
   "scopes": [],
   "note": "자산가액 화면에서 정산 역분개"
  },
  "n": 58,
  "tcodes": [
   {
    "c": "AIST",
    "l": ""
   }
  ],
  "why": "잘못된 자본화 정산을 되돌리는 역분개"
 },
 {
  "tcode": "ABUMN",
  "ko": "전송-회사 코드 내 이체",
  "en": "Transfer within Company Code",
  "menu": "AA (Asset Accounting) > AA Transfer",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Post Transfer - Within Company Code",
   "ko": "대체 전기 - 회사 코드 내",
   "scopes": [],
   "note": "자산 대체"
  },
  "n": 59,
  "tcodes": [
   {
    "c": "ABUMN",
    "l": ""
   }
  ],
  "why": "회사 안에서 자산의 소속을 바꾸는 이체"
 },
 {
  "tcode": "ABAVN",
  "ko": "스크래핑으로 인한 자산 처분",
  "en": "Asset Retirement by Scrapping",
  "menu": "AA (Asset Accounting) > AA Disposal",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "F7107",
   "en": "Post Retirement Fixed asset",
   "ko": "자산 처분 전기",
   "scopes": [
    "J62"
   ],
   "note": "자산 처분(스크랩)"
  },
  "n": 60,
  "tcodes": [
   {
    "c": "ABAVN",
    "l": ""
   }
  ],
  "why": "폐기된 자산을 장부에서 털어내는 스크랩 처리"
 },
 {
  "tcode": "ABAW",
  "ko": "자산 재평가",
  "en": "Asset Revaluation",
  "menu": "Asset Accounting (FI-AA)",
  "group": "AA (Asset Accounting)",
  "src": "manual",
  "why": "물가 상승 등으로 자산가치를 다시 평가해 올리는 전기",
  "tcodes": [
   {
    "c": "ABAW",
    "l": ""
   }
  ],
  "app": {
   "id": "F7775",
   "en": "Post Revaluation - Fixed Asset",
   "ko": "자산 재평가 전기",
   "scopes": [],
   "note": ""
  },
  "n": 61
 },
 {
  "tcode": "ABAON",
  "ko": "자산 매각 (비통합)",
  "en": "Retirement with Revenue (Non-integrated)",
  "menu": "Asset Accounting (FI-AA)",
  "group": "AA (Asset Accounting)",
  "src": "manual",
  "why": "고객 전표 없이 자산만 매각 처분하는 전기",
  "tcodes": [
   {
    "c": "ABAON",
    "l": ""
   }
  ],
  "app": {
   "id": "F7107",
   "en": "Post Retirement Fixed Asset",
   "ko": "자산 처분 전기",
   "scopes": [],
   "note": ""
  },
  "n": 62
 },
 {
  "tcode": "F-92",
  "ko": "처분-고객 포함",
  "en": "Asset Retire. frm Sale w/ Customer",
  "menu": "AA (Asset Accounting) > AA Disposal",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Post Retirement with Customer",
   "ko": "처분 전기(통합 AR) - 고객 포함",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 63,
  "tcodes": [
   {
    "c": "F-92",
    "l": ""
   }
  ],
  "why": "고객에게 팔면서 자산을 처분 전기"
 },
 {
  "tcode": "AR01",
  "ko": "자산 워크리스트",
  "en": "Asset Worklist",
  "menu": "AA (Asset Accounting) > AA Disposal",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "F3425A",
   "en": "Manage Fixed Assets",
   "ko": "고정 자산 관리",
   "scopes": [],
   "note": "워크리스트·리포트 앱으로 분산"
  },
  "n": 64,
  "tcodes": [
   {
    "c": "AR01",
    "l": "호출"
   },
   {
    "c": "AR30",
    "l": "조회"
   },
   {
    "c": "AR31",
    "l": "편집"
   }
  ],
  "why": "자산 작업을 묶어 목록으로 불러 조회·편집하는 워크리스트"
 },
 {
  "tcode": "S_ALR_87012004",
  "ko": "감가상각 리포트",
  "en": "Depreciation Reports",
  "menu": "AA (Asset Accounting) > Dereciation",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "F1616",
   "en": "Depreciation Lists",
   "ko": "감가상각 리스트",
   "scopes": [
    "J62"
   ],
   "note": ""
  },
  "n": 65,
  "tcodes": [
   {
    "c": "S_ALR_87012004",
    "l": "감가상각"
   },
   {
    "c": "S_ALR_87012064",
    "l": "상각 합계"
   }
  ],
  "why": "상각이 얼마나 잡혔는지 확인하는 리포트"
 },
 {
  "tcode": "S_ALR_87011994",
  "ko": "",
  "en": "Asset Balances",
  "menu": "AA (Asset Accounting) > Asset Balance",
  "group": "AA (Asset Accounting)",
  "src": "se43",
  "app": {
   "id": "F1617A",
   "en": "Asset Balances",
   "ko": "자산 잔액",
   "scopes": [
    "J62"
   ],
   "note": "자산 잔액"
  },
  "n": 66,
  "tcodes": [
   {
    "c": "S_ALR_87011994",
    "l": ""
   }
  ],
  "why": "자산 잔액(취득가·상각누계·장부가)을 한눈에 확인"
 },
 {
  "tcode": "FB41",
  "ko": "",
  "en": "Post Tax Payable",
  "menu": "Tax",
  "group": "Tax",
  "src": "se43",
  "app": {
   "id": "F0718",
   "en": "Post General Journal Entries",
   "ko": "일반 분개 전기",
   "scopes": [
    "J58"
   ],
   "note": "세금 전기"
  },
  "n": 67,
  "tcodes": [
   {
    "c": "FB41",
    "l": ""
   }
  ],
  "why": "세금 지급 전표를 직접 전기"
 },
 {
  "tcode": "F-28",
  "ko": "입금",
  "en": "Post Incoming Payments",
  "menu": "TR (Treasury) > Incoming Payment",
  "group": "TR (Treasury)",
  "src": "se43",
  "app": {
   "id": "F1345",
   "en": "Post Incoming Payments",
   "ko": "입금 전기",
   "scopes": [
    "J59"
   ],
   "note": "입금 전기"
  },
  "n": 68,
  "tcodes": [
   {
    "c": "F-28",
    "l": ""
   }
  ],
  "why": "들어온 돈을 매출채권에 붙이는 입금 전기"
 },
 {
  "tcode": "F110",
  "ko": "자동지급",
  "en": "Parameters for Automatic Payment",
  "menu": "TR (Treasury) > Outgoing Payment",
  "group": "TR (Treasury)",
  "src": "se43",
  "app": {
   "id": "F0770",
   "en": "Manage Automatic Payments",
   "ko": "자동 지급 관리",
   "scopes": [
    "J60"
   ],
   "note": "자동지급"
  },
  "n": 69,
  "tcodes": [
   {
    "c": "F110",
    "l": ""
   }
  ],
  "why": "지급 제안부터 실행까지, 지급 업무 자동화의 심장"
 },
 {
  "tcode": "F-53",
  "ko": "지급-전기",
  "en": "Post Outgoing Payments",
  "menu": "TR (Treasury) > Outgoing Payment",
  "group": "TR (Treasury)",
  "src": "se43",
  "app": {
   "id": "F1612",
   "en": "Post Outgoing Payments",
   "ko": "지급 전기",
   "scopes": [
    "J60"
   ],
   "note": "지급 전기"
  },
  "n": 70,
  "tcodes": [
   {
    "c": "F-53",
    "l": ""
   }
  ],
  "why": "건별로 골라 수동으로 지급 전기"
 },
 {
  "tcode": "FBWD",
  "ko": "지급 어음 만기처리",
  "en": "Returned Bills of Exchange Payable",
  "menu": "TR (Treasury) > Outgoing Payment",
  "group": "TR (Treasury)",
  "src": "se43",
  "app": {
   "id": "FBWD",
   "en": "Returned Bill of Exchange Payable",
   "ko": "반환 지급 어음",
   "scopes": [],
   "note": ""
  },
  "n": 71,
  "tcodes": [
   {
    "c": "FBWD",
    "l": ""
   }
  ],
  "why": "발행한 지급어음의 만기를 처리"
 },
 {
  "tcode": "F-40",
  "ko": "",
  "en": "Bill of Exchange Payment",
  "menu": "TR (Treasury) > Outgoing Payment",
  "group": "TR (Treasury)",
  "src": "se43",
  "app": {
   "id": "",
   "en": "Bill of Exchange Payment - Outgoing",
   "ko": "어음 지급 (발행)",
   "scopes": [],
   "note": "어음 스코프 활성화·국가별 가용성 확인 필요",
   "webgui": true
  },
  "n": 72,
  "tcodes": [
   {
    "c": "F-40",
    "l": ""
   }
  ],
  "why": "어음으로 지급하는 전표를 전기"
 },
 {
  "tcode": "FF7B",
  "ko": "",
  "en": "Liquidity forecast",
  "menu": "TR (Treasury)",
  "group": "TR (Treasury)",
  "src": "se43",
  "app": {
   "id": "F2332",
   "en": "Cash Flow Analyzer",
   "ko": "현금 흐름 분석기",
   "scopes": [],
   "note": ""
  },
  "n": 73,
  "tcodes": [
   {
    "c": "FF7B",
    "l": ""
   }
  ],
  "why": "앞으로의 자금 흐름을 내다보는 유동성 예측"
 },
 {
  "tcode": "CLOCOC",
  "ko": "결산 콕핏",
  "en": "Closing Cockpit",
  "menu": "Closing Cockpit",
  "group": "Closing Cockpit",
  "src": "se43",
  "app": {
   "id": "",
   "en": "SAP S/4HANA Cloud for Advanced Financial Closing",
   "ko": "고급재무결산",
   "scopes": [
    "2V8",
    "4HG"
   ],
   "note": "별도 라이선스(BTP 솔루션). 구 스코프 2V8은 표준에서 폐기, 연동 스코프 4HG"
  },
  "n": 74,
  "tcodes": [
   {
    "c": "CLOCOC",
    "l": "설정"
   },
   {
    "c": "CLOCO",
    "l": "실행"
   },
   {
    "c": "CLOCOS",
    "l": "집계조회"
   }
  ],
  "why": "결산 작업을 설계하고 실행하고 진척을 조망하는 콕핏"
 },
 {
  "tcode": "OB52",
  "ko": "",
  "en": "Control Closing Period",
  "menu": "Monthly Closing > Closing Period",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F2293",
   "en": "Manage Posting Period",
   "ko": "전기 기간 관리",
   "scopes": [
    "J58"
   ],
   "note": "전기 기간 관리"
  },
  "n": 75,
  "tcodes": [
   {
    "c": "OB52",
    "l": ""
   }
  ],
  "why": "전기 기간을 열고 닫는 마감 통제의 첫 관문"
 },
 {
  "tcode": "VF04",
  "ko": "",
  "en": "Maintain Billing Due List",
  "menu": "Monthly Closing > Check SD",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F0798",
   "en": "Create Billing Documents - VF04",
   "ko": "청구 문서 생성 - VF04",
   "scopes": [],
   "note": ""
  },
  "n": 76,
  "tcodes": [
   {
    "c": "VF04",
    "l": ""
   }
  ],
  "why": "청구할 납품이 쌓였는지 보는 청구 예정 목록"
 },
 {
  "tcode": "VFX3",
  "ko": "",
  "en": "List Blocked Billing Documents",
  "menu": "Monthly Closing > Check SD",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F0797",
   "en": "Manage Billing Documents",
   "ko": "청구 문서 관리",
   "scopes": [],
   "note": "미전기 상태로 보류 문서 식별"
  },
  "n": 77,
  "tcodes": [
   {
    "c": "VFX3",
    "l": ""
   }
  ],
  "why": "회계로 넘어가지 못한 청구 전표가 왜 막혔는지 확인"
 },
 {
  "tcode": "F.13",
  "ko": "자동반제",
  "en": "Automatic Clearing without Currency",
  "menu": "Monthly Closing > Check MM",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F1240",
   "en": "Manage Application Jobs",
   "ko": "어플리케이션 작업",
   "scopes": [],
   "note": "자동반제 (작업 스케줄)"
  },
  "n": 78,
  "tcodes": [
   {
    "c": "F.13",
    "l": ""
   }
  ],
  "why": "같은 상대·금액끼리 자동 반제해 미결을 정리"
 },
 {
  "tcode": "MB5S",
  "ko": "GR/IR 잔액 목록",
  "en": "GR/IR Balance List",
  "menu": "Monthly Closing > Check MM",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F3303",
   "en": "Monitor GR/IR Account Reconciliation",
   "ko": "GR/IR 계정 조정 모니터",
   "scopes": [],
   "note": ""
  },
  "n": 79,
  "tcodes": [
   {
    "c": "MB5S",
    "l": ""
   }
  ],
  "why": "입고는 됐는데 송장이 안 온 항목의 잔액을 확인하는 목록"
 },
 {
  "tcode": "F.19",
  "ko": "GR/IR 정리",
  "en": "GR/IR Clearing",
  "menu": "Monthly Closing > Check MM",
  "group": "Monthly Closing",
  "src": "se43",
  "why": "월말에 GR/IR 잔액을 정리 전표로 자동 전기하는 실행",
  "tcodes": [
   {
    "c": "F.19",
    "l": ""
   }
  ],
  "app": {
   "id": "F3302",
   "en": "Reconcile GR/IR Accounts",
   "ko": "GR/IR 계정 조정",
   "scopes": [],
   "note": ""
  },
  "n": 80
 },
 {
  "tcode": "SM35",
  "ko": "Batch 입력",
  "en": "Batch Input Monitoring",
  "menu": "Monthly Closing > Check MM",
  "group": "Monthly Closing",
  "src": "se43",
  "app": null,
  "n": 81,
  "tcodes": [
   {
    "c": "SM35",
    "l": ""
   }
  ],
  "why": "대량 데이터를 배치로 밀어 넣는 입력 세션 관리",
  "noapp": true
 },
 {
  "tcode": "MR11",
  "ko": "GR/IR 정리",
  "en": "GR/IR Account Maintenance",
  "menu": "Monthly Closing > Check MM",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F3302",
   "en": "",
   "ko": "입고/송장 수령 계정 조정",
   "scopes": [],
   "note": ""
  },
  "n": 82,
  "tcodes": [
   {
    "c": "MR11",
    "l": "정리실행"
   },
   {
    "c": "MR11SHOW",
    "l": "문서조회"
   }
  ],
  "why": "오래된 GR/IR 미결을 정리하고 결과를 확인하는 유지보수"
 },
 {
  "tcode": "AFAB",
  "ko": "감가상각 실행",
  "en": "Depreciation Run",
  "menu": "Monthly Closing > Depreciation",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F1914",
   "en": "Post Depreciation",
   "ko": "감가상각 전기",
   "scopes": [],
   "note": ""
  },
  "n": 83,
  "tcodes": [
   {
    "c": "AFAB",
    "l": "실행"
   },
   {
    "c": "AFBP",
    "l": "로그조회"
   }
  ],
  "why": "한 달 상각비를 전기하고 결과를 로그로 검증"
 },
 {
  "tcode": "AFAR",
  "ko": "감가상각 재계산",
  "en": "Recalculate Depreciation",
  "menu": "Asset Accounting (FI-AA)",
  "group": "Monthly Closing",
  "src": "manual",
  "why": "감가상각을 다시 계산해 차이를 잡는 재계산 실행",
  "tcodes": [
   {
    "c": "AFAR",
    "l": ""
   }
  ],
  "app": {
   "id": "F1914",
   "en": "Schedule Asset Accounting Jobs",
   "ko": "자산 회계 작업 일정",
   "scopes": [],
   "note": ""
  },
  "n": 84
 },
 {
  "tcode": "SM37",
  "ko": "",
  "en": "Overview of job selection",
  "menu": "Monthly Closing > Depreciation",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F1240",
   "en": "Application Jobs",
   "ko": "어플리케이션 작업",
   "scopes": [],
   "note": ""
  },
  "n": 85,
  "tcodes": [
   {
    "c": "SM37",
    "l": ""
   }
  ],
  "why": "배치 작업이 돌았는지, 왜 실패했는지 확인"
 },
 {
  "tcode": "FBD1",
  "ko": "반복 분개",
  "en": "Recurring Entry Document",
  "menu": "Monthly Closing > Accrual_Defferal",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F1598",
   "en": "Manage Recurring Journal Entries",
   "ko": "반복전표생성",
   "scopes": [
    "J58"
   ],
   "note": "반복 전표 생성"
  },
  "n": 86,
  "tcodes": [
   {
    "c": "FBD1",
    "l": "생성"
   },
   {
    "c": "FBD2",
    "l": "변경"
   },
   {
    "c": "FBD3",
    "l": "조회"
   },
   {
    "c": "FBD4",
    "l": "변경내역"
   }
  ],
  "why": "매달 반복되는 전표의 원본을 만들어 두는 반복분개 관리"
 },
 {
  "tcode": "F.14",
  "ko": "반복 분개 실행",
  "en": "Recurring Entry Run",
  "menu": "Monthly Closing > Accrual_Defferal",
  "group": "Monthly Closing",
  "src": "se43",
  "why": "반복분개를 실제로 돌려 전표를 만들고 지우는 실행 계열",
  "tcodes": [
   {
    "c": "F.14",
    "l": "실행"
   },
   {
    "c": "F.15",
    "l": "리스트"
   },
   {
    "c": "F.56",
    "l": "삭제"
   }
  ],
  "app": {
   "id": "F1598",
   "en": "",
   "ko": "반복 분개 관리",
   "scopes": [],
   "note": ""
  },
  "n": 87
 },
 {
  "tcode": "FBS1",
  "ko": "발생/이연 전표",
  "en": "Accrual/Deferral Document",
  "menu": "Monthly Closing > Accrual_Defferal",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F0718",
   "en": "Post General Journal Entries",
   "ko": "일반 분개 전기",
   "scopes": [
    "J58"
   ],
   "note": "발생/이연 전표 입력"
  },
  "n": 88,
  "tcodes": [
   {
    "c": "FBS1",
    "l": "입력"
   },
   {
    "c": "F.81",
    "l": "역분개"
   }
  ],
  "why": "비용을 기간에 나눠 잡고 다음 달에 되돌리는 발생/이연 전표"
 },
 {
  "tcode": "ACACTREE01",
  "ko": "발생 엔진",
  "en": "Accrual Engine",
  "menu": "Monthly Closing > Accural Engine",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F3778",
   "en": "Schedule Accruals Jobs",
   "ko": "발생 작업 일정",
   "scopes": [],
   "note": "발생 앱군으로 재구성 (구매오더 발생 조회 F3778 등)"
  },
  "n": 89,
  "tcodes": [
   {
    "c": "ACACTREE01",
    "l": "대상생성"
   },
   {
    "c": "ACACTREE02",
    "l": "대상편집"
   },
   {
    "c": "ACACACT",
    "l": "실행"
   },
   {
    "c": "ACACPSITEMS",
    "l": "총계조회"
   },
   {
    "c": "ACACPSDOCITEMS",
    "l": "항목조회"
   },
   {
    "c": "ACACREVERS",
    "l": "역분개"
   }
  ],
  "why": "발생을 계산해 전표로 만드는 발생 엔진의 관리 화면"
 },
 {
  "tcode": "FAGL_FCV",
  "ko": "외화 평가",
  "en": "Foreign Currency Valuation",
  "menu": "Monthly Closing > Foreign Currency Valuation",
  "group": "Monthly Closing",
  "src": "se43",
  "app": {
   "id": "F1927",
   "en": "Schedule General Ledger Jobs",
   "ko": "일반 원장 작업 일정",
   "scopes": [],
   "note": "고급 외화 평가(Advanced Valuation) 실행"
  },
  "n": 90,
  "tcodes": [
   {
    "c": "FAGL_FCV",
    "l": "평가"
   },
   {
    "c": "F-05",
    "l": "전기"
   }
  ],
  "why": "월말 외화 잔액을 새 환율로 평가해 전표로 전기"
 },
 {
  "tcode": "FAGLGVTR",
  "ko": "잔액 차기 이월",
  "en": "Balance Carry Forward",
  "menu": "Year-end Closing",
  "group": "Year-end Closing",
  "src": "se43",
  "app": {
   "id": "F1927",
   "en": "Schedule General Ledger Jobs",
   "ko": "일반 원장 작업 일정",
   "scopes": [],
   "note": "잔액 이월 실행"
  },
  "n": 91,
  "tcodes": [
   {
    "c": "FAGLGVTR",
    "l": "이월·신"
   },
   {
    "c": "F.07",
    "l": "이월·구"
   }
  ],
  "why": "한 해 숫자를 다음 해로 넘기는 잔액 이월"
 },
 {
  "tcode": "AJRW",
  "ko": "자산 연말결산",
  "en": "Asset Year-End Closing",
  "menu": "Year-end Closing",
  "group": "Year-end Closing",
  "src": "se43",
  "app": {
   "id": "F1914",
   "en": "Schedule Asset Accounting Jobs",
   "ko": "자산 회계 작업 일정",
   "scopes": [],
   "note": "여러 작업 템플릿 통합 앱 (회사코드 설정 F7312와 함께)"
  },
  "n": 92,
  "tcodes": [
   {
    "c": "AJRW",
    "l": "연도변경"
   },
   {
    "c": "AJAB",
    "l": "결산실행"
   },
   {
    "c": "OAAQ",
    "l": "결산취소"
   }
  ],
  "why": "자산 회계연도를 열고 닫고, 잘못 닫은 연도를 되돌리는 결산 관리"
 },
 {
  "tcode": "KP27",
  "ko": "액티비티 단가 계획",
  "en": "",
  "menu": "CO > 계획",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F3162",
   "en": "Manage Cost Rates - Plan",
   "ko": "원가율 관리 - 계획",
   "scopes": [],
   "note": ""
  },
  "n": 93,
  "tcodes": [
   {
    "c": "KP27",
    "l": ""
   }
  ],
  "why": "액티비티 단가가 얼마로 계획됐는지 조회"
 },
 {
  "tcode": "KSII",
  "ko": "액티비티 실제 단가 계산",
  "en": "",
  "menu": "CO > 배부",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "",
   "en": "Calculate Actual Activity Rates - Cost Center",
   "ko": "실제 원가율 계산 - 코스트 센터",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 94,
  "tcodes": [
   {
    "c": "KSII",
    "l": ""
   }
  ],
  "why": "실제 액티비티 단가를 계산해 원가를 확정"
 },
 {
  "tcode": "KSS2",
  "ko": "분할",
  "en": "",
  "menu": "CO > 배부",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F9080",
   "en": "Run Actual Cost Rate Calculation - Cost Centers",
   "ko": "실제 원가율 계산 실행 - 코스트 센터",
   "scopes": [],
   "note": "분할 구조 기준으로 실제원가 분할 수행"
  },
  "n": 95,
  "tcodes": [
   {
    "c": "KSS2",
    "l": ""
   }
  ],
  "why": "공통비를 기준에 따라 코스트센터로 쪼개는 분할"
 },
 {
  "tcode": "KSU2",
  "ko": "배부 사이클",
  "en": "Allocation Cycle",
  "menu": "CO > 배부",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F3338",
   "en": "Manage Allocations",
   "ko": "배부 관리",
   "scopes": [
    "J54",
    "J55"
   ],
   "note": "배부 사이클"
  },
  "n": 96,
  "tcodes": [
   {
    "c": "KSU2",
    "l": "생성"
   },
   {
    "c": "KSV2",
    "l": "변경"
   },
   {
    "c": "KSV5",
    "l": "실행"
   }
  ],
  "why": "배부 규칙을 만들어 실제로 돌리는 배부 사이클 관리"
 },
 {
  "tcode": "KL13",
  "ko": "액티비티 유형 일괄조회",
  "en": "",
  "menu": "CO > 액티비티",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F2212",
   "en": "Manage Activity Types",
   "ko": "액티비티 유형 관리",
   "scopes": [],
   "note": ""
  },
  "n": 97,
  "tcodes": [
   {
    "c": "KL13",
    "l": ""
   }
  ],
  "why": "액티비티 유형이 무엇이 있는지 일괄 조회"
 },
 {
  "tcode": "KOB1",
  "ko": "오더 실제원가 라인아이템",
  "en": "",
  "menu": "CO > 오더",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F7288",
   "en": "Display Line Items - Production Accounting",
   "ko": "개별 항목 조회 - 생산 회계",
   "scopes": [],
   "note": ""
  },
  "n": 98,
  "tcodes": [
   {
    "c": "KOB1",
    "l": ""
   }
  ],
  "why": "내부오더에 실제원가가 어떻게 쌓였는지 줄 단위로 추적"
 },
 {
  "tcode": "CK11N",
  "ko": "자재 원가 추정",
  "en": "",
  "menu": "CO > 원가계산",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F1865",
   "en": "Manage Costing Runs - Estimated Costs",
   "ko": "원가계산 실행 관리 - 추정 원가",
   "scopes": [
    "BEG"
   ],
   "note": "원가 추정"
  },
  "n": 99,
  "tcodes": [
   {
    "c": "CK11N",
    "l": ""
   }
  ],
  "why": "자재 하나의 원가를 미리 계산해 보는 추정"
 },
 {
  "tcode": "CK24",
  "ko": "원가계산 릴리즈",
  "en": "",
  "menu": "CO > 원가계산",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "CK24",
   "en": "Release Material Cost Estimates",
   "ko": "자재 원가 추정 릴리즈",
   "scopes": [],
   "note": "대량 실행은 원가계산 실행 관리(F1865)"
  },
  "n": 100,
  "tcodes": [
   {
    "c": "CK24",
    "l": ""
   }
  ],
  "why": "계산된 원가를 표준원가로 확정하는 관문"
 },
 {
  "tcode": "CK40N",
  "ko": "원가계산 실행",
  "en": "",
  "menu": "CO > 원가계산",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F1865",
   "en": "Manage Costing Runs - Estimated Costs",
   "ko": "원가계산 실행 관리 - 추정 원가",
   "scopes": [
    "BEG"
   ],
   "note": "표준원가 추정"
  },
  "n": 101,
  "tcodes": [
   {
    "c": "CK40N",
    "l": ""
   }
  ],
  "why": "전 자재 원가계산을 한 번에 돌리는 실행 화면"
 },
 {
  "tcode": "KA23",
  "ko": "원가요소 일괄조회",
  "en": "",
  "menu": "CO > 원가요소",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F0763A",
   "en": "Manage G/L Account Master data",
   "ko": "G/L 계정 마스터 데이터 관리",
   "scopes": [
    "BNG",
    "J58"
   ],
   "note": "원가요소 = G/L 계정으로 통합"
  },
  "n": 102,
  "tcodes": [
   {
    "c": "KA23",
    "l": ""
   }
  ],
  "why": "원가요소 목록을 일괄로 점검"
 },
 {
  "tcode": "KE51",
  "ko": "이익센터 생성",
  "en": "",
  "menu": "CO > 이익센터",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F3516",
   "en": "Manage Profit Centers",
   "ko": "손익 센터 관리",
   "scopes": [
    "BNH"
   ],
   "note": "이익센터 생성"
  },
  "n": 103,
  "tcodes": [
   {
    "c": "KE51",
    "l": ""
   }
  ],
  "why": "손익을 쪼개 보는 단위인 이익센터를 여는 곳"
 },
 {
  "tcode": "KS01",
  "ko": "코스트센터 마스터",
  "en": "Cost Center Master",
  "menu": "CO > 코스트센터",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F1443A",
   "en": "Manage Cost Centers",
   "ko": "코스트 센터 관리",
   "scopes": [
    "BNM",
    "J54"
   ],
   "note": "코스트센터 생성"
  },
  "n": 104,
  "tcodes": [
   {
    "c": "KS01",
    "l": "생성"
   },
   {
    "c": "KS02",
    "l": "변경"
   }
  ],
  "why": "비용이 모이는 그릇, 코스트센터를 여는 곳"
 },
 {
  "tcode": "KS13",
  "ko": "코스트센터 일괄조회",
  "en": "",
  "menu": "CO > 코스트센터",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F1443B",
   "en": "Manage Cost Centers",
   "ko": "코스트 센터 관리",
   "scopes": [
    "BNM",
    "J54"
   ],
   "note": "신규 버전 앱"
  },
  "n": 105,
  "tcodes": [
   {
    "c": "KS13",
    "l": ""
   }
  ],
  "why": "코스트센터 전체 목록을 일괄 조회"
 },
 {
  "tcode": "KK04",
  "ko": "통계지표 일괄조회",
  "en": "",
  "menu": "CO > 통계지표",
  "group": "CO",
  "src": "proc",
  "app": {
   "id": "F1603A",
   "en": "Manage Statistical Key Figures",
   "ko": "통계 주요 지표 관리",
   "scopes": [],
   "note": ""
  },
  "n": 106,
  "tcodes": [
   {
    "c": "KK04",
    "l": ""
   }
  ],
  "why": "통계지표(인원수·면적 등 배부 기준) 목록 조회"
 },
 {
  "tcode": "MR22",
  "ko": "자재 차대변 조정",
  "en": "Debit/Credit Material",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "자재 재고 가치를 차대변 전기로 직접 조정하는 화면",
  "tcodes": [
   {
    "c": "MR22",
    "l": ""
   }
  ],
  "app": {
   "id": "F2680",
   "en": "Manage Material Valuations",
   "ko": "자재 평가 관리",
   "scopes": [],
   "note": "차대변 전기 버튼"
  },
  "n": 107
 },
 {
  "tcode": "CKM3N",
  "ko": "자재가격 분석",
  "en": "Material Price Analysis",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "자재 가격이 언제 어떻게 바뀌었는지 추적하는 가격 이력",
  "tcodes": [
   {
    "c": "CKM3N",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Material Price Analysis",
   "ko": "자재 가격 분석",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 108
 },
 {
  "tcode": "CKMLCP",
  "ko": "실제원가계산/자재원장",
  "en": "Actual Costing/Material Ledger",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "실제 원가를 계산해 마감하는 실제원가계산 실행",
  "tcodes": [
   {
    "c": "CKMLCP",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Edit Actual Costing Runs",
   "ko": "실제 원가계산 실행 편집",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 109
 },
 {
  "tcode": "KKAO",
  "ko": "재공품 계산",
  "en": "Work in Process Calculation",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "생산 중인 오더의 재공품(WIP)을 계산하는 화면",
  "tcodes": [
   {
    "c": "KKAO",
    "l": "계산"
   },
   {
    "c": "KKAX",
    "l": "계산·개별"
   }
  ],
  "app": {
   "id": "F3498",
   "en": "WIP - Event-Based",
   "ko": "재공품 - 이벤트 기준",
   "scopes": [],
   "note": "Public은 이벤트 기준 방식"
  },
  "n": 110
 },
 {
  "tcode": "KKBC_ORD",
  "ko": "오더 원가 세부사항",
  "en": "Order Cost Details",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "생산오더 한 건의 원가 세부내역을 파헤치는 화면",
  "tcodes": [
   {
    "c": "KKBC_ORD",
    "l": ""
   }
  ],
  "app": {
   "id": "F4254",
   "en": "Order Cost Details - Event-Based",
   "ko": "오더 원가 세부사항 - 이벤트 기준",
   "scopes": [],
   "note": ""
  },
  "n": 111
 },
 {
  "tcode": "KKS1",
  "ko": "차이 계산·정산",
  "en": "Variance Calculation / Settlement",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "생산오더 차이를 계산하고 정산해 결산으로 넘기는 후처리",
  "tcodes": [
   {
    "c": "KKS1",
    "l": "차이"
   },
   {
    "c": "KKS2",
    "l": "차이·개별"
   },
   {
    "c": "CO88",
    "l": "정산"
   }
  ],
  "app": {
   "id": "F3669",
   "en": "Post Event-Based Postings - Product Costing",
   "ko": "이벤트 기준 전기 후처리 - 제품 원가계산",
   "scopes": [],
   "note": "WIP·차이·정산이 묶인 복합 기능이라 1:1 대응은 아님. 일정 실행은 제품 원가계산 작업 일정(F3683)"
  },
  "n": 112
 },
 {
  "tcode": "CO43",
  "ko": "간접비 계산",
  "en": "Overhead Calculation",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "생산오더에 간접비를 실제로 계산해 붙이는 처리",
  "tcodes": [
   {
    "c": "CO43",
    "l": "간접비"
   },
   {
    "c": "KGI2",
    "l": "간접비·개별"
   },
   {
    "c": "KGI4",
    "l": "간접비·일괄"
   }
  ],
  "app": {
   "id": "F5763",
   "en": "Post Event-Based Postings - Overhead Calculation",
   "ko": "이벤트 기준 전기 후처리 - 간접비 계산",
   "scopes": [],
   "note": ""
  },
  "n": 113
 },
 {
  "tcode": "KSB1",
  "ko": "코스트센터 실제 항목",
  "en": "Cost Center Actual Line Items",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "코스트센터 실제 항목을 줄 단위로 추적하는 조회",
  "tcodes": [
   {
    "c": "KSB1",
    "l": ""
   },
   {
    "c": "KSB1N",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Display Line Items - Cost Accounting",
   "ko": "개별 항목 조회 - 원가 회계",
   "scopes": [],
   "note": ""
  },
  "n": 114
 },
 {
  "tcode": "KSU5",
  "ko": "평가 배부 실행",
  "en": "Assessment (Actual)",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "평가(Assessment) 배부를 실제로 실행하는 화면",
  "tcodes": [
   {
    "c": "KSU5",
    "l": ""
   }
  ],
  "app": {
   "id": "F3548",
   "en": "Run Allocations",
   "ko": "배부 실행",
   "scopes": [],
   "note": "실행 결과는 배부 결과, 흐름은 배부 흐름 앱에서 조회"
  },
  "n": 115
 },
 {
  "tcode": "KSH1",
  "ko": "그룹 계층구조",
  "en": "Group Hierarchies",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "코스트센터·이익센터·원가요소 그룹 계층을 관리",
  "tcodes": [
   {
    "c": "KSH1",
    "l": "코스트센터 그룹"
   },
   {
    "c": "KCH1",
    "l": "이익센터 그룹"
   },
   {
    "c": "KAH1",
    "l": "원가요소 그룹"
   }
  ],
  "app": {
   "id": "F2918",
   "en": "Manage Global Hierarchies",
   "ko": "글로벌 계층구조 관리",
   "scopes": [],
   "note": "계층 유형별 T-code 상이 (생성/변경/조회 1·2·3, 재무제표 버전 OB58)"
  },
  "n": 116
 },
 {
  "tcode": "KAH1",
  "ko": "원가요소 그룹",
  "en": "Cost Element Group",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "원가요소 그룹을 만들어 배부·리포트에 쓰는 관리",
  "tcodes": [
   {
    "c": "KAH1",
    "l": "생성"
   },
   {
    "c": "KAH2",
    "l": "변경"
   },
   {
    "c": "KAH3",
    "l": "조회"
   }
  ],
  "app": {
   "id": "F5373",
   "en": "Manage Cost Element Groups",
   "ko": "원가 요소 그룹 관리",
   "scopes": [],
   "note": ""
  },
  "n": 117
 },
 {
  "tcode": "KBK6",
  "ko": "실제 액티비티 단가",
  "en": "Manual Actual Activity Price",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "실제 액티비티 단가를 수동으로 넣고 고치는 관리",
  "tcodes": [
   {
    "c": "KBK6",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Manage Activity Rates - Actual",
   "ko": "원가율 관리 - 실제",
   "scopes": [],
   "note": ""
  },
  "n": 118
 },
 {
  "tcode": "KSBT",
  "ko": "원가율 조회",
  "en": "Activity Price Display",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "계획·실제 액티비티 단가를 조회하는 화면",
  "tcodes": [
   {
    "c": "KSBT",
    "l": ""
   },
   {
    "c": "KBK7",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Display Activity Rates",
   "ko": "원가율 조회",
   "scopes": [],
   "note": ""
  },
  "n": 119
 },
 {
  "tcode": "KK01",
  "ko": "통계지표 마스터",
  "en": "Statistical Key Figure Master",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "배부 기준이 되는 통계지표 마스터를 관리",
  "tcodes": [
   {
    "c": "KK01",
    "l": "생성"
   },
   {
    "c": "KK02",
    "l": "변경"
   },
   {
    "c": "KK03",
    "l": "조회"
   }
  ],
  "app": {
   "id": "F1603A",
   "en": "Manage Statistical Key Figures",
   "ko": "통계 주요 지표 관리",
   "scopes": [],
   "note": ""
  },
  "n": 120
 },
 {
  "tcode": "KB31N",
  "ko": "통계지표 값",
  "en": "Statistical Key Figure Values",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "통계지표 실제 값을 입력하고 조회하는 화면",
  "tcodes": [
   {
    "c": "KB31N",
    "l": "입력"
   },
   {
    "c": "KB33N",
    "l": "조회"
   },
   {
    "c": "KB34N",
    "l": "취소"
   }
  ],
  "app": {
   "id": "F3915",
   "en": "Manage Statistical Key Figure Values",
   "ko": "통계 주요 지표 값 관리",
   "scopes": [],
   "note": ""
  },
  "n": 121
 },
 {
  "tcode": "KB11N",
  "ko": "원가·수익 재지정",
  "en": "Reposting Costs/Revenues",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "잘못 간 원가·수익을 다른 객체로 다시 지정하는 재전기",
  "tcodes": [
   {
    "c": "KB11N",
    "l": "원가"
   },
   {
    "c": "KB41N",
    "l": "수익"
   }
  ],
  "app": {
   "id": "F2009A",
   "en": "Reassign Costs and Revenues",
   "ko": "원가 및 수익 재지정",
   "scopes": [],
   "note": ""
  },
  "n": 122
 },
 {
  "tcode": "S_ALR_87013611",
  "ko": "코스트센터 실제 리포트",
  "en": "Cost Centers: Actual",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "코스트센터 실제 실적을 집계해 보는 표준 리포트",
  "tcodes": [
   {
    "c": "S_ALR_87013611",
    "l": ""
   }
  ],
  "app": {
   "id": "F0963A",
   "en": "Cost Centers - Actual",
   "ko": "코스트 센터 - 실제",
   "scopes": [],
   "note": ""
  },
  "n": 123
 },
 {
  "tcode": "KE24",
  "ko": "마진분석 항목 조회",
  "en": "Profitability Analysis Line Items",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "마진분석(수익성) 개별 항목을 줄 단위로 조회",
  "tcodes": [
   {
    "c": "KE24",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Display Line Items - Margin Analysis",
   "ko": "개별 항목 조회 - 마진 분석",
   "scopes": [],
   "note": ""
  },
  "n": 124
 },
 {
  "tcode": "KE30",
  "ko": "시장 세그먼트 실제",
  "en": "Profitability Report",
  "menu": "CO",
  "group": "CO",
  "src": "manual",
  "why": "시장 세그먼트별 실제 손익을 드릴다운으로 분석",
  "tcodes": [
   {
    "c": "KE30",
    "l": ""
   }
  ],
  "app": {
   "id": "F0943A",
   "en": "Market Segments - Actual",
   "ko": "시장 세그먼트 - 실제",
   "scopes": [],
   "note": ""
  },
  "n": 125
 },
 {
  "tcode": "CJ20N",
  "ko": "프로젝트 빌더(WBS)",
  "en": "Project Builder",
  "menu": "PS",
  "group": "CO",
  "src": "manual",
  "why": "프로젝트와 WBS 구조를 만들고 관리하는 화면",
  "tcodes": [
   {
    "c": "CJ20N",
    "l": "빌더"
   },
   {
    "c": "CJ01",
    "l": "생성"
   },
   {
    "c": "CJ02",
    "l": "변경"
   },
   {
    "c": "CJ03",
    "l": "조회"
   }
  ],
  "app": {
   "id": "F3214",
   "en": "",
   "ko": "프로젝트 관리 - 엔터프라이즈 프로젝트",
   "scopes": [],
   "note": ""
  },
  "n": 126
 },
 {
  "tcode": "CJR2",
  "ko": "WBS 원가 계획",
  "en": "WBS Cost Planning",
  "menu": "PS",
  "group": "CO",
  "src": "manual",
  "why": "WBS에 원가 계획을 세우는 화면",
  "tcodes": [
   {
    "c": "CJR2",
    "l": "상세 계획"
   },
   {
    "c": "CJ40",
    "l": "전체 계획"
   }
  ],
  "app": {
   "id": "F1711",
   "en": "",
   "ko": "재무 계획 데이터 임포트",
   "scopes": [],
   "note": "Public은 CSV 임포트 방식, 1:1 대응 아님"
  },
  "n": 127
 },
 {
  "tcode": "S_ALR_87013532",
  "ko": "프로젝트 계획/실제",
  "en": "Project Plan/Actual",
  "menu": "PS",
  "group": "CO",
  "src": "manual",
  "why": "프로젝트 계획 대비 실제를 비교하는 리포트",
  "tcodes": [
   {
    "c": "S_ALR_87013532",
    "l": ""
   }
  ],
  "app": {
   "id": "F0936A",
   "en": "",
   "ko": "프로젝트 계획/실제",
   "scopes": [],
   "note": ""
  },
  "n": 128
 },
 {
  "tcode": "VA01",
  "ko": "판매 오더",
  "en": "Sales Order",
  "menu": "SD > 판매오더",
  "group": "SD",
  "src": "proc",
  "app": {
   "id": "F3893",
   "en": "Manage Sales Orders - Version 2",
   "ko": "판매 오더 관리 - 버전 2",
   "scopes": [],
   "note": "판매오더 생성"
  },
  "n": 129,
  "tcodes": [
   {
    "c": "VA01",
    "l": "생성"
   },
   {
    "c": "VA02",
    "l": "변경"
   },
   {
    "c": "VA03",
    "l": "조회"
   },
   {
    "c": "VA05",
    "l": "리스트"
   }
  ],
  "why": "판매오더를 만들고 납기·가격을 확정하는 판매의 시작점"
 },
 {
  "tcode": "VL01N",
  "ko": "납품 생성",
  "en": "",
  "menu": "SD > 납품",
  "group": "SD",
  "src": "proc",
  "app": {
   "id": "F0869A",
   "en": "Create Outbound Deliveries - From Sales Orders",
   "ko": "출하 생성 - 판매 오더에서",
   "scopes": [],
   "note": "납품 생성"
  },
  "n": 130,
  "tcodes": [
   {
    "c": "VL01N",
    "l": ""
   }
  ],
  "why": "판매오더를 출하로 바꾸는 납품 생성"
 },
 {
  "tcode": "VL10A",
  "ko": "납품 일괄 생성",
  "en": "Create Outbound Deliveries",
  "menu": "SD",
  "group": "SD",
  "src": "manual",
  "why": "판매오더를 모아 납품서를 일괄로 만드는 화면",
  "tcodes": [
   {
    "c": "VL10A",
    "l": ""
   }
  ],
  "app": {
   "id": "F0869A",
   "en": "Create Outbound Deliveries - From Sales Orders",
   "ko": "출하 생성 - 판매 오더에서",
   "scopes": [],
   "note": ""
  },
  "n": 131
 },
 {
  "tcode": "VL02N",
  "ko": "출고 전기",
  "en": "Post Goods Issue",
  "menu": "SD",
  "group": "SD",
  "src": "manual",
  "why": "납품 기준으로 출고를 전기해 매출원가가 잡히는 화면",
  "tcodes": [
   {
    "c": "VL02N",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Post Goods Issue",
   "ko": "출고 전기",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 132
 },
 {
  "tcode": "VF01",
  "ko": "청구 문서",
  "en": "Billing Document",
  "menu": "SD > 빌링",
  "group": "SD",
  "src": "proc",
  "app": {
   "id": "F0798",
   "en": "Create Billing Documents",
   "ko": "청구 문서 생성",
   "scopes": [],
   "note": "빌링"
  },
  "n": 133,
  "tcodes": [
   {
    "c": "VF01",
    "l": "생성"
   },
   {
    "c": "VF04",
    "l": "일괄 생성"
   }
  ],
  "why": "청구문서를 발행해 매출채권이 생기는 화면"
 },
 {
  "tcode": "MM03",
  "ko": "자재 조회",
  "en": "Display Material",
  "menu": "MM",
  "group": "MM",
  "src": "manual",
  "why": "자재 마스터가 어떻게 등록됐는지 조회하는 화면",
  "tcodes": [
   {
    "c": "MM03",
    "l": ""
   }
  ],
  "app": {
   "id": "F1602",
   "en": "Manage Product Master Data",
   "ko": "제품 마스터 데이터 관리",
   "scopes": [],
   "note": ""
  },
  "n": 134
 },
 {
  "tcode": "ME21N",
  "ko": "구매 오더 생성",
  "en": "Create Purchase Order",
  "menu": "MM",
  "group": "MM",
  "src": "manual",
  "why": "발주서를 만드는 구매오더 생성 화면",
  "tcodes": [
   {
    "c": "ME21N",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Create Purchase Order - Advanced",
   "ko": "구매 오더 생성 - 고급",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 135
 },
 {
  "tcode": "MIGO",
  "ko": "자재 이동",
  "en": "Goods Movement",
  "menu": "MM",
  "group": "MM",
  "src": "manual",
  "why": "입고·출고·이송까지, 자재 움직임의 모든 전기를 거는 만능 화면",
  "tcodes": [
   {
    "c": "MIGO",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Post Goods Movement",
   "ko": "자재 이동 전기",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 136
 },
 {
  "tcode": "MB11",
  "ko": "원자재출고",
  "en": "",
  "menu": "MM > 자재이동",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "",
   "en": "Post Goods Movement",
   "ko": "자재 이동 전기",
   "scopes": [],
   "note": "자재 출고",
   "webgui": true
  },
  "n": 137,
  "tcodes": [
   {
    "c": "MB11",
    "l": ""
   }
  ],
  "why": "자재를 출고해 재고를 줄이는 이동 전기"
 },
 {
  "tcode": "MIRO",
  "ko": "송장 검증",
  "en": "Enter Incoming Invoice",
  "menu": "MM",
  "group": "MM",
  "src": "manual",
  "why": "공급업체 송장을 발주·입고와 3자 대조로 검증해 회계로 넘기는 관문",
  "tcodes": [
   {
    "c": "MIRO",
    "l": ""
   }
  ],
  "app": {
   "id": "F0859",
   "en": "Create Supplier Invoice",
   "ko": "수령 송장 생성",
   "scopes": [
    "J60"
   ],
   "note": ""
  },
  "n": 138
 },
 {
  "tcode": "MIR5",
  "ko": "송장 검증 리스트",
  "en": "",
  "menu": "MM > 송장검증",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "F1060A",
   "en": "",
   "ko": "공급업체 송장 리스트",
   "scopes": [],
   "note": ""
  },
  "n": 139,
  "tcodes": [
   {
    "c": "MIR5",
    "l": ""
   }
  ],
  "why": "송장 검증 결과가 쌓인 목록을 확인"
 },
 {
  "tcode": "MD04",
  "ko": "재고/소요량 리스트",
  "en": "",
  "menu": "MM > MRP",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "F2101A",
   "en": "Monitor Material Coverage",
   "ko": "자재 보충 모니터",
   "scopes": [],
   "note": "재고/소요량"
  },
  "n": 140,
  "tcodes": [
   {
    "c": "MD04",
    "l": ""
   }
  ],
  "why": "자재가 부족한지 남는지 지금 상황을 보는 상황판"
 },
 {
  "tcode": "MB51",
  "ko": "자재문서 리스트",
  "en": "",
  "menu": "MM > 자재이동",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "F1077",
   "en": "Material Documents Overview",
   "ko": "자재 문서 개요",
   "scopes": [],
   "note": "자재문서 조회"
  },
  "n": 141,
  "tcodes": [
   {
    "c": "MB51",
    "l": ""
   }
  ],
  "why": "자재가 언제 왜 움직였는지 문서로 추적"
 },
 {
  "tcode": "MB52",
  "ko": "창고 재고 리스트",
  "en": "",
  "menu": "MM > 재고조회",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "F1595",
   "en": "Stock - Multiple Materials",
   "ko": "재고 - 복수 자재",
   "scopes": [],
   "note": "창고 재고"
  },
  "n": 142,
  "tcodes": [
   {
    "c": "MB52",
    "l": ""
   }
  ],
  "why": "창고별 현재 재고를 한눈에 확인"
 },
 {
  "tcode": "MB5B",
  "ko": "기간별 재고 조회",
  "en": "",
  "menu": "MM > 재고조회",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "",
   "en": "Stocks on Posting Date",
   "ko": "재고 수불부",
   "scopes": [],
   "note": "상세 이동은 MB51, 가치잔액은 MB5L",
   "webgui": true
  },
  "n": 143,
  "tcodes": [
   {
    "c": "MB5B",
    "l": ""
   }
  ],
  "why": "특정 기간의 재고가 얼마였는지 소급 조회"
 },
 {
  "tcode": "MMBE",
  "ko": "재고 가용성 확인",
  "en": "",
  "menu": "MM > 재고조회",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "F1076",
   "en": "Stock - Single Material",
   "ko": "재고 - 단일 자재",
   "scopes": [],
   "note": "배치 상세는 배치 관리(F2462) 병행"
  },
  "n": 144,
  "tcodes": [
   {
    "c": "MMBE",
    "l": ""
   }
  ],
  "why": "자재 하나를 골라 재고 가용성을 깊게 확인"
 },
 {
  "tcode": "MC.A",
  "ko": "자재 분석",
  "en": "",
  "menu": "MM > 분석",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "F1595",
   "en": "Stock - Multiple Materials",
   "ko": "재고 - 복수 자재",
   "scopes": [],
   "note": "LIS 분석과 1:1 아님"
  },
  "n": 145,
  "tcodes": [
   {
    "c": "MC.A",
    "l": ""
   }
  ],
  "why": "자재 사용 패턴을 분석하는 리포트"
 },
 {
  "tcode": "MCBE",
  "ko": "자재 분석",
  "en": "",
  "menu": "MM > 분석",
  "group": "MM",
  "src": "proc",
  "app": {
   "id": "F1595",
   "en": "Stock - Multiple Materials",
   "ko": "재고 - 복수 자재",
   "scopes": [],
   "note": "LIS 분석과 1:1 아님"
  },
  "n": 146,
  "tcodes": [
   {
    "c": "MCBE",
    "l": ""
   }
  ],
  "why": "자재별 재고·사용 현황을 분석"
 },
 {
  "tcode": "MMPV",
  "ko": "자재전기기간관리 (마감)",
  "en": "Close Periods for Inventory Management",
  "menu": "MM",
  "group": "MM",
  "src": "manual",
  "why": "자재 기간을 닫아 이번 달 재고 장부를 확정하는 마감 버튼",
  "tcodes": [
   {
    "c": "MMPV",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Period Closing",
   "ko": "기간 마감",
   "scopes": [],
   "note": "Web GUI 앱",
   "webgui": true
  },
  "n": 147
 },
 {
  "tcode": "MMRV",
  "ko": "자재전기기간관리 (전기 허용)",
  "en": "Allow Posting to Previous Period",
  "menu": "MM",
  "group": "MM",
  "src": "manual",
  "why": "마감된 자재 기간으로의 전기를 일시 허용하는 스위치",
  "tcodes": [
   {
    "c": "MMRV",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Allow Posting to Previous Period",
   "ko": "이전 전기 기간에 허용",
   "scopes": [],
   "note": "Web GUI 앱",
   "webgui": true
  },
  "n": 148
 },
 {
  "tcode": "MD61",
  "ko": "계획독립소요량(PIR)",
  "en": "Planned Independent Requirements",
  "menu": "PP",
  "group": "PP",
  "src": "manual",
  "why": "수요 예측 수량을 넣는 계획독립소요량 관리",
  "tcodes": [
   {
    "c": "MD61",
    "l": "생성"
   },
   {
    "c": "MD62",
    "l": "변경"
   },
   {
    "c": "MD63",
    "l": "조회"
   }
  ],
  "app": {
   "id": "F3445",
   "en": "Maintain PIRs",
   "ko": "PIR 유지보수",
   "scopes": [],
   "note": ""
  },
  "n": 149
 },
 {
  "tcode": "CS01",
  "ko": "BOM",
  "en": "Bill of Material",
  "menu": "PP > BOM",
  "group": "PP",
  "src": "proc",
  "app": {
   "id": "F1813",
   "en": "Manage Bills of Material",
   "ko": "BOM 유지보수",
   "scopes": [],
   "note": "조회(CS03)는 자재 BOM 조회 앱"
  },
  "n": 150,
  "tcodes": [
   {
    "c": "CS01",
    "l": "생성"
   },
   {
    "c": "CS03",
    "l": "조회"
   }
  ],
  "why": "제품을 무엇으로 만드는지 정의하고 확인하는 BOM"
 },
 {
  "tcode": "CA01",
  "ko": "작업순서 생성",
  "en": "",
  "menu": "PP > 작업순서",
  "group": "PP",
  "src": "proc",
  "app": {
   "id": "",
   "en": "Manage Routings",
   "ko": "경로 관리",
   "scopes": [],
   "note": "작업순서 생성",
   "webgui": true
  },
  "n": 151,
  "tcodes": [
   {
    "c": "CA01",
    "l": ""
   }
  ],
  "why": "어떤 순서로 작업할지 정하는 작업순서 생성"
 },
 {
  "tcode": "CO01",
  "ko": "생산오더 생성",
  "en": "",
  "menu": "PP > 생산오더",
  "group": "PP",
  "src": "proc",
  "app": {
   "id": "",
   "en": "Create Production Orders",
   "ko": "생산 오더 생성",
   "scopes": [],
   "note": "생산오더 생성",
   "webgui": true
  },
  "n": 152,
  "tcodes": [
   {
    "c": "CO01",
    "l": ""
   }
  ],
  "why": "무엇을 얼마큼 만들지 지시하는 생산오더 생성"
 },
 {
  "tcode": "CO03",
  "ko": "생산 오더 조회",
  "en": "Display Production Order",
  "menu": "PP",
  "group": "PP",
  "src": "manual",
  "why": "생산오더가 어떻게 진행되는지 상태를 확인하는 조회 화면",
  "tcodes": [
   {
    "c": "CO03",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Display Production Order",
   "ko": "생산 오더 조회: 헤더",
   "scopes": [],
   "note": "cloud.sap",
   "webgui": true
  },
  "n": 153
 },
 {
  "tcode": "CO11",
  "ko": "생산실적",
  "en": "",
  "menu": "PP > 생산오더",
  "group": "PP",
  "src": "proc",
  "app": {
   "id": "F3069",
   "en": "Confirm Production Order Operations",
   "ko": "생산 오더 작업 확인",
   "scopes": [],
   "note": "생산실적 확인"
  },
  "n": 154,
  "tcodes": [
   {
    "c": "CO11",
    "l": ""
   }
  ],
  "why": "생산 실적(수량·시간)을 오더에 확인 입력"
 },
 {
  "tcode": "CO13",
  "ko": "생산 오더 확인 취소",
  "en": "Cancel Production Order Confirmation",
  "menu": "PP",
  "group": "PP",
  "src": "manual",
  "why": "잘못 넣은 생산 실적 확인을 취소하는 화면",
  "tcodes": [
   {
    "c": "CO13",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Cancel Production Order Confirmation",
   "ko": "생산 오더 확인 취소",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 155
 },
 {
  "tcode": "COOIS",
  "ko": "생산 실적 레포트",
  "en": "Production Order Information System",
  "menu": "PP",
  "group": "PP",
  "src": "manual",
  "why": "생산오더 실행 정보를 모아 분석하는 실적 리포트",
  "tcodes": [
   {
    "c": "COOIS",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Monitor Production / Planned Orders",
   "ko": "생산 실적 레포트 - 생산부",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 156
 },
 {
  "tcode": "MFBF",
  "ko": "반복 제조 확인",
  "en": "Repetitive Manufacturing Confirmation",
  "menu": "PP",
  "group": "PP",
  "src": "manual",
  "why": "생산 실적을 백플러시로 한 번에 확인하는 반복 제조 전용 화면",
  "tcodes": [
   {
    "c": "MFBF",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Confirm Repetitive Manufacturing",
   "ko": "반복 제조 확인",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 157
 },
 {
  "tcode": "COGI",
  "ko": "자재 이동 오류 재처리",
  "en": "Reprocess Goods Movements",
  "menu": "PP",
  "group": "PP",
  "src": "manual",
  "why": "생산 확정 때 실패한 자재 이동을 모아 다시 전기한다.",
  "tcodes": [
   {
    "c": "COGI",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "Reprocess Goods Movements",
   "ko": "자재 이동 재처리",
   "scopes": [],
   "note": "",
   "webgui": true
  },
  "n": 158
 },
 {
  "tcode": "FGI0",
  "ko": "FI 리포트/폼",
  "en": "FI Report/Form",
  "menu": "",
  "group": "(기타)",
  "src": "se43",
  "app": {
   "id": "F1572A",
   "en": "Custom Analytical Queries and Services",
   "ko": "사용자 정의 분석 쿼리",
   "scopes": [],
   "note": "Report Painter 1:1 없음, 분석 앱으로 대체"
  },
  "n": 159,
  "tcodes": [
   {
    "c": "FGI0",
    "l": "실행"
   },
   {
    "c": "FGI1",
    "l": "리포트생성"
   },
   {
    "c": "FGI2",
    "l": "리포트변경"
   },
   {
    "c": "FGI3",
    "l": "리포트조회"
   },
   {
    "c": "FGI4",
    "l": "폼생성"
   },
   {
    "c": "FGI5",
    "l": "폼변경"
   },
   {
    "c": "FGI6",
    "l": "폼조회"
   }
  ],
  "why": "FI 리포트를 만들고 실행하고, 틀인 폼까지 다루는 리포트 빌더 세트"
 },
 {
  "tcode": "S_ALR_87012284",
  "ko": "",
  "en": "Balance Sheet/P+L Statement",
  "menu": "",
  "group": "(기타)",
  "src": "se43",
  "app": {
   "id": "F0708",
   "en": "Balance Sheet / Income Statement",
   "ko": "재무상태표/손익계산서",
   "scopes": [],
   "note": "재무제표"
  },
  "n": 160,
  "tcodes": [
   {
    "c": "S_ALR_87012284",
    "l": ""
   }
  ],
  "why": "결산의 최종 산출물, 재무상태표와 손익계산서"
 },
 {
  "tcode": "F.01",
  "ko": "재무제표",
  "en": "Financial Statements",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "재무제표 버전 기준으로 재무상태표와 손익계산서를 뽑는 실행 화면",
  "tcodes": [
   {
    "c": "F.01",
    "l": ""
   }
  ],
  "app": {
   "id": "F0708",
   "en": "Balance Sheet / Income Statement",
   "ko": "재무상태표/손익계산서",
   "scopes": [],
   "note": ""
  },
  "n": 161
 },
 {
  "tcode": "SQVI",
  "ko": "QuickViewer 조회",
  "en": "",
  "menu": "공통",
  "group": "(기타)",
  "src": "proc",
  "app": {
   "id": "F1572A",
   "en": "Custom Analytical Queries and Services",
   "ko": "사용자 정의 분석 쿼리",
   "scopes": [],
   "note": "View Browser·Custom CDS로 대체"
  },
  "n": 162,
  "tcodes": [
   {
    "c": "SQVI",
    "l": ""
   }
  ],
  "why": "코딩 없이 빠르게 뽑는 일회성 조회 도구"
 },
 {
  "tcode": "SQ01",
  "ko": "SAP Query",
  "en": "SAP Query",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "쿼리를 실행하고 데이터 묶음(InfoSet)과 사용자 그룹을 관리하는 쿼리 도구 세트",
  "tcodes": [
   {
    "c": "SQ01",
    "l": "쿼리 실행"
   },
   {
    "c": "SQ02",
    "l": "InfoSet"
   },
   {
    "c": "SQ03",
    "l": "사용자 그룹"
   }
  ],
  "app": {
   "id": "F1572A",
   "en": "Custom Analytical Queries and Services",
   "ko": "사용자 정의 분석 쿼리",
   "scopes": [],
   "note": "Released CDS 기반 재설계"
  },
  "n": 163
 },
 {
  "tcode": "PFCG",
  "ko": "비즈니스 역할 생성/변경",
  "en": "Role Maintenance",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "역할에 권한을 담아 사용자에게 주는 보안의 중심",
  "tcodes": [
   {
    "c": "PFCG",
    "l": ""
   }
  ],
  "app": {
   "id": "F1492",
   "en": "Maintain Business Roles",
   "ko": "비즈니스 역할",
   "scopes": [],
   "note": ""
  },
  "n": 164
 },
 {
  "tcode": "SE43",
  "ko": "영역 메뉴 유지보수",
  "en": "Maintain Area Menus",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "메뉴 구조를 짜는 런치패드 공간 설계의 PCE 원형",
  "tcodes": [
   {
    "c": "SE43",
    "l": ""
   }
  ],
  "app": {
   "id": "F4834",
   "en": "Manage Launchpad Spaces",
   "ko": "런치패드 공간 관리",
   "scopes": [],
   "note": ""
  },
  "n": 165
 },
 {
  "tcode": "SM04",
  "ko": "사용자 개요",
  "en": "User Overview",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "미결을 잡고 있는 세션을 끊어 잠긴 작업을 풀어주는 관리자 화면",
  "tcodes": [
   {
    "c": "SM04",
    "l": ""
   }
  ],
  "app": {
   "id": "F6049",
   "en": "Maintain User Sessions",
   "ko": "사용자 세션 유지보수",
   "scopes": [],
   "note": ""
  },
  "n": 166
 },
 {
  "tcode": "SE09",
  "ko": "전송 오거나이저",
  "en": "Transport Organizer",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "커스터마이징 변경을 묶어 운송 요청으로 내보내는 엑스포트",
  "tcodes": [
   {
    "c": "SE09",
    "l": ""
   }
  ],
  "app": {
   "id": "F1432",
   "en": "Export / Import Software Collection",
   "ko": "소프트웨어 컬렉션 전송",
   "scopes": [],
   "note": "임포트 F1432 · 엑스포트 F1433 (CTS 대신 소프트웨어 컬렉션 방식)"
  },
  "n": 167
 },
 {
  "tcode": "STMS",
  "ko": "전송 관리 시스템",
  "en": "Transport Management System",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "전송 요청을 시스템에 들여오는 컬렉션 임포트의 전송 화면",
  "tcodes": [
   {
    "c": "STMS",
    "l": ""
   }
  ],
  "app": {
   "id": "F1432",
   "en": "Import Collection",
   "ko": "컬렉션 임포트",
   "scopes": [],
   "note": ""
  },
  "n": 168
 },
 {
  "tcode": "SE80",
  "ko": "오브젝트 네비게이터",
  "en": "Object Navigator",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "맞춤 개발(CBO·필드·CDS뷰·로직)의 작업 공간, RAP 코드는 Eclipse에서",
  "tcodes": [
   {
    "c": "SE80",
    "l": ""
   }
  ],
  "app": {
   "id": "F6957",
   "en": "Custom Logic",
   "ko": "사용자 정의 로직",
   "scopes": [],
   "note": "사용자정의오브젝트·사용자정의필드·사용자정의CDS뷰 포함, RAP 코드는 Eclipse"
  },
  "n": 169
 },
 {
  "tcode": "GGB4",
  "ko": "대체/유효성 확인",
  "en": "Substitution/Validation",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "대체와 유효성 확인 규칙을 만들어 전표 실수를 막는 곳",
  "tcodes": [
   {
    "c": "GGB4",
    "l": ""
   }
  ],
  "app": {
   "id": "F4406",
   "en": "Manage Substitution/Validation Rules",
   "ko": "대체 및 유효성 확인 규칙 관리",
   "scopes": [],
   "note": ""
  },
  "n": 170
 },
 {
  "tcode": "FBZP",
  "ko": "지급 프로그램 설정",
  "en": "Payment Program Configuration",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "지급에 쓸 은행 계좌를 정하는 지급 프로그램의 설정",
  "tcodes": [
   {
    "c": "FBZP",
    "l": ""
   }
  ],
  "app": {
   "id": "",
   "en": "",
   "ko": "은행 계좌 설정 정의",
   "scopes": [],
   "note": "구현 액티비티 > 채권채무 > 지급 > 은행결정"
  },
  "n": 171
 },
 {
  "tcode": "SIMG",
  "ko": "IMG",
  "en": "Implementation Guide",
  "menu": "",
  "group": "(기타)",
  "src": "manual",
  "why": "PCE 설정의 총집합 IMG, Public에서는 CBC로",
  "tcodes": [
   {
    "c": "SIMG",
    "l": ""
   }
  ],
  "app": {
   "id": "F1241",
   "en": "Implementation Activities (CBC)",
   "ko": "구현 액티비티",
   "scopes": [],
   "note": "PCE SPRO의 Public 대응은 CBC"
  },
  "n": 172
 }
];
