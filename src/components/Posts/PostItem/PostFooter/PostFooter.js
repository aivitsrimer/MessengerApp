import React from 'react';
import {Alert, View} from 'react-native';
import {MessengerText, MessengerTouchableIcon} from '../../../ui-kit';
import styles from './PostFooterStyles';

export const PostFooter = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLike}>
        <MessengerTouchableIcon
          onPress={() => Alert.alert('Open like')}
          name="like"
          style={styles.iconLike}
        >
        </MessengerTouchableIcon>
        <MessengerText text={props.likesCount} style={styles.text} />
      </View>
      <View style={styles.containerComments}>
        <MessengerTouchableIcon
          onPress={() => Alert.alert('Open Comments')}
          name="chat"
          style={styles.iconComments}
        >
        </MessengerTouchableIcon>
        <MessengerText text={props.commentsCount} style={styles.text} />
      </View>
      <MessengerTouchableIcon
        onPress={() => Alert.alert('Open bookmark')}
        name="bookmark"
        style={styles.iconBookmark}
      />
    </View>
  );
};