import * as vk from '../../services/vk';

export const getComments = (post_id, owner_id) => {
  return vk.wall.getComments(post_id, owner_id);
};
