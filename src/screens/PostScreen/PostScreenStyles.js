import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  defaultBackground: {
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
  input: {
    paddingHorizontal: 16,
  },
});

export default styles;
