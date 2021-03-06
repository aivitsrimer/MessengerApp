import {StyleSheet} from 'react-native';
import fonts from '../ui-kit/text/fonts';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  containerModal: {
    height: 161,
  },
  containerButtons: {
    backgroundColor: colors.ULTRAMARINE_BLUE,
    paddingHorizontal: 16,
  },
  backButton: {
    container: {
      marginTop: 10,
      borderRadius: 15,
      paddingTop: 14,
      paddingBottom: 12,
      justifyContent: 'center',
    },
    text: {
      ...fonts.GroteskBold16,
    },
  },
});

export default styles;
