let photos = []; // создаем пустой массив

const savePhotos = (newPhotos) => { // запоминаю входящее фото
  photos = newPhotos; // записываю в пустой массив выше
};

// функция которая принимает id
const getPhotoById = (id) => photos.find((photo) => photo.id === id);
// ищем в перезаписанном массиве фото и в нем условие photo.id === id

export {savePhotos, getPhotoById};
