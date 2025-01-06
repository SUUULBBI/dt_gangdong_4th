// 함수형 컴포넌트 state (*rafc)

import React, { useState } from 'react';

const CountFunction = ({ value }) => {
    /**
     * const [a, b]= useState(""); 형태임
     * a : state에 저장할 자료.
     * b : state에 변경을 도와주는 함수.
     * useState('') : 상태 초기값, 숫자/문자/배열 등 값으 ㅣ형태는 자유로움.
     */

    const [number, setNumber] = useState(0); //괄호안의 값인 0 은 초기값 설정해준 것임.
    //number : 현재 상태값
    //setNumber ; 상태를 변경하는 함수

    // 아래 const 로 state 값 변경하기
    const onClickAdd = () => {
        setNumber(number + 1);
        // setNumber를 호출하면 상태가 변경되고 컴포넌트가 리렌더링됨.
    };

    return (
        <>
            <div>CounterFunction</div>
            <h1>Number : {number}</h1>
            <button onClick={onClickAdd}>{value}</button>
        </>
    );
};
export default CountFunction;
