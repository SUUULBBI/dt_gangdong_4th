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

/////////////////////////////////////////////////
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
console.log('-------------------');

/////////////////////////////////////////
// 3. while 문
// Ex1)
let idx = 0;
while (idx < 10) {
    console.log('안녕', idx);
    // idx = idx + 1;
    idx += 1;
}
console.log('------------------');

// Ex2) 무한 루프
let idx2 = 0;
while (true) {
    // 의도적으로 무한루프
    console.log('idx2 안녕', idx2);
    idx2 += 1;

    // 무한 루프를 빠져나오는 조건
    if (idx2 === 10) {
        break;
    }
}
console.log('------------------');
// Ex3) while문 구구단
let i = 2,
    j = 1;
while (i < 10) {
    while (j < 10) {
        // console.log(i, 'x', j, '=', i * j);
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
    j = 1;
}

// Q) 1부터 20까지의 홀수 합 구하기 (while 사용)
let idx5 = 0;
let sum5 = 0;
while (idx5 <= 20) {
    // 조건 20이하일때
    if (idx5 % 2 === 1) {
        // i가 홀수인지 확인
        sum5 += idx5; // 홀수면 합에 더해줘.
    }
    idx5++; // if문 밖으로 꺼내줘야지 증감이 적용됨.
}
console.log(sum5);

console.log('////////////////////');
/////// Q2) 10부터 1까지 역순으로 숫자 출력 (while)
let z = 10; /// 초기값 설정.
while (z > 0) {
    // (z >= 1) 도 가능 = z가 1이상일 때
    console.log(z); // 현재 숫자 출력.
    z--; // z를 1감소 (감소식)
}

//4. do while 문
// while 문과 비슷하지만, 조건을 반복문 실행 후 확인함
// 조건이 참인지 여주에 상관없이 코드 블록을 최소 한번 실행한 후 조건을 검사한다
// 즉, 항상 코드 블록을 한번 실행한 다음, 조건이 참인 동안 반복을 계속
// 구문
// do {
//     // 실행할 코드 내용
// }while (조건);
//ex1)
let g = 1;
do {
    console.log('g/////', g);
    g++;
} while (g <= 5);
// 1 2 3 4 5
//ex2)
let number;
do {
    number = parseInt(prompt('숫자를 입력하세요 (10보다 큰숫자):'), 10);
} while (number <= 10);
console.log('입력한 숫자: ', number);
// 10보다 작은 수를 입력하면 조건을 계속해서 만족하기 때문에 prompt가 반복 실행됨
////////////////////
// 5. break & continue
// - 반복문에서 사용되는 제어문
// # break
// - 반복문을 완전히 중단하고 빠져나옴
// # continue
// - 현재 반복을 중지하고 다음 반복으로 넘어감 (이번 회차 건너뛰기)
// ex) break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(`i >>>>> ${i}`);
}
// 출력결과 : 1 2 3 4
//ex) continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`i>>>> ${i}`);
}
// 출력결과 : 1 2 4 5
//-----------

// Q) for문을 활용한 별 찍기.
// 결과 모습)
/**
 * h = 5 입력
 *     *    // i = 1; / j = h-1 = 4 / k = 1
 *    **    // i = 2; / j = h-2 = 3 / k = 2
 *   ***    // i = 3; / j = h-3 = 2 / k = 3
 *  ****
 * *****    // i = 5; / j = h-5 = 0 / k = 5
 */
// Hint 1) prompt 사용해서 높이를 입력 받기. - 10진수의 정수(int)형으로 형변환 할 것.
// Hint 2) 각 줄의 내용을 저장할 문자열 변수 만들기.
// Hint 3) 문자열(" ") 과 문자열(*)을 더한다.
// Hint 4) for문 중첩.

const h = parseInt(prompt('높이를 입력하세요: '), 10);

// 별 찍기
for (let i = 1; i <= h; i++) {
    let line = ''; // 각 줄의 내용을 저장할 문자열

    // 공백 추가
    for (let j = 1; j <= h - i; j++) {
        line = line + ' ';
    }
    // line = "    "

    // 별 추가
    for (let k = 1; k <= i; k++) {
        line = line + '*';
    }
    // line = "    *"

    console.log(line);
}
// h = 5 입력 했을 가정)
// i = 1 / j = 1 ~ 4 / k = 1 ====>        *
// i = 2 / j = 1 ~ 3 / k = 2 ====>       **
// i = 5 / j = 0 만족 x / k = 5 ====> *****
