//코딩온 state 실습 2번 문제 - 함수형 컴포넌트.

import React, { useState } from 'react';

const StateClassComponent1 = () => {
    const [nowNumber, setNowNumber] = useState(0);

    const onClickEnter = () => {
        setNowNumber(nowNumber + 2);
    };

    const onClickLeave = () => {
        setNowNumber(nowNumber - 1);
    };

    return (
        <>
            <div>{nowNumber}</div>
            <button onClick={onClickEnter}>+2버튼</button>
            <button onClick={onClickLeave}>-1버튼</button>
        </>
    );
};

export default StateClassComponent1;
