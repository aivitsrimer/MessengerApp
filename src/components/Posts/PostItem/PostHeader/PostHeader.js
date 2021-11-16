import React from 'react';
import {Alert, View} from 'react-native';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../../../ui-kit';
import styles from './PostHeaderStyles';
import colors from '../../../../assets/colors';

export const PostHeader = props => {
  const getDate = postDate => {
    if (typeof postDate === 'string') {
      return postDate;
    }
    let currentDate = Math.round(Date.now() / 1000);
    let minutes = Math.round((currentDate - postDate) / 60);
    if (minutes < 1) {
      return 'Меньше минуты назад';
    } else if (minutes >= 60) {
      let hours = Math.round(minutes / 60);
      if (hours >= 60) {
        let days = Math.round(hours / 24);
        return `${days} дн назад`;
      }
      return `${hours} ч назад`;
    }
    return `${minutes} мин назад`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerData}>
        <View style={styles.containerImage}>
          <MessengerImage {...props} style={styles.photo} />
        </View>
        <View style={styles.containerText}>
          <MessengerText text={props.name} style={styles.textName} />
          <MessengerText text={getDate(props.date)} style={styles.textTime} />
        </View>
      </View>
      <MessengerTouchableIcon
        onPress={() => Alert.alert('Open post menu')}
        color={colors.PERL_PURPLE}
        name="dots-vertical"
      />
    </View>
  );
};
