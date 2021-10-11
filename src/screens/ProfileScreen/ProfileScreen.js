import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {MessengerStatusBar} from '../../components/ui-kit';
import {NavIcons} from '../../components/NavIcons';
import {ProfileInfo} from '../../components/ProfileInfo';
import {Divider} from '../../components/Divider';
import {PhotosGrid} from '../../components/PhotosGrid';
import {MoreDetailsModal} from '../../components/MoreDetailsModal';
import {MenuModal} from '../../components/MenuModal';
import styles from './ProfileScreenStyles';

export const ProfileScreen = () => {
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
