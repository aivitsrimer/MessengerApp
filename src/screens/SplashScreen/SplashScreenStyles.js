import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  defaultStyle: {
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    color: colors.WHITE,
  },
});

export default styles;
