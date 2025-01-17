import React from 'react';
import { Link } from 'react-router-dom';

/** 와일드카드(*) 라우트
 *  (=404페이지설정)
 *   - 사용자가 정의하지 않은 경로로 접근했을 때 Not Found 페이지 보여주기
 * https://aotoyae.tistory.com/entry/React-%EC%99%80%EC%9D%BC%EB%93%9C%EC%B9%B4%EB%93%9C-Route-%EC%9E%98%EB%AA%BB%EB%90%9C-%EC%A3%BC%EC%86%8C-%EB%B0%A9%EC%A7%80
 */

export default function NotFound() {
    return (
        <div>
            <h1>NotFound</h1>

            <Link to={'/'}>홈으로 이동하기</Link>
            <br />
            <a href="http://localhost:3000"> a태그로 홈 이동도 가능</a>
        </div>
    );
}

/**
 * 웹프로그래밍 Http 상태코드 표 100~500 https://hongong.hanbit.co.kr/http-%EC%83%81%ED%83%9C-%EC%BD%94%EB%93%9C-%ED%91%9C-1xx-5xx-%EC%A0%84%EC%B2%B4-%EC%9A%94%EC%95%BD-%EC%A0%95%EB%A6%AC/
 *  - 1xx : 정보제공
 *  - 2xx : 성공
 *  - 4xx : 클라이언트 에러 (401: 권한없음 / 403: 금지됨 / 404: 찾을 수 없음)
 *  -
 * */
