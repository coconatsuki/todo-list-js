import $ from 'jquery';

const Ui = (() => {
  const listGroup = document.getElementById('list-group');
  const newListInput = document.getElementById('list-name');
  const tableBody = document.getElementById('task-table-body');
  const dateInput = document.getElementById('task-date');
  const hourInput = document.getElementById('task-hour');
  const checkedPriorityInput = document.querySelector('input[name="priorityRadios"]:checked');
  const descriptionInput = document.getElementById('task-description');

  const editModal = document.getElementById('edit-task-modal');
  const editDateInput = document.getElementById('edit-task-date');
  const editHourInput = document.getElementById('edit-task-hour');
  const editCheckedPriorityInput = document.querySelector('input[name="edit-priorityRadios"]:checked');
  const editDescriptionInput = document.getElementById('edit-task-description');

  const getCurrentListId = () => Number(document.querySelector('.lists-sidebar .list-group-item.active').dataset.id);

  // Get Values from the inputs:

  const getNewListName = () => newListInput.value;

  const getNewTaskValues = () => {
    const date = dateInput.value;
    const hour = hourInput.value;
    const checkedPriority = checkedPriorityInput.value;
    const description = descriptionInput.value;
    return {
      date, hour, description, checkedPriority,
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
    const editString = `<td class="edit-column">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#taskModal">
                        <i></i></button></td>`;
    newRow.innerHTML = dateString + hourString + descriptionString +
    priorityString + eraseOptionString + editString;
    newRow.setAttribute('data-id', task.id);
    newRow.setAttribute('data-list', task.list);
    return newRow;
  };

  const displayNewTask = (task) => {
    const newRow = createNewTableRow(task);
    tableBody.appendChild(newRow);
    $('#taskModal').modal('toggle');
  };

  // useful for the Edit Task Button:

  const cleanModal = () => {
    dateInput.value = '';
    hourInput.value = '';
    checkedPriorityInput.value = '';
    descriptionInput.value = '';
  };

  const cleanEditModal = () => {
    editDateInput.value = '';
    editHourInput.value = '';
    editCheckedPriorityInput.value = '';
    editDescriptionInput.value = '';
  };

  const fillEditModalwithTaskValues = (taskValues) => {
    editDateInput.value = taskValues.date;
    editHourInput.value = taskValues.hour;
    editCheckedPriorityInput.value = taskValues.priority;
    editDescriptionInput.value = taskValues.description;
  };

  const addListenerToNewEditTaskButton = function(taskValues) {
    const newEditButton = document.querySelector('#task-table-body tr:last-child .edit-column button');
    newEditButton.addEventListener('click', () => {
      fillEditModalwithTaskValues(taskValues);
    });
  };

  return {
    addListenerToNewEditTaskButton,
    cleanModal,
    displayNewList,
    displayNewTask,
    getCurrentListId,
    getNewListName,
    getNewTaskValues,
    fillEditModalwithTaskValues,
  };
})();

export default Ui;
