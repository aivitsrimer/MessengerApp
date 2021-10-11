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
    justifyContent: 'flex-start',
    left: 0,
    top: 0,
  },
  iconMenu: {
    justifyContent: 'flex-end',
    right: 0,
    top: 0,
    transform: [{rotate: '90deg'}],
  },
});

export default styles;
