import {StyleSheet} from 'react-native';
import typo from '../ui-kit/text/typo';

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
    ...typo.GroteskSemibold16,
    color: '#FFFFFF',
    textAlign: 'auto',
  },
});

export default styles;
