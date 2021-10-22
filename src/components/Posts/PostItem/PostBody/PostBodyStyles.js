import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';
import fonts from '../../../ui-kit/text/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 22,
  },
  containerImage: {
    alignItems: 'center',
    width: '100%',
  },
  containerSlider: {

  },
  image: {
    width: 343,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
  },
  text: {
    ...fonts.GroteskMedium12,
    color: colors.PERIWINKLE_CRAYOLA,
    textAlign: 'left',
  },
});

export default styles;
