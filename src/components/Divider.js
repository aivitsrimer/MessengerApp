import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    borderColor: '#3B2D5F',
  },
});
