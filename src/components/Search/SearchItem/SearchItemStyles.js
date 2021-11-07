import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import fonts from '../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 43,
    width: '100%',
    marginVertical: 10,
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
  },
  textName: {
    textAlign: 'left',
    color: colors.LAVENDER,
    ...fonts.GroteskBold14,
  },
  textLocation: {
    textAlign: 'left',
    color: colors.PERL_PURPLE,
    ...fonts.GroteskMedium12,
  },
});

export default styles;
