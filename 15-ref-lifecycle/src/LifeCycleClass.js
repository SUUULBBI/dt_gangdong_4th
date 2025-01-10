import React, { Component } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
    state = { number: 0, visible: true };

    changeNumberState = () => {
        return this.setState({
            number: this.state.number + 1,
        });
    };

    changeVisibleState = () => {
        return this.setState({ visible: !this.state.visible }); //visible=false 인 상태,  on:true / off: false
    };
    //
    render() {
        return (
            <div>
                <h2>LifeCycleClass.js</h2>
                <div>부모컴포넌트</div>
                <button onClick={this.changeNumberState}>Plus</button>
                <button onClick={this.changeVisibleState}>on/off</button>

                {/* 단축평가 && 사용해서 자식컴포넌트 on / off 되도록하기 */}
                {this.state.visible && (
                    <LifeCycleClassChild number={this.state.number} />
                )}
            </div>
        );
    }
}

/**
 *  * 단축 평가 * (&&)
 *     ㄴ 하는 이유 ? 불필요한 평가(조건비교확인)를 건너뛰고 결과를 바로 반환하는 방법임.
 *
 * * 사용 방법
 *  1) A && B
 *          : '논리곱'이라고 부르기도 함. >> a,b 모두 참이면 '참' 반환
 *          : a 참이면 b반환
 *          : b 거짓이면 b 평가하지 않음 (a 출력함)
 *
 *  2) A || B
 *          : '논리합'이라고도 함. >> a, b 둘 중 하나라도 '참'이면 '참' 반환
 *          : a가 참이면  b 평가하지 않음 > a 출력함
 *          : a 거짓이면 b 반환
 *
 * [공식 문서 기준 내용]
 *  ex1) true && anything -> 반환 하는 것은? anything 반환 (*논리곱)
 *  ex2) false && anything -> false 반환
 *
 *  ex3) true || anything  -> true 반환 (*논리합)
 *  ex4) fasle || anything ->  anything 반환
 */
