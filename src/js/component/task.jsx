import React from 'react';
import TaskModal from './task-modal';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
  }

  render() {
    return (
      <tr>
        <td>{this.props.task.date}</td>
        <td>{this.props.task.hour}</td>
        <td className="text-center">
          <strong>{this.props.task.description}</strong>
        </td>
        <td className="flag-field text-center">
          <i className={`${this.props.task.priority}-flag`} />
        </td>
        <td>
          <div className="form-check form-check-inline d-flex task-bin-container justify-content-center">
            <i
              className="bin"
              onClick={() =>
                this.props.removeTask(
                  this.props.task.listId,
                  this.props.task.id,
                )
              }
            />
          </div>
        </td>
        <td className="edit-column">
          <TaskModal
            updateTask={this.props.updateTask}
            headerText="Edit task"
            buttonText="Update Task"
            date={this.props.task.date}
            hour={this.props.task.hour}
            priority={this.props.task.priority}
            description={this.props.task.description}
            id={this.props.task.id}
            listId={this.props.task.listId}
          />
        </td>
      </tr>
    );
  }
}

export default Task;
