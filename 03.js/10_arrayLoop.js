//배열에서 반복문 사용하기
// - 기본 for 문
// - for ~of 문
// - .forEach()문  == 매서드임.

// 배열) for문 사용하는 이유
const fruits = ['사과', '귤,', '바나나', '포도', '망고'];
console.log(fruits.length); // 5
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
// 위 5줄처럼 반복하면 귀찮고 힘들어서 아래와 같이 for문을 활용한 반복문 사용.
for (let f = 0; f < fruits.length; f++) {
    console.log(fruits[f]);
}

////////////////////////////////////////
// ex)
const arr = [1, 2, 3, 4, 5];

// #1. 기본 for문
for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}
console.log('---------------------');

// #2. for...of 반복문
// - ES6에 도입된 JS 반복문 중 하나.
// - 배열이나, 반복 가능한 객체의 요소들을 순차적으로 반복할 때 사용. (순서가있는 구조 반복에 적합.)
// - 이 반복은 배열의 요소를 직접 참조하므로 인덱스를 사용할 필요가 X

// Ex)
// const alphabets = ['a', 'b', 'c', 'd'];

// for (let alpha of alphabets) {
//     console.log(`alpha >>> ${alpha}`);
// }
// - 배열 'alphabets'의 각 요소를 반복하면서 'alpha' 변수에 순서대로 할당하고,
//   각각 요소에 대해 반복문 블록 실행.
// - alphabets: 배열, 문자열 등등.. 반복 가능한 객체.
// - alpha: 반복되는 각 항목을 의미. 각 항목에 대해 한 번씩 실행 (= 개발자 정의 변수)
// - 다만, 변수명이 반복하는 값을 잘 표현할 수 있도록 적절하게 설정하는 것이 좋다.
console.log('---------------------');

// #3. forEach() 메서드
// - 배열의 각 요소에 대해 지정된 콜백 함수를 실행. (배열 메소드. 배열에서만 사용 가능.)
// - 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행 할 때 사용.
// - 각 요소에 대해 함수가 호출 될 때마다, 해당 요소가 함수의 인자로 전달된다.

const alphabets = ['a', 'b', 'c', 'd'];

// alphabets.forEach(function (alpha) {
//     // alpha: currentValue를 의미. = 반복하고 있는 현재 요소
//     console.log('Element: ', alpha);
// });

// alphabets.forEach(function (alpha, idx) {
//     // alpha: currentValue를 의미. = 반복하고 있는 현재 요소
//     // idx: cureentValue의 인덱스 (위치)
//     console.log(`Element: ${alpha}, Index: ${idx}`);
// });

alphabets.forEach(function (alpha, idx, arr) {
    // alpha: currentValue를 의미. = 반복하고 있는 현재 요소
    // idx: cureentValue의 인덱스 (위치)
    // arr: forEach를 호출한 배열
    console.log(`Element: ${alpha}, Index: ${idx}, Array: ${arr}`);
});

// ex) forEach 사용
num = [1, 3, 5, 9];
num.forEach(function (number, i, arr) {
    arr[i] = number * 2;
});
console.log(`Array: ${num}`);
console.log('---------------------');
//////////////////////////////////////////
// map, filter, find 메서드
// - 조건에 따라 요소를 변형하거나 선택.
// - "불변성을 유지"하면서 데이터를 처리할 수 있게 도와줌.

// #1. map()
// - 배열의 각 요소에 대해 지정된 함수를 호출(실행)하고, 그 결과로 "새로운 배열"을 생성.
// - 기존(원본) 배열은 변하지 않음.
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(function (num) {
    return num * 2;
});
console.log('doubleNumbers >>>> ', doubleNumbers); // [2, 4, 6, 8, 10]
console.log(numbers);

// +) 추가 설명
// 구체적으로 콜백 함수는 map() 메서드에 인수로 전달됨.
// 각 요소를 처리하는 함수로서 배열의 각 요소를 순회할 때마다 호출.
// 이 콜백 함수는 배열의 각 요소를 인자로 받아서 원하는 작업을 수행하고 그 결과를 반환.

// num은 콜백 함수의 매개변수이다.
// = 이는 현재 처리 중인 배열의 요소를 나타낸다.
// 이 매개변수를 활용하여 각 요소에 대해 원하는 작업을 수행하는 것이다.

// #2. filter()
// - 배열의 각 요소에 대해 지정된 함수를 호출(실행)하고,
//   그 결과가 'true'인 요소들로 이루어진 "새로운 배열" 생성
// - 기존 배열은 변하지 않음.

// const numbers = [1, 2, 3, 4, 5];
const pracNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
//  pracNumbers = [2, 4]
console.log('pracNumbers >>>> ', pracNumbers);
console.log(numbers);

// #3. find()
// - 조건을 만족하는 첫 번째 요소 찾기.
// - 배열의 요소를 하나씩 검사하고, 첫 번째 조건을 만족하는 요소를 찾으면 그 즉시 반복 종료.
// - 조건에 만족 -> 해당 요소 반환
// - 조건에 불만족 -> undefined 반환

// const numbers = [1, 2, 3, 4, 5];
const pracNumbers2 = numbers.find(function (num) {
    return num % 2 === 0;
});
// pracNumbers2 = 2
console.log('pracNumbers2 >>>> ', pracNumbers2);
// 홀수만 있을 경우, -> 조건 불만족! // undefined

// + 옵션) 객체에서 반복문 사용하기!
// for ... in 반복문
// 객체의 "key"를 반복 할 수 있는 구문

const dog = {
    // 속성을 반복할 객체
    name: '태풍',
    gender: 'M',
    info: 'cute',
};

console.log(dog.name);
// console.log(dog['name']);

console.log(dog.gender);
console.log(dog.info);

for (let k in dog) {
    console.log(`key: ${k}, value: ${dog[k]}`); // 객체의 각 속성(key, value)에 대해 실행할 코드.
    // key: k - 각 속성의 키를 저장하는 변수 (사용자 정의 변수)
    // value: dog[k]
}
