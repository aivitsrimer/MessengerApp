import React from 'react';
import {StyleSheet, Text} from 'react-native';

// export const MessengerText = (props) => {
//   console.log(props);
//   return <Text>{props.text}</Text>;
// }
export const MessengerText = props => (
  <Text style={styles.defaultText}>{props.text}</Text>
);

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'HKGrotesk-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
