// spread (...) 연산자
//  - 배열이나 객체를 개별 요소로 펼치거나, 새로운 배열이나 객체를 복사하거나 병합하는데 사용하는 ES6 기능임.
//  - 더 간결하고 유연하게 데이터 처리가 가능함.

// 배열에서의 스프레드 연산자.
// #1. 배열 복사
const arr = ['a', 'b', 'c'];
const copyArr = [...arr]; //값 복사해옴.
console.log(copyArr); //(3) ['a', 'b', 'c']
console.log(copyArr === arr); // false >> why? 복사본이라 서로가 다른 참조값을 가지고 있어서임.

//
// #2. 배열 병합
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread); // (5) [1, 2, 3, 4, 5] (배열 병함됨)

// 배열 병합의 기존 방식은?
// - concat() 이용 >> 두개 이상의 배열을 하나로 합칠 때 사용함.
const concatEx = a.concat(b);
console.log(concatEx);

//
// #3. 펼치기
//   -바로 분해하여 배열로 만듬
const c = [...'hello'];
console.log(c); // (5) ['h', 'e', 'l', 'l', 'o']  // 위 hello 텍스트를 다 분해해서 배열로 만듬.

// 펼치기 하는 기존 방식은?
// - .split() 이용해서 문자열을 나눴음.
// 기존방식 split ex.
const d = 'hello'.split(''); //split('') : 1개씩 분할
console.log(d); //(5) ['h', 'e', 'l', 'l', 'o']
/////////////////////////////////////////////////////////////
// 객체에서의 스프레드 연산자
//  #1. 객체 복사
const obj = {
    name: 'IU',
    gender: 'woman',
};
const copyObj = { ...obj };
console.log(copyObj); //{name: 'IU', gender: 'woman'}
console.log(copyObj === obj); //false >>> why? 복사본이라서 서로 다른 참조값을 가짐.

// #2. 객체 병합
const burger = {
    base: 'meat patty',
    company: '버거킹',
};
const whopper = {
    ...burger, //spread 연산자를 가지고 위의 정의내린 burger 에 대한 내용이 그대로 나옴.
    name: '와퍼', // 끝에 name: 와퍼 추가함.
};
console.log('burger >>> ', burger); //burger >>>  {base: 'meat patty', company: '버거킹'}
console.log('whopper >>> ', whopper); //whopper >>>  {base: 'meat patty', company: '버거킹', name: '와퍼'}

/////////////////////////////////////////////////////////////
// rest 파라미터 ?
//   - 함수가 여러 개의 인자를 받을 때, 나머지 인자들을 '배열'로 모아주는 역할.
//   - '마지막 인자' 로만 사용할 수 잇음.
//   - 함수에서 여러 rest 파라미터 사용은 불가. 단 한번만 사용 가능.

// 함수에서 사용할 경우 ??
const values = [10, 20, 30, 40, 50, 60];
function get(a, b, c, ...rest) {
    console.log(a, b, c); //10 20 30
    console.log('rest>>>', rest); //rest>>> (3) [40, 50, 60]  // 배열형태로 들어옴.
}
get(...values);

// --------- 객체
const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
};

//객체에서의 구조분해 할당.
const { flavor, ...abc } = icecream; // 구조분해 할당 해줌. 특히 flavor 만 선정/ 나머지는 abc로 배열묶음.
console.log(flavor); // choco
console.log(abc); // icecream 나머지였던 company, price 나옴.

// -------------배열
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number; // 배열일 때 구조분해 할당해줌.
console.log(one1, two1); // 1 2  // 그대로 하나씩 출력
console.log(rest2); // (6) [3, 4, 5, 6, 7, 8]  //나머지는 배열형태로 나옴.
/////////////////////////////////////////////////////////////

// spread 연산자 vs rest 연산자   - 차이 구분해보기
// spread - 함수 호출 시 (* 호출하는 함수의 파라미터에 사용)
function Details(name, age) {
    console.log(`Name: ${name}, Age:${age}`);
}
const details = ['IU', 30];

// spread 문법으로 배열의 개별 요소를 인자로 펼쳐서 전달함.
Details(...details); // details 를 인자로 펼쳐서 전달함. //Details 함수가 실행될 때 인자로 details사용. 따라서 결과값은 Name: IU, Age:30

// rest - 함수 정의 시 (* 호출받는 함수의 파라미터에 사용)
function Numbers(...numbers) {
    console.log(numbers); //(5) [1, 2, 3, 4, 5]
}
Numbers(1, 2, 3, 4, 5); // Numbers 라고 위에 만들어둔 함수에 매개변수로 1~5를 넣었다는 내용. >> 따라서 함수 실행할때 console.log에 기록됨. 해당 값 주석처리하면 위 함수 실행되지 않음.

