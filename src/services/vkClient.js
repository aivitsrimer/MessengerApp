import {get} from './httpClient';
import store from '../redux/reduxStore';

export const vkGetPhotos = params => {
  const accessToken = store.getState().authPage.auth.accessToken;
  const url =
    'https://api.vk.com/method/photos.getAll?v=5.81&access_token=' + accessToken + '&count=' + (params.count || 9);

  return get(url).then(json => {
    console.log(json);
    return json.response.items.map(item => {
      console.log(item);
      return {
        id: item.id,
        uri: item.sizes[0].url,
      };
    });
  });
};
