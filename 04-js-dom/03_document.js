console.log(document); // 전역개체, html요소를 나타냄
console.log(document.childNodes); // [<!DOCTYPE html>, html] // 키+값 = 객체
console.log('----------');
console.log(document.childNodes[1]); //html
console.log(document.childNodes[1].childNodes); //html의 자식요소들을 보여줌.
console.log('----------');
console.log(document.childNodes[1].childNodes[2]); // <body></body>
console.log(document.childNodes[1].childNodes[2].childNodes);
//위와같이 접근하면 굉장히 번거롭게 쭉 써서 요소요소를 접근해야하는 것임,,, 따라서 아래와 같이 메서드를 써서 편하게 사용하자.
////////////////////////////////////////////////
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
// domain에 취소선 과 같이 취소선이 생기는 이유? 해당 속성의 사용을 권장하지 않거나 더이상 지원되지 않은 방식이라는 가능성을 나타냄.
//  - 특히 최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양한다.

console.log('----------');
// document 객체를 이용한 Html
// #1. 요소선택
// 1.getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName  HTMLCollection ((모두 가져와.))
console.log(document.getElementsByClassName('pink')); //HTMLCollection(4)
console.log(document.getElementsByClassName('pink')[2]); //<div class="pink">3</div>

// 3. getElementsByTagName  HTMLCollection
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('h1'));

// 4. getElementsByName  NodeList
console.log(document.getElementsByName('id')); //NodeList(2) [input, input]

// 5. querySelector (CSS selector)  NodeList
// 처음 발견한 하나만 가지고 옴!!!!
console.log(document.querySelector('.pink')); //<div class="pink">1</div>
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name=id]'));

console.log('--------------------------------');
// 6. querySelectorAll (CSS selector)  NodeList
// 선택자에 해당하는 모든 요소를 가지고 옴!!!!
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name=id]'));

console.log(document.querySelectorAll('div')[4]);
// getElementBy~ = querySelector 비슷하게 가져옴. 단, queryselector가 더 범용적으로 사용 가능해서 더 잘 사용됨.

console.log(document.querySelectorAll('div')[0]);
console.log(document.querySelectorAll('div')[1]);
console.log(document.querySelectorAll('div')[2]);
console.log(document.querySelectorAll('div')[3]);
console.log(document.querySelectorAll('div')[4]);

console.log('--------------------------------');

// * 유사 배열 (HTMLCollection, NodeList)
// - [] 식으로 생긴 배열과 비슷하지만 완전히 배열은 아닌 객체, 유사배열이라고도 함, 배열처럼 사용 가능함.
// -HTML 문서 내 요소들을 그룹으로 묶어 제공하는 컬렉션임.
// - 배열처럼 index와 length를 가짐.
// but 배열과 달리 사용 가능한 메서드가 제한적임. (내장매서드가 별로 없음)

// #1. HTMLCollection
//  -HTML 문서에서 특정 조건에 맞는 요소들을 실시간으로 컬렉션 형태로 반환.
//  - 실시간 : 문서 내용이 변경되면 HTMLCollection 도 즉시 업데이트함.
//  - HTML 요소 전용 : 컬렉션에 포함된 항목은 항상 html 요소임.(요소만임.)
//   - 배열은 아님 : 배열처럼 인덱스로 접근 가능하나 배열 메서드 (forEach, map 등) 사용 불가함.

// 반복문으로 여러개 열고 싶을때, for문 사용하기.
console.log(document.getElementsByClassName('pink'));
const pinkElements = document.getElementsByClassName('pink'); // 너무 길어서 const fh ekarl
for (let i = 0; i < pinkElements.length; i++) {
    console.log('pinkElements >>> ', pinkElements[i]); //
}

// 추가 설명 건 ( 몰라도 되지만 알면 좋겠지~)
// HTMLCollection -> forEach() 메서드 사용못함.
// 따라서 반복해야한다면 -> Array 변경한 Array.from() 메서드를 사용하면 됨.

/**
 *  Array.from() 메서드
 *   - ES6 에서 도입된 JS메서드임.
 *   - "유사 배열 객체"나 "반복 가능한 객체"를 실제배열(=유사배열이 아닌, 진짜 배열)로 변환하는데 사용함.
 *   - 또한 배열을 생성하면서 특정 로직을 적용할 수도 있음.
 * 
 * 
 * 구문
 * Array.from(arrayLike, mapFunction, thisArg)
 *  - arrayLike: 배열로 변환할 "유사 배열 객체" 나 "반복 가능한 객체"  ==> 필수값임
    - mapfunction (선택사항) : 새 배열의 각 요소에 대해 실행할 매핑 함수.
    - thisArg(선택사항) : mapFuntion을 실행할 때 사용할 this 값임.
*/
//  1) 유사 배열 객체를 배열로 변환 하기.
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrayLike);
console.log('array : ', array);

// 2) 문자열을 배열로 변환
const str = 'hello';
const strArray = Array.from(str);
console.log('strArray : ', strArray);

// 3) 숫자 범위 배열 생성
const range = Array.from({ length: 5 }, (_, i) => i + 1);
// 언더바_ : 사용하지 않는 값임을 표기함. //관습적인 표현.
//    ㄴ 따라서 단순히 인덱스를 이용해서 배열을 생성한다는 의도임.
// 따라서 위의 length 길이 5니깐, 초기값 _ 없으므로 >> 0부터 시작한 0,1,2,3,4 인덱스값인데, 반복으로 i+1이니깐, 요소마다 +1되어서 결과값은 1,2,3,4,5 를 만듬
console.log('range: ', range);

// 4) HTMLCollection을 배열로 변환 -> 배열로 변환되었기 때문에 forEach문 사용가능하게 된 것임.
console.log(document.getElementsByTagName('div'));
const htmlcollection = document.getElementsByTagName('div');
const array2 = Array.from(htmlcollection);
console.log('array2 : ', array2);

array2.forEach((elem) => console.log(elem));

///////////////////////////////////////////////////////////////////////
console.log('--------------------------------');
//#2. NodeList
// - DOM에서 노드의 그룹을 반환함. (텍스트 노드, 주석노드 모두 가능)
// - 정적 : getElementsByName, queryselectorAll로 생성한것은 '정적'요소 특징을 가짐. (재랜더링 or 업데이트 해줘야만 변경되고 실시간처럼 바뀌지는 않는다는 소리임.)
// - 실시간 : childNodes 로 생성한 것은 실시간임. (이말은 문서내용이 변경되면 htmlcollection이 같이 변경됨.)

// NodeList = > forEach() 반복문 사용 가능함.
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// 실습문제 !!! -- for.. of 반복문 가능..
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
    // pink: 단수 / pinks : 복수  ---> 복수에서 하나씩가져와서 단수로 나타냄..
    console.log(pink);
}

// 모든 요소(or 텍스트) 는 모든 노드가 됨. != 모든 노드는 모든 요소가 아님. (왜냐하면 요소말고 텍스트가 될 수 도 있음...)
// 노드 안에 요소 포함. 더 큰 범위가 노드임.
