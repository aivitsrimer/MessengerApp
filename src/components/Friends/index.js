import {Friends} from './Friends';
import {connect} from 'react-redux';
import {getFriendsActionCreator} from '../../redux/actionCreators/friends';

let mapStateToProps = state => {
  return {
    friends: state.friendsPage.friends,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    getFriends: () => dispatch(getFriendsActionCreator()),
  };
};

let MyFriends = connect(mapStateToProps, mapDispatchToProps)(Friends);

export {MyFriends};
