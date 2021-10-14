import React from 'react';
import {Alert, View} from 'react-native';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../../../ui-kit';
import styles from './PostHeaderStyles';

export const PostHeader = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <MessengerImage path={props.photo} style={styles.photo} />
      </View>
      <View style={styles.containerText}>
        <MessengerText text={props.name} />
        <MessengerText text={props.date} />
      </View>
      <MessengerTouchableIcon
        onPress={() => Alert.alert('Open post')}
        name="dots-vertical"
        styles={styles.iconStyles}
      />
    </View>
  );
};
