import React from 'react';
import {Alert, ScrollView, View} from 'react-native';
import styles from './SliderStyles';
import {MessengerImage, MessengerTouchableIcon} from '../../ui-kit';

export const Slider = props => {
  let SliderItem = props.images.map((image, index) => <MessengerImage key={index} path={image} style={styles.image} />);
  return (
    <View style={styles.container}>
      <ScrollView pagingEnabled horizontal style={styles.scrollView}>
        {SliderItem}
      </ScrollView>
      {/*<View>*/}
      {/*  <MessengerTouchableIcon onPress={() => Alert.alert('Send comment')} name="paper-airplane" />*/}
      {/*</View>*/}
    </View>
  );
};
