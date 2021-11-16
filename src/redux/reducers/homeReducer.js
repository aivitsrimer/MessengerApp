import {GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR} from '../actionTypes/home';

let initialState = {
  posts: {
    isLoaded: false,
    loading: false,
    error: '',
    list: [
      {
        id: 1,
        photo: require('../../assets/images/profilePhoto2.png'),
        name: 'Kat Williams',
        date: '1h ago',
        content: {
          images: [
            require('../../assets/images/postPhoto1.png'),
            require('../../assets/images/postPhoto1-2.png'),
            require('../../assets/images/postPhoto1-3.png'),
          ],
        },
        likesCount: '8,998',
        commentsCount: '145',
      },
      {
        id: 2,
        photo: require('../../assets/images/profilePhoto3.png'),
        name: 'Tony Monta',
        date: '1h ago',
        content: {
          text: 'Writing code is not so bad!',
          images: [],
        },
        likesCount: '14',
        commentsCount: '0',
      },
      {
        id: 3,
        photo: require('../../assets/images/profilePhoto.jpg'),
        name: 'Jessica Thompson',
        date: '2h ago',
        content: {
          images: [require('../../assets/images/postPhoto3.png')],
        },
        likesCount: '17',
        commentsCount: '2',
      },
      {
        id: 4,
        photo: require('../../assets/images/profilePhoto4.png'),
        name: 'Dustin Grant',
        date: '3h ago',
        content: {
          images: [require('../../assets/images/postPhoto4.png')],
        },
        likesCount: '238',
        commentsCount: '14',
      },
    ],
  },
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: true,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          isLoaded: true,
          loading: false,
          list: action.response.posts,
        },
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          isLoaded: true,
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default homeReducer;
