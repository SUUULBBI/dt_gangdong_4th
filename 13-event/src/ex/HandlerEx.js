// 코딩온 실습 >> 이벤트 핸들링 실습 1번

// 클래스 형 컴포넌트,,

import React, { Component } from 'react';

export default class HandlerEx extends Component {
    state = {
        message: 'Hello World!',
    };

    handleClick = () => {
        this.setState({ message: 'Goodbye World!' });
    };

    render() {
        return (
            <div>
                {' '}
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>Change Message</button>
            </div>
        );
    }
}
