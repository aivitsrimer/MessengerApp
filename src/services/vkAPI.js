import {ACCESS_TOKEN} from '@env';
import {vkGetPhotos} from './vkClient';

export const photosGet = () => {
  return vkGetPhotos('?v=5.81&count=18&access_token=' + ACCESS_TOKEN);
};

async function getUser() {
  return await fetch('https://api.vk.com/method/photos.getAll?v=5.81&count=18&access_token=' + ACCESS_TOKEN).then(
    response => response.json(),
  );
}
