import {get} from './httpClient';

export const vkGetPhotos = params => {
  return get('https://api.vk.com/method/photos.getAll' + params).then(json => {
    return json.response.items.map(item => {
      console.log(item);
      return {
        id: item.id,
        uri: item.sizes[0].url,
      };
    });
  });
};
