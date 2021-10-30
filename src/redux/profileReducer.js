let initialState = {
  moreDetails: {
    details: [
      {
        id: 1,
        icon: 'chat',
        text: 'They never ask people to do things they wouldn’t do themselves.',
      },
      {
        id: 2,
        icon: 'cake',
        text: 'День рождения: 08 октября 1992',
      },
      {
        id: 3,
        icon: 'location-marker',
        text: 'Город: Санкт-Петербург',
      },
      {
        id: 4,
        icon: 'briefcase',
        text: 'ВГУЮ в г. Санкт-Петербург',
      },
    ],
    links: [
      {
        id: 1,
        icon: 'arrow-up',
        text: 'https://t.me/durov',
        link: 'https://t.me/durov',
      },
      {
        id: 2,
        icon: 'twitter',
        text: 'Durov',
        link: 'https://twitter.com',
      },
      {
        id: 3,
        icon: 'instagram',
        text: 'Pavel Durov',
        link: 'https://instgram.com',
      },
      {
        id: 4,
        icon: 'facebook',
        text: 'durov',
        link: 'https://fb.com',
      },
      {
        id: 5,
        icon: 'telegram',
        text: 'durov',
        link: 'https://telegram.com',
      },
    ],
  },
  photoGrid: {
    initialized: false,
    loading: false,
    photos: [
      {id: 1, path: require('../assets/images/photo1.jpg')},
      {id: 2, path: require('../assets/images/photo2.jpg')},
      {id: 3, path: require('../assets/images/photo3.jpg')},
      {id: 4, path: require('../assets/images/photo4.jpg')},
      {id: 5, path: require('../assets/images/photo5.jpg')},
      {id: 6, path: require('../assets/images/photo6.jpg')},
      {id: 7, path: require('../assets/images/photo7.jpg')},
      {id: 8, path: require('../assets/images/photo8.jpg')},
      {id: 9, path: require('../assets/images/photo9.jpg')},
      {id: 10, path: require('../assets/images/photo1.jpg')},
      {id: 11, path: require('../assets/images/photo2.jpg')},
      {id: 12, path: require('../assets/images/photo3.jpg')},
      {id: 13, path: require('../assets/images/photo4.jpg')},
      {id: 14, path: require('../assets/images/photo5.jpg')},
      {id: 15, path: require('../assets/images/photo6.jpg')},
      {id: 16, path: require('../assets/images/photo7.jpg')},
      {id: 17, path: require('../assets/images/photo8.jpg')},
      {id: 18, path: require('../assets/images/photo9.jpg')},
    ],
  },
};

const GET_PHOTOS = 'GET_PHOTOS';
const SET_PHOTOS = 'SET_PHOTOS';

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photoGrid: {
          loading: true,
          photos: state.photoGrid.photos,
        },
      };
    case SET_PHOTOS:
      console.log(action);
      return {
        ...state,
        photoGrid: {
          initialized: true,
          photos: [...action.items],
        },
      };
    default:
      return state;
  }
};

export const getPhotosActionCreator = () => ({type: GET_PHOTOS});
export const setPhotosActionCreator = items => ({type: SET_PHOTOS, items});

export default profileReducer;
