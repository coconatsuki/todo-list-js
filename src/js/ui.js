const Ui = (() => {
  const newListInput = document.getElementById('list-name');
  const dateInput = document.getElementById('task-date');
  const hourInput = document.getElementById('task-hour');
  const checkedPriorityInput = () => (document.querySelector('input[name="priorityRadios"]:checked'));
  const descriptionInput = document.getElementById('task-description');

  const editDateInput = document.getElementById('edit-task-date');
  const editHourInput = document.getElementById('edit-task-hour');
  const editCheckedPriorityInput = () => (document.querySelector('input[name="edit-priorityRadios"]:checked'));
  const editDescriptionInput = document.getElementById('edit-task-description');

  const editModal = document.getElementById('edit-task-modal');
  const listElement = newList => (document.querySelector(`#list-group [data-id='${newList.id}']`));
  const listElementBin = newList => (listElement(newList).querySelector('.bin'));
  const currrentActiveList = () => (document.querySelector('#list-group .active'));
  const getCurrentListId = () => Number(document.querySelector('.lists-sidebar .list-group-item.active').dataset.id);
  const getNewListName = () => newListInput.value;

  // Get Values from the inputs:

  const getNewTaskValues = (taskList, taskId) => {
    const date = dateInput.value;
    const hour = hourInput.value;
    const priority = checkedPriorityInput().value;
    const description = descriptionInput.value;
    return {
      date,
      hour,
      description,
      priority,
      id: taskId,
      list: taskList,
    };
  };

  const getEditedValues = () => {
    const date = editDateInput.value;
    const hour = editHourInput.value;
    const priority = editCheckedPriorityInput().value;
    const description = editDescriptionInput.value;
    return {
      date, hour, description, priority,
    };
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

  const changeModalDatasetWithCurrentTask = (taskId, taskList) => {
    editModal.setAttribute('data-taskid', taskId);
    editModal.setAttribute('data-tasklist', taskList);
  };

  const switchActiveList = (newList) => {
    const activeList = currrentActiveList();
    if (activeList) {
      activeList.classList.remove('active');
    }
    listElement(newList).classList.add('active');
  };

  // Find Task id and list in HTML

  const getTaskId = function(taskElement) {
    return Number(taskElement.dataset.id);
  };

  const getTaskList = function(taskElement) {
    return Number(taskElement.dataset.list);
  };

  return {
    getTaskId,
    getTaskList,
    getNewListName,
    listElement,
    listElementBin,
    currrentActiveList,
    switchActiveList,
    getEditedValues,
    cleanModal,
    cleanEditModal,
    getCurrentListId,
    getNewTaskValues,
    fillEditModalwithTaskValues,
    changeModalDatasetWithCurrentTask,
  };
})();

export default Ui;
