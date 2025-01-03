// import logo from './logo.svg';
import './App.css';
import image from './assets/Owl_pimage2.png';

/**
 * /src/assets 폴더 생성
 * : React 컴포넌트 내부에서 사용되는 이미지, 아이콘 등 정적 파일 저장.
 * - Ex.) 배경 이미지, 버튼 아이콘, 프로필 이미지 등등
 * - "import" 키워드로 불러와야 함.
 *
 * /public
 * : HTML 파일에 직접 삽입되거나, 빌드 과정 없이 원본 파일 그대로 사용되어야 하는 파일 저장.
 * = index.html에 직접 사용하는 파일들.
 * - Ex.) 파비콘, 로고, 웹폰트 등등
 */

function App() {
    const name = 'damon';
    const student = 'sesac';

    const checkPerson = () => {
        if (name === 'damon') {
            return '리더입니다.';
        } else if (name === 'john') {
            return '학생입니다.';
        } else {
            return '외부인 입니다.';
        }
    };

    const styles = {
        backgroundColor: 'yellow',
        color: 'blue',
        fontSize: '48px',
    };
    return (
        <div className="App">
            {/* JSX 문법 */}
            {/* #1. 하나로 감싸인 요소 */}
            {/* 의미 없는 div가 싫다. -- <></> Fragment 문법 */}
            <>
                <h1> JSX 문법 </h1>
            </>
            {/* #2. js 문법 사용 가능 */}
            {/* 
                - {} 로 감싸면 js 표현식 사용 가능
                - {} 안에서 삼항 연산자 사용 가능 (if, for문 사용 불가 x)
            */}
            <div>{name} 안녕?</div>
            <div>
                {student === 'sesac' ? (
                    <span>새싹 크루</span>
                ) : (
                    <span>누구신가요?</span>
                )}
            </div>
            {/* #2-1. 복잡한 조건을 이용하고 싶다면? -> 위에서 함수로 만들어 사용 */}
            <h4>{checkPerson()}</h4>

            {/* #2-2. 조건에 따른 렌더링 ( && ) -> 조건이 참일 때만 특정 요소를 렌더링할 때 */}
            <h5>{name === 'damon' && '안녕하세요'}</h5>

            {/* #3. style 속성 */}
            {/* 
              - 리액트에서 Dom 요소에 스타일 적용시 문자열 x --> 객체 사용!
              - {{스타일 명: '값'}}
              - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야 함. (Ex. backgroundColor)
              - font-size (x) JSX에서는 -는 진짜 빼기로 오인할 수 있음.
            */}
            <div style={styles}>인라인 스타일 적용</div>
            <div
                style={{
                    backgroundColor: 'red',
                    color: 'blue',
                    fontSize: '30px',
                }}
            >
                직접 인라인 스타일 적용
            </div>

            {/* #4. className 사용 */}
            {/* - class 속성이 아닌 className 속성 사용. */}

            {/* #4-1 html에서는 함수를 "호출", jsx에는 함수를 "선언" */}
            <button
                onClick={() => {
                    console.log('hello!');
                }}
            >
                버튼
            </button>

            {/* #5. 종료 태그(closing tag)가 없는 태그 사용 시 꼭 작성 해줘야 함. */}
            {/* - 기존의 종료 태그가 없는 태그 종류 */}
            {/* - <input />    or    <input></input> */}

            {/* #6. 주석 */}
            {/* - // : jsx 외부 주석 */}
            {/* - {* *} : jsx 내부 주석 */}

            {/* "/경로"가 public 폴더이다. */}
            <img src="/logo192.png" />

            {/* src 내부의 이미지를 사용할 경우 -> 맨 위에서 이미지를 import 해오기. */}
            <img src={image} />
        </div>
    );
}

export default App;
