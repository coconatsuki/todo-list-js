import React from 'react';
import AddListForm from './add-list-form';
import List from './list';
import Task from './task';
import TaskModal from './task-modal';
import { ListGroup } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  addList(name) {
    const list = { name, id: this.state.allLists.length + 1, tasks: [] };
    this.setState({
      allLists: [...this.state.allLists, list],
    });
  }

  removeList(id) {
    this.setState({
      allLists: this.state.allLists.filter(li => li.id !== id),
    });
  }

  findList(listId) {
    return this.state.allLists.find(li => li.id === listId);
  }

  findTask(list, taskId) {
    return list.tasks.find(ta => ta.id === taskId);
  }

  filterLists(listId) {
    return this.state.allLists.filter(li => li.id !== listId);
  }

  addTask({ date, hour, priority, description }) {
    const list = this.findList(this.state.currentListId);
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
              {this.state.allLists.map(e => (
                <List id={e.id} name={e.name} removeList={this.removeList} />
              ))}
            </ul>
          </section>

          <section className="current-list-container col-md-10 d-flex justify-content-center">
            <div className="current-list-block d-flex flex-column align-items-center">
              <div className="current-list-title d-flex justify-content-center">
                <h2>Home</h2>
              </div>

              <TaskModal addTask={this.addTask} />

              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Done?</th>
                      <th scole="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody id="task-table-body">
                    {this.findList(this.state.currentListId).tasks.map(task => (
                      <Task
                        removeTask={this.removeTask}
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
