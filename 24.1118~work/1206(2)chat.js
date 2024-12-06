const submit = document.querySelector('button');
const userid = document.querySelector('#userid');
const comment = document.querySelector('#comment');

submit.addEventListener('click', function (event) {
    // Prevent form submission
    event.preventDefault();

    // Get user ID and comment
    const id = userid.value;

    const content = comment.value;

    if (id && content) {
        // Create a new list item element
        // idBold = id;
        // idBold.innerHTML = '<strong>' + idBold + '</strong>';
        const li = document.createElement('li');

        li.innerHTML = '<b>' + id + '</b>' + '-' + content;

        // li.textContent.split(' - '));

        // Append the new list item to the comment list
        const commentList = document.querySelector('.comment-list');
        commentList.appendChild(li);
    }

    // Clear the input fields
    userid.value = '';
    comment.value = '';
});
