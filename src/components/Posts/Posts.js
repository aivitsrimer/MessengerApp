import React from 'react';
import {View} from 'react-native';
import {PostItem} from './PostItem';
import styles from './PostsStyles';

export const Posts = (props) => {
  // debugger;
  return (
    <View style={styles.container}>
      <PostItem data={props.postsData.post1} />
      <PostItem data={props.postsData.post2} />
      <PostItem data={props.postsData.post3} />
      <PostItem data={props.postsData.post4} />
    </View>
  );
};
