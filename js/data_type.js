// data_type.js

// 데이터 타입 확인 함수
export function checkType(value) {
    return typeof value;
  }
  
  // 문자열 변환 함수
  export function convertToString(value) {
    return String(value);
  }
  
  // 숫자 변환 함수
  export function convertToNumber(value) {
    return Number(value);
  }
  
  // 불리언 변환 함수
  export function convertToBoolean(value) {
    return Boolean(value);
  }
  
  // 팝업 열기 함수 (pop_up)
  export function pop_up() {
    const url = 'popup.html'; // 팝업에 띄울 페이지 URL
    const name = 'popupWindow';
    const width = 600;
    const height = 400;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    window.open(url, name, `width=${width},height=${height},top=${top},left=${left}`);
  }
  