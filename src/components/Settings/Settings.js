import React from 'react';
import {View} from 'react-native';
import {MessengerText, MessengerTouchableIcon} from '../ui-kit';
import {Icon} from '../../assets/icons';
import styles from './SettingsStyles';

export const Settings = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerIcon}>
          <MessengerTouchableIcon
            name={'arrow-left'}
            size={18}
            style={styles.iconBack}
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={styles.containerTitle}>
          <MessengerText text={'Настройки'} style={styles.title} />
        </View>
      </View>
      <View style={styles.containerSettings}>
        <View style={styles.settingsItem}>
          <Icon name="color-swatch" size={24} style={styles.icon} />
          <MessengerText text="Внешний вид" style={styles.text} />
        </View>
        <View style={styles.settingsItem}>
          <Icon name="information-circle" size={24} style={styles.icon} />
          <MessengerText text="О приложении" style={styles.text} />
        </View>
        <View style={styles.settingsItem}>
          <Icon name="logout" size={24} style={styles.iconLogout} />
          <MessengerText text="Выйти" style={styles.textLogout} />
        </View>
      </View>

    </View>
  );
};
