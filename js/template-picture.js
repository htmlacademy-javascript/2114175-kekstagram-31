import {photoCardList} from './photo-card';

//шаблон и индекса
const templateElement = document.querySelector('#picture').content.querySelector('.picture');
// контайнер куда будем загружать фотки
const container = document.querySelector('.pictures');
// количество отображаемых фото
const photoMock = photoCardList(25);
// создам 'черный ящик'
const listPicturesFragments = document.createDocumentFragment();

photoMock.forEach((photo) => {
  // склонированный блок из шаблона
  const photoCard = templateElement.cloneNode(true);
  photoCard.href = `${photo.id}`;
  photoCard.dataset.id = photo.id;
  const photoCardImg = photoCard.querySelector('.picture__img');
  photoCardImg.src = photo.url;
  photoCardImg.alt = photo.description;
  photoCard.querySelector('.picture__likes').textContent = photo.likes;
  photoCard.querySelector('.picture__comments').textContent = photo.comments.length;
  listPicturesFragments.append(photoCard);
  // console.log(photoCard);
});

container.append(listPicturesFragments);

export {container};
