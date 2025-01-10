import './App.css';
import SyntheticEvent from './SyntheticEvent';
import FuncComponent from './FuncComponent';
import ClassComponent from './ClassComponent';
import HandlerEx from './ex/HandlerEx';
import ChangeTextColor from './ex/ChangeTextColor';
import ShowOut from './ex/ShowOut';
import AppleEvent from './ex/AppleEvent';
import AppleEvent2 from './ex/AppleEvent2';

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
            <hr /> <hr />
            <AppleEvent></AppleEvent>
            <hr />
            <hr />
            <hr />
            <AppleEvent2></AppleEvent2>
        </div>
    );
}

export default App;
