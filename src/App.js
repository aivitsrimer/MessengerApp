import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Alert} from 'react-native';
import {
  MessengerButton,
  MessengerImage,
  MessengerStatusBar,
  MessengerText,
} from './components/ui-kit';

const App = () => {
  return (
    <SafeAreaView style={styles.defaultStyle}>
      <MessengerStatusBar barStyle={styles.barStyle} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.defaultStyle}>
        <View style={styles.container}>
          <MessengerImage style={styles.profilePhoto} />
          <MessengerText text="Kat Williams" />
          <MessengerText text="@Williams" />
          <MessengerText text="Россия, Санкт-Петербург" />
          <MessengerText text="Место работы: Artist by Passion!" />
          <View style={styles.containerSubscribers}>
            <MessengerText text="2,467 " />
            <MessengerText text="1,589" />
            <MessengerButton
              text="Edit Profile"
              onPress={() => Alert.alert('Button pressed')}
            />
          </View>
        </View>
        <View>
          <MessengerText text="Фотографии" />
          <View>
            <MessengerImage />
            <MessengerImage />
            <MessengerImage />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#2B2146',
  },
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
