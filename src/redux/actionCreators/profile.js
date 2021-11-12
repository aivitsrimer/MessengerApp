import {FETCH_PHOTOS, FETCH_PHOTOS_ERROR, FETCH_PHOTOS_SUCCESS} from '../actionTypes/profile';

export const fetchPhotosActionCreator = () => ({type: FETCH_PHOTOS});
export const fetchPhotosSuccessActionCreator = response => ({type: FETCH_PHOTOS_SUCCESS, response});
export const fetchPhotosErrorActionCreator = error => ({type: FETCH_PHOTOS_ERROR, error});
