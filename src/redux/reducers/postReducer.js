import {GET_COMMENTS, GET_COMMENTS_ERROR, GET_COMMENTS_SUCCESS, SET_POST} from '../actionTypes/post';

let initialState = {
  post: {
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
    comments: {
      isLoaded: false,
      loading: false,
      error: '',
      list: [
        {
          key: 1,
          name: 'Kat Williams',
          path: require('../../assets/images/profilePhoto.jpg'),
          textComment:
            'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
          date: '25 сен. в 22:12',
          counterLike: '56',
          children: [
            {
              key: 5,
              name: 'Kat Williams',
              path: require('../../assets/images/profilePhoto.jpg'),
              textComment: 'User experience design for the Web (and its siblings.',
              date: '25 сен. в 22:12',
              counterLike: '56',
            },
          ],
        },
        {
          key: 2,
          name: 'Kat Williams',
          path: require('../../assets/images/profilePhoto.jpg'),
          imageComment: require('../../assets/images/heart.png'),
          date: '25 сен. в 22:12',
          counterLike: '12',
        },
        {
          key: 3,
          name: 'Kat Williams',
          path: require('../../assets/images/profilePhoto.jpg'),
          textComment:
            'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
          date: '25 сен. в 22:12',
          counterLike: '56',
        },
        {
          key: 4,
          name: 'Kat Williams',
          path: require('../../assets/images/profilePhoto.jpg'),
          textComment:
            'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
          date: '25 сен. в 22:12',
          counterLike: '56',
        },
      ],
    },
  },
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        post: {
          ...state.post,
          comments: {
            ...state.post.comments,
            loading: true,
          },
        },
      };
    case GET_COMMENTS_SUCCESS:
      return {
        post: {
          ...state.post,
          comments: {
            isLoaded: true,
            loading: false,
            list: action.response.comments,
          },
        },
      };
    case GET_COMMENTS_ERROR:
      return {
        post: {
          ...state.post,
          comments: {
            isLoaded: true,
            loading: false,
            error: action.error,
          },
        },
      };
    case SET_POST:
      return {
        post: {
          ...state.post,
          id: action.post.id,
          source: action.post.source,
          photo: action.post.uri,
          name: action.post.name,
          date: action.post.date,
          content: action.post.content,
          likesCount: action.post.likesCount,
          commentsCount: action.post.commentsCount,
          comments: {
            ...state.post.comments,
            isLoaded: false,
          },
        },
      };
    default:
      return state;
  }
};

export default postReducer;
