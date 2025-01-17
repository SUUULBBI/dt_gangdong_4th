import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux'; //추가
import store from './store'; //추가

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // #3. Provider로 Store 연결하기
    //   - React 와 Redux 연결 : 모든 컴포넌트가 Redux 스토어에 접근할 수 있게 함.
    <Provider store={store}>
        <App />
    </Provider>
);
