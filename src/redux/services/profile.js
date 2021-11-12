import * as vk from '../../services/vk';

export const getPhotos = () => {
  return vk.photos.getAll({count: 18});
};

export const getMorePhotos = offset => {
  return vk.photos.getAll({count: 18, offset: offset});
};
