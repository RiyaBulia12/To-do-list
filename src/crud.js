import Tasks from './model/task.js';
import MenuIcon from './icons/menu-vertical.png';
import statusUpdate from './statusUpdate.js';

const clear = document.querySelector('.clear');
const task = new Tasks();

const removeTask = (event) => {
   const id = event.target.id.split('-')[1];
   removeTaskUI(id);
};

export const removeTaskUI = (id) => {
   const taskItem = document.getElementById(`${id}`);
   const checkbox = document.getElementById(`checkbox-${id}`);
   taskItem.classList.toggle('line-through');
   checkbox.classList.toggle('completed');
}

const changeTask = (taskInput) => {
   taskInput.addEventListener('change', (event) => {
      task.taskList = Tasks.fetch();
      task.taskList.forEach((item) => {
         if (item.index === parseInt(event.target.id, 10)) {
            item.description = event.target.value;
         }
         task.updateIndex();
         Tasks.updateStorage(task.taskList);
      });
   });
};

const activeTask = (taskInput) => {
   taskInput.addEventListener('click', () => {
      const current = document.getElementsByClassName("active");
      if (current.length > 0) {
         current[0].className = current[0].className.replace("active", "");
         current[0].className = current[0].className.replace("active", "");
      }
      taskInput.classList.add('active');
      const listNode = taskInput.parentNode.parentNode;
      listNode.classList.add('active');

   });
}

export const createTaskRow = (id, desc) => {
   const TASK_LIST = `<li class="task-list" id="task-list-${id}">
            <span><button class="checkbox" alt="checkbox" name="checkbox" id="checkbox-${id}"></button></span>
            <span class="task-name"><input type="text" class="add-task task-item" id="${id}" value="${desc}"></span>
            <span><img src="${MenuIcon}" alt="Vertical Menu Icon" class="menu-dots"/></span>
         </li>`;
   clear.insertAdjacentHTML('beforebegin', TASK_LIST);

   document.querySelectorAll('.checkbox').forEach((elem) => {
      elem.addEventListener('click', removeTask);
      elem.addEventListener('click', statusUpdate);
   });
   const taskInput = document.getElementById(`${id}`);
   changeTask(taskInput);
   activeTask(taskInput);
};
