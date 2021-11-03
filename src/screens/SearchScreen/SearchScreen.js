import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar} from '../../components/ui-kit';
import styles from './SearchScreenStyles';
import {MySearch} from '../../components/Search';

export const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.default}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <MySearch />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
