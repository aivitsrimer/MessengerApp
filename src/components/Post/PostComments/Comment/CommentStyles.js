import {StyleSheet} from 'react-native';
import color from '../../../../assets/colors';
import fonts from '../../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 7,
  },
  containerComment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginVertical: 10,
  },
  photo: {
    borderRadius: 90,
    overflow: 'hidden',
    height: 43,
    width: 43,
  },
  containerBody: {
    flexDirection: 'row',
    width: '100%',
  },
  containerBodyComment: {
    alignItems: 'flex-start',
    marginLeft: 10,
    width: 250,
  },
  textName: {
    color: color.WHITE,
    ...fonts.GroteskBold14,
  },
  textComment: {
    textAlign: 'left',
    width: 250,
    color: color.PERIWINKLE_CRAYOLA,
    ...fonts.GroteskMedium12,
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 20,
    marginTop: 6,
  },
  textDate: {
    color: color.PERL_PURPLE,
    ...fonts.GroteskMedium10,
  },
  textAnswer: {
    color: color.WHITE,
    ...fonts.GroteskMedium10,
    marginLeft: 15,
  },
  containerLike: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: 19,
  },
  textLike: {
    color: color.WHITE,
    ...fonts.GroteskMedium12,
    marginLeft: 8,
  },
});

export default styles;
