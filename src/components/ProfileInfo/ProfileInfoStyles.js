import {StyleSheet} from 'react-native';
import fonts from '../ui-kit/text/fonts';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 24,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginBottom: 24,
  },
  profilePhoto: {
    borderRadius: 90,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 17,
    width: 95,
    height: 95,
  },
  textName: {
    ...fonts.GroteskBold16,
    color: colors.LAVENDER,
    marginBottom: 6,
  },
  textAccount: {
    ...fonts.GroteskRegular16,
    fontSize: 12,
    color: colors.PERL_PURPLE,
    marginBottom: 29,
  },
  textLocation: {
    ...fonts.GroteskMedium14,
    color: colors.PERL_PURPLE,
    marginBottom: 8,
  },
  textWork: {
    ...fonts.GroteskRegular16,
    marginBottom: 8,
  },
});

export default styles;
