export const get = url => {
  return fetch(url)
    .catch(error => {
      throw new Error(error);
    })
    .then(async response => {
      const data = await response.json();
      return data;
    });
};
