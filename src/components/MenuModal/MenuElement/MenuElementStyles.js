import {StyleSheet} from 'react-native';
import fonts from '../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#2B2146',
  },
  icon: {
    marginRight: 9,
    marginBottom: 2,
  },
  text: {
    ...fonts.GroteskSemibold16,
    color: '#FFFFFF',
    textAlign: 'auto',
  },
});

export default styles;
