import {Post} from './Post';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    post: state.postPage.post,
  };
};

let MyPost = connect(mapStateToProps)(Post);

export {MyPost};
