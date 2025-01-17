//////////////UseRedux2.js 에서 사용할 것

//#3. 액션 타입 상수 정의하기
export const CHANGE = 'isVisible/CHANGE';

//#4. 액션 생성자 정의
// (위에 3번에서 만든 타입 상수를 가지고 생성자 정의하기)
export const changeVisibility = () => ({ type: CHANGE });
