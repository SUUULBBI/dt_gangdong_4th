// TS 에서의 함수 선언
// #1. 기본 함수 선언
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 3));
// (a: number, b: number): number -> 두 매개변수 'a', 'b' 모두 number type 임 -> 반환값도 'number' type

// #2. 선택적 매개변수
// - 선택적 매개변수 ('?')는 매개변수 중 '맨 뒤' 에 있어야 함.
function print(a: number, b: number, c?: number): void {
    console.log(a);
    console.log(b);
    console.log(c);
}
// #2-2. 함수의 리턴값이 없는 함수 = void
//     ㄴ return 값이 없거나 함수가 단순히 작업을 수행만 할 때 사용
print(2, 4, 6); // 위의 정의한 함수 실행함
print(2, 4); // c는 선택사항이라 생략하니깐 undefined로 터미널에 출력됨

// #3. 기본값 매개변수
// - 매개변수에 기본 값 할당 가능
// - 매개변수 입력을 안받으면 기본 값 출력
function print2(a: number, b: number, c = 100): void {
    console.log('----------');
    console.log(a);
    console.log(b);
    console.log(c);
}
print2(1, 3, 5); // 1,3,5
print2(7, 9); // 7, 9, 100 (>> c의 100 기본값이 적용됨)

// #4. 매개변수가 없는 함수
function sayHello(): void {
    console.log('Hello');
}
sayHello(); // Hello 출력됨

// #5. void가 아닌 자료형을 리턴하는 함수
// 5-1.
function sayHello2(): string {
    return 'Hello';
}
console.log(sayHello2()); // Hello

// 5-2.
function concatString(x: string, y: string): string {
    return x + y;
}
console.log(concatString('안녕', ' 하세요')); // 안녕 하세요

// 5-3.
function circleArea(r: number): number {
    return r * r * Math.PI; //원의넓이 공식
}
console.log(circleArea(5));

// #6. 화살표 함수
const squareArea = (x: number, y: number): number => {
    return x + y;
};
console.log(squareArea(3, 5));

// #7. 화살표 함수 & return 구문 생략했을 때
const triangleArea = (w: string, h: string): number =>
    (parseInt(w, 10) * parseInt(h, 10)) / 2; // parseInt(,10) -> 10진수 숫자로 변환해줌
console.log('triangleArea>>', triangleArea('3', '4')); //string이라고 해서 '' 안에 숫자 넣어준 것임.

// #8. interface 정의시 함수 타입 표현
interface Great {
    name: string;
    hi(): string;
    bye(a: number): string;
}
const sesac: Great = {
    name: 'sesac',
    hi() {
        return '여기는' + this.name + '강동캠퍼스';
    },
    bye(a: number) {
        return `작별 인사를 ${a} 번 했습니다.`;
    },
};
console.log(sesac); //{ name: 'sesac', hi: [Function: hi], bye: [Function: bye] }
console.log(sesac.bye(5)); //작별 인사를 5 번 했습니다.
console.log(sesac.hi()); // 여기는sesac강동캠퍼스
// aotjem sodptj 소ㅑㄴ를 사용하여 객체의 다른 속성에 접근할 수 있음.
//   ㄴ 따라서 this.name => 현재 객체 sesac의 name속성을 참조했음.

// #9.never (->의미론적 타입) (*현업에서 잘 사용하지 않음 -> 개발자끼리 오류, 예외처리 할때 명시하기 위해서 쓰기도함. / 실행자체를 막지는 못함)
// - 함수의 긑에 절대 도달하지 않는 경우
// - 무한 루프나 예외처리가 필요한 경우 never 타입으로 명시를 해서 실행하지 못하게 작성할 때 사용함.
//  function goingOn(): never {
//     while(true) {
//      console.log('go!');
//      }
//  }
// goingOn(); // 무한으로 go! 가 터미널에 찍히게 됨

// #10. 오버라이딩 vs 오버로딩
// 10-1. ** 오버라이딩?
// - 클래스에서 부모 클래스의 메서드를 자식 클래스에서 '재정의'하는 개념
// - 메서드의 이름과 '매개변수 목록이 동일'하며, 자식 클래스에서 새로운 구현을 제공하여 부모클래스의 동작을 변경해줌.
class Animal {
    speak(): void {
        console.log('Animal makes a sound');
    }
}
class Dog extends Animal {
    // 오버라이딩처리 ->
    speak(): void {
        super.speak(); // = 부모 클래스의 speak 메서드를 효출하겠다.
        console.log('Dog barks');
    }
}
const myDog = new Dog();
myDog.speak(); //super.spea() = Animal makes a sound  //  Dog barks

// 10-2.  ** 오버로딩
// - 동일한 메서드 이름을 사용하지만 '서로 다른 매개변수 목록' 을 가지는 여러 함수 정의를 제공하는 것.
// - 같은 기능을 여러 방법으로 수행해야 할 때 사용함.
// Ex1)
function greet(person: string): string;
function greet(person: string, age: number): string;
// 함수 구현하기
function greet(person: string, age?: number): string {
    if (age !== undefined) {
        // 조건: age가 있다면?
        return `Hello ${person}, you are ${age} years old`;
    } else {
        return `Hello ${person}`;
    }
}
console.log(greet('Bob', 30));
console.log(greet('Una'));

// Ex2)
function sum(a: string, b: string): string; //선언부
function sum(a: number, b: number): number; //선언부
function sum(a: any, b: any): any {
    // 구현부
    return a + b;
}
console.log(sum('가', '나'));
console.log(sum(10, 20));
