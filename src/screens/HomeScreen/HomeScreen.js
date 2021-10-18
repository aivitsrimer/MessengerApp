import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar} from '../../components/ui-kit';
import styles from '../HomeScreen/HomeScreenStyles';
import {HomeButtons} from '../../components/HomeButtons';
import {Posts} from '../../components/Posts';

export const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <HomeButtons navigation={props.navigation} />
          <Posts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
