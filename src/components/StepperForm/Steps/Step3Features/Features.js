import React from 'react';
import categoriesImg from "../../../../assets/categories.jpg";
import mapImg from "../../../../assets/map.jpg";
import Switch from "@material-ui/core/Switch";
import classes from './Features.module.scss';

const features = (props) => {
    return (
        <div className={[classes.Features, classes.twoColumn].join(" ")}>
        <div>
          <img src={categoriesImg} alt="categories" />
          <p className={classes.boldTitle}>Categories</p>
          <p>Include more than one list or categories.</p>
          <Switch
            checked={props.catChecked}
            onChange={props.catSwitchToggled}
            value="categories"
            color="primary"
          />
        </div>
        <div>
          <img src={mapImg} alt="categories" />
          <p className={classes.boldTitle}>GPS maps</p>
          <p>Include a GPS map</p>
          <Switch
            checked={props.mapChecked}
            onChange={props.mapSwitchToggled}
            value="categories"
            color="primary"
          />
        </div>
      </div>

    )
}

export default features
