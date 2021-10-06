import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {MessengerText} from '../text/MessengerText';

export const MessengerButton = props => (
  <View>
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <MessengerText text={props.text} style={styles.buttonText} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2146',
    borderColor: '#3B2D5F',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 32,
    width: 133,
    height: 36,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 24,
  },
});
