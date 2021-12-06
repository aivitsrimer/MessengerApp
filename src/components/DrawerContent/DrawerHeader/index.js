import {DrawerHeader} from './DrawerHeader';
import {connect} from 'react-redux';
import {getInfoActionCreator} from '../../../redux/actionCreators/profile';

let mapStateToProps = state => {
  return {
    userInfo: state.profilePage.userInfo,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    getInfo: () => dispatch(getInfoActionCreator()),
  };
};

let MyDrawerHeader = connect(mapStateToProps, mapDispatchToProps)(DrawerHeader);

export {MyDrawerHeader};
