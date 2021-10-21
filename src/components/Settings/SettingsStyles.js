import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../ui-kit/text/fonts';
import color from '../../assets/colors';

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: ScreenHeight,
    width: '100%',
    backgroundColor: colors.ULTRAMARINE_BLUE,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  containerIcon: {
    position: 'absolute',
    justifyContent: 'flex-start',
    zIndex: 2,
    width: '100%',
  },
  iconBack: {
    icon: {
      left: 0,
      top: 0,
      marginRight: 20,
    },
  },
  containerTitle: {
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    ...fonts.GroteskBold16,
    color: colors.WHITE,
  },
  containerSettings: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 24,
    width: '100%',
    marginTop: 25,
  },
  icon: {
    color: color.WHITE,
  },
  text: {
    textAlign: 'left',
    color: color.WHITE,
    ...fonts.GroteskBold16,
    marginLeft: 10,
  },
  iconLogout: {
    color: color.PERL_PURPLE,
  },
  textLogout: {
    textAlign: 'left',
    color: color.PERL_PURPLE,
    ...fonts.GroteskBold16,
    marginLeft: 10,
  },
});

export default styles;
