import React from 'react';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {Alert} from 'react-native';
import colors from '../../assets/colors';
import {DrawerHeader} from './DrawerHeader';

export const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: colors.ULTRAMARINE_BLUE}}>
      <DrawerHeader />
      <DrawerItem label="Help1" onPress={() => Alert.alert('Open menu')} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
