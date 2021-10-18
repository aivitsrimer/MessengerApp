import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar, MessengerText} from '../../components/ui-kit';
import styles from '../HomeScreen/HomeScreenStyles';

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <MessengerText text={'Settings Page'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
