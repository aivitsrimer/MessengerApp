import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.ULTRAMARINE_BLUE,
    position: 'absolute',
    left: 0,
    bottom: 0,
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
    marginLeft: 16,
    marginBottom: 27,
    marginTop: 4,
  },
  placeholder: {
    color: colors.PERL_PURPLE,
  },
  containerIcon: {
    marginLeft: 20,
    marginBottom: 25,
  },
});

export default styles;
