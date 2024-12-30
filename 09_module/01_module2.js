// CommonJS 버전

// #2. 개별적으로 내보내기.
const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

//하나씩 내보내기 할때는 . 접근법으로 아래와 같이 작성.
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// 축약버전 (module. 삭제한 것.)
exports.add = add;
exports.PI = PI;
exports.E = E;
