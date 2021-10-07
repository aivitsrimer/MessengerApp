import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MessengerImage, MessengerText} from './ui-kit';
import typo from './ui-kit/text/typo';

let photosList = [
  require('./../assets/images/photo1.jpg'),
  require('./../assets/images/photo2.jpg'),
  require('./../assets/images/photo3.jpg'),
  require('./../assets/images/photo4.jpg'),
  require('./../assets/images/photo5.jpg'),
  require('./../assets/images/photo6.jpg'),
  require('./../assets/images/photo7.jpg'),
  require('./../assets/images/photo8.jpg'),
  require('./../assets/images/photo9.jpg'),
  require('./../assets/images/photo1.jpg'),
  require('./../assets/images/photo2.jpg'),
  require('./../assets/images/photo3.jpg'),
  require('./../assets/images/photo4.jpg'),
  require('./../assets/images/photo5.jpg'),
  require('./../assets/images/photo6.jpg'),
  require('./../assets/images/photo7.jpg'),
  require('./../assets/images/photo8.jpg'),
  require('./../assets/images/photo9.jpg'),
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  textCounter: {
    ...typo.GroteskRegular16,
    fontSize: 14,
    color: '#8672BB',
    textAlign: 'center',
    paddingLeft: 6,
  },
  textLabel: {
    ...typo.GroteskRegular16,
    lineHeight: 20,
  },
  photo: {
    marginBottom: 3,
    marginRight: 3,
  },
});

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
