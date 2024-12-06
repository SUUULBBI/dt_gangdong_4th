/**
 * 레거시 프로젝트
 *  :
 */
/**
 * jQuery CDN 관련 참고  - https://releases.jquery.com/
 *   - uncompressed : 원본파일
 *   - Minified : 원본을 압축한 파일 (✅ 보통 이거 사용)
 *   - slim : 해당 버전이 필요없다고 생각하는 라이브러리를 제거한 파일
 *   - slim minified : slim파일을 압축한 파일
 */
//////////////////////////////////////////////////////////////////////
// jQuery 란?
/**
 * - js의 라이브러리로 DOM조작. 이벤트 처리, 애니메이션, Ajax 요청을 쉽게 구현할 수 있도록 설계.
 * - js 코드의 간결성과 생산성을 높이기 위해 만들어짐.
 */
/// *구문
// $(CSS 선택자).동작함수()

// - $() : HTML 요소를 선택하는 함수
// - 동작함수 : 선택된 요소에 대해 원하는 동작 수행함.

// (1) 아래는 JS에서 요소 선택해서 가져오는 방법
// let div1 = document.getElementById('div1');
// console.log(div1);

// (2) 아래는 jQuery 이용해서 요소 선택해서 가져오는 방법
console.log($('#div1')); // ce.fn.init {0: div#div1, length: 1} ==> 객체형태, jQuery객체를 가져온 상태임.
//  ---> ce : jQuery 객체가 내부적으로 사용하는 이름임. (참고용, 신경쓸 필요없음.)
//        ㄴ jQuery객체를 생성하고 초기화하는 함수임.

// #1. 순수 자바스크립트 버전
function submitJS() {
    // 요소 선택
    const div1 = document.getElementById('div1');

    // div 내용을 변경
    div1.innerText = '반갑습니다!';

    // div border style 추가
    div1.setAttribute('style', 'border: 2px solid red;');
}

// #2. jQuery
function submitJquery() {
    // 요소 선택
    const div1 = $('#div1');

    // div 내용을 변경
    div1.text('안녕히 가세요~!');

    // div border style 추가
    // div1.css('border', '2px dotted blue');
    div1.attr('style', 'border: 2px dotted blue;');
}

//////////////////////////////////////

const colorsJs = document.querySelectorAll('.color');
const colorsJquery = $('.color');

console.log(colorsJs); // NodeList(4) [li.color, li.color, li.color, li.color]
console.log(colorsJquery); // ce.fn.init {0: li.color, 1: li.color, 2: li.color, 3: li.color, length: 4, prevObject: ce.fn.init}

// Q) js li 요소 클릭시 글씨 색상 빨간색
// #1. 순수 자바스크립트
// colorsJs.addEventListener('click', () => {
//     colorsJs.style.color = 'red';
// });

// 아래코드는 에러가 발생됨.
// colorsJs.addEventListener('click', () => {
//     colorsJs.style.color = 'red';
// });
// # 에러 발생함.
//  >>  TypeError: colorsJs.addEventListener is not a function
//  why? 유사 배열(객체)에 이벤트 리스너를 추가하려고 했기 때문임.
//      >> 배열 자체가 이벤트리스너의 사용이 발가함.
//      >> 배열의 각 요소에 대해 이벤트리스너를 추가해야하므로 반복해야함(ex) forEach, for of)

colorsJs.forEach((item) => {
    item.addEventListener('click', function () {
        this.style.color = 'red';
    });
});

// Q ) jquery li 요소 클릭시 배경 색상 하늘색으로 변경
// #2. jQuery  (*이벤트리스너가 js와 약간 다름.)
/**
 * .on() 메서드 존재
 * - jQuery에서만 사용하는 이벤트 전용 메서드임.
 * - 순수 javascript에서는 on 메서드 사용 불가함.
 */
colorsJquery.on('click', function () {
    console.log('this >>>>', $(this)); // jquery 에서는 this도 달러로 감싸야함.
    $(this).css('background-color', 'skyblue');
});
