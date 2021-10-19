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
    photosList: [
      require('../assets/images/photo1.jpg'),
      require('../assets/images/photo2.jpg'),
      require('../assets/images/photo3.jpg'),
      require('../assets/images/photo4.jpg'),
      require('../assets/images/photo5.jpg'),
      require('../assets/images/photo6.jpg'),
      require('../assets/images/photo7.jpg'),
      require('../assets/images/photo8.jpg'),
      require('../assets/images/photo9.jpg'),
      require('../assets/images/photo1.jpg'),
      require('../assets/images/photo2.jpg'),
      require('../assets/images/photo3.jpg'),
      require('../assets/images/photo4.jpg'),
      require('../assets/images/photo5.jpg'),
      require('../assets/images/photo6.jpg'),
      require('../assets/images/photo7.jpg'),
      require('../assets/images/photo8.jpg'),
      require('../assets/images/photo9.jpg'),
    ],
  },
};

const profileReducer = (state = initialState) => {
  return state;
};

export default profileReducer;
