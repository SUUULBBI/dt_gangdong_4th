// #2. 스토어 생성 및 리듀서 연결하기
// https://velog.io/@jjh099/Redux-configureStore-createSlice-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // counterReducer 변수명으로 자유롭게 정할 수 있음
import isVisibleReducer from './isVisibleSlice';

/** configureStore
 *  - store 생성
 *  - 여러 리듀서 결합 (reducer 옵션으로  전달)
 *   ㄴ 객체 형태로 전달, 키(ex. =counter)는 상태이름이 됨
 */

const store = configureStore({
    reducer: {
        counter: counterReducer, // 'counter' 라는 상태를 counterReducer로 관리하겠다는 것임 = 변수명counterReducer 마음대로 생성가능!
        isVisible: isVisibleReducer,
    },
});
export default store;
