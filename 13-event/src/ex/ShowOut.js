//3번실습 [사라져라]버튼 클릭시 안녕하세요 글자 삭제 > 사라지면 바로 [보여라]버튼으로 전환.

import React, { useState } from 'react';

const ShowOut = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleMessage = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleMessage}>
                {isVisible ? '사라져라' : '보여라'}
            </button>
            {isVisible && <h1>안녕하세요</h1>}
        </div>
    );
};

export default ShowOut;
