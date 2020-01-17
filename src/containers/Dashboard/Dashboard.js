import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import AppList from "../../components/AppList/AppList";
import appSampleImg from "../../assets/app_sample.png";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import AppEditor from '../../components/AppEditor/AppEditor';

const APP_LIST = [
  { img: appSampleImg, name: "First app" },
  { img: appSampleImg, name: "Second app" }
];

class dashboard extends Component {
  state = {
    editorOpened: true
  };

  openHandle = () => {
    this.setState({
      editorOpened: true
    });
  };

  closeHandle = () => {
    this.setState({
      editorOpened: false
    });
  };

  render() {
    return (
      <Aux>
        <AppEditor opened={this.state.editorOpened} closed={this.closeHandle} />
        <DashboardHeader editorOpened={this.openHandle} />
        <AppList apps={APP_LIST} editorOpened={this.openHandle} />
      </Aux>
    );
  }
}

export default dashboard;
