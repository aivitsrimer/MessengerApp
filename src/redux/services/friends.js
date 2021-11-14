import * as vk from '../../services/vk';

export const getFriends = () => {
  return vk.friends.get(20);
};
