import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../assets/icons';
import styles from './HomeButtonsStyles';
import colors from '../../assets/colors';

export const HomeButtons = (props) => (
  <View style={styles.iconsContainer}>
    <TouchableOpacity onPress={() => Alert.alert('Open menu')}>
      <Icon name="menu" size={24} style={styles.iconMenu} />
    </TouchableOpacity>
    <View style={styles.rightIconsContainer}>
      <TouchableOpacity onPress={() => Alert.alert('Open search')}>
        <Icon name="search" size={24} style={styles.iconSearch} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Open notifications')}>
        <Icon name="alert" size={24} style={styles.iconAlert} />
      </TouchableOpacity>
    </View>
  </View>
);
