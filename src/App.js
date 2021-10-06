import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  MessengerImage,
  MessengerStatusBar,
  MessengerText,
} from './components/ui-kit';
import {ProfileInfo} from './components/ProfileInfo';

const App = () => {
  return (
    <SafeAreaView style={styles.defaultStyle}>
      <MessengerStatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.defaultStyle}>
        <View style={styles.container}>
          <ProfileInfo />
        </View>
        <View>
          <MessengerText text="Фотографии" />
          <View>
            <MessengerImage
              path={require('./assets/images/photo1.jpg')}
            />
            <MessengerImage
              path={require('./assets/images/photo1.jpg')} />
            <MessengerImage
              path={require('./assets/images/photo1.jpg')} />
          </View>
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
});

export default App;
