import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {MessengerText} from '../text/MessengerText';
import fonts from '../text/fonts';

export const MessengerButton = props => (
  <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
    <MessengerText text={props.text} style={styles.buttonText} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2146',
    borderColor: '#3B2D5F',
    borderWidth: 1,
    borderRadius: 30,
    width: 133,
    height: 36,
  },
  buttonText: {
    ...fonts.GroteskBold14,
    paddingBottom: 2,
  },
});
