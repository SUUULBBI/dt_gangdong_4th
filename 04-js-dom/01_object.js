// 변수 or 함수 매개변수가 전달 될 때.
// 값 또는 참조가 어떻게 전달되는지? 에 대해 배워보자.

//#1. pass by value (= 값에 의한 전달)
/**
 *  - 원시 타입 (primitive type)은 값이 복사되어 전달됨.
 *  - 함수 내에서 값을 변경하더라도 호출한 원본 변수에는 영향을 미치지 않는다.
 *    ex) 아래내용(num2는 여전히 이전의 1값을 유지함. = 이는, Num2가 num의 복사본이기 때문임.)
 *    ex)
 */

let num = 1;
let num2 = num; // =num2는 num의 값을 복사함. (값의 복사가 일어남)
// 두 변수는 메모리에서 별도의 공간에 저장됨 . => 서로 독립적으로 존재하며 저장되어 있다는 것을 뜻함. (값 복사만 한 것임)
console.log(`num: ${num}, num2: ${num2}`);
console.log(num === num2); // true값나옴.  (===: 엄격한 동등연산)

num = 5; // 1에서 5로 재할당했음.
console.log(`num: ${num}, num2: ${num2}`); //콘솔 결과값 = num: 5, num2: 1
console.log(num === num2); // num2는 여전히 이전의 1값을 유지함. = 이는, Num2가 num의 복사본이기 때문임.

console.log('-------------');

function changeValue(X) {
    // X = 매개변수
    X = 10; // 매개변수에 10이라는 값을 할당함.
    console.log('x >', X);
}
changeValue(num); // x>10
console.log('num >>>', num); // 5 //num은 복사본이라 변경된값이 적용되지 않음.
// 위 상황의 풀이 : 함수로 전달될때 변수의 값이 복사되어 함수의 매개변수로 전달.
// >> 따라서 함수 내에서 매개변수의 값을 변경하더라도 원본 변수의 값을 변하지 않음.
// >> why? 함수 내에서 사용되는 변수는 그 함수 스코프 내에서만 유효한 '지역변수'이기 때문임.

//
/////////////////////////////////////////////////////////////////////////////////
// #2. pass by reference ( 참조에 의한 전달 ) // 참조=주소를 가리킴
// - 객체나 배열 같은 참조 타입이 전달될 때 사용됨.
// - 변수의 메모리 위치(참조)가 전달되므로 함수 내에서 요소를 변경하면 원본 변수도 변경됨.

const obj = { one: 1, two: 2 };
const obj2 = obj; // = 동일한 객체의 참조를 갖게됨.
//= obj와 obj2는 같은 메모리 주소를 참조하므로 동일한 객체를 가리킴.
console.log(obj, obj2); // {one: 1, two: 2}one: 1two: 2[[Prototype]]: Object
console.log(obj === obj2); // true
/////////////
console.log(`obj: ${obj}, obj2: ${obj2}`); //객체 자체만 호출하고 싶을 떄는 이 방법처럼 해야함.
console.log(`obj: ${JSON.stringify(obj)}, obj2: ${JSON.stringify(obj2)}`); // 객체전체를 예쁘게 쓰기 좋은 방식인 JSON.stringify
// `${}` 백틱사용하는 문자열템플릿에서는 객체가 문자열로 변환되어서 출력해줌.
//  따라서 객체를 문자열 템플릿에서 읽기 좋게 출력하려면? >> JSON.stringify 란느 메소드를 사용하면 됨.
// 가볍게 알아본다면 ? JSON.stringify 는 "JS 객체 또는 값"을 JSON 형식의 문자열로 변환하는 메서드임.
// 따라서 JSON은 데이터를 표현하는 (경량의)데이터 형식이며, 키와 값 쌍으로 표현하는데 주로 사용함.
// - 주로 데이터를 네트워크 요청이나 파일 저장에 적합한 문자열로 변환해줌. / ex)서버로 보낼 떄 많이 사용하게 됨.

obj.five = 5; // 추가 객체 및 값을 할당함. // {one: 1, two: 2, five: 5}
console.log(obj, obj2); //{one: 1, two: 2, five: 5}, {one: 1, two: 2, five: 5}-
//obj와 obj2는 현재 참조값(address주소)와 데이터 모두 같은 값이다.

console.log('-----------------');
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4); //보여지는 값은 같아 보임.
console.log(obj3 === obj4); //false , why?? 참조하는 주소값이 서로 다르기 때문에 서로 다른 객체임. // 객체는 같은 주소를 같고 있어야지 ===완전같다고 봄. 값만 같아서는 다른 값이라고 봄.

// obj3과 obj4는 ㅎㄴ재 데이터가 같지만 서로 다른 별도의 객체임.
// 즉, 참조값(address 주소) 가 다름.

obj3.five = 5; // obj3에서만 추가 객체가 들어감.
console.log(obj3, obj4); // 따라서 obj3, obj4는 다름.
