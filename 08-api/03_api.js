// #1 . 게시글을 저장할 로컬 변수
let posts = []; //빈배열

//  #2. 게시글을 보여주는 함수 만들기. (아래)
function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // 이전에 보여준 게시글들을 클리어하는 것. (=초기화 과정)
    posts.forEach((post) => {
        const postElement = document.createElement('div'); //빈 div 생성해라
        postElement.classList.add('post'); // 클래스가 post라는 이름으로 class 추가해줌. (*html head style 태그로 넣은 post css 효과 추가됨)
        postElement.innerHTML = `
        <h3 id="title-${post.id}">${post.title}</h3>
        <p id="body-${post.id}">${post.body}</p>
        <button onclick="deletePost(${post.id})">Delete</button>
        <button onclick="startEditPost(${post.id})">Edit</button>
        `;
        postsContainer.appendChild(postElement); // 자식 요소로 추가
    });
    console.log(posts); // 여기에서 posts 배열을 출력함.
}

// #3.  API 에서 게시글 가져오기
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts') // 100개 데이터 요청
        .then((res) => res.json()) // json 형태로 반환
        .then((data) => {
            posts = data.slice(0, 10); // 받은 데이터가 곧 posts 배열이다. but 100개까진 필요없어서 slice로 처음 10개만 가져오기.
            displayPosts(); //배열에 담은 값을 여기에 담아줌.
        })
        .catch((err) => console.error(err));
}

// // #4. 게시글 수정하는 함수 만들기
// function startEditPost(id) {
//     //함수명이 deletePost한 이유는 위쪽에 이미 이 이름으로 적용해서임
//     const post = posts.find((post) => post.id === id); // ex) id = 4  //수정할 아이디 하나만 find찾아서 같으면 찾아줘.
//     if (!post) return; // 일치하지 않으면 넘어가라.

//     const titleElement = document.getElementById(`title-${id}`);
//     const bodyElement = document.getElementById(`body-${id}`);

//     titleElement.innerHTML = `<input type="text" id="edit-title-${id}" value="${post.title}">`; //인풋태그로 변경 & value값으로 기존 값 추가.
//     bodyElement.innerHTML = `<textarea id="edit-body-${id}">${post.body}</textarea>`; // 텍스트에어리아로 변경 & value값으로 기존 값 추가.

//     const editButton = document.querySelector(
//         `button[onclick="startEditPost(${id})]`
//     );
//     editButton.textContent = 'Save'; //edit 버튼을 한번더 누르면 save 버튼명으로 변경. (*보여주는 값만 save 로 변경됨)
//     editButton.setAttribute('onclick', `saveEditPost(${id})`);
// }

// // 수정한 게시글을 [저장] 하는 기능 추가 함수.
// function saveEditPost(id) {
//     const editedTitle = document.getElementById(`edit-title-${id}`).value; // 수정 된 Title 값
//     const editedBody = document.getElementById(`edit-body-${id}`).value; // 수정 된 body 값

//     const postIndex = posts.findIndex((post) => post.id === id); // 10개의 각 인덱스를 찾아서 아이디값이 같은지 찾아라.
//     if (postIndex > -1) {
//         //그 인덱스값이 -1보다 크다면 . = 인덱스는 0부터라 무조건 -1보다 클 것이니 아래를 반영할 것임.
//         posts[postIndex].title = editedTitle; // -1보다 클때 수정된 내용의 타이틀로 재할당해라.
//         posts[postIndex].body = editedBody; // -1보다 클때 수정된 내용의 내용으로 재할당해라.
//         displayPosts(); //게시글 보여주는 함수를 다시 실행해라.
//     }
// }

// #4. 게시글 수정 함수
function startEditPost(id) {
    const post = posts.find((post) => post.id === id); // id = 4
    if (!post) return;

    const titleElement = document.getElementById(`title-${id}`);
    const bodyElement = document.getElementById(`body-${id}`);

    titleElement.innerHTML = `<input type="text" id="edit-title-${id}" value="${post.title}">`;
    bodyElement.innerHTML = `<textarea id="edit-body-${id}">${post.body}</textarea>`;

    const editButton = document.querySelector(
        `button[onclick="startEditPost(${id})"]`
    );
    editButton.textContent = 'Save';
    editButton.setAttribute('onclick', `saveEditPost(${id})`);
}

// 수정한 게시글을 저장하는 함수
function saveEditPost(id) {
    const editedTitle = document.getElementById(`edit-title-${id}`).value; // 수정 된 Title 값
    const editedBody = document.getElementById(`edit-body-${id}`).value; // 수정 된 body 값

    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex > -1) {
        posts[postIndex].title = editedTitle; // 여기에서 수정 된 내용이 재할당 하면서 덮어짐.
        posts[postIndex].body = editedBody;
        displayPosts();
    }
}

// #5. 게시글 삭제하는 함수.
function deletePost(id) {
    posts = posts.filter((post) => post.id !== id);
    // 매개변수로 전달받은 id와 같지 않은 게시글만 배열에 남겨짐.
    // filter해당 조건에서 만족하는것 두고 만족하지 않는 것은 빼서 그것끼리 새로운 배열로 만들어줌.
    //따라서 위의 필터조건은 post.id 와 id가 같지 않으면 걸러진다는 것임.
    displayPosts(); // 일치하는 것만 보여지게 함.
}

// "Load Posts"버튼에 이벤트 리스너 추가한 것.
document.getElementById('fetchPosts').addEventListener('click', fetchPosts);
