/**
 * jQuery 이벤트 메소드 기본 구조
 *
 * $(선택자).이벤트메소드(핸들러);
 *
 * 선택자 : 이벤트 바인딩할 대상 요소 선택임.
 * 이벤트 메소드 : 실행될 이벤트 종류를 지정해주기.
 * 핸들러 : 이벤트가 발생했을 때 실행될 함수.
 *
 * - 이벤트를 지정된 선택자에 직접 바인딩함.
 * - 간편하고 직관적임.
 *
 * * 단점
 *   - 동적 요소에 대한 이벤트 바인딩(연결)이 불가능함. (동적 요소 ex. 움직이는 요소, 페이지 렌더링 이후 js로 인해 생성/삭제되는 요소들)
 *   ex) 페이지 로드된 이후 동적으로 버튼이 새로 추가가 되었을 때, 추가된 버튼에는 이벤트가 먹지 않음.
 */

/**
 * .on() 메소드 기본 구조 알아보기
 * $(선택자).on(이벤트, 자식선택자, 핸들러)
 *
 * 이벤트 : 이벤트 종류
 * 자식선택자(옵션 선택값) : 이벤트를 위임할 자식 요소를 말함.
 * 핸들러 : 이벤트가 발생했을 때 실행될 함수.
 *
 * 특징
 * - 하나의 메소드로 모든 이벤트를 처리할 수 있음.
 * - 더 강력한 이벤트 바인딩 메소드임
 * - 동적으로 생성된 요소에도 이벤트 바인딩을 할 수 있음.
 */

// #1. load event
// in js
document.addEventListener('DOMContentLoaded', function () {
    console.log('문서의 dom 트리가 완성되면 실해오디는 이벤트(js');
});

// in jQuery
$(document).ready(function () {
    console.log('ready - 문서 dom 트리가 완성되면 실행되는 이벤트 (jQuery)');
});

//.ready() 단축 속성.
$(function () {
    // 달러형식 축약형임.
    console.log('안녕');
});
/**  - $(document).ready()
 *  - jQuery에서 제공하는 문서 준비 이벤트임.
 * - 브라우저가 Dom 트리를 모두 생성한 후에 실행함.
 * - 즉, DOM이 준비되었을 때 JS코드가 실행되도록 보장해줌.
 */

//////////////////////////////////////////////////////
/**
 * #2. Mouse Event
 * in jquery
 * QZ) 'p-msg' 라는 클래스를 가진 요소를 선택하고 'click 이벤트를 사용하고
 * color -> red로 바꿔보기
 */

//기본버전 풀이법
$('.p-msg').click(function () {
    // p-msg 클릭했을 때
    $('.p-msg').css('color', 'red'); // p-msg의 컬러를 바꿔줘.
});

// 기본버전 + this 사용법. (jQuery 메소드를 사용하려면 $(this)로 변환해야함.)
// Qz) num클래스 가진 요소를 선택하고 click 이벤트를 사용 , color => blue글자색 변경
$('.num').click(function () {
    $(this).css('color', 'blue');
});

// on 버전
$('.num').on('click', function () {
    $(this).css('color', 'pink');
});

// click in js 버전으로 만들어보기
// > Qz) 'num' 클래스를 가진 요소를 선택하고 click 이벤트를 사용하기
// color 자유롭게 지정 변경
// 각각의 요소에 접근하기 위해선 반복문 사용하기
const nums = document.querySelectorAll('.num');
console.log(nums); //NodeList(4) [li.num, li.num, li.num, li.num]

for (let num of nums) {
    console.log('num >>> ', num);
    num.addEventListener('click', function (e) {
        //e.target 쓸때는 (e) 꼭 쓰기
        // 1. this 사용 방법
        //  console.log('this >>> ', this);
        // this.style.color = 'green';

        //2. this 미사용하고 , e 객체 사용 방법
        console.log('e.target>>>', e.target);
        e.target.style.color = 'purple';
    });
}

// mouseover() : 요소에 마우스를 올렸을 때 (모바일 버전에서는 반응 없음, 클릭해야됨.)
// - 기본 버전
// $('.numbers').mouseover(function () {
//     $(this).css('background-color', 'skyblue');
//     $(this).append('<div>handler for basic</div>');
// });

// - .on 버전 사용해서 해보기
// $('.numbers').on('mouseover', function () {
//     $(this).css('background-color', 'skyblue');
//     $(this).append('<div>handler for .on()</div>');
// });

