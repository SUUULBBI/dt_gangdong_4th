import React from 'react';

// # interface 사용한 props 타입 정의 (부모컴포넌트에서 가져와서 쓸것 미리 정의)
// 학생 데이터를 위한 인터페이스
interface StudentData {
    name: string;
    age: number;
    major: string;
}

// #1) 직접 넣어주는 방법
// export default function Student({ name, age, major }: StudentData) {
//     return (
//         <div>
//             <h1>자식 컴포넌트 </h1>
//             <li>이름: {name}</li>
//             <li>나이: {age}</li>
//             <li>전공: {major}</li>
//         </div>
//     );
// }

// #2)
// 부모로 부터 받을 props 타입 정의해주기
interface StudentProps {
    data: StudentData; // 객체 형태로 전달된 data prop
    children?: React.ReactNode;
    handleClick(name: string, major: string): void;
}

export default function Student({ data, children, handleClick }: StudentProps) {
    const { name, age, major } = data;
    return (
        <div onClick={() => handleClick(name, major)}>
            <h1>자식 컴포넌트</h1>
            <li>이름 : {name}</li>
            <li>나이 : {age}</li>
            <li>전공 : {major}</li>
            {children}
        </div>
    );
}
