import React, {useEffect} from 'react';
import {View} from 'react-native';
import {MessengerText, MessengerTouchableIcon} from '../ui-kit';
import styles from './FriendsStyles';
import {Friend} from './Friend';

export const Friends = props => {
  useEffect(() => {
    if (!props.isLoaded) {
      props.getFriends();
    }
  }, []);

  const FriendElements = props.friends.list.map((item, index) => <Friend {...item} key={index} />);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerIcon}>
          <MessengerTouchableIcon
            name="arrow-left"
            size={18}
            style={styles.iconBack}
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={styles.containerTitle}>
          <MessengerText text={'Друзья'} style={styles.title} />
        </View>
      </View>
      {FriendElements}
    </View>
  );
};
