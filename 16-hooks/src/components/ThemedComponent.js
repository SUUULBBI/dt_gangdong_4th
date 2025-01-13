//context --> 4번작업 , 자식 컴포넌트 만들기
// 자식컴포넌트 = 제공받은 데이터의 소비자
// 따라서 ThemeContext 를 가져와서 사용해야함

import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import useTheme from '../hooks/useTheme';

const ThemedComponent = () => {
    // #4. useContext 훅을 사용해서 ThemeContext 값을 직접 가져와서 사용하기
    // = useContext(ThemeContext) : 이곳 주머니에서 theme, toggleTheme를 가져와서 사용할거라는 뜻

    // const { theme, toggleTheme } = useContext(ThemeContext);
    // 위 처럼 사용하거나 혹은 아래와 같이 # 커스텀 훅을 함수처럼 가져와서 사용할 수 있음
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '20px',
                textAlign: 'center',
                border: '1px solid purple',
            }}
        >
            <h3>자식컴포넌트</h3>
            <p>현재테마: {theme}</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
};

export default ThemedComponent;
