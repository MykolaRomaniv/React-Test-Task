import React from 'react';
import TextField from "@material-ui/core/TextField";
import GoogleMapReact from "google-map-react";
import classes from './Info.module.scss';

const DEFAULT_PROPS = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

const info = (props) => {
    return (
        <div className={[classes.Info, classes.twoColumn].join(' ')}>
        <div className={classes.columnItem}>
          <p className={classes.title}>Add Your Description</p>
          <TextField
            id="app_desc"
            label="Add a description of your app"
            placeholder="Add a description of your app"
            multiline
            variant="outlined"
            defaultValue={props.description}
            onChange={props.descChanged}
            fullWidth
          />
        </div>
        <div className={[classes.columnItem].join(' ')}>
          <p className={classes.title}>Enter your location</p>
          <div className={classes.map}>
            <GoogleMapReact
              // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
              defaultCenter={DEFAULT_PROPS.center}
              defaultZoom={DEFAULT_PROPS.zoom}
              
            >
              <p>
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              </p>
            </GoogleMapReact>
          </div>
        </div>
      </div>

    )
}

export default info
