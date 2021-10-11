import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {MessengerText} from '../text/MessengerText';
import fonts from '../text/fonts';
import colors from '../../../../assets/colors';

export const MessengerButton = props => (
  <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
    <MessengerText text={props.text} style={styles.buttonText} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ULTRAMARINE_BLUE,
    borderColor: colors.MODERATE_PURPLISH_BLUE,
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
