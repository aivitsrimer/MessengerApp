import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  defaultBackground: {
    flex: 1,
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  defaultStyle: {
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    color: colors.WHITE,
  },
  input: {
    paddingHorizontal: 16,
  },
  buttonUp: {
    position: 'absolute',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 109,
    backgroundColor: colors.SAPPHIRE_BLUE,
    borderRadius: 30,
  },
});

export default styles;
