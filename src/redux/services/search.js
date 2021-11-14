import * as vk from '../../services/vk';

export const getAll = query => {
  return vk.search.getHints(query, vk.search.FILTER_ALL);
};

export const getFriends = query => {
  return vk.search.getHints(query, vk.search.FILTER_FRIENDS);
};

export const getGroups = query => {
  return vk.search.getHints(query, vk.search.FILTER_GROUPS);
};
