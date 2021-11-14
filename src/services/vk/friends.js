import * as http from '../http';
import {API_VERSION, ACCESS_TOKEN} from './const';

const PREFIX = 'https://api.vk.com/method/friends';
const DEFAULT_FIELDS = 'photo_50,city';

export const get = (count = 15, offset = 0) => {
  const url = `${PREFIX}.get?fields=${DEFAULT_FIELDS}&count=${count}&offset=${offset}&v=${API_VERSION}&access_token=${ACCESS_TOKEN}`;
  return http.get(url).then(json => {
    if (json.response === undefined) {
      throw new Error('response is empty');
    }
    return {
      friends: json.response.items.map(item => {
        return {
          uri: item.photo_50,
          name: `${item.first_name} ${item.last_name}`,
          location: item.city?.title || 'Город не указан',
        };
      }),
    };
  });
};
