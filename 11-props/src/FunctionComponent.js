// 함수형 컴포넌트
// - 간단한 함수 형태로 컴포넌트 정의.
// - 간단한 문법, React Hooks 등 더 유용한 기능을 제공하기 때문에
//    클래스컴포넌트보다는 함수형 컴포넌트를 사용하는 것이 권장됨. (*더 많이 사용중)

import PropTypes from 'prop-types';

// 1) 함수 선언문 방식
// function FunctionComponent() {
//     return <h1>여기는 function component</h1>;
// }
//export default FunctionComponent;

// 2) 화살표 함수 방식
const FunctionComponent = ({ name = 'Sally', age = 28 }) => {
    // #1. 변수 선언 (=지역변수 선언)
    const student = '춘향';
    //console.log('props >>>', props); >> 이건 아래 2-2 일때만 해도 되고, 밑에처럼 name,age 할때는 주석처리해야함.
    // #2-2. 구조 분해 할당 (최신 방식임.)
    // const { name, age } = props; >> 이렇게 할거면 위 화살표 함수 방식에서 (props)넣어서 진행하고 이게 아니라 아래와 같이 할거면
    // + ) 매개변수에 직접 넣어서 구조분해할당 해도 됨. >> ({name, age}) 직접 넣어주기. *반복막고 간편함.

    // #3. defaultProps 매개변수 문법 활용. * 아래와 같이 해도 됨.
    //const FunctionComponent = ({ name= "Sally", age=28 }) => {

    return (
        <>
            <h1>여기는 function component</h1>
            <h2>Hello, {student}</h2>

            {/* #2. Props 사용  */}
            {/*   - 함수의 매개변수로 props를 받아서 사용. */}
            {/*   - props.xxx 형태로 추력 */}

            <p>
                {/* #2-1. 전체 Props로 넘겨줄 때 (=구조분해할당 x)
                새로운 리더의 이름은 <b>{props.name}</b>
                <br />
                나이는 <b>{props.age}</b> */}
                {/* #2-2. 전체 Props로 넘겨줄 때 (=구조분해할당 o) */}
                새로운 리더의 이름은 <b>{name}</b>
                <br />
                나이는 <b>{age}</b>
            </p>
        </>
    );
};

// #3. defaultProps 설정
//  - 클래스 외부에서 설정 (*이제 잘 안사용할 것임. 왜냐하면 18버전이후 지원 중단 예정이라고 함. )
// FunctionComponent.defaultProps = {
//     name: 'Sally',
//     age: 24,
// };

// #4. propTypes 설정
//  - 함수 외부에서 설정.
FunctionComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

// (!) 함수 외부 defaultProps와 충돌.
// -> React 18 이후 부터 함수형 컴포넌트에서 defaultProps 지원을 중단할 예정임.
//  -> 왜냐하면 매개변수 문법 활용방안이 있기 때문에.

// (!) 기본 매개변수 문법 사용시 propTypes 에서 isrequired 와 충돌남..
//  -> 기본 매개변수를 사용하면 propTypes에서 isRequired를 제거하는 것이 일반적임.
//    -> 기본 값으로 설정되어 있기 때문에 undefined가 될 가능성이 없으므로 isRequired가 불필요하기 때문임.

export default FunctionComponent;

// 콘솔 로그 2개씩 찍히는 이유?
//  -> React18 부터, React.StrictMode가 기본적으로 활성화됨.
//   이는 개발 모드에서 컴포넌트의 랜더링과 life cycle 매서드가 두번씩 호출되도록 하여 부작용(side effects)을 테스트하고 식별하는데 도움을 줌.
//   이로 인해 콘솔로그가 두번씩 찍힐 수 있음.
