// 이것은. 재사용성을 위해 따로 파일로 분리해서 export해서 사용하기 위한 것임.

// types/ (=타입스 디렉토리) : 타입 관련 모든 정의가 모여 있는 폴더.
// #1. interface 정의
// 단일 Todo 아이템 Type (*TodoList, TodoItem 에서 사용 )
export interface ToDoItem {
    id: number; // 유일 ID
    text: string; // todo 내용
    completed: boolean; // todo 완료 여부
}

//###############################################
// 제네릭 타입을 사용하는 Todo 아이템 Type (*GnTodoItem, 에서 사용)
// text는 제네릭으로 유동적으로 사용하기 위해 컴포넌트로 별도

// 최근 제네릭 제약이 추가되었음
// - JSX 뭄법 사용하기 때문에 props로 전달되는 데이터는 React가 렌더링할 수 있는 형식이어야함. (이렇게 안하면 오류남)

// * T extends React.ReactNode
//   ㄴ T는 반드시 React.ReactNode 타입이어야 한다는 의미임

export interface GnToDoItem<T extends React.ReactNode> {
    id: number;
    text: T; // 텍스트 타입을 제네릭으로 정의
    completed: boolean;
}
