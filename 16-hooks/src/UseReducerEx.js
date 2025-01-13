import React, { useReducer } from 'react';

// #1. 초기 선택값 정의하기
const initState = { value: 0 }; // 초기상태값=0

// #2. reducer 함수 정의하기 (상태 변경 로직 작성)
//  - 이 함수는 현재 상태와 액션을 받아 새로운 상태를 반환할 것임.
const reducer = (prevState, action) => {
    // prevState = 현재상태 // 해당 값의 변수명은 아무거나 작성해도 됨.
    console.log('현재상태:', prevState); //{value :0} >> 객체상태로 나옴
    console.log('현재상태 값:', prevState.value); // 0 현재값은 초기값인 0 이 나옴

    // action = {type: xxx}
    console.log('action:', action); // {type: 'INCREMENT'}
    console.log('action에 설정한 값까지 들어가려면?', action.type); //INCREMENT

    switch (action.type) {
        case 'INCREMENT':
            return { value: prevState.value + 1 };
        case 'DECREMENT':
            return { value: prevState.value - action.payload };
        case 'RESET':
            return initState;
        default:
            return { value: prevState.value };
    }
};

// - 업데이트 로직을 컴포넌트 외부로 뺐으므로 아래 return 컴포넌트 안에서는 쓰지 않아도 됨. 따라서 간결성 높이고 위쪽 정의된 컴포넌트는 꺼내서 다른 곳에서도 사용가능.
export default function UseReducerEx() {
    // #3. useReducer 훅 사용
    const [state, dispatch] = useReducer(reducer, initState);
    // state : 현재상태 => 관리될 값
    // dispatch : 액션을 발생시키는 함수 ( = state 가 어떻게 변경되어야 하는지에 대한 힌트 제공함
    // reducer : state를 업데이트하는 함수
    // initState : 초기값
    console.log('state 초기 상태>>', state);

    // #4. 액션핸들러 함수 정의하기 (plus, minus, reset 버튼 관련 액션)
    //   - 이 함수들은 'dispatch'를 호출하여 액션을 발생시킨다.
    //   - dispatch는 액션 객체를 인수로 받으면서 {type: 'ACTION_TYPE'},
    //payload: data} 형태인데, payload의 경우 '액션 객체에 담아 보내는 추가적인 데이터(숫자/문자열/객체 등 모든 형태 데이터 가능)'이고 생략이 가능함

    const increment = () => {
        dispatch({ type: 'INCREMENT' }); // 타입명은 모두 대문자로 쓰기로 약속한 상태
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT', payload: 1 }); // payload 추가해줌. >>
    };
    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div>
            <h1>UseReducer Ex</h1>
            <h2>{state.value}</h2>

            {/* #5. return위에서 작성한 컴포넌트 랜더링하기 */}
            <button onClick={increment}>plus</button>
            <button onClick={decrement}>minus</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}
