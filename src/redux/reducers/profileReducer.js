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
        key: 'status',
        icon: 'chat',
        text: 'They never ask people to do things they wouldn’t do themselves.',
      },
      {
        key: 'bdate',
        icon: 'cake',
        textPrefix: 'День рождения: ',
        text: '08 октября 1992',
      },
      {
        key: 'city',
        icon: 'location-marker',
        textPrefix: 'Город: ',
        text: 'Санкт-Петербург',
      },
      {
        key: 'university',
        icon: 'briefcase',
        text: 'ВГУЮ в г. Санкт-Петербург',
      },
    ],
    links: [
      {
        key: 'site',
        icon: 'arrow-up',
        text: 'https://t.me/durov',
        link: 'https://t.me/durov',
      },
      {
        key: 'twitter',
        icon: 'twitter',
        text: 'Durov',
        link: 'https://twitter.com',
      },
      {
        key: 'instagram',
        icon: 'instagram',
        text: 'Pavel Durov',
        link: 'https://instgram.com',
      },
      {
        key: 'facebook',
        icon: 'facebook',
        text: 'durov',
        link: 'https://fb.com',
      },
      {
        key: 'telegram',
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
          ...state.photoGrid,
          loading: true,
        },
      };
    case FETCH_PHOTOS_SUCCESS:
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
          ...state.userInfo,
          loading: true,
        },
      };
    case GET_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          isLoaded: true,
          loading: false,
          info: action.response.info,
        },
        moreDetails: {
          details: state.moreDetails.details.map(item => {
            return {...item, text: action.response.details[item.key]};
          }),
          links: state.moreDetails.links.map(item => {
            return {...item, text: action.response.links[item.key], link: action.response.links[item.key]};
          }),
        },
      };
    case GET_INFO_ERROR:
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
