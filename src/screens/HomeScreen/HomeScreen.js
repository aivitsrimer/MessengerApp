import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MessengerStatusBar} from '../../components/ui-kit';
import styles from '../HomeScreen/HomeScreenStyles';
import {HomeButtons} from '../../components/HomeButtons';
import {MyPosts} from '../../components/Posts';

export const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.default}>
      <MessengerStatusBar />
      <View style={styles.container}>
        <HomeButtons navigation={props.navigation} />
        <MyPosts navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
