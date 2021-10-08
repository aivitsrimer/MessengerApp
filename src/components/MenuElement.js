import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../assets/icons';
import {MessengerText} from './ui-kit';
import typo from './ui-kit/text/typo';

export const MenuElement = props => {
  const iconElement =
    props.icon === undefined ? null : <Icon name={props.icon} color="#FFFFFF" size={24} style={styles.icon} />;

  return (
    <TouchableOpacity style={{...styles.container, ...props.style?.container}} onPress={props.onPress}>
      {iconElement}
      <MessengerText style={{...styles.text, ...props.style?.text}}>
        {props.text}
        {props.children}
      </MessengerText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#2B2146',
  },
  icon: {
    marginRight: 9,
    marginBottom: 2,
  },
  text: {
    ...typo.GroteskSemibold16,
    color: '#FFFFFF',
    textAlign: 'auto',
  },
});
