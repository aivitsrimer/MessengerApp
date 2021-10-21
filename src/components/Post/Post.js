import React from 'react';
import {View} from 'react-native';
import styles from './PostStyles';
import {MessengerImage, MessengerText} from '../ui-kit';

export const Post = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerData}>
        <View style={styles.containerImage}>
          <MessengerImage path={props.photo} style={styles.photo} />
        </View>
        <View style={styles.containerText}>
          <MessengerText text={props.name} style={styles.textName} />
          <MessengerText text={props.date} style={styles.textTime} />
        </View>
      </View>
    </View>
  );
};
