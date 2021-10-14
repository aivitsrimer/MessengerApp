import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../../ui-kit';
import styles from './PostBodyStyles';

export const PostBody = props => {
  function getContent() {
    if (props.content?.images) {
      return (
        <MessengerText>Post Slider</MessengerText>
      );
    }
    if (props.content?.image) {
      return (
        <MessengerText>Post Image</MessengerText>
      );
    }
    if (props.content?.text) {
      return (
        <MessengerText>Post Text</MessengerText>
      );
    }
  }

  return (
    <View>
      <View>{getContent()}</View>
    </View>
  );
};
