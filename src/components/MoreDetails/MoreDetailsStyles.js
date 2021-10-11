import {StyleSheet} from 'react-native';
import fonts from '../ui-kit/text/fonts';

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
    ...fonts.GroteskBold16,
    color: '#ECEBED',
  },
});

export default styles;
