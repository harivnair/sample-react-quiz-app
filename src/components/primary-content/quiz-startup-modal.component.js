/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class QuizStartup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Welcome to the quiz</ModalHeader>
          <ModalBody>
{'You are going to start a quiz which contains 10 questions. On winning the quiz you will awarded a 🏆' }</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Start the quiz</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default QuizStartup;