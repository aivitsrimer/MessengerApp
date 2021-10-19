import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../ui-kit/text/fonts';
import color from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  iconBack: {
    marginRight: 20,
  },
  containerTitle: {
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    ...fonts.GroteskBold16,
    color: colors.WHITE,
  },
  containerData: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 43,
    width: '100%',
  },
  containerImage: {
    flexDirection: 'column',
    width: 43,
    marginRight: 8,
  },
  photo: {
    borderRadius: 90,
    overflow: 'hidden',
    height: 43,
    width: 43,
  },
  containerText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: color.PERL_PURPLE,
  },
  textName: {
    textAlign: 'left',
    color: color.LAVENDER,
    ...fonts.GroteskBold14,
  },
  textLocation: {
    textAlign: 'left',
    color: color.PERL_PURPLE,
    ...fonts.GroteskMedium12,
  },
});

export default styles;
