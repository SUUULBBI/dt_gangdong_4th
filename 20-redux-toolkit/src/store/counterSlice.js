// #1. Slice 객체 정의하기
//   ㄴ createSlice 함수 사용하기
//   - 이제부터는 reducer 와 액션 생성자를 한번에 정의할 수 있게 되었음(리듀서+액션)
//   다만 npm install redux react-redux @reduxjs/toolkit 설치해주기!

/** createSlice({}) 상세 내용 알아보기
 *  - name : 슬라이스의 이름 정의 및 액션 타입의 네임스페이스로 사용됨
 *          ㄴ 따라서 이전에 했던 것처럼 'counter/PLUS' 라는 상수정의를 별도로 하지 않더라도 알아서 해당 값으로 인식함.
 *  - initialState : 상태 초기값 정의
 *  - reducers : 상태를 업데이트 하는 리듀서 함수 정의
 */

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 100 },
    reducers: {
        // 상태를 변경하는 액션들
        plus: (state) => {
            state.count += 1;
            // 이전(...state , 를 이용해서 얕은 복사로 가져와서 값 +1 해주었음)과 달리 여기서는 직접 상태값 변경해줌
            //      ㄴ 'Redux Toolkit immer 라이브러리'가 내부적으로 동작해서 원본값 해치지 않고 상태 변경을 잘해줌
        },
        minus: (state) => {
            state.count -= 1;
        },
        amount: (state, action) => {
            state.count += action.payload; //액션의 payload 사용   // 액션의 payload 값을 count에 더함 (=지정한 값만큼씩 더해라)
        },
    },
});
console.log('counterSlice>>', counterSlice);

///////////////////////////////////
// 앞서 배운 것에서 별도의 actions폴더내 별도 액션을 만들었던 그것임
export const { plus, minus, amount } = counterSlice.actions; //= 액션값을 구조분해할당으로 plus, minus, amount 각각 내보냄

// 리듀서 내보내기 해줌. **reducer 오탈조심하기
export default counterSlice.reducer;
