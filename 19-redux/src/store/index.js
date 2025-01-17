//store 폴더 내 index.js파일 생성
// #5. 스토어 생성
//   - createStore 사용
//   - 리듀서와 미들웨어 결합하여 설정

import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import rootReducer from './reducers';

// 5-1. 스토어 > [단일 리듀서] 일 때,
// const store = createStore(counterReducer); // (counterReducer)가 상품이고 이것이 store에 진열됐다는 것을 표현한 것임

// 5-2. 스토어 > [여러개의 리듀서] 일 때, (*해당 가져온 파일은 store>reducers> index.js 파일)
const store = createStore(rootReducer);

export default store;

//이후 최상단의 index.js로 이동
