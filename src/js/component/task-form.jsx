import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const TaskForm = ({
  date,
  hour,
  priority,
  description,
  handleChange,
  handlePriorityChange,
}) => (
  <Form className="d-flex justify-content-around">
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="date-name">Date:</Label>
      <Input
        type="date"
        name="date"
        id="date-name"
        value={date}
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="hour-text">Hour:</Label>
      <Input
        type="time"
        name="hour"
        id="hour-text"
        value={hour}
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup tag="fieldset" className="mb-2 mr-sm-2 mb-sm-0">
      Priority:
      <FormGroup check>
        <Label check>
          <Input
            type="radio"
            name="edit-priorityRadios"
            value="moderate"
            checked={priority === 'moderate'}
            onChange={handlePriorityChange}
          />{' '}
          Normal
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="radio"
            name="edit-priorityRadios"
            value="high"
            checked={priority === 'high'}
            onChange={handlePriorityChange}
          />{' '}
          High
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="radio"
            name="edit-priorityRadios"
            value="low"
            checked={priority === 'low'}
            onChange={handlePriorityChange}
          />{' '}
          Low
        </Label>
      </FormGroup>
    </FormGroup>

    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="description-text">Description:</Label>
      <Input
        type="textarea"
        name="description"
        id="description-text"
        value={description}
        onChange={handleChange}
      />
    </FormGroup>
  </Form>
);

export default TaskForm;
