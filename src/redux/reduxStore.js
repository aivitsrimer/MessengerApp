import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';

let reducers = combineReducers({homePage: homeReducer, profilePage: profileReducer, postPage: postReducer});

let store = createStore(reducers);

export default store;
