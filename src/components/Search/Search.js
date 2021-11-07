import React from 'react';
import {FlatList, View} from 'react-native';
import {MessengerTouchableIcon} from '../ui-kit';
import styles from './SearchStyles';
import {useNavigation} from '@react-navigation/native';
import {InputSearch} from './InputSearch';
import {SearchItem} from './SearchItem';

export const Search = props => {
  const navigation = useNavigation();
  const flatRenderItem = data => {
    return <SearchItem path={data.item.photo} name={data.item.name} location={data.item.location} />;
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
        <InputSearch />
      </View>
      <View style={styles.container}>
        <FlatList data={props.itemsList} renderItem={flatRenderItem} keyExtractor={item => item.id} />
      </View>
    </View>
  );
};
