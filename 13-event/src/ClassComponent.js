// 클래스 컴포넌트에서의 이벤트 사용.
// - 화살표 사용 (es6)

import React, { Component } from 'react';

export default class ClassComponent extends Component {
    /**
     * 화살표 함수의 'this'는 상위 스코프의 'this'를 참조하므로 바인딩이 필요없음
     *  = Lexical this = 렉시컬 스코프의 this라고도 함..
     *   즉 == 자신만의 this를 가지지 않음..
     */

    //아래 printConsole 관련 설명
    //msg, msg2 : 추가로 전달되는 인자
    // evt : 이벤트 객체를 뜻함.
    // - 리액트는 이벤트 객체가 자동으로 첫 번째 인수로 들어가짐. 따라서
    // - 이벤트 객체가 마지막 매개변수로 오는 것이 일반적임.(코드 작성시 관례로)
    printConsole = (msg, msg2, evt) => {
        console.log('evt>>>', evt);
        // console.log('evt.target >>> ', evt.target);
        // console.log('evt.currentTarget >>> ', evt.currentTarget);
        console.log('msg>>>', msg);
        console.log('msg2>>>', msg2);
        console.log('this>>>', this); // this는 클래스 인스턴스를 참조함 (바인딩은 필요하지 않음)
        console.log('------------------');
    };
    render() {
        return (
            <>
                <div>ClassComponent</div>
                {/*  이벤트 객체와 인자 전달 방법 - 인자 o */}
                {/* **합성 이벤트는 인자로 따로 넘겨주지 않아도,, 알아서! 자동으로 이벤트 객체로 넘어가지기 때문에 매개변수를 따로 해주지 않아도 알아서 됨. */}
                <button
                    onClick={(e) => {
                        this.printConsole('msg', 'msg2', e);
                    }}
                >
                    printConsole(인자 있음)
                </button>

                {/*  이벤트 객체만 전달하는 방법  - 인자 x */}
                <button onClick={this.printConsole}>
                    printConsole(인자없음)
                </button>
            </>
        );
    }
}
