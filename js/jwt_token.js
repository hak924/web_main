// jwt_token.js

// JWT 비밀 키 (실제 서비스에서는 서버에 안전하게 보관)
const JWT_SECRET = 'your-secret-key';

// JWT 생성 (간단 예시, 실제로는 라이브러리 사용 권장)
function generateJWT(payload) {
  // 헤더
  const header = {
    alg: "HS256",
    typ: "JWT"
  };

  // Base64Url 인코딩 함수
  function base64UrlEncode(obj) {
    return btoa(JSON.stringify(obj))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  const encodedHeader = base64UrlEncode(header);
  const encodedPayload = base64UrlEncode(payload);

  // 서명 생성 (CryptoJS 라이브러리 필요)
  const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET).toString(CryptoJS.enc.Base64)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

// JWT 검증
function verifyJWT(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [encodedHeader, encodedPayload, signature] = parts;

    const expectedSignature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET).toString(CryptoJS.enc.Base64)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    if (expectedSignature !== signature) return null;

    const payload = JSON.parse(atob(encodedPayload));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      console.log('보안 토큰이 만료되었습니다');
      return null;
    }
    return payload;
  } catch (error) {
    return null;
  }
}

// 사용자 인증 상태 확인
function isAuthenticated() {
  const token = localStorage.getItem('jwt_token');
  if (!token) return false;
  const payload = verifyJWT(token);
  return payload !== null;
}

export { generateJWT, verifyJWT, isAuthenticated };

