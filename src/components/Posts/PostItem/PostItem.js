import React from 'react';
import {View} from 'react-native';
import {PostHeader} from './PostHeader';
import {PostFooter} from './PostFooter';
import {PostBody} from './PostBody';
import {Divider} from '../../Divider';

export const PostItem = props => {
  return (
    <View style={{height:500}}>
      <PostHeader photo={props.photo} name={props.name} date={props.date} />
      {/*<PostBody content={props.content} />*/}
      {/*<PostFooter likesCount={props.likesCount} commentsCount={props.commentsCount} />*/}
      <Divider />
    </View>
  );
};
