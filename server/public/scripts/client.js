$(document).ready(init);

function init() {
    getTask();
    console.log('Ready to go');
    $('#js-btn-task').on('click', addTask);
    $('#viewTasks').on('click', '#js-btn-delete', deleteTask);
    ('#viewTasks').on('click', '#js-btn-update', completeTask);
    ('#completedTask').on('click', '#js-btn-delete', deleteTask);
}; // setting click event.. 

//create functions to call event listeners

function addTask() {
    const task = $('.js-taskIn').val();
    let completed = $('.#completedIn').val();

    let taskToSend = {
        task,
        completed,
    }
    // console.log(taskToSend);

    postTask(taskToSend);
    $('#taskIn').val('');
    $('#completedIn').val('');
}; //posting to homepage and setting our values to empty string


function getTask() {
    $.ajax({
            type: 'GET',
            url: '/list'
        })
        .then((dbResponse) => {
            console.log(dbResponse);
            render(dbResponse);
        })
        .catch((error) => {
            console.log(error);
        });
} // function to get our task data from front end

function postTask(tasksToSend) {
    $.ajax({
            method: 'POST',
            url: '/task',
            data: objectToSend,
        })
        .then(function (dbResponse) {
            console.log(dbResponse);
        });
    getTask(dbResponse);
}; // function to post request to front end

function deleteTask() {
    const id = $(this).parent().parent().data('id');
    $.ajax({
            type: 'DELETE',
            url: '/list/delete' + id
        })
        .then(function (dbResponse) {
            getTask();
        });
} // our delete request

// function completeTask() {
//     let id = $(this).parent().parent().data('id');

//     $.ajax({
//             type: 'PUT',
//             url: '/toDo/completed' = id
//         })
//         .then(function (dbResponse) {
//             getTask();
//         })




function render(tasks) {
    console.log(tasks);
    // $('#viewTask').empty();

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        console.log(task);
        $('#viewTasks').append(`
        <p>${task.task}</p>
    `);
    }
}