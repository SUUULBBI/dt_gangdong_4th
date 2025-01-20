// typescript basic type
// 타입 지정 [명시적]
let a: number = 1;
a = 2;
console.log('a >>>> ', a);
let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;
console.log(b, c, d, e);

// 타입  추론 [암묵적]
// TypeScript는 변수의 초기 값을 기반으로 변수의 타입을 자동으로 추론합니다
// 이를 암묵적 타입 추론이라고 합니다
let aa = 1; // aa의 타입은 number로 추론
let bb = 'hi';
let cc = false;
let dd;
let ee = null;
console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);
console.log(typeof dd);
console.log(typeof ee);

////////////////////////////////////////////////////////////
// #1. [배열]
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ['a', 'b', 'c'] // type error
// #2. [배열 원소가 여러 타입 일 경우]
let arr1: (number | boolean | string)[] = [1, true, 'string'];
// number,boolean, string 값이 들어올 수 있다 , 배열 내에서 순서는 상관없음! // 숫자/boolean / string 순서 상관없음
/**
 * '|' 연산자 => *유니온 타입*을 정의할 때 사용
 * - 하나의 값이 여러 타입 중 하나일 수 있음을 명시하는 타입 시스템의 기능
 */

// #2-1. [유니온 타입과 제네릭 배열 타입의 조합] ====>>> 제네릭 배우고 나서!

// #3. [어떤 자료형이든 상관 없는 배열]
let arr3: any[] = [1, 2, 3, 'wow', null, true];

////////////////////////////////////////////////
// [ 객체 (object)]
let obj1: object = {
    name: 'damon',
    grade: 1,
};
