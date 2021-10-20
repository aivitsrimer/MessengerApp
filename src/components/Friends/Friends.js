import React from 'react';
import {View} from 'react-native';
import {MessengerText, MessengerTouchableIcon} from '../ui-kit';
import styles from './FriendsStyles';
import {Friend} from './Friend';

let FriendsList = [
  {
    id: 1,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 2,
    name: 'Monegros Acid Resort',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 3,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 4,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 5,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 6,
    name: 'Monegros Acid Resort',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 7,
    name: 'Monegros Acid Resort',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 8,
    name: 'Ruck',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 9,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 10,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 11,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 12,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 13,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 14,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
  {
    id: 15,
    name: 'Kat Williams',
    location: 'Санкт-Петербург',
    photo: require('../../assets/images/profilePhoto.jpg'),
  },
];

const FriendElements = FriendsList.map(item => (
  <Friend path={item.photo} name={item.name} location={item.location} key={item.id} />
));

export const Friends = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <MessengerTouchableIcon name={'arrow-left'} size={18} style={styles.iconBack} />
        <View style={styles.containerTitle}>
          <MessengerText text={'Друзья'} style={styles.title} />
        </View>
      </View>
      {FriendElements}
    </View>
  );
};
