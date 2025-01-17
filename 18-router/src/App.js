import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    {/* path="/" : 메인페이지 */}
                    <Route path="/" element={<MainPage />}></Route>
                    {/* path="/페이지명" : 각각 페이지명 네이밍 지어주기 */}
                    <Route path="/products" element={<ProductPage />}></Route>
                    <Route
                        // 동적 라우트 설정 : 경로에 콜론(:)을 사용함
                        //    ex) /:productId
                        path="/products/:productId"
                        element={<ProductDetailPage></ProductDetailPage>}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                    {/* React router는 위에서 아래로 경로를 매칭하는데
                    만약 와일드카드 경로를 위측에 배치하게 되면 모든 경로를 덮어 씌우게됨! 
                       >>>> 따라서 지금처럼 와일드카드*경로는 항상 마지막에 배치해두기!  */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

// #1. BrowserRouter  <BrowserRouter></BrowserRouter>
/**
 * - 애플리케이션 전체를 감사서 라우팅을 활성화함. 따라서 최상위 컴포넌트인 app.js에 있어야함
 * - HTML5 History API 사용
 *     ㄴ 주소 표시줄과 동기화하여 URL을 관리하며, SEO 및 UX를 향상시킴
 */

// #2. Routes : 여러 Route 컴포넌트를 묶어주는 컨테이너 역할임 (따라서 <Routes>안에 <Route>를 리스팅해서 관리함)
// #3. Route : 특정 경로에 해당하는 컴포넌트를 랜더링 하는 역할임
// ㄴ path : 특정 경로임 (/ : 기본default , /xx : 각각 페이지별 네이밍 지정해주기)
// ㄴ element : 보여줄 컨텐츠( ex. xxPage)
