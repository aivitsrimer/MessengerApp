import {PhotosGrid} from './PhotosGrid';
import {connect} from 'react-redux';
import {fetchPhotosActionCreator} from '../../redux/actionCreators/profile';

let mapStateToProps = state => {
  return {
    photoGrid: state.profilePage.photoGrid,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotosActionCreator()),
  };
};

let MyPhotosGrid = connect(mapStateToProps, mapDispatchToProps)(PhotosGrid);

export {MyPhotosGrid};
