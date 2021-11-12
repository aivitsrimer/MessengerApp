export const get = url => {
  return fetch(url)
    .catch(error => {
      throw new Error(error);
    })
    .then(response => response.json());
};
