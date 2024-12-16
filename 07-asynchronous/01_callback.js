// #1. setTimeout(code, delay)
// : delay (단위 :ms) 시간 동안 기다리다가 code 함수를 실행.
// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 2000);
// console.log(3);
// 실행 결과 : 1 -> 3 -> 2
// => js 에서는 setTimeout 함수를 사용했을 때,
// 기다리지 않고 바로 다음 구문을 실행함.

// #################################
// #2. 비동기처리
// Ex) 편의점에 들어가서 음료수를 사고 나오는 상황
/*
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
    // 3초를 기다린 후에 코드 실행
    setTimeout(function () {
        console.log('고민 끝');
        product = '사이다';
        price = 3000;
    }, 3000);
}

function pay(product, price) {
    console.log(`상품명 : ${product}, 가격은 : ${price}`);
}

goMart();
pickDrink();
pay(product, price);
*/
// Why? undefinde가 뜨는 이유
// (컴퓨터 시선)
// 1. product, price 전역 변수 확인.
// 2. goMart(), pickDrink(), pay() 함수 정의부 확인
// 3. goMart() 함수 실행: 로그 찍음.
// 4. pickDrink() 함수 실행
// 4-1. setTimeout 함수에 의해 3초 대기
// - JS는 비동기처리 -> 코드가 끝날 때까지 기다리지 않고 다음 코드 실행.
// 5. pay() 함수 실행 -> !!! undefined 출력
// 5-1. 3초가 지나서 setTimeout의 첫번째 인자인 함수를 실행.
// 5-2. 고민 끝 문장이 출력
// 5-3. product, price 변수에 값이 할당.

// ####################################
// #3. 비동기처리 방법 v.1
// : 콜백함수(callback)
// - 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// - js에서 어떤 함수의 매개변수로 대입되는 함수

// 저희 목표 : 콘솔로그 하나 찍고, 3초뒤에 "고민끝" 이랑 상품명, 가격이 올바르게 출력
/*
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink(callback) {
    // * callback 매개변수 : 콜백함수가 들어올 예정입니다~! 뜻 = pay(p.p)
    setTimeout(function () {
        console.log('고민 끝');
        product = '사이다';
        price = 3000;
        callback(product, price);
    }, 3000);
}

function pay(product, price) {
    console.log(`상품명 : ${product}, 가격은 : ${price}`);
}
goMart();
pickDrink(pay);
*/
// ##########################################
// #4. 콜백 지옥 Ex
/*
setTimeout(() => {
    let leaderList = '';
    let name = 'damon'; // 가정) 임의로 서버에서 받아온 name
    if (!name) {
        console.log('리더 이름을 찾을 수 없습니다!');
    } else {
        leaderList += name;
        console.log(leaderList);
    }
    setTimeout(() => {
        name = 'ari'; // 임의로 서버에서 가져온 척.
        if (!name) {
            console.log('리더 이름을 찾을 수 없습니다!');
        } else {
            leaderList += name;
            console.log(leaderList);
        }
        setTimeout(() => {
            name = 'layra'; // 임의로 서버에서 가져온 척.
            if (!name) {
                console.log('리더 이름을 찾을 수 없습니다!');
            } else {
                leaderList += name;
                console.log(leaderList);
            }
        }, 1000);
    }, 1000);
}, 1000);
*/

// 콜백지옥
// - setTimeout 안에 또 다른 setTimeout이 중첩되면서 코드가 점점 오른쪽으로 밀림.
// - 이로 인해 코드가 복잡하고 읽기 어려워짐.
