import {StyleSheet} from 'react-native';
import color from '../../../../assets/colors';
import fonts from '../../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
    width: '100%',
    marginTop: 12,
    backgroundColor: color.ULTRAMARINE_BLUE,
  },
  containerData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 32,
    width: '100%',
  },
  containerImage: {
    flexDirection: 'column',
    width: 32,
    marginRight: 8,
  },
  photo: {
    borderRadius: 90,
    overflow: 'hidden',
    height: 32,
    width: 32,
  },
  containerText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: color.PERL_PURPLE,
  },
  textName: {
    textAlign: 'left',
    maxWidth: 280,
    color: color.LAVENDER,
    ...fonts.GroteskBold14,
  },
  textTime: {
    textAlign: 'left',
    color: color.PERL_PURPLE,
    ...fonts.GroteskMedium12,
  },
});

export default styles;
