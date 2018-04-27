import React from 'react'
import AddListForm from './add-list-form';
import List from './list';
import Task from './task';
import { ListGroup } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allLists: [],
    }
    this.addList = this.addList.bind(this)
    this.removeList = this.removeList.bind(this);
  }

  addList(name) {
    const list = { name, id: (this.state.allLists.length + 1), tasks: [] };
    this.setState({
      allLists: [...this.state.allLists, list],
    });
  }

  removeList(id) {
    this.setState({
      allLists: this.state.allLists.filter(li => li.id !== id),
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
              <AddListForm allLists={this.state.allLists} addList={this.addList} />
            </div>
            <ul className="list-group list-group-flush" id="list-group">{this.state.allLists.map(e => <List id={e.id} name={e.name} removeList={this.removeList} />)}</ul>
          </section>



          <div className="modal fade" id="edit-task-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="edit-task-modal-Label">Edit task</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" id="update-task-button">Update task</button>
                </div>
              </div>
            </div>
          </div>


          <div className="modal fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add a new task</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="d-flex" id="add-task-form">
                    <div className="form-group">
                      <label forHtml="date-name" className="col-form-label">Date:</label>
                      <input type="date" name="date" className="form-control" id="task-date" />
                    </div>
                    <div className="form-group">
                      <label forHtml="hour-text" className="col-form-label">Hour:</label>
                      <input type="time" name="time" className="form-control" id="task-hour" />
                    </div>
                    <div className="form-group">
                      <label forHtml="normal" className="col-form-label">Priority:</label>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="priorityRadios" id="normal" value="Moderate" checked />
                        <label className="form-check-label" forHtml="priorityRadios1">
                          Normal
                    </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="priorityRadios" id="high" value="High" />
                        <label className="form-check-label" forHtml="priorityRadios2">
                          High
                    </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="priorityRadios" id="low" value="Low" />
                        <label className="form-check-label" forHtml="priorityRadios3">
                          Low
                    </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label forHtml="description-text" className="col-form-label">Description:</label>
                      <textarea className="form-control" id="task-description"></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" id="add-new-task-button">Add task</button>
                </div>
              </div>
            </div>
          </div>

          <section className="current-list-container col-md-10 d-flex justify-content-center">
            <div className="current-list-block d-flex flex-column align-items-center">
              <div className="current-list-title d-flex justify-content-center">
                <h2>Home</h2>
              </div>
              <button type="button" className="btn btn-primary" id="task-modal-button" data-toggle="modal" data-target="#taskModal">Add new task</button>
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
                  <tbody id="task-table-body"></tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
};

export default App



