import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar, MessengerText} from '../../components/ui-kit';
import styles from './MySplashScreenStyles';

export const MySplashScreen = () => {
  return (
    <SafeAreaView style={styles.default}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <MessengerText>SplashScreen</MessengerText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
