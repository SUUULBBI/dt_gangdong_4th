import React from 'react';

export default function SyntheticEvent() {
    function synEvent(e) {
        console.log('합성이벤트 버튼 클릭');
        console.log(e); // 콘솔에 찍히는 e객체는 합성 이벤트
    }
    //* Synthetic Event 란? (합성된, 인공적으로 만들어진)
    //  - 리액트에서 제공하는 '합성 이벤트', 브라우저의 기본 DOM 이벤트를 추상화한 객체.
    //  - 브라우저마다 이벤트 이름과 종류 등등 이벤트를 처리하는 방식이 다르기 때문에 이를 동일하게 처리하기 위해 React에서 사용하는 이벤트 객체임.

    /**
     * 특징
     * 1. 리액트가 자체적으로 관리하는 이벤트 객체, 브라우저의 기본 이벤트와 비슷한 인터페이스를 가진다
     * 2. Cross-Browser Compatibility
     *   - 브라우저별로 이벤트 처리 방식이 다르더라도 브라우저 간 차이를 신경쓰지 않아도 됨
     * 3. **이벤트 위임 ** 방식을 사용하여 최상위 요소에서 이벤트를 관리한다. => 성능 최적화
     *  */

    /** 이벤트 위임이란?
     * 리액트는 개별 DOM요소에 직접 이벤트 핸들러를 등록하지 않고 '최상위 요소'에 이벤트 핸들러를 등록 한 후, 이벤트가 발생하면 이벤트 객체를 트리거된 요소까지 전파한다.
     *
     * [개발 시]
     * - 실제 개발시에 보통으로, 코드에서 이벤트 위임을 구현할 때는 주로 '부모 요소'에 이벤트 핸들러를 등록하긴 함..
     *  = 즉, 모든 이벤트 처리를 효율적으로 관리가 가능해짐..
     */

    function printInputValue(event) {
        console.log(event.target.value);
    }

    return (
        <>
            <div>SyntheticEvent</div>
            <div>
                <button onClick={synEvent}>합성 이벤트 콘솔에 찍기</button>
            </div>
            <br />
            <input
                type="text"
                placeholder="입력하세요"
                onChange={printInputValue}
            />
        </>
    );
}
