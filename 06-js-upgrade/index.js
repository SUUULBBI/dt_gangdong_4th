/**
 * 구조 분해 할당
 * - ES6 추가된 JS기능.
 * - 배열이나 객체의 값을 손쉽게 변수로 분해하여 할당할 수 있는 문법임.
 * - 작성하는 '순서' 가 중요함.
 * - 코드가 더 간결하고 읽기 쉬워짐.
 */

//1. 배열의 구조분해 할당
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

//기존 방식일 때 접근 방법
// const one = arr1[0];
// const two = arr1[1];
// const three = arr1[2];
// console.log(one, two, three);

// 오늘 배울 구조 분해 할당
// const [one, two, three, four, five] = arr1;
// console.log(one, two, three, four, five);

// #1. 각 변수에 배열의 인덱스 순으로 값이 대응됨.
const [five, two, abc, four, one] = arr1;
console.log(one, four, abc, two, five); //5 4 3 2 1

///////////////////////////////////////////////
// #2. 변수의 값이 undefined 일 때 기본값 할당 가능함.
//  + 값이 할당되지 않는 값은 undefined 출력됨.
const [x, y, z, alpha, beta] = arr2; // 위의 const arr2 에서 a,b,c 까지만 할당되어 있는 상태임.
console.log(x, y, z, alpha, beta); // 따라서 결과는 a b c undefined undefined

const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(lists);

///////////////////////////////////////////////
// #3. 임시 변수없이 두 변수의 값 교환 가능함.
let num1 = 10;
let num2 = 20;
console.log('before:', num1, num2);
//기존 방식 (임수 변수 사용)
// 변수 값의 교환, 2개의 변수
let temp = num1; // temp = 10  // 기존 방식이라 임시변수 사용한 버전임.
num1 = num2; // num1 = 20
num2 = temp; // num2 = 10
console.log('after:', num1, num2);

//구조 분해 할당
console.log('before:', num1, num2);
[num2, num1] = [num1, num2]; // 한줄로 간편하게 값 교환 가능.
console.log('after:', num1, num2);

///////////////////////////////////////////////
// 2. 객체의 구조 분해 할당
//    - 객체의 속성을 개별 변수에 할당할 때 사용함.
const obj = {
    title: '소방관',
    content: 'so sad',
    num: 5,
};
// 기존 가져오기 방식 - .점 표기법
console.log(obj.num);
console.log(obj.num);
console.log(obj.title);
// 기존 가져오기 방식 중 ['']대괄호 표기법
console.log('----------------');
console.log(obj['content']);
console.log(obj['num']);

// 객체 구조 분해로 가져오기
//   -#1. 객체 안의 속성을 변수명으로 사용.
//      - 기본 값 할당 가능
const { num, title, content, star = 1000 } = obj;
console.log(num, title, content, star);

// 단, 같은 이름(=key name)을 사용해야함.
const { a1, b1, c1 } = obj;
console.log(a1, b1, c1); // undefined undefined undefined 출력됨. // why? 변수는 선언되었지만, 값이 할당되지 않았음.

//   -#2. 콜론(:) 이용해 새 변수명 선언, 원래의 값을 새 변수명에 할당 가능함.
const { num: customNum, title: customTitle } = obj; // num과 title 의 변수명을 바꿔준 것.
console.log(customNum, customTitle); //바꾼 변수명을 가지고 값이 잘 출력됨.

// 함수 응용
const lectureInfo = { name: 'Coding on', part: 'web', leader: 'damon' };
console.log(lectureInfo); //{name: 'Coding on', part: 'web', leader: 'damon'}

function getInfo(lecture) {
    const { name, part, leader } = lecture; // getInfo 함수가 실행되면 매개변수는 lecture 이고, lecture가 실행.
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader}입니다. `;
    return output; //위 변수를 반환.
}

const result = getInfo(lectureInfo);
console.log('result >>>>', result);
