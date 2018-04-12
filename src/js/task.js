class Task {
  constructor(list, date, hour, description, priority) {
    this.date = date;
    this.hour = hour;
    this.description = description;
    this.priority = priority;
    this.list = list;
    this.id = 1;
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
