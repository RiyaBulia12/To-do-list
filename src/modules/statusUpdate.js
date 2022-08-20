import Tasks from '../model/task.js';

const statusUpdate = (e) => {
  const id = +e.target.id.split('-')[1];
  Tasks.taskList = Tasks.fetch('task');
  Tasks.taskList[id - 1].completed = !Tasks.taskList[id - 1].completed;
  Tasks.updateStorage('task', Tasks.taskList);
};

export default statusUpdate;
