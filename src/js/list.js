class List {
  constructor(id, name) {
    this.tasks = [];
    this.id = id;
    this.name = name;
    this.taskNumber = 1;
    this.render = '';
  }

  addTask(task) {
    this.tasks.push(task);
    this.taskNumber += 1;
  }

  listObject() {
    return {
      tasks: this.tasks.map(task => (task.taskObject())),
      id: this.id,
      name: this.name,
      taskNumber: this.taskNumber,
      render: this.render,
    };
  }

  // renderListandTasks() {
  //   const li = this.render;
  //   this.tasks.forEach((task) => {
  //     li.appendChild(task.render);
  //   });
  //   return li;
  // }
}

export default List;
