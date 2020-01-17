import React from "react";
import ImageUploader from "react-images-upload";
import { SketchPicker } from "react-color";

const branding = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p>Upload Your App Image</p>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={props.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage
        />
      </div>
      <div>
        <p>Choose Your Accent Color</p>
        <SketchPicker
          color={props.color}
          onChange={props.colorChanged}
          disableAlpha
        />
      </div>
    </div>
  );
};

export default branding;
