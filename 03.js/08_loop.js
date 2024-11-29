// 반복문
//1. for 문

/* 
    * 구문 
    for ([변수 선언 & 초기 값 설정]; [조건식(범위 지정]; [증감식]) {
     반복시킬 코드 내용 입력.}
 */

// i가 0~9까지 총10번 반복 시킨 것임.
for (let i = 0; i < 10; i++) {
    console.log('안녕', i);
}

//문제 : 1~5까지 출력하기
for (let a = 1; a < 6; a++) {
    console.log(a);
}
//(위와 동일한 값이 출력됨) for (let a = 0; a<5; a++) { console.log(a+1);}

console.log('-----------------');
//문제 :  5~1까지 출력하기
for (let b = 5; b < 10; b++) {
    console.log(10 - b);
}
//(위와 동일한 값이 출력됨) for (let b=5; b>=1; b--) {console.log(b)}

//----------------------
//1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= 10; i++) {
    sum = sum + i; // 간소화 방법 >> sum += i;
    console.log(i, sum);
}
console.log(sum);

//--------------------
console.log('-------------------');
// #2. for ~if 중첩
// * 간단 실습 진행
// Q) 1~20 중에서 짝수 일때의 합을 구하기
//(hint : 1~20까지의 숫자를 반복 / 현재 반복 숫자가 짝수라면 변수에 더하기./ for 문 안에 if문 조합하기)
console.log('-------------------');

// Hint 1) 1 ~ 20 까지 숫자를 반복
// Hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기.
// Hint 3) for문 안에 if문 조합 해보세요.

// Q) 1 ~ 20 중에서 짝수 일 때의 합을 구하기.
// let sum2 = 0; // 짝수의 합 저장할 변수

// for (let i = 1; i <= 20; i++) {
//     // console.log(i);
//     if (i % 2 === 0) {
//         sum2 = sum2 + i;
//         console.log(i, sum2);
//     }
// }
// console.log(sum2);

let sum2 = 0;
for (let i = 1; i <= 20; i++) {
    //console.log(i);
    if (i % 2 === 0) {
        sum2 = sum2 + i;
        console.log(i, sum2);
    }
}
console.log('-------------------');
console.log(sum2);
