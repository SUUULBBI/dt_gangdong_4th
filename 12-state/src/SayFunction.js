import React, { useState } from 'react';

const SayFunction = () => {
    console.log(useState('Welcome')); // 초기 상태값 설정 후 반환 값 출력 // 임시 저장 용도임.

    const [message, setMessage] = useState('welcome');
    //message : 현재 상태
    // setMessage() : message state 값을 바꾸는 함수.

    const onClickEnter = () => {
        setMessage('안녕하세요');
    };

    const onClickLeave = () => {
        setMessage('안녕히가세요');
    };

    const handleClick = () => {
        //currentMessage = 호출 시점의 message 현재 상태 값을 나타냄.
        //  ㄴ setMessage에 함수형 업데이트를 위한 콜백 함수를 전달됨.
        setMessage((currentMessage) => {
            return currentMessage === 'welcome' ? '환영합니다' : 'Hi';
        });
    };

    return (
        <>
            <div>SayFunction</div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <button onClick={handleClick}> 텍스트 바꾸기</button>
            <h1>{message}</h1>
        </>
    );
};

export default SayFunction;
