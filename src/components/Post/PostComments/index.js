import {PostComments} from './PostComments';
import {connect} from 'react-redux';
import {getCommentsActionCreator} from '../../../redux/actionCreators/post';

let mapStateToProps = state => {
  return {
    post: state.postPage.post,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    getComments: (post_id, owner_id) => dispatch(getCommentsActionCreator(post_id, owner_id)),
  };
};

let MyPostComments = connect(mapStateToProps, mapDispatchToProps)(PostComments);

export {MyPostComments};
