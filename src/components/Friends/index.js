import {Friends} from './Friends';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    friendsList: state.friendsPage.friendsList,
  };
};

let MyFriends = connect(mapStateToProps)(Friends);

export {MyFriends};
