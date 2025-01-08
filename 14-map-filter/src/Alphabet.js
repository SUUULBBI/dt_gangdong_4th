import React, { useState } from 'react';

export default function Alphabet() {
    // 1-1. 배열 ex
    // const [alphabet, setAlphabet] = useState(['D', 'e', 'm', 'o']);

    // 1-2. 배열 안에 객체형태 일때 ex
    const [alphabet, setAlphabet] = useState([
        { id: 1, alpha: 'a' },
        { id: 2, alpha: 'p' },
        { id: 3, alpha: 'p' },
        { id: 4, alpha: 'l' },
        { id: 5, alpha: 'e' },
    ]);

    // input 데이터 상태 관리
    const [inputAlpha, setInputAlpha] = useState('');

    // #1. 글자 추가 기능
    const addAlpha = () => {
        // Quiz ( 1 ) input이 빈 값이 라면 alphabet 상태가 변경되지 않도록 하는 코드 만들어보기
        // quiz1-1. trim 활용한 방법으로 빈값 저장안되도록
        if (inputAlpha.trim().length === 0) {
            return;
        }

        // 혹은 1-2. 아래와 같이도 빈 값 저장안되고 alert 나오게 함.
        // if (inputAlphaㅁ === '') {
        //     alert('Input box is empty. Please enter something.');
        //     return;
        // }

        // * concat
        //   = 배열, 문자열을 결합하는데 사용되는 메서드임.
        //    - 기존 배열, 문자열을 변경하지 않고 주어진 배열이나 값들을 '새로운' 배열이나 문자열로 결합하여 반환해줌.
        const newAlpha = alphabet.concat({
            // alphabet concat = 이어서 새로운 배열 생성하기.
            id: alphabet.lenth + 1, // 알파벳 배열길이 + 1 로 신규 id를 생성해줘
            alpha: inputAlpha, // 인풋창에 작성한 내용이 신규 alpha로 들어가도록
        });

        setAlphabet(newAlpha); // 새로운 알파벳으로 바꿔치기 해줘라는 함수사용한 것
        setInputAlpha(''); // 위의 것이 순차적으로 진행되면서 빈문자열이 되도록 초기화하기 위해 추가한 함수임.
        console.log('newAlpha>>>', newAlpha);
    };

    // Quiz ( 2 ) input에서 "enter"키 누르면서 추가되도록 만들기
    // #2. 키보드 이벤트 핸들러
    const handleKeyDown = (e) => {
        console.log(e.nativeEvent.isComposing);
        /** *** 한글 입력시 2개씩 입력되는 현상?
         *  = IME(입력기) 사용 시 발생하는 현상임
         *
         *  - e.nativeEvent.isComposing :  입력중인 상태를 나타내는 속성임..
         *      ㄴ e.nativeEvent.isComposing === true : 사용자가 IME로 아직 문자를 입력중임을 뜻함
         *      ㄴ e.nativeEvent.isComposing === false : 입력이 확정되어 최종 문자로 처리가 가능한 상태를 뜻함
         */
        if (e.nativeEvent.isComposing) return; // 조건만 넣으면 이것이 true 다라는 전제가 깔림. 즉 true일때 반환해라! = IME 입력 중일때는 처리하지 않는다.

        console.log(e);
        console.log(e.code);
        console.log(e.keyCode);

        if (e.code === 'Enter') {
            addAlpha();
        }
        if (e.keyCode === 13) {
            addAlpha();
        }
    };

    // #3. 글자 삭제 기능
    const deleteAlpha = (targetId) => {
        console.log('targetId >>> ', targetId); // targetId : 더블클릭 하여 삭제될 요소의 key (id)

        //삭제할 id와 일치하지 않는 애들로 새로운 새로운 배열 생성해줌
        const newAlpha = alphabet.filter(
            (alpha) => alpha.id !== targetId // [1, 2, 3, 5] [같지않다면 반환해주고, 같은 값이 온다면 제외시켜짐.]
        );
        setAlphabet(newAlpha);
    };

    // #4. 이벤트 위임방식 사용하기
    const handleDoubleClick = (e) => {
        // 이벤트핸들러가 ol 요소에 설정되어 있기 때문에
        //  - 이벤트 위임을 통해 이벤트가 발생한 실제 요소가 무엇인지 확인하고, li 태그인 경우에만 삭제 기능을 실행토록하기 위해 이제부터 코드를 짤 것임..

        // 따라서 이벤트가 발생한 요소가 li 태그인지 확인해야함
        if (e.target.tagName === 'LI') {
            console.log('e.target>>>', e.target); //li태그인지 확인하기 위한 콘솔
            console.log('e.target.id>>>', e.target.id); // 선택된 아이디 속성 확인하는 콘솔
            console.log('타입 : ', typeof e.target.id); // 선택된 아이디 속성은 숫자이더라도 '문자열string'으로 반환됨 > 따라서 숫자로 형변환 필요하여 아래에서 Number로!

            const targetId = Number(e.target.id); //선택된 아이디 속성은 숫자이더라도 '문자열string'으로 반환되기 때문에 숫자로 형변환 필요하여 Number로 감싼것!
            deleteAlpha(targetId);
        }
    };

    return (
        <>
            <h1>Map & Fliter </h1>
            {/* <ol> */}
            {/* 1-1. 배열 ex */}
            {/* return 키워드 있을때 */}
            {/* {alphabet.map((value, idx) => {
                    return <li key={inx}>{value}</li>; // {value} : 현재요소를 출력하겠다는 뜻
                })}

                {/* return 키워드 x, 중괄호x 소괄호ㅇ */}
            {/* {alphabet.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))}{' '}*/}

            {/* -------------------------- */}

            {/* 1-2. 배열 안에 객체일 때 ex */}
            {/* {alphabet.map((value) => {
                    return <li key={value.id}>{value.alpha}</li>;
                })}
            </ol> */}

            {/* ##1. 알파벳 추가하기 기능만들기 */}
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => {
                    setInputAlpha(e.target.value);
                }}
                // Quiz ( 2 ) input에서 "enter"키 누르면서 추가되도록 만들기
                // #2. 키보드 이벤트 핸들러
                onKeyDown={handleKeyDown}
            />

            <button onClick={addAlpha}>ADD</button>

            {/* #3. 알파벳 삭제하기 기능 추가 */}
            <ol>
                {alphabet.map((value) => (
                    <li
                        key={value.id}
                        onDoubleClick={() => deleteAlpha(value.id)}
                    >
                        {value.alpha}
                    </li>
                ))}
            </ol>

            {/*  #4. '이벤트 위임' 방식 적용하기! >> 효율성이 증가됨! */}
            <h2>이벤트 위임 방식</h2>
            <ol onDoubleClick={handleDoubleClick}>
                {alphabet.map((value) => (
                    <li key={value.id} id={value.id}>
                        {value.alpha}
                    </li>
                ))}
            </ol>
        </>
    );
}

// concat 예제 (*스프레드 연산자... 와 비슷함)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2); // arr1과 arr2 결합해줌
console.log(arr3); // 1,2,3,4,5,6
