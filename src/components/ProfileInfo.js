import React from 'react';
import {Alert, StyleSheet, View, Text} from 'react-native';
import {MessengerButton, MessengerImage, MessengerText} from './ui-kit';
import {FollowingInfo} from './FollowingInfo';
import typo from './ui-kit/text/typo';
import {Icon} from '../assets/icons';

export const ProfileInfo = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <Icon name="arrow-left" color="#FFFFFF" size={24} style={styles.iconArrow} />
          <Icon name="dots-vertical" color="#FFFFFF" size={24} style={styles.iconMenu} />
        </View>
        <MessengerImage
          style={styles.profilePhoto}
          path={require('./../assets/images/profilePhoto.jpg')}
        />
        <MessengerText text="Kat Williams" style={styles.textName} />
        <MessengerText text="@Williams" style={styles.textAccount} />
        <MessengerText
          text="Россия, Санкт-Петербург"
          style={styles.textLocation}
        />
        <MessengerText
          text="Место работы: Artist by Passion!"
          style={styles.textWork}
        />
      </View>
      <View style={styles.containerInfo}>
        <FollowingInfo />
        <MessengerButton
          text="Edit Profile"
          onPress={() => Alert.alert('Button pressed')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#2B2146',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 24,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  profilePhoto: {
    borderRadius: 90,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 17,
    width: 95,
    height: 95,
  },
  iconArrow: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  iconMenu: {
    position: 'absolute',
    right: 0,
    top: 0,
    transform: [{ rotate: '90deg'}],
  },
  textName: {
    ...typo.GroteskBold16,
    color: '#ECEBED',
    marginBottom: 6,
  },
  textAccount: {
    ...typo.GroteskRegular16,
    fontSize: 12,
    color: '#8672BB',
    marginBottom: 29,
  },
  textLocation: {
    ...typo.GroteskMedium14,
    color: '#8672BB',
    marginBottom: 8,
  },
  textWork: {
    ...typo.GroteskRegular16,
    lineHeight: 20,
    marginBottom: 8,
  },
});
