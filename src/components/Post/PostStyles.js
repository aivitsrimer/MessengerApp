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
    justifyContent: 'center',
    marginVertical: 15,
  },
  containerIcon: {
    position: 'absolute',
    justifyContent: 'flex-start',
    zIndex: 2,
    width: '100%',
  },
  iconBack: {
    left: 0,
    top: 0,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 32,
    width: '100%',
    marginBottom: 17,
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
  containerImages: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginRight: 8,
  },
  image: {
    width: 343,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 4,
  },
  containerPostInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: color.PERL_PURPLE,
    marginTop: 20,
  },
  containerLike: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  textLike: {
    color: color.WHITE,
    ...fonts.GroteskSemibold14,
    marginLeft: 10,
  },
  containerPostFooter: {
    flexDirection: 'column',
    width: '100%',
    marginRight: 8,
  },
  textComment: {
    textAlign: 'left',
    alignItems: 'flex-start',
    color: color.WHITE,
    ...fonts.GroteskBold14,
    marginTop: 10,
    marginBottom: 17,
  },
  containerComments: {
    paddingBottom: 30,
  },
});

export default styles;
