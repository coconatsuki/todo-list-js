import $ from 'jquery';

const Display = (() => {
  const listGroup = document.getElementById('list-group');
  const newListInput = document.getElementById('list-name');
  const tableBody = document.getElementById('task-table-body');

  const displayNewList = function(listElement, event) {
    listGroup.appendChild(listElement);
    if (event !== undefined) { $('#listModal').modal('toggle'); }
    newListInput.value = '';
  };

  const displayListTasks = function(newList) {
    tableBody.innerHTML = '';
    newList.tasks.forEach((task) => {
      tableBody.appendChild(task.render());
    });
  };

  const displayNewTask = (task, row) => {
    tableBody.appendChild(row);
    $('#taskModal').modal('toggle');
  };

  const updateTaskHtml = (editedValues, taskId, taskList) => {
    const taskDate = document.querySelector(`[data-id="${taskId}"][data-list ="${taskList}"] th`);
    const taskHour = document.querySelector(`[data-id="${taskId}"][data-list ="${taskList}"] td:nth-child(1n)`);
    const taskDescription = document.querySelector(`[data-id="${taskId}"][data-list ="${taskList}"] td:nth-child(3n)`);
    const taskPriority = document.querySelector(`[data-id="${taskId}"][data-list ="${taskList}"] td:nth-child(4n)`);
    taskDate.textContent = editedValues.date;
    taskHour.textContent = editedValues.hour;
    taskDescription.innerHTML = `<strong>${editedValues.description}</strong>`;
    taskPriority.textContent = editedValues.priority;
  };

  return {
    displayNewList,
    displayListTasks,
    displayNewTask,
    updateTaskHtml,
  };
})();

export default Display;
