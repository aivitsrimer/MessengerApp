import React from 'react';
import {View} from 'react-native';
import {MessengerImage, MessengerText} from '../ui-kit';
import styles from './PhotosGridStyles';

export const PhotosGrid = props => {
  const photoElements = props.photoGrid.photosList.map((photo, key) => {
    return <MessengerImage path={photo} key={key} style={styles.photo} />;
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
