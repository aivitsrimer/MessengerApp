import * as http from '../http';
import {API_VERSION, ACCESS_TOKEN} from './const';

const PREFIX = 'https://api.vk.com/method/users';
const DEFAULT_FIELDS = 'photo_100,domain,city,country,bdate,counters,career,education,status,exports,site';

export const get = () => {
  const url = `${PREFIX}.get?fields=${DEFAULT_FIELDS}&v=${API_VERSION}&access_token=${ACCESS_TOKEN}`;
  return http.get(url).then(json => {
    if (json.response === undefined) {
      throw new Error('response is empty');
    }
    return {
      info: {
        uri: json.response[0].photo_100,
        name: `${json.response[0].first_name} ${json.response[0].last_name}`,
        account: json.response[0].domain,
        location: `${json.response[0].country.title}, ${json.response[0].city.title}`,
        work: json.response[0]?.career[0] || 'Работа не указана',
        followers: json.response[0].counters?.followers || '0',
        following: json.response[0].counters.friends,
      },
      details: {
        status: json.response[0].status || 'Статус не указан',
        bdate: json.response[0].bdate,
        city: json.response[0].city.title,
        university: json.response[0].university_name || 'Университет не указан',
      },
      links: {
        site: json.response[0].site || 'Сайт не указан',
        twitter: json.response[0].exports?.twitter || 'Twitter не указан',
        instagram: json.response[0].exports?.instagram || 'Instagram не указан',
        facebook: json.response[0].exports?.facebook || 'Facebook не указан',
        telegram: json.response[0].exports?.telegram || 'Telegram не указан',
      },
    };
  });
};
