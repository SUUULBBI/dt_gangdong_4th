import './MultiChild.css';

// #2. 다중 자식 요소 전달
const MultiChild = ({ children }) => {
    return <div className="multi">{children}</div>;
};

export default MultiChild;
