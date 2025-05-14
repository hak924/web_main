var close_time; // 시간 정보
var close_time2 = 10; // 10초 설정
clearTimeout(close_time); // 재호출 정지
close_time= setTimeout("close_window()", 10000);
// 1/1000 초 지정, 바로 시작
show_time(); // 실시간 시간 보여주기
function show_time(){
let divClock = document.getElementById('Time');
divClock.innerText = close_time2; // 10초 삽입 시작
close_time2--; // 1초씩 감소
setTimeout(show_time, 1000); //1초마다 갱신
}
function close_window() { // 함수 정의
window.close(); // 윈도우 닫기
}

function pop_up() {
    window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
    }
    function over(obj) {
        obj.src="image/logo.svg";
        }
        function out(obj) {
        obj.src="image/logo_2.png";
        }
        const over = (obj) => {
        obj.src = "image/LOGO.png";
        };
            
            const search_message = () => {
            const c = '검색을 수행합니다';
            alert(c);
            };

            function setCookie(name, value, expiredays) {
                var date = new Date();
                date.setDate(date.getDate() + expiredays);
                document.cookie = escape(name) + "=" + escape(value) + ";
                expires=" + date.toUTCString() + "; path=/";
                }
                function getCookie(name) {
                    var cookie = document.cookie;
                    console.log("쿠키를 요청합니다.");
                    if (cookie != "") {
                    var cookie_array = cookie.split("; ");
                    for ( var index in cookie_array) {
                    var cookie_name = cookie_array[index].split("=");
                    if (cookie_name[0] == "popupYN") {
                    return cookie_name[1];
                    }
                    }
                    }
                    return ;
                    }