/////////////////////////////////////////////////////////////
/**
 * spread 관련 >> 얕은 복사 vs 깊은 복사   (*JS 기술 면접 시 많이 나옴)
 *  - 객체나 배열과 같은 참조 타입 데이터를 처리할 때 데이터를 복사하는 두가지 주요 방식.
 *
 * 1. 얕은 복사 = Shallow copy
 *  - 복사 대상 객체의 '1단계 깊이' 까지만 새로운 데이터를 생성함. (=복사한 것도 독립된 객체임)
 *  - 그 안에 중첩된 (2단계 이상의) 객체나 배열은 '참조를 복사'하는 방식임.
 *  즉, 복사된 객체와 원복객체는 중첩된 데이터에 대해 같은 참조를 공유함.
 *
 * * 특징
 *  - 원본 객체의 최상위 속성을 수정해도 1단계의 복사본엔 영향을 미치지 않음.
 *  - 하지만 중첩된 데이터(ex. name:'damon')를 수정하면 원본과 복사본 모두에게 영향을 줌.(=수정본, 원본 모두 참조주소 같아서 모두 변경됨.)
 *  - 간단하고 빠르지만 중첩된 데이터에서 참조 문제가 일어날 수 있음.
 *
 * ** 1단계 복사 란?
 *  - 최상위 레벨의 속성 또는 요소만 복사하는 것임.  (*중첩된 상태는 한뎁스가 더 있는 것임. )
 *  - 따라서 1단계까지만 독립적임.
 *
 * * 얕은 복사 만드는 방법
 *  - 스프레드 연산자(...)가 제일 대중적임.
 * 예시는 아래에서 확인하기.
 */
const arrEx = [1, { name: 'Damon' }]; // 1단계는 1만 해당, damon 이라는 값을 가려면 name으로 한번 더 들어가야하므로 1단계가 아님.
const shallowCopy = [...arrEx]; // 얕은 복사임. why?
console.log(arrEx === shallowCopy); //false (값만 복사, 참조가 다름)

shallowCopy[0] = 2; // 인덱스0번은 1인데, 이 값을 2로 변경함. = 1단계 데이터 변경
console.log(arrEx[0]); // 값 = 1  // 1단계 데이터를 복사한 이후에도 원본에 영향이 없음. // 원본 '1'값이 그대로 노출

shallowCopy[1].name = 'Lora'; // 중첩 객체가 수정됨. -> 따라서 원본에 영향끼침.
console.log(arrEx[1]); // {name: 'Lora'} >> 값이 바뀜 >>> 참조를 공유하기 때문에 변경됨. (참조주소 같음. )

/////////////////////////////////////////////////////////////
/**
 *  2. 깊은 복사 Deep copy
 *  - 복사 대상 객체의 모든 데이터를 재귀적으로 완전히 새롭게 생성함
 *  - 원본과 복사본이 완전히 독립적인 상태
 * 즉, 중첩된 객체나 배열까지 모두 복사되기 때문에 복사본을 수정해도 원본에 아무 영향이 없음
 *
 * * 특징
 * - 모든 데이터가 독립적으로 복사됨. (중첩된 참조 포함하여)
 * - 따라서 복사본과 원본이 완전히 분리됨.
 * - 다만 성능적으로는 더 많은 비용이 들 수 있음. (= 시간, 메모리 등 더 소요)
 *
 * ** 깊은 복사를 만드는 방법
 * - JSON.parse(JSON.stringify(obj))  --> 제일 대중적인 방법
 *      - 간단하고 직관적임. but, undefinded와 같은 특수 데이터는 복사되지 않음.
 *
 * -- JSON.stringify(obj) => 객체를 JSON 형식의 문자열로 변환함.
 * -- JSON.parse(jsonString) => JSON  형식의 문자열을 다시 객체로 반환함.
 *---------> 위 2가지 과정을 함으로써, 
              문자열을 다시 객체로 파싱하면서 새로운 독립적인 객체가 생성됨
              또한 모든 객체가 새로운 메모리에 위치하여 할당되므로 '독립적 복사'임.
 */

const arrEx2 = [1, { name: 'Damon' }];
const deepCopy = JSON.parse(JSON.stringify(arrEx2)); //{name: 'Lora'}

deepCopy[1].name = 'Ari'; // 수정본의 인덱스1 이름 변경함.
console.log(arrEx2[1]); //  {name: 'Damon'}  >> 기존 원본 값 그대로임.

console.log('--------------');
// Qz 1) 다음 userInfor 객체에서 구조 분해 할당을 사용하여
// name과 age를 추출하고 나머지 속성은 restInfo 객체에 저장하세요.
const userInfo = {
    name: 'Lee',
    age: 25,
    job: 'Developer',
    city: 'Seoul',
};
const { name, age, ...restInfo } = userInfo;
console.log(name, age);
console.log(restInfo);

console.log('--------------');
// Qz 2) 아래 두 배열을 스프레드 연산자를 사용하여 병합한 후 구조분해 할당을 이용해
//   첫 번째와 두번째 숫자를 first와 second 변수에 저장하고  나머지 숫자들을 remaining 배열에 저장하세요.
const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];
const addNumbers = [...oddNumbers, ...evenNumbers];
console.log(addNumbers);
[first, second, ...remaining] = addNumbers;
console.log(first, second, remaining);
