// 클래스형 컴포넌트 (최신 버전 - React 16.3 이후)

// #8. PropTypes 가져오기.
import PropTypes from 'prop-types';

// #1. React.Component 상속
// 1) React.Component 방식
// import React from 'react';
// ㄴ React 라이브러리 가져오기.

// 2) { Component } 방식 // 더 많이 사용
import React, { Component } from 'react';

/**
 * React.Component 란?
 * - React 라이브러리에서 제공하는 클래스.
 * - 모든 React 클래스형 컴포넌트의 기본 부모 클래스이다.
 * - 이 부모 클래스가 React 컴포넌트로서 동작하는 데 필요한 기능과 메서드들을 제공함.
 */

// 1)
// class ClassComponent extends React.Component {}

// 2)
class ClassComponent extends Component {
    // #2. state 필드 선언 (초기값 설정)

    /**
     * 필드란?
     * - 클래스 내부에 정의된 "속성"을 의미.
     * - 즉, 클래스의 인스턴스가 만들어질 때 자동으로 초기화되는 변수라고 생각.
     */
    student = '홍길동';
    // 클래스 내부에서 선언한 속성은 this.속성명 으로 접근 가능.

    // #7-2. Default Props
    // - 필드 형태로 설정.
    // - React 16.3 이후 버전.
    // Q) static 키워드란?
    // - 클래스 내부에서 정적(static) 속성이나, 메서드를 정의할 때 사용하는 키워드.
    static defaultProps = {
        place: '강동캠퍼스 (static)',
    };

    // #8-2. PropTypes
    // - 필드 형태로 설정
    static propTypes = {
        place: PropTypes.string,
    };
    render() {
        // #3. render 메서드 정의
        // - 클래스형 컴포넌트 render 메서드 필수!
        const leader = 'Damon'; // render 메서드 내부의 지역변수
        console.log('props: ', this.props); // 객체 형태

        // #6. Props 사용 2 (구조 분해 할당)
        const { place } = this.props;

        return (
            // return에 실제로 보여주고 싶은 html 요소 작성
            <>
                {/* #4. this로 필드(속성) 참조 */}
                <h1>여기는 Class Component</h1>
                <h2>Hello, {this.student}</h2>
                <h3>My name is {leader}</h3>

                {/* #5. Props 사용. */}
                {/* React가 Props 객체를 컴포넌트의 인스턴스 속성으로 전달하기 때문에 this 사용 */}
                {/* <div>Info : {this.props.place}</div> */}

                {/* #6. Props 사용 2 */}
                <div>Info: {place}</div>
            </>
        );
    }
}
// #7. Default Props (props 기본 값 설정)
// : 부모 컴포넌트에서 props 미전달시 기본 값으로 보여줄 props 설정.
// - 클래스 외부에서 설정.
// - 초기부터 사용된 전통 방식.
// ClassComponent.defaultProps = {
//     place: '강동캠퍼스',
// };

// #8. PropTypes
// - Props의 타입을 검사하기 위한 도구.
// - 클래스 외부에서 설정
// - npm list prop-types
// -> 패키지 확인.
// -> 없으면 설치 : npm i prop-types

ClassComponent.propTypes = {
    place: PropTypes.string,
    // "필수" 설정
    // number: PropTypes.number.isRequired,
};

export default ClassComponent;
