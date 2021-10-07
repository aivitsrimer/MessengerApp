import React, {useCallback} from 'react';
import {Linking, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../assets/icons';
import {MessengerText} from './ui-kit';
import typo from './ui-kit/text/typo';

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

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 9,
    marginBottom: 2,
  },
  text: {
    ...typo.GroteskMedium14,
    color: '#C3B8E0',
    textAlign: 'auto',
  },
});
