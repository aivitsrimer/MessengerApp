import {StyleSheet} from 'react-native';
import fonts from '../ui-kit/text/fonts';

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
    lineHeight: 18,
  },
  textLabel: {
    ...fonts.GroteskSemibold14,
    lineHeight: 18,
    color: '#8672BB',
  },
});

export default styles;
