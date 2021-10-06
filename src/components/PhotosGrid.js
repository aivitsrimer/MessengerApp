import {MessengerText} from './ui-kit';
import { StyleSheet } from "react-native";

const {View} = require('react-native');
const {MessengerImage} = require('./ui-kit');

export const PhotosGrid = () => {
  return (
    <View>
      <MessengerImage
        path={require('./../assets/images/photo1.jpg')}
      />
      <MessengerImage
        path={require('./../assets/images/photo1.jpg')} />
      <MessengerImage
        path={require('./../assets/images/photo1.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#2B2146',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 24,
  },
});

