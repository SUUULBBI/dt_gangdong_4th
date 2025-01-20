// ** 실습 : 앞서 19-redux 파일의 isVisible 값은 '참'이다. [plus][minus][change] 버튼으로 화면 만들어보기

// src/slices/isVisibleSlice.js
import { createSlice } from '@reduxjs/toolkit';

// #1. 슬라이스 정의하기
// isVisibleSlice 슬라이스 정의
const isVisibleSlice = createSlice({
    name: 'isVisible', // 슬라이스 이름
    initialState: true, // 초기 상태
    reducers: {
        change: (state) => {
            return !state; // 현재 상태를 반전시킴 (true -> false, false -> true)
            // 만약 위에서 return 없애서 사용한다면 {chagne:(state)=>!state,}로 사용할 수도 있음
        },
    },
});

// 액션 생성자, 리듀서 내보내기
export const { change } = isVisibleSlice.actions;
export default isVisibleSlice.reducer;
