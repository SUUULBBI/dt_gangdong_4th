// 파일 구분 - TodoItem: 자식 - TodoList : 부모

import React from 'react';
import { GnToDoItem, ToDoItem } from '../types/types';
import '../styles/TodoList.scss';

// 제네릭 적용한 props 타입 정의
interface TodoItemProps<T extends React.ReactNode> {
    todo: GnToDoItem<T>; //types 파일에서 정의한 id,text, completed 내용 가져오기
    toggleComplete(id: number): void;
}

export default function GnTodoItem<T extends React.ReactNode>({
    todo,
    toggleComplete,
}: TodoItemProps<T>) {
    return (
        <>
            <li className={todo.completed ? 'completed' : ''}>
                <label htmlFor={`todoItem-${todo.id}`}>
                    <input
                        type="checkbox"
                        id={`todoItem-${todo.id}`}
                        defaultChecked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                    />
                    {todo.text}
                </label>
            </li>
        </>
    );
}
