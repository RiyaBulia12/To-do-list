import Tasks from './model/task.js';
import MenuIcon from './icons/menu-vertical.png';
import statusUpdate from './statusUpdate.js';
import dragEventListeners from './draggableEvents.js';

const clear = document.querySelector('.clear');
const task = new Tasks();

export const removeTaskUI = (id) => {
  const taskItem = document.getElementById(`${id}`);
  const checkbox = document.getElementById(`checkbox-${id}`);
  taskItem.classList.toggle('line-through');
  checkbox.classList.toggle('completed');
};

const removeTask = (event) => {
  const id = event.target.id.split('-')[1];
  removeTaskUI(id);
};

const changeTask = (taskInput) => {
  taskInput.addEventListener('change', (event) => {
    task.taskList = Tasks.fetch();
    task.taskList.forEach((item) => {
      if (item.index === +event.target.id) {
        item.description = event.target.value;
      }
      task.updateIndex();
      Tasks.updateStorage(task.taskList);
    });
  });
};

const activeTask = (taskInput) => {
  taskInput.addEventListener('click', () => {
    const current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace('active', '');
      current[0].className = current[0].className.replace('active', '');
    }
    taskInput.classList.add('active');
    const listNode = taskInput.parentNode.parentNode;
    listNode.classList.add('active');
  });
};

export const createTaskRow = (id, desc) => {
  const TASK_LIST = `<li class="task-list draggable" id="task-list-${id}"  draggable="true">
            <span><button class="checkbox" alt="checkbox" name="checkbox" id="checkbox-${id}"></button></span>
            <span class="task-name"><input type="text" class="add-task task-item" id="${id}" value="${desc}"></span>
            <span><img src="${MenuIcon}" alt="Vertical Menu Icon" class="menu-dots" width="18"
                        height="18"/></span>
         </li>`;
  clear.insertAdjacentHTML('beforebegin', TASK_LIST);

  document.querySelectorAll('.checkbox').forEach((elem) => {
    elem.addEventListener('click', removeTask);
    elem.addEventListener('click', statusUpdate);
  });
  const taskInput = document.getElementById(`${id}`);
  changeTask(taskInput);
  activeTask(taskInput);
  dragEventListeners();
};
