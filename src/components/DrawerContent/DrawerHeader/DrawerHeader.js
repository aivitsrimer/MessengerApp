import React, {useEffect} from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../ui-kit';
import styles from './DrawerHeaderStyles';

export const DrawerHeader = props => {
  useEffect(() => {
    if (!props.isLoaded) {
      props.getInfo();
    }
  }, []);

  const imageProp = props.userInfo.info.photo ? {path: props.userInfo.info.photo} : {uri: props.userInfo.info.uri};

  return (
    <View style={styles.container}>
      <MessengerImage {...imageProp} style={styles.profilePhoto} />
      <View>
        <MessengerText text={props.userInfo.info.name} style={styles.textName} />
        <MessengerText text={`@${props.userInfo.info.account}`} style={styles.textAccount} />
      </View>
    </View>
  );
};
