import {StyleSheet} from 'react-native';
import typo from '../ui-kit/text/typo';

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    height: 161,
  },
  containerButtons: {
    backgroundColor: '#2B2146',
  },
  backButton: {
    container: {
      marginTop: 10,
      borderRadius: 15,
      paddingVertical: 17,
      justifyContent: 'center',
    },
    text: {
      ...typo.GroteskBold16,
    },
  },
});

export default styles;
