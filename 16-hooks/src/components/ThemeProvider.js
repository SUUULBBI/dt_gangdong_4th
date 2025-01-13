//context --> 2번작업 , 조상 컴포넌트 만들기

// 조상 컴포넌트 = 데이터 제공 역할

// #2. Provider 컴포넌트 정의하기
// ThemeProvider는 자식 컴포넌트{children}에게 ThemeContext의 값을 전달하는 역할을 함.
import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function ThemeProvider({ children }) {
    // Theme 상태 관리하기
    const [theme, setTheme] = useState('light');

    // Theme변경 토글 함수 정의 (light <> dark)
    const toggleTheme = () => {
        setTheme((current) => {
            //(current) : 변수 지정
            return current === 'light' ? 'dark' : 'light'; //
        });
    };
    return (
        <div style={{ padding: '10px', border: '2px solid blue' }}>
            {/*  #3. .Context 객체.Provider로 감싸서 하위 컴포넌트에 값을 전달할 예정임 */}

            <h1>조상 컴포넌트</h1>
            {/* 아래 코드의 뜻 : Themecontext가 {children} 나의 자식들에게 제공자가 될 것이다 
            -> value={{}} 이것들의 데이터를 넘겨줄 거야! 
            => value 로 전달하는 객체에는 theme 상태값과 토글 함수가 포함됨  */}
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>

            {/*  ** context 사용시 주의 할 점 **
             - {children}에 포함된 모든 컴포넌트들이 context의 영향을 받기 때문에 
             Provider의 value가 변경되면 {children} 내부에 있는 모든 컴포넌트들이 리랜더링 됨! 
             
             - 즉, context는 값이 변경될 때마다 이를 구독하고 있는 모든 하위 컴포넌트를 리랜더링하기 때문에
              의미없이 남용해서 사용하면 안되고, 차라리 context를 여러개로 분리해서 사용하면 더 좋음.    */}
        </div>
    );
}

// # (커스텀 훅 사용이 아래와 같이 가능하기도 함. 하지만 비추천한다고 함.
// useContext를 활용하여 ThemeContext의 값을 반환하는 커스텀 훅.
export const useTheme = () => useContext(ThemeContext);
