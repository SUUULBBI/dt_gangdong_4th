import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <h1>header</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
            </ul>
        </div>
    );
}
/**
 * #4. Link 컴포넌트
 *  - SPA에서 페이지 간 이동을 제공하는 요소임
 *  - HTML의 <a>태그처럼 동작하지만, 새로고침없이 경로를 변경하기 때문에 더 빠르고 부드러운 ux를 제공함
 *  - Link to : to의 경우 필수 속성임. 이동할 경로 지정해주어야함
 */
