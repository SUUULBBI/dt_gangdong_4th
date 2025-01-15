import BasicCss from './components/BasicCss';
import CssModuleComponents from './components/CssModuleComponents';
import PracReactStyle from './components/PracReactStyle';
import SassComponent from './components/SassComponent';
import StyledComponent from './components/StyledComponent';

function App() {
    return (
        <div className="App">
            <BasicCss></BasicCss>
            <CssModuleComponents></CssModuleComponents>
            <SassComponent></SassComponent>
            <hr />
            <br />
            <StyledComponent></StyledComponent>
            <hr />
            <br />
            <PracReactStyle></PracReactStyle>
        </div>
    );
}

export default App;
