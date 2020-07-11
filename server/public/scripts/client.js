$(document).ready(init);

function init() {
    console.log('Ready to go');
    $('#js-btn-task').on('click', addTask);
};

function addTask() {
    const task = $('.js-taskIn').val();
    let completed = $('.#')
}

function getTask() {
    $.ajax({
            type: 'GET',
            url: '/toDo'
        })
        .then((dbResponse) => {
            console.log(dbResponse);
            render(dbResponse);
        })
        .catch((error) => {
            console.log(error);
        });
}

function postTask(objectToSend) {
    $.ajax({
            method: 'POST',
            url: '/list',
            data: objectToSend,
        })
        .then(function (err) {
            console.log(err);
        });
}

function render(tasks) {}