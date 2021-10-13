import {StyleSheet} from 'react-native';
import fonts from '../../ui-kit/text/fonts';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#2B2146',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerFollowData: {
    flex: 1,
    alignItems: 'flex-start',
  },
  textCounter: {
    ...fonts.GroteskBold14,
  },
  textLabel: {
    ...fonts.GroteskSemibold14,
    color: colors.PERL_PURPLE,
  },
});

export default styles;
