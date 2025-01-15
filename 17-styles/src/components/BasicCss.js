import React from 'react';
import '../styles/basic.css';
// #1. 일반 CSS 파일 import 해서 사용
// - 모든 컴포넌트가 동일한 스타일 공유

/**
 * [장점]
 * - 학습곡선이 낮음.
 * - 외부 CSS 라이브러리 쉽게 적용.
 *
 * [단점]
 * - 전역 스타일 오염
 * - 모든 컴포넌트가 같은 클래스를 공유하기 때문에 스타일 충돌 가능성이 높음.
 * - 유지보수 어려워질 수 있음.
 */

export default function BasicCss() {
    return (
        <div className="BasicCss">
            <header>
                <h1 className="BasicCss__title--red">기본 CSS</h1>
                <button className="basicButton">Click!</button>
                <button className="BasicCss-btn">Click Click</button>
            </header>
        </div>
    );
}
// [해결 방안]
// 컴포넌트별 고유한 클래스명 지정하기.

/**
 * 1) 이름 규칙 정하기
 * "컴포넌트 이름" - "클래스 명" 형태로 이름 작성
 * = 컴포넌트 이름과 연결하여 고유하게 만들기
 */

/**
 * 2) BEM 네이밍 방식
 * (Block, Element, Modifier) 네이밍 규칙 사용
 * = (컴포넌트, 요소, 상태 or 변형)
 */

/**
 * 3) CSS Selector
 * - HTML 구조에 따라 스타일 지정
 * - "부모 요소" 기준으로 하위 요소를 선택하는 방식.
 */
