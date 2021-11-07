import {Search} from './Search';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    itemsList: state.searchPage.itemsList,
  };
};

let MySearch = connect(mapStateToProps)(Search);

export {MySearch};
