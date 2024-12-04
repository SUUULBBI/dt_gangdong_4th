// JS 표준 내장 객체
// - 기본적으로 미리 정의된 객체
// - 모든 JS환경에서 사용할 수 있는 내장 객체들을 말함.
// - 자주 사용되는 기능들을 미리 구현해 놓은 것.

// #1. Date 객체 : 시간, 날짜
//날짜 생성하여 저장.
let now = new Date();
console.log(now); // Wed Dec 04 2024 11:28:46 GMT+0900 (한국 표준시)

// new Date(Timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

let jan_02_1970 = new Date(24 * 3600 * 1000); //하루 24시간, 1시간=3600초 , 1000= 밀리초단위
console.log(jan_02_1970); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
// Timestapm 타임스탬프
// - 특정 시점의 날짜와 시간을 "숫자로 표현한 값"
// - 보통 '에포크' 이후의 시간을 초 또는 밀리초 단위로 시간을 나타냄.
// -- Q1) 에포크 Epoch 란? > 특정 시간의 기준점임. > ex) 1970년 1월1일 09:00:00 UTC 기준
// -- Q2) 왜 이 날짜와 시간이 기준으로 됐나?
// >> A) 1. 역사적인 이유 :
//         -  유닉스 os에서 타임스탬프를 처음 정의할 때 사용한 날짜임. (유닉스 시스템이 등장한 시점)
//         - 당시 컴퓨터 시스템의 기준 시간으로 설정한 것.
// >>    2. 기술적인 편의성
//         - 시간을 숫자로 표현하여 계산하기가 수학적으로 편리함.

///////////////////////////////////////////////
// new DAte(date_string)
let date = new Date('2024-12-04');
console.log(date); // Wed Dec 04 2024 09:00:00 GMT+0900 (한국 표준시)

let date2 = new Date('2024', '12', '04'); //나눠작성하면 MM월이(1월~12월)이 아닌 인덱스로 기준잡아져서, 0부터 시작하여 0~11 중 써야함. 12월쓸거면 11로 써야함.
console.log(date2); //Sat Jan 04 2025 00:00:00 GMT+0900 (한국 표준시)
let date3 = new Date('2024', '11', '04');
console.log(date3); //Wed Dec 04 2024 00:00:00 GMT+0900 (한국 표준시)

// * 관련 메서드
// - 객체 점 접근법
// gateDate() : '월'의 몇번째 날인지 반환함
// gatDay() : '주'의 몇번째 날인지 반환함 (0부터 시작)
// getMonth() : 몇번째 달인지 반환  (0부터 시작)
// getHours () : 시간 반환 (0부터 23까지, 인덱스))
// getMinutes() : 분 반환 (0부터 59까지, 인덱스))
// getSeconds() : 초 반환 (0부터 59까지, 인덱스))
// getMillisecons() : 밀리초 반환 (0부터 999까지 인덱스))
//getTime() : 1970년1월1일부터 현재까지의 밀리초 단위의 시간을 반환함.

console.log(now.getFullYear()); //2024 - 년도 반환
console.log(now.getMonth() + 1); //인덱스라서, +1해줘야 12월이 찍힘.
console.log(now.getDate()); // 4 (오늘 12/4이라서, 4 호출됨)
console.log(now.getDay()); // 3 = (오늘 수요일. 일월화수 01234 )
console.log(now.getHours()); //
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

console.log('---------------');
////////////////////////////////
// Math 객체
// 수학적인 상수와 함수

//* 속성
console.log(Math.E); //자연로그E
console.log(Math.PI); //파이
console.log(Math.SQRT2); // 루트2 = 2의 제곱근

//메서드
console.log(Math.min(100, -2, 0, 5)); //최소값 출력
console.log(Math.max(100, -2, 0, 5)); // 최대값 출력
console.log(Math.round(5.3125)); // 5, 소수점 반올림
console.log(Math.round(5.6125)); // 6, 소수점 반올림
console.log(Math.ceil(5.1124)); // 6, 올림
console.log(Math.floor(5.888)); // 5, 내림
console.log(Math.random()); // 저장할때마다 랜덤숫자를 가져옴. 단 난수 출력 범위 : 0<= x < 1

//응용편 - Math.random() 응용예시
//0 ~9 사이 숫자로 만들고 싶다면?
console.log(Math.random() * 10); // 출력범위 : 0<=x <10 , 단 9.xxxx 소수점 나옴.
console.log(Math.floor(Math.random() * 10)); // floor로 인해 소수점 날아감. / 출력범위 : 0<=x <10 자연수
console.log(Math.floor(Math.random() * 11)); // 출력범위 : 0<=x <11

//Quiz
//1번 - 1~100까지 뽑기
console.log(Math.floor(Math.random() * 101)); // 0<= x < 101 --> 0~100까지의 자연수
console.log(Math.floor(Math.random() * 100) + 1); // 1<= x <101 --> 1~100까지의 자연수
console.log('---------------');
//2번 - 20~22까지 뽑기
console.log(Math.floor(Math.random() * 3) + 20);

///////////////////////
//코딩온 내장객체 실습 (내장메소드와 내장객체 실습) - 3번 풀기
// 내장 객체 Date 를 이용해서 오늘이 평일인지 주말인지 콘솔창에 출력해주세요. 이때 if, switch, 삼항연산자 중 하나 쓰기!
let day4 = now.getDay();
console.log(day4);
if ((day4 = 0)) {
    console.log('오늘은 일요일입니다.');
} else if ((day4 = 1)) {
    console.log('오늘은 월요일입니다.');
} else if ((day4 = 2)) {
    console.log('오늘은 화요일입니다.');
} else if ((day4 = 3)) {
    console.log('오늘은 수요일입니다.');
} else if ((day4 = 4)) {
    console.log('오늘은 목요일입니다.');
} else if ((day4 = 5)) {
    console.log('오늘은 금요일입니다.');
} else {
    console.log('오늘은 토요일입니다.');
}
