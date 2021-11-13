import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {MessengerText} from '../../ui-kit';
import {Icon} from '../../../assets/icons';
import {DetailsElement} from '../DetailsElement';
import {Divider} from '../../Divider';
import {LinkElement} from '../LinkElement';
import styles from './MoreDetailsStyles';

export const MoreDetails = props => {
  const linkElements = props.moreDetails.links.map((item, index) => (
    <LinkElement icon={item.icon} text={item.text} link={item.link} key={index} />
  ));
  const detailsElements = props.moreDetails.details.map((item, index) => (
    <DetailsElement icon={item.icon} text={item.textPrefix ? item.textPrefix + item.text : item.text} key={index} />
  ));

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
