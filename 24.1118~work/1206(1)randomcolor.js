const btn1 = document.querySelector('button');
const h2 = document.querySelector('h2');
const body = document.querySelector('body');

btn1.addEventListener('click', (e) => {
    console.log('버튼 클릭');
    console.log(h2.textContent);
    console.log(body);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
    h2.textContent = `rgb(${r}, ${g}, ${b})`;
});
