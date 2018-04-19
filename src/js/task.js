class Task {
  constructor(list, options = {}) {
    this.date = options.date;
    this.hour = options.hour;
    this.description = options.description;
    this.priority = options.priority;
    this.list = list;
    this.id = options.id || 1;
    this.render = options.render || '';
  }

  taskObject() {
    return {
      date: this.date,
      hour: this.hour,
      description: this.description,
      priority: this.priority,
      list: this.list,
      id: this.id,
      render: this.render,
    };
  }
}

export default Task;
