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
  let listNumber = 1;
  const allLists = [];

  const getCurrentList = () => {
    const listId = Ui.getCurrentListId;
    const currentList = allLists.find(list => list.id === listId);
    return currentList;
  };

  const createNewTask = (currentList) => {
    const taskValues = Ui.getNewTaskValues;
    const newTask = new Task(taskValues);
    newTask.id = currentList.taskNumber;
    newTask.list = currentList;
    return newTask;
  };

  // Add list & Add task listeners:

  const addListenerToListButton = function() {
    newListButton.addEventListener('click', () => {
      const listName = Ui.getNewListName;
      const newList = new List(listNumber, listName);
      const listId = newList.id;
      Ui.displayNewList(listName, listId);
      listNumber += 1;
      allLists.push(newList);
    });
  };

  const addListenerToTaskButton = () => {
    newTaskButton.addEventListener('click', () => {
      const currentList = getCurrentList();
      const newTask = createNewTask(currentList);
      currentList.addTask(newTask);
      Ui.displayNewTask(newTask);
    });
  };
  return {
    addListenerToListButton,
    addListenerToTaskButton,
  };
})();

addListenerToListButton();
addListenerToTaskButton();
