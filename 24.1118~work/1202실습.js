//코딩온 반복문
//1번 실습
// for (let i = 1; i <= 10000; i++) {
//     if (i % 2 === 1 && i % 13 === 0) {
//         console.log(i);
//     }
// }

//코딩온 2번 실습 - 구구단 만들기
let a = 2;
let b = 1;
while (a < 10) {
    console.log(`---${a}단 ---`);
    while (b < 10) {
        console.log(`${a} x ${b} = ${a * b}`);
        b++;
    }
    a++;
    b = 1;
}

//코딩온 3번 실습 - 0~100 의 숫자 중에서 2또는 5의배수 총합 구하기
let c = 0;
let sum3 = 0;

//별 찍기 문제.
//결과 모습 )
/**
 * m = 5 입력
 *     *
 *    **
 *   ***
 *  ****
 * *****
 */
//hint ) prompt 사용해서 높이를 입력받기, 10진수의 정수형으로 형변환 할 것.
//hint ) 각 줄의 내용을 저장할 문자열 변수 만들기.
// hint ) 문자열과 문자열을 더한다.
// hint ) for문 중첩 사용

for (let star1 = 0; star1 < 5; star1++) {
    console.log(star1 + 1);
}

console.log('---------------');
let level = 5;
for (let i = 1; i <= level; i++) {
    let star = ' '; //공란
    for (let j = 1; j <= i; j++) {
        star += '*';
    }
    console.log(star);
}
//////
console.log('///////////////');
for (let i = 1; i <= 5; i++) {
    let star = ' ';
    for (let j = 4; j >= i; j--) {
        star += '*';
    }
    console.log(star);
}

//////////////////
//코딩온 내장 메소드 실습 1번 - 배열과 반복문 실습

for (let num100 = 1; num100 <= 100; num100++) {
    console.log(num100);
}
