import React, { useState } from 'react';

const ChangeTextColor = () => {
    const [message, setMessage] = useState('검정색 글씨');
    const [color, setColor] = useState('black');

    const handleColorChange = (color) => {
        setMessage(color === 'red' ? '빨간색 글씨' : '파란색 글씨');
        setColor(color);
    };

    return (
        <div>
            <h1 style={{ color: color }}>{message}</h1>
            <button
                onClick={() => {
                    handleColorChange('red');
                }}
            >
                빨간색
            </button>
            <button
                onClick={() => {
                    handleColorChange('blue');
                }}
            >
                파란색
            </button>
        </div>
    );
};

export default ChangeTextColor;
