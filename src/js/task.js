class Task {
  constructor({
    date, hour, description, priority, list, id,
  }) {
    this.date = date;
    this.hour = hour;
    this.description = description;
    this.priority = priority;
    this.list = list;
    this.id = id;
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

  setPriority() {
    if (this.priority === 'Moderate') {
      return '<td class="flag-field"><i class="orange-flag"></i></td>';
    } else if (this.priority === 'High') {
      return '<td class="flag-field"><i class="red-flag"></i></td>';
    } else if (this.priority === 'Low') {
      return '<td class="flag-field"><i class="green-flag"></i></td>';
    }
    return '<td class="flag-field"><i class="orange-flag"></i></td>';
  }

  render() {
    const newRow = document.createElement('tr');
    const dateString = `<td>${this.date}</th>`;
    const hourString = `<td>${this.hour}</td>`;
    const descriptionString = `<td><strong>${this.description}</strong></td>`;
    const priorityString = this.setPriority();
    const eraseOptionString = `<td><div class="form-check form-check-inline d-flex justify-content-around">
    <input class="form-check-input remove-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <i class="bin"></i></div></td>`;
    const editString = `<td class="edit-column">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#edit-task-modal">
    <i></i></button></td>`;
    newRow.innerHTML = dateString + hourString + descriptionString +
    priorityString + eraseOptionString + editString;
    newRow.setAttribute('data-id', this.id);
    newRow.setAttribute('data-list', this.list);
    return newRow;
  }
}

export default Task;
