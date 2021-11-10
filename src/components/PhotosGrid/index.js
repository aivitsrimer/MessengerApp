import {PhotosGrid} from './PhotosGrid';
import {connect} from 'react-redux';
import {
  fetchPhotosActionCreator,
  fetchPhotosErrorActionCreator,
  fetchPhotosSuccessActionCreator,
  setPhotosActionCreator,
} from '../../redux/actionCreators/profile';

let mapStateToProps = state => {
  return {
    photoGrid: state.profilePage.photoGrid,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotosActionCreator()),
    fetchPhotosSuccess: items => dispatch(fetchPhotosSuccessActionCreator(items)),
    fetchPhotosError: error => dispatch(fetchPhotosErrorActionCreator(error)),
    setPhotos: items => dispatch(setPhotosActionCreator(items)),
  };
};

let MyPhotosGrid = connect(mapStateToProps, mapDispatchToProps)(PhotosGrid);

export {MyPhotosGrid};
