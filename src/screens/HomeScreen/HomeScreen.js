import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar, MessengerText} from '../../components/ui-kit';
import styles from '../HomeScreen/HomeScreenStyles';
import {HomeButtons} from '../../components/HomeButtons';
import {PhotosGrid} from '../../components/PhotosGrid';
import {Posts} from '../../components/Posts';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <HomeButtons />
          <MessengerText text={'Page Home'} />
          <Posts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
