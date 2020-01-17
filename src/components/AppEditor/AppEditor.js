import React, { Component } from "react";
import classes from "./AppEditor.module.scss";
import Modal from "@material-ui/core/Modal";
import StepperForm from '../StepperForm/StepperForm';

class AppEditor extends Component {
  render() {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.opened}
        onClose={this.props.closed}
      >
        <div className={classes.AppEditor}>
          <StepperForm />
        </div>
      </Modal>
    );
  }
}

export default AppEditor;
