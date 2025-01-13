import React, { useEffect } from 'react';

// [Custom Hook #2.]
// - 동적으로 페이지 제목 설정하기.
//   컴포넌트가 언마운트 될 때 이전 제목으로 복원하는 기능

export default function useTitle(title) {
    useEffect(() => {
        // mount 시 실행 공간
        console.log(document.title);
        //
        const prevTitle = document.title; //= 기존 제목을 저장한다는 것.
        document.title = title; //= 함수가 실행되면 새로운 제목을 기존 제목에 새롭게 덮어주겠다는 것. (=새로운 제목으로 설정)

        return () => {
            document.title = prevTitle;
        }; // 언마운트시 기존 제목으로 복원하기
        // unMount 시 실행 공간
    }, [title]); // [title]이 변경될 때마다 문서의 제목을 업데이트해줌
}
// useEffect, mount , unmount 있어서 return 값이 없어도됨!
