import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const filterItem = {
  paddingHorizontal: 3,
  paddingVertical: 7,
  color: colors.PERL_PURPLE,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.MODERATE_PURPLISH_BLUE,
  },
  filterItem: filterItem,
  filterItemActive: {
    ...filterItem,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: colors.LAVENDER,
    color: colors.LAVENDER,
  },
  text: {
    color: colors.PERL_PURPLE,
  },
  textActive: {
    color: colors.WHITE,
  },
});

export default styles;
