import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from './screens/ProfileScreen';
import {HomeScreen} from './screens/HomeScreen';
import {DrawerContent} from './components/DrawerContent';
import {Icon} from './assets/icons';
import colors from './assets/colors';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const drawerIcon = name => {
    return ({focused}) => <Icon name={name} size={24} color={focused ? '#7cc' : '#ccc'} />;
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
        drawerContent={DrawerContent}
        style={{backgroundColor: colors.ULTRAMARINE_BLUE}}>
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Мой профиль',
            drawerIcon: drawerIcon('share'),
          }}
        />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
