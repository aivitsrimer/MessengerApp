let initialState = {
  auth: {
    isLoading: true,
    accessToken: null,
  },
};

const RESTORE_TOKEN = 'RESTORE_TOKEN';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const restoreTokenActionCreator = accessToken => ({type: RESTORE_TOKEN, accessToken: accessToken});

export default authReducer;
