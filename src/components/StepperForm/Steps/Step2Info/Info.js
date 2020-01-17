import React from 'react';
import TextField from "@material-ui/core/TextField";
import GoogleMapReact from "google-map-react";

const DEFAULT_PROPS = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

const info = (props) => {
    return (
        <div style={{ display: "flex" }}>
        <div style={{ width: "45%" }}>
          <p>Add Your Description</p>
          <TextField
            id="app_desc"
            label="App Description"
            placeholder="Add a description of your app"
            multiline
            variant="outlined"
            defaultValue={props.description}
            onChange={props.descChanged}
          />
        </div>
        <div style={{ height: "45vh", width: "45%" }}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={DEFAULT_PROPS.center}
            defaultZoom={DEFAULT_PROPS.zoom}
          >
            {/* <p>
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            </p> */}
          </GoogleMapReact>
        </div>
      </div>

    )
}

export default info
