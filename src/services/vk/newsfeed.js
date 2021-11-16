import * as http from '../http';
import {API_VERSION, ACCESS_TOKEN} from './const';

const PREFIX = 'https://api.vk.com/method/newsfeed';

const parseData = data => {
  return data.items
    .map(item => {
      let post = {
        id: item.post_id,
        source: item.source_id,
        date: item.date,
        content: {
          text: item.text,
          images:
            item.attachments
              ?.filter(attachment => attachment.type === 'photo')
              .map(image => image.photo.sizes[image.photo.sizes.length - 1]?.url) || [],
        },
        commentsCount: item.comments.count,
        likesCount: item.likes.count,
      };

      if (post.source > 0) {
        const profile = data.profiles.reduce((result, profileItem) => {
          if (profileItem.id === post.source) {
            return profileItem;
          }
          return result;
        }, undefined);
        post.name = `${profile.first_name} ${profile.last_name}`;
        post.uri = profile.photo_50;
      } else if (post.source < 0) {
        const group = data.groups.reduce((result, groupItem) => {
          if (groupItem.id === Math.abs(post.source)) {
            return groupItem;
          }
          return result;
        }, undefined);
        if (group === undefined) {
          console.log(post);
        }
        post.name = group.name;
        post.uri = group.photo_50;
      }

      return post;
    })
    .filter(item => {
      console.log(item.name, item.content);
      return item.content.text || item.content.images.length > 0;
    });
};

export const get = (count = 20) => {
  const url = `${PREFIX}.get?filters=post&count=${count}&v=${API_VERSION}&access_token=${ACCESS_TOKEN}`;
  return http.get(url).then(json => {
    if (json.response === undefined) {
      throw new Error('response is empty');
    }
    console.log(json.response);
    return {
      posts: parseData(json.response),
      next_from: json.response.next_from,
    };
  });
};
