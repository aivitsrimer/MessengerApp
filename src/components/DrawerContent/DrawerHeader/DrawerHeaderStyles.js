import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import fonts from '../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    marginTop: 29,
    marginBottom: 60,
  },
  profilePhoto: {
    borderRadius: 90,
    overflow: 'hidden',
    marginRight: 20,
    marginLeft: 17,
    width: 71,
    height: 71,
  },
  textName: {
    ...fonts.GroteskBold14,
    color: colors.LAVENDER,
    textAlign: 'left',
  },
  textAccount: {
    ...fonts.GroteskRegular16,
    fontSize: 12,
    color: colors.PERL_PURPLE,
    textAlign: 'left',
  },
});

export default styles;
