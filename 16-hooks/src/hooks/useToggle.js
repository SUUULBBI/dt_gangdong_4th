// 커스텀훅 만들기 1번.
// (*훅을 만들고 component 파일을 따로 만들어서 해당 훅을 가져다가 사용하는 방식임 --> 사용한 파일은 Faq.js 참고)
import React, { useState } from 'react';

// [Custom Hook #1. ]
//  만들 기능 ? 토글 상태를 관리하고 전환하는 기능 구현하기 !!!!

// Custom Hook 만들 때 고려해야할 점?
//   ㄴ 1) 훅의 목적 정의
//   ㄴ 2) 기능 설계
//   ㄴ 3) 구현

/**
 * Custom Hook 커스텀 훅의 특징
 *  - custom hook 은 단순한 Javascript 함수 일뿐이다.
 *      - 따라서 컴포넌트와 달리 props개념이 사용할 수 없음
 *      - 대신, 함수의 매개변수를 통해 초기값 설정은 가능하다
 *  - 컴포넌트가 아니라 UI를 반환하지 않고 대신에 필요한 값(상태/함수 등)을 반환해줌
 */

// function useToggle(initValue = false) : 초기값 false와 같이 초기값 설정 가능
export default function useToggle(initValue = false) {
    //  초기상태 설정
    const [value, setValue] = useState(initValue);

    // 상태 전환 함수
    // newValue값이 boolean 타입이라면 그값을 그대로 가져와주고(? newValue), 그것이 아니라면 기존 동작의 반대(!)로 해줘.
    //  ㄴ1) newValue가 boolean 타입이면 해당 값으로 상태 설정 ( =명시적 설정)
    //  ㄴ2)아니라면 기존 상태를 반전해줘. (= 기존 토글 동작 지원한다)
    const toggleValue = (newValue) => {
        setValue((current) =>
            typeof newValue === 'boolean' ? newValue : !current
        );
    };

    // 훅의 결과로 반환할 값들을 정의해주기
    //  - 훅의 목적에 맞는 적절한 변환 형식을 선택하기

    return [value, toggleValue];
    // 현재 상태인 value와 상태변환함수toggleValue 를 반환해줘.
}
