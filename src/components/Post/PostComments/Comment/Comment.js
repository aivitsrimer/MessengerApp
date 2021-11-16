import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import styles from './CommentStyles';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../../../ui-kit';

const getDate = postDate => {
  if (typeof postDate === 'string') {
    return postDate;
  }
  let currentDate = Math.round(Date.now() / 1000);
  let minutes = Math.round((currentDate - postDate) / 60);
  if (minutes < 1) {
    return 'Меньше минуты назад';
  } else if (minutes >= 60) {
    let hours = Math.round(minutes / 60);
    if (hours >= 60) {
      let days = Math.round(hours / 24);
      return `${days} дн назад`;
    }
    return `${hours} ч назад`;
  }
  return `${minutes} мин назад`;
};

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
        <MessengerImage {...(props.path ? {path: props.path} : {uri: props.uri})} style={styles.photo} />
        <View style={styles.containerBody}>
          <View style={props.isChildren ? styles.containerBodyCommentChildren : styles.containerBodyComment}>
            <MessengerText text={props.name} style={styles.textName} />
            {getContent()}
            <View style={styles.containerInfo}>
              <MessengerText text={getDate(props.date)} style={styles.textDate} />
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
            <MessengerText text={props.likesCount} style={styles.textLike} />
          </View>
        </View>
      </View>
      {getChildComment()}
    </View>
  );
};
