//context --> 1번작업 , context객체만들기

import { createContext } from 'react';

// #1. context 생성하기
// = react.creatContext 를 호출하여 'context 객체(=주머니)' 만들기
const ThemeContext = createContext();
console.log('ThemeContext>>>', ThemeContext);

// Provider , Consumer 라는 두가지 속성 가지는데
//  - Provider : context 값을 전달하는 컴포넌트
//  - consumer : context 값을 가져오는 컴포넌트 =useContext 훅 대체

export default ThemeContext;
