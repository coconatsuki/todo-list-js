import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  FormFeedback,
  Label,
} from 'reactstrap';
import { find } from 'lodash';

class AddListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      modal: false,
      error: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      error: false,
    });
  }

  handleChangeName(name) {
    this.setState({
      name,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === '') {
      this.setState({ error: 'Please enter a list name.' });
      return;
    }
    if (find(this.props.allLists, { name: this.state.name })) {
      this.setState({ error: 'Name already taken.' });
      return;
    }
    this.props.addList(this.state.name);
    this.setState({
      name: '',
      modal: false,
    });
  }

  render() {
    return [
      <Button key="button" color="primary" onClick={this.toggle}>
        Add a list
      </Button>,
      <Modal key="modal" isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add a new to-do list</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <Label forhtml="list-name" className="col-form-label">
                List name:
              </Label>
              <Input
                type="text"
                invalid={!!this.state.error}
                className="form-control"
                id="list-name"
                value={this.state.name}
                onChange={(e) => {
                  this.handleChangeName(e.target.value);
                }}
              />
              {this.state.error ? (
                <FormFeedback>{this.state.error}</FormFeedback>
              ) : null}
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>
            Add list
          </Button>{' '}
          <Button color="secondary" onClick={this.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>,
    ];
  }
}

export default AddListForm;
