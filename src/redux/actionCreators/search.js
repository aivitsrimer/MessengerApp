import {SEARCH, SEARCH_SUCCESS, SEARCH_ERROR, SET_FILTER} from '../actionTypes/search';

export const searchActionCreator = (query, filter) => ({type: SEARCH, filter: filter, query: query});
export const searchSuccessActionCreator = response => ({type: SEARCH_SUCCESS, response});
export const searchErrorActionCreator = error => ({type: SEARCH_ERROR, error});

export const setFilterActionCreator = filter => ({type: SET_FILTER, filter});
