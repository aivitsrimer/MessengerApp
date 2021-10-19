import {PhotosGrid} from './PhotosGrid';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    photoGrid: state.profilePage.photoGrid,
  };
};

let MyPhotosGrid = connect(mapStateToProps)(PhotosGrid);

export {MyPhotosGrid};
