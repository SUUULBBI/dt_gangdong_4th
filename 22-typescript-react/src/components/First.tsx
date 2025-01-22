import React from 'react';

interface FirstProps {
    title: string;
    children: React.ReactNode;
}
/** React.ReactNode 란?
 * - React에서 사용되는 모든 렌더링 가능한 요소들을 포함하는 타입
 * - 즉, 컴포넌트의 children으로 전달될 수 있는 모든 값을 수용하겠다는 의미.
 *    ㄴ 다양한 유형의 값을 받을 수 있음
 */
export default function First({ title, children }: FirstProps) {
    return (
        <div>
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    );
}
