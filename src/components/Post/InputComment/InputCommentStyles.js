import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.ULTRAMARINE_BLUE,
    marginBottom: 27,
  },
  input: {
    height: 36,
    width: 300,
    borderWidth: 1,
    borderRadius: 28,
    padding: 10,
    backgroundColor: colors.SAPPHIRE_BLUE,
    borderColor: colors.SAPPHIRE_BLUE,
    color: colors.PERL_PURPLE,
  },
  placeholder: {
    color: colors.PERL_PURPLE,
  },
  containerIcon: {
    marginLeft: 20,
  },
});

export default styles;
