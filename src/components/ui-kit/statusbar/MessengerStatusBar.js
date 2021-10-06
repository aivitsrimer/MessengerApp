import React from 'react';
import {StatusBar} from 'react-native';

export const MessengerStatusBar = props => {
  return <StatusBar backgroundColor={props.barStyle.backgroundColor} />;
};
