import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from '../../../assets/icons';
import styles from './NavIconsStyles';

export const NavIcons = props => (
  <View style={styles.iconsContainer}>
    <Icon name="arrow-left" color="#FFFFFF" size={24} style={styles.iconArrow} />
    <TouchableOpacity onPress={() => props.setModalVisible(true)}>
      <Icon name="dots-vertical" color="#FFFFFF" size={24} style={styles.iconMenu} />
    </TouchableOpacity>
  </View>
);
