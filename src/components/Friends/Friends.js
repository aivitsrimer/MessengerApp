import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../ui-kit';
import styles from './FriendsStyles';

export const Friends = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <MessengerTouchableIcon name={'arrow-left'} size={18} style={styles.iconBack} />
        <View style={styles.containerTitle}>
          <MessengerText text={'Друзья'} style={styles.title} />
        </View>
      </View>
      <View style={styles.containerData}>
        <View style={styles.containerImage}>
          <MessengerImage path={require('../../assets/images/profilePhoto.jpg')} style={styles.photo} />
        </View>
        <View style={styles.containerText}>
          <MessengerText text="Kat Williams" style={styles.textName} />
          <MessengerText text="Санкт-Петербург" style={styles.textLocation} />
        </View>
      </View>

    </View>
  );
};
