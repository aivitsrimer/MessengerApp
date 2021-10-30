import React from 'react';
import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar, MessengerTouchableIcon} from '../../components/ui-kit';
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
      <View style={styles.buttonUp}>
        <MessengerTouchableIcon onPress={() => Alert.alert('Up')} name="chevron-up" />
      </View>
    </SafeAreaView>
  );
};
