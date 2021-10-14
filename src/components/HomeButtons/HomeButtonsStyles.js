import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  iconMenu: {
    // justifyContent: 'flex-start',
    right: 0,
    top: 0,
  },
  iconSearch: {
    justifyContent: 'flex-end',
    left: 58,
    top: 0,
  },
  iconAlert: {
    justifyContent: 'flex-end',
    right: 0,
    top: 0,
    transform: [{rotate: '90deg'}],
  },
});

export default styles;
