import React from "react";
import Button from "@material-ui/core/Button";
import classes from './AppItem.module.scss';

const appItem = props => {
  return (
    <div className={classes.AppItem}>
      <img src={props.imgSrc} alt={props.appName} />
      <p>{props.appName}</p>
      <Button variant="contained" color="primary" onClick={props.clicked} >
        Edit App
      </Button>
    </div>
  );
};

export default appItem;
