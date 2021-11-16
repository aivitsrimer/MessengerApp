import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './PostCommentsStyles';
import {Comment} from './Comment';

export const PostComments = props => {
  useEffect(() => {
    if (!props.post?.comments.isLoaded) {
      props.getComments(props.post.id, props.post.source);
    }
  }, []);

  const CommentElements = props.post.comments?.list.map((item, index) => <Comment {...item} key={index} />);

  return <View style={styles.container}>{CommentElements}</View>;
};
