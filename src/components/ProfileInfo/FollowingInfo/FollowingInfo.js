import React from 'react';
import {View} from 'react-native';
import {MessengerText} from '../../ui-kit';
import styles from './FollowingInfoStyles';

export const FollowingInfo = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerFollowData}>
        <MessengerText text={props.followers} style={styles.textCounter} />
        <MessengerText text="Followers" style={styles.textLabel} />
      </View>
      <View style={styles.containerFollowData}>
        <MessengerText text={props.following} style={styles.textCounter} />
        <MessengerText text="Following" style={styles.textLabel} />
      </View>
    </View>
  );
};
