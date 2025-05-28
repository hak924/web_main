// js_test.js

var jb = 'hi'; // 변수 선언 후 주석 가능 (한줄 주석)
var a = 1;
var b;
b = 5;

/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/

if (true) {
  let c = 'let 접근';
  var c_1 = 'var 접근';
}
// console.log(c); // Error? (let은 블록 스코프라서 블록 밖에서 접근 불가)
console.log(c_1); // var는 함수 스코프라서 접근 가능

let d = 5;
// let d = '값 재할당'; // Error? (let은 재선언 불가, 재할당은 가능)
console.log(d);

const e = '상수1 접근';
// e = 5; // Error? (const는 재할당 불가)
console.log(e);
