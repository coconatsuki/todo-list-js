import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="date-name">Date:</Label>
          <Input type="date" name="date" id="date-name" />
        </FormGroup>
        <FormGroup>
          <Label for="hour-text">Hour:</Label>
          <Input type="time" name="time" id="hour-text" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Priority:</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="edit-priorityRadios" value="Moderate" />{' '}
              Normal
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="edit-priorityRadios" value="High" />{' '}
              High
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="edit-priorityRadios" value="Low" />{' '}
              Low
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label for="description-text">Description:</Label>
          <Input type="textarea" name="description" id="description-text" />
        </FormGroup>
        { /*<form className="d-flex" id="update-task-form">
        <div className="form-group">
          <label forHtml="date-name" className="col-form-label">Date:</label>
          <input type="date" name="date" className="form-control" id="edit-task-date" />
        </div>
        <div className="form-group">
          <label forHtml="hour-text" className="col-form-label">Hour:</label>
          <input type="time" name="time" className="form-control" id="edit-task-hour" />
        </div>
        <div className="form-group">
          <label forHtml="normal" className="col-form-label">Priority:</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="edit-priorityRadios" id="normal" value="Moderate" checked />
            <label className="form-check-label" forHtml="priorityRadios1">
              Normal
                    </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="edit-priorityRadios" id="high" value="High" />
            <label className="form-check-label" forHtml="priorityRadios2">
              High
                    </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="edit-priorityRadios" id="low" value="Low" />
            <label className="form-check-label" forHtml="priorityRadios3">
              Low
                    </label>
          </div>
        </div>

        <div className="form-group">
          <label forHtml="description-text" className="col-form-label">Description:</label>
          <textarea className="form-control" id="edit-task-description"></textarea>
        </div>
    </form> */}

      </Form>
    )
  }
};

export default TaskForm;