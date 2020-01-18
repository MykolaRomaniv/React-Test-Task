import React, { Component } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classes from "./StepperForm.module.scss";
import Welcome from "./Steps/Step0Welcome/Welcome";
import Branding from "./Steps/Step1Branding/Branding";
import Info from "./Steps/Step2Info/Info";
import Features from "./Steps/Step3Features/Features";
import Preview from "./Steps/Step4Preview/Preview";
import {writeData} from '../../database/config';
class StepperForm extends Component {
  constructor(props) {
    super(props);
    if (this.props.appIndex === null) {
      this.state = {
        activeStep: 0,
        appName: "",
        appDescription: "",
        picture: "",
        color: "#fff",
        catChecked: true,
        mapChecked: true
      };
    } else {
      this.state = {activeStep:0, ...this.props.apps[this.props.appIndex] };
    }
    this.onDropHandler = this.onDropHandler.bind(this);
    this.steps = this.getSteps();
  }

  // componentDidMount = () => {
  //   this.setState({ ...getData() });
  // };

  // componentDidUpdate = (prevProps, prevState) => {
  //   // check on previous state
  //   // only write when it's different with the new state
  //   if (prevState !== this.state) {
  //     this.writeData();
  //   }
  // };

  nameChangeHandler = event => {
    this.setState({
      appName: event.target.value
    });
  };

  onDropHandler = (pictureFiles, pictureDataURL) => {
    this.setState({
      picture: pictureDataURL
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

  finishHandler = () => {
    const { activeStep, ...app } = { ...this.state };
    let dbData = [...this.props.apps];
    if (this.props.appIndex === null) {
      dbData.push(app);
    } else {
      dbData[this.props.appIndex] = app;
    }
    writeData(dbData);
    this.handleNext();
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
              <form>{this.getStepContent(this.state.activeStep)}</form>
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
                  onClick={
                    this.state.activeStep === this.steps.length - 1
                      ? this.finishHandler
                      : this.handleNext
                  }
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
