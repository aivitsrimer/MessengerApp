import * as vk from '../../services/vk';

export const getPosts = () => {
  return vk.newsfeed.get(20);
};
