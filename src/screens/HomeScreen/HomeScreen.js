import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar, MessengerText} from '../../components/ui-kit';
import styles from '../HomeScreen/HomeScreenStyles';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView>
        <View style={styles.container}>
          <MessengerText text={'Page Home'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
