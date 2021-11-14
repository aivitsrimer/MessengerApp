import React, {useEffect} from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../ui-kit';
import styles from './PhotosGridStyles';

export const PhotosGrid = props => {
  useEffect(() => {
    if (!props.isLoaded) {
      props.fetchPhotos();
    }
  }, []);

  const photoElements = props.photoGrid.photos.map(item => {
    return <MessengerImage {...item} key={item.id} style={styles.photo} />;
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerText}>
        <MessengerText text="Фотографии" style={styles.textLabel}>
          <MessengerText text={` ${props.photoGrid.count}`} style={styles.textCounter} />
        </MessengerText>
      </View>
      <View style={styles.container}>{photoElements}</View>
    </View>
  );
};
