import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../store/actions/counterActions';

export default function UseRedux() {
    // #7. useSelector hook 사용하여 Redux 스토어에서 상태 읽어오기.
    // const count = useSelector((state) => state); // {count: 100}
    // console.log('count >>> ', count); // {count: 100}
    const count = useSelector((state) => state.counter.count);
    console.log('count >>> ', count); // 100

    return (
        <div>
            <h1>UseRedux</h1>
            <h2>Redux 사용!</h2>
            <h2>count : {count}</h2>
            <Box1 />
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
    // #7. box4에서 숫자 +/-해주기 위해 useSelector hook 사용하기
    const count = useSelector((state) => state.counter.count);

    // #8. useDispatch hook 사용하여 액션을 디스패치하는 함수 가져오기
    //     ㄴ 즉, 이 함수를 이용하여 상태 업데이트한다는 것
    const dispatch = useDispatch();
    return (
        <div className="Box4">
            <h2>Box4 : {count}</h2>
            {/* store > actions폴더 내 counterAction.js에서 아래 plus(), minus() 함수 가져와서 실행하기 */}
            <button onClick={() => dispatch(plus())}>PLUS</button>
            <button onClick={() => dispatch(minus())}>MINUS</button>
            {/* 함수를 ()호출하여 액션객체를 반환하고 그 객체를 dispatch에 전달해야함
                 그래야지 dispatch()가 반환된 액션객체를 리듀서로 전달함 */}
        </div>
    );
};
