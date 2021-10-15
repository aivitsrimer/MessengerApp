import React from 'react';
import {View} from 'react-native';
import {PostItem} from './PostItem';

const DATA = {
  photo: require('./../../assets/images/profilePhoto2.jpg'),
  name: 'Kat Williams',
  date: '1h ago',
  content: {
    text: 'Writing code is not so bad!',
  },
  likesCount: '14',
  commentsCount: '0',
};

export const Posts = () => {
  return (
    <View style={{width: '100%'}}>
      <PostItem data={DATA} />
    </View>
  );
};
