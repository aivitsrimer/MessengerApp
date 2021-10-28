import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar} from '../../components/ui-kit';
import styles from '../PostScreen/PostScreenStyles';
import {Post} from '../../components/Post';
import {InputComment} from '../../components/Post/InputComment';

export const PostScreen = props => {
  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <Post navigation={props.navigation} />
        </View>
      </ScrollView>
      <InputComment style={styles.input} />
    </SafeAreaView>
  );
};
