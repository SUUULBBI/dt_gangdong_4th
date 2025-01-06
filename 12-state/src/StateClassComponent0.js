// 코딩온 state실습 - 1번 클래스형 컴포넌트

import React, { Component } from 'react';

export default class StateClassComponent0 extends Component {
    state = {
        number: 0,
    };

    // 숫자 증가 함수
    increase = () => {
        this.setState((prevState) => ({ number: prevState.number + 2 }));
    };

    // 숫자 감소 함수
    decrease = () => {
        this.setState((prevState) => ({ number: prevState.number - 1 }));
    };

    render() {
        // 구조 분해 할당
        const { number } = this.state;

        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>state 실습 1번 - 클래스형 컴포넌트</h1>
                <h1>Number: {number}</h1>
                <button
                    onClick={this.increase}
                    style={{
                        marginRight: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                    }}
                >
                    +2
                </button>
                <button
                    onClick={this.decrease}
                    style={{ padding: '10px 20px', fontSize: '16px' }}
                >
                    -1
                </button>
            </div>
        );
    }
}
