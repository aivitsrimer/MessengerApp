import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';
import styles from './InputSearchStyles';
import {Icon} from '../../../assets/icons';
import color from '../../../assets/colors';

export const InputSearch = props => {
  const onChangeHandler = useCallback(
    query => {
      props.search(query, props.filter);
    },
    [props],
  );

  return (
    <View style={styles.container}>
      <Icon name="search" color={color.PERL_PURPLE} size={24} style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeHandler}
        value={props.query}
        placeholder="Поиск"
        placeholderTextColor={styles.placeholder.color}
      />
    </View>
  );
};
