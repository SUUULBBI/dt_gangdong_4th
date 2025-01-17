// ** 실습 : 앞서 19-redux 파일의 isVisible 값은 '참'이다. [plus][minus][change] 버튼으로 화면 만들어보기

// src/slices/isVisibleSlice.js
import { createSlice } from '@reduxjs/toolkit';

// initialState를 true로 설정 (화면에 요소가 보이는 상태)
const initialState = true;

// isVisibleSlice 슬라이스 정의
const isVisibleSlice = createSlice({
    name: 'isVisible', // 슬라이스 이름
    initialState, // 초기 상태
    reducers: {
        change: (state) => {
            return !state; // 현재 상태를 반전시킴 (true -> false, false -> true)
        },
    },
});

// 액션과 리듀서 내보내기
export const { change } = isVisibleSlice.actions;
export default isVisibleSlice.reducer;
