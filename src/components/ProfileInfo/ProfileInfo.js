import React, {useEffect} from 'react';
import {View} from 'react-native';
import {MessengerButton, MessengerImage, MessengerText} from '../ui-kit';
import {FollowingInfo} from './FollowingInfo';
import styles from './ProfileInfoStyles';

export const ProfileInfo = props => {
  useEffect(() => {
    if (!props.isLoaded) {
      props.getInfo();
    }
  }, []);

  const imageProp = props.userInfo.info.photo ? {path: props.userInfo.info.photo} : {uri: props.userInfo.info.uri};

  return (
    <>
      <View style={styles.container}>
        <MessengerImage style={styles.profilePhoto} {...imageProp} />
        <MessengerText text={props.userInfo.info.name} style={styles.textName} />
        <MessengerText text={`@${props.userInfo.info.account}`} style={styles.textAccount} />
        <MessengerText text={props.userInfo.info.location} style={styles.textLocation} />
        <MessengerText text={props.userInfo.info.work} style={styles.textWork} />
      </View>
      <View style={styles.containerInfo}>
        <FollowingInfo followers={props.userInfo.info.followers} following={props.userInfo.info.following} />
        <MessengerButton text="Подробнее" onPress={() => props.setModalVisible(true)} />
      </View>
    </>
  );
};
