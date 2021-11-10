import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/profile';
import * as actionCreators from '../actionCreators/profile';
import {photosGet} from '../../services/vkAPI';

function* getPhotos() {
  try {
    let items = yield call(() => photosGet());
    console.log(items);
    yield put(actionCreators.fetchPhotosSuccessActionCreator(items));
  } catch (error) {
    yield put(actionCreators.fetchPhotosErrorActionCreator(error));
  }
}

export function* getPhotosTakeEvery() {
  yield takeEvery(actionTypes.FETCH_PHOTOS, getPhotos);
}
