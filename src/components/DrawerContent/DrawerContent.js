import React from 'react';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {MyDrawerHeader} from './DrawerHeader';
import styles from './DrawerContentStyles';

export const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} style={styles.defaultBackground} labelStyle={styles.title}>
      <MyDrawerHeader />
      <DrawerItemList
        {...props}
        // activeTintColor="#ff0000"
        // activeBackgroundColor="rgba(0, 0, 0, .04)"
        // inactiveTintColor="rgba(0, 0, 0, .87)"
        // inactiveBackgroundColor="transparent"
        // itemStyle={{backgroundColor: '#0000ff'}}
        // labelStyle={{color: '#ff0000'}}
      />
    </DrawerContentScrollView>
  );
};
