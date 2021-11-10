import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import homeReducer from './reducers/homeReducer';
import profileReducer from './reducers/profileReducer';
import postReducer from './reducers/postReducer';
import friendsReducer from './reducers/friendsReducer';
import authReducer from './reducers/authReducer';
import searchReducer from './reducers/searchReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  authPage: authReducer,
  homePage: homeReducer,
  profilePage: profileReducer,
  postPage: postReducer,
  friendsPage: friendsReducer,
  searchPage: searchReducer,
});

let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
