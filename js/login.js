// login.js

import { setCookie, getCookie, deleteCookie } from './js_cookie.js';
import { check_xss } from './js_xss.js';
import { setSession } from './js_session.js';

const MAX_FAILS = 3;
const FAIL_COOKIE = 'login_fail_count';

function login_failed() {
  let count = parseInt(getCookie(FAIL_COOKIE)) || 0;
  count++;
  setCookie(FAIL_COOKIE, count, 1);
  return count >= MAX_FAILS;
}

function check_input(email, password) {
  const safeEmail = check_xss(email);
  const safePassword = check_xss(password);
  if (!safeEmail || !safePassword) return false;
  if (email.length < 5 || password.length < 6) return false;
  return true;
}

async function login(email, password) {
  if (!check_input(email, password)) {
    alert('입력값이 올바르지 않습니다.');
    return false;
  }
  if (parseInt(getCookie(FAIL_COOKIE)) >= MAX_FAILS) {
    alert('로그인 제한 상태입니다.');
    return false;
  }
  if (email === 'test@example.com' && password === 'password123') {
    deleteCookie(FAIL_COOKIE);
    await setSession('user', { email, loggedIn: true });
    alert('로그인 성공');
    return true;
  } else {
    if (login_failed()) alert('로그인 제한 초과');
    else alert('로그인 실패');
    return false;
  }
}

function handleIdSave(emailValue) {
  const idSaveCheck = document.getElementById('idSaveCheck');
  if (idSaveCheck && idSaveCheck.checked) {
    alert("쿠키를 저장합니다.");
    setCookie("id", emailValue, 1);
  } else {
    setCookie("id", "", 0);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) return;

  const savedId = getCookie("id");
  if (savedId) {
    const emailInput = document.getElementById('email');
    if (emailInput) {
      emailInput.value = savedId;
      const idSaveCheck = document.getElementById('idSaveCheck');
      if (idSaveCheck) idSaveCheck.checked = true;
    }
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (await login(email, password)) {
      handleIdSave(email);
      // 로그인 성공 후 추가 처리 가능
    }
  });
});

export { login, login_failed, check_input };

  