//hover() : 마우스올리고 땠을때
//ㅡmouseover + mouseout 합친 형태임 (over 시에만 유지, out되면 원상태로 )
// hover의 경우 .on()메서드를 이용할 수 없음. = "hover"의 경우 DOM 이벤트가 아니기 때문임.
$('.div-hover').hover(function () {
    $(this).toggleClass('hover');
});

// scroll()
// 윈도우 창을 스크롤 할 때 생김
// $(window).scroll(function () {
//     console.log('scrolling'); //n번 표기됨. scrolling
// });

// - .on 버전
$(window).on('scroll', function () {
    console.log('.on scrolling');
});

// #3. key event
$('.input-key').on('keydown', function (e) {
    //e: event 객체 // keydown : 키보드 입력
    // console.log(e);
    // console.log(e.code);
    // console.log(e.key);

    if (e.code === 'ArrowUp') {
        console.log('위');
    } else if (e.code === 'ArrowDown') {
        console.log('아래');
    } else {
        console.log('나머지 키');
    }
});

// #4. form event
$('#todo-form').on('submit', function (e) {
    e.preventDefault();
    //Qz)
    // 1. name 속성값이 todo 인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장.
    // val() 메서드 사용하기
    const todoInput = $('input[name=todo]').val(); // $("[name='todo]")같음 // 한방에 쓰기방법
    //위가 아닌 2가지 선언으로 해서 하는 방법 (위에서 .val()생략) 후 --> const todo = todoInput.val();
    console.log(todoInput);

    // 2. todos 클래스를 갖는 요소를 선택
    //   -> 새로 생성한 li 요소에 todo 변수의 값을 텍스트로 갖게 한 후, todos 클래스 요소에 자식 요소로 추가.
    // append() 메서드 사용하기
    $('.todos').append(`<li>${todoInput}</li>`);

    // 3. name 속성값이 todo인 요소의 value 초기화 (=value입력값의 초기화)
    // val()사용하기
    // todoInput.val(''); // 이렇게 하려면 위에 1번에서 const 선언 2개로 나눠서 했을 때 적용됨.

    $("[name='todo']").val('');
});

//////////////////////////////////////
// e.preventDefault() 또 다른 예제
$('a#inactive').on('click', function (e) {
    e.preventDefault(); // a태그의 기본 동작을 막음. -> 새로고침 막기 때문에 페이지넘김을 막음
    // a태그의 클릭 이벤트에 대해서 기본동작은 href에 연결되어 있는 링크로의 이동임. --> 이걸 막아버렸음.

    $('#text').append('이 링크는 동작하지 않음'); // 구글 글자 누를때마다 텍스트 노출됨.
});

//this
// 실행된 함수가 속해있던 객체를 참조함.
// 우리가 "뭔가"를 클릭할 때 불러오는 함수? = 콜백함수! >> 콜백함수에서 this는 그 '뭔가'를 의미함.
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');
console.log(btns); // nodeList 여서 for of 문 써서 전체 대상으로 적용시켜줘야함.

function setBgColor() {
    this.style.backgroundColor = 'royalblue';
}
function setBgColor2(elem, color) {
    elem.style.backgroundColor = color; //어떤 요소의 ~~
}

for (let btn of btns) {
    // 아래 1~2~3번 모두 동일한 결과값이 나옴.
    //1번 방법 : 익명 함수로 이벤트 핸들러 정의하기 (this 사용)
    btn.addEventListener('click', function () {
        console.log(this); // click된 버튼을 말함.
        this.style.backgroundColor = 'yellow';
    });
    //2번 방법 :  함수 참조를 통한 이벤트 핸들러 정의하기
    //  - setBgColor함수가 호출될때 이벤트가 발생한 DOM 요소가 'this'
    btn.addEventListener('click', setBgColor); //이렇게 위에 정의한거 가져와서 써도 됨.
    //3번 방법 :  익명 함수에서 또 다른 함수 호출하기.
    btn.addEventListener('click', function () {
        setBgColor2(this, 'purple');
    });
}

/////////////span 하기
for (let span of spans) {
    //위와 같이 1~3번 방법 있음.
    // 1번방법
    span.addEventListener('click', function () {
        this.style.backgroundColor = 'pink';
    });

    //2번방법
    span.addEventListener('click', setBgColor);

    //3번 방법
    span.addEventListener('click', function () {
        setBgColor2(this, 'green');
    });
}
