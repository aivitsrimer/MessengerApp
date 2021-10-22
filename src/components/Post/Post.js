import React from 'react';
import {Alert, View} from 'react-native';
import styles from './PostStyles';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../ui-kit';
import {Divider} from '../Divider';
import {PostComments} from './PostComments';
import {InputComment} from './InputComment';

export const Post = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerIcon}>
          <MessengerTouchableIcon
            name="arrow-left"
            size={18}
            style={styles.iconBack}
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={styles.containerTitle}>
          <MessengerText text={'Запись'} style={styles.title} />
        </View>
      </View>
      <View style={styles.containerData}>
        <View style={styles.containerImage}>
          <MessengerImage path={require('../../assets/images/profilePhoto2.png')} style={styles.photo} />
        </View>
        <View style={styles.containerText}>
          <MessengerText text="Kat Williams" style={styles.textName} />
          <MessengerText text="1h ago" style={styles.textTime} />
        </View>
      </View>
      <View style={styles.containerImages}>
        <MessengerImage path={require('../../assets/images/postPhoto1.png')} style={styles.image} />
        <MessengerImage path={require('../../assets/images/postPhoto1-2.png')} style={styles.image} />
        <MessengerImage path={require('../../assets/images/postPhoto1-3.png')} style={styles.image} />
      </View>
      <View style={styles.containerPostFooter}>
        <View style={styles.containerPostInfo}>
          <View style={styles.containerLike}>
            <MessengerTouchableIcon onPress={() => Alert.alert('Open like')} name="like" style={styles.iconLike} />
            <MessengerText text="8,998" style={styles.textLike} />
          </View>
          <MessengerTouchableIcon
            onPress={() => Alert.alert('Open bookmark')}
            name="bookmark"
            style={styles.iconBookmark}
          />
        </View>
        <MessengerText text="12 комментариев" style={styles.textComment} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.containerComments}>
        <PostComments />
      </View>
      <InputComment />
    </View>
  );
};
