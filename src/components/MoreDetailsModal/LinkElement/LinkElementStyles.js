import {StyleSheet} from 'react-native';
import fonts from '../../ui-kit/text/fonts';

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
    color: '#C3B8E0',
    textAlign: 'auto',
  },
});

export default styles;
