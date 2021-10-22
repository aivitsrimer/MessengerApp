import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import styles from './CommentStyles';
import {MessengerImage, MessengerText} from '../../../ui-kit';

export const Comment = props => {
  function getComment() {
    if (props.children) {
      return (
        <View style={styles.containerNestingComment}>
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

  return (
    <View style={styles.container}>
      <MessengerImage path={props.path} />
      <View style={styles.containerBodyComment}>
        <MessengerText text={props.name} style={styles.textName} />
        <MessengerText text={props.textComment} style={styles.textComment} />
        <View style={styles.containerInfo}>
          <MessengerText text={props.textDate} style={styles.textDate} />
          <TouchableOpacity onPress={() => Alert.alert('Added answer')}>
            <MessengerText text="Ответить" style={styles.textAnswer} />
          </TouchableOpacity>
        </View>
        {getComment()}
      </View>
    </View>
  );
};
