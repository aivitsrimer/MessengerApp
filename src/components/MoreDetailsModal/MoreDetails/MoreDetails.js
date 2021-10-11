import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {MessengerText} from '../../ui-kit';
import {Icon} from '../../../../assets/icons';
import {DetailsElement} from '../DetailsElement';
import {Divider} from '../../Divider';
import {LinkElement} from '../LinkElement';
import styles from './MoreDetailsStyles';

const details = [
  {
    id: 1,
    icon: 'chat',
    text: 'They never ask people to do things they wouldn’t do themselves.',
  },
  {
    id: 2,
    icon: 'cake',
    text: 'День рождения: 08 октября 1992',
  },
  {
    id: 3,
    icon: 'location-marker',
    text: 'Город: Санкт-Петербург',
  },
  {
    id: 4,
    icon: 'briefcase',
    text: 'ВГУЮ в г. Санкт-Петербург',
  },
];

const detailsElements = details.map(item => <DetailsElement icon={item.icon} text={item.text} key={item.id} />);

const links = [
  {
    id: 1,
    icon: 'arrow-up',
    text: 'https://t.me/durov',
    link: 'https://t.me/durov',
  },
  {
    id: 2,
    icon: 'twitter',
    text: 'Durov',
    link: 'https://twitter.com',
  },
  {
    id: 3,
    icon: 'instagram',
    text: 'Pavel Durov',
    link: 'https://instgram.com',
  },
  {
    id: 4,
    icon: 'facebook',
    text: 'durov',
    link: 'https://fb.com',
  },
  {
    id: 5,
    icon: 'telegram',
    text: 'durov',
    link: 'https://telegram.com',
  },
];

const linkElements = links.map(item => (
  <LinkElement icon={item.icon} text={item.text} link={item.link} key={item.id} />
));

export const MoreDetails = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <MessengerText text="Подробнее" style={styles.textTitle} />
        <TouchableOpacity onPress={() => props.setModalVisible(false)}>
          <Icon name="backspace" color="#8672BB" size={24} />
        </TouchableOpacity>
      </View>
      {detailsElements}
      <Divider style={styles.divider} />
      <View style={styles.containerTitle}>
        <MessengerText text="Контакты" style={styles.textTitle} />
      </View>
      {linkElements}
    </View>
  );
};
