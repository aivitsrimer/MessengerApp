import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  containerModal: {
    backgroundColor: colors.ULTRAMARINE_BLUE,
    overflow: 'hidden',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 543,
  },
});

export default styles;
