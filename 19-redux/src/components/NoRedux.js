import React, { useState } from 'react';
import '../styles/Box.css';

export default function NoRedux() {
    const [number, setNumber] = useState(100);
    const plus = () => setNumber(number + 1);
    const minus = () => setNumber(number - 1);

    return (
        <div>
            <h1>NoRedux</h1>
            <h2>Redux를 사용하지 않ㅇ르 때 Props로 전달</h2>

            {/* NoRedux : 부모컴포넌트 / Box1 : 자식컴포넌트  >> 꼬꼬무 만들기*/}
            <Box1 number={number} plus={plus} minus={minus} />
        </div>
    );
}

// 아래는 Box1 컴포넌트임.
//   ㄴ 다만 export하지 않았으니 다른 곳에서는 못쓰고 여기 파일에서만 쓸 수 있는 컴포넌트임
const Box1 = ({ number, plus, minus }) => {
    return (
        <div className="Box">
            <h2>Box1:{number} </h2>
            <Box2 number={number} plus={plus} minus={minus} />
        </div>
    );
};

// Box2 컴포넌트
const Box2 = ({ number, plus, minus }) => {
    return (
        <div className="Box2">
            <h2>Box2: </h2>
            <Box3 number={number} plus={plus} minus={minus} />
        </div>
    );
};

// Box3 컴포넌트
const Box3 = ({ number, plus, minus }) => {
    return (
        <div className="Box3">
            <h2>Box3: </h2>
            <Box4 number={number} plus={plus} minus={minus} />
        </div>
    );
};

// Box4 컴포넌트
const Box4 = ({ number, plus, minus }) => {
    return (
        <div className="Box4">
            <h2>Box4: {number}</h2>
            <button onClick={plus}>plus</button>
            <button onClick={minus}>minus</button>
        </div>
    );
};
