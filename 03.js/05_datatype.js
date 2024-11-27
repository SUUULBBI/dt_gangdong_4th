// 자료형 (data types)
// Q) 데이터 (변수)의 종류가 무엇인가?
// - Primitive(원시 타입) : string, number, boolean, undefined, null, ...
// - Object(객체 타입) : Primitive 타입이 아닌 나머지

// #1. string (문자열)
// - 텍스트 정보, 따옴표로 감싸야 함.
// - 숫자, 특수문자도 따옴표 안에 포함 되어있다면? -> 문자열
// ex) '1', '$'

let text = '안녕하세요!';
let text2 = '하이!';
let gender = '남성';

console.log(text);
console.log(text2);
console.log(text + text2);

// 문자 + 변수를 동시에 쓰고 싶을 때
console.log(text + '저는 Damon 입니다. 저의 성별은 ' + gender + ' 입니다!'); // 문자열 연결
console.log(text, text2, '야호');


// 템플릿 리터럴 (문자를 표현하는 새로운 문법 )
// (ES6 (자바스크립트 버전 6)) 백틱!! ₩ 숫자 앞의 점.. // 백틱₩과 달러$, 중괄호{} 를 조합해서 사용함.
// 백틱은 영문 상태일떄 ` 나옴... 한글일때는 원화표기됨.
// 문자열 내에서 변수와 상수를 간결히 표현 가능


console.log(`${text} 저는 ㅇㅇ입니다. 저의 성별은 ${gender} 입니다.! `);

// 2. number (숫자형)
// - 정수, 실수
// - 연산이 가능하다. (+ - * / %)
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + 1);
console.log(num - 1);
console.log(num * 2);
console.log(num / 2);

// Q) 정수로 나오는 이유?
// A) JS에서는 정수와 실수를 구분하지 않고 모두 "Number" 타입으로 처리한다.
// - 즉, JS에서는 모든 숫자를 같은 타입으로 취급한다.

// 실수의 형태를 유지하고 싶다면. 'toFixed()' 라는 메서드를 사용해야 한다. (나중에 배움)

// #3. boolean (불리언)
// - true, false (참, 거짓) 두 가지 값만 가지는 데이터
let isWater = true;
let haveMoney = false;
console.log(isWater, haveMoney);

// #4. null (빈 값)
// "값이 없음"을 의도적으로 개발자가 명시한 것.
let temp = null;
console.log(temp);
temp = 'Hello';
console.log(temp);

// 5. undefiened
// 값도 없고, 타입도 지정되지 않은 상태
let x; // 변수 선언만 했을 때 초기 값으로 undefined 할당.
console.log(x); // undefined

// [Quiz]
// Q1. 코드 실행 시 q1 변수는 어떤 값이 될까?
let q1 = 3;
console.log(q1 - 2); // 1
console.log(q1); // 3

// Q2. 다음 코드 실행 시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5;
q2 = q2 - 2;
console.log(q2); // 13

// Q3. 다음 코드 실행 시 q3 변수는 어떤 값이 될까? (상수) - 바뀌면 안됨.
const q3 = 1;
// q3 = q3 + 1; // Error
console.log(q3);

// Q4. 다음 실행 값은 무엇일까?
let ex = 2;
let am = '2';
let s = 2;
console.log(ex + am - s);
// 2?
// 20
// JS -> 느슨한 언어의 단점