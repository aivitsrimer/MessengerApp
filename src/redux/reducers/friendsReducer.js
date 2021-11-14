import {GET_FRIENDS, GET_FRIENDS_ERROR, GET_FRIENDS_SUCCESS} from '../actionTypes/friends';

let initialState = {
  friends: {
    isLoaded: false,
    loading: false,
    error: '',
    list: [
      {
        id: 1,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 2,
        name: 'Monegros Acid Resort',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 3,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 4,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 5,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 6,
        name: 'Monegros Acid Resort',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 7,
        name: 'Monegros Acid Resort',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 8,
        name: 'Ruck',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 9,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 10,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 11,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 12,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 13,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 14,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
      {
        id: 15,
        name: 'Kat Williams',
        location: 'Санкт-Петербург',
        path: require('../../assets/images/profilePhoto.jpg'),
      },
    ],
  },
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        friends: {
          ...state.friends,
          loading: true,
        },
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: {
          isLoaded: true,
          loading: false,
          list: action.response.friends,
        },
      };
    case GET_FRIENDS_ERROR:
      return {
        ...state,
        friends: {
          isLoaded: true,
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default friendsReducer;
