import * as vk from '../../services/vk';

export const getPhotos = () => {
  return vk.photos.getAll(18);
};

export const getMorePhotos = offset => {
  return vk.photos.getAll(18, offset);
};

export const getUserInfo = () => {
  return vk.users.get();
};
