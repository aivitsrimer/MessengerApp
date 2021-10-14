import {StyleSheet} from 'react-native';
import color from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 34,
    width: '100%',
    backgroundColor: color.ULTRAMARINE_BLUE,
  },
  containerImage: {
    flexDirection: 'column',
    width: 32,
  },
  containerText: {
    flexDirection: 'column',
  },
  photo: {
    // justifyContent: 'flex-start',
    height: 32,
    width: 32,
  },
  iconStyles: {
    icon: {
      color: color.PERL_PURPLE,
    },
    container: {
      // justifyContent: 'flex-end',
    },
  },
});

export default styles;
