// 새롭게 다시 복습용

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 아래에서 한번에 (store>actions>index.js 파일에서) 가져올 거라 우선 주석처리함.
// import { minus, plus } from '../store/actions/counterActions';
// import { changeVisivility } from '../store/actions/isVisibleActions';
import { minus, plus, changeVisibility } from '../store/actions';

export default function UseRedux2() {
    //  #6. redux 사용
    const count = useSelector((state) => state.counter.count);
    console.log('count>>', count);

    return (
        <div>
            <h1>UseRedux</h1>
            <h2>Redux 사용</h2>
            <h2>리듀서 새로 추가</h2>
            <h2>count:</h2>
            <Box1></Box1>
        </div>
    );
}

// 아래는 Box1 컴포넌트임.
//   ㄴ 다만 export하지 않았으니 다른 곳에서는 못쓰고 여기 파일에서만 쓸 수 있는 컴포넌트임
const Box1 = () => {
    return (
        <div className="Box">
            <h2>Box1: </h2>
            <Box2 />
        </div>
    );
};

// Box2 컴포넌트
const Box2 = () => {
    return (
        <div className="Box2">
            <h2>Box2: </h2>
            <Box3 />
        </div>
    );
};

// Box3 컴포넌트
const Box3 = () => {
    return (
        <div className="Box3">
            <h2>Box3: </h2>
            <Box4 />
        </div>
    );
};

// Box4 컴포넌트 (data 사용할 컴포넌트)
const Box4 = () => {
    const count = useSelector((state) => state.counter.count);
    const isVisible = useSelector((state) => state.isVisible);

    // #7. dispatch 사용하기
    const dispatch = useDispatch();
    return (
        <div className="Box4">
            <h2>Box4 : {count}</h2>
            <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}"이다.</h2>
            <button onClick={() => dispatch(plus())}>PLUS</button>
            <button onClick={() => dispatch(minus())}>MINUS</button>

            {/* Q)  '참' , '거짓' 글자가 교체되도록 하는 CHANGE 버튼 만들기  */}
            <button onClick={() => dispatch(changeVisibility())}>CHANGE</button>
        </div>
    );
};
