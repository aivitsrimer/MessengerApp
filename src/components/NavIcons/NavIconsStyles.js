import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    marginTop: 30,
  },
  iconArrow: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  iconMenu: {
    position: 'absolute',
    right: 0,
    top: 0,
    transform: [{rotate: '90deg'}],
  },
});

export default styles;
