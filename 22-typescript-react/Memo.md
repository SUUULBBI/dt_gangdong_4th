1. 리액트 프로젝트 생성 (+TS 템플릿)

    # npx create-react-app ㅇㅇㅇ --template typescript

    # cd ㅇㅇㅇㅇ

    # npm install react@18 react-dom@18 web-vitals

    (\*npm start > 필요하지 않은 파일 모두 삭제하고 아래 진행)

2. 기존 프로젝트에 TS 추가

    # npx install typescript @types/react @types/react-dom @types/node

3. tsconfig.json 파일 생성
    # npx tsc --init

-   1. 프로젝트 생성 -> 중간에 멈춤 (실패)

2. 리액트 할 때처럼 필요없는 것 삭제
3. 중간에 실패하면 tsconfig.json 파일이 안생김
4. 그래서 직접 tsconfig.json 파일을 생성
5. ㄴ 생성 후 , **"jsx": "react-jsx"**
6. 중간에 실패하면 패키지가 덜 설치됨
7. **@types/react @types/reat-dom** 추가로 패키지 설치하기

# npm start
