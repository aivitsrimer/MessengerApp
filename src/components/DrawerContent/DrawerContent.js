import React from 'react';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {Alert, View} from 'react-native';
import {MessengerImage, MessengerText} from '../ui-kit';
import colors from '../../assets/colors';

function DrawerHeader() {
  return (
    <View>
      <MessengerImage path={require('../../assets/images/profilePhoto.jpg')} />
      <View>
        <MessengerText text="hahah" style={{color: 'black'}} />
        <MessengerText text="hahah1" style={{color: 'black'}} />
      </View>
    </View>
  );
}

export const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: colors.ULTRAMARINE_BLUE}}>
      <DrawerHeader />
      <DrawerItem label="Help1" onPress={() => Alert.alert('Open menu')} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
