import React from 'react';
import {View} from 'react-native';
import styles from './PostCommentsStyles';
import {Comment} from './Comment';

let comments = [
  {
    key: 1,
    name: 'Kat Williams',
    path: require('../../../assets/images/profilePhoto.jpg'),
    textComment:
      'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    textDate: '25 сен. в 22:12',
    counterLike: '56',
    children: [
      {
        key: 5,
        name: 'Kat Williams',
        path: require('../../../assets/images/profilePhoto.jpg'),
        textComment: 'User experience design for the Web (and its siblings.',
        textDate: '25 сен. в 22:12',
        counterLike: '56',
      },
    ],
  },
  {
    key: 2,
    name: 'Kat Williams',
    path: require('../../../assets/images/profilePhoto.jpg'),
    imageComment: require('../../../assets/images/heart.png'),
    textDate: '25 сен. в 22:12',
    counterLike: '12',
  },
  {
    key: 3,
    name: 'Kat Williams',
    path: require('../../../assets/images/profilePhoto.jpg'),
    textComment:
      'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    textDate: '25 сен. в 22:12',
    counterLike: '56',
  },
  {
    key: 4,
    name: 'Kat Williams',
    path: require('../../../assets/images/profilePhoto.jpg'),
    textComment:
      'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
    textDate: '25 сен. в 22:12',
    counterLike: '56',
  },
];

const CommentElements = comments.map(item => <Comment {...item} />);

export const PostComments = props => {
  return <View style={styles.container}>{CommentElements}</View>;
};
