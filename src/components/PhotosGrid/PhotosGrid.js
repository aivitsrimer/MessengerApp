import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../ui-kit';
import styles from './PhotosGridStyles';
import {photosGet} from '../../services/vkAPI';

export const PhotosGrid = props => {
  if (!props.photoGrid.initialized) {
    photosGet().then(photos => props.setPhotos(photos));
  }
  const photoElements = props.photoGrid.photos.map(item => {
    return <MessengerImage {...item} key={item.id} style={styles.photo} />;
  });

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
