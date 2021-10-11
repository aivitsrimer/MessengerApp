import {StyleSheet} from 'react-native';
import fonts from '../../ui-kit/text/fonts';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 49,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginBottom: 25,
  },
  textTitle: {
    ...fonts.GroteskBold16,
    color: colors.LAVENDER,
  },
  divider: {
    marginTop: 5,
  },
});

export default styles;
