import React, {FunctionComponent} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './AuthScreenStyles';
import {MessengerStatusBar} from '../../components/ui-kit';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {API_ID} from '@env';

const onNavigationStateChange = (navigationState: WebViewNavigation) => {
  const getAccessToken = url => {
    const [, hashQuery] = url.split('#');
    const params = hashQuery?.split('&').reduce((result, paramString) => {
      const [key, value] = paramString.split('=');
      if (key && value) {
        result[key] = value;
      }
      return result;
    }, {});
    return params?.access_token;
  };

  const accessToken = getAccessToken(navigationState.url);

  if (accessToken) {
    console.log(accessToken);
  }
};

const LoginWebView: FunctionComponent = () => (
  <WebView
    style={styles.flex}
    source={{
      uri:
        'https://oauth.vk.com/authorize?client_id=' +
        API_ID +
        '&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=262150&response_type=token&v=5.81',
    }}
    onNavigationStateChange={onNavigationStateChange}
  />
);

export const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <MessengerStatusBar />
      <LoginWebView />
    </SafeAreaView>
  );
};
