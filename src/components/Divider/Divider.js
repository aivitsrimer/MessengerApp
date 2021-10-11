import React from 'react';
import {View} from 'react-native';
import styles from './DividerStyle';

export const Divider = props => <View style={{...styles.divider, ...props.style}} />;
