import React from 'react';
import useToggle from '../hooks/useToggle';
import useTitle from '../hooks/useTitle';

export default function Faq() {
    //방금 만든 hooks폴더 내 UseToggle을 가져와서 사용하기
    const [isFaqOpen, toggleFaq] = useToggle();
    // 현재는 '배열구조 분해할당'으로 가져온거고 해당 관련 파일은 06번 upgrade폴더 내 index.js 보기
    // UseToggle의 경우 함수처럼 가져와야해서 () 함께 써줘함.
    // [value, toggleValue ]를 배열 구조분해할당으로 가져온 것임. 각각의 변수명은 어울리는 명칭으로 작명하기
    //   ㄴisFaqOpen = value
    //   ㄴtoggleFaq = toggleValue

    // ---------------------------------------------
    // isFaqOpen 상태에 따라 동적으로 페이지 타이틀 변경해주기. (hooks > useTitle.js 사용)
    useTitle(isFaqOpen ? 'FAQ Open' : 'FAQ Close');
    return (
        <div>
            <h1>Custom Hook Ex1</h1>
            <div onClick={toggleFaq} style={{ cursor: 'pointer' }}>
                Q. 자주 묻는 질문
            </div>
            {/* 단축반환 > 앞이 참이면 뒤에꺼 반환/ 앞이 거짓이면 앞에꺼 반환??  */}
            {isFaqOpen && <div>A.질문에 대한 답변</div>}
        </div>
    );
}
