import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {MessengerTouchableIcon} from '../ui-kit';
import styles from './SearchStyles';
import {useNavigation} from '@react-navigation/native';
import {InputSearch} from './InputSearch';
import {SearchItem} from './SearchItem';
import {SearchFilter} from './SearchFilter';

export const Search = props => {
  useEffect(() => {
    if (!props.isLoaded) {
      props.search(props.query, props.filter);
    }
  }, []);

  const navigation = useNavigation();
  const flatRenderItem = data => {
    return <SearchItem {...data.item} />;
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
        <InputSearch filter={props.filter} query={props.query} search={props.search} />
      </View>
      <SearchFilter filter={props.filter} query={props.query} search={props.search} setFilter={props.setFilter} />
      <View style={styles.container}>
        <FlatList data={props.itemsList} renderItem={flatRenderItem} keyExtractor={item => item.id} />
      </View>
    </View>
  );
};
