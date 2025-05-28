// js_session.js

import { encrypt, decrypt } from './js_crypto.js'; // 암호화 함수 임포트

// 세션 저장 함수
export function session_set() {
  const session_id = document.querySelector("#session_id");
  const session_pass = document.querySelector("#session_pass");

  if (sessionStorage) {
    const en_text = encrypt(session_pass.value);
    sessionStorage.setItem("Session_Storage_id", session_id.value);
    sessionStorage.setItem("Session_Storage_pass", en_text);
  } else {
    alert("로컬 스토리지 지원 x");
  }
}

// 세션 읽기 함수
export function session_get() {
  if (sessionStorage) {
    return {
      id: sessionStorage.getItem("Session_Storage_id"),
      pass: decrypt(sessionStorage.getItem("Session_Storage_pass"))
    };
  } else {
    alert("세션 스토리지 지원 x");
    return null;
  }
}

   