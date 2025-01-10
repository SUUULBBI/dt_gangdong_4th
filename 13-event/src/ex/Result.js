import React from 'react';
import apple from '../assets/apple.png';
import banana from '../assets/banana.png';
import peach from '../assets/peach.png';

// 이미지가져오기 - #1. 정적 import 방식으로 가져와서 객체에 저장하는 방법
//   - 파일이나 모듈을 컴파일 시점에 미리 가져옴
//   - 파일 경로가 고정되어 있어야함

const images = {
    apple,
    banana,
    peach,
};

///////////////////////////////////////////////////////////

// 이미지가져오기 - #2. 동적 require()방식
//  - Webpack에서 이를 지원해서 사용하는 것
//  - 런타임시에 동적으로 단일 파일을 가져올 수 있음
//  - 경로를 동적으로 설정 가능
//  - 즉, 파일이나 폴더 경로가 변수로 지정될 때 유용하게 사용됨

///////////////////////////////////////////////////////////

// 이미지가져오기 - #3. require.context() 방식
/**
 * Webpack에서 제공함
 * 특정 디렉토리의 파일들ㅇ르 자동으로 탐색, 한 번에 가져옴
 *
 * [구문 분석]
 * require.context(directory, useSubdirectories, regExp)
 * --- directory : 탐색할 디렉토리 경로 ( = 문자열 형태로 입력)
 * --- useSubdirectories : 하위 디렉토리까지 포함할지 여부 (true or false)
 * --- regExp : 파일 이름을 필터링할 정규 표현식 (* 조건을 걸어둔 것, )
 *
 *  구문예시 : const images = require.context('./assets', false, /\.(png|jpe?g|svg)$/);
 *    ㄴ 점 . : 임의의 한 특수문자
 *    ㄴ (역슬레시) \. : 점을 일반 문자로 취급하여 실제 점을 찾음
 *    ㄴ ? 물음표 : 앞에 글자가 있을 수도 없을 수도 있음을 뜻함 ex)jpg or jpeg 모두 포함
 *    ㄴ $ : 문자열의 끝을 의미함 >> 즉 끝에 .png로 끝나야만 매칭해준다는 것임
 *    ㄴ | : or 또는 뜻함
 */

const images2 = require.context('../assets', false, /\.(png|jpe?g|svg)$/);
console.log('images >>> ', images2);
console.log('모든 파일 경로 배열로 반환 >>> ', images2.keys());

export default function Result({ data }) {
    //data는 객체로 4가지로 이루어진 배열인데 4가지 키값을 모두 변수로 분리해주기
    const { fruit, background, color, content } = data;

    return (
        <div>
            {/* 이미지 처리 방법 */}
            {/* #1. 정적 import 방식 */}
            <img src={images[fruit]} alt="" width={100} height={100} />

            {/* #2. 동적 require 방식  */}
            {/* 동적방식은 require 괄호 안에 백틱 `을 사용해야함 */}

            <img
                src={require(`../assets/${fruit}.png`)}
                alt=""
                width={100}
                height={100}
            />

            {/* #3. require.context() 방식 */}
            <img
                src={images2(`./${fruit}.png`)}
                alt=""
                width={100}
                height={100}
            />
            <div style={{ backgroundColor: background, color: color }}>
                {content}
            </div>
        </div>
    );
}

/**
 * ///////////    chatGPT 검색 내용 참고용   //////////////////////////
 * 
 * 
 * 이 코드에서 사용된 `require.context`는 Webpack의 특수한 기능입니다. 이 기능을 사용하여 특정 디렉토리 내의 파일들을 동적으로 로드할 수 있습니다. 코드의 각 부분을 차례대로 해석해보겠습니다.

### 코드 해석

```javascript
const images = require.context('./assets', false, /\.(png|jpe?g|svg)$/);
```

1. **`require.context('./assets', false, /\.(png|jpe?g|svg)$/)`**:
   - `require.context`는 Webpack에서 제공하는 함수로, 특정 디렉토리(`./assets`) 내의 파일들을 **동적으로** 가져올 수 있습니다.
   - 첫 번째 인자 `'./assets'`: 이 부분은 파일을 검색할 디렉토리입니다. 즉, `./assets` 폴더 내에서 파일을 찾습니다.
   - 두 번째 인자 `false`: 이 인자는 서브디렉토리도 포함할지 여부를 설정합니다. `false`로 설정되어 있으므로, `./assets` 디렉토리 내의 파일들만 검색합니다. 서브디렉토리 내의 파일은 포함되지 않습니다.
   - 세 번째 인자 `\.(png|jpe?g|svg)$`: 이 인자는 **정규 표현식**을 사용하여 파일 확장자를 필터링합니다. 이 정규 표현식은 `png`, `jpg`, `jpeg`, `svg` 확장자를 가진 파일만을 선택하도록 합니다.

`require.context` 함수는 해당 디렉토리 내의 파일 경로를 동적으로 가져오는 모듈을 반환합니다. 예를 들어, `images` 변수는 `./assets` 디렉토리 내의 PNG, JPEG, JPG, SVG 이미지 파일들에 대한 모듈을 가져오는 함수로 사용될 수 있습니다.

### 정규 표현식 설명

정규 표현식 `\.(png|jpe?g|svg)$`에 대해 하나씩 설명하겠습니다.

1. **`\.`**:
   - `.`은 정규 표현식에서 "어떤 문자 하나"를 의미합니다. 그러나 `.`을 문자 그대로 사용하려면 이스케이프 문자 `\`를 사용해야 합니다. 그래서 `\.`은 "마침표(.)"를 의미합니다.

2. **`(png|jpe?g|svg)`**:
   - `()`는 **그룹화**를 의미합니다. 여기서는 그룹화된 선택 사항을 만들어, 여러 가지 확장자 중 하나를 선택할 수 있도록 합니다.
   - `png`: `png`라는 문자열을 찾습니다.
   - `|`: 이 기호는 "또는"을 의미합니다. 따라서 여러 가지 대체 항목을 지정할 수 있습니다.
   - `jpe?g`: `jpe?g`는 `jpg` 또는 `jpeg` 확장자를 허용합니다. `?`는 바로 앞의 문자가 "있거나 없을 수 있다"는 의미이므로, `jpe?g`는 `jpg` 또는 `jpeg` 둘 다 허용합니다.
   - `svg`: `svg`라는 문자열을 찾습니다.

3. **`$`**:
   - `$`는 정규 표현식에서 **문자열 끝**을 의미합니다. 따라서 `\.(png|jpe?g|svg)$`는 "파일 이름이 `png`, `jpg`, `jpeg`, `svg`로 끝나는 파일"을 의미합니다.

### 요약

이 정규 표현식은 다음과 같은 파일 확장자를 가진 파일들만 선택하도록 합니다:
- `.png`
- `.jpg` 또는 `.jpeg`
- `.svg`

즉, 이 코드는 `./assets` 폴더 내에서 `.png`, `.jpg`, `.jpeg`, `.svg` 확장자를 가진 모든 파일을 찾아서 `images`라는 변수에 그 경로를 포함한 모듈을 동적으로 불러오는 역할을 합니다.
 * 
 */
