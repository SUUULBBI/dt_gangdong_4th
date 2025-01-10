//AppleEvent.js 파일에서 따로따로 진행한 것과 다른 두번째 방법으로 진행!
// 컴포넌트로 모두 분해해서 진행 // 따라서 컴포넌트 파일 3개로 각각 분리 > (Input.js, Select.js, Result.js)

// 현재 파일은 부모 컴포넌트 임.
// 상태 관리를 한번에 하는 방법
import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import Result from './Result';

export default function AppleEvent2() {
    // #1. 초기값은 아래와 같이 설정
    const [data, setData] = useState({
        fruit: 'apple',
        background: 'black',
        color: 'white',
        content: 'text',
    });
    console.log('data >>> ', data);

    return (
        <>
            {/* props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능. */}
            <div>
                <Select setData={setData}></Select>
            </div>
            <div>
                <Input setData={setData}></Input>
            </div>
            <div>
                <Result data={data}></Result>
            </div>
        </>
    );
}
