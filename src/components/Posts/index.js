import {Posts} from './Posts';
import {connect} from 'react-redux';
import {getPostsActionCreator} from '../../redux/actionCreators/home';
import {setPostActionCreator} from '../../redux/actionCreators/post';

let mapStateToProps = state => {
  return {
    posts: state.homePage.posts,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPostsActionCreator()),
    setPost: post => dispatch(setPostActionCreator(post)),
  };
};

let MyPosts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export {MyPosts};
