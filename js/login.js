const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    
    const c = '아이디, 패스워드를 체크합니다';
    alert(c);
    
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.5/purify.min.js" integrity="sha512-/CUtA84sWWqWEBejNrrtWa7Yc4cth3Ome2ymvCKOo9YcZ4sh98tndUy4LutE2xGcAgD4fyz16y+gSyJdGCB5ww==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
    const sanitizedPassword = check_xss(passwordInput);
    // check_xss 함수로 비밀번호 Sanitize
    const sanitizedEmail = check_xss(emailInput);
    // check_xss 함수로 비밀번호 Sanitize
    
    if (emailValue === '') {
       alert('이메일을 입력하세요.');
       return false;
       }
    if (passwordValue === '') {
       alert('비밀번호를 입력하세요.');
       return false;
       }
    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    loginForm.submit();
    };
    document.getElementById("login_btn").addEventListener('click', check_input);
    <form method="get" action="/login/index_login.html" id="login_form">
<div data-mdb-input-init class="form-outline form-white mb-4">
  <https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js&gt;
    <input type="email" id="typeEmailX" class="form-control form-control-lg" name="id" />
    <label class="form-label" for="typeEmailX">이메일</label>
</div>
<div data-mdb-input-init class="form-outline form-white mb-4">
    <input type="password" id="typePasswordX" class="form-control form-control-lg" name="password" />
    <label class="form-label" for="typePasswordX">패스워드</label>
</div>
<p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">패스워드 찾기</a></p>
<button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" id="login_btn" type="submit">로그인</button>
</form>
if (emailValue.length < 5)
    {alert('아이디는 최소 5글자 이상 입력해야 합니다.');
    return false;
}
    if (passwordValue.length < 12) 
    {alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
    return false;
}
    const hasSpecialChar = passwordValue.match(/[!},@#$%^&*()_+\-
    =\[\],{};':"\\|,.<>\/?]+/) !== null;)
    if (!hasSpecialChar) {
    alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
    return false;
}
    if (!sanitizedEmail) {
    // Sanitize된 비밀번호 사용
    return false;
    }
    if (!sanitizedPassword) {
    // Sanitize된 비밀번호 사용
    return false;
    }
    
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
    alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
    return false;
}
