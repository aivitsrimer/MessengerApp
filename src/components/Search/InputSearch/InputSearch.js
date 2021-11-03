import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './InputSearchStyles';
import {Icon} from '../../../assets/icons';
import color from '../../../assets/colors';

export const InputSearch = props => {
  const [comment, onChangeComment] = React.useState(null);
  return (
    <View style={styles.container}>
      <Icon name="search" color={color.PERL_PURPLE} size={24} style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeComment}
        value={comment}
        placeholder="Поиск"
        placeholderTextColor={styles.placeholder.color}
      />
    </View>
  );
};
