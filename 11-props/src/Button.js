import './Button.css';
// props.children
//  - 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 작성한 내용.
//  - 문자열, 숫자, JSX, 배열 등 다양한 형태가 올 수 있음.

//#1. 단일 자식 요소 전달 (방법2가지)

//아래는 구조분해 할당을 하지 않은 버전.
// const Button = (props) => {
//     return (
//         <>
//             <a href={props.link}>
//                 <button>{props.children}</button>
//             </a>
//         </>
//     );
// };

//구조분해 할당 후 default값 넣어준 버전
const Button = ({ link = 'https://www.naver.com', children = '네이버' }) => {
    return (
        <>
            <a href={link}>
                <button className="Button">{children}</button>
            </a>
        </>
    );
};

export default Button;
