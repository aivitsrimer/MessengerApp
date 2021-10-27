import {PostComments} from './PostComments';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    comments: state.postPage.comments,
  };
};

let MyPostComments = connect(mapStateToProps)(PostComments);

export {MyPostComments};
