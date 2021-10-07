import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {MessengerStatusBar} from './components/ui-kit';
import {ProfileInfo} from './components/ProfileInfo';
import {PhotosGrid} from './components/PhotosGrid';
import {Divider} from './components/Divider';
import {MoreDetailsModal} from './components/MoreDetailsModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <ProfileInfo setModalVisible={setModalVisible} />
          <Divider style={styles.divider} />
          <PhotosGrid />
        </View>
        <MoreDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  defaultBackground: {
    backgroundColor: '#2B2146',
  },
  defaultStyle: {
    paddingHorizontal: 16,
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
  divider: {
    flex: 1,
    width: '100%',
    marginHorizontal: 16,
  },
});

export default App;
