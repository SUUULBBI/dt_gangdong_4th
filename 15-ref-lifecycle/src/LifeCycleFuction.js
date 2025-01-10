import React, { useState } from 'react';
import LifeCycleFunctionChild from './LifeCycleFunctionChild';
// 부모 컴포넌트
export default function LifeCycleFuction() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false);

    const changeNumber = () => {
        setNumber(number + 1);
    };

    // 자식 컴포넌트 토글
    const changeVisible = () => {
        setVisible(!visible); // 토글효과인데 visible 일때 fale , !visible일때 true 값 반환
    };
    return (
        <div>
            <h2>LifeCycleFuction.js - 함수형 lifecycle</h2>
            <button onClick={changeNumber}>Plus</button>
            <button onClick={changeVisible}>on/ off</button>

            {/* 단축평가 "&&"" or "||" 를 사용해서 자식 컴포넌트 다루기 */}
            {visible && <LifeCycleFunctionChild number={number} />}
        </div>
    );
}
