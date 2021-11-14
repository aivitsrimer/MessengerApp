import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './SearchFilterStyles';
import {MessengerText} from '../../ui-kit';

export const SearchFilter = props => {
  const onPressHandler = useCallback(
    filter => {
      props.search(props.query, filter);
    },
    [props],
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPressHandler('all')}
        style={props.filter === 'all' ? styles.filterItemActive : styles.filterItem}>
        <MessengerText text={'Все'} style={props.filter === 'all' ? styles.textActive : styles.text} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressHandler('friends')}
        style={props.filter === 'friends' ? styles.filterItemActive : styles.filterItem}>
        <MessengerText text={'Люди'} style={props.filter === 'friends' ? styles.textActive : styles.text} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressHandler('groups')}
        style={props.filter === 'groups' ? styles.filterItemActive : styles.filterItem}>
        <MessengerText text={'Сообщества'} style={props.filter === 'groups' ? styles.textActive : styles.text} />
      </TouchableOpacity>
    </View>
  );
};
