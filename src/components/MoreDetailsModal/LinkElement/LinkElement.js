import React, {useCallback} from 'react';
import {Linking, TouchableOpacity} from 'react-native';
import {Icon} from '../../../../assets/icons';
import {MessengerText} from '../../ui-kit';
import styles from './LinkElementStyles';

export const LinkElement = props => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(props.link);
  }, [props.link]);

  return (
    <TouchableOpacity style={styles.containerItem} onPress={handlePress}>
      <Icon name={props.icon} color="#FFFFFF" size={24} style={styles.icon} />
      <MessengerText style={styles.text}>{props.text}</MessengerText>
    </TouchableOpacity>
  );
};
