class TASK {
  constructor() {
    this.taskList = [];
  }

  static fetch() {
    return JSON.parse(localStorage.getItem('task')) || [];
  }

  static updateStorage(updatedTask) {
    localStorage.setItem('task', JSON.stringify(updatedTask));
  }

  add(task) {
    this.taskList = TASK.fetch();
    this.taskList.push(task);
    TASK.updateStorage(this.taskList);
  }

  updateIndex() {
    this.taskList.forEach((item, id) => {
      item.index = id + 1;
    });
  }
}

export default TASK;
