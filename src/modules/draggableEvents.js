import Tasks from '../model/task.js';

let dragStartIndex;
const task = new Tasks();

function swapItems(fromIndex, toIndex) {
  const itemOne = document.getElementById(`${fromIndex}`);
  const itemTwo = document.getElementById(`${toIndex}`);

  const temp = itemOne.value;
  itemOne.value = itemTwo.value;
  itemTwo.value = temp;

  task.taskList = Tasks.fetch('task');

  task.taskList.forEach((task) => {
    if (task.index === fromIndex) {
      task.description = itemOne.value;
    } else if (task.index === toIndex) {
      task.description = itemTwo.value;
    }
  });
  Tasks.updateStorage('task', task.taskList);
}

function dragStart() {
  dragStartIndex = +this.getAttribute('id').split('-')[2];
}

function dragEnter() {
  this.classList.add('over');
  this.querySelector('.task-item').classList.add('over');
}

function dragOver(event) {
  event.preventDefault();
}

function dragLeave() {
  this.classList.remove('over');
  this.querySelector('.task-item').classList.remove('over');
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute('id').split('-')[2];
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
  this.querySelector('.task-item').classList.remove('over');
}

export default function dragEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const draggableItems = document.querySelectorAll('.draggable-list  .task-list');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  draggableItems.forEach((draggableItem) => {
    draggableItem.addEventListener('dragover', dragOver);
    draggableItem.addEventListener('drop', dragDrop);
    draggableItem.addEventListener('dragenter', dragEnter);
    draggableItem.addEventListener('dragleave', dragLeave);
  });
}
