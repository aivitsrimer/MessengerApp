import React from 'react';
import {View} from 'react-native';
import {PostItem} from './PostItem';

const DATA = {
  post1: {
    photo: require('./../../assets/images/profilePhoto2.png'),
    name: 'Kat Williams',
    date: '1h ago',
    content: {
      image: require('./../../assets/images/postPhoto1.jpg'),
    },
    likesCount: '8,998',
    commentsCount: '145',
  },
  post2: {
    photo: require('./../../assets/images/profilePhoto3.png'),
    name: 'Tony Monta',
    date: '1h ago',
    content: {
      text: 'Writing code is not so bad!',
    },
    likesCount: '14',
    commentsCount: '0',
  },
};

export const Posts = () => {
  return (
    <View style={{width: '100%'}}>
      <PostItem data={DATA.post1} />
      <PostItem data={DATA.post2} />
    </View>
  );
};
