import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../../../ui-kit';
import styles from './PostBodyStyles';
import {Slider} from '../../Slider';

export const PostBody = props => {
  function getContent() {
    if (props.content?.images.length > 1) {
      return (
        <View style={styles.containerSlider}>
          <Slider images={props.content.images} />
        </View>
      );
    }
    if (props.content?.images.length === 1) {
      return (
        <View style={styles.containerImage}>
          <MessengerImage
            {...(typeof props.content.images[0] === 'string'
              ? {uri: props.content.images[0]}
              : {path: props.content.images[0]})}
            style={styles.image}
          />
        </View>
      );
    }
    if (props.content?.images.length === 0) {
      return <MessengerText style={styles.text}>{props.content?.text}</MessengerText>;
    }
  }

  return <View style={styles.container}>{getContent()}</View>;
};
