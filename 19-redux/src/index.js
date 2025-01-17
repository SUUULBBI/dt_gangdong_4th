import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Provider 가져오기.
import store from './store'; // Redux 스토어 가져오기 // index.js 생략!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* #6. React 와 Redux 연결하기
         * Provider 사용하여 - Redux 스토어 공유함
         * ㄴ 하위 컴포넌트가 Redux 스토어에 접근가능함
         * - 최상위 컴포넌트인 index.js에서 작성해야함 */}
        <Provider store={store}>
            <App />
        </Provider>
    </>
);
