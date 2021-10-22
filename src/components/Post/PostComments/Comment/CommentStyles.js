import {StyleSheet} from 'react-native';
import color from '../../../../assets/colors';
import fonts from '../../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 17,
    marginBottom: 0,
  },
  containerComment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
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
  containerBodyCommentChildren: {
    alignItems: 'flex-start',
    marginLeft: 10,
    width: 200,
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
  textCommentChildren: {
    textAlign: 'left',
    width: 200,
    color: color.PERIWINKLE_CRAYOLA,
    ...fonts.GroteskMedium12,
  },
  imageComment: {
    height: 54,
    width: 54,
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
  containerChildren: {
    marginLeft: 53,
    marginTop: 15,
  },
});

export default styles;
