import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_ERROR,
  FETCH_PHOTOS_SUCCESS,
  GET_INFO,
  GET_INFO_ERROR,
  GET_INFO_SUCCESS,
} from '../actionTypes/profile';

export const fetchPhotosActionCreator = () => ({type: FETCH_PHOTOS});
export const fetchPhotosSuccessActionCreator = response => ({type: FETCH_PHOTOS_SUCCESS, response});
export const fetchPhotosErrorActionCreator = error => ({type: FETCH_PHOTOS_ERROR, error});

export const getInfoActionCreator = () => ({type: GET_INFO});
export const getInfoSuccessSuccessActionCreator = response => ({type: GET_INFO_SUCCESS, response});
export const getInfoErrorActionCreator = error => ({type: GET_INFO_ERROR, error});
