// 클래스컴포넌트로 REf 연습 - render , this.~

import React, { Component } from 'react';

export default class RefSample3 extends Component {
    handleFocus = () => {
        console.log('this>>>', this); //this = 컴포넌트 자기 자신 출력

        //#2. ref로 선택한 요소에 접근해서 사용
        this.inputRef.focus();
        console.log('this.inputRef.focus>>', this.inputRef.focus); // <input></input>
    };

    render() {
        return (
            <div>
                <h2>RefSample3.js</h2>
                <p>클래스형 컴포넌트에서 버튼 클릭시 input에 focusing 처리!</p>

                {/* #1. ref 속성에 ref prop 설정 */}
                <input
                    type="text"
                    // 만들어진 변수 InputRef에 해당 요소의 ref prop로 넣어주면 ref 설정이 완료됨!

                    ref={(inputEl) => {
                        this.inputRef = inputEl; //  inputEl => <input></input>
                    }}
                />

                {/* ref를 사용하는 목적은 요소 선택임!!  
                    >>> inputRef라는 변수를 만들어서 사용하려고 하는 목적임
                    >>> inputEl 를 통해서 input 태그와 연결 시켜주려고함 */}

                {/* #3. 함수 handleFocus 실행하기 */}
                <button onClick={this.handleFocus}>Focus</button>
            </div>
        );
    }
}

/**
 * ref 속성에 함수를 전달
 * DOM 요소가 랜더링 될 때 해당 요소를 직접 다룰 수 있게 함..
 *
 * 콜백함수는 <input>이 랜더링 될때 실행되며 inputEl에 해당 DOM요소가 전달됨..
 * >> 이 전달된 DOM요소를 클래스의 속성인 this.inputRef에 저장하여 이후에 사용할 수 있음
 */
