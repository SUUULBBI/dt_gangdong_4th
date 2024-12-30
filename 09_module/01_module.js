// CommonJS버전 (: ES6버전 이전의 것.)
// #1. 단일 모듈 내보내기
// 함수 선언
const add = (a, b) => a + b;

// add 함수를 다른 js 파일에서 불러와 사용할 수 있도록 내보내기.
module.exports = add;
