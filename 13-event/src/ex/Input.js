import React from 'react';

export default function Input({ setData }) {
    const handleInput = (e) => {
        setData((data) => {
            return { ...data, content: e.target.value };
        });
    };

    return (
        <div>
            내용: <input type="text" onChange={handleInput} />
        </div>
    );
}
