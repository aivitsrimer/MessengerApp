import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../ui-kit';
import styles from './SearchItemStyles';

export const SearchItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <MessengerImage {...props} style={styles.photo} />
      </View>
      <View style={styles.containerText}>
        <MessengerText text={props.name} style={styles.textName} />
        <MessengerText text={props.location} style={styles.textLocation} />
      </View>
    </View>
  );
};
