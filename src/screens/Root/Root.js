import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../../components/DrawerContent';
import {HomeScreen} from '../HomeScreen';
import {ProfileScreen} from '../ProfileScreen';
import {FriendsScreen} from '../FriendsScreen';
import {SearchScreen} from '../SearchScreen';
import {SettingsScreen} from '../SettingsScreen';
import {Icon} from '../../assets/icons';
import colors from '../../assets/colors';
import fonts from '../../components/ui-kit/text/fonts';

const Drawer = createDrawerNavigator();

export const Root = () => {
  const drawerIcon = name => {
    return ({focused}) => (
      <Icon name={name} size={24} color={focused ? colors.WHITE : colors.WHITE} style={{width: 24}} />
    );
  };

  const homeElement = <Drawer.Screen name="Home" component={HomeScreen} />;
  // debugger;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {color: colors.WHITE, ...fonts.GroteskBold16, marginLeft: -20},
        drawerContainerStyle: {backgroundColor: 'red'},
      }}
      initialRouteName="Home"
      drawerContent={DrawerContent}
      style={{backgroundColor: colors.ULTRAMARINE_BLUE}}>
      {homeElement}
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Мой профиль',
          drawerIcon: drawerIcon('profile'),
        }}
      />
      <Drawer.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          title: 'Друзья',
          drawerIcon: drawerIcon('group'),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Поиск',
          drawerIcon: drawerIcon('search'),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Настройки',
          drawerIcon: drawerIcon('settings'),
        }}
      />
    </Drawer.Navigator>
  );
};
