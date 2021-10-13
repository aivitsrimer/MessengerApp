import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../ui-kit';
import styles from './PhotosGridStyles';

let photosList = [
  require('../../assets/images/photo1.jpg'),
  require('../../assets/images/photo2.jpg'),
  require('../../assets/images/photo3.jpg'),
  require('../../assets/images/photo4.jpg'),
  require('../../assets/images/photo5.jpg'),
  require('../../assets/images/photo6.jpg'),
  require('../../assets/images/photo7.jpg'),
  require('../../assets/images/photo8.jpg'),
  require('../../assets/images/photo9.jpg'),
  require('../../assets/images/photo1.jpg'),
  require('../../assets/images/photo2.jpg'),
  require('../../assets/images/photo3.jpg'),
  require('../../assets/images/photo4.jpg'),
  require('../../assets/images/photo5.jpg'),
  require('../../assets/images/photo6.jpg'),
  require('../../assets/images/photo7.jpg'),
  require('../../assets/images/photo8.jpg'),
  require('../../assets/images/photo9.jpg'),
];

const photoElements = photosList.map((photo, key) => {
  return <MessengerImage path={photo} key={key} style={styles.photo} />;
});

export const PhotosGrid = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.containerText}>
        <MessengerText text="Фотографии" style={styles.textLabel}>
          <MessengerText text=" 245" style={styles.textCounter} />
        </MessengerText>
      </View>
      <View style={styles.container}>{photoElements}</View>
    </View>
  );
};
