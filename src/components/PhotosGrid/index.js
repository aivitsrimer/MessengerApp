import {PhotosGrid} from './PhotosGrid';
import {connect} from 'react-redux';
import {getPhotosActionCreator, setPhotosActionCreator} from '../../redux/profileReducer';

let mapStateToProps = state => {
  return {
    photoGrid: state.profilePage.photoGrid,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotosActionCreator()),
    setPhotos: items => dispatch(setPhotosActionCreator(items)),
  };
};

let MyPhotosGrid = connect(mapStateToProps, mapDispatchToProps)(PhotosGrid);

export {MyPhotosGrid};
