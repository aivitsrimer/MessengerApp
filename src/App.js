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
import {Root} from './screens/Root';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Root" component={Root} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
