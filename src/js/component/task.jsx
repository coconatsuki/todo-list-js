import React from 'react';
import { ListGroupItem } from 'reactstrap';

const Task = ({ task, removeTask }) => (
  <tr>
    <td>{task.date}</td>
    <td>{task.hour}</td>
    <td className="flag-field">
      <i className={`${task.priority}-flag`} />
    </td>
    <td>
      <strong>{task.description}</strong>
    </td>
    <td>
      <div className="form-check form-check-inline d-flex justify-content-around">
        <i className="bin" onClick={() => removeTask(task.listId, task.id)} />
      </div>
    </td>
    <td className="edit-column">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#edit-task-modal"
      >
        <i />
      </button>
    </td>
  </tr>
);

export default Task;
