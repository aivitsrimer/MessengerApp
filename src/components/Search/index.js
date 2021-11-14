import {Search} from './Search';
import {connect} from 'react-redux';
import {searchActionCreator} from '../../redux/actionCreators/search';

let mapStateToProps = state => {
  return {
    itemsList: state.searchPage.itemsList,
    filter: state.searchPage.filter,
    query: state.searchPage.query,
    isLoaded: state.searchPage.isLoaded,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    search: (query, filter) => dispatch(searchActionCreator(query, filter)),
  };
};

let MySearch = connect(mapStateToProps, mapDispatchToProps)(Search);

export {MySearch};
