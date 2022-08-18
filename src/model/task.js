class TASK {
  constructor() {
    this.taskList = [];
  }

  static fetch(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  static updateStorage(key, updatedTask) {
    localStorage.setItem(key, JSON.stringify(updatedTask));
  }

  add(task) {
    this.taskList = TASK.fetch('task');
    this.taskList.push(task);
    TASK.updateStorage('task', this.taskList);
  }

  updateIndex() {
    this.taskList.forEach((item, id) => {
      item.index = id + 1;
    });
  }
}

export default TASK;
