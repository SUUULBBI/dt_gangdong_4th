import './App.css';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFuction from './LifeCycleFuction';
import Prac0110 from './Prac0110';
import RefSample from './RefSample';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';

function App() {
    return (
        <div className="App">
            <RefSample></RefSample>
            <hr />
            <RefSample2></RefSample2>
            <hr />
            <RefSample3></RefSample3>
            <hr />
            <RefSample4></RefSample4>

            <hr />
            <hr />
            <Prac0110></Prac0110>
            <hr />
            <LifeCycleClass></LifeCycleClass>

            <hr />
            <LifeCycleFuction></LifeCycleFuction>
        </div>
    );
}

export default App;
