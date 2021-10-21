import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar} from '../../components/ui-kit';
import styles from '../SettingsScreen/SettingsScreenStyles';
import {Settings} from '../../components/Settings';

export const SettingsScreen = props => {
  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <Settings navigation={props.navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
