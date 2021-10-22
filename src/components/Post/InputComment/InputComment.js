import React from 'react';
import {Alert, TextInput, View} from 'react-native';
import styles from './InputCommentStyles';
import {MessengerTouchableIcon} from '../../ui-kit';

export const InputComment = props => {
  const [comment, onChangeComment] = React.useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeComment}
        value={comment}
        placeholder="Комментарий"
        placeholderTextColor={styles.placeholder.color}
      />
      <View style={styles.containerIcon}>
        <MessengerTouchableIcon onPress={() => Alert.alert('Send comment')} name="paper-airplane" />
      </View>
    </View>
  );
};
