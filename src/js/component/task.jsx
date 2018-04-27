import React from 'react'
import { ListGroupItem } from 'reactstrap';

const Task < = ({ id, date, hour, description, priority, listId }) => (
  <td>{date}</th> <td>{hour}</td> <td><strong>{description}</strong></td>
  <td><div classNameName="form-check form-check-inline d-flex justify-content-around">
    <input classNameName="form-check-input remove-input" type="checkbox" id="inlineCheckbox1" value="option1">
      <i className="bin"></i></div></td>
    <td className="edit-column">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#edit-task-modal">
        <i></i></button></td>
    );
    
export default Task;