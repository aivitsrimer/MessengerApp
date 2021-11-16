import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/post';
import * as actionCreators from '../actionCreators/post';
import * as post from '../services/post';

function* getCommentsWorker(action) {
  try {
    const response = yield call(() => post.getComments(action.post_id, action.owner_id));
    if (response) {
      yield put(actionCreators.getCommentsSuccessActionCreator(response));
    } else {
      yield put(actionCreators.getCommentsErrorActionCreator('Response is empty'));
    }
  } catch (error) {
    yield put(actionCreators.getCommentsErrorActionCreator(error));
  }
}

export function* getCommentsTakeEvery() {
  yield takeEvery(actionTypes.GET_COMMENTS, getCommentsWorker);
}
