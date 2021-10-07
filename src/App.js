import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {MessengerStatusBar} from './components/ui-kit';
import {ProfileInfo} from './components/ProfileInfo';
import {PhotosGrid} from './components/PhotosGrid';
import {Divider} from './components/Divider';

const App = () => {
  return (
    <SafeAreaView style={styles.defaultStyle}>
      <MessengerStatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.defaultStyle}>
        <View style={styles.container}>
          <ProfileInfo />
          <Divider />
          <PhotosGrid />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#2B2146',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    color: '#FFFFFF',
    paddingHorizontal: 16,
  },
  profilePhoto: {
    borderRadius: 50,
    marginTop: 20,
  },
  containerSubscribers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  divider: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#3B2D5F',
  },
});

export default App;
