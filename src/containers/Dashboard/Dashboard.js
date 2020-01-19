import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import AppList from "../../components/AppList/AppList";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import AppEditor from "../../components/AppEditor/AppEditor";
import db from '../../database/config';

/**
 * App = {
 *  appName: "",
    appDescription: "",
    picture: "",
    color: "#fff",
    catChecked: true,
    mapChecked: true
 * }
 */

class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      editorOpened: false,
      currentAppIndex: null, 
      apps: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentShould

  getData = () => {
    let ref = db.database().ref('/');
    ref.on('value', snapshot => {
      let apps = snapshot.val();
      if (!apps) {
        apps = [];
      }
      this.setState({
        apps: apps
      });
    });
    console.log('DATA RETRIEVED');
  }

  openHandle = appIndex => {
    this.setState({
      currentAppIndex: appIndex,
      editorOpened: true
    })
  };

  closeHandle = () => {
    this.setState({
      currentAppIndex: null,
      editorOpened: false
    });
  };

  updateAppsHandler = (app) => {
    const newApps = [...this.state.apps];
    if(this.state.currentAppIndex === null) {
      newApps.push(app);
    } else {
      newApps[this.state.currentAppIndex] = app;
    }
    this.setState({
      apps: newApps
    })
  }

  render() {
    return (
      <Aux>
        <AppEditor
          isOpened={this.state.editorOpened}
          onClose={this.closeHandle}
          appIndex={this.state.currentAppIndex}
          apps={this.state.apps}
        />
        <DashboardHeader editorOpened={this.openHandle} />
        <AppList apps={this.state.apps} editorOpened={this.openHandle} />
      </Aux>
    );
  }
}

export default dashboard;
