import './styles.css';
import Tasks from './model/task.js';
import {
  removeTaskUI, addTaskHelperMethod, createTaskRow, clearTask,
} from './modules/crud.js';

const clear = document.querySelector('.clear');
const addTask = document.getElementById('add-task');
const titleText = document.getElementById('title-text');
const refreshIcon = document.getElementById('refresh');
const returnIcon = document.getElementById('return');
const task = new Tasks();

task.taskList = Tasks.fetch('task');
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
titleText.value = localStorage.getItem('title') ? Tasks.fetch('title') : 'To-Do List';
const titleSetStorage = (event) => {
  if (event.key === 'Enter') {
    Tasks.updateStorage('title', titleText.value);
  }
};

addTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTaskHelperMethod();
});
returnIcon.addEventListener('click', addTaskHelperMethod);
clear.addEventListener('click', clearTask);
titleText.addEventListener('keypress', titleSetStorage);
refreshIcon.addEventListener('click', Tasks.updateStorage('title', titleText.value));
