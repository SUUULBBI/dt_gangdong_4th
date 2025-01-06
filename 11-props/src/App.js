import './App.css';
import ClassComponent from './ClassComponent';
import ClassComponent2 from './ClassComponent2';
import FunctionComponent from './FunctionComponent';
import FunctionComponent2 from './FunctionComponent2';
import Button from './Button';
import MultiChild from './MultiChild';

function App() {
    return (
        <div className="App">
            <ClassComponent></ClassComponent>
            {/* 프롭스 있는버전이 아래. place~ */}
            <ClassComponent place="새싹 강동캠퍼스 5층"></ClassComponent>
            <hr />
            <ClassComponent2></ClassComponent2>
            <hr />
            <FunctionComponent></FunctionComponent>
            <hr />

            {/* props 있는버전이 아래. name, age */}
            <FunctionComponent name="john" age={30}></FunctionComponent>
            {/* JSX에서 JS표현식을 평가하는 용도로 사용하는게 ~~~~ */}
            <FunctionComponent2></FunctionComponent2>
            <hr />

            {/* Children - 단일 자식 요소 전달 */}
            <Button link="https://www.google.com">Goggle</Button>
            {/* 아래는 프롭스가 있는 버전임. */}
            <Button link="https://www.google.com">Goggle</Button>
            <hr />

            {/* children 다중요소 선택하기 */}
            <MultiChild>
                <b>다중 자식</b>
                <p>요소 전달</p>
                <div> 체험해보기</div>
            </MultiChild>
        </div>
    );
}

export default App;
