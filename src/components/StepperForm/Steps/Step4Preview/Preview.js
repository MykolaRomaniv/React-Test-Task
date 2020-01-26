import React from 'react';
import classes from './Preview.module.scss';

const preview = props => {
  return (
    <div className={classes.Preview}>
      <img src={props.picture} alt="app" />
      <p>
        Accent: <span style={{ color: props.color }}>{props.color}</span>
      </p>
      <p>App name: {props.appName}</p>
      <p>App description: {props.appDescription}</p>
      <p>Categories: {props.catChecked ? 'yes' : 'no'}</p>
      <p>Maps: {props.mapChecked ? 'yes' : 'no'}</p>
    </div>
  );
};

export default preview;
