import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
    const { productId } = useParams(); //app.js에 추가했던 동적 경로 :productId 를 가져온 것임
    console.log('파라미터값', productId); // '클릭한 id값' // 1
    console.log('파라미터type', typeof productId); // 'string'
    /**
     * #5. useParams
     *  - URL 경로에서 동적 파라미터 값을 가져옴 (추출)
     *  - 다중 파라미터는 객체 형태로 반환함
     *  - 항상 문자열로 반환함 (string)
     */

    console.log('상품 data:', productInfos); // ProductList.js파일 내 productInfos 가져와지는지 확인
    const targetProduct = productInfos[Number(productId) - 1]; // 배열이라서 인덱스는 1번이 0임 , 따라서 -1해주어야 같아짐 // 또한 productId의 경우 string 이라서 Number로 형변환해주어야함
    // 타겟한 상품이랑 인덱스 번호 일치시키는 과정이며
    // 숫자 값으로 처리하기 위해 형변환함

    console.log(targetProduct); // 1
    //가져온 targetProduct를 구조분해할당해줌
    const { id, name, email, body } = targetProduct; //구조분해할당

    //////////////////////////////////////////////////////////////
    const navigate = useNavigate();
    /**
     * #6. useNavigate
     *  - 프로그램 방식으로 경로 변경
     *  - 프로그램적으로 브라우저의 히스토리 기능 제어 가능 (뒤로가기, 앞으로 가기)
     *
     ** 숫자 인자 의미?
     *  1) 양수숫자 ('n')
     *   - 현재 페이지에서 'n' 페이지 앞으로 이동
     *    ex) 1= 다음페이지
     *
     *   2) 음수숫자 ('-n')
     *   - 현재 페이지에서 'n' 페이지 뒤로 이동
     *     ex) -1= 이전페이지
     */

    //useNavigate를 활용하여 아래와 같이 함수를 만들어서 동적 경로 지정하기
    // 1) 다음상품으로 이동하기
    const goToNextProduct = () => {
        const NextProductId = Number(productId) + 1; // 다음 상품 ID 계산한 것.
        navigate(`/products/${NextProductId}`); //동적 경로로 이동
    };
    //2) 이전상품으로 이동하기
    const goToPreviousProduct = () => {
        const prevProductId = Number(productId) - 1; // 이전 상품 id 계산한 것
        if (prevProductId > 0) {
            navigate(`/products/${prevProductId}`); // 동적 경로로 이동
        } else {
            alert('이전상품이 없습니다.'); // 0번째 상품의 이전상품을 클릭할 때 alert 호출
        }
    };

    return (
        <div>
            <h1>ProductDetailPage</h1>

            <button onClick={() => navigate(-1)}>뒤로 이동하기</button>
            <button onClick={() => navigate('/')}>홈으로 이동하기</button>

            <button onClick={goToPreviousProduct}>이전 상품</button>
            <button onClick={goToNextProduct}>다음 상품</button>

            <ul>
                <li>상품번호 : {id}</li>
                <li>상품명 : {name}</li>
                <li>판매자 : {email}</li>
                <li>상세설명 : {body}</li>
            </ul>
        </div>
    );
}
