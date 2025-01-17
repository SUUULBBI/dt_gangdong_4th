//////////////UseRedux2.js 에서 사용할 것

// (!) 액션 타입 가져오기
import { CHANGE } from '../actions/isVisibleActions';

// #1. state 초기값 정의하기
const initialState = true;

//#2. 리듀서 작성하기
const isVisibleReducer = (state = initialState, action) => {
    // 토글형태, 토글명 CHANGE , 아래의 의미는?
    if (action.type === CHANGE) {
        return !state;
    }
    return state;
};

export default isVisibleReducer;
