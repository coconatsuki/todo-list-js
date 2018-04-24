const Node = (() => {
  const listGroup = document.getElementById('list-group');
  const tableBody = document.getElementById('task-table-body');
  const newListButton = document.getElementById('new-list-button');
  const addListForm = document.getElementById('add-list-form');
  const taskModalButton = document.getElementById('task-modal-button');
  const newTaskButton = document.getElementById('add-new-task-button');
  const editTaskButtons = document.querySelectorAll('.edit-column button');
  const updateButton = document.getElementById('update-task-button');
  const removeTaskCheckboxes = document.querySelectorAll('.remove-input');
  const editModal = document.getElementById('edit-task-modal');
  const addTaskForm = document.getElementById('add-task-form');
  const updateTaskForm = document.getElementById('update-task-form');

  const newListInput = document.getElementById('list-name');

  const newEditButton = () => (document.querySelector('#task-table-body tr:last-child .edit-column button'));
  const listElements = () => (document.querySelectorAll('#list-group .list-group-item'));
  const taskElement = (taskId, taskList) => (document.querySelector(`[data-id="${taskId}"][data-list ="${taskList}"]`));
  const removeCheckbox = task => (task.querySelector('.remove-input'));

  return {
    tableBody,
    listGroup,
    newListButton,
    newTaskButton,
    addListForm,
    addTaskForm,
    updateTaskForm,
    editTaskButtons,
    updateButton,
    removeTaskCheckboxes,
    taskModalButton,
    editModal,
    listElements,
    newListInput,
    newEditButton,
    taskElement,
    removeCheckbox,
  };
})();

export default Node;
