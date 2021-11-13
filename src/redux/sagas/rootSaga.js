import {getPhotosTakeEvery, getInfoTakeEvery} from './sagaProfile';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([getPhotosTakeEvery(), getInfoTakeEvery()]);
}
