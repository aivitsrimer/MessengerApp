import React from 'react';
import {View} from 'react-native';
import {PostHeader} from './PostHeader';
import {PostFooter} from './PostFooter';
import {PostBody} from './PostBody';
import {Divider} from '../../Divider';

export const PostItem = props => {
  return (
    <View>
      <PostHeader photo={props.data.photo} name={props.data.name} date={props.data.date} />
      <PostBody content={props.data.content} />
      <PostFooter likesCount={props.data.likesCount} commentsCount={props.data.commentsCount} />
      <Divider />
    </View>
  );
};
