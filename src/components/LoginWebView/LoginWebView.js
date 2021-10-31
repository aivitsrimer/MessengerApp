import React, {FunctionComponent} from 'react';
import styles from './LoginWebViewStyles';
import {WebView} from 'react-native-webview';
import {API_ID} from '@env';
import {useNavigation} from '@react-navigation/native';

export const LoginWebView = props => {
  const navigation = useNavigation();

  const onLoadEndHandle = input => {
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

    const accessToken = getAccessToken(input.nativeEvent.url);

    if (accessToken) {
      console.log(accessToken);
      props.restoreToken(accessToken);
      navigation.navigate('Root');
    }
  };

  const scope = 2 + 4 + 8192 + 262144;

  const AuthWebView: FunctionComponent = () => (
    <WebView
      style={styles.default}
      source={{
        uri:
          'https://oauth.vk.com/authorize?client_id=' +
          API_ID +
          '&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=' +
          scope +
          '&response_type=token&v=5.81',
      }}
      onLoadEnd={onLoadEndHandle}
    />
  );

  return <AuthWebView />;
};
