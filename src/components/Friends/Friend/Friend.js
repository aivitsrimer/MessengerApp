import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../ui-kit';
import styles from './FriendStyles';

export const Friend = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <MessengerImage path={props.path} style={styles.photo} />
      </View>
      <View style={styles.containerText}>
        <MessengerText text={props.name} style={styles.textName} />
        <MessengerText text={props.location} style={styles.textLocation} />
      </View>
    </View>
  );
};
