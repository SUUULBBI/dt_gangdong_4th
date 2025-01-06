//코딩온 실습 4번.
import './App2.css';

const App5 = () => {
    const title = 'Hello World'; // 원하는 제목 변수

    return (
        <div className="container">
            <div className="title">{title}</div>
            <input
                className="input-box"
                type="text"
                placeholder="Type something..."
            />
        </div>
    );
};

export default App5;
