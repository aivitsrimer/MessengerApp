import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {MessengerStatusBar} from './components/ui-kit';
import {ProfileInfo} from './components/ProfileInfo';
import {PhotosGrid} from './components/PhotosGrid';
import {Divider} from './components/Divider';
import {MoreDetailsModal} from './components/MoreDetailsModal';
import {MenuModal} from './components/MenuModal';
import {NavIcons} from './components/NavIcons';

const App = () => {
  const [modalDetailsVisible, setModalDetailsVisible] = useState(false);
  const [modalMenuVisible, setModalMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.defaultBackground}>
      <MessengerStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.defaultStyle}>
        <View style={styles.container}>
          <NavIcons setModalVisible={setModalMenuVisible} />
          <ProfileInfo setModalVisible={setModalDetailsVisible} />
          <Divider style={styles.divider} />
          <PhotosGrid />
        </View>
        <MoreDetailsModal modalVisible={modalDetailsVisible} setModalVisible={setModalDetailsVisible} />
        <MenuModal modalVisible={modalMenuVisible} setModalVisible={setModalMenuVisible} />
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
  divider: {
    flex: 1,
    width: '100%',
    marginHorizontal: 16,
  },
});

export default App;
