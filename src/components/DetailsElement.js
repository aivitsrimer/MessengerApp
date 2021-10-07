import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from '../assets/icons';
import {MessengerText} from './ui-kit';
import typo from './ui-kit/text/typo';

export const DetailsElement = props => (
  <View style={styles.containerItem}>
    <Icon name={props.icon} color="#FFFFFF" size={24} style={styles.icon} />
    <MessengerText style={styles.text}>{props.text}</MessengerText>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
    width: '70%',
  },
});
