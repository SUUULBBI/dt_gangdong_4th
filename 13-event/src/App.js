import './App.css';
import SyntheticEvent from './SyntheticEvent';
import FuncComponent from './FuncComponent';
import ClassComponent from './ClassComponent';
import HandlerEx from './ex/HandlerEx';
import ChangeTextColor from './ex/ChangeTextColor';
import ShowOut from './ex/ShowOut';

function App() {
    return (
        <div className="App">
            <SyntheticEvent></SyntheticEvent>
            <hr />
            <FuncComponent></FuncComponent>
            <hr />
            <ClassComponent></ClassComponent>
            <hr />
            <HandlerEx></HandlerEx>
            <hr />
            <ChangeTextColor></ChangeTextColor>
            <hr />
            <ShowOut></ShowOut>
        </div>
    );
}

export default App;
