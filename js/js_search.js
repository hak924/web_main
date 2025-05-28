// js_search.js

// LOL 데이터 예시
const lolData = [
    { type: 'champion', name: '아리', alias: 'Ahri' },
    { type: 'champion', name: '리 신', alias: 'Lee Sin' },
    { type: 'champion', name: '이즈리얼', alias: 'Ezreal' },
  ];
  
  // 키워드로 LOL 데이터 필터링
  export function filterLolData(keyword, dataList = lolData) {
    if (!keyword) return dataList;
    const lower = keyword.toLowerCase();
    return dataList.filter(item =>
      item.name.toLowerCase().includes(lower) || (item.alias && item.alias.toLowerCase().includes(lower))
    );
  }
  
  // DOMContentLoaded 시 검색 입력 이벤트 연결 예시
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('lolSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value;
        const results = filterLolData(keyword);
        console.log('검색 결과:', results);
        // 결과를 화면에 표시하는 로직 추가 가능
      });
    }
  });
  