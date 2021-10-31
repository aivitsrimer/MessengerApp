import {vkGetPhotos} from './vkClient';

export const photosGet = () => {
  return vkGetPhotos({count: 18});
};

async function getUser() {
  return await fetch('https://api.vk.com/method/photos.getAll?v=5.81&count=18&access_token=').then(response =>
    response.json(),
  );
}
