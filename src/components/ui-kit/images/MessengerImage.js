import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const MessengerImage = props => (
  <Image
    style={styles.defaultImage}
    source={require('../../../assets/images/photo1.jpg')}
  />
);

const styles = StyleSheet.create({
  defaultImage: {
    width: 112,
    height: 113,
  },
});
