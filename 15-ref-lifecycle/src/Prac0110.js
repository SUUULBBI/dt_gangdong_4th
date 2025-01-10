//코딩온 14-map-filter 관련 실습 문제 1~2번!

import React, { useState } from 'react';

export default function Prac0110() {
    // 미리 입력된 값 상태
    const [list, setList] = useState([
        { name: '윤소희', email: 'yoo@gmail.com' },
    ]);

    // 입력값 상태 관리
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    // 버튼 클릭 시 리스트에 추가1
    const plusNameEmail = () => {
        if (inputName && inputEmail) {
            // 새로운 데이터 추가
            const newData = { name: inputName, email: inputEmail };
            setList([...list, newData]);
        }
        // 입력 필드 초기화
        setInputName('');
        setInputEmail('');
    };

    // Enter 키를 누를 때 실행될 함수
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            plusNameEmail(); // Enter 키가 눌리면 plusNameEmail 함수 호출
        }
    };

    // 더블 클릭 시 해당 항목 삭제
    const handleDoubleClick = (index) => {
        const updatedList = list.filter((_, i) => i !== index); // 해당 인덱스 제외하고 새 리스트 생성
        setList(updatedList);
    };

    return (
        <div>
            {/* 이름과 이메일 입력 필드 */}
            <input
                type="text"
                placeholder="이름"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyDown={handleKeyPress} // Enter 키를 감지하는 이벤트 추가
            />
            <input
                type="text"
                placeholder="이메일"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                onKeyDown={handleKeyPress} // Enter 키를 감지하는 이벤트 추가
            />
            <button onClick={plusNameEmail}>등록</button>
            <br />

            {/* 미리 입력된 정보 (기본 값) */}
            <h2>코디: codi@gmail.com</h2>

            {/* 리스트에 저장된 이름과 이메일 출력 */}
            {list.map((user, index) => (
                <h2
                    key={index}
                    onDoubleClick={() => handleDoubleClick(index)} // 더블클릭 이벤트 추가
                >
                    {user.name}: {user.email}
                </h2>
            ))}
        </div>
    );
}
