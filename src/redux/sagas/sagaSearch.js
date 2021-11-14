import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/search';
import * as actionCreators from '../actionCreators/search';
import * as search from '../services/search';

function* searchWorker(action) {
  try {
    yield put(actionCreators.setFilterActionCreator(action.filter));
    let response;
    if (action.filter === 'groups') {
      response = yield call(() => search.getGroups(action.query));
    } else if (action.filter === 'friends') {
      response = yield call(() => search.getFriends(action.query));
    } else {
      response = yield call(() => search.getAll(action.query));
    }
    yield put(actionCreators.searchSuccessActionCreator(response));
  } catch (error) {
    yield put(actionCreators.searchErrorActionCreator(error));
  }
}

export function* searchTakeEvery() {
  yield takeEvery(actionTypes.SEARCH, searchWorker);
}
