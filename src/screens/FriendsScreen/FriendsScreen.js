import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar, MessengerText} from '../../components/ui-kit';
import styles from '../HomeScreen/HomeScreenStyles';
import {Friends} from '../../components/Friends';

export const FriendsScreen = props => {
  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <Friends navigation={props.navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
