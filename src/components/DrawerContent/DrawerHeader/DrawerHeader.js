import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../ui-kit';
import styles from './DrawerHeaderStyles';

export const DrawerHeader = (props) => {
  return (
    <View style={styles.container}>
      <MessengerImage path={require('../../../assets/images/profilePhoto.jpg')} style={styles.profilePhoto} />
      <View>
        <MessengerText text="Kat Williams" style={styles.textName} />
        <MessengerText text="@Williams" style={styles.textAccount} />
      </View>
    </View>
  );
};
