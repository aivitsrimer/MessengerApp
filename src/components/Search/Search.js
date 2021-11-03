import React from 'react';
import {View} from 'react-native';
import {MessengerTouchableIcon} from '../ui-kit';
import styles from './SearchStyles';
import {useNavigation} from '@react-navigation/native';
import {InputSearch} from './InputSearch';

export const Search = props => {
  const navigation = useNavigation();
  // const FriendElements = props.friendsList.map(item => (
  //   <Friend path={item.photo} name={item.name} location={item.location} key={item.id} />
  // ));

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerIcon}>
          <MessengerTouchableIcon
            name="arrow-left"
            size={18}
            style={styles.iconBack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <InputSearch />
      </View>
      {/*{FriendElements}*/}
    </View>
  );
};
