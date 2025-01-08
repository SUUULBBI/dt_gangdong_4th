1. 리액트란?
리액트는 사용자 인터페이스(UI)를 만들기 위해 사용되는 JavaScript 라이브러리입니다. 페이스북에서 개발되었으며, 2013년에 공개되었습니다.
2. Virtual DOM(가상 돔)
리액트는 Virtual DOM을 사용하여 UI를 효율적으로 업데이트합니다. 이전에는 웹 페이지를 업데이트하기 위해서는 모든 DOM 요소를 다시 렌더링 해야 했습니다. 그러나 리액트는 변경된 부분만을 다시 렌더링 하여 성능을 향상시켰습니다.
3. 컴포넌트
리액트는 컴포넌트 기반의 아키텍처를 가지고 있습니다. 컴포넌트는 독립적으로 작동하며, 다른 컴포넌트와 조합하여 사용할 수 있습니다.
4. JSX
JSX는 HTML과 유사한 문법으로, 리액트에서 UI를 구성하는 데 사용됩니다. JSX를 사용하면 HTML 태그와 JavaScript 코드를 함께 작성할 수 있으며, 이를 통해 UI를 더욱 쉽게 만들 수 있습니다.
5. state와 props
state는 컴포넌트 내부에서 관리되는 데이터입니다. props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터입니다.

-----------------------------------------------------------
Quiz: <div className="App"> 여기에서 className 은 왜 지정한거야?
A : className은 HTML의 class 속성과 유사한 역할을 합니다. CSS 스타일링을 적용하기 위해 사용되며, 리액트에서는 class 대신 className을 사용합니다.
위의 코드에서 <div className="App">은 App이라는 클래스 이름을 가진 div 요소를 생성합니다. 그리고 App.css 파일에서 .App 클래스에 대한 스타일링을 정의할 수 있습니다.

예를 들어, App.css 파일에 다음과 같은 코드를 추가하면,라우저에서 해당 div 요소는 배경색이 #f0f0f0, 패딩이 20px, 텍스트 정렬이 중앙으로 설정됩니다.
.App {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

-----------------------------------------------------------
-----------------------------------------------------------
-----------------------------------------------------------

이어서 리액트의 핵심 개념인 컴포넌트와 JSX에 대해 자세히 알아보겠습니다.
1. 컴포넌트(Component)
컴포넌트는 리액트에서 UI를 구성하는 기본 단위입니다. 함수형 컴포넌트와 클래스형 컴포넌트 두 가지 종류가 있습니다.

1-1. 함수형 컴포넌트
함수형 컴포넌트는 ES6 함수로 작성되며, useState, useEffect와 같은 Hooks를 사용하여 state와 side effect를 관리합니다.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
위의 코드는 Welcome이라는 이름의 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 name이라는 prop을 받아서 화면에 "Hello, {name}"을 출력합니다.
-----------------------------------------------------------
1-2. 클래스형 컴포넌트
클래스형 컴포넌트는 ES6 클래스를 상속받아 작성되며, this.state와 this.render를 사용하여 state와 UI를 관리합니다.
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
-----------------------------------------------------------
2. JSX
JSX는 HTML과 유사한 문법으로, 리액트에서 UI를 구성하는 데 사용됩니다. JSX를 사용하면 HTML 태그와 JavaScript 코드를 함께 작성할 수 있으며, 이를 통해 UI를 더욱 쉽게 만들 수 있습니다.
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
Props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터입니다. props는 읽기 전용이며, 변경할 수 없습니다.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="React" />;
}

