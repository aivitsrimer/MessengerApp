import {Search} from './Search';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    friendsList: state.friendsPage.friendsList,
  };
};

let MySearch = connect(mapStateToProps)(Search);

export {MySearch};
