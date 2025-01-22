// 파일 구분 - TodoItem: 자식 - TodoList : 부모

import React from 'react';
import { ToDoItem } from '../types/types';
import '../styles/TodoList.scss';

// #2. TodoItem 작성(자식쪽에서 데이터를 어떻게 운영할지에 대한 초안만 작성하기)
// TodoItem 의 Props 타입 정의하기
// {todo} => {todo: id, text, completed}
interface TodoItemProps {
    todo: ToDoItem; //types 파일에서 정의한 id,text, completed 내용 가져오기
    toggleComplete(id: number): void;
}

export default function TodoItem({ todo, toggleComplete }: TodoItemProps) {
    return (
        <>
            {/* TodoItem 작성(자식쪽에서 데이터를 어떻게 운영할지에 대한 초안만 작성하기) */}
            {/* css 추가해준 것 (파일명 : TodoList.scss) */}
            <li className={todo.completed ? 'completed' : ''}>
                {' '}
                <label htmlFor="todoItem">
                    <input
                        type="checkbox"
                        id="todoItem"
                        defaultChecked={todo.completed} //체크안된 상태가 default
                        // #7-3. 토글 실행 이벤트 핸들러 추가
                        onChange={() => toggleComplete(todo.id)}
                    />
                    {todo.text}
                </label>
            </li>
        </>
    );
}
