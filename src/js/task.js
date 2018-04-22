class Task {
  constructor(options = {}) {
    this.date = options.date;
    this.hour = options.hour;
    this.description = options.description;
    this.priority = options.priority;
    this.list = options.list;
    this.id = options.id || 1;
  }

  taskObject() {
    return {
      date: this.date,
      hour: this.hour,
      description: this.description,
      priority: this.priority,
      list: this.list,
      id: this.id,
    };
  }

  render() {
    const newRow = document.createElement('tr');
    const dateString = `<th scope="row">${this.date}</th>`;
    const hourString = `<td>${this.hour}</td>`;
    const descriptionString = `<td><strong>${this.description}</strong></td>`;
    const priorityString = `<td><strong>${this.priority}</strong></td>`;
    const eraseOptionString = `<td><div class="form-check form-check-inline d-flex justify-content-around">
    <input class="form-check-input remove-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <i class="bin"></i></div></td>`;
    const editString = `<td class="edit-column">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#edit-task-modal">
    <i></i></button></td>`;
    newRow.innerHTML = dateString + hourString + descriptionString +
    priorityString + eraseOptionString + editString;
    newRow.setAttribute('data-id', this.id);
    newRow.setAttribute('data-list', this.list.id);
    return newRow;
  }
}

export default Task;
