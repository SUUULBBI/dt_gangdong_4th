import React, { useMemo, useState } from 'react';

// useMemo
// - 비용이 큰 연산(복잡한 계산이나 반복적인 연산)이 포함된 컴포넌트가 리렌더링될 때,
// - 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화. (JSX도 가능)
//   (캐쉬에 임시로 계산값 등의 메모리를 저장해두고 재랜더링시 연산이 다시 되지 않도록함. -> 따라서 성능최적화에서 많이 사용함)

export default function UseMemoEx() {
    const [count, setCount] = useState(0); // 재랜더링일 때 초기값! (재랜더링용임)
    const [input, setInput] = useState('');

    // 임의의 큰 연산을 하는 함수 만듬!

    // [before] 일 때
    //  - 버튼을 누를 때에도 input값을 입력할 때에도 연산이 모두 이루어짐 ( calc 함수 매번 호출)
    const calc = () => {
        let sum = 0; // 초기값0
        for (let i = 0; i < 1000; i++) {
            console.log('열심히 계산중..');
            sum += i; // sum= sum+i
        } // 시간 소모적인 작업을 만들어뒀음
        return sum + count;
    };

    // [after] useMemo 적용
    //  - count의 값이 바뀔때마다 함수를 실행해주세요.
    //  - input 상태가 바뀌면 컴포넌트는 리렌더링 되지만 calcMemo는 연산되지 않음
    const calcMemo = useMemo(() => {
        let sumMemo = 0;
        for (let i = 0; i < 1000; i++) {
            console.log('열심히 계산중... memo');
            sumMemo += i;
        }
        return sumMemo + count;
    }, [count]); // [count] : 카운트가 변경될 때만 계산 수행한다는 조건임

    return (
        <div>
            <h1>UseMemo Ex</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {/* button plus 클릭시 count+1 값 가져오기 */}
            <button onClick={() => setCount(() => count + 1)}>Plus</button>
            <p>count:{count}</p>

            {/* [before] */}
            <p>calc: {calc()}</p>

            {/* [after] useMemo 적용 */}
            <p>calcMemo : {calcMemo}</p>
        </div>
    );
}
