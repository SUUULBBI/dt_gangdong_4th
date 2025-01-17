import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    console.log('product>>', product);

    const { id, name, email, body } = product;

    return (
        <div>
            {/* 아래와 같이 Link 태그를 감싸면  */}
            <Link to={`/products/${id}`}>
                {' '}
                <ul>
                    <li>상품명 : {name} </li>
                    <li>상세설명 : {body}</li>
                </ul>
            </Link>
        </div>
    );
}
