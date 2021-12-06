import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './redux/reduxStore';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {
  FriendsScreen,
  HomeScreen,
  AuthScreen,
  PostScreen,
  ProfileScreen,
  Root,
  SettingsScreen,
  MySplashScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Root">
          <Stack.Screen name="Auth" component={AuthScreen} options={{headerShown: false}} />
          <Stack.Screen name="Splash" component={MySplashScreen} options={{headerShown: false}} />
          <Stack.Screen name="Root" component={Root} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
          <Stack.Screen name="Friends" component={FriendsScreen} options={{headerShown: false}} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}} />
          <Stack.Screen name="Post" component={PostScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
