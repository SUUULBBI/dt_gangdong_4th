import React from 'react';
import './styles/Box.css';
import { useDispatch, useSelector } from 'react-redux';
import { amount, minus, plus } from './store/counterSlice';
import { change } from './store/isVisibleSlice';

export default function UseToolkit() {
    // #4. 상태 가져와서 사용하기
    const count = useSelector((state) => state.counter.count); //초기값인 100에 접근했음

    return (
        <div>
            <h1>UseToolkit</h1>
            <h2>리듀서 추가</h2>
            <h2>number : {count}</h2>
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
    // #4. 상태 가져와서 사용하기
    const count = useSelector((state) => state.counter.count); //초기값인 100에 접근했음
    const isVisible = useSelector((state) => state.isVisible);

    // #5. action 함수 실행하기
    const dispatch = useDispatch();

    return (
        <div className="Box4">
            <h2>Box4 : {count}</h2>
            <button onClick={() => dispatch(plus())}>Plus</button>
            <button onClick={() => dispatch(minus())}>Minus</button>
            <button onClick={() => dispatch(amount(5))}>Amount</button>

            {/* 초기값을 ture로 두었기 때문에 '참' 부터 나옴 */}
            <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}"이다.</h2>
            <button onClick={() => dispatch(change())}>change</button>
        </div>
    );
};
