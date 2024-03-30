const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const load = ({ route, method = Method.GET, body = null, errorText }) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if(!response.ok) {
        throw new Error(errorText);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error);
    });

const getPhotos = () =>
  load({ route: Route.GET_DATA, errorText: 'Не удалось загрузить фотографии' });

const uploadNewPhoto = (body) =>
  load({
    route: Route.SEND_DATA,
    method: Method.POST,
    body,
    errorText: 'Не удалось отправить фотографии'
  });

export { getPhotos, uploadNewPhoto };
