import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleChangeName(name) {
    this.setState({
      name,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addList(this.state.name);
    this.setState({
      name: '',
      modal: false,
    });
  }

  render() {
    return ([
      <Button key="button" color="primary" onClick={this.toggle}>Add a list</Button>,
      <Modal key="modal" isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add a new to-do list</ModalHeader>
        <ModalBody>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label forhtml="list-name" className="col-form-label">List name:</label>
              <input type="text" className="form-control" id="list-name" value={this.state.name}
                onChange={e => { this.handleChangeName(e.target.value) }} />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>Add list</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Close</Button>
        </ModalFooter>
      </Modal>




    ]);
  }
}

export default AddListForm;