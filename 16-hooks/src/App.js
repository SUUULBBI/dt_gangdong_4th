import './App.css';
import UseCallbackEx from './UseCallbackEx';
import UseCallbackEx2 from './UseCallbackEx2';
import UseMemoEx from './UseMemoEx';
import Prac1UseMem from './Prac1UseMem';
import UseReducerEx from './UseReducerEx';
import ThemeMiddle from './components/ThemeMiddle';
import ThemeProvider from './components/ThemeProvider';
import Faq from './components/Faq';
import useTitle from './hooks/useTitle';
import Form from './components/react-hook-form/Form';
import PracForm1 from './components/react-hook-form/PracForm1';

function App() {
    // 타이틀 변경되는 커스텀 훅! (>> hooks폴더 내 useTitle 파일임)
    useTitle('React Hooks 학습중!');
    return (
        <div className="App">
            {/* <UseMemoEx></UseMemoEx>
            <hr />
            <UseCallbackEx></UseCallbackEx>
            <hr />
            {/* 수동적으로 postId를 프롭스로 넣어준 것.  */}
            {/* <UseCallbackEx2 postId={7}></UseCallbackEx2>
            <hr />
            {/* 코딩온 실습과제 practice  https://uncovered-front-641.notion.site/UseMemo-17ad6fe891f28064898cf1801af46afb */}
            {/* <Prac1UseMem></Prac1UseMem>
            <hr />
            <hr />
            {/* reducer */}
            {/* <UseReducerEx></UseReducerEx>
            <hr />
            {/* Context 주머니에 {value}를 담아서 다른 자식들에서 사용할 수 있도록 하는 것 */}
            {/* <ThemeProvider>
                <ThemeMiddle></ThemeMiddle>
            </ThemeProvider>
            <br /> <hr />
            {/* 커스텀 훅 만들고 쓰기 */}
            {/* <Faq></Faq> */}
            <br />
            <hr />
            {/* <Form></Form>  */}
            <br></br>
            <br />
            <PracForm1></PracForm1>
        </div>
    );
}

export default App;
