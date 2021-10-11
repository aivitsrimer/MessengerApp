import {StyleSheet} from 'react-native';
import fonts from '../ui-kit/text/fonts';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  textCounter: {
    ...fonts.GroteskRegular16,
    fontSize: 14,
    color: '#8672BB',
    textAlign: 'center',
    paddingLeft: 6,
  },
  textLabel: {
    ...fonts.GroteskRegular16,
    lineHeight: 20,
  },
  photo: {
    marginBottom: 3,
    marginRight: 3,
  },
});

export default styles;
