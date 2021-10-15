import React from 'react';
import {Alert, View} from 'react-native';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../../../ui-kit';
import styles from './PostHeaderStyles';
import path from '../../../../assets/images/profilePhoto.jpg';

export const PostHeader = props => {
  const path = require('../../../../assets/images/profilePhoto.jpg');
  // debugger;

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
      <MessengerTouchableIcon
        onPress={() => Alert.alert('Open post')}
        name="dots-vertical"
        styles={styles.iconStyles}
      />
    </View>
  );
};
