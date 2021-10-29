import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const {width} = Dimensions.get('window');
const indicatorStyle = {
  justifyContent: 'center',
  borderBottomWidth: 6,
  borderRadius: 90,
  height: 6,
  width: 6,
  marginHorizontal: 5,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  scrollView: {
    width: width - 32,
    overflow: 'hidden',
  },
  image: {
    width: width - 32,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  containerIndicators: {
    width: '100%',
    height: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
  },
  indicator: {
    ...indicatorStyle,
    borderColor: colors.PERL_PURPLE,
  },
  indicatorActive: {
    ...indicatorStyle,
    borderColor: colors.LEMON_YELLOW_CRAYOLA,
  },
});

export default styles;
