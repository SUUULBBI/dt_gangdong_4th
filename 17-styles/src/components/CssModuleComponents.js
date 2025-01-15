import React from 'react';
import styles from '../styles/CssModule.module.css';
// #2. CSS Module 사용하기
/**
 * - 클래스명 중복 방지
 * - 반드시 .module.css 확장자로 파일 만들기
 * - CSS Module 파일ㅇ르 import 한 후 , 객체 형태로 클래스명을 사용하기
 *
 * [장점]
 *  - 스타일 충돌 방지
 *  - 컴포넌트 기반 스타일링 가능
 *
 * [단점]
 * - 동적 클래스명 조합이 번거로움
 * - 매번 네이밍 module.css 작성 해야하는 것이 번거로움
 *  */

// styles 객체에 module.css에서 정의한 클래스명이 속성으로 들어감
console.log('styles >> ', styles);
// box : "cssModule_box__dUA33"
// container : "cssModule_container__ObhxW""
// => Module 사용시, 클래스명이 자동으로 고유한 이름으로 변환.

export default function CssModuleComponents() {
    return (
        <div className={styles.container}>
            <h1>Module Css</h1>
            {/* 두 클래스를 동시에 적용하기 --> 
    [join 방법] 
        배열의 요소들을 문자열로 합쳐서 클래스명을 한 줄로 만듦.
         또한 Join(' ') 메서드를 함께 사용하여 배열의 요소들을 공백으로 구분된 문자열로 반환할 수 있음

   [백틱 사용법`${} ${}` ]
        백틱 사용한 템플릿 리터럴. 두 클래스 동시 사용가능하며  */}
            {/* 2가지의 css module 사용하는 방법 ? 
               ---> 1) 아래와 같이 {[ㅇ,ㅇ].join(' ')}형태로 작성하기 */}
            <div className={[styles.red, styles.box].join(' ')}>1</div>
            <div className={styles.orange}>2</div>
            {/* 2가지의 css module 사용하는 방법 ? 
               ---> 2) 아래와 같이 백틱 사용법`${} ${}`형태로 작성하기 */}
            <div className={`${styles.box} ${styles.yellow}`}>3</div>{' '}
        </div>
    );
}
