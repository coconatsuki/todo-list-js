import React from 'react';
import { ListGroupItem } from 'reactstrap';

const Task = ({ task }) => (
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
        <input
          className="form-check-input remove-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <i className="bin" />
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
