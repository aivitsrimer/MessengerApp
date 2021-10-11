import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const MessengerText = props => (
  <Text style={{...styles.defaultText, ...props.style}}>
    {props.text}
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'HKGrotesk-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
