//OMDB API 이용해서 외국영화 가져오기.
// 사이트 : https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFggCAQ8QDxYCHgdDaGVja2VkaGRkZGQCAw8QDxYCHwBnZGRkZAIFDxYCHgdWaXNpYmxlaGQCBw8WAh8BZ2QCAg8WAh8BaGQCAw8WAh8BZxYCAgEPDxYCHgRUZXh0BRhBbGwgZmllbGRzIGFyZSByZXF1aXJlZC5kZBgBBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WAwULcGF0cmVvbkFjY3QFC3BhdHJlb25BY2N0BQhmcmVlQWNjdCyII8UaMC%2BgntOhSIT8Y7bYvqczhUos7A%2BhtoW1bdag&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAhRzfeWTa6GNgiiLPny6cm2mSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYphdL1XrNEjnC%2FKjNya%2Bmqh8hRPnM5dWgso2y7bj7kVNLSFbtYIt24Lw6ktxrd5Z67%2F4LFSTzFfbXTFN5VgQX9Nbzfg78Z8BXhXifTCAVkevd6Gg6hdnmErg%2FmPxI4vIjdfI0YIQykZRsw8vwV581Rue&at=freeAcct&Email2=tmfqlan%40gmail.com&FirstName=seulbi&LastName=an&TextArea1=study&Button1=Submit
//  ㄴ 위 사이트는 가입 필요하지 않고 free & 이메일주소 넣어서 키값 받아올 수 있어서 간편함.
//OMDB API 키(필수값) : http://www.omdbapi.com/?i=tt3896198&apikey=cc65e444
// API 키는 필수고, OMDB API 를 사용해서 영화 데이터를 비동기적으로 불러오고 웹페이지에 표시하는 예시진행.

async function getMovieData() {
    let word = 'marvel';
    const h3 = document.querySelector('h3');
    h3.innerText = `영화 키워드 ${word}`;

    // fetch로 데이터 불러오기
    const res = await fetch(
        `http://www.omdbapi.com/?apikey=cc65e444&s=${word}`
    );
    const movieData = await res.json();
    console.log('movieData >>> ', movieData);

    // 불로온 데이터를 이용해서 html 요소를 만들기
    for (let movie of movieData.Search) {
        const ul = document.querySelector('ul');
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        img.src = movie.Poster;
        img.alt = movie.imdbID;
        p.innerText = movie.Title;

        div.append(img, p);
        ul.append(div);
    }
}

getMovieData();
