import React from "react";
import TextField from "@material-ui/core/TextField";

const welcome = (props) => {
  return (
    <div>
      <p>Welcome! Let us help you get started!</p>
      <p>App Name</p>
      <TextField 
        id="app_name" 
        label="Your App Name" 
        variant="outlined"
        defaultValue={props.appName}
        onChange={props.changed} />
      <p>
        Remember, you can always change your options in our App Configuration
        screens.
      </p>
    </div>
  );
};

export default welcome;
