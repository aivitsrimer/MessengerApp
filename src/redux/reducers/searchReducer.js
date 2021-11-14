import {SEARCH, SEARCH_ERROR, SEARCH_SUCCESS, SET_FILTER} from '../actionTypes/search';

let initialState = {
  itemsList: [
    {
      id: 1,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 2,
      name: 'Monegros Acid Resort',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'group',
    },
    {
      id: 3,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 4,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 5,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 6,
      name: 'Monegros Acid Resort',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'group',
    },
    {
      id: 7,
      name: 'Monegros Acid Resort',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'group',
    },
    {
      id: 8,
      name: 'Ruck',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 9,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 10,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 11,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 12,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 13,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 14,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
    {
      id: 15,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      path: require('../../assets/images/profilePhoto.jpg'),
      type: 'profile',
    },
  ],
  isLoaded: false,
  loading: false,
  error: '',
  filter: 'all',
  query: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {...state, filter: action.filter};
    case SEARCH:
      return {...state, loading: true, filter: action.filter, query: action.query};
    case SEARCH_SUCCESS:
      return {...state, isLoaded: true, loading: false, itemsList: action.response.items};
    case SEARCH_ERROR:
      return {...state, isLoaded: true, loading: false, error: action.error};
    default:
      return state;
  }
};

export default searchReducer;
