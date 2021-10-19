import {Posts} from './Posts';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    postsData: state.homePage.posts.postData,
  };
};

let MyPosts = connect(mapStateToProps)(Posts);

export {MyPosts};
