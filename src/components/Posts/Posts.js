import React from 'react';
import {View} from 'react-native';
import {PostItem} from './PostItem';
import styles from './PostsStyles';

export const Posts = props => {
  return (
    <View style={styles.container}>
      <PostItem data={props.postsData.post1} navigation={props.navigation} />
      <PostItem data={props.postsData.post2} />
      <PostItem data={props.postsData.post3} />
      <PostItem data={props.postsData.post4} />
    </View>
  );
};
