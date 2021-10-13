import React from 'react';
import {View} from 'react-native';
import {Icon} from '../../../assets/icons';
import {MessengerText} from '../../ui-kit';
import styles from './DetailsElementsStyle';

export const DetailsElement = props => (
  <View style={styles.containerItem}>
    <Icon name={props.icon} color="#FFFFFF" size={24} style={styles.icon} />
    <MessengerText style={styles.text}>{props.text}</MessengerText>
  </View>
);
