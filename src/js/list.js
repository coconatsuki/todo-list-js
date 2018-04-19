class List {
  constructor(id, name) {
    this.tasks = [];
    this.id = id;
    this.name = name;
    this.taskNumber = 5;
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
    };
  }
}

export default List;
