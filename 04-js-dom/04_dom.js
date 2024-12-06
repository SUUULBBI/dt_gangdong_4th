// 요소 가져온 후 동작하기! - 우선 요소 가져오기
//innertext : 눈에 보여지는 값에 대해서만 동작함. & css style태그넣은 부분 까지도 그냥 텍스트로 인식하고 보여줌.
// 반면 textContent 는 눈에 보여지지 않는 display=none 이라고 할때 해당 텍스트까지도 같이 보여지고 동작함.
// 속성값을 가져왔을 때, 활용법 : ex) if문에서 속성값같을때 ~~~ㅇㅇ해줘.

// 요소 가져오기!
const div1 = document.getElementById('div1');
console.log(div1);

// #1. 태그 내부 내용 변경
// innerHTML : 태그 사용 가능
// innerText, textContent : 태그가 문자(기호)로 그대로 노출.

console.log('innerText >>>>> ', div1.innerText); // How do yo do
console.log('textContent >>>>> ', div1.textContent); // How do yo do today?

// 1. innerHTML
div1.innerHTML = '여기는 <b>첫번째</b> 태그!';
console.log('innerHTML >>>> ', div1);

// 2. innerText 와 textContent
// # 공통점 (= 쓰기)
// - 둘 모두 텍스트를 추가한다.

div1.innerText = '여기는 <b>두번째</b> 태그';
console.log('innerText >>>> ', div1);

div1.textContent = '여기는 <b>세번째</b> 태그';
console.log('textContent >>>> ', div1);

// # 차이점 (= 읽기)
// innerText = HTML 태그를 해석하지 x, 보여지는 텍스트만 그대로
// textContent = HTML 태그를 포함하여 처리.

// #2. 속성(attribute) 변경
// setAttribute(속성명, 변경할 속성 값) => 속성 값을 '설정'
const naver = document.getElementById('naver');
naver.setAttribute('href', 'https://www.google.com');

const owl = document.getElementById('owl');
owl.setAttribute('src', '../02-css/image/Owl_image.png');

// getAttribute(속성명) => 속성 값 '얻기'
console.log(document.getElementById('owl').getAttribute('src')); // ../02-css/image/Owl_image.png

// +) 참고1. 속성 접근 (.) 연산자로도 가능.
console.log(document.getElementById('owl').id); // owl

// +) 참고2. 연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#'; // 내부 앵커 / 현재 페이지의 상단으로 스크롤
console.log(document.getElementById('naver').href); // http://127.0.0.1:5502/04-js-dom/04_dom.html#

// #3. CSS 지정.
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li'); // 유사 배열 (NodeList)
console.log(list); // [li, li#hoon, li, li, li]

// 1) style 속성
// - DOM 요소의 인라인 스타일을 지정할 수 있도록 제공되는 속성.
// - style.XXX (XXX: camelCase)
list[0].style.backgroundColor = 'purple'; //  background-color: ;
list[0].style.fontSize = '20px';
list[0].style.color = 'white';

// 반복문 사용해서 적용 (list 배열에 포함된 모든 요소)
for (let li of list) {
    li.style.backgroundColor = 'red';
    li.style.fontSize = '40px';
    li.style.color = 'yellow';
}

// 2) classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains : 있는지 없는지 확인 (T / F)
// xxx.classList.toggle : 있으면 제거, 없으면 추가

// h1.classList.add('add-h1');
// h1.classList.remove('add-h1');
console.log(h1.classList.contains('add-h1')); // false
h1.classList.toggle('add-h1');

console.log('-------------------------');
///////////////////////////////////////

// #4. 요소 찾기 (다른 노드에 접근하기)
// 계층 구조 ( 형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const hoon = document.querySelector('#hoon');

// 1. 자식요소 (자손찾기도 가능)
console.log(friends.children); // 유사 배열임, 자식 모두를 선택함.
console.log(friends.children[0]); //인덱스로 접근 가능함.

