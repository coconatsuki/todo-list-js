import React from 'react';
import { ListGroup, Button } from 'reactstrap';
import { orderBy } from 'lodash';
import AddListForm from './add-list-form';
import List from './list';
import Task from './task';
import TaskModal from './task-modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(localStorage.getItem('state')) || {
      allLists: [{ id: 1, name: 'Everything', tasks: [] }],
      currentListId: 1,
    };
    this.addList = this.addList.bind(this);
    this.removeList = this.removeList.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.findList = this.findList.bind(this);
    this.findTask = this.findTask.bind(this);
    this.filterLists = this.filterLists.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.changeActiveList = this.changeActiveList.bind(this);
  }

  componentDidUpdate() {
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    const jsonAllLists = JSON.stringify(this.state);
    localStorage.setItem('state', jsonAllLists);
  }

  changeActiveList(id) {
    this.setState({
      currentListId: id,
    });
  }

  findList(listId) {
    return this.state.allLists.find(li => li.id === listId);
  }

  currentList() {
    return this.findList(this.state.currentListId);
  }

  findTask(list, taskId) {
    return list.tasks.find(ta => ta.id === taskId);
  }

  filterLists(listId) {
    return this.state.allLists.filter(li => li.id !== listId);
  }

  addList(name) {
    const list = { name, id: this.state.allLists.length + 1, tasks: [] };
    this.setState({
      allLists: [...this.state.allLists, list],
      currentListId: list.id,
    });
  }

  removeList(id) {
    this.setState({
      allLists: this.state.allLists.filter(li => li.id !== id),
    });
    changeActiveList(this.allLists[0].id);
  }

  addTask({
    date, hour, priority, description,
  }) {
    const list = this.currentList();
    const otherLists = this.filterLists(list.id);
    const task = {
      date,
      hour,
      priority,
      description,
      id: list.tasks.length + 1,
      listId: list.id,
    };
    list.tasks.push(task);
    this.setState({
      allLists: [...otherLists, list],
    });
  }

  removeTask(listId, taskId) {
    const list = this.findList(listId);
    const taskToBeDeleted = this.findTask(list, taskId);
    const otherLists = this.filterLists(listId);
    const taskIndex = list.tasks.indexOf(taskToBeDeleted);
    list.tasks.splice(taskIndex, 1);
    this.setState({
      allLists: [...otherLists, list],
    });
  }

  updateTask(listId, taskId, taskValues) {
    const list = this.findList(listId);
    const taskToBeUpdated = this.findTask(list, taskId);
    const otherLists = this.filterLists(listId);
    taskToBeUpdated.date = taskValues.date;
    taskToBeUpdated.hour = taskValues.hour;
    taskToBeUpdated.priority = taskValues.priority;
    taskToBeUpdated.description = taskValues.description;
    const taskIndex = list.tasks.indexOf(taskToBeUpdated);
    list.tasks.splice(taskIndex, 1, taskToBeUpdated);
    this.setState({
      allLists: [...otherLists, list],
    });
  }

  orderedList() {
    return orderBy(this.state.allLists, ['id'], ['asc']);
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-column">
        <section className="row title-row d-flex justify-content-center">
          <h1 className="p-2">Your To-Do List</h1>
        </section>
        <main className="row">
          <section className="lists-sidebar col-md-2 p-3">
            <div className="sidebar-title">
              <h4 className="text-center">All lists</h4>
              <AddListForm
                allLists={this.state.allLists}
                addList={this.addList}
              />
            </div>
            <ul className="list-group list-group-flush" id="list-group">
              {this.orderedList().map(e => (
                <List
                  id={e.id}
                  name={e.name}
                  removeList={this.removeList}
                  changeActiveList={this.changeActiveList}
                  active={e.id === this.state.currentListId}
                />
              ))}
            </ul>
          </section>

          <section className="current-list-container col-md-10 d-flex justify-content-center">
            <div className="current-list-block d-flex flex-column align-items-center">
              <div className="current-list-title d-flex justify-content-center">
                <h2>{this.currentList().name}</h2>
              </div>

              <TaskModal
                button={this.addTaskButton}
                addTask={this.addTask}
                headerText="Add a task"
                buttonText="Add task"
              />

              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">
                        Date
                      </th>
                      <th scope="col" className="text-center">
                        Time
                      </th>
                      <th scope="col" className="text-center">
                        Description
                      </th>
                      <th scope="col" className="text-center">
                        Priority
                      </th>
                      <th scope="col" className="text-center">
                        Done?
                      </th>
                      <th scole="col" className="text-center">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody id="task-table-body">
                    {this.findList(this.state.currentListId).tasks.map(task => (
                      <Task
                        removeTask={this.removeTask}
                        updateTask={this.updateTask}
                        task={task}
                        key={task.id}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
