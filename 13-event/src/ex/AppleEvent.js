// 동영상 실습 사과그림 영상
// **********  상태 관리를 따로따로 하는 방법 코드 작성 건

import React, { useState } from 'react';

export default function AppleEvent() {
    const [fruit, setFruit] = useState('peach.png'); //.png 하면 퍼블릭파일에 있다면 알아서 해당 파일의 경로를 가져옴
    const [bgc, setBgc] = useState('red');
    const [color, setColor] = useState('black');
    const [text, setText] = useState('');

    const fruitChange = (e) => {
        setFruit(e.target.vlaue);
        //  e.target : <option value="apple.png">사과</option> 선택한 것임.
        // e.target.value : apple.png 선택한 상태
    };

    const bgcChange = (e) => {
        setBgc(e.target.value);
    };

    // 함수선언문으로 작성한 인풋박스 입력한 후 적용되는 것.
    function Typing(e) {
        setText(e.target.value);
    }

    //글자색 변경될 수 있도록
    const colorChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <div>
            과일 :
            <select onChange={fruitChange}>
                <option value="peach.png">복숭아</option>
                <option value="apple.png">사과</option>
                <option value="banana.png">바나나</option>
            </select>
            배경색 :
            <select onChange={bgcChange}>
                <option value="red">빨강</option>
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
            </select>
            글자색 :
            <select onChange={colorChange}>
                <option value="black">검정</option>
                <option value="red">빨강</option>
                <option value="yellow">노랑</option>
            </select>
            <div>
                내용: <input type="text" onChange={Typing} />
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div style={{ backgroundColor: bgc, color: color }}>{text}</div>{' '}
            {/* 텍스트 나오는 부분이며 백컬러를 bgc로 변경되도록 스타일요소 추가한 것 */}
        </div>
    );
}
