// 파일 구분 - TodoItem: 자식 - TodoList : 부모
import React, { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import { ToDoItem } from '../types/types';

// #3 TodoList 작성 (초안작성)
export default function TodoList() {
    /// {todo} => {todo: id, text, completed}
    const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록 & todos의 초기값은 배열형태의 빈값이다. & <TodoItem> 의 데이터를 활용할 것이다

    // #4-2. todo 추가 상태
    const [newTodo, setNewTodo] = useState(''); //새로 추가될 투두의 상태관리
    /**
     * [
     *      {id: 1, text: "할 일 1", completed: false},
     *      {id: 2, text: "할 일 2", completed: false},
     *      {id: 3, text: "할 일 3", completed: false}
     * ]
     */

    // #5-1. 포커싱 생성
    const inputRef = useRef<HTMLInputElement>(null); // 초기값 null 설정
    /**
     * - 초기렌더링 시에 inputRef가 아직 실제 DOM 요소를 참조하지 않기 때문에 Null값으로 시작함을 의미함.
     *
     *  * <HTMLInputElement> : 참조하려는 DOM 요소의 타입을 지정함 - 즉, 이것의 의미는 input 요소 타입을 참조할 것이라는 것.
     */

    // #4-3. todo 추가 함수
    const addTodo = () => {
        const updatedTodos = [
            ...todos,
            { id: Date.now(), text: newTodo, completed: false },
        ];
        setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
        setNewTodo(''); // input 초기화
    };

    // #5-3. 포커싱 함수
    const focusInput = () => {
        inputRef.current?.focus();
    };

    // #6-2. 엔터키 함수 (이벤트 데이터 타입, 공식 홈페이지 및 구글링 참고!)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    // #7-1. 토글 함수 만들기
    // - TodoItem 완료 상태로 변경해주는 함수
    const toggleComplete = (targetId: number) => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === targetId
                ? { ...todo, completed: !todo.completed }
                : todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <div>
                <h1>TodoList</h1>
                <input
                    type="text"
                    placeholder="add new todo!"
                    // #4-1. Todo 추가 (value값 읽을 수 있도록 작성)
                    value={newTodo} //입력하는 상태값
                    // #5-2. 포커싱 ref 객체 연결
                    ref={inputRef}
                    // #6-1. 엔터키 이벤트 (실습)
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                {/* todo 생성 버튼 */}
                <button onClick={addTodo}>ADD</button>
                <button onClick={focusInput}>FOCUS</button>
            </div>

            {/* 위에서 입력한 todo리스트를 아래ul 에 쌓아지도록 할 것임  --> 따라서 맵핑해서 아래에 쌓이도록해주어야함*/}
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        // #7-2. 토글 함수 props 전달
                        toggleComplete={toggleComplete}
                    ></TodoItem> // 키는 todo.id &값은 todo
                ))}
            </ul>
        </>
    );
}
