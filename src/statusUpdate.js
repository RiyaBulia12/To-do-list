import Tasks from './model/task.js';

const statusUpdate = (e) => {
  const id = +e.target.id.split('-')[1];
  Tasks.taskList = Tasks.fetch();
  Tasks.taskList[id - 1].completed = !Tasks.taskList[id - 1].completed;
  Tasks.updateStorage(Tasks.taskList);
};

export default statusUpdate;
