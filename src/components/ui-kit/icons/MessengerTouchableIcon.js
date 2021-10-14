import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '../../../assets/icons';
import color from '../../../assets/colors';

export const MessengerTouchableIcon = props => (
  <TouchableOpacity onPress={props.onPress} style={props.styles?.container}>
    <Icon
      name={props.name || 'alert'}
      color={props.color || color.WHITE}
      size={props.size || 24}
      style={props.styles?.icon}
    />
  </TouchableOpacity>
);
