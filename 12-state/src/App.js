import './App.css';
import CounterClass from './CounterClass';
import CountFunction from './CountFunction';
import SayFunction from './SayFunction';
import StateClassComponent1 from './StateClassComponent1';
import StateClassComponent0 from './StateClassComponent0';

function App() {
    return (
        <div className="App">
            <CounterClass></CounterClass>
            <hr />
            <CountFunction value={'Plus 1'}></CountFunction>
            <hr />
            <SayFunction></SayFunction>
            <hr />
            <StateClassComponent1></StateClassComponent1>
            <hr />
            <StateClassComponent0></StateClassComponent0>
        </div>
    );
}

export default App;
