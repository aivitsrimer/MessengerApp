import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {PostItem} from './PostItem';
import styles from './PostsStyles';

export const Posts = props => {
  useEffect(() => {
    if (!props.isLoaded) {
      props.getPosts();
    }
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={props.posts.list}
      renderItem={data => <PostItem data={data} />}
      keyExtractor={data => data.id}
    />
  );
};
