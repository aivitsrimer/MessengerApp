import {getPhotosTakeEvery, getInfoTakeEvery} from './sagaProfile';
import {all} from 'redux-saga/effects';
import {getFriendsTakeEvery} from './sagaFriends';

export default function* rootSaga() {
  yield all([getPhotosTakeEvery(), getInfoTakeEvery(), getFriendsTakeEvery()]);
}
