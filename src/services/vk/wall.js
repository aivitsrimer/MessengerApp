import * as http from '../http';
import {API_VERSION, ACCESS_TOKEN} from './const';

const PREFIX = 'https://api.vk.com/method/wall';

const parseData = data => {
  return data.items.map(item => {
    let comment = {
      id: item.id,
      source: item.from_id,
      date: item.date,
      textComment: item.text,
      likesCount: item.likes.count,
    };

    if (comment.source > 0) {
      const profile = data.profiles.reduce((result, profileItem) => {
        if (profileItem.id === comment.source) {
          return profileItem;
        }
        return result;
      }, undefined);
      comment.name = `${profile.first_name} ${profile.last_name}`;
      comment.uri = profile.photo_50;
    } else if (comment.source < 0) {
      const group = data.groups.reduce((result, groupItem) => {
        if (groupItem.id === Math.abs(comment.source)) {
          return groupItem;
        }
        return result;
      }, undefined);
      comment.name = group.name;
      comment.uri = group.photo_50;
    }

    return comment;
  });
};

export const getComments = (post_id, owner_id) => {
  const url = `${PREFIX}.getComments?thread=items,count&need_likes=1&extended=1&post_id=${post_id}&owner_id=${owner_id}&v=${API_VERSION}&access_token=${ACCESS_TOKEN}`;

  return http.get(url).then(json => {
    if (json.response === undefined) {
      throw new Error('response is empty');
    }

    return {
      comments: parseData(json.response),
      commentsCount: json.response.count,
    };
  });
};
