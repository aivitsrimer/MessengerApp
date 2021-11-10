import {Search} from './Search';
import {connect} from 'react-redux';
import {setFilterActionCreator} from '../../redux/reducers/searchReducer';

let mapStateToProps = state => {
  return {
    itemsList: state.searchPage.itemsList,
    filter: state.searchPage.filter,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(setFilterActionCreator(filter)),
  };
};

let MySearch = connect(mapStateToProps, mapDispatchToProps)(Search);

export {MySearch};
