import {StyleSheet} from 'react-native';
import fonts from '../../ui-kit/text/fonts';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  icon: {
    marginRight: 9,
    marginBottom: 2,
  },
  text: {
    ...fonts.GroteskMedium14,
    color: colors.PERIWINKLE_CRAYOLA,
    textAlign: 'auto',
  },
});

export default styles;
