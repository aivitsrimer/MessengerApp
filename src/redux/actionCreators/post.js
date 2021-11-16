import {GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR, SET_POST} from '../actionTypes/post';

export const getCommentsActionCreator = (post_id, owner_id) => ({type: GET_COMMENTS, post_id, owner_id});
export const getCommentsSuccessActionCreator = response => ({type: GET_COMMENTS_SUCCESS, response});
export const getCommentsErrorActionCreator = error => ({type: GET_COMMENTS_ERROR, error});

export const setPostActionCreator = post => ({type: SET_POST, post});
