const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';
const TASK_ITEM_CLASS = 'task-item';
const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';

const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');

const todoITemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

newTaskForm.addEventListener('submit', onNewTaskFormSubmit);
taskListEl.addEventListener('click', onTaskListElClick);

let todoList = [];

init();

function init() {
    fetchTodoList().then(() => renderList(todoList));
}

function onNewTaskFormSubmit(e) {
    e.preventDefault();

    const newTask = getFormValues();

    addTodo(newTask);
    resetForm();
}

function onTaskListElClick(e) {
    const todoId = getTodoId(e.target);

    switch (true) {
        case e.target.classList.contains(DELETE_BTN_CLASS):
            return deleteTodo(todoId);
        case e.target.classList.contains(TASK_ITEM_CLASS):
            return toggleTodo(todoId);
    }
}

function fetchTodoList() {
    return fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            todoList = data;
        });
}

function renderList(list) {
    taskListEl.innerHTML = list.map(generateTodoItemHtml).join('');
}

function generateTodoItemHtml({ id, title, isDone }) {
    return todoITemTemplate
        .replaceAll('{{title}}', title)
        .replaceAll('{{doneClass}}', isDone ? TASK_DONE_CLASS : '')
        .replaceAll('{{id}}', id);
}

function getFormValues() {
    return {
        title: taskNameInput.value,
    };
}

function resetForm() {
    taskNameInput.value = '';
}

function getTodoId(el) {
    const parent = el.closest(TASK_ITEM_SELECTOR);

    return parent ? parent.dataset.todoId : null;
}

function addTodo(todo) {
    todo.isDone = false;

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            todoList = [...todoList, data];
            renderList(todoList);
        });
}

function deleteTodo(id) {
    todoList = todoList.filter((item) => item.id !== id);
    renderList(todoList);

    fetch(API_URL + id, {
        method: 'DELETE',
    });
}

function toggleTodo(id) {
    const item = todoList.find((item) => item.id === id);
    const updatedItem = {
        ...item,
        isDone: !item.isDone,
    };
    todoList = todoList.map((item) => (item.id !== id ? item : updatedItem));

    fetch(API_URL + id, {
        method: 'PUT',
        body: JSON.stringify(updatedItem),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    renderList(todoList);
}

// REST
// // https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos
// C REATE  POST / body: {} => {id: 4}
// R EAD    GET /
//         GET /:id
// U PDATE  PUT /:id body: {} => {}
// D ELETE  DELETE /:id
