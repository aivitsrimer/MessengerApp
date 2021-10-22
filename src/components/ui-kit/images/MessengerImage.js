import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const MessengerImage = props => <Image style={{...styles.defaultImage, ...props.style}} source={props.path} />;

const styles = StyleSheet.create({
  defaultImage: {
    width: 113,
    height: 113,
  },
});
