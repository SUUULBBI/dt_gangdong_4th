// # generic
// -(사용배경:) 선언 할 때 타입을 지정하기 어려운 케이스가 존재함.
// - 데이터 타입을 외부에서 지정하고 생성 시점에 타입을 명시함.
//    --> 이로인해 '재사용성'과 '유연성 증가함
//    --> 타입을 변수처럼 사용가능
//  <T>형태로 주로 사용함 (관례)

//Ex1)
function numArrlen(arr: number[]): number {
    return arr.length;
}
console.log(numArrlen([1, 2, 3])); //3

//Ex2)
function strArrlen(arr: string[]): number {
    return arr.length;
}
console.log(strArrlen(['1', '2', '3', '4'])); //4

// 위의 Ex1, 2처럼 모든 타입에 대해 배열의 길이를 검사하는 함수를 타입마다 만들지 않기 위해서 제너릭을 사용함.

// #1. 제너릭 기본 사용법
// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만들어야함.
//  --> 여기에는 type만 들어올 수 있음.
function arrLen<T>(arr: T[]): number {
    return arr.length;
}
// T[]: T에 대응되는 자료형의 배열
console.log(arrLen<string>(['1', '2', '3', '4'])); // 4
console.log(arrLen<number>([1, 2, 3])); // 3
console.log(arrLen<string | number>(['원', 2, '쓰리', 4])); // 4

// Q) 아래 빨간 밑줄이 사라지도록 함수 완성해보기
function printSome<T>(x: T, y: T): void {
    console.log(x, y);
}
printSome<string>('hi', 'hello');
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [false, false]);

// #2. 두 개의 서로 다른 타입 매개변수 제너릭
// * 이것은 관례일 뿐!
// T : type
// U : usually
function printSome2<T, U>(x: T, y: U): void {
    console.log(x, y);
}
printSome2<string, number>('1', 1); // 1 1

// ########################################
// #3. interface 와 generic
// Ex1)
interface Phone<T> {
    company: string;
    createdAt: Date;
    option: T;
}
type iphoneOption = {
    color: string;
    storage: number;
};
const iphone20: Phone<iphoneOption> = {
    company: 'apple',
    createdAt: new Date('2025-01-22'),
    option: {
        color: 'black',
        storage: 256,
    },
};
console.log(iphone20);

// Ex2)
type galaxyOption = {
    color: string;
    isBuz: boolean;
};
const galazy25: Phone<galaxyOption> = {
    company: 'samsung',
    createdAt: new Date('2026-01-22'),
    option: {
        color: 'white',
        isBuz: true,
    },
};
console.log(galazy25);
// ########################################
//코딩온 실습1번문제
function arrElement<T>(Arr: T[], index: number) {
    return Arr[index];
}
console.log(arrElement<string>(['a'], 0));

//코딩온 실습2번문제
// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!
function arrElement2<T>(Arr: T[], index: number): T | boolean {
    if (index >= Arr.length) {
        return false;
    }
    return Arr[index];
}
console.log(arrElement2<string>(['a'], 2)); // false
