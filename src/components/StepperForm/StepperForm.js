import React, { Component } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { withStyles } from '@material-ui/styles';
import classes from "./StepperForm.module.scss";
import Welcome from "./Steps/Step0Welcome/Welcome";
import Branding from "./Steps/Step1Branding/Branding";
import Info from "./Steps/Step2Info/Info";
import Features from "./Steps/Step3Features/Features";
import Preview from "./Steps/Step4Preview/Preview";

// const styles = theme => ({
//   root: {
//     width: "100%"
//   },
//   backButton: {
//     marginRight: theme.spacing.unit
//   },
//   instructions: {
//     marginTop: theme.spacing.unit,
//     marginBottom: theme.spacing.unit
//   }
// });

class StepperForm extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      appName: "",
      appDescription: "",
      picture: [],
      color: "#fff",
      catChecked: true,
      mapChecked: true
    };
    this.onDropHandler = this.onDropHandler.bind(this);
    this.steps = this.getSteps();
  }

  nameChangeHandler = event => {
    this.setState({
      appName: event.target.value
    });
  };

  onDropHandler = (pictureFiles, pictureDataURLs) => {
    this.setState({
      picture: this.state.picture.concat(pictureFiles)
    });
  };

  getSteps = () => {
    return ["Welcome", "Branding", "Info", "Features", "Preview"];
  };

  colorChangeHandler = color => {
    this.setState({ color: color.hex });
  };

  toggleSwitchHandler = switchName => {
    const newState = { ...this.state };
    newState[switchName] = !this.state[switchName];
    this.setState({
      ...newState
    });
  };

  descChangedHandler = event => {
    this.setState({
      appDescription: event.target.value
    });
  };

  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return (
          <Welcome
            appName={this.state.appName}
            changed={this.nameChangeHandler}
          />
        );
      case 1:
        return (
          <div>
            <Branding
              onDrop={this.onDropHandler}
              color={this.state.color}
              colorChanged={this.colorChangeHandler}
            />
          </div>
        );
      case 2:
        return (
          <Info
            description={this.state.appDescription}
            descChanged={this.descChangedHandler}
          />
        );
      case 3:
        return (
          <Features
            catChecked={this.state.catChecked}
            catSwitchToggled={() => this.toggleSwitchHandler("catChecked")}
            mapChecked={this.state.mapChecked}
            mapSwitchToggled={() => this.toggleSwitchHandler("mapChecked")}
          />
        );
      case 4:
        return (
          <Preview
            appName={this.state.appName}
            appDescription={this.state.appDescription}
            picture={this.state.picture}
            color={this.state.color}
            catChecked={this.state.catChecked}
            mapChecked={this.state.mapChecked}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  handleNext = () => {
    this.setState(prevState => {
      return { activeStep: prevState.activeStep + 1 };
    });
  };

  handleBack = () => {
    this.setState(prevState => {
      return { activeStep: prevState.activeStep - 1 };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    return (
      <div className={classes.root}>
        <Stepper activeStep={this.state.activeStep} alternativeLabel>
          {this.steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === this.steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {/* <Typography className={classes.instructions}> */}
              <form>{this.getStepContent(this.state.activeStep)}</form>
              {/* </Typography> */}
              <div>
                <Button
                  disabled={this.state.activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {this.state.activeStep === this.steps.length - 1
                    ? "Finish"
                    : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default StepperForm;
