import {vkGetPhotos} from './vkClient';

export const photosGet = () => {
  let res = vkGetPhotos({count: 18});
  console.log(res);
  return res;
};

async function getUser() {
  return await fetch('https://api.vk.com/method/photos.getAll?v=5.81&count=18&access_token=').then(response =>
    response.json(),
  );
}
