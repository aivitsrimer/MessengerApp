import React from 'react';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import {MessengerText} from './ui-kit';
import {Icon} from '../assets/icons';
import typo from './ui-kit/text/typo';
import {DetailsElement} from './DetailsElement';
import {Divider} from './Divider';
import {LinkElement} from './LinkElement';

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

export const MoreDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <MessengerText style={styles.textTitle}>Подробнее</MessengerText>
        <TouchableOpacity onPress={() => Alert.alert('backspace pressed')}>
          <Icon name="backspace" color="#8672BB" size={24} style={styles.iconExit} />
        </TouchableOpacity>
      </View>
      {detailsElements}
      <Divider />
      <View style={styles.containerTitle}>
        <MessengerText style={styles.textTitle}>Контакты</MessengerText>
      </View>
      {linkElements}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#2B2146',
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 49,
    width: '100%',
  },
  containerTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconExit: {},
  textTitle: {
    ...typo.GroteskBold16,
    color: '#ECEBED',
    marginTop: 20,
    marginBottom: 30,
  },
});
