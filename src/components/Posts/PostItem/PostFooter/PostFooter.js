import React from 'react';
import {Alert, View} from 'react-native';
import {MessengerText, MessengerTouchableIcon} from '../../../ui-kit';
import styles from './PostFooterStyles';
import {Divider} from '../../../Divider';
import {useNavigation} from '@react-navigation/native';

export const PostFooter = props => {
  const navigation = useNavigation();
  const showComments = parseInt(props.commentsCount) > 0;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerSocial}>
          <View style={styles.containerLike}>
            <MessengerTouchableIcon onPress={() => Alert.alert('Open like')} name="like" style={styles.iconLike} />
            <MessengerText text={props.likesCount} style={styles.text} />
          </View>
          {showComments && (
            <View style={styles.containerComments}>
              <MessengerTouchableIcon
                onPress={() => navigation.navigate('Post')}
                name="chat"
                style={styles.iconComments}
              />
              <MessengerText text={props.commentsCount} style={styles.text} />
            </View>
          )}
        </View>
        <MessengerTouchableIcon
          onPress={() => Alert.alert('Open bookmark')}
          name="bookmark"
          style={styles.iconBookmark}
        />
      </View>
      <Divider style={styles.divider} />
    </View>
  );
};
