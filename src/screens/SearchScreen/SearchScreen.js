import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MessengerStatusBar} from '../../components/ui-kit';
import styles from './SearchScreenStyles';
import {MySearch} from '../../components/Search';

export const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.default}>
      <MessengerStatusBar />
      <View style={styles.container}>
        <MySearch />
      </View>
    </SafeAreaView>
  );
};
