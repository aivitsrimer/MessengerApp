import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../../ui-kit';
import styles from './PostBodyStyles';

export const PostBody = props => {
  function getContent() {
    if (props.content?.images) {
      return <MessengerImage src={props.content.image} style={styles.image} />;
    }
    if (props.content?.image) {
      return <MessengerImage path={props.content.image} style={styles.image} />;
    }
    if (props.content?.text) {
      return <MessengerText style={styles.text}>{props.content.text}</MessengerText>;
    }
  }

  return <View style={styles.container}>{getContent()}</View>;
};
