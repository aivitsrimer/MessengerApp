import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../../ui-kit';
import styles from './PostBodyStyles';
import {Slider} from '../../Slider';

export const PostBody = props => {
  function getContent() {
    if (props.content?.images) {
      return (
        <View style={styles.containerSlider}>
          <Slider images={props.content.images} />
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
