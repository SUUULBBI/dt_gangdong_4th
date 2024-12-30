// ES6 버전
// package.json - type - module 추가 필요함.
// #1. 여러모듈 내보내기.

const name = ['john', 'damon', 'matt'];

function subtract(a, b) {
    return a - b;
}

export { name, subtract };
