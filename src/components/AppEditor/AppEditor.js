import React from 'react';
import classes from './AppEditor.module.scss';
import Modal from '@material-ui/core/Modal';
import StepperForm from '../StepperForm/StepperForm';

const appEditor = (props) => {
  return (
    <Modal
      open={props.isOpened}
      onClose={props.onClose}
      className={classes.Modal}
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
