import React, { useRef, useState } from 'react';

// useRef Hook
//  - 1. DOM 요소에 접근 (*RefSample1.js파일)
//  - 2. 값을 기억 (*현재파일)

export default function RefSample2() {
    const id = useRef(7); // 초기값을 7로 설정
    console.log('id>>>', id);

    const plusIdRef = () => {
        id.current += 1; // current 값을 +1하도록 직접 수정함
        console.log('id.current>>>', id.current); //값이 진짜 증가하는지 확인하기 위함
    };

    const [number, setNumber] = useState(7);
    const plusNumState = (e) => {
        setNumber(number + 1);
        console.log('number.current>>', setNumber);
    };

    return (
        <div>
            <p>함수형 컴포넌트에서 버튼 클릭시 id값을 1씩 증가</p>
            <h1>ref</h1>
            <h2>{id.current}</h2>
            <button onClick={plusIdRef}>plus</button>

            <hr />
            <p>
                <b>** Ref와 State 비교 ** </b> <br />
                State는 Ref와 다르게 값이 변경되면서 리렌더링 되며, <br />
                Ref는 값은 변경되지만 리렌더링되지 않아서 보여지는 값은 그대로임
            </p>

            <h1>state</h1>
            <h2>{number}</h2>
            <button onClick={plusNumState}>plus</button>
        </div>
    );
}
