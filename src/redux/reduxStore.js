import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import friendsReducer from './friendsReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';

let reducers = combineReducers({
  authPage: authReducer,
  homePage: homeReducer,
  profilePage: profileReducer,
  postPage: postReducer,
  friendsPage: friendsReducer,
  searchPage: searchReducer,
});

let store = createStore(reducers);

export default store;
