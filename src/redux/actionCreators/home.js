import {GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR} from '../actionTypes/home';

export const getPostsActionCreator = () => ({type: GET_POSTS});
export const getPostsSuccessActionCreator = response => ({type: GET_POSTS_SUCCESS, response});
export const getPostsErrorActionCreator = error => ({type: GET_POSTS_ERROR, error});
