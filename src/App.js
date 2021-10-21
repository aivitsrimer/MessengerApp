import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/reduxStore';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {Root} from './screens/Root';
import {ProfileScreen} from './screens/ProfileScreen';
import {FriendsScreen} from './screens/FriendsScreen';
import {SettingsScreen} from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Root">
          <Stack.Screen name="Root" component={Root} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
          <Stack.Screen name="Friends" component={FriendsScreen} options={{headerShown: false}} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
