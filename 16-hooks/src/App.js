import './App.css';
import UseCallbackEx from './UseCallbackEx';
import UseCallbackEx2 from './UseCallbackEx2';
import UseMemoEx from './UseMemoEx';

function App() {
    return (
        <div className="App">
            <UseMemoEx></UseMemoEx>
            <hr />
            <UseCallbackEx></UseCallbackEx>
            <hr />
            {/* 수동적으로 postId를 프롭스로 넣어준 것.  */}
            <UseCallbackEx2 postId={7}></UseCallbackEx2>
        </div>
    );
}

export default App;
