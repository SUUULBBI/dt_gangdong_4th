// * 컴포넌트 작성법
// 1. Funtion 만들기.
// 2. return () 안에 html 작성.
// 3. <함수명><함수명> 쓰기. -- 호출 할 곳에
//    <함수명 /> 도 가능

// Q) 언제 사용하면 좋은가?
// A) 1. 반복적인 html 축약 할 때
// A) 2. 큰 페이지들
// A) 3. 자주 변경 되는 것들 UI

function Clock() {
    return (
        <div className="clock-container">
            {/* toLocaleTimeString()
                : 사용자의 문화권에 맞는 시간 표기법으로 시간을 리턴.
            */}
            <h1>현재 시간은 {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}

export default Clock;
