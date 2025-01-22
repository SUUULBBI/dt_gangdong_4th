import React from 'react';
import First from './components/First';
import Parents from './components/Parents';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

function App() {
    return (
        <>
            <First title="오늘배울 내용은?">
                <p>Ts with React</p>
            </First>

            <hr />
            <Parents></Parents>
            <hr />
            <TodoList></TodoList>
        </>
    );
}

export default App;
