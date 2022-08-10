class TASK {
   constructor() {
      this.taskList = [];
   }

   fetch() {
      return JSON.parse(localStorage.getItem('task')) || [];
   }

   add(task) {
      this.taskList = this.fetch();
      this.taskList.push(task);
      this.updateStorage(this.taskList);
   }

   updateStorage(updatedTask) {
      localStorage.setItem('task', JSON.stringify(updatedTask));
   }

   updateIndex() {
      this.taskList.forEach((item, id) => {
         item.index = id + 1;
      });
   }
}

export default TASK;
