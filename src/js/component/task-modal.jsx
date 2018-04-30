import React from 'react';
import TaskForm from './task-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TaskModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      // task: {
      id: 1,
      listId: 1,
      date: '',
      hour: '',
      description: '',
      priority: '',
      //}
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  handlePriorityChange(e) {
    this.setState({
      priority: e.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addTask({
      date: this.state.date,
      hour: this.state.hour,
      priority: this.state.priority,
      description: this.state.description,
    });
    this.toggle();
  }

  render() {
    return [
      <Button key="button" color="primary" onClick={this.toggle}>
        Add a task
      </Button>,
      <Modal
        key="modal"
        isOpen={this.state.modal}
        toggle={this.toggle}
        size="lg"
      >
        <ModalHeader toggle={this.toggle}>Add a new task</ModalHeader>
        <ModalBody>
          <TaskForm
            date={this.state.date}
            hour={this.state.hour}
            description={this.state.description}
            priority={this.state.priority}
            handleChange={this.handleChange}
            handlePriorityChange={this.handlePriorityChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleClick}>
            Add task
          </Button>{' '}
          <Button color="secondary" onClick={this.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>,
    ];
  }
}

export default TaskModal;
