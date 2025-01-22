// 파일 구분 - Item: 자식 - List : 부모
import React, { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import { GnToDoItem, ToDoItem } from '../types/types';
import GnTodoItem from './GnTodoItem';

// #3 TodoList 작성 (초안작성)
export default function TodoList() {
    /// {todo} => {todo: id, text, completed}
    const [todos, setTodos] = useState<GnToDoItem<string>[]>([]); // 전체 투두 목록 & todos의 초기값은 배열형태의 빈값이다. & <TodoItem> 의 데이터를 활용할 것이다

    // #4-2. todo 추가 상태
    const [newTodo, setNewTodo] = useState(''); //새로 추가될 투두의 상태관리

    // #5-1. 포커싱 생성
    const inputRef = useRef<HTMLInputElement>(null); // 초기값 null 설정

    // #4-3. todo 추가 함수
    const addTodo = () => {
        const updatedTodos: GnToDoItem<string>[] = [
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
                    value={newTodo}
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>ADD</button>
                <button onClick={focusInput}>FOCUS</button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <GnTodoItem<string>
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                    ></GnTodoItem>
                ))}
            </ul>
        </>
    );
}
