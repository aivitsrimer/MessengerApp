import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../ui-kit/text/fonts';

const styles = StyleSheet.create({
  defaultBackground: {
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  defaultStyle: {
    paddingHorizontal: 18,
  },
  title: {
    ...fonts.GroteskBold16,
  },
});

export default styles;
