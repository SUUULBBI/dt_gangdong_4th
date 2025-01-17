import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../main.css'; //css파일 만든것 적용해주기 (=mode에 따라 색변경됨)

/** #7. useSearchParams
 *  - URL의 쿼리 파라미터를 읽고 설정할 때 사용함 (추출, 변경)
 *  - 쿼리파라미터
 *      ㄴURL ? 물음표 뒤에 위치함/ 데이터를 키=값 쌍으로 전달함
 *  - 내부적으로 URLSearchParams API 사용
 *
 * [주요 메서드]
 *  - get(key) : 특정 키의 값 가져오기 (*주소창에서 뒤의 값을 모두 수정해서 가져오기 때문에 뒤에 딸려있는 값이 모두 삭제되고 수정된값으로 치환. ex) ?mode=Dark?User=123 -> ?mode=Light)
 *  - set(key, value) : 특정 키의 값을 설정 (*주소창에서 뒤의 값 중 일부 수정할 값만 수정함 / 다만 더 복잡함)
 */

export default function MainPage() {
    const [searchPrams, setSearchPrams] = useSearchParams();
    console.log('searchParams>>', searchPrams); //searchParams>> URLSearchParams {size: 0}

    //아래는 'mode'쿼리 파라미터의 값을 콘솔로 출력한 것. 만약 값이 없으면? null값 출력함
    // URL?mode=value >> 값이없는상태이므로 null  / 값이 있다면 해당 값 출력
    console.log(searchPrams.get('mode')); // null값 나옴
    // mode 값에 따라 저장된 값 출력 ex) 다크모드 <> 라이트모드
    const mode = searchPrams.get('mode');

    // 테마 토글 함수 만들기 (*이함수로 인해 주소창에서 mode=Dark or mode=Light 로 변환됨)
    const toggleMode = () => {
        const currentMode = searchPrams.get('mode');
        setSearchPrams({
            mode: currentMode === 'Dark' ? 'Light' : 'Dark',
        });
    };

    return (
        // div에 배열형태로 css를 먹여주기
        <div className={['Main', mode].join(' ')}>
            {/* 위처럼 mode로 하든 풀로 그대로 쓰든 상관없음. className={['Main', searchPrams.get('mode')].join(' ')}> */}

            <h1>MainPage</h1>
            <button onClick={toggleMode}>
                {mode === 'Dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

/**
 * setSearchParams Vs searchPrams.set() 차이점
 *  
 * setSearchParams (*위에서 배운 것)
 *  - 새로운 객체를 전달
 *  - 기존의 쿼리 파라미터가 '전부 덮어 씌어짐' (*단점)
 * 
 * searchPrams.set() (*어려운 내용이라 패스했지만 추가적인 차이점 비교를 위한 것)
 *  const params = new URLSearchPrams(searchPrams);
    parames.set('mode', 'dark');
    setSearchParams(params);

 * - URLSearchPrams 객체에서 제공하는 메서드임
     ㄴ 객체 내부에서 수정함
 * - 기존의 쿼리 파라미터는 유지하면서 특정 파라미터만 수정함
 * - 사용 후 setSearchParams 호출로 URL 업데이트 해야함 
 */
