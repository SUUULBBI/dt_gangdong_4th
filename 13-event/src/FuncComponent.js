// 함수형 컴포넌트에서의 이벤트 사용
// - 이벤트 핸들러를 함수로 정의한 뒤, JSX의 이벤트 속성 전달 방식으로 사용함.
import React, { useState } from 'react';

const FuncComponent = () => {
    const [number, setNumber] = useState(0);

    //#1. 인자가 없는 함수
    const increase = () => {
        setNumber(number + 1);
    };

    //#2. 인자가 1개를 사용하는 함수 만들기 (* `` 백틱 사용함.)
    const alertMsg = (msg) => {
        alert(`${msg}~ 현재 숫자는 ${number} 입니다. `);
    };

    //#3. 인자가 2개를 사용하는 함수 만들기
    const consoleMsg = (e, msg) => {
        console.log(e.target);
        console.log(`${msg}~ 현재 숫자는 ${number} 입니다. `);
    };

    //#4. e.target vs e.currentTarget 차이 알아보기
    //  - e.target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치를 말함.
    //                즉 내가 클릭한 자식요소임.
    //  - e.currentTarget : 이벤트 핸들러가 있는 요소를 나타냄.

    const handleEvent = (e) => {
        console.log('e.target>>>', e.target);
        console.log('e.currentTarget>>>', e.currentTarget);
    };

    return (
        <>
            <div>FuncComponent</div>
            <h1>Number Counter</h1>
            <h2>{number}</h2>

            {/* #1. 함수에 인자가 없는 경우 : 함수 이름만 전달 */}
            <button onClick={increase}>더하기</button>

            {/* #2. 함수에 인자가 1개 일 때 */}
            <button
                onClick={() => {
                    alertMsg('hello');
                }}
            >
                alert출력
            </button>

            {/* #3. 함수에 인자가 2개 일 때  */}
            <button
                onClick={(e) => {
                    consoleMsg(e, 'hello');
                }}
            >
                console 출력
            </button>

            {/* #4. e.target vs e.currentTarget 차이 알아보기 */}
            <button onClick={handleEvent}>
                <span>handle Event</span>
            </button>
        </>
    );
};

export default FuncComponent;
