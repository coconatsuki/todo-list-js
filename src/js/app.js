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
  const editModal = document.getElementById('edit-task-modal');
  let listNumber = 1;
  const allLists = [];

  const getCurrentList = () => {
    const listId = Ui.getCurrentListId();
    return allLists.find(list => list.id === listId);
  };

  const createNewTask = (currentList) => {
    const taskValues = Ui.getNewTaskValues();
    const newTask = new Task(currentList, taskValues);
    newTask.id = currentList.taskNumber;
    return newTask;
  };

  // Add list & Add task listeners:

  const addListenerToListButton = function() {
    newListButton.addEventListener('click', () => {
      const listName = Ui.getNewListName();
      const newList = new List(listNumber, listName);
      Ui.displayNewList(listName, newList.id);
      listNumber += 1;
      allLists.push(newList);
    });
  };

  const getTaskValues = task => ({
    date: task.date, hour: task.hour, priority: task.priority, description: task.description, id: task.id, list: task.list,
  });

  const addListenerToTaskButton = () => {
    newTaskButton.addEventListener('click', () => {
      const currentList = getCurrentList();
      const newTask = createNewTask(currentList);
      currentList.addTask(newTask);
      Ui.displayNewTask(newTask);
      Ui.addListenerToNewEditTaskButton(getTaskValues(newTask));
      Ui.cleanModal();
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
      // Ui.cleanEditModal();
    });
  };

  // Edit task button listener (FOR TESTING):

  const getTaskId = function(taskElement) {
    return Number(taskElement.dataset.id);
  };

  const getTaskList = function(taskElement) {
    return Number(taskElement.dataset.list);
  };

  const getTask = (taskList, taskId) => {
    const currentList = allLists.find(list => list.id === taskList);
    return currentList.tasks.find(task => task.id === taskId);
  };

  // task.parentNode.removeChild(task)

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

  return {
    addListenerToListButton,
    addListenerToTaskButton,
    addListenerToEditTaskButton,
    allLists,
    addListenerToUpdateButton,
  };
})();

Controller.addListenerToListButton();
Controller.addListenerToTaskButton();
Controller.addListenerToEditTaskButton();
Controller.addListenerToUpdateButton();

// For testing the app only:

const allTestTasks = Array.from(document.querySelectorAll('#task-table-body tr'));
const listOfTasks = allTestTasks.map((task, index) => new Task(1, {
  date: '2018-05-28', hour: '12:00', priority: 'Moderate', description: 'Some previous task', id: index + 1,
}));
const testList = new List(1, 'testList');
Controller.allLists.push(testList);
listOfTasks.forEach(task => testList.tasks.push(task));
