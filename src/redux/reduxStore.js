import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import friendsReducer from './friendsReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  authPage: authReducer,
  homePage: homeReducer,
  profilePage: profileReducer,
  postPage: postReducer,
  friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;
