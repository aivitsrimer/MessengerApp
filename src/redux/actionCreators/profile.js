import {FETCH_PHOTOS, FETCH_PHOTOS_ERROR, FETCH_PHOTOS_SUCCESS, SET_PHOTOS} from '../actionTypes/profile';

export const fetchPhotosActionCreator = () => ({type: FETCH_PHOTOS});
export const fetchPhotosSuccessActionCreator = items => ({type: FETCH_PHOTOS_SUCCESS, items});
export const fetchPhotosErrorActionCreator = error => ({type: FETCH_PHOTOS_ERROR, error});
export const setPhotosActionCreator = items => ({type: SET_PHOTOS, items});
