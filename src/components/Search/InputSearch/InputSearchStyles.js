import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginLeft: 18,
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  input: {
    height: 36,
    width: '100%',
    borderWidth: 1,
    borderRadius: 28,
    padding: 10,
    paddingLeft: 39,
    backgroundColor: colors.SAPPHIRE_BLUE,
    borderColor: colors.SAPPHIRE_BLUE,
    color: colors.PERL_PURPLE,
  },
  placeholder: {
    color: colors.PERL_PURPLE,
  },
  icon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
});

export default styles;
