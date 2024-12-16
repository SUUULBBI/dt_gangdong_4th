// 비동기처리 방법 v.2
// : Promise( 프로미스) 객체
// - 비동기처리 하기 위한 첫번째 방법이 콜백함수였고, 이때 콜백지옥이라는 치명적인 단점이 있었음.
// 따라서 이 단점을 해결하기 위해 ES6버전부터 등장한 문법임(2015년)
// - 미래에 실패/성공에 대한 결과값을 '약속'한다는 의미.
// - 어떤 작업에 대해 성공 또는 실패로 분리해서 반환함.
//   따라서 성공은 then(), 실패는 .catch() 메서드로 이어서 받음.

// => 성공이든 실패든 무언가의 '최종 결과'를 나타냄.
// resolved: 성공
// rejected : 실패

// #1. promise 를 생성하는 코드
//  - "제작 코드" (Producing code)
function promise1(flag) {
    // 먼저 프로미스 객체를 반환함.
    // 이어서 아래와 같이new 연산자를 이용해서 프로미스 객체를 만들고 바로 반환함.
    return new Promise(function (resolve, reject) {
        // 실행함수(excutor)가 위와 같이 두개의 콜백함수 resolve, reject를 받음.
        if (flag) {
            // flag = ture 라면 아래를 이행한다.
            resolve(`프로미스 이행(fulfilled 상태! === 성공! ${flag}`);
        } else {
            // flag아니라면, 아래를 이행한다.
            reject(`프로미스 거절(rejected) 상태 === 실패... ${flag}`);
        }
    });
}

// #2. promise를 소비하는 코드
// - "소비 코드" (Consuming code)
promise1(5 < 3) // 이 값의 ture or false 에 따라서 then or catch의 값을 보내줌.
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });

// 위 코드를 화살표 함수로 표현하기
promise1(5 > 3)
    .then((result) => console.log(result))
    .catch((result) => console.log(result));

// #################################################
// P) 01_callback.에서 콜백함수를 사용해 작성한 코드를 promise를 사용해서 해보기.
/*
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝');
            product = '사이다';
            price = 3000;
            // resolve();

            if (price <= 3000) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
}

function pay() {
    console.log(`상품명 : ${product}, 가격은 : ${price}`);
}

function nopay() {
    console.log('금액 부족 ㅠㅠ');
}

goMart();
pickDrink().then(pay).catch(nopay);
*/
// reject() 반환 -> catch문 실행
// resolve() 반환 -> then문 실행

// ######################################
// # 프로미스 체이닝 (Promise Chaining)
// 목표 : 함수를 이용해 (4 + 3) * 2 - 1 연산.
// => sub(mul(add(4, 3), 2), 1) : add -> mul -> sub

// i) 콜백함수를 이용해 처리한 경우
/*
function add(n1, n2, callback) {
    setTimeout(function () {
        const result = n1 + n2; // 두 숫자 n1과 n2를 더함.
        callback(result); // 콜백 함수에 결과(result)를 전달.
    }, 1000);
}

function mul(n, callback) {
    setTimeout(function () {
        const result = n * 2;
        callback(result);
    }, 700);
}

function sub(n, callback) {
    setTimeout(function () {
        const result = n - 1;
        callback(result);
    }, 500);
}

add(4, 3, function (x) {
    console.log(x); // 7

    mul(x, function (y) {
        console.log(y); // 14

        sub(y, function (z) {
            console.log(z); // 13
        });
    });
});
*/
// 가독성 불편함.

// ii) 프로미스 체이닝을 이용한 경우
function add(n1, n2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n1 + n2; // 7
            resolve(result);
        }, 1000);
    });
}

function mul(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n * 2; // 14
            resolve(result);
        }, 700);
    });
}

function sub(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n - 1; // 13
            resolve(result);
            // reject(new Error('의도적으로 에러 발생')); // reject() 만 써도 에러로 반환함.  // 또는 console.error(error) 라는 에러 객체를 이용해도 됨.
        }, 500);
    });
}

add(4, 3)
    .then(function (result) {
        console.log(result); // 7

        return mul(result); // return mul(7)
    })
    .then(function (result) {
        console.log(result); // 14

        return sub(result);
    })
    .then(function (result) {
        console.log(result); // 13
    })
    .catch(function (error) {
        console.log(error);
        //error.message = '진짜 큰일남';  // 에러메세지 문구 변경도 가능.
        //console.error(error)
    });
