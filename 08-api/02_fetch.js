// --------------------------------
// Fetch()
// --------------------------------
/**
 * fetch()
 *  = JS의 내장 API로 최신 브라우저에서 지원되는 비동기 HTTP 요청을 처리하는 방법임.
 *  = Promise 기반을 동작함. 따라서 비동기 방식으로 데이터를 요청하고 결과를 반환함.
 *  = 직관적이고 사용하기 쉬움. (매우 간단하고 직관적인 코드로 비동기 요청을 보낼 수 있음)
 *
 * * 구문
 * fetch('URL', {...})
 *
 *  - URL : 요청할 때 URL
 *  - {...} : 옵션 객체
 *          - 요청의 설정을 정의함.
 *          - method / headers / body ... etc
 * - method : HTTP 요청 메서드 지정.
 * - headers : 요청의 헤더 정보 설정.
 * - body : 요청의 본문 데이터 설정.
 *
 */
// --------------------------------
// 이제, open api사용해보기.
// --------------------------------
/**
 *  ***** response 객체 Info
 *  status : HTTP응답 상태 코드를 나타냄. (ex_ 100, 200, 404, 500 등)
 *  statusText : HTTP 상태 메세지 문자열. (ex_ "OK", "NOT Found",,,)
 *  ok : 요청이 성공적으로 수행되었는지를 나타내는 boolean 값임. => 따라서 상태코드가 200~299 사이가 나올 경우 true임.
 *  headers : 응답 헤더를 나타내는 headers 객체임.
 *   url : 응답이 반환된 url 문자열임.
 */
/**
 *  #1. Get 요청
 *  - fetch()는 url 을 인자로 받아 데이터를 가져옴.
 *  - fetch()에서 Get 요청은 기본 동작이기 때문에 명시적으로 설정하지 않아도 됨.
 *
 * 이제, 아래에서부터 Action) JSONplaceHolder 사이트에서 게시글 가져오기.
 */
fetch('https://jsonplaceholder.typicode.com/posts') // open api 사이트 내 posts로 저장된 100개 데이터를 가져오기 위한 것.
    .then((response) => {
        //console.log(response); //Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}body: (...)bodyUsed: falseheaders: Headers {}ok: trueredirected: falsestatus: 200statusText: ""type: "cors"url: "https://jsonplaceholder.typicode.com/posts"[[Prototype]]: Response
        // 위 response : 서버에서 반환된 응답객체임.
        if (!response.ok) {
            throw new Error('Network response was not ok'); // 상태 코드 확인.
        }
        console.log('get response >>> ', response); //get response >>>  Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
        return response.json(); //JSON 데이터 변환함. (= 서버에서 응답한 데이터는 JSON형식으로 제공하기 때문에 변환필요..)
    })
    .then((data) => {
        console.log('Get Posts:', data); // 위에서 받아온 데이터를 직접 콘솔로 열어본 것. // 사이트에 있던 100개의 더미 데이터를 가져온 것을 볼 수 있음.
    })
    .catch((error) => {
        // JSON의 경우 단점으로 에러있어도 자동으로 에러표기를 못해줌으로 우리가 직접 에러문을 catch로 작성해줘야 에러를 표기해줌.
        console.log('There has been a problem with your fetch operation'); // 에러일때 이 문구로 나올 것.
    });

console.log('-----------------------------');
// #2. Post 요청하기
// 새로운 게시글 데이터 전송하기
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // Create 생성할 것!
    headers: {
        'Content-Type': 'application/json', // 서버에 전달할 데이터 형식지정한 것. (= JSON 데이터를 보낼 것이라는 뜻임.)
    },
    body: JSON.stringify({
        // 직렬화! why? -> JS객체를 JSON 문자열로 변환하기 위함. (왜냐하면 서버가 올바르게 해석할 수 있도록임.)
        // openAPI의 데이터 양식에 맞추어서 각 타이틀,바디,iD 추가해달라는 형식을 작성한 것.

        title: 'My New POST', // 제목
        body: 'This is the content of my post', // 본문 내용
        userId: 1, // 작성자ID
    }),
})
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('get response >>> ', response); //get response >>>  Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
        return response.json(); //JSON 데이터 변환함. (= 서버에서 응답한 데이터는 JSON형식으로 제공하기 때문에 변환필요..)
    })
    .then((data) => {
        console.log('Get Posts:', data); // 위에서 받아온 데이터를 직접 콘솔로 열어본 것. // 사이트에 있던 100개의 더미 데이터를 가져온 것을 볼 수 있음.
    })
    .catch((error) => {
        // JSON의 경우 단점으로 에러있어도 자동으로 에러표기를 못해줌으로 우리가 직접 에러문을 catch로 작성해줘야 에러를 표기해줌.
        console.log('There has been a problem with your fetch operation'); // 에러일때 이 문구로 나올 것.
    });
console.log('-----------------------------');

// #3. Put 요청
// 게시글 id '1'의 데이터를 수정하자.
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id: 1, // 수정할 게시글 ID
        title: 'Updated Post Title', // 수정된 제목
        body: 'This is the updated content', // 수정된 본문
        userID: 1,
    }),
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Updated Post : ', data);
    })
    .catch((err) => console.log(err));
//  #4. Delete 요청
//  게시글 ID 1 삭제
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
    .then((res) => {
        if (res.ok) {
            console.log('삭제 성공'); // 삭제 성공 메세지
        } else {
            console.error('삭제 실패');
        }
    })
    .catch((error) => console.error('Error: ', error));
// #5. Fetch와 Async/Await 사용하기
//  게시글 데이터 가져오기 (Async, Await) 방식
async function getPosts() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) {
            throw new Error('Network response was not ok'); // 상태 코드 확인
        }
        const data = await response.json();
        console.log('Async Posts: ', data);
    } catch (err) {
        console.error(err);
    }
}
getPosts();

// #6. 쿼리스트링 (Query String)
// - URL 에 추가되는 데이터.
// - 서버에 특정 요청을 전달하거나 클라이언트에서 데이터를 주고 받을 때 사용.
// - url 의 긑에 '?' 로 시작하며, *파라미터 데이터를 전달하는 구조를 가짐.
// - *파라미터 : 키와 값의 쌍임.

/**
 * 구문
 * URL?key1=value1&key2=value2&key3=value3
 * - URL : 기본주소
 * - ? : 쿼리스트링의 시작일 나타냄
 * - key=value : 전달하고자 하는 데이터
 * - & : 여러개의 키- 값 쌍 구분함.
 *
 * * 장점
 * - 간단하고 직관적임
 * - 서버 요청과 데이터 결합  : 특정 요청에 필요한 데이터를 함께 전달할 수 있음.
 *
 * *단점
 * - 보안 취약점 : 쿼리스트링에 포함된 데이터는 url
 * -
 *
 *
 */
fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); // 상태 코드 확인
        }
        return response.json();
    })
    .then((data) => {
        console.log('QueryString posts:', data);
    })
    .catch((err) => {
        console.error(err);
    });
