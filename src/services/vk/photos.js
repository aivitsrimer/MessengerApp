import * as http from '../http';
import {API_VERSION, ACCESS_TOKEN} from './const';

const prefix = 'https://api.vk.com/method/photos';

export const getAll = ({count = 18, offset = 0}) => {
  console.log(ACCESS_TOKEN);
  const url = `${prefix}.getAll?v=${API_VERSION}&access_token=${ACCESS_TOKEN}&count=${count}&offset=${offset}`;
  return http.get(url).then(json => {
    if (json.response === undefined) {
      throw new Error('response is empty');
    }
    return {
      count: json.response.count,
      items: json.response.items.map(item => {
        return {
          id: item.id,
          uri: item.sizes[0].url,
        };
      }),
    };
  });
};