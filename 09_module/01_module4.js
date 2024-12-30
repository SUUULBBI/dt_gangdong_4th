// CommonJS 버전

// #4. 바로 exports 시키기.
// 함수 선언문 안됨. 표현식만 가능. --> CommonJS에서만 가능함.

exports.sayhi2 = function () {
    console.log('hi22'); // 선언과 동시에 내보내기 가능하고 표현식으로만 가능함.
};
