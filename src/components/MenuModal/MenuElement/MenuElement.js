import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '../../../assets/icons';
import {MessengerText} from '../../ui-kit';
import styles from './MenuElementStyles';

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
