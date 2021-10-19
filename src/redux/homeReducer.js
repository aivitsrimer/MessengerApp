let initialState = {
  posts: {
    postData: {
      post1: {
        photo: require('../assets/images/profilePhoto2.png'),
        name: 'Kat Williams',
        date: '1h ago',
        content: {
          image: require('../assets/images/postPhoto1.png'),
        },
        likesCount: '8,998',
        commentsCount: '145',
      },
      post2: {
        photo: require('../assets/images/profilePhoto3.png'),
        name: 'Tony Monta',
        date: '1h ago',
        content: {
          text: 'Writing code is not so bad!',
        },
        likesCount: '14',
        commentsCount: '0',
      },
      post3: {
        photo: require('../assets/images/profilePhoto.jpg'),
        name: 'Jessica Thompson',
        date: '2h ago',
        content: {
          image: require('../assets/images/postPhoto3.png'),
        },
        likesCount: '17',
        commentsCount: '2',
      },
      post4: {
        photo: require('../assets/images/profilePhoto4.png'),
        name: 'Dustin Grant',
        date: '3h ago',
        content: {
          image: require('../assets/images/postPhoto4.png'),
        },
        likesCount: '238',
        commentsCount: '14',
      },
    },
  },
};

const homeReducer = (state = initialState) => {
  return state;
};

export default homeReducer;
