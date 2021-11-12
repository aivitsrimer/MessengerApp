import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/profile';
import * as actionCreators from '../actionCreators/profile';
import * as profile from '../services/profile';

function* getPhotos() {
  try {
    let response = yield call(() => profile.getPhotos());
    yield put(actionCreators.fetchPhotosSuccessActionCreator(response));
  } catch (error) {
    yield put(actionCreators.fetchPhotosErrorActionCreator(error));
  }
}

export function* getPhotosTakeEvery() {
  yield takeEvery(actionTypes.FETCH_PHOTOS, getPhotos);
}
