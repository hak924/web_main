function session_set() { //세션 저장
     let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
     let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
     if (sessionStorage) {
     let en_text = encrypt_text(session_pass.value);
     sessionStorage.setItem("Session_Storage_id", session_id.value);
     sessionStorage.setItem("Session_Storage_pass", en_text);
     } else {
     alert("로컬 스토리지 지원 x");
     }
     }
     

function session_get() { //세션 읽기
        if (sessionStorage) {
             return sessionStorage.getItem("Session_Storage_test");
        } else {
             alert("세션 스토리지 지원 x");
        }
}