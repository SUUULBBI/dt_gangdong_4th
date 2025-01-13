// - 상품 목록을 보여주는 컴포넌트 생성.
// - 사용자가 입력한 가격보다 낮은 상품만 **“필터링”하여** 보여주기.
// - 필터링 로직이 불필요하게 자주 실행되지 않도록 useMemo를 사용해 최적화하기.

import React, { useState, useMemo } from 'react';

export default function UseMemoEx() {
    const ProductFilter = () => {
        // 상품 가격 제한 상태 관리
        const [priceLimit, setPriceLimit] = useState('');

        // 상품 목록 (Product 배열)
        const products = [
            { name: 'Product A', price: 30 },
            { name: 'Product B', price: 50 },
            { name: 'Product C', price: 70 },
        ];

        // useMemo로 가격 제한에 맞는 상품만 필터링
        const filteredProducts = useMemo(() => {
            return products.filter((product) => product.price <= priceLimit);
        }, [priceLimit]); // priceLimit이 변경될 때만 필터링 실행

        return (
            <div>
                <h2>Product Filter</h2>
                <input
                    type="number"
                    value={priceLimit}
                    onChange={(e) => setPriceLimit(Number(e.target.value))}
                    placeholder="Enter price limit"
                />
                <ul>
                    {' '}
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <li key={index}>
                                {product.name} - ${product.price}
                            </li>
                        ))
                    ) : (
                        <li>No products available within this price range.</li>
                    )}
                </ul>
                {/* 위 코드는 JavaScript 문법을 사용하여 React.js라는 자바스크립트 라이브러리로 작성된 코드입니다.  이 코드는 필터링 된 제품 목록을 보여주는 역할을 합니다.
1. filteredProducts.length > 0 조건문: 이 조건문은 필터링 된 제품 목록의 길이가 0보다 큰지 확인합니다. 
만약 크다면, 다음 중괄호 안의 코드를 실행하고, 그렇지 않다면 마지막 중괄호 안의 코드를 실행합니다.
2. filteredProducts.map() 함수: 이 함수는 배열의 각 요소를 순회하며, 각 제품에 대해 <li> 태그를 생성합니다. 이때 각 제품의 이름과 가격을 함께 표시합니다.
3. key 속성: React.js에서는 리스트의 각 요소에 고유한 키를 부여해야 합니다. 위 코드에서는 index를 키로 사용하고 있습니다.
4. No products available within this price range. 메시지: 만약 필터링 된 제품 목록이 비어 있다면, 이 메시지를 출력합니다.

즉, 이 코드는 사용자가 입력한 가격 범위 내에서 제품을 필터링 한 후, 해당 제품들을 화면에 표시하는 역할을 합니다. 
만약 필터링 된 제품이 없다면 "No products available within this price range."라는 메시지를 출력합니다. */}
            </div>
        );
    };
    return <ProductFilter></ProductFilter>;
}
