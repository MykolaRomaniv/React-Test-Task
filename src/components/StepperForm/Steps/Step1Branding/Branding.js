import React from "react";
import ImageUploader from "react-images-upload";
import { SketchPicker } from "react-color";
import classes from './Branding.module.scss';

const branding = (props) => {
  return (
    <div className={[classes.Branding, classes.twoColumn].join(' ')}>
      <div className={classes.columnItem}>
        <p className={classes.title}>Upload Your App Image</p>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={props.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage
          withPreview
        />
        <p></p>
      </div>
      <div className={classes.columnItem}>
        <p className={classes.title}>Choose Your Accent Color</p>
        <SketchPicker
          color={props.color}
          onChange={props.colorChanged}
          disableAlpha
          width={window.screen.width < 500 ? 'fit-content' : '45%'}
        />
      </div>
    </div>
  );
};

export default branding;
