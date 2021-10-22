import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import styles from './CommentStyles';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../../../ui-kit';

export const Comment = props => {
  function getChildComment() {
    if (props.children) {
      return (
        <View style={styles.containerChildrenComment}>
          <MessengerImage path={props.comments.children.path} />
          <View style={styles.containerBodyComment}>
            <MessengerText text={props.children.name} style={styles.comments.textName} />
            <MessengerText text={props.children.textComment} style={styles.textComment} />
            <View style={styles.containerInfo}>
              <MessengerText text={props.children.textDate} style={styles.children.textDate} />
              <TouchableOpacity onPress={() => Alert.alert('Added answer')}>
                <MessengerText text="Ответить" style={styles.textAnswer} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }

  function getContent() {
    debugger;
    if (props.textComment) {
      return <MessengerText text={props.textComment} style={styles.textComment} />;
    }
    if (props.imageComment) {
      return <MessengerImage path={props.imageComment} style={styles.imageComment} />;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerComment}>
        <MessengerImage path={props.path} style={styles.photo} />
        <View style={styles.containerBody}>
          <View style={styles.containerBodyComment}>
            <MessengerText text={props.name} style={styles.textName} />
            {getContent()}
            <View style={styles.containerInfo}>
              <MessengerText text={props.textDate} style={styles.textDate} />
              <TouchableOpacity onPress={() => Alert.alert('Added answer')}>
                <MessengerText text="Ответить" style={styles.textAnswer} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerLike}>
            <MessengerTouchableIcon
              onPress={() => Alert.alert('Open like')}
              name="like"
              size={18}
              style={styles.iconLike}
            />
            <MessengerText text="56" style={styles.textLike} />
          </View>
          {getChildComment()}
        </View>
      </View>
    </View>
  );
};
