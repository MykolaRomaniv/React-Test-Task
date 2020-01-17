import React from "react";
import AppItem from "./AppItem/AppItem";

const apps = props => {
  const apps = props.apps.map(app => {
    return <AppItem key={app.name} imgSrc={app.img} appName={app.name} clicked={props.editorOpened} />;
  });

  return (
    <div>
      <p>Apps</p>
      {apps}
    </div>
  );
};

export default apps;
