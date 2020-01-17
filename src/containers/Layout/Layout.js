import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import classes from "./Layout.module.scss";
import Toolbar from "../../components/navigation/Toolbar/Toolbar";
import SideDrawer from '../../components/navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          show={this.state.showSideDrawer}
        />
        <main className={classes.Content}> {this.props.children} </main>
      </Aux>
    );
  }
}

export default Layout;
