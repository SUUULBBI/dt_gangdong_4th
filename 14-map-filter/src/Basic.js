import React from 'react';

export default function Basic() {
    /**
     * - 모든 배열 뒤에 .map 으로 사용할 수 있음
     * - array 자료의 개수만큼 함수 안의 코드를 실행해줌
     * - return 안에 있는 것들을 새로운 array로 반환해줌
     * - index => 반복문 돌 때마다 0부터 1씩 증가
     *
     * [구문 분석]
     * # arr.map(callackFuction, [thisArg])
     *
     * - callbckFunction : 배열의 각 요소를 순회하며 반복 실행할 함수
     * - (currentValue, index, array) 3개의 인수를 가짐
     *
     * -- currentValue : 배열의 현재 요소
     * -- index ; 현재 요소의 인덱스=위치임. (선택사항)
     * -- array : 'map()'이 호출된 원본 배열임. (단, 선택사항이며 대부분 안씀)
     *
     * - [thisArg] : 콜백함수 내부에서 this로 사용할 값을 지정함 / (단, 선택사항이며 대부분 안씀)
     *
     */

    //원본 배열
    const numbers = [10, 20, 30, 40];

    // map() 함수 사용해서
    const Items = numbers.map((currentValue, index, array) => {
        // 각 요소에 대한 정복 출력해보기
        console.log(`현재값 : ${currentValue}`);
        console.log(`인덱스 : ${index}`);
        console.log(`원본배열 : ${array}`);
        console.log(`---------------------------`);

        return (
            <li>
                값: {currentValue}, 인덱스: {index}, 원본 배열:{' '}
                {array.join(',')}
            </li>
        );
    });

    // filter() 함수 사용
    // # ex1
    let animals = ['dog', 'cat', 'rabbit'];

    let newAnimals = animals.filter((animal) => {
        return animal.length > 3;
    });
    console.log(newAnimals); // ['rabbit']

    // # ex2
    let words = ['dog', 'cat', 'panda'];

    let result = words.filter((res) => {
        return res.includes('d');
    });
    console.log(result); // ['dog', 'panda']

    return (
        <>
            <h1>Map (1)</h1>
            {/* 함수 사용 */}
            {/* <ul>{Items}</ul> */}

            {/* --------------------------------------- */}
            <h1>Map (2)</h1>
            {/* return 문안에 map() 함수를 직접 작성하여 사용하기 */}
            {/* <ul>
                {numbers.map((currentValue, index, array) => {
                    // 각 요소에 대한 정복 출력해보기
                    console.log(`현재값 : ${currentValue}`);
                    console.log(`인덱스 : ${index}`);
                    console.log(`원본배열 : ${array}`);
                    console.log(`---------------------------`);

                    return (
                        <li>
                            값: {currentValue}, 인덱스: {index}, 원본 배열:{' '}
                            {array.join(',')}
                        </li>
                    );
                })}
            </ul> */}

            <hr />
            <h1>filter (1)</h1>
            <ul>{newAnimals.join(', ')}</ul>

            <h1>filter (2)</h1>
            <ul>{result.join(', ')}</ul>
        </>
    );
}

/**
 * Q) forEach와 map 의 차이점?
 *  공통점
 *   - 둘 다 배열의 각 요소를 순회하는 메서드임
 *
 * "forEach"
 *  - 배열의 각 요소에 대해 주어진 함수를 "실행" 하는 것이 목적이 있음,
 *  - 또한 반환값이 없는 함수임 (반환값 return 없음) = 즉 체이닝 불가함.
 *  - 배열을 순회하면서 각 요소에 대해 이벤트를 발생시키는데 사용함
 *
 *
 * "map"
 *   - 배열의 각 요소를 변형하여 '새로운' 배열을 생성하는 것이 목적임.
 *   - 변형된 요소들로 구성된 새로운 배열로 반환함.  = 따라서 체이닝 가능
 *   - 다만 원본 배열은 변경되지 않음
 *
 *
 * *** 따라서 결론!
 *  - 데이터 변형이 필요하거나 변형된 데이터를 갈지고 추가적인 작업을 해야한다면 = map 사용하기
 *  - 단순히 배열을 순회하며 각 요소에 대해 어떠한 작업만을 수행하고자 할 때는 = forEach문 사용하기
 *
 */

// forEach 예시문
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
});

const numbers2 = [1, 2, 3, 4, 5];
const double = numbers2.map((number) => number * 2);
console.log(double);
console.log(numbers2);
