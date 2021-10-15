import React from 'react';
import {View} from 'react-native';
import {PostItem} from './PostItem';

const DATA = {
  photo: require('./../../assets/images/profilePhoto2.jpg'),
  name: 'Kat Williams',
  date: '1h ago',
  content: {
    text: 'Bla bla',
  },
  likesCount: '123',
  commentsCount: '321',
};

export const Posts = () => {
  return (
    <View style={{width: '100%'}}>
      <PostItem data={DATA} />
    </View>
  );
};
