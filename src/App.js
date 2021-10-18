import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from './screens/ProfileScreen';
import {HomeScreen} from './screens/HomeScreen';
import {DrawerContent} from './components/DrawerContent';
import {Icon} from './assets/icons';
import colors from './assets/colors';
import {FriendsScreen} from './screens/FriendsScreen';
import {SearchScreen} from './screens/SearchScreen';
import {SettingsScreen} from './screens/SettingsScreen';
import fonts from './components/ui-kit/text/fonts';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const drawerIcon = name => {
    return ({focused}) => (
      <Icon name={name} size={24} color={focused ? colors.WHITE : colors.WHITE} style={{width: 24}} />
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {color: colors.WHITE, ...fonts.GroteskBold16, marginLeft: -20},
          drawerContainerStyle: {backgroundColor: 'red'},
        }}
        initialRouteName="Home"
        drawerContent={DrawerContent}
        style={{backgroundColor: colors.ULTRAMARINE_BLUE}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
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
    </NavigationContainer>
  );
};

export default App;
