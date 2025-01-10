import React from 'react';

export default function Select({ setData }) {
    return (
        <div>
            과일 :
            <select
                onChange={(e) => {
                    //data state 값의 fruit값을 변경해주기
                    console.log(e.target.value); // 선택된 과일을 가져옴

                    //spread 연산자 (...연산자 > 이전값 모두복사 붙여주기됨)
                    // - 객체의 복사본을 만들때 유용한 JS문법
                    // - 객체의 모든 속성을 퍼져서 새로운 객체를 만들어줌! 원본은 유지! 복사본으로!
                    setData((data) => {
                        return { ...data, fruit: e.target.value };
                        //data 배열 리스트 중에서 fruit값만 변경된 fruit로 교체해달라는 의미임
                        //즉 fruit 속성만 변경되고 나머지는 그대로 유지! = 원본의 불변셩 유지
                    });
                }}
            >
                <option value="apple">사과</option>
                <option value="peach">복숭아</option>
                <option value="banana">바나나</option>
            </select>
            배경색:
            <select
                onChange={(e) => {
                    setData((data) => {
                        return { ...data, background: e.target.value };
                    });
                }}
            >
                <option value="black">검정</option>
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
            </select>
            글자색:
            <select
                onChange={(e) => {
                    setData((data) => {
                        return { ...data, color: e.target.value };
                    });
                }}
            >
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="yellow">노랑</option>
            </select>
        </div>
    );
}
