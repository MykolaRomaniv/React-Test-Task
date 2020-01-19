import React from "react";
import TextField from "@material-ui/core/TextField";
import classes from "./Welcome.module.scss";

const welcome = (props) => {
  return (
    <div className={classes.Welcome}>
      <p className={classes.title}>Welcome! Let us help you get started!</p>
      <div className={classes.twoColumn}>
        <p className={classes.boldTitle}>App Name</p>
        <TextField 
          id="app_name" 
          label="Your App Name" 
          variant="outlined"
          defaultValue={props.appName}
          onChange={props.changed} />
      </div>
      <p>
        Remember, you can always change your options in our App Configuration
        screens.
      </p>
    </div>
  );
};

export default welcome;
