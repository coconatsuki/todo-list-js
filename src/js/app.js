import '@babel/polyfill'; // import polyfills for unsupported ES6 methods in old browsers. Babel only cares about syntax, not methods.
import $ from 'jquery';
import './../main.scss'; // To take the css from /src into /dist, it's necessary to import it here first,
// so that css-loader (or style-loader) can be able to load it and make it available to the extract plugin
// which will extract it from here to make a separate css file, or put it in the html head.
import './../images/coffee-note.jpg';
import 'bootstrap';
import Ui from './ui';
import List from './list';
import Task from './task';

const Controller = (() => {
  const newListButton = document.getElementById('new-list-button');
  const newTaskButton = document.getElementById('new-task-button');
  const editTaskButtons = document.querySelectorAll('.edit-column button');
  const updateButton = document.getElementById('update-task-button');
  const removeTaskCheckboxes = document.querySelectorAll('.remove-input');
  const editModal = document.getElementById('edit-task-modal');
  const listElement = newList => (document.querySelector(`#list-group [data-id='${newList.id}']`));
  const listElements = () => (document.querySelectorAll('#list-group .list-group-item'));
  const tableBody = document.getElementById('task-table-body');
  let listNumber = 6;
  let allLists = [];
  const inLoad = false;

  // LOCAL STORAGE METHODS

  const allListsObject = () => allLists.map(list => list.listObject);

  const saveAllListsObject = () => {
    const jsonAllLists = JSON.stringify(allListsObject());
    localStorage.setItem('jsonAllLists', jsonAllLists);
  };

  const loadAllListsObject = () => {
    const jsonAllLists = localStorage.getItem('jsonAllLists');
    return JSON.parse(jsonAllLists);
  };

  const rebuildTasks = (tasksArray, listId) => {
    for (const task of tasksArray) {
      const newTask = new Task(listId, {
        date: task.date, hour: task.hour, priority: task.priority, description: task.description, id: task.id, render: task.render,
      });
    }
  };

  const rebuildLists = () => {
    allLists = [];
    const listObjects = loadAllListsObject();
    for (const list of listObjects) {
      const newList = new List(list.id, list.name);
      const taskList = rebuildTasks(list.tasks, list.id);
      newList.tasks = [...taskList];
      newList.taskNumber = list.taskNumber;
      allLists.push(newList);
    }
  };

  // Find List & Task in allLists + get Task values (back-end)

  const getCurrentList = () => {
    const listId = Ui.getCurrentListId();
    return allLists.find(list => list.id === listId);
  };

  const getTask = (taskList, taskId) => {
    const currentList = allLists.find(list => list.id === taskList);
    return currentList.tasks.find(task => task.id === taskId);
  };

  const getTaskValues = task => ({
    date: task.date, hour: task.hour, priority: task.priority, description: task.description, id: task.id, list: task.list,
  });

  // Find Task id and list in HTML

  const getTaskId = function(taskElement) {
    return Number(taskElement.dataset.id);
  };

  const getTaskList = function(taskElement) {
    return Number(taskElement.dataset.list);
  };

  // Create new task (back-end)

  const createNewTask = (currentList) => {
    const taskValues = Ui.getNewTaskValues();
    const newTask = new Task(currentList, taskValues);
    newTask.id = currentList.taskNumber;
    return newTask;
  };

  // Switch list listener (for all lists)

  // TO BE DONE

  // Switch list listener (for a new list)

  const switchActiveList = function(newList) {
    const activeList = document.querySelector('#list-group .active');
    activeList.classList.remove('active');
    listElement(newList).classList.add('active');
  };

  const refreshTable = function(newList) {
    tableBody.innerHTML = '';
    newList.tasks.forEach((task) => {
      tableBody.appendChild(task.render);
    });
  };

  const addListenerToSwitchList = function(newList) {
    listElement(newList).addEventListener('click', (event) => {
      event.preventDefault();
      refreshTable(newList);
      switchActiveList(newList);
    });
  };

  // Remove all Lists listener

  const AddListenerToAllListsRemoveButton = function() {
    const lists = listElements();
    for (const list of lists) {
      const bin = list.querySelector('.bin');
      bin.addEventListener('click', () => {
        list.parentNode.removeChild(list);
        const listId = list.dataset.id;
        const listTobeDeleted = allLists.find(li => li.id === Number(listId));
        const listIndex = allLists.indexOf(listTobeDeleted);
        allLists.splice(listIndex, 1);
        saveAllListsObject();
      });
    }
  };

  // Remove new List listener

  const addListenerToNewRemoveListButton = function(newList) {
    const removeButton = listElement(newList).querySelector('.bin');
    removeButton.addEventListener('click', () => {
      listElement.parentNode.removeChild(listElement);
      const listIndex = allLists.indexOf(newList);
      allLists.splice(listIndex, 1);
      saveAllListsObject();
    });
  };

  // Add new list listener:

  const addListenerToListButton = function() {
    newListButton.addEventListener('click', () => {
      const listName = Ui.getNewListName();
      const newList = new List(listNumber, listName);
      Ui.displayNewList(listName, newList.id);
      listNumber += 1;
      allLists.push(newList);
      addListenerToNewRemoveListButton(newList);
      addListenerToSwitchList(newList);
      switchActiveList(newList);
      refreshTable(newList);
      saveAllListsObject();
    });
  };

  // Remove button listener for new tasks

  const addListenerToNewRemoveTaskCheckbox = (taskId, taskList) => {
    const taskElement = document.querySelector(`[data-id="${taskId}"][data-list ="${taskList}"]`);
    const removeCheckbox = taskElement.querySelector('.remove-input');
    removeCheckbox.addEventListener('click', () => {
      const currentList = getCurrentList();
      const currentTask = getTask(taskList, taskId);
      const taskIndex = currentList.tasks.indexOf(currentTask);
      currentList.tasks.splice(taskIndex, 1);
      taskElement.parentNode.removeChild(taskElement);
      saveAllListsObject();
    });
  };

  // Listener for creating new tasks

  const addListenerToTaskButton = () => {
    newTaskButton.addEventListener('click', () => {
      const currentList = getCurrentList();
      const newTask = createNewTask(currentList);
      const newRow = Ui.createNewTableRow(newTask);
      Ui.displayNewTask(newTask, newRow);
      newTask.render = newRow;
      currentList.addTask(newTask);
      const taskValues = getTaskValues(newTask);
      Ui.addListenerToNewEditTaskButton(taskValues);
      addListenerToNewRemoveTaskCheckbox(taskValues.id, taskValues.list.id);
      Ui.cleanModal();
      saveAllListsObject();
    });
  };

    // Update Button listener

  const updateAllLists = (taskId, editedValues) => {
    const currentList = getCurrentList();
    const currentTask = currentList.tasks.find(task => task.id === Number(taskId));
    currentTask.date = editedValues.date;
    currentTask.hour = editedValues.hour;
    currentTask.description = editedValues.description;
    currentTask.priority = editedValues.priority;
  };

  const addListenerToUpdateButton = () => {
    updateButton.addEventListener('click', () => {
      const editedValues = Ui.getEditedValues();
      const taskId = editModal.dataset.taskid;
      const taskList = editModal.dataset.tasklist;
      Ui.updateTask(editedValues, taskId, taskList);
      updateAllLists(taskId, editedValues);
      $('#edit-task-modal').modal('toggle');
      saveAllListsObject();
    });
  };

  // Remove task for ALL Button listener (for existing button => TESTING)

  const addListenerToRemoveTaskCheckbox = () => {
    for (const checkbox of removeTaskCheckboxes) {
      checkbox.addEventListener('click', function() {
        const taskElement = this.parentElement.parentElement.parentElement;
        const taskId = getTaskId(taskElement);
        const taskList = getTaskList(taskElement);
        const currentList = getCurrentList();
        const currentTask = getTask(taskList, taskId);
        const taskIndex = currentList.tasks.indexOf(currentTask);
        currentList.tasks.splice(taskIndex, 1);
        taskElement.parentNode.removeChild(taskElement);
        saveAllListsObject();
      });
    }
  };

  // Edit task button listener (FOR TESTING):

  const addListenerToEditTaskButton = function() {
    for (const editTaskButton of editTaskButtons) {
      editTaskButton.addEventListener('click', function() {
        const taskElement = this.parentElement.parentElement;
        const taskList = getTaskList(taskElement);
        const taskId = getTaskId(taskElement);
        const task = getTask(taskList, taskId);
        const taskValues = getTaskValues(task);
        Ui.fillEditModalwithTaskValues(taskValues);
      });
    }
  };

  // localStorage methods


  return {
    addListenerToRemoveTaskCheckbox,
    addListenerToListButton,
    addListenerToTaskButton,
    addListenerToEditTaskButton,
    allLists,
    addListenerToUpdateButton,
    AddListenerToAllListsRemoveButton,
  };
})();

Controller.rebuildLists();
Controller.addListenerToListButton();
Controller.addListenerToTaskButton();
Controller.addListenerToEditTaskButton();
Controller.addListenerToUpdateButton();
Controller.addListenerToRemoveTaskCheckbox();
Controller.AddListenerToAllListsRemoveButton();

// For testing the app only:

const allTestTasks = Array.from(document.querySelectorAll('#task-table-body tr'));
const listOfTasks = allTestTasks.map((task, index) => new Task(1, {
  date: '2018-05-28', hour: '12:00', priority: 'Moderate', description: 'Some previous task', id: index + 1,
}));
const testList = new List(1, 'testList');
Controller.allLists.push(testList);
listOfTasks.forEach(task => testList.tasks.push(task));
