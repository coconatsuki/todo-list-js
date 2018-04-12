import $ from 'jquery';


const Ui = (() => {
  const listGroup = document.getElementById('list-group');
  const newListInput = document.getElementById('list-name');
  const tableBody = document.getElementById('task-table-body');
  const dateInput = document.getElementById('task-date');
  const hourInput = document.getElementById('task-hour');
  const checkedPriorityInput = document.querySelector('input[name="priorityRadios"]:checked');
  const descriptionInput = document.getElementById('task-description');

  const getCurrentListId = () => {
    return Number(document.querySelector('.lists-sidebar .list-group-item.active').dataset.id);
  }

  // Get Values from the inputs:

  const getNewListName = () => newListInput.value;

  const getNewTaskValues = () => {
    const date = dateInput.value;
    const hour = hourInput.value;
    const checkedPriority = checkedPriorityInput.value;
    const description = descriptionInput.value;
    return {
      date, hour, checkedPriority, description,
    };
  };

  // Create and display a new list:

  const createNewList = (listName, listId) => {
    const newList = document.createElement('li');
    newList.classList.add('list-group-item');
    newList.classList.add('list-group-item-action');
    newList.innerHTML = `<a href="#">${listName}</a><i class="bin"></i>`;
    newList.setAttribute('data-id', listId);
    return newList;
  };

  const displayNewList = function(listName, listId) {
    const newList = createNewList(listName, listId);
    listGroup.appendChild(newList);
    $('#listModal').modal('toggle');
    newListInput.value = '';
  };

  // Create and display a new task:

  const createNewTableRow = (task) => {
    const newRow = document.createElement('tr');
    const dateString = `<th scope="row">${task.date}</th>`;
    const hourString = `<td>${task.hour}</td>`;
    const descriptionString = `<td><strong>${task.description}</strong></td>`;
    const priorityString = `<td><strong>${task.priority}</strong></td>`;
    const eraseOptionString = `<td><div class="form-check form-check-inline d-flex justify-content-around">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <i class="bin"></i></div></td>`;
    newRow.innerHTML = dateString + hourString + descriptionString +
    priorityString + eraseOptionString;
    newRow.setAttribute('data-id', task.id);
    newRow.setAttribute('data-list', task.list);
    return newRow;
  };

  const displayNewTask = (task) => {
    const newRow = createNewTableRow(task);
    tableBody.appendChild(newRow);
    $('#taskModal').modal('toggle');
  };

  return {
    displayNewList,
    displayNewTask,
    getCurrentListId,
    getNewListName,
    getNewTaskValues,
  };
})();

export default Ui;
