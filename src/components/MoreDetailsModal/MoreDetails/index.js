import {MoreDetails} from './MoreDetails';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    moreDetails: state.profilePage.moreDetails,
  };
};

let MyMoreDetails = connect(mapStateToProps)(MoreDetails);

export {MyMoreDetails};
