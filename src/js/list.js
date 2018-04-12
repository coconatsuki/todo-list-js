class List {
  constructor(id, name) {
    this.tasks = [];
    this.id = id;
    this.name = name;
    this.taskNumber = 0;
  }

  addTaskToList(task) {
    this.task.push(task);
    this.taskNumber += 1;
  }

  // get description() {
  //   return `${this.name} is a ${this.breed} type of dog`;
  // }
  // set nicknames(value) {
  //   this.nick = value.trim();
  // }
  // get nicknames() {
  //   return this.nick.toUpperCase();
  // }
}

export default List;
