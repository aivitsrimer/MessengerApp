import {GET_FRIENDS, GET_FRIENDS_SUCCESS, GET_FRIENDS_ERROR} from '../actionTypes/friends';

export const getFriendsActionCreator = () => ({type: GET_FRIENDS});
export const getFriendsSuccessActionCreator = response => ({type: GET_FRIENDS_SUCCESS, response});
export const getFriendsErrorActionCreator = error => ({type: GET_FRIENDS_ERROR, error});
