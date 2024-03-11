import {createPhotoCardList} from './photo-card';

// количество отображаемых фото
const photoMock = createPhotoCardList(25);

const renderPhotoMock = () => {
  //шаблон
  const templateElement = document.querySelector('#picture').content.querySelector('.picture');
  // контайнер куда будем загружать фотки
  const container = document.querySelector('.pictures');

  // создам 'черный ящик'
  const listPicturesFragments = document.createDocumentFragment();

  photoMock.forEach((photo) => {
    // склонированный блок из шаблона
    const photoCard = templateElement.cloneNode(true);
    photoCard.href = `${photo.id}`;
    const photoCardImg = photoCard.querySelector('.picture__img');
    photoCardImg.src = photo.url;
    photoCardImg.alt = photo.description;
    photoCard.querySelector('.picture__likes').textContent = photo.likes;
    photoCard.querySelector('.picture__comments').textContent = photo.comments.length;
    listPicturesFragments.append(photoCard);
  });

  container.append(listPicturesFragments);
};

export {photoMock, renderPhotoMock};
