import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './AuthScreenStyles';
import {MessengerStatusBar} from '../../components/ui-kit';
import {MyLoginWebView} from '../../components/LoginWebView';

export const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <MessengerStatusBar />
      <MyLoginWebView />
    </SafeAreaView>
  );
};
