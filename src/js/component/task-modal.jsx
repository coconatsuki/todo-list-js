import React from 'react';
import TaskForm from './task-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TaskModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      // task: {
      id: props.id,
      listId: props.listId,
      date: props.date || '',
      hour: props.hour || '',
      description: props.description || '',
      priority: props.priority || '',
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

  cleanModal() {
    this.state.date = '';
    this.state.hour = '';
    this.state.priority = '';
    this.state.description = '';
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.addTask) {
      this.props.addTask({
        date: this.state.date,
        hour: this.state.hour,
        priority: this.state.priority,
        description: this.state.description,
      });
    } else if (this.props.updateTask) {
      this.props.updateTask(this.state.listId, this.state.id, {
        date: this.state.date,
        hour: this.state.hour,
        priority: this.state.priority,
        description: this.state.description,
      });
    }
    this.toggle();
    this.cleanModal();
  }

  renderButton() {
    if (this.props.addTask) {
      return (
        <Button key="button" color="primary" onClick={this.toggle}>
          Add a new task
        </Button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#edit-task-modal"
          onClick={this.toggle}
        >
          <i />
        </button>
      );
    }
  }

  render() {
    return [
      this.renderButton(),
      <Modal
        key="modal"
        isOpen={this.state.modal}
        toggle={this.toggle}
        size="lg"
      >
        <ModalHeader toggle={this.toggle}>{this.props.headerText}</ModalHeader>
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
            {this.props.buttonText}
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
