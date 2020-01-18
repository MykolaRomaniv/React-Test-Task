import React from "react";
import classes from "./AppEditor.module.scss";
import Modal from "@material-ui/core/Modal";
import StepperForm from "../StepperForm/StepperForm";

const appEditor = (props) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.isOpened}
      onClose={props.onClose}
    >
      <div className={classes.AppEditor}>
        <StepperForm
          appIndex={props.appIndex}
          apps={props.apps}
        />
      </div>
    </Modal>
  );
};

export default appEditor;
