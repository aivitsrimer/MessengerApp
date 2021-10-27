import React from 'react';
import {View} from 'react-native';
import styles from './PostCommentsStyles';
import {Comment} from './Comment';

export const PostComments = props => {
  const CommentElements = props.comments.map(item => <Comment {...item} />);

  return <View style={styles.container}>{CommentElements}</View>;
};
