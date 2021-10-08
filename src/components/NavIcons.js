import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '../assets/icons';
import React from 'react';

export const NavIcons = props => (
  <View style={styles.iconsContainer}>
    <Icon name="arrow-left" color="#FFFFFF" size={24} style={styles.iconArrow} />
    <TouchableOpacity onPress={() => props.setModalVisible(true)}>
      <Icon name="dots-vertical" color="#FFFFFF" size={24} style={styles.iconMenu} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    marginTop: 30,
  },
  iconArrow: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  iconMenu: {
    position: 'absolute',
    right: 0,
    top: 0,
    transform: [{rotate: '90deg'}],
  },
});
