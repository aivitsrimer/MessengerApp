import {StyleSheet} from 'react-native';
import typo from '../ui-kit/text/typo';

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 9,
    marginBottom: 2,
  },
  text: {
    ...typo.GroteskMedium14,
    color: '#C3B8E0',
    textAlign: 'auto',
  },
});

export default styles;
