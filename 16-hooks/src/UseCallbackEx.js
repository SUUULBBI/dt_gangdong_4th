import React, { useCallback, useRef, useState } from 'react';

//useCallback
// - 매번 함수를 생성하지 않고 함수를 기억해두었다가 필요할 때마다 함수를 재사용할 수 있도록 함.

export default function UseCallbackEx() {
    const [text, setText] = useState('');
    const prevRef = useRef(); //요소선택 or 값을 저장함. 따라서 이번에는 '이전함수 참조값 저장용'으로 사용할 예정. (why? 리랜더링 되어도 값을 유지하는 ref객체임)

    // [before]
    // text 상태가 업데이트 되면 = 컴포넌트는 리렌더링됨 = 코드를 다시 읽는다.
    // = onChangeText 함수도 다시 생성한다는 의미임. = javascript함수는 object type이라서 객체참조형임, 따라서 함수를 생성할때마다 참조하는 주소값이 계속 변경됨
    // const onChangeText = (e) => {
    //     console.log('일하는중!');
    //     setText(e.target.value);
    // };

    /////////////////////////////////

    // [after]
    //useCallback hook으로 함수를 기억해서 컴포넌트가 리랜더링되어도 '의존성 배열'에 있는 값이 바뀌지 않는 한, '기존 함수를 재사용'함.
    const onChangeText = useCallback(
        (e) => {
            console.log('일한느중(after)');
            setText(e.target.value); //입력될때마다 값이 새로 생김
        },
        [text]
    );
    // []: 빈값일때 딱 한번만 실행하고 그 한번 실행된것을 재사용함
    // [text] : 입력한 text가 있을 때마다 계속해서 새롭게 실행됨. 따라서 주소값이 계속 바뀜

    //-----------------------------------//
    // 함수 참조값(=주소값) 비교하기
    console.log('함수 참조값이 같은가? :', prevRef.current === onChangeText);
    // 만약 로그값이 ture가 나온다면? : useCallback 덕분에 함수가 새로 생성되지 않고 기존 함수를 재사용한다는 것
    // 만약 로그값이 false가 나온다면? : useCallback을 사용하지 않으면 리랜더링할 때마다 새로운 함수가 생성되어 참조값이 달라짐을 의미

    prevRef.current = onChangeText; // 이전 참조값 업데이트 => 새로운 참조값과 비교하기 위해서 추가한 것

    return (
        <div>
            <h1>UseCallback Ex</h1>
            <h3>일반적일 때 모습</h3>
            <input type="text" onChange={onChangeText} />
            <div>작성한 값 : {text || '없음'} </div>
        </div>
    );
}
