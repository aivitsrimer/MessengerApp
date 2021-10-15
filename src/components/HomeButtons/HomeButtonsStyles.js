import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  iconMenu: {
    color: colors.LAVENDER,
  },
  iconSearch: {
    color: colors.LAVENDER,
    marginRight: 20,
  },
  iconAlert: {
    color: colors.LAVENDER,
  },
});

export default styles;
