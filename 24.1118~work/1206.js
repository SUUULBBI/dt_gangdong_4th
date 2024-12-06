//////////실습 1번 ///////////
const span1 = document.getElementById('span1');
console.log(span1);
console.log(span1.textContent);
span1.textContent = '맛없다--;;';
span1.style.color = 'red';

////////// 실습 2번 ///////////
const todo = document.querySelectorAll('ul > .todo');
const done = document.querySelectorAll('ul > .done');
console.log(todo);
console.log(done);

todo.forEach(function (list) {
    list.classList.toggle('todo');
    list.classList.toggle('done');
});
done.forEach(function (list) {
    list.classList.toggle('todo');
    list.classList.toggle('done');
});
