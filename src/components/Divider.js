import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Divider = props => <View style={{...styles.divider, ...props.style}} />;

const styles = StyleSheet.create({
  divider: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#3B2D5F',
  },
});
