import NoRedux from './components/NoRedux';
import UseRedux from './components/UseRedux';
import UseRedux2 from './components/UseRedux2';

function App() {
    return (
        <div className="App">
            <NoRedux></NoRedux>
            <hr />
            {/* 리듀서가 단일 일 때   */}
            <UseRedux></UseRedux>
            <hr />
            {/* 리듀서가 여러 개 일 때 (rootReducer) */}
            <UseRedux2></UseRedux2>
        </div>
    );
}

export default App;
