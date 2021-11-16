import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/home';
import * as actionCreators from '../actionCreators/home';
import * as home from '../services/home';

function* getPosts() {
  try {
    let response = yield call(() => home.getPosts());
    yield put(actionCreators.getPostsSuccessActionCreator(response));
  } catch (error) {
    yield put(actionCreators.getPostsErrorActionCreator(error));
  }
}

export function* getPostsTakeEvery() {
  yield takeEvery(actionTypes.GET_POSTS, getPosts);
}
