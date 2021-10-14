import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../assets/icons';
import styles from './HomeButtonsStyles';
import colors from '../../assets/colors';

export const HomeButtons = (props) => (
  <View style={styles.iconsContainer}>
    <TouchableOpacity onPress={() => Alert.alert('Open menu')}>
      <Icon name="menu" color={colors.LEMON_YELLOW_CRAYOLA} size={24} style={styles.iconMenu} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Alert.alert('Open search')}>
      <Icon name="search" color={colors.LAVENDER} size={24} style={styles.iconMenu} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Alert.alert('Open notifications')}>
      <Icon name="alert" color={colors.LAVENDER} size={24} style={styles.iconMenu} />
    </TouchableOpacity>
  </View>
);
