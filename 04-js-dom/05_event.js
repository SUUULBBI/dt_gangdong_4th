// js event (이벤트)
// 어떤 사건을 의미함.
//   ㄴ사건 ex) 버튼클릭, 웹페이지 로드, 키가 눌렸을 때 등..

// 이벤트에 "함수"등록하는 방법 2가지 있음.
//  - 1. "HTML"상에서 onXXXX 속성으로 등록 (ex. onclick)
//  - 2. JS에서 addEventListener 를 사용해서 등록함.

// #1. onXXX 속성
function clickH1() {
    alert('제목클릭, 함수이용');
}

// #2. addEventListener
/**
 * 기본 구조
 * element.addEventListener(event, function)
 *
 * event : 처리할 이벤트의 이름 (ex. click, key..)
 * function : 이벤트 발생시 실행할 함수.
 *  - 여러개의 이벤트 리스너 등록 가능함.
 *  -
 */
const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.getElementById('container');

///// 1개의 요소에 여러개의 이벤트 추가
btn1.addEventListener('click', function () {
    alert('버튼 1을 클릭하셨습니다.');
});
btn1.addEventListener('mouseover', function () {
    btn1.style.backgroundColor = 'aqua';
}); // 마우스가 요소 위에 있을 때
btn1.addEventListener('mouseout', function () {
    btn1.style.backgroundColor = 'black';
}); // 마우스가 요소를 벗어남

//

// 클릭이벤트 안에 화살표함수 사용하는 방법. 및 여러개 동작 동시 추가 가능.
btn2.addEventListener('click', () => {
    //클릭할때마다 제일 마지막에 hi라는 핑크블록이 계속 생성됨.
    const div = document.createElement('div');
    div.style.backgroundColor = 'pink';
    div.innerHTML = 'Hi~!';
    container.append(div);
});

///// 함수명을 매개변수로 받아서 이벤트 실행함.
btn3.addEventListener('click', changeColor);

function changeColor() {
    const divs = document.querySelectorAll('#container div');
    console.log(divs);
    //해당 요소들 전부에게 css변화를 적용시키기 위해 for..of 반복 사용
    for (let div of divs) {
        div.style.backgroundColor = 'skyblue';
    }
}

//// this 사용법
// * this 키워드
//   - 이벤트가 발생한 DOM요소를 가르킴.
//   - 화살표 함수에서는 동작 방식이 다르게 작용될 수 있음.

// this 사용시 유의점
//   ㄴ 일반함수 : 'this'는 이벤트를 발생시킨 DOM요소를 가르킴.
//   ㄴ 화살표 함수: 'this'는 상위 스코프를 가져옴( 화살표에서 this 쓰면 window 가르킴 = 따라서 undefined 나올 수 있음)
btn4.addEventListener('click', changeBtnColr);
function changeBtnColr() {
    console.log(this); //this = 이것, 자기자신 = 여기서는 btn4임.
    console.log(this.parentNode); //this 활용해서 부모,조상에서 접근 가능.
    this.style.backgroundColor = 'yellow';
}

///////////////////////////////////////////////////////////

// key event
// 이벤트 객체 =  관례적으로 'e' 라고 많이 표현함.
// - DOM 이벤트가 발생할 때 브라우저가 자동으로 생성하는 객체.
// - 브라우저는 발생한 이벤트에 대한 다양한 정보를 담은 "이벤트 객체"(event object)를 이벤트리스너에 전달함.
// ex. mounsedown 이벤트 발생 => 이벤트 객체는 (마우스 좌표, 버튼 번호)와 같은 정보를 가지게 됨.
// ex. keydown 이벤트 발생 => 이벤트 객체는 (키코드값, 어떤 키가 눌렸는지에 대한 정보)이러한 정보를 가지게 됨.
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', function (event) {
    //event라는 매개변수를 함수에 넣음.
    // event객체는 이벤트에 대한 다양한 정보를 포함함.
    console.log(event); // 해당 버튼을 클릭하면 여러 이벤트 내용을 담고 있는 것들을 모두 보여줌. (ex. click me 버튼 클릭시 콘솔창에 PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
});

input.addEventListener('keydown', function (e) {
    //keydown : 키보드를 통해 값이 작성된다면 이벤트 발생됨.
    //e = event 객체
    console.log(e); // 인풋박스에 작성하면 콘솔차에 KeyboardEvent {isTrusted: true, key: 'd', code: 'KeyD', location: 0, ctrlKey: false, …} 라고 나옴.
    console.log(e.code); // = KeyH  >>> e.code : 눌려진 키의 고요 키값임.
    console.log(e.key); // = g >>> e.key : 눌려진 인풋의 입력값이 나옴.
    console.log(e.target); // <input type="text"> >>> e.target : 이벤트가 발생한 대상 요소를 참조해줌.

    if (e.code === 'ArrowUp') {
        //ArrowUp : 키보드 화살표 위로
        console.log('⬆️');
    } else if (e.code === 'ArrowDown') {
        //ArrowDown : 키보드 화살표 아래로
        console.log('⬇️');
    } else {
        console.log('others');
    }
});

// 폼 이벤트
const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos');

todoForm.addEventListener('submit', (e) => {
    console.log('submit');
    //submit : 폼에 대한 내용을 제출함.
    // ㄴ 제출하는 순간 '새로고침'이 일어남.
    console.log('submit');
    e.preventDefault(); //  이 명령어는 폼 submit 데이터를 보낸 이후 바로 새로고침 되는 것을 의도적으로 막은 것. =강제 submit 막는 내용.

    const todoInput = document.querySelector('input[name="todo"]');
    // console.log(todoInput.value); // 인풋의 입력값이 콘솔창에 노출됨.
    const newTodo = todoInput.value.trim(); // .trim() : 입력값의 양쪽 빈값 없애기.
    if (newTodo !== '') {
        const newTodoLi = document.createElement('li'); // <li></li>
        newTodoLi.append(newTodo); // <li>input 입력값 = newTodo </li>
        todos.append(newTodoLi);
    }

    //input 창 초기화 추가
    todoInput.value = '';
});

/**
 * change
 *   : input 요소에 변경이 일어나고 다른 요소를 클릭해서
 * input 이 포커스 아웃(blur) 처리 되었을 때 일어나는 이벤트
 */

const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', function (e) {
    console.log('change!!'); //인풋입력창에서 벗어나면 해당 글자가 콘솔창에 나옴.
    console.log(e.target.value); // 인풋입력창에서 벗어나면 인풋입력창에 입력값이 노출됨.
});

/**
 * input
 * : input에 값이 입력될때마다 이벤트 발생
 */

chgInput.addEventListener('input', function () {
    console.log('입력값 발생');
    // console.log(this.value); // 입력할때마다 모든 내용이 콘솔창에 찎힘.

    const div = document.querySelector('.intro');
    div.textContent = this.value; // input창에 입력값이 그대로 그 아래에 똑같이 보여짐.
});
