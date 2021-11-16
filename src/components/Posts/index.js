import {Posts} from './Posts';
import {connect} from 'react-redux';
import {getPostsActionCreator} from '../../redux/actionCreators/home';

let mapStateToProps = state => {
  return {
    posts: state.homePage.posts,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPostsActionCreator()),
  };
};

let MyPosts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export {MyPosts};
