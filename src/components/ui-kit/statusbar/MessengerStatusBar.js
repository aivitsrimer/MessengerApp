import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

export const MessengerStatusBar = () => {
  return <StatusBar backgroundColor={style.barStyle.backgroundColor} />;
};

const style = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
});
