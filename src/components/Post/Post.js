import React from 'react';
import {Alert, View} from 'react-native';
import styles from './PostStyles';
import {MessengerImage, MessengerText, MessengerTouchableIcon} from '../ui-kit';
import {Divider} from '../Divider';
import {MyPostComments} from './PostComments';
import {useNavigation} from '@react-navigation/native';

const getDate = postDate => {
  if (typeof postDate === 'string') {
    return postDate;
  }
  let currentDate = Math.round(Date.now() / 1000);
  let minutes = Math.round((currentDate - postDate) / 60);
  if (minutes < 1) {
    return 'Меньше минуты назад';
  } else if (minutes >= 60) {
    let hours = Math.round(minutes / 60);
    if (hours >= 60) {
      let days = Math.round(hours / 24);
      return `${days} дн назад`;
    }
    return `${hours} ч назад`;
  }
  return `${minutes} мин назад`;
};

export const Post = props => {
  const navigation = useNavigation();

  const getContent = () => {
    if (props.post.content.images) {
      return props.post.content?.images.map((item, index) => (
        <MessengerImage {...(typeof item === 'string' ? {uri: item} : {path: item})} key={index} style={styles.image} />
      ));
    } else if (props.post.content.text) {
      return <MessengerText text={props.post.content.text} style={styles.text} />;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerIcon}>
          <MessengerTouchableIcon
            name="arrow-left"
            size={18}
            style={styles.iconBack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.containerTitle}>
          <MessengerText text={'Запись'} style={styles.title} />
        </View>
      </View>
      <View style={styles.containerData}>
        <View style={styles.containerImage}>
          <MessengerImage
            {...(typeof props.post.photo === 'string' ? {uri: props.post.photo} : {path: props.post.photo})}
            style={styles.photo}
          />
        </View>
        <View style={styles.containerText}>
          <MessengerText text={props.post.name} style={styles.textName} />
          <MessengerText text={getDate(props.post.date)} style={styles.textTime} />
        </View>
      </View>
      <View style={styles.containerImages}>{getContent()}</View>
      <View style={styles.containerPostFooter}>
        <View style={styles.containerPostInfo}>
          <View style={styles.containerLike}>
            <MessengerTouchableIcon onPress={() => Alert.alert('Open like')} name="like" style={styles.iconLike} />
            <MessengerText text={props.post.likesCount} style={styles.textLike} />
          </View>
          <MessengerTouchableIcon
            onPress={() => Alert.alert('Open bookmark')}
            name="bookmark"
            style={styles.iconBookmark}
          />
        </View>
        <MessengerText text={`${props.post.commentsCount} комментариев`} style={styles.textComment} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.containerComments}>
        <MyPostComments />
      </View>
    </View>
  );
};
