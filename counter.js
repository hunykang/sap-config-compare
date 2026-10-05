/* 방문 카운터 — countapi.mileshilliard.com (가입 불필요 무료 API)
 * 세션당 1회 집계. 푸터에 "오늘 방문 N · 전체 방문 M" 텍스트로 표시.
 * 실패 시 조용히 숨김.
 */
(function () {
  var el = document.getElementById('visit-counter');
  if (!el) return;
  function kstDate() {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  }
  function fmt(n) { return Number(n || 0).toLocaleString('ko-KR'); }
  var TOTAL_KEY = 'sap-config-compare-total';
  var DAY_KEY = 'sap-config-compare-day-' + kstDate();
  var counted = false;
  try { counted = sessionStorage.getItem('sapcfg-counted') === '1'; } catch (e) {}
  var op = counted ? 'get' : 'hit';
  if (!counted) { try { sessionStorage.setItem('sapcfg-counted', '1'); } catch (e) {} }
  function req(key) {
    return fetch('https://countapi.mileshilliard.com/api/v1/' + op + '/' + key).then(function (r) { return r.json(); });
  }
  Promise.all([req(TOTAL_KEY), req(DAY_KEY)]).then(function (res) {
    el.innerHTML = '오늘 방문 <strong>' + fmt(res[1].value) + '</strong> · 전체 방문 <strong>' + fmt(res[0].value) + '</strong>';
    el.style.display = '';
  }).catch(function () { /* 숨김 유지 */ });
})();
