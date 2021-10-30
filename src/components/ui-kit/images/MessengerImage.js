import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const MessengerImage = props => (
  <Image style={{...styles.defaultImage, ...props.style}} source={props.path ? props.path : {uri: props.uri}} />
);

const styles = StyleSheet.create({
  defaultImage: {
    width: 113,
    height: 113,
  },
});
