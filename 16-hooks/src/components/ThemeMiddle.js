//context --> 3번작업 , 부모 컴포넌트 만들기 (*부모=중간다리)
//   >>> prop drilling 을 의도적으로 보여주려고 만든 파일임. (=시뮬레이션 하기 위한 컴포넌트)
// 따라서 ThemeContext는 가져와서 쓰지 않아도 됨

import React from 'react';
import ThemedComponent from './ThemedComponent';

export default function ThemeMiddle() {
    return (
        <div style={{ padding: '10px', border: '1px solid red' }}>
            <h3>부모 컴포넌트(중간다리)</h3>

            {/* 자식컴포넌트 가져와서 사용하기 */}
            <ThemedComponent></ThemedComponent>
        </div>
    );
}
