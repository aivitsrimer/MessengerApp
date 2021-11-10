let initialState = {
  itemsList: [
    {
      id: 1,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 2,
      name: 'Monegros Acid Resort',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'group',
    },
    {
      id: 3,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 4,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 5,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 6,
      name: 'Monegros Acid Resort',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'group',
    },
    {
      id: 7,
      name: 'Monegros Acid Resort',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'group',
    },
    {
      id: 8,
      name: 'Ruck',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 9,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 10,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 11,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 12,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 13,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 14,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
    {
      id: 15,
      name: 'Kat Williams',
      location: 'Санкт-Петербург',
      photo: require('../../assets/images/profilePhoto.jpg'),
      type: 'friend',
    },
  ],
  filter: 'all',
};

const SET_FILTER = 'SET_FILTER';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {...state, filter: action.filter};
    default:
      return state;
  }
};

export const setFilterActionCreator = filter => ({type: SET_FILTER, filter});

export default searchReducer;
