import {StyleSheet} from 'react-native';
import color from '../../../../assets/colors';
import fonts from '../../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  // container: {
  // },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    backgroundColor: color.ULTRAMARINE_BLUE,
  },
  containerSocial: {
    flexDirection: 'row',
  },
  containerLike: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  containerComments: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    color: color.WHITE,
    ...fonts.GroteskSemibold14,
  },
  iconLike: {
    icon: {
      color: color.WHITE,
    },
    container: {
      marginRight: 8,
    },
  },
  iconComments: {
    icon: {
      color: color.WHITE,
    },
    container: {
      // flexDirection: 'row',
      marginRight: 8,
    },
  },
  iconBookmark: {
    icon: {
      color: color.WHITE,
    },
    container: {
      justifyContent: 'flex-end',
    },
  },
  divider: {
    marginBottom: 24,
  },
});

export default styles;
