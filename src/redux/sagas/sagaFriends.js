import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/friends';
import * as actionCreators from '../actionCreators/friends';
import * as friends from '../services/friends';

function* getFriends() {
  try {
    let response = yield call(() => friends.getFriends());
    yield put(actionCreators.getFriendsSuccessActionCreator(response));
  } catch (error) {
    yield put(actionCreators.getFriendsErrorActionCreator(error));
  }
}

export function* getFriendsTakeEvery() {
  yield takeEvery(actionTypes.GET_FRIENDS, getFriends);
}
