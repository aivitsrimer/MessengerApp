import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const height = (width * 100) / 6;

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
});

export default styles;
