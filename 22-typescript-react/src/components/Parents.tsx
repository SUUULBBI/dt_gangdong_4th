import React from 'react';
import Student from './Student';

// 학생 데이터
const studentData = {
    name: 'damon',
    age: 20,
    major: '컴퓨터공학',
};

const handleClick = (name: string, major: string): void => {
    console.log(`나의 이름은 ${name}이고, 전공은 ${major}이야.`);
};

export default function Parents() {
    return (
        <div>
            <h1>부모 컴포넌트</h1>

            {/*  #1) 직접 넣어주는 방법 */}
            {/* <Student
                name={studentData.name}
                age={studentData.age}
                major={studentData.major}
            ></Student> */}

            {/*  #2)  */}
            <Student data={studentData} handleClick={handleClick}>
                <p>자식 컴포넌트의 children 영역</p>
            </Student>
        </div>
    );
}
