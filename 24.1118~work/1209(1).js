//코딩온 jquery 실습1번
function changeImg(name) {
    // 버튼을 클릭할 때마다 실행되는 함수
    $('img').attr('src', `./${name}.png`);
}

//코딩온 jquery 실습 2번
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// TODO2: changeColor 함수 내부 작성
function changeColor() {
    let currentClass = $('div').attr('class'); // 참고용으로 보기위해 현재 클래스를 가져옴.
    console.log(currentClass); //red 나옴 // jquery 02_use.js파일 내 jquery내 css 가져오기 파일에서 배웠었음.

    let currentIndex = colors.indexOf(currentClass);
    console.log(currentIndex); //0 = red 가 첫번째에 있어서.

    /////////////////////////////방법 1///////////////////////
    // #1. 다음 색상으로 색 전환
    // currentIndex = 0~5 숫자 인덱스값으로 움직임.
    // 따라서 length = 1~6이므로 -1 하면 인덱스랑 같아짐.
    let nextClass =
        currentIndex === colors.length - 1 // ex) 0 === 5 >> 같지 않은 상태임.
            ? colors[0] //  0 === 0 이므로 첫 번째 색상으로 돌아감
            : colors[currentIndex + 1]; // 같지 않을때 다음 색상으로 이동
    // // //삼항 연산자 (? :):
    // ? 뒤의 colors[0]은, 만약 currentIndex가 마지막 색상일 때 (즉, currentIndex === colors.length - 1) 선택됩니다.
    // : 뒤의 colors[currentIndex + 1]은, 그렇지 않으면 현재 인덱스에서 바로 다음 색상으로 이동합니다.
    //클래스 교체
    $('div').removeClass(currentClass).addClass(nextClass); // 현재 클래스 삭제 후 다음 클래스를 넣어줘.

    //
    /////////////////////////////방법 2///////////////////////
    // #2. random 함수 이용해서 전환하기
    //random  : 0<=x < 1  --> *6 (=colors.length)
    //     let randomIndex = Math.floor(Math.random() * colors.length); // 정수 0~ 5까지의 숫자로 출력
    //     let nextClass = colors[randomIndex];

    //     //클래스 교체
    //     $('div').removeClass(currentClass).addClass(nextClass); // 현재 클래스 삭제 후 다음 클래스를 넣어줘.
    // }

    // // 해설 참고용 (switchClass())
    // // - SwitchClass(제거할 클래스, 추가할 클래스, duration(s초기준)) -- > 3개까지 매개변수 가져오기도 하지만 3번째 것은 선택사항이라 필요시 기입
    // //  switcClass 의 경우 사용할 경우 애니메이션 효과가 있음. 약간의 부드럽게 변경되는 느낌.
    // // - jquery 메서드가 아니고 // jquery  ui 메서드임 (따라서 jquery ui library 이기 때문에 jquery ui1.14 cdn 복사해서 사용해야함.)
    // function changeColor() {
    //     let currentClass = $('div').attr('class'); // 현재 클래스 가져오기
    //     console.log(currentClass); // red

    //     let currentIndex = colors.indexOf(currentClass);
    //     console.log(currentIndex); // 0

    //     // if (currentIndex === colors.length - 1) {
    //     //     $('div').switchClass(currentClass, colors[0]);
    //     // }

    //     currentIndex === colors.length - 1
    //         ? $('div').switchClass(currentClass, colors[0], 1000)
    //         : $('div').switchClass(currentClass, colors[currentIndex + 1], 1000);
}