//2. 부모요소 (조상찾기도 가능)
console.log(hoon.parentNode);
console.log(hoon.parentNode.parentNode); // 부모부모를 타고 가서 'body'태그 나옴 // 결국 관계상 '조상'

// 3. 형제요소
console.log(hoon.previousElementSibling); // 훈이의 이전 요소 찾기 > so, 짱구 나옴
console.log(hoon.nextElementSibling); //훈이 다음 요소 찾기 > so, 철수 나옴
console.log(hoon.nextElementSibling.nextElementSibling); // 훈이의 다음다음 찾기 > 맹구 나옴 // 결국 관계상 '형형제'

console.log('-------------------------');
///////////////////////////////////////

// #5. 새로운 요소 생성
//
const container = document.querySelector('.container');
const p = document.createElement('p');
console.log(p); //위에 생성한 p태그 생성됐는지 확인함. // js로 <p></p> 태그 를 만들었음.

p.innerText = '새로 추가된 p 요소 입니다. '; // 쓰자마자 위의 console에 바로 적용됨.
p.style.fontWeight = 700;
p.style.backgroundColor = 'skyblue';
// <p style = "fontWeight: 700", "backgroundColor: skyblue">새로 추가된 p 요소 입니다.</p>
console.log(p);

// #6. 요소 추가
// x.append(y) : x 요소의 맨 마지막 자식 요소로 y 요소가 추가. ==> 여러개 추가를 한꺼번에 가능 (최신버전이라)
// x.appendChild(y) : x 요소의 맨 마지막 자식 요소로 y 요소가 추가. ==> 1개만 추가 가능 (과거버전이라)

div1.appendChild(p); // div1을

const p2 = document.createElement('p');
const p3 = document.createElement('p');

p2.innerHTML = 'p2';
p3.innerHTML = 'p3';
console.log(p2);

p2.classList.add('p-2');
p3.classList.add('p-3');

container.append(p2, p3); // 여러개 추가를 한번에 가능함. p2와 p3 를 동시에 화면에 추가해버렸음.

////////////////////////////////////////////////
// x.prepend(y) : x요소의 맨 처음 자식으로 y 요소가 추가됨.
// x.before(y) : x요소의 바로 이전 형제 요소로 y요소가 추가됨.
// x.after(y) : x요소의 바로 다음 형제 요소로 y요소가 추가됨.
const li1 = document.createElement('li');
li1.textContent = '흰둥이';
friends.prepend(li1);

const li0 = document.createElement('li');
li0.innerHTML = '<b>짱구 친구들을 소개합니다.</b>';
friends.prepend(li0);

hoon.before(li1); // 이렇게 하니깐 흰둥이 위치가 훈이 위로 변경됨
hoon.after(li1); // 흰둥이 위치가 다시 훈이 아래로 변경됨. ** 마지막 것만 적용됨.

///////////////////////////////////////////
// #7. 요소 삭제
// x.remove() :  x 요소 자체를 삭제
// x.removeChil(y) : x의 자식요소인 y가 삭제
// JS는 느슨한 언어여서 메모리에서 즉시 삭제되지 않고 참조를 유지하면 재활용이 가능함. (ex. 아래와 같이 firstLi 선언 후 삭제)

const firstLi = document.querySelector('li');
console.log(firstLi);

const ul = firstLi.parentNode;
console.log('ul>>>', ul);

// ul.remove(); //ul태그 자체가 삭제됨

// 참조를 유지하면서 재활용한 방법 👇🏻
firstLi.remove(); // firstLi에 해당되는 것만 삭제됨. (메모리까지 삭제임.)
div1.appendChild(firstLi); // but, JS특성상 메모리를 바로 삭제하지는 않는다고 함. (느슨한 언어여서)

//ul.removeChild(firstLi); // ul내 ㅣi 중 firstLi에 해당되는 것만 삭제됨.
//div1.appendChild(firstLi); //방금전 잘라낸 것을 다시 div1에 붙혔음.
