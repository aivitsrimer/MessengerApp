import * as http from '../http';
import {API_VERSION, ACCESS_TOKEN} from './const';

const PREFIX = 'https://api.vk.com/method/search';
const DEFAULT_FIELDS = 'photo_50,city';

export const FILTER_ALL = 'friends,groups';
export const FILTER_FRIENDS = 'friends';
export const FILTER_GROUPS = 'groups';

export const getHints = (query = '', filters = FILTER_ALL, limit = 20, offset = 0) => {
  const url = `${PREFIX}.getHints?q=${query}&filters=${filters}&fields=${DEFAULT_FIELDS}&limit=${limit}&offset=${offset}&v=${API_VERSION}&access_token=${ACCESS_TOKEN}`;
  return http.get(url).then(json => {
    if (json.response === undefined) {
      throw new Error('response is empty');
    }
    return {
      items: json.response.items.map(item => {
        if (item.type === 'group') {
          return {
            id: item.group.id,
            type: item.type,
            name: item.group.name,
            uri: item.group.photo_50,
            location: item.group.city?.title || 'Город не указан',
          };
        }
        return {
          id: item.profile.id,
          type: item.type,
          name: `${item.profile.first_name} ${item.profile.last_name}`,
          uri: item.profile.photo_50,
          location: item.profile.city?.title || 'Город не указан',
        };
      }),
    };
  });
};
