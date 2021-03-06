import React from 'react';
import {StyleSheet, Text} from 'react-native';
import fonts from './fonts';
import colors from '../../../assets/colors';

export const MessengerText = props => (
  <Text style={{...styles.defaultText, ...props.style}}>
    {props.text}
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  defaultText: {
    ...fonts.GroteskRegular16,
    fontStyle: 'normal',
    textAlign: 'center',
    color: colors.WHITE,
  },
});
