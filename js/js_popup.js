// js_popup.js

var close_time;        // 타이머 ID 저장용
var close_time2 = 10;  // 10초 카운트다운 시작값

// 타이머 초기화 및 시작
clearTimeout(close_time);
close_time = setTimeout(close_window, 10000); // 10초 후 자동 닫기

// 1초마다 남은 시간 표시 함수
function show_time() {
  let divClock = document.getElementById('Time');
  if (divClock) {
    divClock.innerText = close_time2; // 남은 시간 표시
    close_time2--;                    // 1초씩 감소
    if (close_time2 >= 0) {
      setTimeout(show_time, 1000);   // 1초마다 재호출
    }
  }
}

// 창 닫기 함수
function close_window() {
  window.close();
}

// 팝업 열기 함수
function pop_up() {
  window.open("../popup/popup.html", "팝업테스트", "width=600,height=400,top=100,left=100");
}

// 이미지 오버 효과 함수
function over(obj) {
  obj.src = "image/logo.svg";
}

// 이미지 아웃 효과 함수
function out(obj) {
  obj.src = "image/logo_2.png";
}

// 화살표 함수 버전 이미지 오버 효과
const overArrow = (obj) => {
  obj.src = "image/LOGO.png";
};

export { close_window, pop_up, over, out, overArrow, show_time };