-----------------------------------------------------------
1. 상태 관리(State Management)
상태 관리는 여러 컴포넌트에서 상태를 공유하고 관리하는 방법입니다. 대표적인 상태 관리 라이브러리로는 Redux, MobX, Context API 등이 있습니다.
Redux
Redux는 상태를 하나의 스토어(store)에 저장하고, 액션(action)을 통해 상태를 변경합니다. 스토어는 불변성을 보장하며, 상태 변경 시 모든 컴포넌트가 자동으로 업데이트됩니다.
MobX
MobX는 상태를 객체로 저장하고, 관찰자(observer)를 통해 상태를 추적합니다. 상태 변경 시 해당 객체의 의존성을 가진 컴포넌트만 자동으로 업데이트됩니다.
Context API
Context API는 상위 컴포넌트에서 하위 컴포넌트로 상태를 전달하는 방법입니다. useContext Hook을 사용하여 Context 값을 가져올 수 있습니다.
2. 라우팅(Routing)
라우팅은 웹 애플리케이션에서 URL에 따라 다른 화면을 보여주는 기능입니다. 리액트에서는 react-router-dom 라이브러리를 사용하여 라우팅을 구현합니다.
3. 애니메이션(Animation)
애니메이션은 웹 애플리케이션에서 UI 요소를 동적으로 움직이는 기능입니다. 리액트에서는 react-spring 라이브러리를 사용하여 애니메이션을 구현합니다.
4. 테스트(Testing)
테스트는 코드의 안정성과 성능을 검증하는 방법입니다. 리액트에서는 Jest와 Enzyme을 사용하여 테스트를 작성합니다.
5. 배포(Deployment)
배포는 완성된 웹 애플리케이션을 사용자에게 제공하는 과정입니다. 리액트 애플리케이션은 Netlify, Vercel, AWS 등의 클라우드 서비스를 이용하여 배포할 수 있습니다.

-----------------------------------------------------------

1. 상태 관리(State Management)
상태 관리는 여러 컴포넌트에서 상태를 공유하고 관리하는 방법입니다. 대표적인 상태 관리 라이브러리로는 Redux, MobX, Context API 등이 있습니다.
Redux
Redux는 상태를 하나의 스토어(store)에 저장하고, 액션(action)을 통해 상태를 변경합니다. 스토어는 불변성을 보장하며, 상태 변경 시 모든 컴포넌트가 자동으로 업데이트됩니다.
Redux의 주요 개념
스토어(Store): 상태를 저장하는 객체입니다.
액션(Action): 상태를 변경하기 위한 요청입니다.
리듀서(Reducer): 액션을 처리하여 상태를 변경하는 함수입니다.
디스패치(Dispatch): 액션을 스토어에 전달하는 함수입니다.
----------------------------------
Redux의 사용 예시
// store.js
import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;
----------------------------------
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
----------------------------------
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;
----------------------------------
----------------------------------
MobX
MobX는 상태를 객체로 저장하고, 관찰자(observer)를 통해 상태를 추적합니다. 상태 변경 시 해당 객체의 의존성을 가진 컴포넌트만 자동으로 업데이트됩니다.
MobX의 주요 개념
observable: 상태를 저장하는 객체입니다.
computed: 계산된 값을 반환하는 함수입니다.
reaction: 상태 변경 시 자동으로 호출되는 함수입니다.
MobX의 사용 예시
// store.js
import { observable, computed, reaction } from 'mobx';

class Store {
  @observable count = 0;

  constructor() {
    reaction(() => this.count, () => console.log('count changed'));
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export default new Store();
----------------------------------
// App.js
import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import Counter from './Counter';

@observer
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
----------------------------------
// Counter.js
import React from 'react';
import { useStaore } from 'mobx-react';

function Counter() {
  const store = useStaore();

  return (
    <div>
      <p>Count: {store.count}</p>
      <button onClick={() => store.increment()}>Increment</button>
      <button onClick={() => store.decrement()}>Decrement</button>
    </div>
  );
}

export default Counter;
----------------------------------

Context API
Context API는 상위 컴포넌트에서 하위 컴포넌트로 상태를 전달하는 방법입니다. useContext Hook을 사용하여 Context 값을 가져올 수 있습니다.
Context API의 사용 예시
// Context.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
----------------------------------
