import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ClassComponent2 extends Component {
    render() {
        const { text, valid } = this.props;

        return (
            <div>
                <p>{text}</p>
                <button onClick={valid}>Click Me</button>
            </div>
        );
    }
}

// 기본 props 설정
ClassComponent2.defaultProps = {
    text: '이건 기본 text props입니다.',
};

// PropTypes 설정
ClassComponent2.propTypes = {
    text: PropTypes.string.isRequired, // text는 필수이며 문자열이어야 함
    valid: PropTypes.func.isRequired, // valid는 필수이며 함수여야 함
};

class App extends Component {
    handleValid = () => {
        console.log('콘솔 띄우기 성공!');
    };

    render() {
        return (
            <div>
                <ClassComponent2
                    text="Hello, React!"
                    valid={this.handleValid}
                />
                {/* 아래는 text를 전달하지 않는 경우 */}
                <ClassComponent2 valid={this.handleValid} />
            </div>
        );
    }
}

export default App;
