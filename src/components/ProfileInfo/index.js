import {ProfileInfo} from './ProfileInfo';
import {connect} from 'react-redux';
import {getInfoActionCreator} from '../../redux/actionCreators/profile';

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

let MyProfileInfo = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export {MyProfileInfo};
