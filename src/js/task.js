class Task {
  constructor(list, options = {}) {
    this.date = options.date;
    this.hour = options.hour;
    this.description = options.description;
    this.priority = options.priority;
    this.list = list;
    this.id = options.id || 1; // to be checked
  }

  get values() {
    return {date: this.date,
            hour: this.hour,
            priority: this.priority,
            description: this.description
          };
  }

  // bark() {
  //   console.log(`Bark Bark! My name is ${this.name}`)
  // }
  // static info() {
  //   console.log('A dog is better than a cat by 10 times');
  // }
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

export default Task;
