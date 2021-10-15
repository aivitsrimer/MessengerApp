import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';
import fonts from '../../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    marginVertical: 22,
  },
  text: {
    ...fonts.GroteskMedium12,
    color: colors.PERIWINKLE_CRAYOLA,
    textAlign: 'left',
  },
});

export default styles;
