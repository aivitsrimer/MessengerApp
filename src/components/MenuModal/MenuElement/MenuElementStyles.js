import {StyleSheet} from 'react-native';
import fonts from '../../ui-kit/text/fonts';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 11,
    paddingHorizontal: 16,
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  icon: {
    marginRight: 9,
    marginBottom: 2,
  },
  text: {
    ...fonts.GroteskSemibold16,
    color: '#FFFFFF',
    textAlign: 'auto',
    paddingBottom: 2,
  },
});

export default styles;
