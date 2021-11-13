import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_ERROR,
  FETCH_PHOTOS_SUCCESS,
  GET_INFO,
  GET_INFO_ERROR,
  GET_INFO_SUCCESS,
} from '../actionTypes/profile';

let initialState = {
  userInfo: {
    isLoaded: false,
    loading: false,
    error: '',
    info: {
      photo: require('../../assets/images/profilePhoto.jpg'),
      name: 'Kat Williams',
      account: 'Williams',
      location: 'Россия, Санкт-Петербург',
      work: 'Место работы: Artist by Passion!',
      followers: '2,467',
      following: '1,589',
    },
  },
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
    isLoaded: false,
    loading: false,
    error: '',
    count: 18,
    photos: [
      {id: 1, path: require('../../assets/images/photo1.jpg')},
      {id: 2, path: require('../../assets/images/photo2.jpg')},
      {id: 3, path: require('../../assets/images/photo3.jpg')},
      {id: 4, path: require('../../assets/images/photo4.jpg')},
      {id: 5, path: require('../../assets/images/photo5.jpg')},
      {id: 6, path: require('../../assets/images/photo6.jpg')},
      {id: 7, path: require('../../assets/images/photo7.jpg')},
      {id: 8, path: require('../../assets/images/photo8.jpg')},
      {id: 9, path: require('../../assets/images/photo9.jpg')},
      {id: 10, path: require('../../assets/images/photo1.jpg')},
      {id: 11, path: require('../../assets/images/photo2.jpg')},
      {id: 12, path: require('../../assets/images/photo3.jpg')},
      {id: 13, path: require('../../assets/images/photo4.jpg')},
      {id: 14, path: require('../../assets/images/photo5.jpg')},
      {id: 15, path: require('../../assets/images/photo6.jpg')},
      {id: 16, path: require('../../assets/images/photo7.jpg')},
      {id: 17, path: require('../../assets/images/photo8.jpg')},
      {id: 18, path: require('../../assets/images/photo9.jpg')},
    ],
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        photoGrid: {
          loading: true,
          photos: state.photoGrid.photos,
        },
      };
    case FETCH_PHOTOS_SUCCESS:
      console.log(action);
      return {
        ...state,
        photoGrid: {
          isLoaded: true,
          loading: false,
          count: action.response.count,
          photos: action.response.items,
        },
      };
    case FETCH_PHOTOS_ERROR:
      console.log(action);
      return {
        ...state,
        photoGrid: {
          isLoaded: true,
          loading: false,
          error: action.error,
        },
      };
    case GET_INFO:
      return {
        ...state,
        userInfo: {
          loading: true,
          info: state.userInfo.info,
        },
      };
    case GET_INFO_SUCCESS:
      console.log(action);
      return {
        ...state,
        userInfo: {
          isLoaded: true,
          loading: false,
          info: action.response,
        },
      };
    case GET_INFO_ERROR:
      console.log(action);
      return {
        ...state,
        userInfo: {
          isLoaded: true,
          loading: false,
          error: action.error.msg,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
