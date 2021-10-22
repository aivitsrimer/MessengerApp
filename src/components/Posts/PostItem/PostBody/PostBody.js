import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../../ui-kit';
import styles from './PostBodyStyles';

export const PostBody = props => {
  function getContent() {
    if (props.content?.images) {
      return (
        <View style={styles.containerSlider}>
          <MessengerImage path={props.content.image} style={styles.image} />
        </View>
      );
    }
    if (props.content?.image) {
      return (
        <View style={styles.containerImage}>
          <MessengerImage path={props.content.image} style={styles.image} />
        </View>
      );
    }
    if (props.content?.text) {
      return <MessengerText style={styles.text}>{props.content.text}</MessengerText>;
    }
  }

  return <View style={styles.container}>{getContent()}</View>;
};
