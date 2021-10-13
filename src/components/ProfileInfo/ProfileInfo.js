import React from 'react';
import {View} from 'react-native';
import {MessengerButton, MessengerImage, MessengerText} from '../ui-kit';
import {FollowingInfo} from './FollowingInfo';
import styles from './ProfileInfoStyles';

export const ProfileInfo = props => {
  return (
    <>
      <View style={styles.container}>
        <MessengerImage style={styles.profilePhoto} path={require('../../assets/images/profilePhoto.jpg')} />
        <MessengerText text="Kat Williams" style={styles.textName} />
        <MessengerText text="@Williams" style={styles.textAccount} />
        <MessengerText text="Россия, Санкт-Петербург" style={styles.textLocation} />
        <MessengerText text="Место работы: Artist by Passion!" style={styles.textWork} />
      </View>
      <View style={styles.containerInfo}>
        <FollowingInfo />
        <MessengerButton text="Подробнее" onPress={() => props.setModalVisible(true)} />
      </View>
    </>
  );
};
