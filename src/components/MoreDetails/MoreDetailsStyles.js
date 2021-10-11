import {StyleSheet} from 'react-native';
import typo from '../ui-kit/text/typo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 49,
  },
  containerTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 30,
  },
  textTitle: {
    ...typo.GroteskBold16,
    color: '#ECEBED',
  },
});

export default styles;
