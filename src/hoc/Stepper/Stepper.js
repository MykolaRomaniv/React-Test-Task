import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import MobileStepper from '@material-ui/core/MobileStepper';

const stepper = props => {
  if (props.mobile) {
    return (
      <MobileStepper
        variant='dots'
        steps={props.stepsLength}
        position='static'
        activeStep={props.activeStep}
        className={props.classes}
        style={{justifyContent: 'space-around'}}
      >
        {props.children}
      </MobileStepper>
    );
  } else {
    return (
      <Stepper activeStep={props.activeStep} className={props.classes} alternativeLabel style={{justifyContent: 'space-around'}}>
          {props.children}
      </Stepper>
    );
  }
};

export default stepper;
