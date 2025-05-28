function encodeByAES256(key, data){ //
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(""), // IV 초기화 벡터
    padding: CryptoJS.pad.Pkcs7, // 패딩
    mode: CryptoJS.mode.CBC // 운영 모드
    });
    return cipher.toString();
}
    
function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(""),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}

function encrypt_text(password){
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = this.encodeByAES256(rk, b); // 실제 암호화
    return eb;
    console.log(eb);
}
    
function decrypt_text(){
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get();
    const b = this.decodeByAES256(rk, eb); // 실제 복호화
    console.log(b);
}

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
// js_crypto.js

function encodeByAES256(key, data) {
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(""), // IV (초기화 벡터) - 필요 시 지정
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
  }
  
  function decodeByAES256(key, data) {
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(""),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
  }
  
  function encrypt_text(password) {
    const k = "key"; // 클라이언트 키 (실제 키는 안전하게 관리)
    const rk = k.padEnd(32, " "); // AES256 키 길이 맞춤
    const b = password;
    const eb = encodeByAES256(rk, b);
    console.log("암호화된 텍스트:", eb);
    return eb;
  }
  
  function decrypt_text(encrypted) {
    const k = "key"; // 서버 키 (실제 키는 안전하게 관리)
    const rk = k.padEnd(32, " ");
    const db = decodeByAES256(rk, encrypted);
    console.log("복호화된 텍스트:", db);
    return db;
  }
  
  export { encodeByAES256, decodeByAES256, encrypt_text, decrypt_text };
  

    