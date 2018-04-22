class List {
  constructor(options = {}) {
    this.tasks = [];
    this.id = options.id;
    this.name = options.name;
    this.taskNumber = options.taskNumber || 1;
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

  render() {
    const newList = document.createElement('li');
    newList.classList.add('list-group-item');
    newList.classList.add('list-group-item-action');
    newList.innerHTML = `<a href="#">${this.name}</a><i class="bin"></i>`;
    newList.setAttribute('data-id', this.id);
    return newList;
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
