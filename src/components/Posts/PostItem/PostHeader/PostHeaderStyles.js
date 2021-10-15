import {StyleSheet} from 'react-native';
import color from '../../../../assets/colors';
import fonts from '../../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
    width: '100%',
    marginVertical: 10,
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
    color: color.LAVENDER,
    ...fonts.GroteskBold14,
  },
  textTime: {
    textAlign: 'left',
    color: color.PERL_PURPLE,
    ...fonts.GroteskMedium12,
  },
  iconStyles: {
    justifyContent: 'flex-end',

    icon: {
      color: color.PERL_PURPLE,
    },
  },
});

export default styles;
