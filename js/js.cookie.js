// js/js_cookie.js
export function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};${expires};path=/;SameSite=None;Secure`;
  }
  
  export function getCookie(name) {
    const cookies = decodeURIComponent(document.cookie).split(';');
    name = name + "=";
    for (let c of cookies) {
      c = c.trim();
      if (c.indexOf(name) === 0) return c.substring(name.length);
    }
    return null;
  }
  
  export function deleteCookie(name) {
    setCookie(name, "", -1);
  }
  // js_cookie.js
export function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};${expires};path=/;SameSite=None;Secure`;
  }
  
  export function getCookie(name) {
    const cookies = decodeURIComponent(document.cookie).split(';');
    name = name + "=";
    for (let c of cookies) {
      c = c.trim();
      if (c.indexOf(name) === 0) return c.substring(name.length);
    }
    return null;
  }
  
  export function deleteCookie(name) {
    setCookie(name, "", -1);
  }
  