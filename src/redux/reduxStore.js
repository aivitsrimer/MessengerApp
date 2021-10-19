import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({homePage: homeReducer, profilePage: profileReducer});

let store = createStore(reducers);

export default store;
