import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MessengerText} from './ui-kit';
import typo from './ui-kit/text/typo';

export const FollowingInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerFollowData}>
        <MessengerText text="2,467" style={styles.textCounter} />
        <MessengerText text="Followers" style={styles.textLabel} />
      </View>
      <View style={styles.containerFollowData}>
        <MessengerText text="1,589" style={styles.textCounter} />
        <MessengerText text="Following" style={styles.textLabel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#2B2146',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerFollowData: {
    flex: 1,
    alignItems: 'flex-start',
  },
  textCounter: {
    ...typo.GroteskBold14,
    lineHeight: 18,
  },
  textLabel: {
    ...typo.GroteskSemibold14,
    lineHeight: 18,
    color: '#8672BB',
  },
});
