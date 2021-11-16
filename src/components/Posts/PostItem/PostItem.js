import React from 'react';
import {View} from 'react-native';
import {PostHeader} from './PostHeader';
import {PostFooter} from './PostFooter';
import {PostBody} from './PostBody';

export const PostItem = props => {
  const item = props.data.item;
  return (
    <View>
      <PostHeader {...(item.photo ? {path: item.photo} : {uri: item.uri})} name={item.name} date={item.date} />
      <PostBody content={item.content} text={item.text} />
      <PostFooter likesCount={item.likesCount} commentsCount={item.commentsCount} setPost={props.setPost} post={item} />
    </View>
  );
};
