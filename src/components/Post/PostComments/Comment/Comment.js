import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import styles from './CommentStyles';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../../../ui-kit';

export const Comment = props => {
  function getChildComment() {
    if (props.children) {
      return props.children.map(item => <Comment {...item} isChildren={true} />);
    }
  }

  function getContent() {
    if (props.textComment) {
      return (
        <MessengerText
          text={props.textComment}
          style={props.isChildren ? styles.textCommentChildren : styles.textComment}
        />
      );
    }
    if (props.imageComment) {
      return <MessengerImage path={props.imageComment} style={styles.imageComment} />;
    }
  }

  return (
    <View style={props.isChildren ? styles.containerChildren : styles.container}>
      <View style={styles.containerComment}>
        <MessengerImage path={props.path} style={styles.photo} />
        <View style={styles.containerBody}>
          <View style={props.isChildren ? styles.containerBodyCommentChildren : styles.containerBodyComment}>
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
            <MessengerText text={props.counterLike} style={styles.textLike} />
          </View>
        </View>
      </View>
      {getChildComment()}
    </View>
  );
};
