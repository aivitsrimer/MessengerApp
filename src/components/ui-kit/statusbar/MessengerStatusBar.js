import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

export const MessengerStatusBar = () => {
  return <StatusBar backgroundColor={style.barStyle.backgroundColor} />;
};

const style = StyleSheet.create({
  barStyle: {
    backgroundColor: '#2B2146',
  },
});
