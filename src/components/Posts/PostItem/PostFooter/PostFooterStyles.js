import {StyleSheet} from 'react-native';
import color from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.ULTRAMARINE_BLUE,
  },
  containerLike: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerComments: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    color: color.SAPPHIRE_BLUE,
  },
  iconLike: {
    icon: {
      color: color.WHITE,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  iconComments: {
    icon: {
      color: color.WHITE,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
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
});

export default styles;
