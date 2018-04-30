import '@babel/polyfill'; // import polyfills for unsupported ES6 methods in old browsers. Babel only cares about syntax, not methods.
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

import 'bootstrap';
import './../css/main.scss'; // To take the css from /src into /dist, it's necessary to import it here first,
// so that css-loader (or style-loader) can be able to load it and make it available to the extract plugin
// which will extract it from here to make a separate css file, or put it in the html head.
import App from './component/app';
import './../images/coffee-note.jpg';

import Ui from './ui';
import Display from './display';
import List from './list';
import Task from './task';
import Node from './node';

render(<App />, document.getElementById('app'));
/* 
const Controller = (() => {
  let listNumber = 1;
  let allLists = [];

  // LOCAL STORAGE METHODS

  const allListsObject = () => (allLists.map(list => list.listObject()));

  const saveAllListsObject = () => {
    const jsonAllLists = JSON.stringify(allListsObject());
    localStorage.setItem('jsonAllLists', jsonAllLists);
  };

  const loadAllListsObject = () => {
    const jsonAllLists = localStorage.getItem('jsonAllLists');
    return JSON.parse(jsonAllLists);
  };

  // -------------------------- REBUILD METHODS -------------------------- \\

  const rebuildTasks = (tasksArray, listId) => {
    const tasks = [];
    for (const task of tasksArray) {
      const newTask = new Task({
        list: listId,
        date: task.date,
        hour: task.hour,
        priority: task.priority,
        description: task.description,
        id: task.id,
      });
      tasks.push(newTask);
    }
    return tasks;
  };

  const rebuildAllLists = (listObjects) => {
    for (const list of listObjects) {
      createNewList(list.name, list.id);
      if (list.tasks.length > 0) {
        const currentList = allLists.find(li => li.id === list.id);
        currentList.tasks = rebuildTasks(list.tasks, list.id);
      }
    }
  };

  const addListenersToLoadedTasks = (tasks) => {
    for (const task of tasks) {
      addAllListenersToNewTask(task);
    }
  };

  const rebuildLists = () => {
    allLists = [];
    const listObjects = loadAllListsObject();
    if (listObjects && listObjects.length > 0) {
      rebuildAllLists(listObjects);
      const firstListElement = Node.listGroup.querySelector('.list-group-item:first-child');
      const firstList = allLists.find(list => list.id === Number(firstListElement.dataset.id));
      Ui.switchActiveList(firstList);
      Display.displayListTasks(allLists[0]);
      addListenersToLoadedTasks(allLists[0].tasks);
    } else {
      createNewList();
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

    // ------------------ UPDATE TASK METHODS ----------------------------- \\

  const updateAllLists = (taskId, editedValues) => {
    const currentList = getCurrentList();
    const currentTask = currentList.tasks.find(task => task.id === Number(taskId));
    currentTask.date = editedValues.date;
    currentTask.hour = editedValues.hour;
    currentTask.description = editedValues.description;
    currentTask.priority = editedValues.priority;
  };

  const updateTask = () => {
    const editedValues = Ui.getEditedValues();
    const taskId = Node.editModal.dataset.taskid;
    const taskList = Node.editModal.dataset.tasklist;
    Display.updateTaskHtml(editedValues, taskId, taskList);
    updateAllLists(taskId, editedValues);
    $('#edit-task-modal').modal('toggle');
    saveAllListsObject();
  };

  const addListenerToUpdateModal = () => {
    Node.updateButton.addEventListener('click', updateTask);
  };

  // ------------------ ADD A NEW TASK METHODS ----------------------------- \\

  // Listeners on new tasks (remove & edit buttons)

  const taskRemoveListener = (taskId, taskList, taskElement) => (
    () => {
      const currentList = getCurrentList();
      const currentTask = getTask(taskList, taskId);
      const taskIndex = currentList.tasks.indexOf(currentTask);
      currentList.tasks.splice(taskIndex, 1);
      taskElement.parentNode.removeChild(taskElement);
      saveAllListsObject();
    }
  );

  const addListenerToNewRemoveTaskCheckbox = (taskId, taskList) => {
    const taskElement = Node.taskElement(taskId, taskList);
    const removeCheckbox = Node.removeCheckbox(taskElement);
    removeCheckbox.addEventListener('click', taskRemoveListener(taskId, taskList, taskElement));
  };

  const addListenerToNewEditTaskButton = function(task) {
    Node.newEditButton().addEventListener('click', () => {
      const currentTask = allLists.find(li => li.id === task.list).tasks.find(ta => ta.id === task.id);
      Ui.fillEditModalwithTaskValues(currentTask);
      Ui.changeModalDatasetWithCurrentTask(currentTask.id, currentTask.list);
    });
  };

  const addAllListenersToNewTask = (newTask) => {
    addListenerToNewEditTaskButton(newTask);
    addListenerToNewRemoveTaskCheckbox(newTask.id, newTask.list);
  };

  // Listeners on "Create new Task Modal" (button and form)

  const addTaskToList = (currentList, newTask) => {
    currentList.addTask(newTask);
  };

  const getNewTask = (currentList) => {
    const taskValues = Ui.getNewTaskValues(currentList.id, currentList.taskNumber);
    const newTask = new Task(taskValues);
    return newTask;
  };

  const createTask = () => {
    const currentList = getCurrentList();
    const newTask = getNewTask(currentList);
    const newRow = newTask.render();
    Display.displayNewTask(newTask, newRow);
    addTaskToList(currentList, newTask);
    addAllListenersToNewTask(newTask);
    Ui.cleanModal();
    saveAllListsObject();
  };

  const addListenerToCreateTask = () => {
    Node.newTaskButton.addEventListener('click', createTask);
  };

  // ------------------ ADD A NEW LIST METHODS ----------------------------- \\

  // Remove new List listener

  const removeListFromAllLists = (newList) => {
    const listIndex = allLists.indexOf(newList);
    allLists.splice(listIndex, 1);
    if (allLists.length === 0) {
      document.getElementById('task-modal-button').disabled = true;
    }
  };

  const removeButtonListener = (currentListElement, newList) => (
    () => {
      currentListElement.parentNode.removeChild(currentListElement);
      removeListFromAllLists(newList);
      Node.tableBody.innerHTML = '';
      if (allLists.length > 0) {
        Ui.switchActiveList(allLists[0]);
        Display.displayListTasks(allLists[0]);
        addListenersToLoadedTasks(allLists[0].tasks);
      }
      saveAllListsObject();
    }
  );

  const addListenerToNewRemoveListButton = function(newList) {
    const removeButton = Ui.listElementBin(newList);
    const currentListElement = Ui.listElement(newList);
    removeButton.addEventListener('click', removeButtonListener(currentListElement, newList));
  };

  // Switch list listener

  const addListenerToSwitchList = (newList) => {
    Ui.listElement(newList).addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.className === 'bin') { return; }
      Display.displayListTasks(newList);
      addListenersToLoadedTasks(newList.tasks);
      Ui.switchActiveList(newList);
    });
  };

  const addAllListenersToNewList = (newList) => {
    addListenerToNewRemoveListButton(newList);
    addListenerToSwitchList(newList);
  };

  // Add new list

  const addNewListToAllLists = (newList) => {
    listNumber += 1;
    allLists.push(newList);
  };

  const createNewList = (name = 'Everything', listId = listNumber) => {
    const listName = name;
    const newList = new List({ id: listId, name: listName });
    Display.displayNewList(newList.render());
    addNewListToAllLists(newList);
    addAllListenersToNewList(newList);
    Ui.switchActiveList(newList);
    document.getElementById('task-modal-button').disabled = false;
    return newList;
  };

  const createNewListFromEvent = (event) => {
    event.preventDefault();
    const newList = createNewList(Ui.getNewListName());
    Display.displayListTasks(newList);
    saveAllListsObject();
    Display.closeModalNewList();
  };

  const addListenerToListButton = function() {
    Node.newListButton.addEventListener('click', createNewListFromEvent);
    Node.addListForm.addEventListener('submit', createNewListFromEvent);
  };

  return {
    addListenerToListButton,
    addListenerToCreateTask,
    addListenerToUpdateModal,
    rebuildLists,
    createNewList,
  };
})();

Controller.rebuildLists();
Controller.addListenerToListButton();
Controller.addListenerToCreateTask();
Controller.addListenerToUpdateModal(); */
