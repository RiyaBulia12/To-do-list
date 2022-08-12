import './styles.css';
import Tasks from './model/task.js';
import { removeTaskUI, createTaskRow } from './crud.js';

const clear = document.querySelector('.clear');
const addTask = document.getElementById('add-task');
const titleText = document.getElementById('title-text');
const refreshIcon = document.getElementById('refresh');
const returnIcon = document.getElementById('return');
const task = new Tasks();
let id = 0;

task.taskList = Tasks.fetch();
if (task.taskList) {
  task.taskList.forEach((task, id) => {
    createTaskRow(task.index, task.description);
    // Add line-through for completed task when page is reload
    if (task.completed) {
      removeTaskUI(id + 1);
    }
  });
}
// localstorage for todo title
titleText.value = localStorage.getItem('title') ? JSON.parse(localStorage.getItem('title')) : 'To-Do List';

function inputValidation() {
  addTask.placeholder = 'Empty Fields not allowed';
  addTask.classList.add('empty-input');
}

const addTaskHelperMethod = () => {
  if (addTask.value !== '') {
    addTask.placeholder = 'Press/click enter to add task';
    addTask.classList.remove('empty-input');
    id = task.taskList.length > 0 ? task.taskList[task.taskList.length - 1].index : 0;
    id += 1;
    const taskItem = { index: id, description: `${addTask.value}`, completed: false };
    task.add(taskItem);
    task.updateIndex();
    createTaskRow(id, addTask.value);
    addTask.value = '';
    addTask.focus();
  } else {
    inputValidation();
  }
};

addTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTaskHelperMethod();
  }
});

clear.addEventListener('click', () => {
  task.taskList = Tasks.fetch();
  task.taskList = task.taskList.filter((item) => !item.completed);
  task.updateIndex();
  Tasks.updateStorage(task.taskList);
  window.location.reload();
});

titleText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    localStorage.setItem('title', JSON.stringify(titleText.value));
  }
});

refreshIcon.addEventListener('click', () => {
  localStorage.setItem('title', JSON.stringify(titleText.value));
});

returnIcon.addEventListener('click', () => {
  addTaskHelperMethod();
});
