import React from 'react';
import AppItem from './AppItem/AppItem';

/**
 * App = {
 *  appName: '',
    appDescription: '',
    picture: '',
    color: '#fff',
    catChecked: true,
    mapChecked: true
 * }
 */

const apps = props => {
  let apps;
  if (props.apps !== null) {
    apps = props.apps.map((app, index) => {
      return (
        <AppItem
          key={index}
          imgSrc={app.picture}
          appName={app.appName}
          clicked={() => props.editorOpened(index)}
        />
      );
    });
  } else {
    apps = null;
  }

  return (
    <div>
      <p>Apps</p>
      {apps}
    </div>
  );
};

export default apps;
